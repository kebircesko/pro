import React, { useState } from 'react';
import '../thirdpage/thirdpage.css';
// import llogo from '../../assets/MobileMainPage/llogo.png';
// import vector from '../../assets/MobileMainPage/Vector.png';
// import group from '../../assets/MobileMainPage/inputi.png';
// import zoom from '../../img/zoom.png';
// import arrow from '../../assets/MobileMainPage/arrow.png';
import map3 from '../../assets/MobileMainPage/ITPMap2x_3.png';
import upmap from '../../assets/MobileMainPage/upmap.png';

import '../secondpage/secondpage.css';

import "./../../components/CategoriesFilter/categoriesfilter.css"
import logo from "./../../assets/CategoriesFilter/logo.png"
// import mapimage from "./../../assets/CategoriesFilter/map.png"
import art from "./../../assets/CategoriesFilter/art.svg"
import digital from "./../../assets/CategoriesFilter/digital.svg"
import finance from "./../../assets/CategoriesFilter/finance.svg"
import ict from "./../../assets/CategoriesFilter/ict.svg"
import others from "./../../assets/CategoriesFilter/others.svg"
import soft from "./../../assets/CategoriesFilter/soft.svg"
import makerspace from "./../../assets/CategoriesFilter/makerspace.svg"
import cacttus from "./../../assets/CategoriesFilter/cacttus.svg"
import ubt from "./../../assets/CategoriesFilter/ubt.svg"
import innovemia from "./../../assets/CategoriesFilter/innovemia.svg"
import cacttuspng from "./../../assets/CategoriesFilter/cacttus.png"
import adaptech from "./../../assets/CategoriesFilter/adaptech.svg"
import eizek from "./../../assets/CategoriesFilter/eizek.svg"
import hangar from "./../../assets/CategoriesFilter/hangar.svg"
import up from '../../assets/MobileMainPage/up.png';
import down from '../../assets/MobileMainPage/down.png';
import internation from '../../assets/MobileMainPage/international.png';
import deb from '../../assets/MobileMainPage/Deb.png';
import { IoMdMenu, IoIosArrowForward, IoIosArrowDown, IoIosArrowBack,IoIosSearch, IoIosClose } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, useSearchParams } from 'react-router-dom';
import foss4g from '../../assets/MobileMainPage/foss4g.svg';




function Thirdpage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showTrainings, setShowTrainings] = useState(false);

    const handleToggleTrainings = () => {
        setShowTrainings(!showTrainings);
        setShowSubcategory(false);
    };

    const [showSubcategory, setShowSubcategory] = useState(false);

    const handleToggleSubcategory = () => {
        setShowSubcategory(!showSubcategory);
    };

    const [showCompany, setShowCompany] = useState(false);

    const closeEverything = () => {
        setShowCompany(false);
        setShowSubcategory(false);
        setShowTrainings(false);
    }

    const handleToggleCompany = () => {
        setShowCompany(!showCompany);
        setShowSubcategory(false);
        setShowTrainings(false);
    }

    const [headerCategories, setHeaderCategories] = useState(false);

    const toggleHeaderCategories = () => {
        if(headerSub){
            setHeaderSub(false);
            setHeaderCategories(false);
        }
        else{
            setHeaderCategories(!headerCategories);
        }
    }

    const [headerSub, setHeaderSub] = useState(false);

    const toggleHeaderSub = () => {
        setHeaderSub(!headerSub);
        setHeaderCategories(!headerCategories);
    }
           // Pjesa e Eventev
const [showEventPopup, setShowEventPopup] = useState(false);
const [showEventPopup1, setShowEventPopup1] = useState(false); // Shto shoEventPopup1

const [selectedIndex, setSelectedIndex] = useState(null);



// Event Popup Toggle
const handleEventToggle = () => {
    setShowEventPopup(!showEventPopup);
    setShowEventPopup1(false); // Nqs popupi 1 është hapur, e mbyllim atë kur të hapet popupi kryesor
    setSelectedIndex(null);
};

// Event Popup 1 Toggle
const handleEventPopup1Toggle = () => {
    setShowEventPopup1(!showEventPopup1);
};

