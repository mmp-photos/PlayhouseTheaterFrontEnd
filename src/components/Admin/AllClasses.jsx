import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllClasses = () => {
    const [classes, setClasses] = useState([]);

    const fetchData = async() =>{
        const response =
        await axios.get("http://127.0.0.1:3500/classes")
        setClasses(response.data)
    }
    useEffect(() => {
        fetchData()
    }, []);
    const renderClassNames = () => {
        return classes.map((course, index) => (
            <p key={index}>Class Name: {course.class_name}</p>
        ));
    };

    return (
        <div>
            {renderClassNames()}
        </div>
    );
}

export default AllClasses;