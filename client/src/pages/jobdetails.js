import React from "react";
import { Link } from "react-router-dom";
import JobDetail from "../components/JobDetail";
import styles from "../components/JobDetail/jobdetail.module.css";

const JobDetails = props => {
  let job = props.location.state.job;
  return (
    <div className={`container`}>
      <div className="row">
        <div className={`twelve columns ${styles.detailContainer}`}>
          <h3>Job Details</h3>
          <JobDetail job={job} />
          <div className={`twelve columns ${styles.detailButtons}`}>
            <Link to="/profile" className={styles.detailButton}>
              Back
            </Link>
            <Link
              to={{ pathname: `/editjob/${job.id}`, state: { job: job } }}
              className={styles.detailButton}
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
