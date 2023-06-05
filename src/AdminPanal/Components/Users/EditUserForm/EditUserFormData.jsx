import axios from 'axios';
import { useState } from 'react'
import { ApiUrl } from '../../../../Apis/ApiUrl';
import { useParams } from 'react-router-dom';

function EditUserFormData() {

    const { id } = useParams();
    // useEffect(() => {
    //     axios.get(`${ApiUrl}/edituser/` + id)
    //         .then(res => {
    //             setvalue({
    //                 ...values, fname: res.data[0].fname, lname: res.data[0].lname,
    //                 email: res.data[0].email, phonenbr: res.data[0].phonenbr,
    //                 password: res.data[0].password, confirmpassword: res.data[0].confirmpassword
    //             });
    //         })
    //         .catch(err => console.log(err))
    // }, []);
    const [values, setvalue] = useState({
        fname: '',
        lname: '',
        email: '',
        phonenbr: '',
        password: '',
        confirmpassword: ''
    });




    const HandleUpdate = (e) => {
        e.preventDefault();
        // clear the input fields when submit form 
        setvalue({
            fname:'',
            lname:'',
            email:'',
            phonenbr:'',
            password:'',
            confirmpassword:'',
        })
        axios.put(`${ApiUrl}/updataData/`+id,values)
        .then(res=>{
            if(res.data.Status === "Success")
            {
                console.log(res.message);
            }
            else{
                alert("Successfully Add New User");
            }
        })
        .catch(err => console.log(err.message));
    }

    return {
        values, setvalue,
        HandleUpdate,
    }
}

export default EditUserFormData