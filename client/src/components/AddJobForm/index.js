import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import DatePicker from "react-datepicker";

import styles from "./addjobform.module.css";
import "react-datepicker/dist/react-datepicker.css";

const AddJobSchema = Yup.object().shape({
  position: Yup.string()
    .min(3, "Position must be at least 3 characters.")
    .max(50, "Position name has too many characters.")
    .required("Job position required!"),
  company: Yup.string()
    .min(3, "Company name must be at least 3 characters.")
    .max(50, "Company name has too many characters.")
    .required("Company name required!"),
  status: Yup.string()
    .required("Job status must be Green, Red, or Yellow."),
  date_applied: Yup.date("Application date must be a valid date.")
    .required("Date of application required!"),
  point_of_contact: Yup.string(),
  poc_email: Yup.string()
    .email("Please enter a valid e-mail address."),
  poc_phone: Yup.string(),
  location: Yup.string(),
  notes: Yup.string()
    .max(255, "Too many characters.")
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

    let data = {
      user_id: user.id,
      ...values
    };

    console.log(data);

    let handleRes = res => {
      setLoading(false);
      console.log(res);
      setresMessage("Successfully Submitted Job");
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

  // the component takes this array and creates <input> components for data entry.
  // in the next pull request, AddJobForm will create <select> and datepicker elements depending on the 'type' key below.
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
      initialValue: "Red",
      type: "select",
      options: ["Green", "Yellow", "Red"]
    },
    {
      name: "date_applied",
      labelInnerText: "Date Applied",
      initialValue: new Date(),
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
      type: "input"
    },
    {
      name: "poc_phone",
      labelInnerText: "Point of Contact Phone",
      initialValue: "",
      type: "input"
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

  // generate default values for Formik
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
          isSubmitting,
          setFieldValue
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            {formFields.map((field, index) => (
              <React.Fragment key={index}>
                <label htmlFor={field.name}>{field.labelInnerText}</label>
                {(() => {
                  switch(field.type) {
                    case "input":
                      return (
                        <input
                          className={styles.form_input}
                          name={field.name}
                          id={field.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values[field.name]}
                        />
                      );

                    case "date":
                      return (
                        <DatePicker
                          selected={values[field.name]}
                          name={field.name}
                          id={field.name}
                          onChange={date => setFieldValue(field.name, date)}
                        />
                      );

                    case "select":
                      const options = field.options.map((option, index) => (
                        <option value={option} key={index}>
                          {option}
                        </option>
                      ));

                      return (
                        <select
                          id={field.name}
                          name={field.name}
                          value={values[field.name]}
                          onChange={handleChange}
                        >
                          {options}
                        </select>
                      );

                    case "textarea":
                      return (
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={values[field.name]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      );

                    default:
                      return <>Error rendering form input.</>;
                  }
                })()}
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
