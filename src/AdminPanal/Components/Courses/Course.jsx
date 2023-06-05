import React from 'react';
import './CourseStyle.css';
import { Grid } from '@material-ui/core';
import Drwaradminpanal from '../../Pages/Drwaradminpanal/Drwaradminpanal';

import {MdModeEditOutline ,MdDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';
import CourseHandle from './CourseHandle';
import { ApiUrl } from '../../../Apis/ApiUrl';
import axios from 'axios';
const Course = () => {

    const{showcoursecard , loadData} = CourseHandle();
    // const {id }= useParams();

    const HandleCourseDelete = (id) =>{
        if(window.confirm("Are you sure that you wanted to delete that Course "))
        {
            axios.delete(`${ApiUrl}/deletecoursecard/${id}`);
            alert("Delete Course Successfully");
            setTimeout(()=>loadData(),500);
        }
    }

    return (
        <>
            <Drwaradminpanal componentsName={"All Courses"} />
            <div className="courses-container">
                <div className="courses-header">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <div>
                                <h1 className='courses-title'>All Courses</h1>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className='courses-btn'>
                               <Link to='/Courses/AddNewCourse'> <button className='add-courses-btn'>Add New Course</button></Link>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="course-list-show">
                        <table id="responsive-table" className='course-table'>
                            <thead>
                                <th>ID</th>
                                <th>Course image</th>
                                <th>Course Title</th>
                                <th>Descriptions</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </thead>
                            <tbody>
                               {showcoursecard && showcoursecard.length > 0 &&  showcoursecard.map((course , index)=>(
                                    <tr key={index}>
                                        <td>{course.key}</td>
                                        <td><img src={`${ApiUrl}/`+course.image} alt="" style={{width:"50px", height:"50px"}} /></td>
                                        <td>{course.title}</td>
                                        <td>{course.desc}</td>
                                        <td><Link to={`/Course/Edit/${course.id}`}><button className='edit-btn'><MdModeEditOutline className='edit-icons-size'/></button></Link></td>
                                        <td><button className='delete-btn' onClick={()=>HandleCourseDelete(course.id)}><MdDelete className='delete-icons-size'/></button></td>
                                    </tr>
                               ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course