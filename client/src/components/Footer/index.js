import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer_buffer"> </div>
        <div className="footer_main">
          <div className="left_footer">
            <div className="footer_link"> Link 1 </div>
            <div className="footer_link"> Link 2 </div>
            <div className="footer_link"> Link 3 </div>
          </div>
          <div className="right_footer">
            <div className="footer_link"> Link 1 </div>
            <div className="footer_link"> Link 2 </div>
            <div className="footer_link"> Link 3 </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div> & copy; 2020 yoursite.com </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
