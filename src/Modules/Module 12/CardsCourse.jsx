import React from 'react'
import './CardsCourseStyle.css';
import { Grid } from '@mui/material';
import instuctor from '../../Assets/Front-Page/instructor.png';
import student from '../../Assets/Front-Page/student.png';
import liveclass from '../../Assets/Front-Page/liveclass.png';
import livevideo from '../../Assets/Front-Page/videocourse.png'
const CardsCourse = () => {
    return (
        <>
            <div className="cardcourse-container">
                <Grid container justifyContent='center'>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="cardcourse-box">
                            <div className="images-box1">
                                <img src={instuctor} alt="Display the instructor" className='instructor-img' />
                            </div>
                            <h1 className='count-numbers'>9</h1>
                            <h3 className='card-heading-title'>Skillful Instructors</h3>
                            <p className='card-para'>Start learning from experienced instructor.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="cardcourse-box">
                            <div className="images-box1">
                                <img src={student} alt="Display the Student" className='student-img' />
                            </div>
                            <h1 className='count-numbers'>8</h1>
                            <h3 className='card-heading-title'>Happy Students</h3>
                            <p className='card-para'>Enrolled in our courses and improved their skills.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="cardcourse-box">
                            <div className="images-box1">
                                <img src={liveclass} alt="Display the liveClass" className='liveclass-img' />
                            </div>
                            <h1 className='count-numbers'>7</h1>
                            <h3 className='card-heading-title'>Live Classes</h3>
                            <p className='card-para'>improve your skills using live knowledge flow.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className="cardcourse-box">
                            <div className="images-box1">
                                <img src={livevideo} alt="Display the livevideo" className='livevideo-img' />
                            </div>
                            <h1 className='count-numbers'>7</h1>
                            <h3 className='card-heading-title'>Video Courses</h3>
                            <p className='card-para'>Learn withourt any geographical & time limitations</p>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </>
    )
}

export default CardsCourse
