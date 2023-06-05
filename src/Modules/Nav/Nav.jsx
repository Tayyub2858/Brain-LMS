import React, { useState } from 'react';
import Logo from '../../Assets/Front-Page/Logo4.png'
import './NavStyles.css';
import { Link } from 'react-router-dom';
const Nav = () => {
    
  const [isMenuClosed, setMenuClosed] = useState(true);
  return (
     <div className="nav-container" >
        <div className="nav-container-text">
            <nav>
                <div className="nav-brand">
                <Link to='/'> <img src={Logo} alt="companylogo" className='company-logo' /></Link> 
                </div>
                <div className="nav-links">
                    <Link to='/'><span className="nav-btn">Home</span> </Link>   
                    <Link to='/learn'><span className="nav-btn">Courses</span> </Link>   
                    <Link to='/corporate-training'><span className="nav-btn"> Services</span> </Link>     
                    <Link to='/Pricing'><span className="nav-btn">Plans</span> </Link>  
                    <Link to='/Pricing'><span className="nav-btn">Corperate Traning</span> </Link>  
                    <Link to='/gallery'><span  className="nav-btn">News & Events</span> </Link>
                    <Link to="/" ><span className='nav-btn'>Resources</span></Link>
                    <Link to='/gallery'><span  className="nav-btn">Faqs</span> </Link>
                    <Link className='nav-btn' to='/contact'> <span className="nav-btn">Contact</span> </Link> 
                    {/* <Link to='/gallery'><span  className="nav-btn">Gallery</span> </Link> */}
                {/* <Link className='nav-btn' to='/login'> <span className="nav-btn">LOGIN</span> </Link>  */}
                <Link  to='/signup'> <button className="signup">Start Learning</button> </Link>  
                </div>
                
                <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}>☰</div>
            </nav>
            <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
                <div>
                <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                    <div className="overlay-menu-wrapper">
                        <div className="overlay-menu">
                            <Link to='/'><button className="nav-btn-mb">HOME</button></Link>   
                            <Link to='/learn'><button className="nav-btn-mb">LEARN</button></Link>
                            <Link to='/corporate-training'><button className="nav-btn-mb">SERVICES</button></Link>
                            <Link to='/pricing'><button className="nav-btn-mb">PRICING</button></Link>
                            <Link to='/Testimonials'> <button className="nav-btn-mb">GALLERY</button></Link>
                            <Link to='/contact'> <button className="nav-btn-mb">CONTACT</button></Link>
                            <Link to='/Login'><button className="nav-btn-mb">LOGIN</button></Link>
                            <Link to='/Signup'><button className="signup-mb">SIGN UP</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Nav;





  //     <div className="navbar-containter">
  //     <Grid container>
  //         <Grid xs={3}>
  //           <div className='nav-logo-container'>
  //           <img src={Logo} alt="" className='navbar-image' />
  //           </div>
  //         </Grid>
  //         <Grid xs={6}>
  //           <nav className='navbar-nav'>
  //             <ul><li>LEARN</li></ul>
  //             <ul><li>RESOURCES</li></ul>
  //             <ul><li>TEAM TRANING</li></ul>
  //             <ul><li>PRICING</li></ul>
  //             <ul><li>TESTIMONIALS</li></ul>
  //           </nav>
  //         </Grid>
  //         <Grid xs={3}>
  //           <div className='navbar-signup'>
  //           <nav className='navbar-nav'>
  //             <ul><li>CONTACT</li></ul>
  //             <ul><li>LOGIN</li></ul>
  //           </nav>
  //           <button className='nav-signup-btn'>SIGN UP</button>
  //           </div>
  //         </Grid>
  //       </Grid>
       
  //     </div>
  //   </>
  // )