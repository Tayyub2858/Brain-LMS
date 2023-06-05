import axios from "axios";
import { useEffect, useState } from "react"
import { ApiUrl } from "../../../Apis/ApiUrl";


const UserHandle = () => {
  const [showuser, setshowuser] = useState([]);

  const loadData = async () => {
    axios.get(`${ApiUrl}/showuseradminpanal`)
    .then(res => {
      setshowuser(res.data)
    })
    .catch(err => console.log(err));
  }
  useEffect(() => {
   loadData()
  }, []);


  return { showuser, loadData};
}

export default UserHandle;