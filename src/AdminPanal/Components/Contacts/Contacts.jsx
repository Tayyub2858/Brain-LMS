import React from 'react';
import './ContactsStyle.css';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ContactData from './ContactsData';
import { MdModeEditOutline, MdDelete } from 'react-icons/md'
import Drwaradminpanal from '../../Pages/Drwaradminpanal/Drwaradminpanal'

const Contacts = () => {
  const{showcontact}=ContactData()
  return (
    <>
      <Drwaradminpanal componentsName={"Contacts"} />
      <div className="contact-container">
        <div className="contact-header">
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <div className="contact">
                <h1 className='contact-title'>All Contacts</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className="add-new-contact">
                <Link to='/Contact/Addcontact'><button className='add-new-contact-btn'>Add LearningPath</button></Link>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="contact-list-show">
          <table id="responsive-table" className='contact-table'>
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Indivitraning</th>
              <th>Coprate traning</th>
              <th>Other</th>
              <th>Message</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {showcontact && showcontact.length > 0 && showcontact.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.id}</td>
                  <td>{contact.fname}</td>
                  <td>{contact.email}</td>
                  <td>{contact.indivitraning}</td>
                  <td>{contact.coprtraning}</td>
                  <td>{contact.other}</td>
                  <td>{contact.message}</td>
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

export default Contacts