import axios from 'axios';
import { useState } from 'react'
import { ApiUrl } from '../../../../Apis/ApiUrl';

function HandleUserForm() {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [phonenbr, setphonenbr] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    const HandleAdd = () =>{
        setfname('')
        setlname('')
        setemail('')
        setphonenbr('')
        setpassword('')
        setconfirmpassword('')
        
        if(fname === ''){
            alert("plz enter your first name")
        }
        if(lname === ''){
            alert("plz enter your last name")
        }
        if(email === ''){
            alert("plz enter your email address")
        }
        if(phonenbr === ''){
            alert("plz enter your phone number")
        }
        if(password === ''){
            alert("plz enter your password")
        }
        if(confirmpassword === ''){
            alert("plz enter your confirm password")
        }
        axios.post(`${ApiUrl}/newuseradd`,{
            fname:fname,
            lname:lname,
            email:email,
            phonenbr:phonenbr,
            password:password,
            confirmpassword:confirmpassword,
        })
        .then(res=>{
            if(res.data.Status === "Success")
            {
                console.log(res.message);
            }
            else{
                alert("Successfully Add New User");
            }
        });

    }

    return {
        fname, setfname,
        lname, setlname,
        email, setemail,
        phonenbr, setphonenbr,
        password, setpassword,
        confirmpassword, setconfirmpassword,
        HandleAdd,
    }
}

export default HandleUserForm