// import { useDispatch, useSelector } from 'react-redux';
import { fetchClasses } from './classesSlice';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AcademyClass from './AcademyClass'

const AllClassData = () => {
  const [classes, setClasses] = useState([]);
  const [featuredClasses, setFeaturedClasses] = useState([]);

  const fetchData = async () => {
      try {
          const response = await axios.get(import.meta.env.VITE_REACT_APP_BASE_URL + "classes/all_data");
          console.log(response.data);
          setClasses(response.data.filter(function (el) {return el.current_term === 1}));
          setFeaturedClasses(response.data.filter(function (el) {return el.class_featured === "TRUE"}));
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
  console.log(classes)
  return (
    <>
    <Header />
      <main id="classes-list">
        {/* Render class terms */}
        {classes.map((classItem, index) => {
          // Render class term if it differs from the previous class term or if it's the first item
          if (index === 0 || classItem.term_name !== classes[index - 1].term_name) {
            return (
              <React.Fragment key={`term_${classItem.term_id}`}>
                <h2>{classItem.term_name}</h2>
                {/* Render class details for the current term */}
                {classes
                  .filter((item) => item.term_name === classItem.term_name && item.current_term === 1)
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