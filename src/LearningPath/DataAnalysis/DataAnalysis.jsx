import React  from "react";
import './DataAnalysisStyle.css';
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import { Grid ,Card } from "@material-ui/core";
import DataAnalysisinput from "./DataAnalysisinput";
import {Link} from "react-router-dom";
const DataAnalysis = () => {
    // console.log(ShowTitle)
    // const [state , setstate] = useState(" ");
    // console.log(state);
   
    return (
        <>  
            <DrawerDasboard componentName={"DataAnalysis"} />
            <div className="dataAnalysis-container">
                <Grid container spacing={3}>
                {DataAnalysisinput.map((course, index) => (
                        <Grid key={index} item xs={12} sm={12} md={4}>
                            <Card className="DataAnalysis-card">
                                <img src={course.img} alt="Watch this course" className="datanalysis-img" />
                                <h1 className="dataanalysis-title">{course.title}</h1>
                                <Link to={course.link}><button className="dataanalysis-watch-videos" >{course.btn}</button></Link>
                            </Card>
                        </Grid>
                    ))
                    }
                </Grid>
            </div>

    
        </>
    )
}
export default DataAnalysis;