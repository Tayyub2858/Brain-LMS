import React from "react";
import './AdvanceFinancStyle.css'
import AdvenceFinicInput from "./AdvanceFinanInput";
import ReactPlayer from "react-player";
import DrawerDasboard from "../../../Modules/Drawer/DasboardDrawer";
const AdevenceFinanceShowVideo = () =>{
    return(
        <>
        <DrawerDasboard componentName={"Advence Finance Videos"}/>
        <div className="advancefinance-container">
            
        
        {AdvenceFinicInput.map((course,index)=>(
                <div key={index} className="financevideo">
                    <h1>{course.title}</h1>
                    <ReactPlayer
                    playing={false}
                    muted={false}
                    controls={true}
                    width={'50%'}
                    height='50%'
                    url={course.video}
                    />
                </div>
                ))

            }
            </div>
        </>
    )
}
export default AdevenceFinanceShowVideo;