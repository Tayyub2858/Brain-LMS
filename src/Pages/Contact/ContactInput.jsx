import {useState} from "react";
import { ApiUrl } from "../../Apis/ApiUrl";
import axios from "axios";
const ContactInput = () => {
// const [fullName, setfullName] = useState("");
// const [emailAddress, setemailAddress] = useState("");
// const [trainingType, settrainingType] = useState("");
// const [message, setmessage] = useState("");
   const [contact , setcontact] = useState({
    fname : '',
    email : '',
    indivitraning : '',
    coprtraning : '',
    other : '',
    message : '',
   });


const contactHandler = (e) => {
    e.preventDefault();
    setcontact({
        fname : '',
        email : '',
        indivitraning : '',
        coprtraning : '',
        other : '',
        message : ''
    })
    // console.log(fullName, emailAddress, trainingType, message);
    // setfullName("")
    // setemailAddress("")
    // setmessage("")
    axios.post(`${ApiUrl}/contact`,contact)
    .then(res=>{
        if(res.data.Status === "Success")
        {
            console.log(res.message);
        }
        else{
            alert("Successfully contact");
        }
    })
}
return{
    // fullName,
    // setfullName,
    // emailAddress,
    // setemailAddress,
    // trainingType,
    // settrainingType,
    // message,
    // setmessage,
    contact , setcontact,
    contactHandler
}
}
export default ContactInput;