import React from "react";
import BlogCard from "./BlogCard";
import Data from "./BlogData";
import { Grid } from "@material-ui/core";

const Home = () => {
    return (
        <>
            <div className="Home-blog-container">
                <Grid container>
                    {Data.map((item, index) => {
                        return (
                            <Grid key={index} item xs={12} sm={12} md={6}>
                                <BlogCard
                                    img={item.img}
                                    title={item.title}
                                    heading={item.heading}
                                    author={item.author}
                                />
                            </Grid>

                        )
                    })}
                </Grid>
            </div>
        </>
    )
}
export default Home;