import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ApiUrl } from '../../../Apis/ApiUrl';

function ClintRequestData() {
    const [getclintrequest , setgetclintrequest] = useState([]);

    useEffect(()=>{
        axios.get(`${ApiUrl}/showclintrequest`)
        .then(res=>{
            setgetclintrequest(res.data)
        })
    },[])


  return {getclintrequest};
}

export default ClintRequestData