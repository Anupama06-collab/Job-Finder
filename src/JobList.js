import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";  // we’ll style here

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Job Listings</h1>
      {jobs.map(job => (
        <div key={job._id} className="job-card">
          <h2>{job.title} - {job.company}</h2>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}
export default JobList;
