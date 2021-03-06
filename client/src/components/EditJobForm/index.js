import React, { useContext, useState } from "react";
import AuthContext from "../../utils/auth_context";
import { Formik } from "formik";
import axios from "axios";
import DatePicker from "react-datepicker";

import { formValidationSchema as EditJobSchema, formFields } from "../../utils/job_form_snippets";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./editjobform.module.css";

const user = {
  email: "mock@email.com",
  username: "username",
  id: 1
};

const EditJobForm = ({ job }) => {
  const { id } = job;
  const [loading, setLoading] = useState(false);
  const [resMessage, setresMessage] = useState(null);
  const context = useContext(AuthContext);

  const handleSubmit = values => {
    setLoading(true);

    let data = {
      user_id: user.id,
      ...values
    };

    let handleRes = res => {
      setLoading(false);
      console.log(res);
      setresMessage("Successfully Edited Job");
    };

    let handleErr = err => {
      console.log(err);
      setLoading(false);
      setresMessage("Request Failed Please Try Again");
    };

    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/api/users/updateJob/${id}`,
        data
      )
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
        initialValues={{
          ...job,
          date_applied: new Date(Date.parse(job.date_applied))
        }}
        validationSchema={EditJobSchema}
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
                <label className={styles.input_label} htmlFor={field.name}>{field.labelInnerText}</label>
                {/* Syntax below means that the switch function is defined, then immediately executed. */}
                {(() => {
                  switch (field.type) {
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
                          className={styles.form_input + ' ' + styles.form_date_picker}
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
                <div className={styles.error_container}>
                  {errors[field.name] && touched[field.name] && (
                    <span className={styles.error_text}>
                      {errors[field.name]}
                    </span>
                  )}
                </div>
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

export default EditJobForm;
