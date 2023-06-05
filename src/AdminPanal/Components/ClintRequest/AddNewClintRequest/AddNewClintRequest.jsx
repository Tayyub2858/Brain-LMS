import React from 'react'
import './AddNewClintRequestStyle.css';
import { Grid } from '@material-ui/core';
import Drwaradminpanal from '../../../Pages/Drwaradminpanal/Drwaradminpanal'
import AddNewClintRequestData from './AddNewClintRequestData';
const AddNewClintRequest = () => {

  const {
    HandleAddClint,
    fname , setfname,
    lname , setlname,
    email , setemail,
    compname , setcompname,
    hearbrain , sethearbrain,
    traninggoal , settraninggoal, 
  } = AddNewClintRequestData();
  return (
    <>
    <Drwaradminpanal componentsName={"Add New Clint Request"}/>
    <div className="addclintrequest-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="addclint-box">
                <h1>Add Clint Request</h1>
                <label className='clintreq-title-name'>First Name</label><br /> 
                <input type="text" value={fname} onChange={(e)=>setfname(e.target.value)}  placeholder='Enter your first name' className='clintreq-text-input'/><br />
                <label className='clintreq-title-name'>Last Name</label><br />
                <input type="text" value={lname} onChange={(e)=>setlname(e.target.value)}  placeholder='Enter your last name' className='clintreq-text-input'/><br />
                <label className='clintreq-title-name'>Email Address</label> <br />
                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}  placeholder='Enter your email address' className='clintreq-text-input'/> <br />
                <label className='clintreq-title-name'>Company Name</label> <br />
                <input type="text" value={compname} onChange={(e)=>setcompname(e.target.value)}  placeholder='Enter your phone number' className='clintreq-text-input'/> <br />
                <label className='clintreq-title-name'>Hear About Brain</label> <br />
                <input type="text" value={hearbrain} onChange={(e)=>sethearbrain(e.target.value)}  placeholder='Enter your password' className='clintreq-text-input'/> <br />
                <label className='clintreq-title-name'>Traning Goals</label> <br />
                <input type="text" value={traninggoal} onChange={(e)=>settraninggoal(e.target.value)}  placeholder='Enter your confirm password' className='clintreq-text-input'/> <br />
                <div className='btn-clintrequest-box'>
                <button className='clintrequest-add-new-btn' onClick={HandleAddClint}>Add Clint Request</button>
                </div>
            </div> 
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default AddNewClintRequest