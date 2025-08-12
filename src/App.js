import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import CurriculumPage from './components/CurriculumPage';
import RegulationPage from './components/RegulationPage';
import ComputerBasedClusterPage from './components/ComputerBasedClusterPage';
import CoursesPage from './components/CoursesPage';
import ProfessionalElectivePage from './components/ProfessionalElectivePage';
import OpenElectivePage from './components/OpenElectivePage'; // Open Elective Page
import ConfirmationPage from './components/ConfirmationPage'; // Confirmation Page
import Sidebar from './components/Sidebar'; // Import Sidebar

// Layout component with Sidebar
function LayoutWithSidebar({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Step 1: Login page */}
        <Route path="/" element={<LoginPage />} />

        {/* Pages with Sidebar */}
        <Route
          path="/dashboard"
          element={
            <LayoutWithSidebar>
              <DashboardPage />
            </LayoutWithSidebar>
          }
        />

        <Route
          path="/curriculum"
          element={
            <LayoutWithSidebar>
              <CurriculumPage />
            </LayoutWithSidebar>
          }
        />

        <Route
          path="/regulation"
          element={
            <LayoutWithSidebar>
              <RegulationPage />
            </LayoutWithSidebar>
          }
        />

        <Route
          path="/computer-cluster"
          element={
            <LayoutWithSidebar>
              <ComputerBasedClusterPage />
            </LayoutWithSidebar>
          }
        />

        <Route
          path="/courses"
          element={
            <LayoutWithSidebar>
              <CoursesPage />
            </LayoutWithSidebar>
          }
        />

        <Route
          path="/professional-elective"
          element={
            <LayoutWithSidebar>
              <ProfessionalElectivePage />
            </LayoutWithSidebar>
          }
        />

        {/* Open Elective Page */}
        <Route
          path="/open-elective"
          element={
            <LayoutWithSidebar>
              <OpenElectivePage />
            </LayoutWithSidebar>
          }
        />

        {/* Confirmation Page */}
        <Route
          path="/confirmation"
          element={
            <LayoutWithSidebar>
              <ConfirmationPage />
            </LayoutWithSidebar>
          }
        />

        {/* Optional fallback route (default to dashboard) */}
        <Route path="*" element={<DashboardPage />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;
