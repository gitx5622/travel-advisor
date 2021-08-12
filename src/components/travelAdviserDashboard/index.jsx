import React from 'react';
import { Helmet } from "react-helmet";
import {withRouter} from "react-router-dom";
import Home from "./Home/Home";

const TravelAdviserDashboard = withRouter(({
       match: {
           params: { dashboard_route },
       },
   }) => {
    const renderDashboardScreens = () => {
        switch (dashboard_route) {
            case 'home':
                return <Home/>;
            default:
                return '404: Page not Found';
        }
    }
    return (
        <div>
            <Helmet>
                <title>{` TRAVEL ADVISOR | ${
                    (dashboard_route && dashboard_route.toUpperCase()) || 'HOME'
                }`}</title>
            </Helmet>
            <div className="dashboard-screens">
                { renderDashboardScreens() }
            </div>
        </div>
    );
});

export default TravelAdviserDashboard;