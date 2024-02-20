import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

const RegisterUser = () => {
    const [ auth, setAuth ] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    });
    const [ userCreated, setUserCreated ] = useState(false);
    const [ createdUser, setCreatedUser ] = useState();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required('Please enter a valid email'),
        firstName: Yup.string().required('Please enter a first name'),
        lastName: Yup.string().required('Please provide a last name'),
        password: Yup.string().required('No password provided.')
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        setCreatedUser(false);
        let registrationData = {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            password: values.password
        };
        try {
            const response = await axios.post("http://127.0.0.1:3500/register/", registrationData);
            console.log(response.data)
            console.log(response.data.users);
            setUserCreated(true);
            setCreatedUser(response.data.users);
        } catch (error) {
            console.error("Error during form submission:", error);
        }
        setSubmitting(false);
    };

    return(
            <main>
                <div>
                <h1>Registration Form</h1>
                {userCreated ? <h3>User {createdUser} was added to the Database</h3>
                             : null}
                <Formik
                    initialValues={formData}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                {({ isSubmitting, getFieldProps }) => (
                    <Form>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" name="firstName" {...getFieldProps('firstName')} />
                            <ErrorMessage name="firstName" component="div" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" name="lastName" {...getFieldProps('lastName')} />
                            <ErrorMessage name="lastName" component="div" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" {...getFieldProps('email')} />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" {...getFieldProps('password')} />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
                </Formik>
                </div>
            </main>
    )
};

export default RegisterUser;