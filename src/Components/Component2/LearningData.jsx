import axios from 'axios';
import { useEffect, useState } from 'react'
import { ApiUrl } from '../../Apis/ApiUrl';

const  LearningData = () => {
    const[learningpathcard , setlearningpathcard] = useState([]);
    useEffect(()=>{
        axios.get(`${ApiUrl}/viewlearningpathcards`)
        .then(res=>{
            setlearningpathcard(res.data)
        })
        .catch(err=>console.log(err.message));
    },[])   
    
  return {learningpathcard }
}

export default LearningData;