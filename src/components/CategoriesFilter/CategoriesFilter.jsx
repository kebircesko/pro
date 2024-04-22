import React, {useState} from 'react'
import "./categoriesfilter.css"
import logo from "./../../assets/CategoriesFilter/logo.png"
import mapimage from "./../../assets/CategoriesFilter/map.png"
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
import { IoMdMenu, IoIosArrowForward, IoIosArrowDown, IoIosArrowBack,IoIosSearch, IoIosClose } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const CategoriesFilter = () => {

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

    return (
        <>
            <header className='headermobile'>
                <nav className='navmobile'>
                    <img src={logo} alt="" />
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

            <img src={mapimage} id='mapimage' alt="" />

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

            <footer className='footermobile'>
                <p className='quicklinks'>Quick Links:</p>
                <div className='footerlinks'>
                    <div>
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
        </>
    );
}
 
export default CategoriesFilter;