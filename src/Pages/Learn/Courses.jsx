import React from 'react'
import Footer from '../../Modules/Footer/Footer'
import Nav from '../../Modules/Nav/Nav'
import './CoursesStyles.css';
import CourseCard from './CourseCard';
import { Grid } from '@material-ui/core';
// import CourseImg from '../../Assets/Learn/Self-course/Course-hero_2x.png';
import Loader from '../../Assets/Front-Page/Loader.svg'

const Courses = () => {
    const [loader, setloader] = React.useState(true);
   React.useEffect(() => {
        setloader(true);
        setTimeout(() => {
          setloader(false);
        }, 4500);
      }, []);
    return (
        <>
            <Nav />
            <div className="courses-container">
                <div className="course-title-container">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="course-title-txt">
                                <p className="course-title">
                                    Learn
                                </p>
                                <h1 className="course-heading">
                                    SELF-PACED INFORMATION TECHNOLOGY COURSES
                                </h1>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            {loader ? <div>
                <img className='loader' src={Loader} alt="Factching Your data" />
            </div> : (<CourseCard />)}

            <Footer />
        </>
    )
}

export default Courses;