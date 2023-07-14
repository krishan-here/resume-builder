import React from "react";
import { GeoAltFill, Linkedin, TelephoneFill } from 'react-bootstrap-icons';
import myImage from '../images/profile.png';
import '../styles/resume.scss';

function Resume() {
  return (
    <div className="resume_container">
      <div className="profile row">
        <div className="description col">
          <h1 className="name">Krishan Murari Barnwal</h1>
          <p className="designation">Software Engineer</p>
          <div className="details">
            <div className="detail">
            <TelephoneFill />
              <p>9564122990</p>
            </div>
            <div className="detail">
              <Linkedin />
              <p>https://www.linkedin.com/in/krishan-murari-barnwal-45429b1b0/</p>
            </div>
            <div className="detail">
              <GeoAltFill />
              <p>Durgapur, West Bengal</p>
            </div>
          </div>
        </div>
        <div className="image col">
          <img src={myImage} alt="profile_image" />
        </div>
      </div>
    </div>
  );
}

export default Resume;
