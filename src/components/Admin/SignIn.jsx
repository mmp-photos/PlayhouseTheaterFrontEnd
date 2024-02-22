import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import '../../assets/styles/backstage_styles.css';

const SignIn = ({ setSignedIn }) => {
    const [ auth, setAuth ] = useState(false);
    const [ token, setToken ] = useState();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required('Please enter a valid email'),
        password: Yup.string().required('No password provided.')
    });


    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(`Login form submitted`);
        let loginData = {
            email: values.email,
            password: values.password
        };
        try {
            const response = await axios.post(import.meta.env.VITE_REACT_API_SIGNIN_URL, loginData, {
                headers: {}, // Empty headers object
                withCredentials: true // Set withCredentials to true
            });
            console.log(response.data);
            if (response.status === 200) {
                console.log(`Response Status is: ${response.status}`);
                setSignedIn(true);
            }
        } catch (error) {
            console.error("Error during form submission:", error);
        }
        setSubmitting(false);
    };
        
    return(
        <section id="sign-in">
        <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, handleChange, values }) => (
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" onChange={handleChange} value={values.email} />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" autoComplete="current-password" onChange={handleChange} value={values.password} />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
        </section>
    )
};

export default SignIn;