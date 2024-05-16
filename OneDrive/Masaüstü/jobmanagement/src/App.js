import {useEffect, useState} from "react";
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import mansvg from './img/man1.svg'

import classic from './img/clasic.png'

import LeftMenu from "./components/LeftMenu";
import {ProgressCircleHero} from "./components/ProgressCircleHero";
import {Route,Routes} from "react-router-dom";
import JobPosting from "./components/JobPosting";
import CreateNewAd1 from "./components/CreateNewAd1";
import JobSection from "./components/JobSection";
import PositionsSection from "./components/PositionsSection";
import CompaniesSection from "./components/CompaniesSection";



function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<JobPosting/>}/>
                <Route path={"/jobposting/createnewad"} element={<CreateNewAd1/>}/>
                <Route path={"/jobposting/jobs"} element={<JobSection/>}/>
                <Route path={"/jobposting/positions"} element={<PositionsSection/>}/>
                <Route path={"/jobposting/companies"} element={<CompaniesSection/>}/>
            </Routes>
        </>
    );
}

export default App;
