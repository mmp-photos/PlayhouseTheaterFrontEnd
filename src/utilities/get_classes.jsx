import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetAllClasses = ( { featured , display } ) => {
    const [classes, setClasses] = useState([]);
    const [featuredClasses, setFeaturedClasses] = useState([]);
    const [arrayIndex, setArrayIndex] = useState(0);
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

    const scrollFeatured = (scroll) => {
        console.log(scroll)
        const last = featuredClasses.length - 1;
        if(scroll == "next"){
            // console.log(`${arrayIndex} compared to ${last}`);
            if(arrayIndex === last){
                console.log(`Reset to zero`)
                setArrayIndex(0);
            }
            else {
                // console.log(`Advancing the featured class`)
                setArrayIndex(arrayIndex + 1);
            }
        }
        if(scroll == "prev"){
            console.log(`${arrayIndex} compared to 0`);
            if(arrayIndex === 0){
                // console.log(`Setting to final class`)
                setArrayIndex(last);
            }
            else {
                // console.log(`Advancing the featured class`)
                setArrayIndex(arrayIndex - 1);
            }
        }
    };

    const displaySelectedCourse = () => {
            const course = featuredClasses[arrayIndex];
            console.log(course)
            return(
                <div key={course.class_id} className="featured-classes">
                <div className="featured-class-name">
                    <Link to={{pathname: `classes/${course.class_id}`}}><h1>{course.class_name}</h1></Link>
                </div>
                <div className="featured-instructor">
                    <Link to={{pathname: `instructor/${course.person_id}`}}><img className="avatar" src={`${import.meta.env.VITE_REACT_APP_BASE_URL}images/headshots/${course.person_photo}`} alt={course.full_name} /></Link>
                    <p>{course.full_name}</p>
                    <p><span className="bold">Instructor:</span> <br/>{course.instructor_name}</p>

                </div>
                <div className="featured-class-info">
                    <p className="featured-description">{course.class_description}</p>
                    <button onClick={() => clickToRegister(course.class_enrollment_link)}>Register</button>
                </div>
            </div>
        )
    }

    const clickToRegister = (url) => {
        window.open(url, '_blank');
    }

    const displayCourses = () => {
        if (!Array.isArray(classes)) {
            return <div>No classes available</div>;
        }
        const currentIndex = 0;
        const course = classes[currentIndex];
        
        return (
            <>
            <button className="featured" onClick={() => {scrollFeatured("prev")}}><i className="fa-solid fa-angle-left"></i></button>
            {displaySelectedCourse()}
            <button className="featured" onClick={() => {scrollFeatured("next")}}><i className="fa-solid fa-angle-right"></i></button>
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