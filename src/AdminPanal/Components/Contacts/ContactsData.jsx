import axios from "axios";
import { useEffect, useState } from "react"
import { ApiUrl } from "../../../Apis/ApiUrl";


function ContactsData() {
    const [showcontact , setshowcontact] = useState([]);

    useEffect(()=>{
        axios.get(`${ApiUrl}/showcontact`)
        .then(res => {
            setshowcontact(res.data)
          })
          .catch(err => console.log(err));
    },[])

  return {showcontact}
}

export default ContactsData