import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AcademyClass from './AcademyClass'

const ClassDetails = () => {
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState();
  const { classId } = useParams();

  const fetchData = async () => {
      try {
          const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}classes/id/${classId}`);
          console.log(response.data);
          setClasses(response.data);
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
  console.log(classes);
  return (
    <>
    <Header />
      <main id="classes-list">
            {AcademyClass(classes[0])}
      </main>
    <Footer />
    </>
  )
};

export default ClassDetails;