import React from "react";
import './FinancialPlanningStyle.css';
import FinancialInput from "./FinancialPlanningInput";
import DrawerDasboard from "../../../Modules/Drawer/DasboardDrawer";
import ReactPlayer from "react-player";


const FinancialPlanning = () =>{
    return(
        <>
            <DrawerDasboard componentName={"Financial Planning Videos"}/>
                <div className="Financeplanning-continer">
                {FinancialInput.map((course,index)=>(
                <div key={index} className="financeplanningvideo">
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
export default FinancialPlanning;