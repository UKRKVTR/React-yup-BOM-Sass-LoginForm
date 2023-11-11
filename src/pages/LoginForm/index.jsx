import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { REG_EXP } from "../../Utils/validSchem";
import styles from "./style.module.scss";
function Login({ setIsLogin }) {
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
        <Form className={styles.form}>
          <Field
            type="text"
            name="mail"
            placeholder="example@mail.com"
            className={styles.input}
          />
          <div className={styles.errorMsg}>
            <ErrorMessage
              name="mail"
              component="span"
              className={styles.errorMsg}
            />
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

export default Login;
