import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAllClasses = () => {
    const [classes, setClasses] = useState([]);
    const [ error, setError ] = useState()
    const [ id, setID ] = useState(152);

    const fetchData = async() =>{
        const response =
        await axios.get("http://127.0.0.1:3500/classes")
        setClasses(response.data)
    }
    useEffect(() => {
        fetchData()
    }, []);
    
    const displayCourses = () => classes.map(function(course){
        return(
            <div key={course.id} className="featured-classes">
                <div className="featured-class-name">
                    <h1>{course.class_name}</h1>
                </div>
                <div className="featured-instructor">
                    <img className="avatar" src={`images/${course.photo}`} alt={course.full_name} />
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
        )
    });

    return(
        <>
        {displayCourses()}
        </>
    )
};

export default GetAllClasses