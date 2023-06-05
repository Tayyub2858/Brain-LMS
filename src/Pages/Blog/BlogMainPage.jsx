import React from "react";
import BlogHome from './BlogCard/BlogHome'
import BlogSlider from "./Slider/BlogSlider";
import Nav from "../../Modules/Nav/Nav";
import Footer from "../../Modules/Footer/Footer";
const BlogMainPage = () => {
    return (
        <>
            <Nav />
            <BlogSlider />
            <BlogHome/>
            <Footer />
        </>
    )
}
export default BlogMainPage;