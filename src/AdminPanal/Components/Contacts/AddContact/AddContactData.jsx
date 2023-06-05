import axios from "axios";
import { useState } from "react"
import { ApiUrl } from "../../../../Apis/ApiUrl";


function AddContactData() {

    const [fname, setfname] = useState();
    const [email, setemail] = useState();
    const [indivitraning, setindivitraning] = useState();
    const [coprtraning, setcoprtraning] = useState();
    const [other, setother] = useState();
    const [message, setmessage] = useState();

    const HandleAddContact =() =>{
        axios.post(`${ApiUrl}/contact`,{
            fname:fname,
            email:email,
            indivitraning:indivitraning,
            coprtraning:coprtraning,
            other:other,
            message:message,
        })
        .then(res=>{
            if(res.data.Status === "Success")
            {
                console.log(res.message);
            }
            else{
                alert("Successfully Add Contact");
            }
        });
    }
    return {
        fname, setfname,
        email, setemail,
        indivitraning, setindivitraning,
        coprtraning, setcoprtraning,
        other, setother,
        message, setmessage,
        HandleAddContact,
    }
}

export default AddContactData