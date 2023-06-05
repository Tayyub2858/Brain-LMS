import React from 'react';
import './ClintRequest.css';
import { Grid } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import {MdModeEditOutline ,MdDelete} from 'react-icons/md';
import Drwaradminpanal from '../../Pages/Drwaradminpanal/Drwaradminpanal'
import ClintRequestData from './ClintRequestData';

const ClintRequest = () => {
    const{getclintrequest} = ClintRequestData()
    
    const HandleClintDelete = () =>{}
    return (
        <>
            <Drwaradminpanal componentsName={"Clints Requests"} />
            <div className="clintrequest-container">
                <div className="clintheader">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="search-bar">
                                <h3 className='search-title'>Search:</h3>
                                <input type="text" placeholder='Search user name' className='search-input-text' />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>

                            <div className="add-user-new">
                                <Link to='/ClintRequest/AddNewClintRequest'><button className='add-user-btn'>Add Clint Request</button></Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="std-list-user">
                    <h1 className='clint-list-title'>All Clints Requests</h1>
                </div>
                <div className="clint-list-table">
                    <table id="responsive-table" className=' '>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>EmailAddress</th>
                                <th>Comany Name</th>
                                <th>Hear About Brain</th>
                                <th>Traning Goals</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                        {getclintrequest && getclintrequest.length > 0 && getclintrequest.map((clint , index) => (
                                <tr key={index}>
                                    <td>{clint.id}</td>
                                    <td>{clint.fname}</td>
                                    <td>{clint.lname}</td>
                                    <td>{clint.email}</td>
                                    <td>{clint.compname}</td>
                                    <td>{clint.hearbrain}</td>
                                    <td>{clint.traninggoal}</td>
                                    <td><Link to={`/ClintRequest/Edit/${clint.id}`}><button className='edit-btn' ><MdModeEditOutline className='edit-icons-size' /></button></Link></td>
                                    <td><button className='delete-btn' onClick={()=>HandleClintDelete(clint.id)}><MdDelete className='delete-icons-size' /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ClintRequest