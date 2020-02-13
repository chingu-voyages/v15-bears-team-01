import React, { useContext, useState } from "react";
import AddJobForm from "../components/AddJobForm";
import GetJobs from "../components/GetJobs";

const Profile = () => {
  return(
  <>
    <AddJobForm />
    <GetJobs />
  </>);
};

export default Profile;
