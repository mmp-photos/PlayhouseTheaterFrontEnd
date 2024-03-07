// import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AcademyClass from '../classes/AcademyClass'

const ClassesByAge = () => {
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState();

  const fetchData = async () => {
      try {
          const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}classes/age`);
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
  console.log(classes)
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
          if (index === 0 || classItem.audience_id !== classes[index - 1].audience_id) {
            return (
              <React.Fragment key={`term_${classItem.audience_id}`}>
                <h2>{classItem.audience_description}</h2>
                {/* Render class details for the current term */}
                {classes
                  .filter((item) => item.audience_id === classItem.audience_id)
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

export default ClassesByAge