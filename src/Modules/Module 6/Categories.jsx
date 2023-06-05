import React from "react";
import './CategoriesStyle.css';
import { Grid } from "@mui/material";
import management from '../../Assets/Categories/briefcase.png'
import business from '../../Assets/Categories/bulb.png'
import lifestyle from '../../Assets/Categories/family.png';
import health from '../../Assets/Categories/muscle.png';
import science from '../../Assets/Categories/connection.png';
import design from '../../Assets/Categories/palette.png';
const Categories = () => {
    return (
        <>
            <div className="categories-container">
                <h2 className="categories-title">Trending Categories</h2>
                <p className="categories-paragraph">#Browse trending & popular learning topics</p>
                <div className="category-box">
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={2}>
                            <div className="category-box-text">
                                <div className="iconsboxes1">
                                    <div className="icons-images">
                                        <img src={management} alt="" className="category-img" />
                                    </div>
                                </div>
                                <div className="course-btn">2 Courses</div>
                                <p className="category-paragraph-box">Management</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                            <div className="category-box-text">
                                <div className="iconsboxes2">
                                    <div className="icons-images">
                                        <img src={business} alt="" className="category-img" />
                                    </div>
                                </div>
                                <div className="course-btn">2 Courses</div>
                                <p className="category-paragraph-box">Business Strategy</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                            <div className="category-box-text">
                                <div className="iconsboxes3">
                                    <div className="icons-images">
                                        <img src={lifestyle} alt="" className="category-img" />
                                    </div>
                                </div>
                                <div className="course-btn">2 Courses</div>
                                <p className="category-paragraph-box">LifeStyle</p>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                            <div className="category-box-text">
                                <div className="iconsboxes4">
                                    <div className="icons-images">
                                        <img src={health} alt="" className="category-img" />
                                    </div>
                                </div>
                                <div className="course-btn">2 Courses</div>
                                <p className="category-paragraph-box">Health & Fitness</p>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                            <div className="category-box-text">
                                <div className="iconsboxes5">
                                    <div className="icons-images">
                                        <img src={science} alt="" className="category-img" />
                                    </div>
                                </div>
                                <div className="course-btn">2 Courses</div>
                                <p className="category-paragraph-box">Science</p>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                            <div className="category-box-text">
                                <div className="iconsboxes6">
                                    <div className="icons-images">
                                        <img src={design} alt="" className="category-img" />
                                    </div>
                                </div>
                                <div className="course-btn">2 Courses</div>
                                <p className="category-paragraph-box">Design</p>
                            </div>

                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}
export default Categories;