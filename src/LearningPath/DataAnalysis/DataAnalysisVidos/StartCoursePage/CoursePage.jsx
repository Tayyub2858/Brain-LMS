
import React from "react";
import './CoursePageStyle.css';
import { Grid } from "@material-ui/core";
import img from './download.jpg';
import CoursePageInput from "./CoursePageInput";
import DrawerDasboard from "../../../../Modules/Drawer/DasboardDrawer";
const CoursePage = () =>{
    const {handleClick}=CoursePageInput();
    return(
        <>
        <DrawerDasboard  componentName={"Course Details"}/>
        <div className="coures-content-container">
            <Grid container>
                <Grid item xs={12} sm={12} md={3}>
                    <div className="Courese-instructor">

                            <h1 className="inctructor-title">Instructor</h1>
                            <img src={img} alt="Diaplay img for incstructor"  className="inctructor-img"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, facilis?
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, temporibus!
                            </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <div className="course-details">
                        <h1 className="courese-details-title">Course Content Title</h1>
                        <p className="course-detalis-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at explicabo possimus nesciunt tempora error nisi distinctio, aliquam architecto id quia voluptatibus totam nemo iusto eaque eum delectus vitae magnam.
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem qui delectus, nam repudiandae aliquam nulla explicabo dolorum reprehenderit, beatae porro ducimus consequuntur corporis optio veritatis enim praesentium, tempore ut maxime!
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eum esse alias quo mollitia, iste nisi nemo ipsum eaque nam suscipit officiis ipsam modi quis maiores est saepe cum. Fugiat.
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus fugit, asperiores laboriosam reprehenderit aut optio mollitia consequuntur error libero nam sit. Natus harum quas voluptatum nihil qui, quibusdam et minus.
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati deserunt veritatis id sapiente placeat dolorem alias enim! Quaerat, amet nulla adipisci qui rerum laboriosam animi cum error. Ipsam, voluptatum facere.
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum facilis repellendus fugiat porro, quaerat sunt labore omnis ipsa deserunt cupiditate delectus illum ullam velit! Neque accusamus eligendi soluta repellat eveniet!
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, error nisi dolorum pariatur harum quia ipsum vitae repellat sapiente sequi veniam culpa necessitatibus. Fuga animi repellat laborum autem, voluptatum dolorem?
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus est asperiores veritatis! Obcaecati nisi doloribus, ipsa consequatur ab repellat voluptatum aperiam debitis tempore doloremque modi natus quos, omnis provident! 
                        </p>
                        <button className="watch-videos-btn" onClick={handleClick}>Watch Videos</button>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}
export default CoursePage;