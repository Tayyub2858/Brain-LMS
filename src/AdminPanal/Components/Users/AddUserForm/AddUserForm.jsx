import React from 'react';
import './AddUserFormStyle.css';
import { Grid } from '@material-ui/core';
import Drwaradminpanal from '../../../Pages/Drwaradminpanal/Drwaradminpanal';
import HandleUserForm from './HandleUserForm';

const AddUserForm = () => {
  const{
    HandleAdd,
    fname,setfname,
    lname,setlname,
    email,setemail,
    phonenbr,setphonenbr,
    password,setpassword,
    confirmpassword,setconfirmpassword,
  
  } = HandleUserForm();
  return (
        <> 
    <Drwaradminpanal componentsName={"Add New User"}/>
    <div className="addnewcourese-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="adduser-box">
                <h1>Add New User</h1>
                <label className='course-title-name'>First Name</label><br /> 
                <input type="text" onChange={(e)=>setfname(e.target.value)} value={fname} placeholder='Enter your first name' className='user-text-input'/><br />
                <label className='course-title-name'>Last Name</label><br />
                <input type="text" onChange={(e)=>setlname(e.target.value)} value={lname} placeholder='Enter your last name' className='user-text-input'/><br />
                <label className='course-title-name'>Email Address</label> <br />
                <input type="text" onChange={(e)=>setemail(e.target.value)} value={email} placeholder='Enter your email address' className='user-text-input'/> <br />
                <label className='course-title-name'>Phone Number</label> <br />
                <input type="number" onChange={(e)=>setphonenbr(e.target.value)} value={phonenbr} placeholder='Enter your phone number' className='user-text-input'/> <br />
                <label className='course-title-name'>Password</label> <br />
                <input type="text" onChange={(e)=>setpassword(e.target.value)} value={password} placeholder='Enter your password' className='user-text-input'/> <br />
                <label className='course-title-name'>Confirm Password</label> <br />
                <input type="text" onChange={(e)=>setconfirmpassword(e.target.value)} value={confirmpassword} placeholder='Enter your confirm password' className='user-text-input'/> <br />
                <div className='btn-course-box'>
                <button className='Course-add-new-btn' onClick={HandleAdd}>Add New User</button>
                </div>
            </div>
          </Grid>
        </Grid>
      </div>
        </>
    )
}

export default AddUserForm