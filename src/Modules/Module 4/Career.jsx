import React from "react";
import './CareerStyle.css';
import saqibriaz from '../../Assets/Front-Page/Saqib-Riaz.png'
import shokatjaved from '../../Assets/Front-Page/Shoukat.png'
import zafarabbas from '../../Assets/Front-Page/Zafar-Abbas.png'
import hafiztayyab from '../../Assets/Front-Page/Hafiz-Tayyab.png'
import irfan from '../../Assets/Front-Page/Irfan.png'
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
const Career = () => {
    return (
        <>
            <div className="career-container">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        type: "progressbar",
                    }}

                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="career-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={9}>
                                    <p className="career-text">"The data analysis training offered by Brain Analytics was fantastic.
                                        The instructors were highly knowledgeable and provided practical skills that I could apply to my work.
                                        I highly recommend this training to anyone looking to upskill themselves in data analysis."</p>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <img src={saqibriaz} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Mr.Saqib Riaz, FCA</h3>
                                    <h4 className="career-img-designation">Cheif Financial Officer, <br /> Etihad Power Generation Limited</h4>

                                </Grid>
                            </Grid>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="career-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={9}>
                                    <p className="career-text">"I had an excellent experience with the data analysis training offered by Brain Analytics.
                                        The course content was relevant and practical, and the instructors were highly knowledgeable and engaging.
                                        I highly recommend this training to anyone looking to improve their data analysis skills." Thank you!”</p>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <img src={shokatjaved} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Mr.Shoukat Javed</h3>
                                    <h4 className="career-img-designation">Deputy Manager IT, <br /> J.K Spinning Mills</h4>

                                </Grid>
                            </Grid>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="career-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={9}>
                                    <p className="career-text">"I highly recommend the data analysis training offered by Brain Analytics.
                                        The instructors were highly knowledgeable and provided practical skills that I could apply in my work.
                                        The course content was relevant and up-to-date, and the hands-on training was exceptional.
                                        I am grateful for this opportunity to upskill myself in data analysis."

                                    </p>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <img src={zafarabbas} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Mr. Zafar Abbas</h3>
                                    <h4 className="career-img-designation">Regional Sales Manager,<br /> Pharmasol (PVT.) LTD.</h4>
                                </Grid>
                            </Grid>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="career-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={9}>
                                    <p className="career-text">"The data analysis training by Brain Analytics was an excellent investment in my career.
                                        The instructors were highly skilled and provided practical skills that I could apply in my work.
                                        The course content was well-structured and comprehensive, and the hands-on training was exceptional."" </p>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <img src={hafiztayyab} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Mr. Hafiz Tayyab</h3>
                                    <h4 className="career-img-designation">Cheif Financial Officer, <br /> United Empire Properties LLP</h4>
                                </Grid>
                            </Grid>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="career-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={9}>
                                    <p className="career-text">"I am grateful for the data analysis training provided by Brain Analytics.
                                        The instructors were highly experienced and provided personalized attention, ensuring that all participants understood the material.
                                        The course content was practical and comprehensive, and the hands-on training was invaluable.
                                        I highly recommend this training to anyone looking to upskill themselves in data analysis."</p>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <img src={irfan} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Mr. Irfan Younas</h3>
                                    <h4 className="career-img-designation">Group Head Of Internal Audit, <br /> Etihad Power Generation Limited</h4>
                                </Grid>
                            </Grid>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}
export default Career;