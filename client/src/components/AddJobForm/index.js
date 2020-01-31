import React, { useState } from "react";
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

  let formFields = [
    {
      name: "position",
      labelInnerText: "Position",
      initialValue: "",
      type: "input"
    },
    {
      name: "company",
      labelInnerText: "Company",
      initialValue: "",
      type: "input"
    },
    {
      name: "status",
      labelInnerText: "Status",
      initialValue: "",
      type: "select"
    },
    {
      name: "date_applied",
      labelInnerText: "Date Applied",
      initialValue: "",
      type: "date"
    },
    {
      name: "point_of_contact",
      labelInnerText: "Point of Contact",
      initialValue: "",
      type: "input"
    },
    {
      name: "poc_email",
      labelInnerText: "Point of Contact Email",
      initialValue: "",
      type: "email"
    },
    {
      name: "poc_phone",
      labelInnerText: "Point of Contact Phone",
      initialValue: "",
      type: "tel"
    },
    {
      name: "location",
      labelInnerText: "Location",
      initialValue: "",
      type: "input"
    },
    {
      name: "notes",
      labelInnerText: "Notes",
      initialValue: "",
      type: "textarea"
    }
  ];

  let formikInitialValues = {};

  formFields.forEach(
    field => (formikInitialValues[field.name] = field.initialValue)
  );

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
        initialValues={formikInitialValues}
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
            {formFields.map((field, index) => (
              <React.Fragment key={index}>
                <label htmlFor={field.name}>{field.labelInnerText}</label>
                <input
                  className={styles.form_input}
                  name={field.name}
                  id={field.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[field.name]}
                />
                {errors[field.name] && touched[field.name] && (
                  <span className={styles.error_text}>
                    {errors[field.name]}
                  </span>
                )}
              </React.Fragment>
            ))}
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
