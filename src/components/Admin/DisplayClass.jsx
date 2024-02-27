import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DisplayClass = (props) => {
    const [ course, setCourse ] = useState([])
    const { classId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}classes/${classId}`);
                setCourse(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [classId]);
    console.log(course);
    return(
        <section>
            {course.map((course, index) => (
                <div key={index}>
                <h1 >{course.class_name}</h1>
                <p>{course.class_description}</p>
                </div>
            ))}
        </section>
    )
};

export default DisplayClass;