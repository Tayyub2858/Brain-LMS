import React from "react";
import "./dreamjob.css";
import Learnimg from "../../Assets/Front-Page/Learn.png";
import Createimg from "../../Assets/Front-Page/Create.png";
import Connectimg from "../../Assets/Front-Page/Connect.png";
import { Grid } from "@mui/material";

const DreamJob = () => {
  return (
    <>
      <div className="dreem-container">
        <div className="maven-job">
          <span>WHY BRAIN ANALYTICS?</span>
          <h1>
            Enhance Your Skills and Transform Your Future with Our Dynamic
            Learning Platform
          </h1>
          <p>
            At Brain Analytics, we recognize the importance of accommodating
            individual learning styles and schedules. That's why we offer
            flexible learning options, including both self-paced and interactive
            sessions, to meet your needs. Our team of experts is dedicated to
            providing you with the support and guidance you need to have a
            positive and successful learning experience. With a proven track
            record of helping over 1,000,000 students launch or accelerate their
            careers, you can trust in Brain Analytics to support your growth and
            development.
          </p>
        </div>
        {/* job create */}

        <div className="create-job-container">
          <Grid container>
            <Grid item xs={12} sm={12} md={4}>
              <div className="job-learn">
                <img src={Createimg} alt="Create Jobs" className="imgjob" />
                <h1 className="job-card-heading">Create</h1>
                <p className="job-card-txt">
                  Apply your skills to real projects. and
                  create a portfolio to showcase your
                  work to peers and employers
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="job-learn">
                <img src={Learnimg} alt="Learn Jobs" className="imgjob" />
                <h1 className="job-card-heading">Learn</h1>
                <p className="job-card-txt">
                  Build job-ready skills with award-
                  winning courses and personalized, goal-
                  oriented learning plans
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="job-learn">
                <img src={Connectimg} alt="Connect Jobs" className="imgjob" />
                <h1 className="job-card-heading">Connect</h1>
                <p className="job-card-txt">
                  Join a diverse, global community of data
                  professionals, and connect with top
                  analysts from around the world
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default DreamJob;
