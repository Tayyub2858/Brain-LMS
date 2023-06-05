import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import updateFormTitle from "../../../../Redux/Action/Action";


const CoursePageInput = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () =>{
        dispatch(updateFormTitle("Data Analysis & Visualization In PBI"));
        localStorage.setItem('formtitle' , "Data Analysis & Visualization In PBI");
        navigate('/learning-path/accounting&finance/data-analysis&visualization-in-power-bi/videos');
    }
    return{
        handleClick,
    }
}
export default CoursePageInput;