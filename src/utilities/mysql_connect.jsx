import React, { useEffect, useState } from 'react';

const GetAllClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.REACT_APP_SERVER_URL_CLASSES)
            .then(response => response.json())
            .then(data => setClasses(data));
        console.log(classes);
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [])
    return(
        <h1>All Classes</h1>
    )
};

export default GetAllClasses