
// import { db } from '../../ConfigFile/Firebase-Config';
// import { getDocs,collection } from '@firebase/firestore/lite';
//  const getUser= async(db)=>{
//     try { const Users = collection(db , 'CourseCards')
//      const Ushnapshot = await getDocs(Users);
//      const UsersList = Ushnapshot.docs.map(doc => ({...doc.data(),id:doc.id}));
//    //  console.log(UsersList);
//     Data.push(...UsersList)
//     console.log(Data);
//   } catch(err){
//      console.log(err.message)
//   }
//  };

import axios from "axios";
import { useEffect, useState } from "react";
import { ApiUrl } from "../../Apis/ApiUrl";
//  getUser(db);

const Data = ()=>{
   const[coursecards , setcoursecards] = useState([]);
   useEffect(()=>{
      axios.get(`${ApiUrl}/videwcoursecards`)
      .then(res=>{
         setcoursecards(res.data)
      })
      .catch(err => console.log(err));
   },[])

   return{coursecards}
}
export default Data;