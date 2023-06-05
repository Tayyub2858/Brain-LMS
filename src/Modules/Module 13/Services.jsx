import React from 'react';
import './ServicesStyle.css';
import { Grid } from '@mui/material';
import { BsArrowRight } from 'react-icons/bs';
import icon1 from '../../Assets/Front-Page/icon_01 (1).png'
import { Link } from 'react-router-dom';
const Services = () => {
    return (
        <>
            <div className="service-container">
                <div className="services-header">
                    <span className='ourservices-title'>Our Services</span>
                    <p className='overservices-text'>it is a long established fact that a reader will be distracted by the <br /> readable contant of a page when looking at its layout.</p>
                </div>
                <div className="services-cards">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sx={12} md={4}>
                            <div className="card-box-frame">
                                <img src={icon1} className='services-icons' alt="Display icons to Provide the Services" />
                                <h1 className='servicescard-title'>UI Design</h1>
                                <p className='servicecard-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                           <Link to=''><button className='servicecard-btn'>Get Started  <span className='servicearrow-btn'><BsArrowRight className='servicesicons'/></span> </button></Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sx={12} md={4}>
                        <div className="card-box-frame">
                                <img src={icon1} className='services-icons' alt="Display icons to Provide the Services" />
                                <h1 className='servicescard-title'>Seo Optimization</h1>
                                <p className='servicecard-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                           <Link to=''><button className='servicecard-btn'>Get Started  <span className='servicearrow-btn'><BsArrowRight className='servicesicons'/></span> </button></Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sx={12} md={4}>
                        <div className="card-box-frame">
                                <img src={icon1} className='services-icons' alt="Display icons to Provide the Services" />
                                <h1 className='servicescard-title'>Wireframe Design</h1>
                                <p className='servicecard-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                           <Link to=''><button className='servicecard-btn'>Get Started  <span className='servicearrow-btn'><BsArrowRight className='servicesicons'/></span> </button></Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sx={12} md={4}>
                        <div className="card-box-frame">
                                <img src={icon1} className='services-icons' alt="Display icons to Provide the Services" />
                                <h1 className='servicescard-title'>Graphic Design</h1>
                                <p className='servicecard-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                           <Link to=''><button className='servicecard-btn'>Get Started  <span className='servicearrow-btn'><BsArrowRight className='servicesicons'/></span> </button></Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sx={12} md={4}>
                        <div className="card-box-frame">
                                <img src={icon1} className='services-icons' alt="Display icons to Provide the Services" />
                                <h1 className='servicescard-title'>App Design</h1>
                                <p className='servicecard-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                           <Link to=''><button className='servicecard-btn'>Get Started  <span className='servicearrow-btn'><BsArrowRight className='servicesicons'/></span> </button></Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sx={12} md={4}>
                        <div className="card-box-frame">
                                <img src={icon1} className='services-icons' alt="Display icons to Provide the Services" />
                                <h1 className='servicescard-title'>Web Design</h1>
                                <p className='servicecard-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                           <Link to=''><button className='servicecard-btn'>Get Started  <span className='servicearrow-btn'><BsArrowRight className='servicesicons'/></span> </button></Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}
export default Services