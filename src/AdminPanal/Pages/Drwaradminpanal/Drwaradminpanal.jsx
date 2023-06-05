import React from 'react'
import './DrwaradminpanalStyle.css';
import { TfiMenu } from 'react-icons/tfi'
import {MdDashboard ,MdOutlineVideoSettings ,MdLocalLibrary,MdPayment} from 'react-icons/md';
import {IoIosContact} from 'react-icons/io'
import {FaUsers} from 'react-icons/fa';
import {GoRequestChanges} from  'react-icons/go';
import {GrGallery} from 'react-icons/gr'
import { SiBookstack } from 'react-icons/si';

import { Drawer } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Front-Page/Logo4.png'

const Drwaradminpanal = (props) => {
    const [Open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleDrawerClose = () => {
        setOpen(false)
    }
    return (
        <>
            <div className="drawaradmin-nav">
                <TfiMenu onClick={handleDrawerOpen} />
                <span className="component-title">{props.componentsName}</span>
            </div>
            <Drawer
                anchor="left"
                onClose={handleDrawerClose}
                open={Open}
            >

                <div className="admin-sidebar">
                   
                        <img src={Logo} alt="Display Logo" className='admin-sidebar-logo' />
                        <Link className="sidebar-row" to='/admin/Dashboard' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><MdDashboard/></li>
                            <li className='sidebar-title' >Dashboard </li>
                        </Link>
                        <Link className="sidebar-row" to='/admin/Users' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><FaUsers /></li>
                            <li className='sidebar-title' >All Users</li>
                        </Link>
                        <Link className="sidebar-row" to='/admin/Courses' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><SiBookstack/></li>
                            <li className='sidebar-title' >Courses</li>
                        </Link>
                        <Link className="sidebar-row" to='/admin/Videos' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><MdOutlineVideoSettings /></li>
                            <li className='sidebar-title' >Videos</li>
                        </Link>
                        <Link className="sidebar-row" to='/admin/LearningPath' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><MdLocalLibrary /></li>
                            <li className='sidebar-title' >Lerning Path</li>
                        </Link>
                        <Link className="sidebar-row" to='/admin/ClintRequest' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><GoRequestChanges /></li>
                            <li className='sidebar-title' >Clints Request</li>
                        </Link>
                        <Link className="sidebar-row" to='/admin/Contact' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><IoIosContact /></li>
                            <li className='sidebar-title' >Contact</li>
                        </Link>
                        <Link className="sidebar-row" to='/admin/Gallery' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><GrGallery/></li>
                            <li className='sidebar-title' >Gallery</li>
                        </Link>
                        <Link className="sidebar-row" to='/admin/data-playground' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><MdPayment /></li>
                            <li className='sidebar-title' >Pricing</li>
                        </Link>
                        {/* <div className="bottom-txt">
                            <Link className="sidebar-row" to='/helpcenter' onClick={handleDrawerClose}>
                                <li className='sidebar-icons' ><BiHelpCircle /></li>
                                <li className='sidebar-title' >Help Center</li>
                            </Link>
                            <Link className="sidebar-row" to='/' onClick={handleDrawerClose}>
                                <li className='sidebar-icons' ><FiLogOut /></li>
                                <li className='sidebar-title' >Logout</li>
                            </Link>
                        </div> */}
                    
                </div>
            </Drawer>
        </>
    )
}

export default Drwaradminpanal