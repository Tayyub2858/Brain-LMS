import React from 'react';
import './EditUserFormStyle.css';
import { Grid } from '@material-ui/core';
import Drwaradminpanal from '../../../Pages/Drwaradminpanal/Drwaradminpanal';
import EditUserFormData from './EditUserFormData';

const EditUserForm = () => {
  const{
    HandleUpdate,
    values , setvalue,
  
  } = EditUserFormData();
  return (
        <> 
    <Drwaradminpanal componentsName={"Update the User"}/>
    <div className="addnewcourese-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="adduser-box">
                <h1>Update User</h1>
                <label className='course-title-name'>First Name</label><br /> 
                <input type="text" value={values.fname} onChange={e =>setvalue({...values , fname:e.target.value})}  placeholder='Enter your first name' className='user-text-input'/><br />
                <label className='course-title-name'>Last Name</label><br />
                <input type="text" value={values.lname} onChange={e =>setvalue({...values , lname: e.target.value})}  placeholder='Enter your last name' className='user-text-input'/><br />
                <label className='course-title-name'>Email Address</label> <br />
                <input type="text" value={values.email} onChange={e =>setvalue({...values , email: e.target.value})}  placeholder='Enter your email address' className='user-text-input'/> <br />
                <label className='course-title-name'>Phone Number</label> <br />
                <input type="number" value={values.phonenbr} onChange={e =>setvalue({...values , phonenbr: e.target.value})}  placeholder='Enter your phone number' className='user-text-input'/> <br />
                <label className='course-title-name'>Password</label> <br />
                <input type="text" value={values.password} onChange={e =>setvalue({...values , password: e.target.value})}  placeholder='Enter your password' className='user-text-input'/> <br />
                <label className='course-title-name'>Confirm Password</label> <br />
                <input type="text" value={values.confirmpassword} onChange={e =>setvalue({...values , confirmpassword: e.target.value})}  placeholder='Enter your confirm password' className='user-text-input'/> <br />
                <div className='btn-course-box'>
                <button className='Course-add-new-btn' onClick={HandleUpdate}>Updata User</button>
                </div>
            </div>
          </Grid>
        </Grid>
      </div>
        </>
    )
}

export default EditUserForm