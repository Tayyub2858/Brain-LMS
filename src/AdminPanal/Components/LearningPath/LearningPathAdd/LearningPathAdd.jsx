import React from 'react';
import './LearningPathAddStyle.css';
import { Grid } from '@material-ui/core';
import Drwaradminpanal from '../../../Pages/Drwaradminpanal/Drwaradminpanal';
import LearningPathAddData from './LearningPathAddData';
const LearningPathAdd = () => {

  const {
    Handlelearningpath,
    Handlelearningpathfile,
    title,settitle,
    totalweeks,settotalweeks,
    totalvideos , settotalvideos,
  }=LearningPathAddData();

  return (
    <>
      <Drwaradminpanal componentsName={"Add LearningPath Course"} />
      <div className="addnewlearningpath-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="addnewlearningpath-box">
              <h1>Add Learning Path Course</h1>
              <label className='addnewlearningpath-title-name'>Course Title</label><br />
              <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} placeholder='Enter your course title' className='addnewlearningpath-text-input' /><br />
              <label className='addnewlearningpath-title-name'>Total Weeks</label><br />
              <input type="text" value={totalweeks} onChange={(e)=>settotalweeks(e.target.value)} placeholder='Enter your course description' className='addnewlearningpath-text-input' /><br />
              <label className='addnewlearningpath-title-name'>Total Videos</label><br />
              <input type="text" value={totalvideos} onChange={(e)=>settotalvideos(e.target.value)} placeholder='Enter your course description' className='addnewlearningpath-text-input' /><br />
              <label className='addnewlearningpath-title-name'>Select Image</label> <br />
              <input type="file" onChange={Handlelearningpathfile} /> <br />
              <div className='btn-addnewlearningpath-box'>
                <button className='addnewlearningpath-add-new-btn' onClick={Handlelearningpath}>Add New Course</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

    </>
  )
}

export default LearningPathAdd