import React from 'react';
import { Grid } from '@mui/material';
import './CompaniesStyles.css';
import cat from '../../Assets/Front-Page/Kinan.png';
import coke from '../../Assets/Front-Page/PetroRabigh.png';
import kpmg from '../../Assets/Front-Page/SAL.png';
import mk from '../../Assets/Front-Page/Sadaqat.png';
import ZJ from '../../Assets/Front-Page/ZahidJameel.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";

const Companies = () => {
    return (
        <>
            <div className="companies-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={5}>
                        <div className="left-companies-container">
                            <h2 className="companies-heading">
                                Trusted By Top Companies To  Upskill Their Teams
                            </h2>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <div className="right-companies-container">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={3}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >

                                <SwiperSlide>

                                    <img src={cat} alt="companies" className="companies-img" />

                                </SwiperSlide>
                                <SwiperSlide>

                                    <img src={mk} alt="companies" className="companies-img" />

                                </SwiperSlide>
                                <SwiperSlide>

                                    <img src={ZJ} alt="companies" className="companies-img" />

                                </SwiperSlide>
                                <SwiperSlide>

                                    <img src={coke} alt="companies" className="companies-img" />

                                </SwiperSlide>
                                <SwiperSlide>

                                    <img src={kpmg} alt="companies" className="companies-img" />

                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Companies;