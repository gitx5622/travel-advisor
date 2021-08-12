import React from 'react';
import { Helmet } from "react-helmet";
import Home from "./Home/Home";

const TravelAdviserDashboard = () => {
    return (
        <div>
            <Helmet>
                <title>TRAVEL ADVISOR || HOME</title>
            </Helmet>
            <div className="dashboard-screens">
               <Home/>
            </div>
        </div>
    );
};

export default TravelAdviserDashboard;