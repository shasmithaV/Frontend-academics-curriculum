import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './Modal/ConfirmationModal';

import './OpenElectivePage.css'; // Import the CSS file for styling

function OpenElectivePage() {
  const [selectedElective, setSelectedElective] = useState('22AG01');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // For navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true); // Show modal after form submission
  };

  const handleConfirm = () => {
    setShowModal(false); // Close modal after confirmation
    console.log("Navigating to /confirmation");
    navigate('/confirmation'); // Navigate to confirmation page
  };

  const handleCancel = () => {
    setShowModal(false); // Close the modal without navigating
  };

  return (
    <div className="open-elective-page">
      <h2 className="confirmation-status">CONFIRMATION STATUS</h2>
      <p>Welcome SHASMITHA V(7376222AD202),</p>
      <p>Choose Your Open Elective Course here</p>
      <form onSubmit={handleSubmit}>
        <div className="electives-list">
          {/* Use radio buttons to allow only one elective selection */}
          <label>
            <input
              type="radio"
              value="22AG01"
              checked={selectedElective === '22AG01'}
              onChange={(e) => setSelectedElective(e.target.value)}
            />
            22AG01-RAINWATER HARVESTING TECHNIQUES
          </label>

          <label>
            <input
              type="radio"
              value="22BT01"
              checked={selectedElective === '22BT01'}
              onChange={(e) => setSelectedElective(e.target.value)}
            />
            22BT01-BIOFUELS
          </label>

          <label>
            <input
              type="radio"
              value="22GEOP5"
              checked={selectedElective === '22GEOP5'}
              onChange={(e) => setSelectedElective(e.target.value)}
            />
            22GEOP5-PHYSICS OF SOFT MATTER
          </label>
          <label>
            <input
              type="radio"
              value="22OGE01"
              checked={selectedElective === '22OGE01'}
              onChange={(e) => setSelectedElective(e.target.value)}
            />
            22OGE01-PRINCIPLES OF MANAGEMENT

          </label>
          <label>
            <input
              type="radio"
              value="22OCE01"
              checked={selectedElective === '22OCE01'}
              onChange={(e) => setSelectedElective(e.target.value)}
            />
            22OCE01-ENERGY CONSERVATION AND MANAGEMENT

          </label>
          <label>
            <input
              type="radio"
              value="22OCB01"
              checked={selectedElective === '22OCB01'}
              onChange={(e) => setSelectedElective(e.target.value)}
            />
            22OCB01-INTERNATIONAL BUSINESS MANAGEMENT
          </label>
          <label>
            <input
              type="radio"
              value="22OEC03"
              checked={selectedElective === '22OEC03'}
              onChange={(e) => setSelectedElective(e.target.value)}
            />
            22OEC03-PRINCIPLES OF COMMUNICATION SYSTEMS

          </label>
          <label>
            <input
              type="radio"
              value="22OME02"
              checked={selectedElective === '22OME02'}
              onChange={(e) => setSelectedElective(e.target.value)}
            />
            22OME02-INDUSTRIAL PROCESS ENGINEERING

          </label>
          <label>
            <input
              type="radio"
              value="22OCH03"
              checked={selectedElective === '22OCH03'}
              onChange={(e) => setSelectedElective(e.target.value)}
            />
            22OCH03-ENERGY STORING DEVICES


          </label>
          <label>
            <input
              type="radio"
              value="22OGE02"
              checked={selectedElective === '22OGE02'}
              onChange={(e) => setSelectedElective(e.target.value)}
            />
            22OGE02-ENTREPRENEURSHIP DEVELOPMENT I

          </label>
        </div>

        <button type="submit" className="submit-button">SUBMIT</button>
      </form>

      {/* Show the confirmation modal if the submit is clicked */}
      {showModal && (
        <ConfirmationModal
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          selectedElective={selectedElective} // Pass the selected elective to the modal
        />
      )}
    </div>
  );
}

export default OpenElectivePage;
