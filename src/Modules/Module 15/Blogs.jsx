import React from 'react'
import './BlogsStyle.css';
import { Grid } from '@mui/material';
import HandleBlog from './HandleBlog';


const Blogs = () => {

    return (
        <>
            <div className="blogs-container">
                <Grid container>
                    <Grid item xs={12} sx={12} md={6}>
                        <div className="blog-title-box">
                            <h1 className='blog-title'>Courses Offered</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} sx={12} md={6}>
                        <div className="view-blog">
                          <button className='blogall-btn'>View All..</button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {HandleBlog && HandleBlog.length > 0 && HandleBlog.map((blog , index)=>(
                        <Grid xs={12} sm={12} md={4}>
                            <div className="blog-box-container">
                                <img src="" alt="" />
                                <span></span>
                                <p></p>
                                <p>Read More</p>
                                <div>
                                    <div>
                                        <p></p>
                                        <p>view</p>
                                    </div>
                                </div>
                                <div>
                                    <p></p>
                                    <p>Comments</p>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}

export default Blogs