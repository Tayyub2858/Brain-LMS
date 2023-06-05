import React from 'react';
import './DashboardDrawerStyles.css'
import { Drawer } from '@material-ui/core'
import Logo from '../../Assets/Front-Page/Logo4.png'
import { MdDashboard, MdLocalLibrary } from 'react-icons/md';
import { FaProjectDiagram } from 'react-icons/fa';
import { GrStorage } from 'react-icons/gr';
import { BiHelpCircle } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const DrawerDasboard = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (

        <>
            <div className='dashboard-nav'>
                <MdDashboard onClick={handleDrawerOpen} />
                <span className='component-title'>{props.componentName}</span>
            </div>
            <Drawer
                anchor="left"
                onClose={handleDrawerClose}
                open={open}
            >

                <div className="sidebar">
                    <div className='sidebar-list'>
                        <img src={Logo} alt="Display Logo" className='sidebar-logo' />
                        <Link className="sidebar-row" to='/dashboard' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><MdDashboard /></li>
                            <li className='sidebar-title' >Dashboard </li>
                        </Link>
                        <Link className="sidebar-row" to='/learning-path' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><MdLocalLibrary /></li>
                            <li className='sidebar-title' >My Learning Path</li>
                        </Link>
                        <Link className="sidebar-row" to='/portfolio' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><FaProjectDiagram /></li>
                            <li className='sidebar-title' >Portfolio</li>
                        </Link>
                        <Link className="sidebar-row" to='/data-playground' onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><GrStorage /></li>
                            <li className='sidebar-title' >Data Playground</li>
                        </Link>
                        <div className="bottom-txt">
                            <Link className="sidebar-row" to='/helpcenter' onClick={handleDrawerClose}>
                                <li className='sidebar-icons' ><BiHelpCircle /></li>
                                <li className='sidebar-title' >Help Center</li>
                            </Link>
                            <Link className="sidebar-row" to='/' onClick={handleDrawerClose}>
                                <li className='sidebar-icons' ><FiLogOut /></li>
                                <li className='sidebar-title' >Logout</li>
                            </Link>
                        </div>
                    </div>
                </div>

            </Drawer>

        </>


    );
}
export default DrawerDasboard;