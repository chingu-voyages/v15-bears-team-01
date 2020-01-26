import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const user = {
  email: "mock@email.com",
  username: "username",
  id: 1
};

const JobList = ({ job }) => {
  const editJob = () => {};

  const deleteJob = () => {
    let handleRes = res => {
      console.log(res);
    };

    let handleErr = err => {
      console.log(err);
    };

    let data = {
      user_id: user.id
    };

    axios
      .delete(
        `${process.env.REACT_APP_SERVER_URL}/api/users/deleteJob/${job.id}`,
        { data }
      )
      .then(res => handleRes(res))
      .catch(err => handleErr(err));
  };

  return (
    <div>
      <h3>{job.position}</h3>
      <p>{job.company}</p>
      <Link to={{ pathname: `/editjob/${job.id}`, state: { job: job } }}>
        <button>Edit Job</button>
      </Link>
      <button onClick={deleteJob}>Delete Job</button>
    </div>
  );
};

export default JobList;