// Eventet dinamike
const events = [
    {
        image: foss4g,
        buttonText: 'Happening now',
        title: 'FOSS4G 2023',
        date: '26 November - 02 December',
        url: '2023.foss4g.org'
    },
    {
        image: deb,
        buttonText: 'Upcoming event',
        title: 'DEBCONF Kosovo 22',
        date: '17 December - 24 December',
        url: 'debconf22.debconf.org'
    },
    {
        image: internation,
        buttonText: 'Upcoming event',
        title: 'International Summer School',
        date: '03 - 13 January 2024',
        url: 'uni-prizren.com/summer-school'
    }
];


    const currentImageIndex = useSearchParams()[0].get(+'currentImage') ?? 2;

  return (
    <div>
      <header className='headermobile'>
                <nav className='navmobile'>
                <Link to='/secondpage'>
                    <img src={logo} alt="" />
                  </Link>
                    <IoMdMenu className="menuicon" />
                </nav>
                <br />
                <h1>Explore and navigate around the Innovation and Training Park</h1>
                <div className="searchbox">
                    <button className={`dropdownsearch ${headerCategories || headerSub ? ' activearrow' : ''}`} onClick={toggleHeaderCategories}>
                        {
                            headerCategories ? <IoIosArrowForward className="arrowdownicon"/> : <IoIosArrowDown className="arrowdownicon"/>
                        }
                    </button>
                    <input type="search" placeholder='Search by name, building, event' />
                    <button className={`searchbutton ${headerCategories ? 'activesearch' : ''}`} type='submit'><IoIosSearch className="searchicon"/></button>
                </div>
                <div className={`headercategories ${headerCategories ? 'fade-in' : ''}`}>
                    <div onClick={toggleHeaderSub}>
                        <IoIosArrowForward />
                        <p>ICT & Technology</p>
                    </div>
                    <div>
                        <IoIosArrowForward />
                        <p>Education & Trainings</p>
                    </div>
                    <div>
                        <IoIosArrowForward />
                        <p>Research & Development</p>
                    </div>
                    <div>
                        <IoIosArrowForward />
                        <p>Green Energy & Environment</p>
                    </div>
                    <div>
                        <IoIosArrowForward />
                        <p>Creative & Culture</p>
                    </div>
                    <div>
                        <IoIosArrowForward />
                        <p>Others</p>
                    </div>
                </div>

                <div className={`headercategory ${headerSub ? 'fade-in' : ''}`}>
                <div className='backtomain' onClick={toggleHeaderSub}>
                    <IoIosArrowBack className="leftarrow"/>
                    <h5>Back to Categories</h5>
                </div>

                <div className='trainingtypes'>
                    <div className='trainingtype'>
                        <div className="imagetraining">
                            <img src={adaptech} alt="" />
                        </div>
                        <div className="texttraining">
                            <h4>Adaptech L.L.C</h4>
                            <h5>ICT & Technology</h5>
                        </div>
                    </div>

                    <div className='trainingtype'>
                        <div className="imagetraining">
                            <img src={hangar} alt="" />
                        </div>
                        <div className="texttraining">
                            <h4>Autostrada Hangar</h4>
                            <h5>Creative & Culture</h5>
                        </div>
                    </div>

                    <div className='trainingtype'>
                        <div className="imagetraining">
                            <img src={cacttus} alt="" />
                        </div>
                        <div className="texttraining">
                            <h4>Cacttus Education</h4>
                            <h5>Education & Trainings</h5>
                        </div>
                    </div>

                    <div className='trainingtype'>
                        <div className="imagetraining">
                            <img src={eizek} alt="" />
                        </div>
                        <div className="texttraining">
                            <h4>Eizek Mechatronics</h4>
                            <h5>ICT & Technology</h5>
                        </div>
                    </div>

                    <div className='trainingtype'>
                        <div className="imagetraining">
                            <img src={makerspace} alt="" />
                        </div>
                        <div className="texttraining">
                            <h4>Makerspace Innovation Prizren</h4>
                            <h5>ICT & Technology</h5>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
      
        <div className='zoom-container-three'>
            
          <img className='map2' src={upmap} alt="Zoom" />
          <div className="updown">
            <img className="pluspage" src={up} alt="Minus" />
        <br />
        <Link         to={{
          pathname: "/secondpage", 
          search: `currentImage=${currentImageIndex}`,
          state: { mapImage: 'map3' }  // Pass the data and currentImageIndex
        }} >
          <img className="minuspage" src={down} alt="Minus" />
        </Link>
      </div>
          
        </div>
        <div className={`trainings ${showTrainings ? 'slide-in' : ''}`}>
                <IoIosClose className={`closeicon ${showTrainings ? 'showicon' : ''}`} onClick={handleToggleTrainings}/>
                <h1>Trainings</h1>
                <p>Choose a category</p>

                <div className='categories'>
                    <div className='category' onClick={handleToggleSubcategory}>
                        <div className='firstpc'>
                            <div>
                                <img src={ict} alt="" />
                            </div>
                            <h3>ICT and Technology</h3>
                        </div>
                        <IoIosArrowForward color='#EC6F2D'/>
                    </div>

                    <div className='category'>
                        <div className='firstpc'>
                            <div>
                                <img src={art} alt="" />
                            </div>
                            <h3>Art and Design</h3>
                        </div>
                        <IoIosArrowForward color='#EC6F2D'/>
                    </div>

                    <div className='category'>
                        <div className='firstpc'>
                            <div>
                                <img src={soft} alt="" />
                            </div>
                            <h3>Soft Skills</h3>
                        </div>
                        <IoIosArrowForward color='#EC6F2D'/>
                    </div>

                    <div className='category'>
                        <div className='firstpc'>
                            <div>
                                <img src={digital} alt="" />
                            </div>
                            <h3>Digital Marketing</h3>
                        </div>
                        <IoIosArrowForward color='#EC6F2D'/>
                    </div>

                    <div className='category'>
                        <div className='firstpc'>
                            <div>
                                <img src={finance} alt="" />
                            </div>
                            <h3>Finance & Business</h3>
                        </div>
                        <IoIosArrowForward color='#EC6F2D'/>
                    </div>

                    <div className='category'>
                        <div className='firstpc'>
                            <div>
                                <img src={others} alt="" />
                            </div>
                            <h3>Others</h3>
                        </div>
                        <IoIosArrowForward color='#EC6F2D'/>
                    </div>
                </div>
                
                <div className="socials">
                    <FaLinkedin className="socialicon"/>
                    <FaFacebookF className="socialicon"/>
                    <FaInstagram className="socialicon"/>
                </div>

                <p className='followus'>Follow us to stay updated</p>

            </div>

            <div className={`trainings subcategory ${showSubcategory ? 'slide-left' : ''}`}>
            
                <h1>ICT & Technology</h1>
                <div className='backtomain' onClick={handleToggleSubcategory}>
                    <IoIosArrowBack className="leftarrow"/>
                    <h5>Back to Training Courses</h5>
                </div>

                <div className='trainingtypes'>
                    <div className='trainingtype'>
                        <div className="imagetraining">
                            <img src={makerspace} alt="" />
                        </div>
                        <div className="texttraining">
                            <h4>Training in CNC Routing</h4>
                            <h5>Makerspace Innovation Center</h5>
                        </div>
                    </div>

                    <div className='trainingtype'>
                        <div className="imagetraining">
                            <img src={makerspace} alt="" />
                        </div>
                        <div className="texttraining">
                            <h4>Accounting through software</h4>
                            <h5>Makerspace Innovation Center</h5>
                        </div>
                    </div>

                    <div className='trainingtype' onClick={handleToggleCompany}>
                        <div className="imagetraining">
                            <img src={cacttus} alt="" />
                        </div>
                        <div className="texttraining">
                            <h4>Digital Marketing Course</h4>
                            <h5>Cacttus Education</h5>
                        </div>
                    </div>

                    <div className='trainingtype'>
                        <div className="imagetraining">
                            <img src={ubt} alt="" />
                        </div>
                        <div className="texttraining">
                            <h4>Microsoft Azure Cloud</h4>
                            <h5>UBT University</h5>
                        </div>
                    </div>

                    <div className='trainingtype'>
                        <div className="imagetraining">
                            <img src={innovemia} alt="" />
                        </div>
                        <div className="texttraining">
                            <h4>Digital and Tech Enterpreneurship</h4>
                            <h5>Innovemia Academy</h5>
                        </div>
                    </div>
                </div>
                
                <div className="socials">
                    <FaLinkedin className="socialicon"/>
                    <FaFacebookF className="socialicon"/>
                    <FaInstagram className="socialicon"/>
                </div>

                <p className='followus'>Follow us to stay updated</p>

            </div>

            <div className={`companyinfo ${showCompany ? 'slide-up' : ''}`}>
                <IoIosClose className={`closeicon ${showCompany ? 'showicon' : ''}`} onClick={closeEverything}/>
                <h1>Cacttus Education</h1>
                <div className='imagetext'>
                    <img src={cacttuspng} alt="" />
                    <p>Cacttus Education is the first associate V level professional school in the field of Information and Communication Technology. As a higher education institution, Cacttus Education provides students with a professional two-year study program.</p>
                </div>
                <br />
                <div className='checkmarks'>
                    <div>
                        <IoIosArrowForward />
                        <h5>Red Building - 2nd FloorInnovation and Training Park (ITP) Ukë Bytyçi 20000 Prizren, Kosovo</h5>
                    </div>
                    <div>
                        <IoIosArrowForward />
                        <h5>info@cacttus.education</h5>
                    </div>
                    <div>
                        <IoIosArrowForward />
                        <h5>+383 (0) 38 600 237</h5>
                    </div>
                </div>
                <h4>Studies</h4>
                <div className="studies">
                    <div>
                        <h5>Web Development</h5>
                        <IoIosArrowForward />
                    </div>
                    <div>
                        <h5>Network and System Administration</h5>
                        <IoIosArrowForward />
                    </div>
                </div>
                <br />
                <div className="companybuttons">
                    <button className="secondarycompany">Visit Website</button>
                    <button className="primarycompany">Open in Maps</button>
                </div>
                <br />
            </div>
  {/* Footer */}
  <footer className='footermobile'>
        <p className='quicklinks'>Quick Links:</p>
        <div className='footerlinks'>
        <div onClick={handleEventToggle}>
            <IoIosArrowForward className="arrowrighticon"/>
            <p>Events</p>
          </div>
          <div onClick={handleToggleTrainings}>
            <IoIosArrowForward className="arrowrighticon"/>
            <p>Training programs</p>
          </div>
          <div>
            <IoIosArrowForward className="arrowrighticon"/>
            <p>Restaurant & Bars</p>
          </div>
        </div>
      </footer>
            {/* Footer */}
                        {/* Event Popup */}
{showEventPopup && (
    <div className="popup">
        <div className="companyinfo">
            <IoIosClose className='iconclosing'  onClick={() => setShowEventPopup(false)} />
            <div className="divevent" onClick={() => handleEventPopup1Toggle()}> 
    <div className='leftevent'>
        <img className='leftimage' src={events[0].image} alt="" />
    </div>
    <div className='rightevent'>
        <button className='buttonevent'>{events[0].buttonText}</button>
        <h3>{events[0].title}</h3>
        <p className='fossdate'>{events[0].date}</p>
        <p className='fosscolor'>{events[0].url}</p>
    </div>
</div>
            <hr></hr>
            <div className="divevent" onClick={() => handleEventPopup1Toggle()}> {/* Shto onClick për t'i hapur popup 1 */}
                <div className='leftevent'>
                    <img className='leftimage' src={events[1].image} alt="" />
                </div>
                <div className='rightevent'>
                    <p className='fosscolor'>{events[1].buttonText}</p>
                    <h3>{events[1].title}</h3>
                    <p className='fossdate'>{events[1].date}</p>
                    <p className='fosscolor'>{events[1].url}</p>
                </div>
            </div>
            <div className="divevent" onClick={() => handleEventPopup1Toggle()}> {/* Shto onClick për t'i hapur popup 1 */}
                <div className='leftevent'>
                    <img className='leftimage' src={events[2].image} alt="" />
                </div>
                <div className='rightevent'>
                    <p className='fosscolor'>{events[2].buttonText}</p>
                    <h3 className='specialtext'>{events[2].title}</h3>
                    <p className='fossdate'>{events[2].date}</p>
                    <p className='fosscolor'>{events[2].url}</p>
                </div>
            </div>
            <br />
        </div>
    </div>
)}

{/* Event Popup 1 */}
{showEventPopup1 && (
  <div className="popup">
  <div className="companyinfo">
      <IoIosClose className='iconclosing' onClick={() => setShowEventPopup1(false)} />
      <div className="divevent" onClick={() => handleEventPopup1Toggle()}> 
<div className='leftevent'>
  <img className='leftimage' src={events[0].image} alt="" />
</div>
<div className='rightevent'>
  <button className='buttonevent'>{events[0].buttonText}</button>
  <h3 >{events[0].title}</h3>
  <p className='fossdate'>{events[0].date}</p>
  <p className='fosscolor'>{events[0].url}</p>
</div>
</div>
<h3 className='aboutstyle'>About FOSS4G</h3>
<p className='companymoreinfo'>Organized by OSGeo and with more than 15 years of experience, this international annual gathering of location enthusiasts is the largest global gathering for geospatial software. FOSS4G brings together developers, users, decision-makers and observers from a broad spectrum of organizations and fields of operation. Through six days of workshops, presentations, discussions, and cooperation, FOSS4G participants create effective and relevant geospatial products, standards, and protocols.</p>
<div className="companybuttons">
        <button className="secondarycompany">Visit Website</button>
        <button className="primarycompany">Learn More</button>
      </div>
     
      <br />
  </div>
</div>
)}
    </div>
  );
}

export default Thirdpage;
