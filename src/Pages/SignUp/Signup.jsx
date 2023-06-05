import React from 'react';
import Nav from '../../Modules/Nav/Nav';
import Footer from '../../Modules/Footer/Footer';
import { Grid } from '@material-ui/core';
// import ShowPwd from '../../Assets/Front-Page/showpwd.svg'
// import HidePwd from '../../Assets/Front-Page/hidepwd.svg'
import './SignupStyles.css';
import SignupInput from './SignupInput';
const Signup = () => {
  // const [isRevealPwd, setIsRevealPwd] = React.useState(false);
  const {
    // setname,
    // setcellnbr,
    // setemail,
    // name,
    // cellnbr,
    // email,
    // course1, setCourse1,
    // course2, setCourse2,
    // course3, setCourse3,
    // course4, setCourse4,
    // course5, setCourse5,
    // course6, setCourse6,
    // course7, setCourse7,
    // course8, setCourse8,
    // course9, setCourse9,
    // course10, setCourse10,
    // course11, setCourse11,
    // course12, setCourse12,
    // course13, setCourse13,
    value,setvalue,
    registerUser,

  } = SignupInput()
  return (
    <>
      <Nav />
      <div className="signup-container">
        {/* <p className="signup-title">Sign Up</p> */}
        <h1 className="signup-heading">Register with Brain Analytics to Transform your Career</h1>
      </div>
      <div className="signup-input-container">
        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={12} md={12}>
            <h2 className="create-account">Apply For Early Registration Now</h2>
            <p className="create-account-txt">Avail Early Registration Discounts</p>
          </Grid>
          <Grid container justifyContent='center'>
            <Grid item xs={6} sm={6} md={2}>
              <p className="input-txt">First Name</p>
              <input onChange={(e)=>setvalue({...value, name: e.target.value})} type='text'  className="signup-input" placeholder='Enter your Name' />
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <p className="input-txt">Phone Number</p>
              <input onChange={(e)=>setvalue({...value, cellnbr: e.target.value})} type='number' className="signup-input" placeholder='Enter your Cell Number'/>
            </Grid>
          </Grid>
          <Grid container justifyContent='center'>
            <Grid item xs={6} sm={6} md={2}>
              <p className="input-txt">Email Address</p>
              <input onChange={(e)=>setvalue({...value, email: e.target.value})} type='Email' className="signup-input-email" placeholder='Enter your Email'/>
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              {/* Password Section Disabled */}
              {/* <p className="input-txt">Create a Password</p>
              <input name="pwd"
                onChange={(e) => setpassword(e.target.value)} type={isRevealPwd ? "text" : "password"} value={password} className="signup-input" />
              <img className='password-toggle' title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? ShowPwd : HidePwd}
                onClick={() => setIsRevealPwd(prevState => !prevState)} /> */}
            </Grid>
          </Grid>
          {/* <p className="signup-txt">By continuing I agree to Brain Analytics's  Terms of Service and Customer Privacy Policy</p> */}

        </Grid>
        <div className="checkbox-container">
          <p className="input-txt-checkbox">Please Select Courses you're Interested In</p>
          <Grid container justifyContent={'center'}>
            <div className="check-box">

              <input type="checkbox" onChange={(e)=>setvalue({...value, course1: e.target.value})}  value={"Digital Marketing"} className="checkbox" /> <span className="input-txt">Digital Marketing</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course2: e.target.value})}  value={"Data Analysis & visualization"} className="checkbox" /> <span className="input-txt">Data analysis & Virtualization</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course3: e.target.value})}  value={"Advanced Financial Reporting"} className="checkbox" /> <span className="input-txt">Advanced Financial reporting</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course4: e.target.value})}  value={"Financial Planning & Analysis"} className="checkbox" /> <span className="input-txt">Financial planning & Analysis</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course5: e.target.value})}  value={"Amazon FBA Wholesale"} className="checkbox" /> <span className="input-txt">Amazon FBA Wholesale</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course6: e.target.value})}  value={"Amazon FBA PL"} className="checkbox" /> <span className="input-txt">Amazon FBA Private Label</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course7: e.target.value})}  value={"Daraz VA"} className="checkbox" /> <span className="input-txt">Daraz Virtual Assistant</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course8: e.target.value})}  value={"Fund Graphic Design"} className="checkbox" /> <span className="input-txt">Fundamentals of Graphic design</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course9: e.target.value})}  value={"Adv Graphic Design"} className="checkbox" /> <span className="input-txt">Advanced Graphic Designing</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course10: e.target.value})}  value={"ADV video Editing"} className="checkbox" /> <span className="input-txt">Advanced Video Editing</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course11: e.target.value})}  value={"Mod Web App Dev"} className="checkbox" /> <span className="input-txt">Modern Web App Development</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course12: e.target.value})}  value={"Hyb Mobile app dev"} className="checkbox" /> <span className="input-txt">Hybrid Mobile App Development</span>
              <br />
              <input type="checkbox" onChange={(e)=>setvalue({...value, course13: e.target.value})}  value={"Adv front end dev"} className="checkbox" /> <span className="input-txt">Advanced Front-end Development</span>
              <br />
            </div>
          </Grid>
        </div>
        <button onClick={registerUser} className="signup-btn">
          Apply For Registration
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Signup