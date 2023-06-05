import React from "react";
import './BlogSliderStyles.css'
import img1 from '../../../Assets/Blog/DS_BI_Thumb.png';
import img2 from '../../../Assets/Blog/EntryLevelDataAnalyst.png';
import img3 from '../../../Assets/Blog/ML_for_BI.png';
import img4 from '../../../Assets/Blog/Career_Launchpad.png';
import img5 from '../../../Assets/Blog/portfolio_showdown_square.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import { Grid } from "@material-ui/core";

const BlogSlider = () => {
    return (
        <>
            <div className="slider-Container">

                <Swiper spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="slider-container-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className="slider-box-left">
                                        <p className="left-side-title">BUSINESS INTELLIGENCE CAREERS</p>
                                        <h1 className="left-side-heading">Introducing : BRAIN SHOWCASE</h1>
                                        <button className="slider-left-btn">READ ARTICLE</button>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className="slider-box-right">
                                        <img src={img4} alt="DisplaySlider" className="slider-img" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className="slider-box-left">
                                        <p className="left-side-title">BUSINESS INTELLIGENCE CAREERS</p>
                                        <h1 className="left-side-heading">Introducing the Maven Portfolio Showdown</h1>
                                        <button className="slider-left-btn">READ ARTICLE</button>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className="slider-box-left">
                                        <img src={img5} alt="Display" className="slider-img" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className="slider-box-left">
                                        <p className="left-side-title">BUSINESS INTELLIGENCE CAREERS</p>
                                        <h1 className="left-side-heading">10 Career Tips For Entry Lavel Data Analyst Job Seekers</h1>
                                        <button className="slider-left-btn">READ ARTICLE</button>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className="slider-box-left">
                                        <img src={img2} alt="Slider" className="slider-img" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className="slider-box-left">
                                        <p className="left-side-title">BUSINESS INTELLIGENCE CAREERS</p>
                                        <h1 className="left-side-heading">Business Intelligence (BI) vs. Data Science: Finding Your Path</h1>
                                        <button className="slider-left-btn">READ ARTICLE</button>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className="slider-box-left">
                                        <img src={img1} alt="Display Slider" className="slider-img" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className="slider-box-left">
                                        <p className="left-side-title">BUSINESS INTELLIGENCE CAREERS</p>
                                        <h1 className="left-side-heading">Teaching ML the "Maven ay":An Interview with Chris Dutton</h1>
                                        <button className="slider-left-btn">READ ARTICLE</button>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className="slider-box-left">
                                        <img src={img3} alt="slider" className="slider-img" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default BlogSlider;