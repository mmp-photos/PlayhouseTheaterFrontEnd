import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';

const ClassForm = () => {
    const [course, setCourse] = useState([]);
    const { classId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (classId) {
                    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}classes/${classId}`);
                    setCourse(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [classId]);

    if (course.length === 0) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    const startingValues = { className: course[0].class_name };

    const validationSchema = Yup.object().shape({
        className: Yup.string().required('Please enter a name for the class'),
        classDescription: Yup.string().required('Please enter a class description.'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log('Submit button was clicked', values);
        try {
            // Your form submission logic
        } catch (error) {
            console.error('Error during form submission:', error);
        }
        setSubmitting(false);
    };

    return (
        <section>
            <Formik
                initialValues={startingValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="className">Class Name:</label>
                            <Field type="text" name="className" />
                            <ErrorMessage name="className" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default ClassForm;
