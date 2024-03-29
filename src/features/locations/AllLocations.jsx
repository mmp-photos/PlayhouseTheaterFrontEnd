// import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AcademyClass from '../classes/AcademyClass'

const AllClassData = () => {
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState();

  const fetchData = async () => {
      try {
          const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}classes/location`);
        //   console.log(response.data);
          setClasses(response.data);
      } catch (error) {
          setError(error);
      }
  };

  useEffect(() => {
      fetchData();
  }, []);

  if(classes.length === 0) {
    return <div>Loading...</div>
  }

  const registrationButton = (url) =>{
    <button onClick={() => clickToRegister(url)}>Register</button>
  }

  return (
    <>
    <Header />
      <main id="classes-list">
        {/* Render class terms */}
        {classes.map((classItem) => {
            // console.log(`Location Name: ${classItem.location_name} - ${classItem.class_name}`)
        })}
        {classes.map((classItem, index) => {
          // Render class term if it differs from the previous class term or if it's the first item
          if (index === 0 || classItem.location_id !== classes[index - 1].location_id) {
            return (
              <React.Fragment key={`term_${classItem.location_id}`}>
                <h2>{classItem.location_name}</h2>
                {/* Render class details for the current term */}
                {classes
                  .filter((item) => item.location_id === classItem.location_id)
                  .map((filteredClass) => (
                    AcademyClass(filteredClass)
                  ))}
              </React.Fragment>
            );
          }
          return null; // Skip rendering if class term matches the previous one
        })}
      </main>
    <Footer />
    </>
  )
};

export default AllClassData