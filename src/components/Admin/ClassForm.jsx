import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useState } from 'react-redux';
import { setUser } from '../../features/user/userSlice';
import * as Yup from 'yup';
import axios from 'axios';


const SignIn = ({ classID }) => {
    const dispatch = useDispatch();
    const [ editClass, setEditClass ] = useState(false)
    const { userId, firstName } = useSelector((state) => state.user);
    
    const validationSchema = Yup.object().shape({
        className: Yup.string().required('Please enter a name for the class'),
        classDescription: Yup.string().required('Please enter a class description.'),
        classInstructor: Yup.string().required('Please enter a class description.'),
        classLink: Yup.string().required('Please enter a class description.'),
        classTerm: Yup.string().required('Please enter a class description.'),
        classLocation: Yup.string().required('Please enter a class description.'),
        classAudience: Yup.string().required('Please enter a class description.'),
        classCost: Yup.string().required('Please enter a class description.'),
        classRegistration: Yup.string().required('Please enter a class description.'),
        classStatus: Yup.string().required('Please enter a class description.')
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(`Submit button was clicked`)
        try {
            const response = await axios.post(import.meta.env.VITE_REACT_API_SIGNIN_URL, values, {
                headers: {}, // Empty headers object
                withCredentials: true // Set withCredentials to true
            });
            if (response.status === 200) {
                const userData = {
                    userId: response.data.user_id,
                    firstName: response.data.user.first_name
                }
                dispatch(setUser(userData)); // Dispatch action to store user data
                setSignedIn(true); // Assuming setSignedIn is a function to update the signed-in state
            }
        } catch (error) {
            console.error("Error during form submission:", error);
        }
        setSubmitting(false);
    };
    
    return (
        <section id="sign-in">
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" autoComplete="username" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" autoComplete="current-password" />
                            <ErrorMessage name="password" component="div" />
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

export default SignIn;
