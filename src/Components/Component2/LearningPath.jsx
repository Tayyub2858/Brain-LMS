import React from "react";
import './LearningpathStyle.css'
import LearningData from "./LearningData";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import { ApiUrl } from "../../Apis/ApiUrl";
import { Grid, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
const LearningPath = () => {
    const { learningpathcard, } = LearningData();
    console.log(learningpathcard);
    return (
        <>
       
            <DrawerDasboard componentName={"Learning Path"} />
            <div className="learningpath-container">
                <Grid container spacing={2}>    
                    {learningpathcard && learningpathcard.length > 0 && learningpathcard.map((course, index) => (
                        <Grid key={index} item xs={12} sm={12} md={3}>
                            
                            <Card className="learning-card">
                                <img

                                    src={`${ApiUrl}/` + course.image}
                                    alt="course-img"
                                    className="course-card-img"
                                />
                                <h2 className="learning-course-title">{course.title}</h2>
                                <div className="learning-video-weeks">
                                    <div className="learning-videos">
                                        <p className="learning-durtion-weeks">{course.totalweeks}</p>
                                        <p className="learning-duration"> Weeks Duration</p>

                                    </div>
                                    <div className="learning-videos">
                                        <p className="learning-course-videos">{course.totalvideos}</p>
                                        <p className="learning-video">Videos</p>
                                    </div>
                                </div>
                                {/* <button className="course-stat-btn">{course.btn}</button> */}
                                <Link className="course-stat-btn" to={course.courselink}>Start Course</Link>
                            </Card>
                        </Grid>
                    ))

                    }
                </Grid>
            </div>

        </>
    )
}
export default LearningPath;