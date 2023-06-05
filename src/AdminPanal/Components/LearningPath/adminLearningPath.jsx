import React from 'react';
import './adminLearningPathStyle.css';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {MdModeEditOutline , MdDelete } from 'react-icons/md'
import Drwaradminpanal from '../../Pages/Drwaradminpanal/Drwaradminpanal';
import AdminLearningPathData from './adminLearningPathData';
import { ApiUrl } from '../../../Apis/ApiUrl';

function AdminLearningPath() {
  const{Showlearningpath} = AdminLearningPathData();
  return (
    <>
      <Drwaradminpanal componentsName={"LearningPath Courses"} />
      <div className="adminlearningpath-container">
        <div className="learningpath-header">
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <div className="learningpath">
                <h1 className='learningpath-title'>LearningPath Courses</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className="add-new-learningcourse">
                <Link to='/LearningPath/AddLearningpath'><button className='add-new-learningpath-btn'>Add LearningPath</button></Link>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="learningpath-list-show">
          <table id="responsive-table" className='learningpath-table'>
            <thead>
              <th>ID</th>
              <th>Course image</th>
              <th>Course Title</th>
              <th>Total Weeks</th>
              <th>Total videos</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {Showlearningpath && Showlearningpath.length > 0 && Showlearningpath.map((learningpath, index) => (
                <tr key={index}>
                  <td>{learningpath.key}</td>
                  <td><img src={`${ApiUrl}/`+learningpath.image} alt="" style={{ width: "50px", height: "50px" }} /></td>
                  <td>{learningpath.title}</td>
                  <td>{learningpath.totalweeks}</td>
                  <td>{learningpath.totalvideos}</td>
                  <td><button className='edit-btn'><MdModeEditOutline className='edit-icons-size' /></button></td>
                  <td><button className='delete-btn'><MdDelete className='delete-icons-size' /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AdminLearningPath;