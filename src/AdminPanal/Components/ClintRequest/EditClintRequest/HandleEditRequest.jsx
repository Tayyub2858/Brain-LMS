import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ApiUrl } from "../../../../Apis/ApiUrl";


function HandleEditRequest() {

  const id = useParams();
  useEffect(() => {
    axios.get(`${ApiUrl}/editclintrequest/` + id)
      .then(res => {
        setvalue({
          ...values, fname: res.data[0].fname, lname: res.data[0].lname,
          email: res.data[0].email, compname: res.data[0].compname,
          hearbrain: res.data[0].hearbrain, traninggoal: res.data[0].traninggoal
        })
      })
      .catch(err => console.log(err))
  }, [])
  const [values, setvalue] = useState({
    fname: '',
    lname: '',
    email: '',
    compname: '',
    hearbrain: '',
    traninggoal: ''
  })

  const HandleUpdateClint = () => {
    axios.put()
  }
  return {
    values, setvalue,
    HandleUpdateClint,

  }
}

export default HandleEditRequest
