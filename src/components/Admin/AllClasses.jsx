import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllClasses = () => {
    const [classes, setClasses] = useState([]);

    const fetchData = async() =>{
        const response =
        await axios.get(`http://127.0.0.1:3500/classes/`)
        setClasses(response.data)
        // console.log(response.data)
    }
    useEffect(() => {
        fetchData()
        // console.log(classes)
    }, []);
    const renderClassNames = () => {
        return (
            <>
            <h2>Current Classes</h2>
            <table style={{width: "800px"}}>
                <tbody>
                {classes.map((course, index) => (
                    <tr key={course.class_id}>
                        <td style={{width: "80rem"}}>{course.class_name}</td>
                        <td style={{width: "80rem"}}>
                        <Link to={{pathname: `/backstage/course_details/${course.class_id}`}}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Link>
                        <Link to={{pathname: `/backstage/update_class/${course.class_id}`}}>
                            <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                            <i className="fa-solid fa-trash-can"></i>
                        </td>
                        
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to="/backstage/update_class/new"><button>Add New Class</button></Link>
            </>
        )
    };

    return (
        <div>
            {renderClassNames()}
        </div>
    );
}

export default AllClasses;