import React from 'react';
import './CoursesStyle.css';
import { Grid } from '@mui/material';
import img1 from '../../Assets/CourseCard/FRL101_Image.png';
import img2 from '../../Assets/CourseCard/DGM101_Image.png';
import img3 from '../../Assets/CourseCard/GRD101_Image.png';
import img4 from '../../Assets/CourseCard/VAS101_Image.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
const Courses = () => {
  return (
    <>
      <div className="courses-container">
        <Grid container>
          <Grid item xs={12} sx={12} md={6}>
            <div className="courses-title-box">
              <h1 className='course-title'>Courses Offered</h1>
            </div>
          </Grid>
          <Grid item xs={12} sx={12} md={6}>
            <div className="view-courses">
              <button className='viewall-btn'>View All..</button>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <div className="courseoffer-slider-boxes">
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
                  <div className="course-offer-cards">
                    <div className="course-offer-img-box">
                      <button className='Course-offered-btn'>Course</button>
                      <img src={img1} alt="Dislay Course images" className='course-offered-img' />
                    </div>
                    <h1 className='courseoffer-title'>Data Analysis</h1>
                    <p className='courseoffer-para'>In Data related</p>
                    <div className="courseoffer-stars-rating">
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <span><RiStarSLine className="rating-stars-noncolor" /></span>
                      <button className="courseoffer-rating-btn-nbr">4.75</button>
                    </div>
                    <div className="courseoffer-time-date-box">
                      <div className="courseoffer-time-box">
                        <p><AiOutlineClockCircle className="courseoffer-learing-clock-icons" /></p>
                        <p className="courseoffer-learning-hourse-time">3:30 Hours</p>
                      </div>
                      <div className="courseoffer-date-box">
                        <p><AiOutlineCalendar className="courseoffer-learning-calender-icon" /></p>
                        <p className="courseoffer-calender-date">20-Mar-2023</p>
                      </div>
                    </div>
                    <button className="courseoffer-learning-free-btn">Free</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="course-offer-cards">
                    <div className="course-offer-img-box">
                      <button className='Course-offered-btn'>Course</button>
                      <img src={img2} alt="Dislay Course images" className='course-offered-img' />
                    </div>
                    <h1 className='courseoffer-title'>Digital Marketing</h1>
                    <p className='courseoffer-para'>In Marketing   related</p>
                    <div className="courseoffer-stars-rating">
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <span><RiStarSLine className="rating-stars-noncolor" /></span>
                      <button className="courseoffer-rating-btn-nbr">4.75</button>
                    </div>
                    <div className="courseoffer-time-date-box">
                      <div className="courseoffer-time-box">
                        <p><AiOutlineClockCircle className="courseoffer-learing-clock-icons" /></p>
                        <p className="courseoffer-learning-hourse-time">3:30 Hours</p>
                      </div>
                      <div className="courseoffer-date-box">
                        <p><AiOutlineCalendar className="courseoffer-learning-calender-icon" /></p>
                        <p className="courseoffer-calender-date">20-Mar-2023</p>
                      </div>
                    </div>
                    <button className="courseoffer-learning-free-btn">Free</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="course-offer-cards">
                    <div className="course-offer-img-box">
                      <button className='Course-offered-btn'>Course</button>
                      <img src={img3} alt="Dislay Course images" className='course-offered-img' />
                    </div>
                    <h1 className='courseoffer-title'>Graphic Design</h1>
                    <p className='courseoffer-para'>In Designing related</p>
                    <div className="courseoffer-stars-rating">
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <span><RiStarSLine className="rating-stars-noncolor" /></span>
                      <button className="courseoffer-rating-btn-nbr">4.75</button>
                    </div>
                    <div className="courseoffer-time-date-box">
                      <div className="courseoffer-time-box">
                        <p><AiOutlineClockCircle className="courseoffer-learing-clock-icons" /></p>
                        <p className="courseoffer-learning-hourse-time">3:30 Hours</p>
                      </div>
                      <div className="courseoffer-date-box">
                        <p><AiOutlineCalendar className="courseoffer-learning-calender-icon" /></p>
                        <p className="courseoffer-calender-date">20-Mar-2023</p>
                      </div>
                    </div>
                    <button className="courseoffer-learning-free-btn">Free</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="course-offer-cards">
                    <div className="course-offer-img-box">
                      <button className='Course-offered-btn'>Course</button>
                      <img src={img4} alt="Dislay Course images" className='course-offered-img' />
                    </div>
                    <h1 className='courseoffer-title'>Virtual Assistant</h1>
                    <p className='courseoffer-para'>In Bussiness related</p>
                    <div className="courseoffer-stars-rating">
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <span><RiStarSLine className="rating-stars-noncolor" /></span>
                      <button className="courseoffer-rating-btn-nbr">4.75</button>
                    </div>
                    <div className="courseoffer-time-date-box">
                      <div className="courseoffer-time-box">
                        <p><AiOutlineClockCircle className="courseoffer-learing-clock-icons" /></p>
                        <p className="courseoffer-learning-hourse-time">3:30 Hours</p>
                      </div>
                      <div className="courseoffer-date-box">
                        <p><AiOutlineCalendar className="courseoffer-learning-calender-icon" /></p>
                        <p className="courseoffer-calender-date">20-Mar-2023</p>
                      </div>
                    </div>
                    <button className="courseoffer-learning-free-btn">Free</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="course-offer-cards">
                    <div className="course-offer-img-box">
                      <button className='Course-offered-btn'>Course</button>
                      <img src={img1} alt="Dislay Course images" className='course-offered-img' />
                    </div>
                    <h1 className='courseoffer-title'>Data Analysis</h1>
                    <p className='courseoffer-para'>In Bussiness related</p>
                    <div className="courseoffer-stars-rating">
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <p><RiStarSFill className="courseoffer-rating-stars-color" /></p>
                      <span><RiStarSLine className="rating-stars-noncolor" /></span>
                      <button className="courseoffer-rating-btn-nbr">4.75</button>
                    </div>
                    <div className="courseoffer-time-date-box">
                      <div className="courseoffer-time-box">
                        <p><AiOutlineClockCircle className="courseoffer-learing-clock-icons" /></p>
                        <p className="courseoffer-learning-hourse-time">3:30 Hours</p>
                      </div>
                      <div className="courseoffer-date-box">
                        <p><AiOutlineCalendar className="courseoffer-learning-calender-icon" /></p>
                        <p className="courseoffer-calender-date">20-Mar-2023</p>
                      </div>
                    </div>
                    <button className="courseoffer-learning-free-btn">Free</button>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Courses