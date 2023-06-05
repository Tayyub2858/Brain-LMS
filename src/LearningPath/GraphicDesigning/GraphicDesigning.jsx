import React from "react";
import './GraphicDesigningStyle.css'
import GraphicDesigningInput from "./GraphicDesigningInput";
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import { Grid , Card } from "@material-ui/core";
const GraphicDesigning = () =>{
    return(
        <>
            <DrawerDasboard componentName={"Graphic Designing"}/>
            <div className="graphicdesning-container">
                <Grid container spacing={3}>
                {GraphicDesigningInput.map((course , index)=>(
                  <Grid key={index} item xs={12} sm={12} md={3}>
                    <Card className="graphicdesning-card">
                            <img src={course.img} alt="Watch this course" className="graphicdesning-img" />
                            <h1 className="graphicdesning-title">{course.title}</h1>
                            <button className="graphicdesning-watch-videos">{course.btn}</button>
                    </Card>
                  </Grid>
                ))
                    
                }
                </Grid>
            </div>
        </>
    )
}
export default GraphicDesigning;