import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { IoIosArrowDown, IoIosClose, IoMdMenu } from "react-icons/io";
import Cacctus from "../../assets/MobileRedBuildingFloor0/Cacctus.svg";
import ITP from "../../assets/MobileRedBuildingFloor0/ITP.svg";
import RTK from "../../assets/MobileRedBuildingFloor0/RTK.svg";
import mapfloor0 from "../../assets/MobileRedBuildingFloor0/floor0.svg";
import mapfloor1 from "../../assets/MobileRedBuildingFloor0/floor1.svg";
import mapfloor2 from "../../assets/MobileRedBuildingFloor0/floor2.svg";
import logo from "../../assets/MobileRedBuildingFloor0/itpLlogo.png";
import Map from "../../assets/MobileRedBuildingFloor0/itpMap.svg";
import tenant from "../../assets/MobileRedBuildingFloor0/tenant1.svg";
import tenant1 from "../../assets/MobileRedBuildingFloor0/tenant11.svg";
import "./RedBuildingFloor0.css";

const RedBuildingFloor0 = () => {
  const [showTrainings, setShowTrainings] = useState(false);

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
        <div class="topBuilding" onClick={handleToggleTrainings}></div>
        <div
          class="modal"
          className={`trainings ${showTrainings ? "slide-in" : ""}`}
        >
          <IoIosClose
            className={`closeicon ${showTrainings ? "showicon" : ""}`}
            onClick={handleToggleTrainings}
          />
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
                  {/* Start of tenant30 */}
                  <div
                    className={`tenant subcategoryy ${
                      showSubcategory ? "slide-left" : ""
                    }`}
                  >
                    <IoIosClose
                      className={`closeiconn ${
                        showTrainings ? "showiconn" : ""
                      }`}
                      onClick={handleToggleTrainings}
                    />
                    <div className="closeiconnn">
                        <HiArrowLeft
                          className={`iconDesign ${
                            showTrainings ? "showiconn" : ""
                          }`}
                          onClick={handleToggleTrainings}
                        />
                        <h6 id="backRedBuilding">Back to Red Building</h6>
                      </div>
                    <div>
                      <h1>Become a tenant</h1>
                      <img src={tenant} alt="" className="imageTenant" />
                    </div>
                    <div className="infoAboutTenant">
                      <div className="tenant1">
                        <h2>30m2</h2>
                        <p>Small office</p>
                      </div>
                      <div className="tenant1">
                        <h2>2</h2>
                        <p>Floor number</p>
                      </div>
                      <div className="tenant1">
                        <h2>3</h2>
                        <p>Rooms</p>
                      </div>
                    </div>
                    <div className="displayflexonFloor00">
                      <div className="flexTenant">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>Internet Connection</p>
                      </div>
                      <div className="flexTenant">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>Internet Connection</p>
                      </div>
                      <div className="flexTenant">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>Internet Connection</p>
                      </div>
                      <p>
                        Authorized representative:
                        <span className="orangecolor">Contact</span>
                      </p>
                    </div>
                    <div className="buttonFooter">
                      <button className="buttonTransparentBg">
                        Download PDF Application
                      </button>
                      <button className="buttonColorBg">Apply Online</button>
                    </div>
                  </div>
                  {/* End of tenant30 */}
                  {/* Start of tenant45 */}
                  <div
                    className={`tenant subcategoryy ${
                      showSubcategoryy ? "slide-left" : ""
                    }`}
                  >
                    <IoIosClose
                      className={`closeiconn ${
                        showTrainings ? "showiconn" : ""
                      }`}
                      onClick={handleToggleTrainings}
                    />
                    <div className="closeiconnn">
                        <HiArrowLeft
                          className={`iconDesign ${
                            showTrainings ? "showiconn" : ""
                          }`}
                          onClick={handleToggleTrainings}
                        />
                        <h6 id="backRedBuilding">Back to Red Building</h6>
                      </div>
                    <div>
                      <h1>Become a tenant</h1>
                      <img src={tenant1} alt="" className="imageTenant" />
                    </div>
                    <div className="infoAboutTenant">
                      <div className="tenant1">
                        <h2>45m2</h2>
                        <p>Medium office</p>
                      </div>
                      <div className="tenant1">
                        <h2>2</h2>
                        <p>Floor number</p>
                      </div>
                      <div className="tenant1">
                        <h2>1</h2>
                        <p>Rooms</p>
                      </div>
                    </div>
                    <div className="displayflexonFloor00">
                      <div className="flexTenant">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>Internet Connection</p>
                      </div>
                      <div className="flexTenant">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>Internet Connection</p>
                      </div>
                      <div className="flexTenant">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>Internet Connection</p>
                      </div>
                      <p>
                        Authorized representative:
                        <span className="orangecolor">Contact</span>
                      </p>
                    </div>
                    <div className="buttonFooter">
                      <button className="buttonTransparentBg">
                        Download PDF Application
                      </button>
                      <button className="buttonColorBg">Apply Online</button>
                    </div>
                  </div>
                  {/* End of tenant45 */}

                  <div
                    className="place1"
                    onClick={handleToggleSubcategoryy}
                  ></div>
                  <div
                    className="place2"
                    onClick={handleToggleSubcategoryy}
                  ></div>
                  <div
                    className="place3"
                    onClick={handleToggleSubcategoryy}
                  ></div>
                  <div
                    className="place4"
                    onClick={handleToggleSubcategoryy}
                  ></div>
                  <div
                    className="place5"
                    onClick={handleToggleSubcategoryy}
                  ></div>
                  <div
                    className="placeBigger1"
                    onClick={handleToggleSubcategory}
                  ></div>
                  <div
                    className="placeBigger2"
                    onClick={handleToggleSubcategory}
                  ></div>
                  <div
                    className="placeBigger3"
                    onClick={handleToggleSubcategoryy}
                  ></div>
                  <div className="arrowiconFloorr">
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
                      <p onClick={handleToggleItp}>ITP - Prizren</p>
                    </div>
                    <div
                      className={`tenant subcategoryy ${
                        showItp ? "slide-left" : ""
                      }`}
                    >
                      <IoIosClose
                        className={`closeiconn ${
                          showTrainings ? "showiconn" : ""
                        }`}
                        onClick={handleToggleTrainings}
                      />

                      <div className="closeiconnn">
                        <HiArrowLeft
                          className={`iconDesign ${
                            showTrainings ? "showiconn" : ""
                          }`}
                          onClick={handleToggleTrainings}
                        />
                        <h6 id="backRedBuilding">Back to Red Building</h6>
                      </div>

                      <div className="infoAboutCompany">
                        <h1 id="titleCompany">
                          Innovation and Training Park - Prizren
                        </h1>
                        <div className="rowInfo">
                          <img src={ITP} alt="" className="imageTenantt" />
                          <p id="textStartInfo">
                            The Innovation and Training Park (ITP) Prizren is
                            the most unique location in the region, that fosters
                            collaboration in a vibrant community, aiming to
                            become the regional hub for entrepreneurship
                            innovation, business and skills development.
                          </p>
                        </div>
                      </div>
                      <div className="paddingForInfoCompany">
                        <div className="displayflexonFloor00">
                          <div className="flexTenant">
                            <IoIosArrowDown className="arrowdowniconn" />
                            <p id="textStartInfo">
                              Red Building - 2nd Floor Innovation and Training
                              Park (ITP) Ukë Bytyçi 20000 Prizren, Kosovo
                            </p>
                          </div>
                          <div id="textStartInfo">
                            <IoIosArrowDown className="arrowdownicon" />
                            <p className="infoCompany">itp-prizren@giz.de</p>
                          </div>
                          <div id="textStartInfo">
                            <IoIosArrowDown className="arrowdownicon" />
                            <p className="infoCompany">+383 38 233 002 801</p>
                          </div>
                        </div>
                        <div className="programAboutCompany">
                          <h3>Prograrm</h3>
                          <div className="subPrograms">
                            <p>Skills Development</p>
                            <IoIosArrowDown className="arrowdownicon" />
                          </div>
                          <div className="subPrograms">
                            <p>Business and Innovation Support</p>
                            <IoIosArrowDown className="arrowdownicon" />
                          </div>
                          <div className="subPrograms">
                            <p>Community Managment and Matchmaking</p>
                            <IoIosArrowDown className="arrowdownicon" />
                          </div>
                          <div className="subPrograms">
                            <p>Workshop and Events</p>
                            <IoIosArrowDown className="arrowdownicon" />
                          </div>
                        </div>
                        <div className="buttonFooter">
                          <button className="buttonTransparentBg">
                            Visit Website
                          </button>
                          <button className="buttonColorBg">
                            Open in Maps
                          </button>
                        </div>
                      </div>
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
                      <div
                        className="displayflexonFloor0"
                        onClick={handleToggleCacctus}
                      >
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>Cacttus Education</p>
                      </div>
                      {/* Start of tenant30 */}
                      <div
                        className={`tenant subcategoryy ${
                          showSubcategory ? "slide-left" : ""
                        }`}
                      >
                        <IoIosClose
                          className={`closeiconn ${
                            showTrainings ? "showiconn" : ""
                          }`}
                          onClick={handleToggleTrainings}
                        />
                        <div className="closeiconnn">
                          <HiArrowLeft
                            className={`iconDesign ${
                              showTrainings ? "showiconn" : ""
                            }`}
                            onClick={handleToggleTrainings}
                          />
                          <h6 id="backRedBuilding">Back to Red Building</h6>
                        </div>
                        <div>
                          <h1>Become a tenant</h1>
                          <img src={tenant} alt="" className="imageTenant" />
                        </div>
                        <div className="infoAboutTenant">
                          <div className="tenant1">
                            <h2>30m2</h2>
                            <p>Small office</p>
                          </div>
                          <div className="tenant1">
                            <h2>2</h2>
                            <p>Floor number</p>
                          </div>
                          <div className="tenant1">
                            <h2>3</h2>
                            <p>Rooms</p>
                          </div>
                        </div>
                        <div className="displayflexonFloor00">
                          <div className="flexTenant">
                            <IoIosArrowDown className="arrowdownicon" />
                            <p>Internet Connection</p>
                          </div>
                          <div className="flexTenant">
                            <IoIosArrowDown className="arrowdownicon" />
                            <p>Internet Connection</p>
                          </div>
                          <div className="flexTenant">
                            <IoIosArrowDown className="arrowdownicon" />
                            <p>Internet Connection</p>
                          </div>
                          <p>
                            Authorized representative:
                            <span className="orangecolor">Contact</span>
                          </p>
                        </div>
                        <div className="buttonFooter">
                          <button className="buttonTransparentBg">
                            Download PDF Application
                          </button>
                          <button className="buttonColorBg">
                            Apply Online
                          </button>
                        </div>
                      </div>
                      {/* End of tenant30 */}
                      {/* Start of tenant45 */}
                      <div
                        className={`tenant subcategoryy ${
                          showSubcategoryy ? "slide-left" : ""
                        }`}
                      >
                        <IoIosClose
                          className={`closeiconn ${
                            showTrainings ? "showiconn" : ""
                          }`}
                          onClick={handleToggleTrainings}
                        />
                        <div className="closeiconnn">
                          <HiArrowLeft
                            className={`iconDesign ${
                              showTrainings ? "showiconn" : ""
                            }`}
                            onClick={handleToggleTrainings}
                          />
                          <h6 id="backRedBuilding">Back to Red Building</h6>
                        </div>
                        <div>
                          <h1>Become a tenant</h1>
                          <img src={tenant1} alt="" className="imageTenant" />
                        </div>
                        <div className="infoAboutTenant">
                          <div className="tenant1">
                            <h2>45m2</h2>
                            <p>Medium office</p>
                          </div>
                          <div className="tenant1">
                            <h2>2</h2>
                            <p>Floor number</p>
                          </div>
                          <div className="tenant1">
                            <h2>1</h2>
                            <p>Rooms</p>
                          </div>
                        </div>
                        <div className="displayflexonFloor00">
                          <div className="flexTenant">
                            <IoIosArrowDown className="arrowdownicon" />
                            <p>Internet Connection</p>
                          </div>
                          <div className="flexTenant">
                            <IoIosArrowDown className="arrowdownicon" />
                            <p>Internet Connection</p>
                          </div>
                          <div className="flexTenant">
                            <IoIosArrowDown className="arrowdownicon" />
                            <p>Internet Connection</p>
                          </div>
                          <p>
                            Authorized representative:
                            <span className="orangecolor">Contact</span>
                          </p>
                        </div>
                        <div className="buttonFooter">
                          <button className="buttonTransparentBg">
                            Download PDF Application
                          </button>
                          <button className="buttonColorBg">
                            Apply Online
                          </button>
                        </div>
                      </div>
                      {/* End of tenant45 */}
                      {/* Start of RTK */}
                      <div
                        className={`tenant subcategoryy ${
                          showRtk ? "slide-left" : ""
                        }`}
                      >
                        <IoIosClose
                          className={`closeiconn ${
                            showTrainings ? "showiconn" : ""
                          }`}
                          onClick={handleToggleTrainings}
                        />
                        <div className="closeiconnn">
                          <HiArrowLeft
                            className={`iconDesign ${
                              showTrainings ? "showiconn" : ""
                            }`}
                            onClick={handleToggleTrainings}
                          />
                          <h6 id="backRedBuilding">Back to Red Building</h6>
                        </div>
                        <div className="infoAboutCompany">
                          <h1 id="titleCompany">
                            Radio Television of Kosovo - RTK
                          </h1>
                          <div className="rowInfo">
                            <img src={RTK} alt="" className="imageTenantt" />
                            <p id="textStartInfo">
                              Radio Television of Kosovo is the public
                              broadcaster of Kosovo.  The Assembly of the
                              Republic of Kosovo is the founder of Radio
                              Television of Kosovo.
                            </p>
                          </div>
                        </div>
                        <div className="paddingForInfoCompany">
                          <div className="displayflexonFloor00">
                            <div className="flexTenant">
                              <IoIosArrowDown className="arrowdowniconn" />
                              <p id="textStartInfo">
                                Red Building - 2nd Floor Innovation and Training
                                Park (ITP) Ukë Bytyçi 20000 Prizren, Kosovo
                              </p>
                            </div>
                            <div id="textStartInfo">
                              <IoIosArrowDown className="arrowdownicon" />
                              <p className="infoCompany">info@rtklive.com</p>
                            </div>
                            <div id="textStartInfo">
                              <IoIosArrowDown className="arrowdownicon" />
                              <p className="infoCompany">038 230 102</p>
                            </div>
                          </div>
                          <div className="programAboutCompany">
                            <h3>Prograrm</h3>
                            <div className="subPrograms">
                              <p>RTKLive</p>
                              <IoIosArrowDown className="arrowdownicon" />
                            </div>
                            <div className="subPrograms">
                              <p>RTK1</p>
                              <IoIosArrowDown className="arrowdownicon" />
                            </div>
                            <div className="subPrograms">
                              <p>RTK2</p>
                              <IoIosArrowDown className="arrowdownicon" />
                            </div>
                            <div className="subPrograms">
                              <p>Radio Kosova</p>
                              <IoIosArrowDown className="arrowdownicon" />
                            </div>
                          </div>
                          <div className="buttonFooter">
                            <button className="buttonTransparentBg">
                              Visit Website
                            </button>
                            <button className="buttonColorBg">
                              Open in Maps
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* End of RTK */}
                      {/* Start of ITP */}
                      <div
                        className={`tenant subcategoryy ${
                          showItp ? "slide-left" : ""
                        }`}
                      >
                        <IoIosClose
                          className={`closeiconn ${
                            showTrainings ? "showiconn" : ""
                          }`}
                          onClick={handleToggleTrainings}
                        />
                        <div className="closeiconnn">
                          <HiArrowLeft
                            className={`iconDesign ${
                              showTrainings ? "showiconn" : ""
                            }`}
                            onClick={handleToggleTrainings}
                          />
                          <h6 id="backRedBuilding">Back to Red Building</h6>
                        </div>
                        <div className="infoAboutCompany">
                          <h1 id="titleCompany">
                            Innovation and Training Park - Prizren
                          </h1>
                          <div className="rowInfo">
                            <img src={ITP} alt="" className="imageTenantt" />
                            <p id="textStartInfo">
                              The Innovation and Training Park (ITP) Prizren is
                              the most unique location in the region, that
                              fosters collaboration in a vibrant community,
                              aiming to become the regional hub for
                              entrepreneurship innovation, business and skills
                              development.
                            </p>
                          </div>
                        </div>
                        <div className="paddingForInfoCompany">
                          <div className="displayflexonFloor00">
                            <div className="flexTenant">
                              <IoIosArrowDown className="arrowdowniconn" />
                              <p id="textStartInfo">
                                Red Building - 2nd Floor Innovation and Training
                                Park (ITP) Ukë Bytyçi 20000 Prizren, Kosovo
                              </p>
                            </div>
                            <div id="textStartInfo">
                              <IoIosArrowDown className="arrowdownicon" />
                              <p className="infoCompany">itp-prizren@giz.de</p>
                            </div>
                            <div id="textStartInfo">
                              <IoIosArrowDown className="arrowdownicon" />
                              <p className="infoCompany">+383 38 233 002 801</p>
                            </div>
                          </div>
                          <div className="programAboutCompany">
                            <h3>Prograrm</h3>
                            <div className="subPrograms">
                              <p>Skills Development</p>
                              <IoIosArrowDown className="arrowdownicon" />
                            </div>
                            <div className="subPrograms">
                              <p>Business and Innovation Support</p>
                              <IoIosArrowDown className="arrowdownicon" />
                            </div>
                            <div className="subPrograms">
                              <p>Community Managment and Matchmaking</p>
                              <IoIosArrowDown className="arrowdownicon" />
                            </div>
                            <div className="subPrograms">
                              <p>Workshop and Events</p>
                              <IoIosArrowDown className="arrowdownicon" />
                            </div>
                          </div>
                          <div className="buttonFooter">
                            <button className="buttonTransparentBg">
                              Visit Website
                            </button>
                            <button className="buttonColorBg">
                              Open in Maps
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* End of ITP */}
                      {/* Start of Cacctus */}
                      <div
                        className={`tenant subcategoryy ${
                          showCacctus ? "slide-left" : ""
                        }`}
                      >
                        <IoIosClose
                          className={`closeiconn ${
                            showTrainings ? "showiconn" : ""
                          }`}
                          onClick={handleToggleTrainings}
                        />
                        <div className="closeiconnn">
                          <HiArrowLeft
                            className={`iconDesign ${
                              showTrainings ? "showiconn" : ""
                            }`}
                            onClick={handleToggleTrainings}
                          />
                          <h6 id="backRedBuilding">Back to Red Building</h6>
                        </div>
                        <div className="infoAboutCompany">
                          <h1 id="titleCompany">Cacttus Education</h1>
                          <div className="rowInfo">
                            <img
                              src={Cacctus}
                              alt=""
                              className="imageTenantt"
                            />
                            <p id="textStartInfo">
                              Cacttus Education is the first associate V level
                              professional school in the field of Information
                              and Communication Technology. As a higher
                              education institution, Cacttus Education provides
                              students with a professional two-year study
                              program.
                            </p>
                          </div>
                        </div>
                        <div className="paddingForInfoCompany">
                          <div className="displayflexonFloor00">
                            <div className="flexTenant">
                              <IoIosArrowDown className="arrowdowniconn" />
                              <p id="textStartInfo">
                                Red Building - 2nd Floor Innovation and Training
                                Park (ITP) Ukë Bytyçi 20000 Prizren, Kosovo
                              </p>
                            </div>
                            <div id="textStartInfo">
                              <IoIosArrowDown className="arrowdownicon" />
                              <p className="infoCompany">
                                info@cacttus.education
                              </p>
                            </div>
                            <div id="textStartInfo">
                              <IoIosArrowDown className="arrowdownicon" />
                              <p className="infoCompany">+383 (0)38 600 237</p>
                            </div>
                          </div>
                          <div className="programAboutCompany">
                            <h3>Prograrm</h3>
                            <div className="subPrograms">
                              <p>Web Development</p>
                              <IoIosArrowDown className="arrowdownicon" />
                            </div>
                            <div className="subPrograms">
                              <p>Network and System Administration</p>
                              <IoIosArrowDown className="arrowdownicon" />
                            </div>
                          </div>
                          <div className="buttonFooter">
                            <button className="buttonTransparentBg">
                              Visit Website
                            </button>
                            <button className="buttonColorBg">
                              Open in Maps
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* End of Cacctus */}
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
                      <div
                        className="displayflexonFloor0"
                        onClick={handleToggleRtk}
                      >
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>RTK</p>
                      </div>
                      <div className="displayflexonFloor0">
                        <IoIosArrowDown className="arrowdownicon" />
                        <p>FS</p>
                      </div>
                    </div>
                  </div>
                  <div className="rtkTenant" onClick={handleToggleRtk}></div>
                  {/* <div className="category" onClick={handleToggleItp}>
                    ITP
                  </div> */}
                  <div
                    className="cacctusTenant"
                    onClick={handleToggleCacctus}
                  ></div>
                  <div
                    className="cacctusTenant1"
                    onClick={handleToggleCacctus}
                  ></div>
                  <div
                    className="placee1"
                    onClick={handleToggleSubcategoryy}
                  ></div>
                  <div
                    className="placee2"
                    onClick={handleToggleSubcategory}
                  ></div>
                  <div
                    className="placee3"
                    onClick={handleToggleSubcategoryy}
                  ></div>
                  <div className="footerFloor00">
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
