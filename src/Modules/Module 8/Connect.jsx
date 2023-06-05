import React from 'react';
import { Grid } from '@mui/material';
import './ConnectStyles.css';
// import Chat from '../../Assets/Front-Page/Chat.png';
// import Instructors from '../../Assets/Front-Page/Instructors.png'
import Tahir from '../../Assets/Profiles/Tahir-Aziz.png';
import AbdulKhaliq from '../../Assets/Profiles/Abdul-Khaliq.png';
import Hasnat from '../../Assets/Profiles/Hasnat.png';
import MohandAlJahdali from '../../Assets/Profiles/Mohand-Al-Jahdali.png';
import Saif from '../../Assets/Profiles/Saif.png';
import Tayyub from '../../Assets/Profiles/Tayyub.png';
import Shoukat from '../../Assets/Profiles/Shoukat.png';
// import Alisha from '../../Assets/Profiles/Alisha.png'
const Connect = () => {
    return (
        <>
            <div className="connect-top-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="connect-txt-container">
                            <p className="connect-title-top">
                                Connect
                            </p>
                            <h1 className="connect-top-heading">
                                Learn from world-class instructors
                            </h1>
                            <p className="connect-top-txt">
                                Connect with our team of certified experts and award-winning instructors, here to help you build the exact skills you need to launch your career.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <div data-aos='fade-up' data-aos-duration='2000' className="profile-img-container">
                            <Grid container justifyContent='center'>
                                <Grid item xs={1} sm={1} md={1}>
                                    <img  src={Saif} alt="Saif Ur Rehman" title="Saif Ur Rehman (Graphic Designer)" className="instructors-img" />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}>
                                    <img src={Hasnat} alt="Mohammad Hasnat" title="Mohammad Hasnat (Software Engineer)" className="instructors-img" />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}>
                                    <img src={Tayyub} alt="Tayyub Rafique" title="Tayyub Rafique (Software Engineer)" className="instructors-img" />
                                </Grid>
                                <Grid item xs={1} sm={1} md={2}>
                                    <img src={Tahir} alt="Tahir Abdul Aziz" title="Tahir Abdul Aziz (CA, CEO Brain Analytics)" className="instructors-img" />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}>
                                    <img src={AbdulKhaliq} alt="Abdul Khaliq" title="Abdul Khaliq (COO, Brain Analytics) " className="instructors-img" />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}>
                                    <img src={Shoukat} alt="Shoukat" title="Shoukat (Software Engineer)" className="instructors-img" />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}>
                                    <img src={MohandAlJahdali} alt="Mohand Al Jahdali" title="Mohand Al Jahdali" className="instructors-img" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Connect