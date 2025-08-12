import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './ComputerBasedClusterPage.css';

function ComputerBasedCluster() {
  const [openDepartment, setOpenDepartment] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const departments = [
    "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
    "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
    "COMPUTER BASED DESIGN",
    "COMPUTER SCIENCE AND ENGINEERING",
    "COMPUTER SCIENCE AND BUSINESS SYSTEM",
    "COMPUTER TECHNOLOGY",
    "INFORMATION TECHNOLOGY"
  ];

  const toggleDropdown = (index) => {
    setOpenDepartment(openDepartment === index ? null : index);
  };

  const handleSemesterClick = (semester) => {
    if (semester === 5) {
      navigate('/courses'); // Navigate to CoursesPage
    }
  };

  return (
    <div className="computer-cluster-page">
      <h1 className="cluster-header">COMPUTER BASED CLUSTER DEPARTMENTS</h1>
      <div className="department-list">
        {departments.map((dept, index) => (
          <div key={index} className="department-item">
            <div className="department-title" onClick={() => toggleDropdown(index)}>
              <span>{dept}</span>
              <span className="arrow">{openDepartment === index ? '▼' : '▶'}</span>
            </div>
            {openDepartment === index && (
              <div className="dropdown">
                <button>SEMESTER 1</button>
                <button>SEMESTER 2</button>
                <button>SEMESTER 3</button>
                <button>SEMESTER 4</button>
                <button onClick={() => handleSemesterClick(5)}>SEMESTER 5</button>
                <button>SEMESTER 6</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComputerBasedCluster;
