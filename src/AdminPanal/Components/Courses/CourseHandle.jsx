import axios from "axios";
import { useEffect, useState } from "react";
import { ApiUrl } from "../../../Apis/ApiUrl";



function CourseHandle() {
  const [showcoursecard, setshowcoursecard] = useState([]);

  const loadData = () =>{
    axios.get(`${ApiUrl}/videwcoursecards`)
    .then(res => {
      setshowcoursecard(res.data)
    })
    .catch(err => console.log(err));
  }
  useEffect(() => {
    loadData();
  }, [])

  return { showcoursecard ,loadData }
}

export default CourseHandle;