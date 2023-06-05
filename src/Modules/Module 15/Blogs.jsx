import React from 'react'
import './BlogsStyle.css';
import { Grid } from '@mui/material';
// import { Link } from 'react-router-dom';
import {AiFillEye} from 'react-icons/ai';
import {FaComment} from 'react-icons/fa'
import HandleBlog from './HandleBlog';


const Blogs = () => {

    return (
        <>
            <div className="blogs-container">
                <Grid container>
                    <Grid item xs={12} sx={12} md={6}>
                        <div className="blog-title-box">
                            <h1 className='blog-title'>Popular Blogs</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} sx={12} md={6}>
                        <div className="view-blog">
                            <button className='blogall-btn'>View All..</button>
                        </div>
                    </Grid>
                </Grid>
                <div>
                <Grid container spacing={3}>
                    {HandleBlog && HandleBlog.length > 0 && HandleBlog.map((blog, index) => (
                        <Grid xs={12} sm={12} md={4}>
                            <div className="blog-box-container" key={index}>
                                <img src={blog.img} alt="Display the Blog images" className='blog-images' />
                                <h1 className='blogs-title'>{blog.title}</h1>
                                <p className='blogs-text'>{blog.para}</p>
                                <button className='blogs-readmore-btn' onClick={()=>{alert("Comming Soon Some pages are Open")}}>Read More</button>
                                <div className='view-comment-box'>
                                    <div className='view-boxs'>
                                        <AiFillEye className='view-icons'/>
                                        <p className='view-nbrs'>{blog.viws}</p>
                                        <p className='views'>view</p>
                                    </div>
                                    <div className='comment-blogs-count'>
                                        <FaComment className='commment-icons'/>
                                        <p className='view-nbrs'>{blog.Comments}</p>
                                        <p className='comment'>Comments</p>
                                    </div>
                                </div>

                            </div>
                        </Grid>
                    ))}
                </Grid>
                </div>
            </div>
        </>
    )
}

export default Blogs