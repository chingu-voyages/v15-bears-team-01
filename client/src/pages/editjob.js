import React from "react";
import EditJobForm from "../components/EditJobForm";

const EditJob = props => {
  let job = props.location.state.job;

  return (
    <div>
      <EditJobForm job={job} />
    </div>
  );
};

export default EditJob;
