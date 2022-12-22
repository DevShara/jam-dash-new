import React from 'react';
import {navigate} from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity';

const RouteLogin = ({showModal}) => {
    const identity = useIdentityContext();

    if(identity && identity.isLoggedIn){
        navigate('/dashboard/secret', { replace : true });
    }

    return (
    <>
    <p>Login</p>
    <button onClick={showModal} >Log in</button>
    </>
    )
}

export default RouteLogin;