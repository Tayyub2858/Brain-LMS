import axios from "axios";
import { useState } from "react"
import { ApiUrl } from "../../../../Apis/ApiUrl";


function AddNewClintRequestData() {
    const [fname, setfname] = useState();
    const [lname, setlname] = useState();
    const [email, setemail] = useState();
    const [compname, setcompname] = useState();
    const [hearbrain, sethearbrain] = useState();
    const [traninggoal, settraninggoal] = useState();

    const HandleAddClint = () => {
        setfname('')
        setlname('')
        setemail('')
        setcompname('')
        sethearbrain('')
        settraninggoal('')
        if(fname === ''){
            alert("plz enter your first name")
        }
        if(lname === ''){
            alert("plz enter your last name")
        }
        if(email === ''){
            alert("plz enter your email address")
        }
        if(compname === ''){
            alert("plz enter your company name")
        }
        if(hearbrain === ''){
            alert("plz enter your hearBrain")
        }
        if(traninggoal === ''){
            alert("plz enter your traningGoals")
        }
        axios.post(`${ApiUrl}/clintrequest`,{
            fname:fname,
            lname:lname,
            email:email,
            compname:compname,
            hearbrain:hearbrain,
            traninggoal:traninggoal, 
        })
        .then(res=>{
            if(res.data.Status === "Success")
            {
                console.log(res.message);
            }
            else{
                alert("Successfully ClintRequest");
            }
        });
    }

    return {
        fname, setfname,
        lname, setlname,
        email, setemail,
        compname, setcompname,
        hearbrain, sethearbrain,
        traninggoal, settraninggoal,
        HandleAddClint,
    }
}

export default AddNewClintRequestData