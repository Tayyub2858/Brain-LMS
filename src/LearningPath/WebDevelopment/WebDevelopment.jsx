import React from "react";
import './WebDevelopmentStyle.css';
import WebInput from "./WebDevelopmentInput";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import { Grid , Card } from "@material-ui/core";
import { Link } from "react-router-dom";
const WebDevelopment = () =>{
    return(
        <>
            <DrawerDasboard componentName={"Web Development"}/>
            <div className="webdevelopment-container">
                <Grid container spacing={3}>
                {WebInput.map((course , index)=>(
                  <Grid key={index} item xs={12} sm={12} md={4}>
                    <Card className="webdevelopment-card">
                            <img src={course.img} alt="Watch this course" className="webdevelopment-img" />
                            <h1 className="webdevelopment-title">{course.title}</h1>
                            <Link to={course.link}><button className="webdevelopment-watch-videos">{course.btn}</button></Link>
                    </Card>
                  </Grid>
                ))
                    
                }
                </Grid>
            </div>
        </>
    )
}
export default WebDevelopment;