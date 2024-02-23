import React, { useEffect, useState } from 'react';
import RegisterUser from './RegisterUser'
import AllClasses from './AllClasses'

const Dashboard = ({ setSignedIn, userName }) => {
    console.log(`Username passed to Dashboard is: ${userName}`)
    const handleLogout = () => {
        console.log(`Logout clicked`)
        setSignedIn(false)
    }
    return(
        <section>
            <h1>Welcome {userName}!</h1>
            <AllClasses />
            <button onClick={handleLogout}>
                Logout
            </button>
            {/* <RegisterUser /> */}
        </section>
    )
};

export default Dashboard;