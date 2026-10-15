import React from 'react';
import { Link } from 'react-router-dom';
import CompanyInfo from '../../CompanyInfo.json';
import { TRAINING_PROGRAMS } from '../data/trainingData';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-columns-wrap">
            
            {/* Col 1: Brand & Contact Info */}
            <div className="footer-col footer-col-contact">
              <h3>MicroSysLogic</h3>
              <p>
                {CompanyInfo.ADDRESS_1}<br />
                {CompanyInfo.ADDRESS_2} <br /><br />
                <strong>Phone:</strong> {CompanyInfo.PHONE}<br />
                <strong>Email:</strong> {CompanyInfo.EMAIL}
              </p>
            </div>

            {/* Col 2: Useful Links */}
            <div className="footer-col footer-col-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/training-programs">Training Hub</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Quick Links / Products */}
            <div className="footer-col footer-col-products">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/products/automations">Automations</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/products/ai">AI Solutions</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/products/defense">Defense</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/products/renewable">Renewable Energy</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/products/hospitals">Smart Hospitals</Link>
                </li>
              </ul>
            </div>

            {/* Col 4: 6 Training Programs */}
            <div className="footer-col footer-col-training">
              <h4>Training Programs</h4>
              <ul>
                {TRAINING_PROGRAMS.map((program) => (
                  <li key={program.id}>
                    <i className="bx bx-chevron-right"></i>
                    <Link to={`/training-programs/${program.slug}`}>
                      {program.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div className="copyright">
            &copy; {new Date().getFullYear()} <strong><span>MicroSysLogic</span></strong>. All Rights Reserved
          </div>
          <div className="social-links">
            <a href="#" className="facebook" aria-label="Facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram" aria-label="Instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="linkedin" aria-label="LinkedIn">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
