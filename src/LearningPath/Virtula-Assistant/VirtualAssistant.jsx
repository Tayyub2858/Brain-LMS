import React from "react";
import './VirtualAssistantStyle.css';
import VirtualInput  from "./VirtualAssistantInput";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import { Grid , Card } from "@material-ui/core";
// import { Link } from "react-router-dom";
const VirtualAssistant = () =>{
    return(
        <>
            <DrawerDasboard componentName={"Virtual Assistant"}/>
            <div className="virtualassistant-container">
                <Grid container spacing={3}>
                {VirtualInput.map((course , index)=>(
                  <Grid key={index} item xs={12} sm={12} md={3}>
                    <Card className="virtualassistant-card">
                            <img src={course.img} alt="Watch this course" className="virtualassistant-img" />
                            <h1 className="virtualassistant-title">{course.title}</h1>
                            <button className="virtualassistant-watch-videos">{course.btn}</button>
                    </Card>
                  </Grid>
                ))
                    
                }
                </Grid>
            </div>
        </>
    )
}
export default VirtualAssistant;