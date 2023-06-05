import axios from "axios";
import { useState } from "react"
import {ApiUrl} from '../../../../Apis/ApiUrl'

function AddNewCourseData() {
    const [title , settitle] = useState();
    const [desc , setdesc] = useState();
    const [file , setfile] = useState();

    const HandleCoursefile = (e) =>{
        setfile(e.target.files[0]);
    }

    const handleAddcourse = async() =>{
        settitle('');
        setdesc('');
        if(title === ''){
            alert("plz enter the title")
        }
        if(desc === ''){
            alert("plz enter the descriptios")
        }
        const formData = new FormData();
        formData.append('image',file);
        formData.append('title', title);
        formData.append('desc', desc);
        axios.post(`${ApiUrl}/upload`,formData)
        .then(res=>{
            if(res.data.Status === "Success"){
              console.log("Successded")
            } 
            else{
              console.log("Failed")
            }
          })
          .catch(err=>console.log(err.message))
    }

  return {
    title , settitle,
    desc , setdesc,
    file , setfile,
    handleAddcourse,
    HandleCoursefile,
  }
}

export default AddNewCourseData