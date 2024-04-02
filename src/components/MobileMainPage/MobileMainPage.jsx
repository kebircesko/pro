import React, { useState } from "react";
import map from "../../assets/MobileMainPage/ITPMap2x_1 1.png";
import vector from "../../assets/MobileMainPage/Vector.png";
import arrow from "../../assets/MobileMainPage/arrow.png";
import group from "../../assets/MobileMainPage/inputi.png";
import llogo from "../../assets/MobileMainPage/llogo.png";
import minus from "../../assets/MobileMainPage/minus.png";
import plus from "../../assets/MobileMainPage/plus.png";
import "./MobileMainPage.css";

function MobileMainPage() {
  const [zoomLevel, setZoomLevel] = useState(100); // Initial zoom level is 100%

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => Math.min(prevZoomLevel + 10, 200)); // Increase zoom level by 10%, limit to 200%
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => Math.max(prevZoomLevel - 10, 50)); // Decrease zoom level by 10%, limit to 50%
  };
  return (
    <div>
      <div className="image-container">
        <img src={llogo} alt="L Logo" className="left-image" />
        <img src={vector} alt="Vector" className="right-image" />
      </div>
      <div>
        <h2 className="explore">
          Explore and navigate around the Innovation and Training Park
        </h2>
        <center>
          <img className="group1" src={group} alt="Group" />
        </center>
      </div>
      <div>
        <div className="plusminus">
          <img
            className="plusimage"
            src={plus}
            alt="Plus"
            onClick={handleZoomIn}
          />
          <br />
          <img
            className="minuspage"
            src={minus}
            alt="Minus"
            onClick={handleZoomOut}
          />
        </div>
        <center>
          <img
            className="map1"
            src={map}
            style={{ width: `${zoomLevel}%` }}
            alt="Map"
          />
        </center>
      </div>
      <div>
        <p className="quicktext">Quick links:</p>
      </div>
      <div>
        <div className="events">
          <div className="eventdiv">
            <img className="arrowpic" src={arrow} alt="Arrow" />
            <p className="eventstext">Events</p>
          </div>
          <div className="eventdiv">
            <img className="arrowpic" src={arrow} alt="Arrow" />
            <p className="eventstext">Training programs</p>
          </div>
          <div className="eventdiv">
            <img className="arrowpic" src={arrow} alt="Arrow" />
            <p className="eventstext">Restaurant&Bars</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMainPage;
