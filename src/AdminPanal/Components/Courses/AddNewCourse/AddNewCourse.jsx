import React from 'react';
import './AddNewCourseStyle.css'
import Drwaradminpanal from '../../../Pages/Drwaradminpanal/Drwaradminpanal';
import { Grid } from '@material-ui/core';
import AddNewCourseData from './AddNewCourseData';
const AddNewCourse = () => {

  const {
    handleAddcourse,
    HandleCoursefile,
    title , settitle,
    desc , setdesc,

  } = AddNewCourseData();

  return (
    <>
      <Drwaradminpanal componentsName={"Add New Course"} />
      <div className="addnewcourese-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="addcourse-box">
              <h1>Add New Course</h1>
              <label className='course-title-name'>Course Title</label><br />
              <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} placeholder='Enter your course title' className='course-text-input' /><br />
              <label className='course-title-name'>Course Descriptions</label><br />
              <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} placeholder='Enter your course description' className='course-text-input' /><br />
              <label className='course-title-name'>Select Image</label> <br />
              <input type="file"  onChange={HandleCoursefile}/> <br />
              <div className='btn-course-box'>
                <button className='Course-add-new-btn' onClick={handleAddcourse}>Add New Course</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default AddNewCourse