import React from "react";
import "./FeatureCourseStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Grid } from "@mui/material";
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import instructor from '../../Assets/Front-Page/instructor-img.png';
const FeatureCourse = () => {
  return (
    <>
      <div className="featurecourse-container">
        <div className="featurecourse-title-box">
          <h2 className="featurecourse-title">Featured Courses</h2>
          <p className="featurecourse-para">#Browser feature courses and become skillful</p>
        </div>
        <div className="featurcourse-slider-containter">
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
              <div className="featurecourse-box1">
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                    <div className="featurecours-learningpage-box">
                      <h3 className="learning-page-title">New Learning Page</h3>
                      <div className="instructor-box">
                        <img src={instructor} alt="Display instuctor Pictures" className="instructor-image" />
                        <p className="instructor-name">Instructor Name</p>
                      </div>
                      <p className="learningpage-para">
                        Learn step-by-step tips that help you get things done with your virtual team by
                        increasing trust and accountability.If you manage a virtual team today,
                        then you'll probably continue to do so for the rest of your career.
                      </p>
                      <div className="stars-rating">
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <span><RiStarSLine className="rating-stars-noncolor" /></span>
                        <button className="rating-btn-nbr">4.75</button>
                      </div>
                      <div className="time-date-box">
                        <div className="time-box">
                          <p><AiOutlineClockCircle className="learing-clock-icons" /></p>
                          <p className="learning-hourse-time">3:30 Hours</p>
                        </div>
                        <div className="date-box">
                          <p><AiOutlineCalendar className="learning-calender-icon" /></p>
                          <p className="calender-date">20-Mar-2023</p>
                        </div>
                        <button className="learning-free-btn">Free</button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featurecourse-box2">
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                    <div className="featurecours-learningpage-box">
                      <h3 className="learning-page-title">New Learning Page</h3>
                      <div className="instructor-box">
                        <img src={instructor} alt="Display instuctor Pictures" className="instructor-image" />
                        <p className="instructor-name">Instructor Name</p>
                      </div>
                      <p className="learningpage-para">
                        Learn step-by-step tips that help you get things done with your virtual team by
                        increasing trust and accountability.If you manage a virtual team today,
                        then you'll probably continue to do so for the rest of your career.
                      </p>
                      <div className="stars-rating">
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <span><RiStarSLine className="rating-stars-noncolor" /></span>
                        <button className="rating-btn-nbr">4.75</button>
                      </div>
                      <div className="time-date-box">
                        <div className="time-box">
                          <p><AiOutlineClockCircle className="learing-clock-icons" /></p>
                          <p className="learning-hourse-time">3:30 Hours</p>
                        </div>
                        <div className="date-box">
                          <p><AiOutlineCalendar className="learning-calender-icon" /></p>
                          <p className="calender-date">20-Mar-2023</p>
                        </div>
                        <button className="learning-free-btn">Free</button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featurecourse-box3">
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                    <div className="featurecours-learningpage-box">
                      <h3 className="learning-page-title">New Learning Page</h3>
                      <div className="instructor-box">
                        <img src={instructor} alt="Display instuctor Pictures" className="instructor-image" />
                        <p className="instructor-name">Instructor Name</p>
                      </div>
                      <p className="learningpage-para">
                        Learn step-by-step tips that help you get things done with your virtual team by
                        increasing trust and accountability.If you manage a virtual team today,
                        then you'll probably continue to do so for the rest of your career.
                      </p>
                      <div className="stars-rating">
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <p><RiStarSFill className="rating-stars-color" /></p>
                        <span><RiStarSLine className="rating-stars-noncolor" /></span>
                        <button className="rating-btn-nbr">4.75</button>
                      </div>
                      <div className="time-date-box">
                        <div className="time-box">
                          <p><AiOutlineClockCircle className="learing-clock-icons" /></p>
                          <p className="learning-hourse-time">3:30 Hours</p>
                        </div>
                        <div className="date-box">
                          <p><AiOutlineCalendar className="learning-calender-icon" /></p>
                          <p className="calender-date">20-Mar-2023</p>
                        </div>
                        <button className="learning-free-btn">Free</button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
};
export default FeatureCourse;
