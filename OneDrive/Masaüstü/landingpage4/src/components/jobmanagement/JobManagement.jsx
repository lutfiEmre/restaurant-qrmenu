import React from 'react';
import JobPosting from "./JobPosting.jsx";
import CreateNewAd1 from "./CreateNewAd1.jsx";
import JobSection from "./JobSection.jsx";
import PositionsSection from "./PositionsSection.jsx";
import CompaniesSection from "./CompaniesSection.jsx";

const JobManagement = () => {
    return (
        <>
                <Route path={"/jobmanagement"} element={<JobPosting/>}/>
                <Route path={"/jobmanagement/createnewad"} element={<CreateNewAd1/>}/>
                <Route path={"/jobmanagement/jobs"} element={<JobSection/>}/>
                <Route path={"/jobmanagement/positions"} element={<PositionsSection/>}/>
                <Route path={"/jobmanagement/companies"} element={<CompaniesSection/>}/>
        </>
    );
};

export default JobManagement;
