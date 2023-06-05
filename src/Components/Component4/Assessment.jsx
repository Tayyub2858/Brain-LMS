import React from "react";
import './AssessmentStyle.css'
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
import ReactPlayer from 'react-player'
import VideoLinks from './VideoData';
import { Grid } from "@material-ui/core";

const Assessment = () => {

    return (
        <>
            <DrawerDasboard componentName={"Assessments"} />

            <div className="video-container">
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="video-player">
                            <ReactPlayer
                                playing={false}
                                muted={false}
                                controls={true}
                                width={'100%'}
                                height='50%'
                                url={VideoLinks[0]}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="video-player">
                            <ReactPlayer
                                playing={false}
                                muted={false}
                                controls={true}
                                width={'100%'}
                                height='50%'
                                url={VideoLinks[1]}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default Assessment;