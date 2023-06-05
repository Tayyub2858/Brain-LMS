import React from "react";
import './DataAnalysisShowVideoStyle.css';
import ReactPlayer from "react-player";
// import DataAnalysisVideo from "./DataAnalysis-Video";
import DrawerDasboard from "../../../Modules/Drawer/DasboardDrawer";
import { Grid } from "@material-ui/core";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
// import {LinearProgress} from "@material-ui/core";
import DataAnalysisVideoIntro from "./IntroVideo";
import OrientationVideo from "./OrientationVideo";
import TransferData from "./TransferData";
import ShowTitleInput from "./ShowTitleInput";
const DataAnalysisShowVideo = () => {

    const {
        visible,
        videos,
        setVideos,
        handleprogress,
        clickbutton,
        transferHandler,
        introHandler,
        transfervisibility,
        introvisibilty
    } = ShowTitleInput()
    return (
        <>
            <DrawerDasboard className="top-nav-bar" componentName={"Data Analysis Vides"} />
            <div className="showvdieo-container">
                <Grid container>
                    <Grid item sx={12} sm={12} md={4}>
                        <div className="content-container">
                            <button className="content-btn" onClick={clickbutton}>Data analysis and PBI{visible ? <AiOutlineMinusCircle style={{ color: 'red', fontSize: '20px', position: 'absolute', left: '24%' }} /> : <AiOutlinePlusCircle style={{ color: 'green', fontSize: '20px', position: 'absolute', left: '24%' }} />}</button>
                            {visible ?
                                <div className="lecture-content-video">
                                    {DataAnalysisVideoIntro.map((coursevideo, index) => (
                                        <div key={index} >
                                            <button className="content-lect-btn" onClick={() => setVideos(coursevideo.video)}>{coursevideo.title}</button>
                                        </div>
                                    ))
                                    }
                                </div>
                                : null}
                            <button className="content-btn" onClick={introHandler}>Introduction{introvisibilty ? <AiOutlineMinusCircle style={{ color: 'red', fontSize: '20px', position: 'absolute', left: '24%' }} /> : <AiOutlinePlusCircle style={{ color: 'green', fontSize: '20px', position: 'absolute', left: '24%' }} />}</button>
                            {introvisibilty ?
                                <div className="lecture-content-video">
                                    {OrientationVideo.map((coursevideo, index) => (
                                        <div key={index} >
                                            <button className="content-lect-btn" onClick={() => setVideos(coursevideo.video)}>{coursevideo.title}</button>
                                        </div>
                                    ))
                                    }
                                </div>
                                : null}
                            <button className="content-btn" onClick={transferHandler}>Connecting, Cleaning <br /> & transforming Data{transfervisibility ? <AiOutlineMinusCircle style={{ color: 'red', fontSize: '20px', position: 'absolute', left: '24%' }} /> : <AiOutlinePlusCircle style={{ color: 'green', fontSize: '20px', position: 'absolute', left: '24%' }} />}</button>
                            {transfervisibility ?
                                <div className="lecture-content-video">
                                    {TransferData.map((coursevideo, index) => (
                                        <div key={index} >
                                            <button className="content-lect-btn" onClick={() => setVideos(coursevideo.video)}>{coursevideo.title}</button>
                                        </div>
                                    ))
                                    }
                                </div>
                                : null}
                        </div>

                    </Grid>
                    <Grid item sx={12} sm={12} md={8}>
                        <div className="display-video-box">
                            <div className="show-video-box">

                                <ReactPlayer
                                    className="video-player"
                                    playing={false}
                                    muted={false}
                                    controls={true}
                                    width={'70%'}
                                    height={'50%'}
                                    url={videos}
                                    config={{
                                        file: {
                                            attributes: {
                                                onContextMenu: e => e.preventDefault()
                                            }
                                        }
                                    }}
                                />
                                <div className="complete-btn-box">
                                    <button className="completed-video" onClick={() => handleprogress(10)}>Mark Done</button>
                                </div>
                                <div>
                                    {/* <LinearProgress variant="determinate" style={{backgroundColor:"linear-gradient(to right, #66b9f0 0%, #faca28 100%)"}} value={progress} max='100'/> */}
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>


        </>
    )
}
export default DataAnalysisShowVideo;