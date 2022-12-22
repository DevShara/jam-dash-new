import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/private-route';
import IdentityModal from 'react-netlify-identity-widget';
import { Link, navigate } from 'gatsby';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import RouteLogin from '../components/route-login';

import 'react-netlify-identity-widget/styles.css';



const Dashboard = ({ location }) => {

    const [isVisible, setVisibillity] = useState(false);

    useEffect(() => {
        if (location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('/dashboard/login', { replace: true });
        }
    }, []);

    const showModal = () => setVisibillity(true);

    return (
        <Layout>
            <Profile showModal={showModal} />
            <Router>
                <PrivateRoute path="/dashboard/base" component={RouteBase} />
                <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
                <RouteLogin path="/dashboard/login" showModal={showModal} />
            </Router>

            <IdentityModal showDialog={isVisible} onCloseDialog={() => setVisibillity(false)} />

        </Layout>
    )
}

export default Dashboard;