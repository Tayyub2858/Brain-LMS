import axios from "axios";
import { useState } from "react"
import { ApiUrl } from "../../../../Apis/ApiUrl";


function LearningPathAddData() {
    const [title , settitle] = useState();
    const [totalweeks , settotalweeks] = useState();
    const [totalvideos , settotalvideos] = useState();
    const [file , setfile] = useState();


    const Handlelearningpathfile = (e) =>{
        setfile(e.target.files[0]);
    }

    const Handlelearningpath = () =>{
        settitle('')
        settotalweeks('')
        settotalvideos('')
        
        if(title === ''){
            alert('Plz enter your title')
        }
        if(totalweeks === '')
        {
            alert("plz enter your total weeks of course")
        }
        if(totalvideos === '')
        {
            alert("plz enter your totalvideo of course")
        }
        const formData = new FormData();
        formData.append('image' , file);
        formData.append('title',title);
        formData.append('totalweeks' , totalweeks);
        formData.append('totalvideos' , totalvideos);
        axios.post(`${ApiUrl}/learningpath`,formData)
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
    title,settitle,
    totalweeks,settotalweeks,
    totalvideos , settotalvideos,
    Handlelearningpath,
    Handlelearningpathfile,
  }
}

export default LearningPathAddData