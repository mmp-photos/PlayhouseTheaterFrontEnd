import React, { useEffect, useState } from 'react';
import AllClasses from './AllClasses'
import Counter from '../../features/counter/Counter';
import LogOutButton from '../../features/user/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = ({ setSignedIn, userName }) => {
    const { userId, firstName } = useSelector((state) => state.user);

    const handleLogout = () => {
        console.log(`Logout clicked`)
        setSignedIn(false)
    }
    return(
        <section>
            <h1>Welcome {firstName}!</h1>
            <LogOutButton />
            <AllClasses />
        </section>
    )
};

export default Dashboard;