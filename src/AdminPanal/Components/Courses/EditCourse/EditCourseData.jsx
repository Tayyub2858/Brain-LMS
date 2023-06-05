import axios from 'axios';
import { useEffect, useState } from 'react';
import { ApiUrl } from '../../../../Apis/ApiUrl';
import { useParams } from 'react-router-dom';

function EditCourseData() {

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${ApiUrl}/editcoursecard/` + id)
      .then(res => {
        console.log(res)
        setvalues({ ...values, title: res.data[0].title, desc: res.data[0].desc, })
      })
      .catch(err => console.log(err))
  }, [])

  const [values, setvalues] = useState({
    title: '',
    desc: '',
  })

  const handleUpdateCourse = () => { }
  const Handlecoursechange = () => { }
  return {
    values, setvalues,
    handleUpdateCourse,
    Handlecoursechange,
  }
}

export default EditCourseData