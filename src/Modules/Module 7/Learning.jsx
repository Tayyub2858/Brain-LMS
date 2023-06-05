import React from 'react'
import './LearningStyle.css';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import img1 from '../../Assets/Categories/01.png';
import img2 from '../../Assets/Categories/02.png';
import img3 from '../../Assets/Categories/03.png';
import img4 from '../../Assets/Categories/04.png';
import img5 from '../../Assets/Categories/05.png';
import img6 from '../../Assets/Categories/06.png';
const Learning = () => {
  return (
    <>
      <div className="learning-container">
        <div className="learning-heading-box">
          <h1 className='learning-title'>Get Everything for Learning</h1>
          <p className='learning-para-text'>Why Chosse us</p>
        </div>
        <div className="cards-learning-box">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <div className='elearning-images-div'><img src={img1} alt="Display images of Everything Learning Path" className='learning-images' /></div>
                <div>
                  <h2 className='elearning-heading'>Book & Library Facelities</h2>
                  <Link to=''><button className='viewmore-btn'>View More</button></Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <div className='elearning-images-div'><img src={img2} alt="Display images of Everything Learning Path" className='learning-images' /></div>
                <div>
                  <h2 className='elearning-heading'>Online & Offline Courses</h2>
                  <Link to=''><button className='viewmore-btn'>View More</button></Link></div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <div className='elearning-images-div'><img src={img3} alt="Display images of Everything Learning Path" className='learning-images' /></div>
                <div>
                    <h2 className='elearning-heading'>Certification After Course Complete</h2>
                  <Link to=''><button className='viewmore-btn'>View More</button></Link></div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <div className='elearning-images-div'><img src={img4} alt="Display images of Everything Learning Path" className='learning-images' /></div>
                <div>
                  <h2 className='elearning-heading'>Professional and Ingenious Instructor</h2>
                  <Link to=''><button className='viewmore-btn'>View More</button></Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <div className='elearning-images-div'><img src={img5} alt="Display images of Everything Learning Path" className='learning-images' /></div>
                <div>
                  <h2 className='elearning-heading'>Air Condition Class Room</h2>
                  <Link to=''><button className='viewmore-btn'>View More</button></Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className="every-learning-boxes">
                <div className='elearning-images-div'><img src={img6} alt="Display images of Everything Learning Path" className='learning-images' /></div>
                <div>
                  <h2 className='elearning-heading'>Best Industry Leader</h2>
                  <Link to=''><button className='viewmore-btn'>View More</button></Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Learning