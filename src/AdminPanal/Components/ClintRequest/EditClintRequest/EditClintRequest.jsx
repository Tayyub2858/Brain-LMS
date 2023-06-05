import React from 'react'
import './EditClintRequestStyle.css';
import Drwaradminpanal from '../../../../Modules/Drawer/DasboardDrawer';
import { Grid } from '@material-ui/core';
import HandleEditRequest from './HandleEditRequest';
function EditClintRequest() {

  const {
    values , setvalue,
    HandleUpdateClint,
  } = HandleEditRequest();

  return (
    <>
      <Drwaradminpanal componentsName={"Update the User"} />
      <div className="addnewcourese-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="adduser-box">
              <h1>Update Clint Request</h1>
              <label className='course-title-name'>First Name</label><br />
              <input type="text" value={values.fname} onChange={e => setvalue({ ...values, fname: e.target.value })}  className='user-text-input' /><br />
              <label className='course-title-name'>Last Name</label><br />
              <input type="text" value={values.lname} onChange={e => setvalue({ ...values, lname: e.target.value })}  className='user-text-input' /><br />
              <label className='course-title-name'>Email Address</label> <br />
              <input type="text" value={values.email} onChange={e => setvalue({ ...values, email: e.target.value })}  className='user-text-input' /> <br />
              <label className='course-title-name'>Company Name </label> <br />
              <input type="number" value={values.compname} onChange={e => setvalue({ ...values, compname: e.target.value })}  className='user-text-input' /> <br />
              <label className='course-title-name'>How did your hear about Brain Analytics?</label> <br />
              <input type="text" value={values.hearbrain} onChange={e => setvalue({ ...values, hearbrain: e.target.value })}  className='user-text-input' /> <br />
              <label className='course-title-name'>Tell Us About Your Training Goals</label> <br />
              <input type="text" value={values.traninggoal} onChange={e => setvalue({ ...values,traninggoal: e.target.value })}  className='user-text-input' /> <br />
              <div className='btn-course-box'>
                <button className='Course-add-new-btn' onClick={HandleUpdateClint}>Updata Request</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>

  )
}

export default EditClintRequest;