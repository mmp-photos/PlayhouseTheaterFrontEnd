import { setUser } from './userSlice';

export const fetchUserData = () => async (values, { setSubmitting }, dispatch) => {
    console.log(`Login form submitted`);
    let loginData = {
            email: values.email,
            password: values.password
        }
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_API_SIGNIN_URL, loginData, {
            headers: {}, // Empty headers object
            withCredentials: true // Set withCredentials to true
        });
        console.log(response.data.user);
        if (response.status === 200) {
            console.log(`Response Status is: ${response.status}`);
            console.log(`Response username is: ${response.data.user.first_name}`);
            const userData = {
                userId: response.data.user_id,
                firstName: response.data.user.first_name,
                signedIn: true
            }
        }
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData = await response.json();
    // Dispatch the setUser action with the received data
    dispatch(setUser(userData));

  } catch (error) {
    // Handle errors here
    console.error('Error fetching user data:', error.message);
  }
  setSubmitting(false);
};