import { Grid } from "@material-ui/core";
import React from "react";
import './BlogCardStyles.css';

const BlogCard = (props) => {
    return (
        <>
            <div className="card-container">
                <div className="card-box">
                    <Grid container>
                        <Grid item  xs={12} sm={12} md={6}>
                            <div className="card-box-img">
                                <img src={props.img} alt="Display Cards" className="card-img" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="card-box-text">
                                <p className="card-blog-title">{props.title}</p>
                                <h3 className="card-blog-heading">{props.heading}</h3>
                                <p className="card-author">Author :{props.author}</p>
                            </div>
                        </Grid>
                    </Grid>



                </div>
            </div>
        </>
    )
}
export default BlogCard;