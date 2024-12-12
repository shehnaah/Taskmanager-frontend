import axios from 'axios';

export const authStart = () => ({ type: 'AUTH_START' });
export const authSuccess = (user, token) => ({
  type: 'AUTH_SUCCESS',
  payload: { user, token },
});
export const authFail = (error) => ({ type: 'AUTH_FAIL', payload: error });
export const logout = () => {
  // Clear the token and user data from localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  // Optionally clear any other stored data
  return { type: 'LOGOUT' };
};

// Async action to handle login
export const login = (email, password) => async (dispatch) => {
  dispatch(authStart());
  try {
    const response = await axios.post('http://localhost:5000/auth/login', { email, password });
    const { token, user } = response.data;

    // Save token and user info to localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    dispatch(authSuccess(user, token));
  } catch (error) {
    console.log(error);
    const errorMessage = error?.response?.data?.error || 'Login failed';
    dispatch(authFail(errorMessage));
  }
};

// Async action to handle registration
export const register = (email, password) => async (dispatch) => {
  dispatch(authStart());
  try {
    const response = await axios.post('http://localhost:5000/auth/register', { email, password });
    console.log(response);

    // Automatically log in after successful registration
    dispatch(login(email, password));
  } catch (error) {
    console.log(error);
    const errorMessage = error?.response?.data?.error || 'Registration failed';
    dispatch(authFail(errorMessage));
  }
};
