import React from 'react';
import './DataEnhancement.css';
import deImage from '../../assets/de.jpg';
import t1 from './t1.jpg';
import t2 from './t2.jpg';
import t3 from './t3.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';

const DataEnhancement = () => {
  return (
    <div>
      <Navbar /><br />
      <div className="imagesection">
        <h1 className="center-text">Data Enhancement</h1>
        <img src={deImage} alt="Data Enhancement" className="main-image" />
        <p className="text-right1">
          Processes used to enhance and improve raw data. Data enhancement refers to processes used to refine or improve raw data. It includes aggregating critical data, completing missing information, and enhancing competitive analysis.
        </p>
      </div>
      <div className="threeimagedes">
        <div className="inside-threeimg">
          <h1>Data Verification</h1>
          <img src={t1} alt="Image 1" className="threeimage" />
        </div>
        <div className="inside-threeimg">
          <h1>Data Extraction</h1>
          <img src={t2} alt="Image 2" className="threeimage" />
        </div>
        <div className="inside-threeimg">
          <h1>Data Analysis</h1>
          <img src={t3} alt="Image 3" className="threeimage" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataEnhancement;
