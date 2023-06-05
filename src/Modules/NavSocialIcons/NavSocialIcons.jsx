import React from 'react'
import './NavSocialIconsStyle.css';
import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaInstagramSquare,} from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { IoCall } from 'react-icons/io5'
import HandleNavSocialicons from './HandleNavSocialicons';
const NavSocialIcons = () => {

    const {
        Handlelocation,
        HandleGmail,
        Handlephone,
        HandleWhatsapp,
        HandleFacebook,
        HandleLinkedin,
        Handletwitter,
        HandleInstagram,
    } = HandleNavSocialicons();
    return (
        <>
            <div className="navSocialicons-container">
                <div className="socialicons-text-container">
                    <div className="socialicons-leftside">
                        <p className='icons-div' onClick={HandleGmail}><MdEmail /></p>
                        <p className='social-email' onClick={HandleGmail}>brainanalytics.pk@gmail.com</p>
                        <div style={{ borderLeft: "1px solid ", height: "4vh", marginTop: "10px" }}></div>
                        <p className='icons-call' onClick={Handlephone}><IoCall /></p>
                        <p className='contact-nbr' onClick={Handlephone}>041-8787246</p>
                        <div style={{ borderLeft: "1px solid ", height: "4vh", marginTop: "10px" }}></div>
                        <p className='icons-home' onClick={Handlelocation} ><MdLocationOn /></p>
                        <p className='address' onClick={Handlelocation}>Khayaban Gardens Faisalabad</p>
                    </div>
                    <div className="navsocial-links">
                        <button className='navsocial-icons' onClick={HandleWhatsapp}><RiWhatsappFill className='icons-nav'  /></button>
                        <button className='navsocial-icons' onClick={HandleFacebook}><BsFacebook className='icons-nav'  /></button>
                        <button className='navsocial-icons' onClick={HandleLinkedin}><FaLinkedin className='icons-nav' /></button>
                        <button className='navsocial-icons' onClick={Handletwitter}><AiFillTwitterCircle className='icons-nav'  /></button>
                        <button className='navsocial-icons' onClick={HandleInstagram}><FaInstagramSquare className='icons-nav'  /></button>
                    </div >
                </div >
            </div >
        </>

    )
}

export default NavSocialIcons