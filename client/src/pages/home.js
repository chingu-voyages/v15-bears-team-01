import React, { useContext } from "react";
import AuthContext from "../utils/auth_context";
import image from '../static/Man Reading a Book Illustration.jpg'
import './home.css'

const Home = () => {
  const context = useContext(AuthContext);
  
  return (
    <div className="home-layout">
      <div className="home-row1">
        <div className="home-col1"> 
            <h3>Easily Track All your Jobs Applications</h3>
            <p>Use our tool to keep track of all your job apps in one place </p>
            <button> Join today for free </button>
        </div>
        <div className="home-col2">
          <img className="home-image" src={image} alt="" />
        </div> 
      </div>
      <div >
        <div className="home-row1">
        <svg className="home-vector" viewBox="0 0 1440 306" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 205.586L34 183.958C69 161.558 137 116.758 206 100.537C274 83.5438 343 94.3576 411 128.344C480 161.558 549 217.172 617 200.179C686 183.958 754 94.3576 823 44.9229C891 -5.28421 960 -16.8705 1029 27.9297C1097 72.7299 1166 172.372 1234 177.779C1303 183.958 1371 94.3576 1406 50.3298L1440 5.52963V306H1406C1371 306 1303 306 1234 306C1166 306 1097 306 1029 306C960 306 891 306 823 306C754 306 686 306 617 306C549 306 480 306 411 306C343 306 274 306 206 306C137 306 69 306 34 306H0V205.586Z" fill="#0099FF"/>
        </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
