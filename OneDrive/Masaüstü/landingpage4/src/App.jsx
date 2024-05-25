import React, { useState } from 'react'
import './App.css'

import {Route,Routes} from "react-router-dom";
import RegisterMain from "./components/RegisterMain.jsx";
import LoginMain from "./components/LoginMain.jsx";
import JobManagement from "./components/jobmanagement/JobManagement.jsx";
import JobPosting from "./components/jobmanagement/JobPosting.jsx";
import CreateNewAd1 from "./components/jobmanagement/CreateNewAd1.jsx";
import JobSection from "./components/jobmanagement/JobSection.jsx";
import PositionsSection from "./components/jobmanagement/PositionsSection.jsx";
import CompaniesSection from "./components/jobmanagement/CompaniesSection.jsx";
import LandingPage from "./components/landingpage/LandingPage.jsx";
import Interview from "./components/interviewmanagement/Interview.jsx";



function App() {

  return (
    <>
        <Routes>
            <Route path={"/"} element={<LandingPage/>}/>
            <Route path={"/register"} element={
                <RegisterMain/>
            }/>
            <Route path={"/interview"} element={<Interview/>}/>
            <Route path={"/jobmanagement"} element={<JobPosting/>}/>
            <Route path={"/jobmanagement/createnewad"} element={<CreateNewAd1/>}/>
            <Route path={"/jobmanagement/jobs"} element={<JobSection/>}/>
            <Route path={"/jobmanagement/positions"} element={<PositionsSection/>}/>
            <Route path={"/jobmanagement/companies"} element={<CompaniesSection/>}/>

            <Route path={"/login"} element={
                <LoginMain/>
            }/>

        </Routes>

    </>
  )
}

export default App
