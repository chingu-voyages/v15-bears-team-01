import React, { useContext, useState } from "react";
import AuthContext from "../../utils/auth_context";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./addjobform.module.css";
import axios from "axios";

const AddJobSchema = Yup.object().shape({
  position: Yup.string()
    .min(3, "Position must be at least 3 characters")
    .max(50, "Position Name Too Long")
    .required("Position Required"),
  company: Yup.string(),
  status: Yup.string(),
  date_applied: Yup.string(),
  point_of_contact: Yup.string(),
  poc_email: Yup.string(),
  poc_phone: Yup.string(),
  location: Yup.string(),
  notes: Yup.string()
});

const user = {
  email: "mock@email.com",
  username: "username",
  id: 1
};

const AddJobForm = () => {
  const [loading, setLoading] = useState(false);
  const [resMessage, setresMessage] = useState(null);
  const context = useContext(AuthContext);

  const handleSubmit = values => {
    setLoading(true);
    // const data = {
    //   position,
    //   company,
    //   status,
    //   date_applied,
    //   point_of_contact,
    //   poc_email,
    //   poc_phone,
    //   location,
    //   notes
    // };

    let position = values.position;

    let data = {
      user_id: user.id,
      position
    };

    let handleRes = res => {
      setLoading(false);
      console.log(res);
      setresMessage("Successfully Submited Job");
    };

    let handleErr = err => {
      console.log(err);
      setLoading(false);
      setresMessage("Request Failed Please Try Again");
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/users/addJob`, data)
      .then(res => handleRes(res))
      .catch(err => handleErr(err));
  };

  return (
    <div>
      {loading && (
        <>
          <div className={styles.loader}></div>
          <div className={styles.loading_background}></div>
        </>
      )}
      <h3>{resMessage}</h3>
      <Formik
        initialValues={{ position: "" }}
        validationSchema={AddJobSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="position">Position:</label>
            <input
              className={styles.form_input}
              name="position"
              id="position"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.position}
            />
            {errors.position && touched.position && (
              <span className={styles.error_text}>{errors.position} </span>
            )}
            <button
              type="submit"
              className={styles.form_button}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddJobForm;
