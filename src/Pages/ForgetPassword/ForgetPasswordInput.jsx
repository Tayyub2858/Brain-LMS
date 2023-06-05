import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { db } from "../../ConfigFile/Firebase-Config";
// import { collection, getDocs } from "@firebase/firestore/lite";

import {app} from "../../ConfigFile/Firebase-Config";

const auth = getAuth(app);

    
const ForgetPasswordInput = () =>{
    
const navigate = useNavigate();
    const[emailAddress , setemailAddress] = useState();


    const Forget= (e) =>{
        e.preventDefault();
        setemailAddress('');
        sendPasswordResetEmail(auth , emailAddress)
        .then(() => {
            alert('Password reset email sent successfully');
          })
          .catch(() => {
            console.log(alert("Enter your Valid Email"));
          });
          console.log(emailAddress);

          navigate('/')
    }

    return(
        {
            setemailAddress,
            emailAddress,
            Forget,
        }
    )
}
export default ForgetPasswordInput;