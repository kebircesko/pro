import React, { useState } from "react";
import { IoIosArrowDown, IoIosClose, IoMdMenu } from "react-icons/io";
import Autostrada from "../../assets/GreenFloor/AutostradaHangar.svg";
import Map from "../../assets/GreenFloor/greenFloor.svg";
import logo from "../../assets/MobileRedBuildingFloor0/itpLlogo.png";
import "./greenFlorr.css";

const GreenFloor = () => {
  const [showTrainings, setShowTrainings] = useState(true);

  const handleToggleTrainings = () => {
    setShowTrainings(!showTrainings);
    setShowSubcategory(false);
    setShowSubcategoryy(false);
    setShowRtk(false);
    setShowItp(false);
    setShowCacctus(false);
  };

  const [showSubcategory, setShowSubcategory] = useState(false);
  const [showSubcategoryy, setShowSubcategoryy] = useState(false);
  const [showRtk, setShowRtk] = useState(false);
  const [showItp, setShowItp] = useState(false);
  const [showCacctus, setShowCacctus] = useState(false);

  const handleToggleSubcategory = () => {
    setShowSubcategory(!showSubcategory);
  };
  const handleToggleSubcategoryy = () => {
    setShowSubcategoryy(!showSubcategoryy);
  };
  const handleToggleRtk = () => {
    setShowRtk(!showRtk);
  };
  const handleToggleItp = () => {
    setShowItp(!showItp);
  };
  const handleToggleCacctus = () => {
    setShowCacctus(!showItp);
  };

  const [showCompany, setShowCompany] = useState(false);

  const closeEverything = () => {
    setShowSubcategory(false);
    setShowSubcategoryy(false);
    setShowRtk(false);
    setShowItp(false);
    setShowCacctus(false);
  };

  const handleToggleCompany = () => {
    setShowCompany(!showCompany);
    setShowSubcategory(false);
    setShowSubcategoryy(false);
    setShowRtk(false);
    setShowItp(false);
    setShowCacctus(false);
    setShowTrainings(false);
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <header className="headermobile">
        <nav className="navmobile">
          <img src={logo} alt="" />
          <IoMdMenu className="menuicon" />
        </nav>
      </header>
      <div className="MainContent">
        <img src={Map} alt="" srcset="" className="MapFull" />
        <div class="floorGreen" onClick={handleToggleTrainings}></div>
        <div
          class="modal"
          className={`trainings ${showTrainings ? "slide-in" : ""}`}
        >
          <IoIosClose
            className={`closeicon ${showTrainings ? "showicon" : ""}`}
            onClick={handleToggleTrainings}
          />
          <img src={Autostrada} alt="" srcset="" class="imageAutotrada" />
          <div class="infoAboutPlace">
            <div>
              <h1>150m2</h1>
              <p className="paragrapColor">Space in m2</p>
            </div>
            <div>
              <h1>0</h1>
              <p className="paragrapColor">Floor number</p>
            </div>
            <div>
              <h1>2</h1>
              <p className="paragrapColor">Rooms</p>
            </div>
          </div>
          <div className="divInformation">
            <div id="textStartInfo">
              <IoIosArrowDown className="arrowdowniconn" />
              <p className="infoCompany">Internet Connection</p>
            </div>
            <div id="textStartInfo">
              <IoIosArrowDown className="arrowdowniconn" />
              <p className="infoCompany">Electricity & Heating System</p>
            </div>
            <div id="textStartInfo">
              <IoIosArrowDown className="arrowdowniconn" />
              <p className="infoCompany">ETables and Chairs</p>
            </div>
            <div className="contactDivGreenBuilding">
              <p>
                Authorized representative:
                <span className="graycolor">Contact</span>
              </p>
            </div>
            <div className="buttonFooter">
              <button className="buttonTransparentBg">Download PDF Application</button>
              <button className="buttonColorBg">Apply Online</button>
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
export default GreenFloor;
