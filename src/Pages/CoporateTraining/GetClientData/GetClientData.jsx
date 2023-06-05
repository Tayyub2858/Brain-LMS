// import { collection, addDoc } from "@firebase/firestore/lite";
// import { db } from "../../../ConfigFile/Firebase-Config";
import axios from "axios";
import { useState } from "react";
import { ApiUrl } from '../../../Apis/ApiUrl';
const GetClientData = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [compname, setcompname] = useState("");
    // const [compsize, setcompsize] = useState("");
    const [hearbrain, sethearbrain] = useState("");
    const [traninggoal, settraninggoal] = useState("");

    const requestHandler = async (e) => {
        e.preventDefault();
        // Firebase code or commneted
        // await addDoc(collection(db, "ClintRequests"), {
        //     fname: fname,
        //     lname: lname,
        //     Email: email,
        //     CompanyName: compname,
        //     CompanySize: compsize,
        //     HearaboutBrainanalyic: hearbrain,
        //     TrainingGoals: traninggoal,
        // }).then(function (res) {
        //     alert("Request Send Succussfully")
        //     console.log(res)
        // }).catch(function (res) {
        //     alert("Request cannot Send Successfully")
        //     console.log(res)
        // })
        // console.log(fname, lname, email, compname, compsize, hearbrain, traninggoal);
        setfname("")
        setlname("")
        setemail("")
        setcompname("")
        // setcompsize("")
        sethearbrain("")
        settraninggoal("")
        axios.post(`${ApiUrl}/clintrequest`, {
            fname:fname,
            lname:lname ,
            email:email,
            compname:compname,
            // compsize : compsize,
            hearbrain:hearbrain,
            traninggoal:traninggoal,
        })
        .then(res=>{
            if(res.data.Status === "Success")
            {
                console.log(res.message);
            }
            else{
                alert("Successfully Register");
            }
        });
    }

    return {
        setfname,
        setlname,
        setemail,
        setcompname,
        // setcompsize,
        sethearbrain,
        settraninggoal,
        fname,
        lname,
        email,
        compname,
        // compsize,
        hearbrain,
        traninggoal,
        requestHandler,
    }
}
export default GetClientData;