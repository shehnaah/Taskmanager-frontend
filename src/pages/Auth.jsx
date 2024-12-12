import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../redux/actions/authActions';
import './auth.css'; 

function Auth() {
  const [isRegistering, setIsRegistering] = useState(true); // Default to Register page
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => {
    console.log(state.auth); // Check state.auth here
    return state.auth;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    if (isRegistering) {
      dispatch(register(email, password)); // Register User
    } else {
      dispatch(login(email, password)); // Login User
    }
  };

  return (
    <div>
      <div className="container">
        <div className="screen">
          <div className="screen__content" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <form className="login" onSubmit={handleSubmit}>
              <h2 className="auth-heading" style={{ textAlign: 'center', marginBottom: '20px' }}>
                {isRegistering ? 'Sign Up' : 'Log In'}
              </h2>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="email"
                  className="login__input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                className="button login__submit"
                style={{ marginBottom: '20px' }}
                disabled={loading}
              >
                <span className="button__text">{isRegistering ? 'Register' : 'Log In'}</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              {error && <p className="auth-error">{error}</p>}
              <p
                className="auth-toggle"
                style={{
                  marginTop: '25px',
                  color: '#393497',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
                onClick={() => setIsRegistering((prev) => !prev)}
              >
                {isRegistering
                  ? 'Already have an account? Log In'
                  : "Don't have an account? Sign Up"}
              </p>
            </form>
            <div className="social-login">
              <h3>Log in via</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
