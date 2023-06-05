import React from "react";
import './DigitalMarketingStyle.css';
import DigitalMarketinginput from "./DigitalMarketingInput";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import { Card, Grid } from "@material-ui/core";

const DigitalMarketing = () =>{
    return(
        <>
            <DrawerDasboard componentName={"Digital Marketing"}/>
            <div className="marketing-container">
                <Grid container spacing={3}>
                {DigitalMarketinginput.map((course , index)=>(
                  <Grid key={index} item xs={12} sm={12} md={3}>
                    <Card className="digitalmarketing-card">
                            <img src={course.img} alt="Watch this course" className="digitalmarketing-img" />
                            <h1 className="digitalmarketing-title">{course.title}</h1>
                                    <div className="learning-video-weeks">
                                    <div className="learning-videos">
                                        <p className="learning-durtion-weeks">{course.duration}</p>
                                        <p className="learning-duration">Weeks Duration</p>
                                    </div>
                                    <div className="learning-videos">
                                        <p className="learning-course-videos">{course.videos}</p>
                                        <p className="learning-video">Videos</p>
                                    </div>
                                    </div>
                            <button className="digitalmarketing-watch-videos">{course.btn}</button>
                    </Card>
                  </Grid>
                ))
                    
                }
                </Grid>
            </div>
            
        </>
    )
}
export default DigitalMarketing;