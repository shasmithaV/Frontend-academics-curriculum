import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CurriculumPage.css';

// Import images (replace these with your actual image paths)
import Reg2022 from '../20.22.png';   // 2022 Regulation
import Reg2018 from '../20118.png';    // 2018 Regulation
import Reg2014 from '../20114.png';    // 2014 Regulation
import Reg2010 from '../20-(10).png'; // 2010 Regulation

function CurriculumPage() {
  const navigate = useNavigate();

  return (
    <div className="curriculum-page">
      <h1 className="curriculum-header">CURRICULUM</h1>
      <div className="curriculum-grid">
        <div className="curriculum-item" onClick={() => navigate('/regulation')}>
          <img src={Reg2022} alt="2022 Regulation" className="curriculum-image" />
          <h3 className="curriculum-title">2022 REGULATION</h3>
          <span className="curriculum-arrow">➔</span>
        </div>
        <div className="curriculum-item">
          <img src={Reg2018} alt="2018 Regulation" className="curriculum-image" />
          <h3 className="curriculum-title">2018 REGULATION</h3>
          <span className="curriculum-arrow">➔</span>
        </div>
        <div className="curriculum-item">
          <img src={Reg2014} alt="2014 Regulation" className="curriculum-image" />
          <h3 className="curriculum-title">2014 REGULATION</h3>
          <span className="curriculum-arrow">➔</span>
        </div>
        <div className="curriculum-item">
          <img src={Reg2010} alt="2010 Regulation" className="curriculum-image" />
          <h3 className="curriculum-title">2010 REGULATION</h3>
          <span className="curriculum-arrow">➔</span>
        </div>
      </div>
    </div>
  );
}

export default CurriculumPage;
