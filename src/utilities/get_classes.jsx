import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAllClasses = ( { featured , display } ) => {
    const [classes, setClasses] = useState([]);
    const [featuredClasses, setFeaturedClasses] = useState([]);
    const [error, setError] = useState();
    const [id, setID] = useState(152);

    const fetchData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_REACT_APP_BASE_URL + "classes");
            setClasses(response.data);
            setFeaturedClasses(response.data.filter(function (el) {return el.class_featured === "TRUE"}));
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if(classes.length === 0 || featuredClasses.length === 0) {
        return <div>Loading...</div>
    }

    const arrayIndex = 0
    const course = featuredClasses[arrayIndex];

    const displayCourses = () => {
        if (!Array.isArray(classes)) {
            return <div>No classes available</div>;
        }
        const currentIndex = 0;
        const course = classes[currentIndex];
        
        return (
            <>
            <button>previous</button>
            <div key={course.class_id} className="featured-classes">
                <div className="featured-class-name">
                    <h1>{course.class_name}</h1>
                </div>
                <div className="featured-instructor">
                    <img className="avatar" src={`${import.meta.env.VITE_REACT_APP_BASE_URL}images/headshots/${course.person_photo}`} alt={course.full_name} />
                    <p>{course.full_name}</p>
                    <p>Instructor</p>
                </div>
                <div className="featured-class-info">
                    <dl>
                        <dt>Class times:</dt>
                        <dd>{course.times}</dd>
                    </dl>
                    <dl>
                        <dt>Location:</dt>
                        <dd>{course.location_name}</dd>
                    </dl>
                    <dl>
                        <dt>Details</dt>
                        <dd>{course.class_description}</dd>
                    </dl>
                </div>
            </div>
            <button> next </button>
            </>
        );
    };
    
    return (
        <>
            {displayCourses()}
        </>
    );
};
export default GetAllClasses;