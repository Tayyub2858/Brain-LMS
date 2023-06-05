import React from "react";
import "./CoursesStyles.css";
import { Grid, Card } from "@material-ui/core";
import Data from "./CourseData";
import CourseDetails from "./CourseDetails";
import { ApiUrl } from "../../Apis/ApiUrl";
const CourseCard = () => {
  const{coursecards}  = Data();
  return (
    <>
      <div className="course-card-container">
        <Grid container>
          {coursecards && coursecards.length > 0 &&  coursecards.map((course, i) => (
            <Grid key={i} item xs={12} sm={12} md={4}>
              <Card className="course-card">
                <img

                src={`${ApiUrl}/`+course.image} 
                  alt="course-img"
                  className="course-card-img"
                />
                <h2 className="course-card-title">
                  {course.title}
                </h2>
                <p className="course-desc">
                  {course.desc}
                </p>
                <CourseDetails />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default CourseCard;
