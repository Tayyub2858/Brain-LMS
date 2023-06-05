import React from 'react'
import { Outlet } from 'react-router-dom';

const Privateroutes = () => {

    const loggedin = false;
    if(loggedin){
        return <Outlet/>
    }
    else{
        return alert("User is not loggedIn")
    }
}

export default Privateroutes