// src/Dashboard.jsx
import React from 'react';
import './DashboardPage.css'; // Correct CSS file imported

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="welcome">
        <div className="avatar">SV</div>
        <div className="welcome-text">
          <h2>Welcome back,</h2>
          <h1>SHASMITHA V</h1>
        </div>
      </div>
      <div className="student-dashboard">
        <h3>Student Dashboard</h3>
        <p>Login to view your individual performance.</p>
      </div>
      <div className="support">
        <h3>For Any Support,</h3>
        <p>(Academics/Non Academics/Personal)</p>
        <p>Email: <a href="mailto:support@school.ac.in">support@school.ac.in</a></p>
      </div>
    </div>
  );
}

export default Dashboard;
