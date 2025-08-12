import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegulationPage.css';

// Adjust the import paths to point to the images in the src folder
import CSE from '../CSE.jpg';
import BioMech from '../BioMech.jpg';
import Bio from '../Bio.jpg';
import Mech from '../Mech.jpg';

function RegulationPage() {
  const navigate = useNavigate();

  const handleClusterClick = () => {
    navigate('/computer-cluster');
  };

  return (
    <div className="regulation-page">
      <h1 className="regulation-header">2022 Regulation</h1>
      <div className="cluster-grid">
        <div className="cluster-item" onClick={handleClusterClick}>
          <img src={CSE} alt="Computer Based Cluster" className="cluster-image" />
          <h3 className="cluster-title">COMPUTER BASED CLUSTER</h3>
        </div>
        <div className="cluster-item">
          <img src={BioMech} alt="Medical/Civil Based Cluster" className="cluster-image" />
          <h3 className="cluster-title">MEDICAL/CIVIL BASED CLUSTER</h3>
        </div>
        <div className="cluster-item">
          <img src={Bio} alt="Electrical Based Cluster" className="cluster-image" />
          <h3 className="cluster-title">ELECTRICAL BASED CLUSTER</h3>
        </div>
        <div className="cluster-item">
          <img src={Mech} alt="Bio and Medical Based Cluster" className="cluster-image" />
          <h3 className="cluster-title">BIO AND MEDICAL BASED CLUSTER</h3>
        </div>
      </div>
    </div>
  );
}

export default RegulationPage;
