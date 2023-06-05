import React from 'react'
import './FooterStyles.css';
import { Grid } from '@mui/material';
import Logo from '../../Assets/Front-Page/footerLogo.png';
import { Link } from 'react-router-dom'
import barcode from '../../Assets/Front-Page/BARCODE.png';
import fb from '../../Assets/Front-Page/FB.png';
import insta from '../../Assets/Front-Page/INSTA.png';
import li from '../../Assets/Front-Page/LIN.png';
import tw from '../../Assets/Front-Page/TW.png';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Grid container>
          <Grid item xs={6} sm={6} md={1}>
            <div className="footer-logo-container">
              <Link to='/'><img src={Logo} alt="Footer Logo" className='footer-logo' /></Link>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <div className="address-container">
              <h4 className="footer-heading">
                HEAD OFFICE
              </h4>
              <p className="footer-txt">
                Brain Analytics, Office 18, Khayaban Gardens Sargodah Road, Faisalabad
                <span className="ph-num">phone: 041-8787246</span>
              </p>
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <div className="footer-links">
              <h4 className="footer-heading">
                LEARN
              </h4>
              <p className="footer-link-txt">
                Courses
              </p>
              <Link className='footer-link' to='/blog'>
                <p className="footer-link-txt">
                  Blog
                </p></Link>
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <div className="footer-links">
              <h4 className="footer-heading">
                RESOURCES
              </h4>
              <Link className='footer-link' to='/gallery'>
                <p className="footer-link-txt">
                  Gallery
                </p></Link>
              <p className="footer-link-txt">
                Help Center
              </p>
              <p className="footer-link-txt">
                Site Map
              </p>
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <div className="footer-links">
              <h4 className="footer-heading">
                SERVICES
              </h4>
              <Link className='footer-link' to='/corporate-training'>
                <p className="footer-link-txt">
                  Corporate Training
                </p></Link>
              <p className="footer-link-txt">
                Consulting
              </p>
            </div>
          </Grid>
         
          <Grid item xs={3} sm={3} md={1}>
            <div className="footer-links">
              <h4 className="footer-heading">
                CONNECT
              </h4>
              <p className="footer-link-txt">
                Meet The Team
              </p>
              <p className="footer-link-txt">
                Connect
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={1}></Grid>
          <Grid item xs={1} sm={1} md={1}>
            <div className="barcode">
              <img src={barcode} alt="barcode" className="barcode-img" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <div className="socialmedia-links">
              <img src={fb} alt="facebook" className="social-media-img" />
              <img src={insta} alt="instagram" className="social-media-img" />
              <img src={li} alt='linked in' className="social-media-img" />
              <img src={tw} alt="twitter" className="social-media-img" />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="end-footer">
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <p className="end-footer-txt">
              &copy; Brain Analytics, LLC | All Rights Reserved
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <span className="end-footer-txt">Terms and Conditions</span>
            <span className="end-footer-txt">Privacy</span>
            <span className="end-footer-txt">Contact</span>

          </Grid>

        </Grid>
      </div>

    </>
  )
}
export default Footer