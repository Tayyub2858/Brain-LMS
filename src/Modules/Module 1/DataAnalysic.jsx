import React from "react";
import "./DataAnalysic.css";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Gif from '../../Assets/Animation/ezgif.com-gif-maker-29.gif'
import Gif1 from '../../Assets/Animation/slide-animace-pomalejsi.gif';
import Gif2 from '../../Assets/Animation/timetoclimb-3-1.gif';
import Gif3 from '../../Assets/Animation/VEtZlS.gif'
const DataAnalysic = () => {

  return (
    <>
      <div className="dataanalysic-container">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="featurecourse-myslider"
        >
          <SwiperSlide>
            <div className="Data-slider-box">
              <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                  <div className="Data-container">
                    <p className="Data-para-1">LEARN,CREATE,CONNECT</p>
                    <h1 className="Data-heading-1">Joy of Learning &</h1>
                    <h1 className="Data-heading-2">teaching...</h1>
                    <p className="Data-para-2">
                      Brain LMS is a fully-featured education platform that helps instructors to create
                      and publish video courses, live classes, and text courses and earn money, and
                      helps students to learn in the easiest way..
                    </p>
                    <div className="search">
                      <input type="text" placeholder="Search here....." name="searchTerm" className="searchTerm" />
                      <button className="searchButton">Search</button>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <div className="video-container">
                    <img src={Gif} alt="" className="video-img" />
                  </div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Data-slider-box">
              <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                  <div className="Data-container">
                    <p className="Data-para-1">LEARN,CREATE,CONNECT</p>
                    <h1 className="Data-heading-1">Joy of Learning &</h1>
                    <h1 className="Data-heading-2">teaching...</h1>
                    <p className="Data-para-2">
                      Brain LMS is a fully-featured education platform that helps instructors to create
                      and publish video courses, live classes, and text courses and earn money, and
                      helps students to learn in the easiest way..
                    </p>
                    <div className="search">
                      <input type="text" placeholder="Search here....." name="searchTerm" className="searchTerm" />
                      <button className="searchButton">Search</button>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <div className="video-container">
                    <img src={Gif1} alt="" className="video-img" />
                  </div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Data-slider-box">
              <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                  <div className="Data-container">
                    <p className="Data-para-1">LEARN,CREATE,CONNECT</p>
                    <h1 className="Data-heading-1">Joy of Learning &</h1>
                    <h1 className="Data-heading-2">teaching...</h1>
                    <p className="Data-para-2">
                      Brain LMS is a fully-featured education platform that helps instructors to create
                      and publish video courses, live classes, and text courses and earn money, and
                      helps students to learn in the easiest way..
                    </p>
                    <div className="search">
                      <input type="text" placeholder="Search here....." name="searchTerm" className="searchTerm" />
                      <button className="searchButton">Search</button>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <div className="video-container">
                    <img src={Gif2} alt="" className="video-img" />
                  </div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Data-slider-box">
              <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                  <div className="Data-container">
                    <p className="Data-para-1">LEARN,CREATE,CONNECT</p>
                    <h1 className="Data-heading-1">Joy of Learning &</h1>
                    <h1 className="Data-heading-2">teaching...</h1>
                    <p className="Data-para-2">
                      Brain LMS is a fully-featured education platform that helps instructors to create
                      and publish video courses, live classes, and text courses and earn money, and
                      helps students to learn in the easiest way..
                    </p>
                    <div className="search">
                      <input type="text" placeholder="Search here....." name="searchTerm" className="searchTerm" />
                      <button className="searchButton">Search</button>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <div className="video-container">
                    <img src={Gif3} alt="" className="video-img" />
                  </div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </>
  );
};
export default DataAnalysic;
