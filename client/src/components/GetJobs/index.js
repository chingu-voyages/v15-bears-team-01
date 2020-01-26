import React, { useEffect, useState } from "react";
import axios from "axios";
import JobList from "../JobList";

const user = {
  email: "mock@email.com",
  username: "username",
  id: 1
};

const GetJobs = () => {
  const [jobs, setJobs] = useState(null);

  const fetchJobs = () => {
    let handleRes = res => {
      console.log(res);
      setJobs(res.data);
    };

    let handleErr = err => {
      console.log(err);
    };

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/users/getJob/${user.id}`)
      .then(res => handleRes(res))
      .catch(err => handleErr(err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <br />
      <br />
      {jobs
        ? jobs.map(job => {
            return <JobList job={job} key={jobs.id} />;
          })
        : null}
    </div>
  );
};

export default GetJobs;
