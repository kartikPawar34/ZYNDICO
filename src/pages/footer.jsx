import React from 'react';
import { FaWhatsapp, FaEnvelope, FaGlobe } from 'react-icons/fa'; // Install react-icons

const Connect = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <p className="footer-label">CONTACT US</p>
          <a href="https://wa.me/123434546" className="footer-link">
            <FaWhatsapp /> +919685467114
          </a>
          <a href="mailto:COKEXclub@gmail.com" className="footer-link">
            <FaEnvelope /> COKEXclub@gmail.com
          </a>
        </div>

        <div className="footer-section">
          <p className="footer-label">COUNTRY/REGION</p>
          <p className="footer-link underline"><FaGlobe /> INDIA</p>
        </div>
      </div>

      <hr className="footer-divider"/>

      <div className="footer-bottom">
        <h2 className="main-footer-logo">ZYNDICO</h2>
         <p className="copyright">
          © 2026 ZYNDICO S.p.A. - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Connect;