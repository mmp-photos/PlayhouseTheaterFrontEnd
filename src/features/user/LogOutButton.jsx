import React from 'react';
import { setSignedOut } from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const LogOutButton = () => {
    const dispatch = useDispatch();
    const { userId, firstName, signedIn } = useSelector((state) => state.user);
    
    const handleLogOut = () => {
        console.log(`Signing out of user account`);
        dispatch(setSignedOut(false)); // Dispatch the action to update state
        window.open("/", "_self");
    };

    if(signedIn){
        return(
            <button style={{transform: 'translateY(-15px)', marginLeft: "55px"}} onClick={handleLogOut}>
                Log Out
            </button>
        )
    }
};

export default LogOutButton;