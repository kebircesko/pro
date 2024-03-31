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
import { IoMdMenu, IoIosArrowForward, IoIosArrowDown, IoIosSearch, IoIosClose } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const CategoriesFilter = () => {

    const [showTrainings, setShowTrainings] = useState(false);

    const handleToggleTrainings = () => {
        setShowTrainings(!showTrainings);
    };

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
                    <button className='dropdownsearch'><IoIosArrowDown className="arrowdownicon"/></button>
                    <input type="search" placeholder='Search by name, building, event' />
                    <button className='searchbutton' type='submit'><IoIosSearch className="searchicon"/></button>
                </div>
            </header>

            <img src={mapimage} id='mapimage' alt="" />

            <div className={`trainings ${showTrainings ? 'slide-in' : ''}`}>
                <IoIosClose className={`closeicon ${showTrainings ? 'showicon' : ''}`} onClick={handleToggleTrainings}/>
                <h1>Trainings</h1>
                <p>Choose a category</p>

                <div className='categories'>
                    <div className='category'>
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
                    <FaLinkedin class="socialicon"/>
                    <FaFacebookF class="socialicon"/>
                    <FaInstagram class="socialicon"/>
                </div>

                <p className='followus'>Follow us to stay updated</p>

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