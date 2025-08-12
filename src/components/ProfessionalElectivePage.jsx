import React, { useState } from 'react';
import ConfirmationModal from './Modal/ConfirmationModal'; // Assuming the modal is in a folder called "Modal"
import './ProfessionalElectivePage.css'; // Ensure you create and modify the CSS to match your needs

function ProfessionalElectivePage() {
  const [selectedCourse, setSelectedCourse] = useState('22AI037'); // Default selected course
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal on submit
  };

  const handleConfirm = () => {
    // Handle course confirmation logic here (e.g., sending data to server)
    console.log('Confirmed Course:', selectedCourse);
    setIsModalOpen(false); // Close the modal after confirmation
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Close the modal without confirming
  };

  return (
    <div className="elective-container">
      <div className="confirmation-status-box">
        <h2>CONFIRMATION STATUS</h2>
        <p>Welcome SHASMITHA V(7376222AD202)</p>
        <form onSubmit={handleSubmit} className="elective-form">
          <label>Choose Your Professional Elective Course here</label>
          <div className="course-option">
            <input
              type="radio"
              id="rpa"
              name="elective"
              value="22AI017"
              checked={selectedCourse === '22AI017'}
              onChange={handleChange}
            />
            <label htmlFor="rpa">(22AI017) ROBOTIC PROCESS AUTOMATION</label>
          </div>
          <div className="course-option">
            <input
              type="radio"
              id="tsa"
              name="elective"
              value="22AI037"
              checked={selectedCourse === '22AI037'}
              onChange={handleChange}
            />
            <label htmlFor="tsa">(22AI037) TIME SERIES ANALYSIS AND FORECASTING</label>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>

      {/* Render Confirmation Modal */}
      {isModalOpen && (
        <ConfirmationModal
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          selectedCourse={selectedCourse}
        />
      )}
    </div>
  );
}

export default ProfessionalElectivePage;
