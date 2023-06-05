import React from "react";
import './software.css'
import { Grid } from "@mui/material";
import VA from '../../Assets/Front-Page/assistant.png';
import PowerBi from '../../Assets/Front-Page/data-analysis.png';
import video from '../../Assets/Front-Page/video-editing.png';
import graphic from '../../Assets/Front-Page/graphic-design.png';
import webDev from '../../Assets/Front-Page/web-development.png';
import mobileApp from '../../Assets/Front-Page/mobile-app.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";

const Software = () => {
    return (
        <>
            <div className="software-container">
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="software-slide-container">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={VA} alt="companies" className="software-img" />
                                    <p className="software-txt">Virtual Assitant</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={PowerBi} alt="companies" className="software-img" />
                                    <p className="software-txt">Data Analysis</p>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={video} alt="companies" className="software-img" />
                                    <p className="software-txt">Video Editing</p>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={graphic} alt="companies" className="software-img" />
                                    <p className="software-txt">Graphic Designing</p>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={webDev} alt="companies" className="software-img" />
                                    <p className="software-txt">Web App Development</p>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={mobileApp} alt="companies" className="software-img" />
                                    <p className="software-txt">Mobile App Development</p>

                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default Software;