import axios from "axios";
import { useEffect , useState } from "react";
import {ApiUrl} from '../../../Apis/ApiUrl'


const AdminLearningPathData = () => {
    const[Showlearningpath , setShowlearningpath] = useState([]);

    useEffect(()=>{
        axios.get(`${ApiUrl}/viewlearningpathcards`)
        .then(res => {
            setShowlearningpath(res.data)
          })
          .catch(err => console.log(err));
    },[])
   return {Showlearningpath}
}

export default AdminLearningPathData