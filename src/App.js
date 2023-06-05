import './AppStyle.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
// import Pricing from './Pages/Pricing/Pricing';
// import Contact from './Pages/Contact/Contact';
// import Courses from './Pages/Learn/Courses';
// import CorporateTraining from './Pages/CoporateTraining/CorporateFE/CorporateTraining';
// import Gallery from './Pages/Gallery/Gallery';
// import BlogMainPage from './Pages/Blog/BlogMainPage';
// import DashBoard from './Components/Component1/Dashboard';
// import Signup from './Pages/SignUp/Signup';
// import LearningPath from './Components/Component2/LearningPath';
// import DataPlayground from './Components/Component7/DataPlayground';
// import DataAnalysis from './LearningPath/DataAnalysis/DataAnalysis';
// import DigitalMarketing from './LearningPath/DigitalMarketing/DigitalMarketing';
// import GraphicDesigning from './LearningPath/GraphicDesigning/GraphicDesigning';
// import VirtualAssistant from './LearningPath/Virtula-Assistant/VirtualAssistant';
// import WebDevelopment from './LearningPath/WebDevelopment/WebDevelopment';
// import DataAnalysisShowVideo from './LearningPath/DataAnalysis/DataAnalysisVidos/DataAanalysisShow-video';
// import AdvanceFinancialShowVideo from './LearningPath/DataAnalysis/AdvanceFinancialVideo/AdvanceFinancialShow-video';
// import CoursePage from './LearningPath/DataAnalysis/DataAnalysisVidos/StartCoursePage/CoursePage';
import AOS from 'aos'
import 'aos/dist/aos.css';
// import Privateroutes from './PrivateRoutes/Privateroutes';
// import the all admin dashboard routing links 
// import AdminDashbaord from './AdminPanal/Components/AdminDashboard/AdminDashbaord';
// import User from './AdminPanal/Components/Users/User';
// import AddUserForm from './AdminPanal/Components/Users/AddUserForm/AddUserForm';
// import Course from './AdminPanal/Components/Courses/Course';
// import AddNewCourse from './AdminPanal/Components/Courses/AddNewCourse/AddNewCourse';
// import AdminLearningPath from './AdminPanal/Components/LearningPath/adminLearningPath';
// import LearningPathAdd from './AdminPanal/Components/LearningPath/LearningPathAdd/LearningPathAdd';
// import Video from './AdminPanal/Components/Videos/Video';
// import ClintRequest from './AdminPanal/Components/ClintRequest/ClintRequest';
// import AddNewClintRequest from './AdminPanal/Components/ClintRequest/AddNewClintRequest/AddNewClintRequest';
// import Contacts from './AdminPanal/Components/Contacts/Contacts';
// import AddContact from './AdminPanal/Components/Contacts/AddContact/AddContact';
// import GalleryData from './AdminPanal/Components/Gallery/Gallery';
// import EditUserForm from './AdminPanal/Components/Users/EditUserForm/EditUserForm';
// import EditCourse from './AdminPanal/Components/Courses/EditCourse/EditCourse';
// import EditClintRequest from './AdminPanal/Components/ClintRequest/EditClintRequest/EditClintRequest';

function App() {
  useEffect(() => {
    AOS.init(
      { once: true }
    );
  }, [])
  return (
    <>
    <div className='App-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          
          {/* <Route path='/pricing' exact element={<Pricing />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/learn' exact element={<Courses />} />
          <Route path='/corporate-training' exact element={<CorporateTraining />} />
          <Route path='/gallery' exact element={<Gallery />} />
          <Route path='/blog' exact element={<BlogMainPage />} />
          <Route path='/signup' exact element={<Signup />} /> */}
          {/* add private Routes */}
          {/* <Route path='/' element={<Privateroutes />}></Route> */}
          {/* Add private routes  */}
          {/* <Route path='/learning-path' exact element={<LearningPath />} />
          <Route path='/data-playground' exact element={<DataPlayground />} />
          <Route path='/dashboard' exact element={<DashBoard />} />
          <Route path='/learning-path/graphicdesigning' exact element={<GraphicDesigning />} />
          <Route path='/learning-path/digitalmarketing' exact element={<DigitalMarketing />} />
          <Route path='/learning-path/accounting&finance' exact element={<DataAnalysis />} />
          <Route path='/learning-path/accounting&finance/data-analysis&visualization-in-power-bi/videos' exact element={<DataAnalysisShowVideo />} />
          <Route path='/learning-path/accounting&finance/advanced-financial-reporting-in-power-bi/videos' exact element={<AdvanceFinancialShowVideo />} />
          <Route path='/learning-path/virtualassistant' exact element={<VirtualAssistant />} />
          <Route path='/learning-path/webdevelopment' exact element={<WebDevelopment />} />
          <Route path='/learning-path/accounting&finance/data-analysis&visualization-in-power-bi/' exact element={<CoursePage />} /> */}

          {/* AdminPanal Dashbaord add all routing pages  */}

          {/* <Route path='/admin' element={<AdminDashbaord />} />
          <Route path='/admin/Dashboard' element={<AdminDashbaord />} />
          <Route path='/admin/Users' element={<User />} />
          <Route path='/Users/Adduser' element={<AddUserForm />} />
          <Route path='/Users/Edit/:id' element={<EditUserForm/>}/>
          <Route path='/admin/Courses' element={<Course />} />
          <Route path='/Courses/AddNewCourse' element={<AddNewCourse />} />
          <Route path='/Course/Edit/:id' element={<EditCourse/>}/>
          <Route path='/admin/LearningPath' element={<AdminLearningPath/>} />
          <Route path='/LearningPath/AddLearningpath' element={<LearningPathAdd/>} />
          <Route path='/admin/Videos' element={<Video/>} />
          <Route path='/admin/ClintRequest' element={<ClintRequest />} />
          <Route path='/ClintRequest/AddNewClintRequest' element={<AddNewClintRequest />} />
          <Route path='/ClintRequest/Edit/:id' element={<EditClintRequest/>}/>
          <Route path='/admin/Contact' element={<Contacts />} />
          <Route path='/Contact/Addcontact' element={<AddContact />} />
          <Route path='/admin/Gallery' element={<GalleryData/>} /> */}
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
