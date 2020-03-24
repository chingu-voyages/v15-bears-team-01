import React from "react";
import AddJobForm from "../components/AddJobForm";
import styles from "../components/AddJobForm/addjobform.module.css";

const AddJob = props => {
  return (
    <div className={`container`}>
      <div className="row">
        <div className={`twelve columns  ${styles.addJobContainer}`}>
          <h3>Add Job</h3>
          <AddJobForm />
        </div>
      </div>
    </div>
  );
};

export default AddJob;
