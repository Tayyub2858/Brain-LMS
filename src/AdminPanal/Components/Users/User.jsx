import React from 'react'
import './UserStyle.css';
import Drwaradminpanal from '../../Pages/Drwaradminpanal/Drwaradminpanal';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MdModeEditOutline, MdDelete } from 'react-icons/md'
import UserHandle from './UserData';
import axios from 'axios';
import { ApiUrl } from '../../../Apis/ApiUrl';
// import { toast } from 'react-toastify';


const User = () => {
    const { showuser , loadData} = UserHandle();
    // const {id} = useParams;
    const HandleUserDelete = (id) =>{

        if(
            window.confirm("Are your sure that you wanted to delete that user ?")
        ){
            axios.delete(`${ApiUrl}/deleteuser/${id}`);
            alert("User Delete successfully");
            setTimeout(()=> loadData(),500)
        }
    }
    return (
        <>
            <Drwaradminpanal componentsName={"Display All Users"} />
            <div className='users-container'>
                <div className="userheader">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="search-bar">
                                <h3 className='search-title'>Search:</h3>
                                <input type="text" placeholder='Search user name' className='search-input-text' />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>

                            <div className="add-user-new">
                                <Link to='/Users/AddUser'><button className='add-user-btn'>Add New User</button></Link>
                            </div>
                        </Grid>
                    </Grid>

                </div>
                <div className="std-list-user">
                    <h1 className='user-list-title'>All Users List</h1>
                </div>
                <div className="user-list-table">
                    <table id="responsive-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>EmailAddress</th>
                                <th>PhoneNubmber</th>
                                <th>Password</th>
                                <th>Confirm Password</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {showuser && showuser.length > 0 && showuser.map((user , index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phonenbr}</td>
                                    <td>{user.password}</td>
                                    <td>{user.confirmpassword}</td>
                                    <td><Link to={`/Users/Edit/${user.id}`}><button className='edit-btn' ><MdModeEditOutline className='edit-icons-size' /></button></Link></td>
                                    <td><button className='delete-btn' onClick={()=>HandleUserDelete(user.id)}><MdDelete className='delete-icons-size' /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default User