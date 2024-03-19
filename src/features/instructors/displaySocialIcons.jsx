import React, { useEffect, useState } from 'react';

export const displaySocialIcons = (icon) => {
    let displayIcon = {}
    switch(icon.social_id){
        case 'Facebook':
            displayIcon.icon = 'fa-brands fa-square-facebook';
            displayIcon.url = `http://www.facebook.com/${icon.social_handle}`;
            displayIcon.color = '31877F2'
        break
        case 'Instagram':
            displayIcon.icon = 'fa-brands fa-square-instagram';
            displayIcon.url = `http://www.instagram.com/${icon.social_handle}`;
            displayIcon.color = '#F56040';
        break
    }
    return(
        <li className="social" key={icon.id}>
            <a style={{color: displayIcon.color}} href={`${displayIcon.url}/`} target="_blank"><i className={displayIcon.icon}></i></a>
        </li>
    )
};
