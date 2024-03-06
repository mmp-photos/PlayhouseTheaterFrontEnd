// import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AcademyClass from '../classes/AcademyClass'

const AllClassData = () => {
  const [classes, setClasses] = useState([]);
  const [featuredClasses, setFeaturedClasses] = useState([]);

  const fetchData = async () => {
      try {
          const response = await axios.get(import.meta.env.VITE_REACT_APP_BASE_URL + "classes/location");
        //   console.log(response.data);
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
  // const dispatch = useDispatch();
  // const { classes, loading, error } = useSelector((state) => state);

  // useEffect(() => {
  //   console.log("Fetching classes...");
  //   dispatch(fetchClasses());
  // }, [dispatch]);

  // useEffect(() => {
  //   console.log("Classes updated:", classes);
  // }, [classes]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // console.log(classes);

  const convertDate = (dateString) => {
    const dateOnly = dateString.split('T')[0];
    const dateParts = dateOnly.split('-');
    const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    // Get day, month, and year from the Date object
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based, so we add 1
    const year = date.getFullYear() % 100; // Get last two digits of the year

    // Pad day and month with leading zeros if necessary
    const formattedMonth = String(day).padStart(2, '0');
    const formattedDay = String(month).padStart(2, '0');

    // Return formatted date in dd/mm/yy format
    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  const registrationButton = (url) =>{
    <button onClick={() => clickToRegister(url)}>Register</button>
  }

  return (
    <>
    <Header />
      <main id="classes-list">
        {/* Render class terms */}
        {classes.map((classItem) => {
            console.log(`Location Name: ${classItem.location_name} - ${classItem.class_name}`)
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