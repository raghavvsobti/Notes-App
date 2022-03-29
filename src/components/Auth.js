import classes from "./Auth.module.css";
import axios from "axios";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/index";
import React, { useContext, useState } from "react";

const Auth = () => {
  const { user, setUser } = useContext(authContext);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  console.log(user?.name);
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://assignment-venturepact.herokuapp.com/login",
        {
          email: data.email,
          password: data.password,
        },
        {
          //   withCredentials: true,
        }
      );

      if (res.data.Message === "Successful") {
        setUser(res.data.Data);
        setLoading(false);
        navigate("/notes");
      } else {
        console.log(res.data);
        formik.setErrors({
          unknown: res?.data?.message,
        });
      }
    } catch (err) {
      if (err.response?.data?.error?.body?.details) {
        const errors = {};
        err.response?.data?.error?.body?.details?.forEach((e) => {
          errors[e.context.key] = e.message;
        });
        formik.setErrors(errors);
      } else if (err.response?.data?.message) {
        formik.setErrors({
          unknown: err.response?.data.message,
        });
      } else {
        formik.setErrors({
          unknown: err?.message || "An error occured",
        });
      }
      console.error("[login]", err);
    }
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: onSubmit,
    validationSchema: LoginSchema,
  });

  console.log(formik.errors);

  return (
    <div className={classes.container}>
      <main className={classes.auth}>
        <section>
          <FormikProvider value={formik}>
            <Form>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formik.values.passsword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <button type="submit" className={classes.btn}>
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </Form>
          </FormikProvider>
        </section>
      </main>
    </div>
  );
};

export default Auth;
