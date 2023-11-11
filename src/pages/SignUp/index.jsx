import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { REG_EXP } from "../../Utils/validSchem";
import styles from "./style.module.scss";

function SignUp({ setIsLogin }) {
  let initialValues = { mail: "", password: "" };
  const history = useHistory();

  const handleSubmit = (values) => {
    history.push("/");
    setIsLogin(true);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={REG_EXP}
    >
      <div className={styles.loginForm}>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
        />
        <Field
          type="text"
          name="surname"
          placeholder="Surname"
          className={styles.input}
        />
        <div className={styles.errorMsg}>
          <ErrorMessage name="name" component="span" />
          <br />
          <ErrorMessage name="surname" component="span" />
        </div>
        <Form className={styles.form}>
          <Field
            type="text"
            name="mail"
            placeholder="example@mail.com"
            className={styles.input}
          />
          <div className={styles.errorMsg}>
            <ErrorMessage name="mail" component="span" />
          </div>

          <Field
            type="password"
            name="password"
            placeholder="password"
            className={styles.input}
          />
          <div className={styles.errorMsg}>
            <ErrorMessage name="password" component="span" />
          </div>

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </Form>
      </div>
    </Formik>
  );
}

export default SignUp;
