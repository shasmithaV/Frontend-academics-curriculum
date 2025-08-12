import React from 'react';
import './Modal.css'; // Import the modal styles

function ConfirmationModal({ onConfirm, onCancel, selectedCourse }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Are you sure you want to choose this Elective course?</h2>
        <p>You have selected: {selectedCourse}</p>
        <p>Once selected, you can't change the course.</p>
        <div className="modal-actions">
          <button className="confirm-button" onClick={onConfirm}>CONFIRM</button>
          <button className="cancel-button" onClick={onCancel}>CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
