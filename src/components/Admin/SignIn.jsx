import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user/userSlice';
import * as Yup from 'yup';
import axios from 'axios';

const SignIn = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required('Please enter a valid email'),
        password: Yup.string().required('No password provided.')
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
                    userId: response.data.user.user_id,
                    firstName: response.data.user.first_name
                }
                dispatch(setUser(userData));
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
                    <Form style={{display: "block", backgroundColor: '#27b8f1', padding: '2rem'}}>
                    <div>
                        <label style={{textAlign: "right", display: "inline-block", marginLeft: '0px'}} htmlFor="email">Email</label>
                        <Field type="email" name="email" autoComplete="username" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label style={{textAlign: "right", display: "inline-block", marginLeft: '0px'}} htmlFor="password">Password</label>
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
