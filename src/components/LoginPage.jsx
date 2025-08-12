import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Access login function

  const handleGoogleSignIn = () => {
    // Simulate successful Google sign-in
    // Set your authentication logic here

    login(); // Update authentication state
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img
            src="https://example.com/logo.png" // Replace with your logo URL
            alt="Logo"
            className="login-logo"
          />
          <h2 className="login-title">LEARNING PORTAL</h2>
        </div>
        <h3 className="login-welcome">Hi, Welcome Back</h3>
        <button className="google-button" onClick={handleGoogleSignIn}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="google-icon"
          />
          Sign In with Google
        </button>
        <p className="login-subtext">Sign in with your BITSathy Account</p>
      </div>
    </div>
  );
}

export default LoginPage;
