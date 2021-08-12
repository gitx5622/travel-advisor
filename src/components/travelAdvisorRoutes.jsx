import React, { useState, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import SnackInfo from "../utils/SnackInfo";
import TravelAdviserDashboard from "./travelAdviserDashboard";
/**
 * @description Routing handler for dashboard components
 * @param {*} { props }
 */

const TravelAdvisorRoutes = ({ location }) => {
    const [snackInfo, setSnackInfo] = useState({
        open: false,
        message: '',
        vertical: 'bottom',
        horizontal: 'left',
        severity: 'info',
        autoHideDuration: 5000,
    });

    return (
        <Fragment>
                <Switch>
                    <div>
                        <Route
                            exact
                            path="/:dashboard_route"
                            render={() => (
                                <TravelAdviserDashboard/>
                            )}
                        />
                    </div>
                    <Redirect to='/'/>
                </Switch>

            <SnackInfo
                snackInfo={snackInfo}
                handleClose={() =>
                    setSnackInfo(snackInfo => ({ ...snackInfo, open: false }))
                }
            />
        </Fragment>
    );
};

export default withRouter(TravelAdvisorRoutes);
