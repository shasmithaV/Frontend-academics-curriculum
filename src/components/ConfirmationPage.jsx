import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmationPage.css'; // Import the CSS file for styling

function ConfirmationPage() {
  const navigate = useNavigate();

  const handleDoneClick = () => {
    navigate('/dashboard'); // Navigate back to the dashboard or any other page when done is clicked
  };

  return (
    <div className="confirmation-page">
      <div className="confirmation-box">
        <h2 className="confirmation-header">CONFIRMATION STATUS</h2>
        <p className="welcome-text">Hi SHASMITHA V(7376222AD202),</p>
        <div className="confirmation-message">
          You have Successfully Registered your Open Elective course.
        </div>
        <button className="done-button" onClick={handleDoneClick}>
          DONE
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
