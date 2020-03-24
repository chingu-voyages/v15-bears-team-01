import React, { useContext } from "react";
import AuthContext from "../utils/auth_context";
import image from "../static/Man Reading a Book Illustration.jpg";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <div>
        <div className={styles.landing}>
          <div className={styles.container}>
            <div>
              <div className={styles.callToAction}>
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
      </div>
      <div className={styles.home_row1}>
        <div className={styles.home_col1}>
          <h3> Easily Track All your Jobs Applications </h3>
          <p> Use our tool to keep track of all your job apps in one place </p>
          <button> Join today for free </button>
        </div>
        <div className={styles.home_col2}>
          <img className={styles.home_image} src={image} alt="" />
        </div>
      </div>
      <div className={styles.home_row1}>
        <svg
          className={styles.home_vector}
          viewBox="0 0 1440 306"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 205.586L34 183.958C69 161.558 137 116.758 206 100.537C274 83.5438 343 94.3576 411 128.344C480 161.558 549 217.172 617 200.179C686 183.958 754 94.3576 823 44.9229C891 -5.28421 960 -16.8705 1029 27.9297C1097 72.7299 1166 172.372 1234 177.779C1303 183.958 1371 94.3576 1406 50.3298L1440 5.52963V306H1406C1371 306 1303 306 1234 306C1166 306 1097 306 1029 306C960 306 891 306 823 306C754 306 686 306 617 306C549 306 480 306 411 306C343 306 274 306 206 306C137 306 69 306 34 306H0V205.586Z"
            fill="#0099FF"
          />
        </svg>
      </div>
      <div className={styles.card_row1}>
        <div className={styles.card}>
          <div className={styles.card_title}>Card 1</div>
          <div className={styles.card_content}>Card Content</div>
          <svg
            className={styles.card_wave}
            viewBox="0 0 256 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0L10.7692 9.96C21.2308 19.92 42.7692 39.3657 64 45.5314C85.2308 51.2229 106.769 43.6343 128 33.6743C149.231 23.7143 170.769 11.8571 192 13.7543C213.231 15.6514 234.769 31.7771 245.231 39.3657L256 47.4286V83H245.231C234.769 83 213.231 83 192 83C170.769 83 149.231 83 128 83C106.769 83 85.2308 83 64 83C42.7692 83 21.2308 83 10.7692 83H0V0Z"
              fill="#0099FF"
            />
          </svg>
        </div>
        <div className={styles.card}>
          <div className={styles.card_title}>Card 2</div>
          <div className={styles.card_content}>Card Content 2</div>
          <svg
            className={styles.card_wave}
            viewBox="0 0 256 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0L10.7692 9.96C21.2308 19.92 42.7692 39.3657 64 45.5314C85.2308 51.2229 106.769 43.6343 128 33.6743C149.231 23.7143 170.769 11.8571 192 13.7543C213.231 15.6514 234.769 31.7771 245.231 39.3657L256 47.4286V83H245.231C234.769 83 213.231 83 192 83C170.769 83 149.231 83 128 83C106.769 83 85.2308 83 64 83C42.7692 83 21.2308 83 10.7692 83H0V0Z"
              fill="#0099FF"
            />
          </svg>
        </div>
        <div className={styles.card}>
          <div className={styles.card_title}>Card 3</div>
          <div className={styles.card_content}>Card Content 3</div>
          <svg
            className={styles.card_wave}
            viewBox="0 0 256 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0L10.7692 9.96C21.2308 19.92 42.7692 39.3657 64 45.5314C85.2308 51.2229 106.769 43.6343 128 33.6743C149.231 23.7143 170.769 11.8571 192 13.7543C213.231 15.6514 234.769 31.7771 245.231 39.3657L256 47.4286V83H245.231C234.769 83 213.231 83 192 83C170.769 83 149.231 83 128 83C106.769 83 85.2308 83 64 83C42.7692 83 21.2308 83 10.7692 83H0V0Z"
              fill="#0099FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
