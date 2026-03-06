import React from "react";
import "./TechSlider.css";

const TechSlider = () => {
  return (
    <>
    <div className="process-header">
        <h2>Technologies <span className="highlight">We Use</span></h2>
        <p>Powering modern websites with the robust MERN stack to deliver fast, scalable, and reliable web applications.</p>
      </div>
    <div className="slider">
      
      <div className="slide-track">

        <div className="slide">
            <img src="https://img.icons8.com/color/100/html-5--v1.png" alt="HTML" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/css3.png" alt="CSS" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/javascript--v1.png" alt="JavaScript" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/react-native.png" alt="ReactJS" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/nodejs.png" alt="NodeJS" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/mongodb.png" alt="MongoDB" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/express-js.png" alt="ExpressJS" />
        </div>

        {/* duplicate for infinite animation */}

        <div className="slide">
            <img src="https://img.icons8.com/color/100/html-5--v1.png" alt="HTML" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/css3.png" alt="CSS" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/javascript--v1.png" alt="JavaScript" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/react-native.png" alt="ReactJS" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/nodejs.png" alt="NodeJS" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/mongodb.png" alt="MongoDB" />
        </div>

        <div className="slide">
            <img src="https://img.icons8.com/color/100/express-js.png" alt="ExpressJS" />
        </div>

        </div>
    </div>
    </>
  );
};

export default TechSlider;