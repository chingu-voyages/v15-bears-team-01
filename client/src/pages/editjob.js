import React from "react";
import EditJobForm from "../components/EditJobForm";
import styles from "../components/EditJobForm/editjobform.module.css";

const EditJob = props => {
  let job = props.location.state.job;

  return (
    <div className={`container`}>
      <div className="row">
        <div className={`twelve columns  ${styles.addJobContainer}`}>
          <h3>Edit Job</h3>
          <EditJobForm job={job} />
        </div>
      </div>
    </div>
  );
};

export default EditJob;
