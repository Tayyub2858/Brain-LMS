import axios from "axios";
import { useEffect, useState } from "react"
import { ApiUrl } from "../../../Apis/ApiUrl";


function HandleAdminDashboard() {
    const [TotalRows, setTotalRows] = useState(null);
    const [Totalcourse , setTotalcourse] = useState(null);

    useEffect(() => {
        axios.get(`${ApiUrl}/totalstudents`)
        .then(res=>{
            setTotalRows(res.data.count)
        })
        .catch(err => console.log(err));
    }, []);

    // cout the total courses  
    useEffect(()=>{
        axios.get(`${ApiUrl}/totallearncoursecard`)
        .then(res=>{
            setTotalcourse(res.data.count)
        })
        .catch(err => console.log(err));
    },[])

    return {
        TotalRows, setTotalRows,
        Totalcourse , setTotalcourse,
    }
}

export default HandleAdminDashboard;