import "./signup.css";
import * as Yup from "yup";
// import {useState} from 'react'
import { useFormik } from "formik";

function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required").min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,19}$/,
          "Pw must be 7-19 characters and contain at least 1 letter, 1 number and a special character"
        ),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password is not match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (value) => {
        alert("Form submitted successfully")
      console.log(value);
    },
  });
//   console.log(formik.errors.email);

  return (
    <section>
      <form className="infoForm" onSubmit={formik.handleSubmit}>
        <label>Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <p className = "errorMsg">{formik.errors.name}</p>}
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <p className = "errorMsg">{formik.errors.email}</p>}
        <label>Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && <p className = "errorMsg">{formik.errors.phone}</p>}
        <label>Your password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && <p className = "errorMsg">{formik.errors.password}</p>}
        <label>Confirm password</label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          placeholder="Confirm your password"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmedPassword && <p className = "errorMsg">{formik.errors.confirmedPassword}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default SignUpForm;
