import React from 'react';
import './CoursesPage.css';

function CoursesPage() {
  return (
    <div className="courses-page">
      {/* Compulsory Courses Section */}
      <div className="courses-section">
        <h2 className="section-title">COMPULSORY COURSES</h2>
        <table className="courses-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22AI501</td>
              <td>ARTIFICIAL INTELLIGENCE</td>
            </tr>
            <tr>
              <td>22AI502</td>
              <td>COMPUTER NETWORK</td>
            </tr>
            <tr>
              <td>22AI503</td>
              <td>MACHINE LEARNING</td>
            </tr>
            <tr>
              <td>22AI504</td>
              <td>CLOUD COMPUTING</td>
            </tr>
            <tr>
              <td>22AI507</td>
              <td>MINI PROJECT I</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Ongoing Electives Section */}
      <div className="courses-section">
        <h2 className="section-title">ONGOING ELECTIVES</h2>
        <div className="elective-course">
          <span>22AI037</span>
          <span>TIME SERIES ANALYZING AND FORECASTING</span>
        </div>
      </div>

      {/* Open Electives Section */}
      <div className="courses-section">
        <h2 className="section-title">Open Electives</h2>
        <div className="elective-course">
          <span>22AG01</span>
          <span>RAINWATER HARVESTING TECHNIQUES</span>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
