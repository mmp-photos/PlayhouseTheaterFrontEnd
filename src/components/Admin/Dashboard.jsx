import React, { useEffect, useState } from 'react';
import AllClasses from './AllClasses'
import Counter from '../../features/counter/Counter';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = ({ setSignedIn, userName }) => {
    const { userId, firstName, signedIn } = useSelector((state) => state.user);
    console.log(signedIn);
    const handleLogout = () => {
        console.log(`Logout clicked`)
        setSignedIn(false)
    }
    return(
        <section>
            <h1>Welcome {firstName} {lastName}!</h1>
            <AllClasses />
        </section>
    )
};

export default Dashboard;