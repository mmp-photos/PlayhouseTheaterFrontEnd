import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as Yup from 'yup';

const ClassForm = () => {
    const [course, setCourse] = useState([]);
    const [locations, setLocations] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [audience, setAudience] = useState([]);
    const [term, setTerm] = useState([]);
    const [featured, setFeatured] = useState(false);
    const [isFeatured, setIsFeatured] = useState();
    const [status, setStatus] = useState([]);
    const { classId } = useParams();
    const { userId, firstName, signedIn } = useSelector((state) => state.user);

    console.log(`User id: ${userId} and first name is ${firstName}`);
    useEffect(() => {
        if(classId != 'new'){
            const fetchData = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}classes/${classId}`);
                    setCourse(response.data);
                    if (response.data.length > 0 && response.data[0].class_featured === 'TRUE') {
                        setFeatured(true);
                    } else {
                        setFeatured(false);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }
    }, [classId]);

    useEffect(() => {
        const fetchData = async () => {
                axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}api/form_data`)
                .then(response => {
                    const formData = response.data;
                    setInstructors(formData.persons_data);
                    setLocations(formData.locations_data);
                    setTerm(formData.terms_data);
                    setStatus(formData.status_data);
                    setAudience(formData.audience_data);
                })
                .catch(error => {
                console.error('Error:', error);
                });
            }
        fetchData();
    }, []);

    if (locations.length === 0 || instructors.length === 0) {
        return <div>Loading...</div>; // Or any other loading indicator
    }
    
    let startingValues = {};
    if(classId == "new"){
        startingValues = {  className: '',
                            classCost: '',
                            classRegistration: '',
                            classDescription: '',
                            classTerm: '',
                            classAudience: '',
                            classLink: '',
                            classCreatedBy: userId,
                            classFeatured: featured,
                            classLocation: '',
                            classInstructor: ''
        };
    } else {
        startingValues = {  className: course[0].class_name,
                            classCost: course[0].class_cost,
                            classRegistration: '',
                            classDescription: course[0].class_description,
                            classTerm: course[0].class_term,
                            classAudience: course[0].class_audience,
                            classLink: course[0].class_enrollment_link,
                            classCreatedBy: userId,
                            classFeatured: featured,
                            classLocation: course[0].location_id,
                            classInstructor: course[0].person_id
        };
    }
    const validationSchema = Yup.object().shape({
        className: Yup.string().required('Please enter a name for the class'),
        classCost: Yup.string().required('Please enter a the registration cost'),
        classRegistration: Yup.string().required('Please indicate if registration is required'),
        classDescription: Yup.string().required('Please enter a class description.'),
        classTerm: Yup.string().required('Please select a term for this course'),
        classAudience: Yup.string().required('Please select an age range for this class'),
        classLink: Yup.string().required('Please provide a registration link for this class'),
        classLocation: Yup.string().required('Please select the location for this class'),
        classInstructor: Yup.string().required('Please select the instructors for this class'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log('Submit button was clicked', values);
        try {
            if(classId != "new"){
                axios.put(`${import.meta.env.VITE_REACT_APP_BASE_URL}classes/add`, values)
                console.log(`Sending PUT request`)
            } else {
                axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}classes/add`, values)
                console.log(`Sending POST request`)
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
        setSubmitting(false);
    };

    let determineFeatureStatus = () => {
        if(course[0].class_featured === 'TRUE'){
            return(true);
        } else{
            return(false);
        }
    }

    return (
        <section>
            {classId == "new" ? <h1>Add a Class</h1>
                              : <h1>Update Class</h1>
            }
            <Formik
                initialValues={{
                    className: classId === "new" ? "" : course[0]?.class_name || "",
                    classCost: classId === "new" ? "" : course[0]?.class_cost || "",
                    classRegistration: classId === "new" ? "" : "",
                    classDescription: classId === "new" ? "" : course[0]?.class_description || "",
                    classTerm: classId === "new" ? "" : course[0]?.class_term || "",
                    classAudience: classId === "new" ? "" : course[0]?.class_audience || "",
                    classLink: classId === "new" ? "" : course[0]?.class_enrollment_link || "",
                    classCreatedBy: userId,
                    classLocation: classId === "new" ? "" : course[0]?.location_id || "",
                    classInstructor: classId === "new" ? "" : course[0]?.person_id || "",
                    classFeatured: classId === "new" ? false : course[0]?.class_featured || false
                }}
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
                        <div>
                            <label htmlFor="classDescription">Class Description:</label>
                            <Field as="textarea" rows="12" cols="40" name="classDescription" />
                            <ErrorMessage name="classDescription" />
                        </div>

                        <button type="submit" onClick={() => setFeatured(!featured)}
                                style={{backgroundColor: featured ? "green" : "red", marginBottom: "16px"}}
                                disabled={isSubmitting}>
                            Featured Class
                        </button>
                        
                        <div>
                            <label htmlFor="classCost">Class Cost:</label>
                            <Field type="text" name="classCost" />
                            <ErrorMessage name="className" />
                        </div>
                        <div>
                            <label htmlFor="classRegistration">Register for Class:</label>
                            <label>
                                <Field type="radio" name="classRegistration" value="true" />
                                Yes
                            </label>
                            <label>
                                <Field type="radio" name="classRegistration" value="false" />
                                No
                            </label>
                        </div>
                        <div>
                            <label htmlFor="classLink">Class Enrollment:</label>
                            <Field type="text" name="classLink" />
                            <ErrorMessage name="classLink" />
                        </div>
                        <div>
                            <label htmlFor="classTerm">Class Term:</label>
                            <Field as="select" name="classTerm">
                                <option value="">Select a term</option>
                                {term.map((term) => { return(<option key={term.term_id} value={term.term_id}>{term.term_name}</option>)})}
                            </Field> <button className="circle-button">+</button>
                            <ErrorMessage name="classTerm" />
                        </div>
                        <div>
                            <label htmlFor="classAudience">Class Audience:</label>
                            <Field as="select" name="classAudience">
                                <option value="">Select an audience</option>
                                {audience.map((aud) => { return(<option key={aud.audience_id} value={aud.audience_id}>{aud.audience_name}</option>)})}
                            </Field>
                            <ErrorMessage name="classAudience" />
                        </div>
                        <div>
                            <label htmlFor="classInstructor">Class Instructor:</label>
                            <Field as="select" name="classInstructor">
                                <option value="">Select an instructor</option>
                                {instructors.map((teach) => { return(<option key={teach.person_id} value={teach.person_id}>{teach.person_name}</option>)})}
                            </Field>
                            <ErrorMessage name="classInstructor" />
                        </div>
                        <div>
                            <label htmlFor="classLocation">Class Location:</label>
                            <Field as="select" name="classLocation">
                                <option value="">Select a location</option>
                                {locations.map((loc) => { return(<option key={loc.location_id} value={loc.location_id}>{loc.location_name}</option>)})}
                            </Field>
                            <ErrorMessage name="classLocation" />
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
