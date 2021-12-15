import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Organization from './pages/Organization'
import OrganizationUpdate from './pages/OrganizationUpdate'
import LicenseUpdate from './pages/LicenseUpdate'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Organization}/>
                    <Route exact path='/organization/:code' component={OrganizationUpdate}/>
                    <Route exact path='/license/:code' component={LicenseUpdate}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes