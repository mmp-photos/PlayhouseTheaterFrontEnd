import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAllClasses = () => {
    const [classes, setClasses] = useState([]);
    const [error, setError] = useState();
    const [id, setID] = useState(152);

    const fetchData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_REACT_APP_BASE_URL + "classes");
            setClasses(response.data);
            console.log(response.data)
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const displayCourses = () => {
        console.log(classes); // Log the classes array
        if (!Array.isArray(classes)) {
            return <div>No classes available</div>;
        }
        return classes.map(course => (
            <div key={course.id} className="featured-classes">
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
        ));
    };
    
    
    return (
        <>
            {displayCourses()}
        </>
    );
};

export default GetAllClasses;