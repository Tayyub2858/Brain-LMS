import React from 'react'
import './AdminDashboardStyle.css';
import Drwaradminpanal from '../../Pages/Drwaradminpanal/Drwaradminpanal';
import { FaUsers, FaUserGraduate, FaUserEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { SiBookstack } from 'react-icons/si';
import { RxCross2 } from 'react-icons/rx'
import { Grid, Card } from '@material-ui/core';
import HandleAdminDashboard from './HandleAdminDashboard';
const AdminDashbaord = () => {

  const{ TotalRows ,Totalcourse}=HandleAdminDashboard();

  return (
    <>
      <Drwaradminpanal componentsName={"Admin Dashboard"} />

      <div className="admin-dashboard-container">
        {/* Desgin all Card of Summer   */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <Card className='dash-card'>
              <div className='card-text'>
                <h2 className='card-title'>Total Students</h2>
                <h1 className='counter-nbr'>{TotalRows}</h1>
              </div>
              <div className='react-icons'>
                <li className='react-icons-dash'><FaUsers /></li>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card className='dash-card'>
              <div className='card-text'>
                <h2 className='card-title'>New Students</h2>
                <h1 className='counter-nbr'>50</h1>
              </div>
              <div className='react-icons'>
                <li className='react-icons-dash'><FaUserEdit /></li>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card className='dash-card'>
              <div className='card-text'>
                <h2 className='card-title'>Delete Students</h2>
                <h1 className='counter-nbr'>20</h1>
              </div>
              <div className='react-icons'>
                <li className='react-icons-dash'><AiFillDelete /></li>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card className='dash-card'>
              <div className='card-text'>
                <h2 className='card-title'>Completed Course</h2>
                <h1 className='counter-nbr'>0</h1>
              </div>
              <div className='react-icons'>
                <li className='react-icons-dash'><FaUserGraduate /></li>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card className='dash-card'>
              <div className='card-text'>
                <h2 className='card-title'>Total Course</h2>
                <h1 className='counter-nbr'>{Totalcourse}</h1>
              </div>
              <div className='react-icons'>
                <li className='react-icons-dash'><SiBookstack /></li>
              </div>
            </Card>
          </Grid>
        </Grid>
        {/* Closing of all Cards Summery  */}

        {/* Add field of Recent Notification bar  */}
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="notification-bar">
              <div className="recent-notifiction">
                <h1 className="notifiction-title">Recent Notification</h1>
                <div className='notifiction-box'>
                  <div className="notification-row">
                    <div className='notification-icon'><button className='notification-btn'><RxCross2 className='cross-icons'/></button></div>
                    <div><li className='notification-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nisi corrupti numquam eum sed dolore placeat tempore mollitia officiis, amet commodi totam nostrum odio necessitatibus adipisci reiciendis doloribus minima in.</li></div>
                    <div className='notification-date-time'><li className='notification-time'>23/23/23</li></div>
                  </div>
                  <hr />
                  <div className="notification-row">
                    <div className='notification-icon'><button className='notification-btn'><RxCross2 className='cross-icons'/></button></div>
                    <div><li className='notification-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nisi corrupti numquam eum sed dolore placeat tempore mollitia officiis, amet commodi totam nostrum odio necessitatibus adipisci reiciendis doloribus minima in.</li></div>
                    <div className='notification-date-time'><li className='notification-time'>23/23/23</li></div>
                  </div>
                  <hr />
                  <div className="notification-row">
                    <div className='notification-icon'><button className='notification-btn'><RxCross2 className='cross-icons'/></button></div>
                    <div><li className='notification-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nisi corrupti numquam eum sed dolore placeat tempore mollitia officiis, amet commodi totam nostrum odio necessitatibus adipisci reiciendis doloribus minima in.</li></div>
                    <div className='notification-date-time'><li className='notification-time'>23/23/23</li></div>
                  </div>
                  <hr />  
                  <div className="notification-row">
                    <div className='notification-icon'><button className='notification-btn'><RxCross2 className='cross-icons'/></button></div>
                    <div><li className='notification-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nisi corrupti numquam eum sed dolore placeat tempore mollitia officiis, amet commodi totam nostrum odio necessitatibus adipisci reiciendis doloribus minima in.</li></div>
                    <div className='notification-date-time'><li className='notification-time'>23/23/23</li></div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        {/* end the field of Recent Notification bar  */}

        {/* Show all user to enroll of cources  */}

        <div className='show-enroll-user'>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <div className='user-title-bar'>
                <h1 className='enrollment-title'>Enroll Studendts</h1>
              </div>
            </Grid>
          </Grid>
          
              <div className='std-table'>
                <table id="responsive-table" className='enroll-all-user'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Course 1</th>
                      <th>Course 2</th>
                      <th>Course 3</th>
                      <th>Course 4</th>
                      <th>Course 5</th>
                      <th>Course 6</th>
                      <th>Course 7</th>
                      <th>Course 8</th>
                      <th>Course 9</th>
                      <th>Course 10</th>
                      <th>Course 11</th>
                      <th>Course 12</th>
                      <th>Course 13</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>user</td>
                      <td>user@gmail.com</td>
                      <td>03001234567</td>
                      <td>Data Analysis</td>
                      <td>Data analysis & Virtualization</td>
                      <td>Advanced Financial reporting</td>
                      <td>Financial planning & Analysis</td>
                      <td>Amazon FBA Wholesale</td>
                      <td>Amazon FBA Private Label</td>
                      <td> Daraz Virtual Assistant</td>
                      <td>Fundamentals of Graphic design</td>
                      <td> Advanced Graphic Designing</td>
                      <td> Advanced Video Editing</td>
                      <td>Modern Web App Development</td>
                      <td>Hybrid Mobile App Development</td>
                      <td>Advanced Front-end Development</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>user</td>
                      <td>user@gmail.com</td>
                      <td>03001234567</td>
                      <td>Data Analysis</td>
                      <td>Data analysis & Virtualization</td>
                      <td>Advanced Financial reporting</td>
                      <td>none</td>
                      <td>Amazon FBA Wholesale</td>
                      <td>none</td>
                      <td> Daraz Virtual Assistant</td>
                      <td>Fundamentals of Graphic design</td>
                      <td> Advanced Graphic Designing</td>
                      <td> Advanced Video Editing</td>
                      <td>Modern Web App Development</td>
                      <td>none</td>
                      <td>Advanced Front-end Development</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>user</td>
                      <td>user@gmail.com</td>
                      <td>03001234567</td>
                      <td>Data Analysis</td>
                      <td>none</td>
                      <td>Advanced Financial reporting</td>
                      <td>Financial planning & Analysis</td>
                      <td>none</td>
                      <td>Amazon FBA Private Label</td>
                      <td> Daraz Virtual Assistant</td>
                      <td>none</td>
                      <td> Advanced Graphic Designing</td>
                      <td> Advanced Video Editing</td>
                      <td>none</td>
                      <td>Hybrid Mobile App Development</td>
                      <td>Advanced Front-end Development</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>user</td>
                      <td>user@gmail.com</td>
                      <td>03001234567</td>
                      <td>Data Analysis</td>
                      <td>Data analysis & Virtualization</td>
                      <td>Advanced Financial reporting</td>
                      <td>Financial planning & Analysis</td>
                      <td>Amazon FBA Wholesale</td>
                      <td>Amazon FBA Private Label</td>
                      <td> Daraz Virtual Assistant</td>
                      <td>Fundamentals of Graphic design</td>
                      <td> Advanced Graphic Designing</td>
                      <td> Advanced Video Editing</td>
                      <td>none</td>
                      <td>none</td>
                      <td>none</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>user</td>
                      <td>user@gmail.com</td>
                      <td>03001234567</td>
                      <td>Data Analysis</td>
                      <td>Data analysis & Virtualization</td>
                      <td>Advanced Financial reporting</td>
                      <td>Financial planning & Analysis</td>
                      <td>Amazon FBA Wholesale</td>
                      <td>Amazon FBA Private Label</td>
                      <td> Daraz Virtual Assistant</td>
                      <td>Fundamentals of Graphic design</td>
                      <td> Advanced Graphic Designing</td>
                      <td> Advanced Video Editing</td>
                      <td>Modern Web App Development</td>
                      <td>Hybrid Mobile App Development</td>
                      <td>Advanced Front-end Development</td>
                    </tr>
                  </tbody>
                </table>
              </div>
        </div>

      </div>
    </>

  )
}

export default AdminDashbaord