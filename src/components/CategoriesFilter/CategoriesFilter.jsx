import React, {useState} from 'react'
import "./categoriesfilter.css"
import logo from "./../../assets/CategoriesFilter/logo.png"
import mapimage from "./../../assets/CategoriesFilter/map.png"
import { IoMdMenu, IoIosArrowForward, IoIosArrowDown, IoIosSearch } from "react-icons/io";

const CategoriesFilter = () => {
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

            <footer className='footermobile'>
                <p className='quicklinks'>Quick Links:</p>
                <div className='footerlinks'>
                    <div>
                        <IoIosArrowForward className="arrowlefticon"/>
                        <p>Events</p>
                    </div>
                    <div>
                        <IoIosArrowForward className="arrowlefticon"/>
                        <p>Training programs</p>
                    </div>
                    <div>
                        <IoIosArrowForward className="arrowlefticon"/>
                        <p>Restaurant & Bars</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
 
export default CategoriesFilter;