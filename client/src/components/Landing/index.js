import React from 'react';
import { Link } from 'react-router-dom';
import styles from './landingpage.module.css';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className="row">
          <div className={`twelve columns ${styles.callToAction}`}>
            <div>
              <h1>Jobseekr</h1>
              <h4>An Easy Way To Keep Track of your Job Applications</h4>
              <Link to="/login" className={styles.getStarted}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
