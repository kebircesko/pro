import $ from "jquery";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Map from "../../assets/MobileRedBuildingFloor0/Group.png";
import mapfloor2 from "../../assets/MobileRedBuildingFloor0/SecondFloor.png";
import mapfloor0 from "../../assets/MobileRedBuildingFloor0/imagefloor1.png";
import Logo from "../../assets/MobileRedBuildingFloor0/itpLlogo.png";
import mapfloor1 from "../../assets/MobileRedBuildingFloor0/mapFloor1st.png";
import "./RedBuildingFloor0.css";

const RedBuildingFloor0 = () => {
  $(document).ready(function () {
    $(".topBuilding").click(function () {
      $(".modal").slideToggle("fast");
    });
  });

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="NavBar">
        <img src={Logo} alt="" srcset="" className="logo" />
        <div className="HamburgerMeny">
          <IoMenu />
        </div>
      </div>
      <div className="MainContent">
        <img src={Map} alt="" srcset="" className="MapFull" />
        <div class="topBuilding"></div>
        <div class="modal">
          <h1 className="redBuildings">Red Building</h1>
          <div className="tabs">
            <div className="tab-buttons">
              <TabButton
                title="Floor 0"
                isActive={activeTab === 0}
                onClick={() => handleTabClick(0)}
              />
              <TabButton
                title="1st Floor"
                isActive={activeTab === 1}
                onClick={() => handleTabClick(1)}
              />
              <TabButton
                title="2st Floor"
                isActive={activeTab === 2}
                onClick={() => handleTabClick(2)}
              />
              <TabButton
                title="3st Floor"
                isActive={activeTab === 3}
                onClick={() => handleTabClick(3)}

              />
            </div>
            <div className="tab-content">
              {activeTab === 0 && (
                <div>
                  <div className="imagediv">
                    <img src={mapfloor0} alt="" srcset="" />
                  </div>
                  <div className="arrowiconFloor">
                    <div className="displayflexonFloor0">
                      <IoIosArrowDown className="arrowdownicon" />
                      <p>KREN - Kosovo Research and Development Network</p>
                    </div>
                  </div>
                  <div className="footerFloor0">
                    <p>
                      This floor has 13 more available rooms.
                      <span className="orangecolor">
                        Be part of our big family
                      </span>
                    </p>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <div className="imagediv">
                    <img src={mapfloor1} alt="" srcset="" />
                  </div>
                  <div className="arrowiconFloor">
                    <div className="displayflexonFloor0">
                      <IoIosArrowDown className="arrowdownicon" />
                      <p>ITP - Prizren</p>
                    </div>
                    <div className="displayflexonFloor0">
                      <IoIosArrowDown className="arrowdownicon" />
                      <p>Digital Transformation Center</p>
                    </div>
                  </div>
                  <div className="footerFloor0">
                    <p>
                      This floor has 13 more available rooms.
                      <span className="orangecolor">
                        Be part of our big family
                      </span>
                    </p>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <div className="imagediv">
                    <img src={mapfloor2} alt="" srcset="" />
                  </div>
                  <div className="displayFlexRow">
                    <div className="arrowiconFloor">
                      <div className="displayflexonFloor0">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>Eizek Mechatronics</p>
                      </div>
                      <div className="displayflexonFloor0">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>Cacttus Education</p>
                      </div>
                      <div className="displayflexonFloor0">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>University of Prizren - UPZ</p>
                      </div>
                      <div className="displayflexonFloor0">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>Spectra</p>
                      </div>
                    </div>
                    <div className="arrowiconFloor">
                      <div className="displayflexonFloor0">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>RTK</p>
                      </div>
                      <div className="displayflexonFloor0">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>FS</p>
                      </div>
                    </div>
                  </div>
                  <div className="footerFloor0">
                    <p>
                      This floor has 13 more available rooms.
                      <span className="orangecolor">
                        Be part of our big family
                      </span>
                    </p>
                  </div>
                </div>
              )}
              {activeTab === 3 && <div>3st Floor</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ title, isActive, onClick }) => {
  return (
    <button
      className={`tab-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default RedBuildingFloor0;
