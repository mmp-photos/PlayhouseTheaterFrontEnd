import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import { displaySocialIcons } from './displaySocialIcons';
import { displayInstructorClasses } from './displayInstructorClasses';

const InstructorsById = () => {
    const [error, setError] = useState();
    const [person, setPerson] = useState();
    const [socialIcons, setSocialIcons] = useState(); // Added state for social icons
    const [currentClasses, setCurrentClasses] = useState(); // Added state for social icons
    const [previousClasses, setPreviousClasses] = useState(); // Added state for social icons
    const { instructorId } = useParams();

    const findCurrent = (course) => {
        return course.current_term == 1
    }
    const findPrevious = (course) => {
        return course.current_term != 1
    }

    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}instructors/id/${instructorId}`);
            // console.log(response.data);
            setPerson(response.data.persons); // Set persons state
            setSocialIcons(response.data.social_icons); // Set social_icons state
            setCurrentClasses(response.data.classes.filter(findCurrent)); // Set current classes
            setPreviousClasses(response.data.classes.filter(findPrevious)); // Set current classes
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <main id="instructor">
                {person && (
                    <>
                    <div className="instructor-left">
                    <img className="avatar" src={`${import.meta.env.VITE_REACT_APP_BASE_URL}images/headshots/${person[0].person_photo}`} alt={person[0].person_name} />
                        {socialIcons && 
                        (
                            <ul style={{textAlign: "center"}}>
                                {socialIcons.map(icon => (
                                    displaySocialIcons(icon)
                                ))}
                            </ul>
                        )}

                    </div>
                    <div className="instructor-right">
                        <h1>{person[0].person_name}</h1>
                        <p>{person[0].person_bio}</p>
                        {currentClasses != '' && (
                        <>
                            <h2>Current classes</h2>
                            <ul >
                                {displayInstructorClasses(currentClasses)}
                            </ul>
                        </>
                        )}
                        {previousClasses != '' && (
                        <>
                            <h2>Current classes</h2>
                            <ul >
                                {displayInstructorClasses(previousClasses)}
                            </ul>
                        </>
                        )}
                    </div>
                    </>
                )}
            </main>
            <Footer />
        </>
    );
};

export default InstructorsById;
