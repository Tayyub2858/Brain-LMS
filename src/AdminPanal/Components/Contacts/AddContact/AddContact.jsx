import React from 'react';
import './AddContactStyle.css';
import { Grid } from '@material-ui/core';
import Drwaradminpanal from '../../../Pages/Drwaradminpanal/Drwaradminpanal'
import AddContactData from './AddContactData';

const AddContact = () => {

  const{
    fname, setfname,
    email, setemail,
    indivitraning, setindivitraning,
    coprtraning, setcoprtraning,
    other, setother,
    message, setmessage,
    HandleAddContact,
  } = AddContactData();


  return (
    <>
    <Drwaradminpanal componentsName={"Add Contact Message"}/>
    <div className="addcontact-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="addcontact-box">
              <h1>Add Contact Message</h1>
              <label className='addcontact-title-name'>First Name</label><br />
              <input type="text" value={fname} onChange={(e)=>setfname(e.target.value)} placeholder='Enter your course title' className='addcontact-text-input' /><br />
              <label className='addcontact-title-name'>Email Address</label><br />
              <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter your course description' className='addcontact-text-input' /><br />
              <label className='addcontact-title-name'>I'm looking for</label><br />
              <input type="radio" value={indivitraning} onChange={(e)=>setindivitraning(e.target.value)} /><span> Individual Training</span> <br />
              <input type="radio" value={coprtraning} onChange={(e)=>setcoprtraning(e.target.value)} /><span> Coprate Traning</span><br />
              <input type="radio" value={other} onChange={(e)=>setother(e.target.value)} /><span> other</span><br />
              <label className='addcontact-title-name'>Message</label> <br />
              <input type="text" value={message} onChange={(e)=>setmessage(e.target.value)} placeholder='Enter your message'  className='addcontact-text-input'/> <br />
              <div className='btn-addcontact-box'>
                <button className='addcontact-add-new-btn' onClick={HandleAddContact}>Add New Contact</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default AddContact