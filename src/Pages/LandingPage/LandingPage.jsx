import React from "react";
import './LandingPageStyle.css';
import Nav from "../../Modules/Nav/Nav";
import DataAnalysic from "../../Modules/Module 1/DataAnalysic";
import Footer from "../../Modules/Footer/Footer";
import Companies from "../../Modules/Module 10/Companies";
// import Software from "../../Modules/Module 2/Software";
// import DreamJob from "../../Modules/Module 3/DreamJob";
// import TeamTraining from "../../Modules/Module 9/TeamTraining";
// import Connect from "../../Modules/Module 8/Connect";
// import Career from "../../Modules/Module 4/Career";
import ClientCounter from "../../Modules/Module 11/ClientCounter";
import CardsCourse from "../../Modules/Module 12/CardsCourse";
import FeatureCourse from "../../Modules/Module 5/FeaturesCourse";
import Categories from "../../Modules/Module 6/Categories";
import Learning from "../../Modules/Module 7/Learning";
import NavSocialIcons from "../../Modules/NavSocialIcons/NavSocialIcons";
import Services from "../../Modules/Module 13/Services";
import Courses from "../../Modules/Modules 14/Courses";
import Blogs from "../../Modules/Module 15/Blogs";
const LandingPage = () => {
  return (
    <>
    <div className="leanding-container">
      <NavSocialIcons/>
      <Nav/>
      <div className="textcenter-leandingpage">
      <DataAnalysic/>
      <Companies />
      <Categories/>
      <Learning/>
      <Services/>
      <Courses/>
      <CardsCourse/>
      <FeatureCourse/>
      {/* <Software/> */}
      {/* <DreamJob /> */}
      {/* <Career /> */}
      <ClientCounter />
      <Blogs/>
      {/* <Connect /> */}
      {/* <TeamTraining /> */}
      </div>
      <Footer />
    </div>
     
    </>
  );
};

export default LandingPage;
