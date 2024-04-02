import React, {useState} from 'react';
import '../firstpage/firstpage.css';
import llogo from '../../assets/MobileMainPage/llogo.png';
import vector from '../../assets/MobileMainPage/Vector.png';
import group from '../../assets/MobileMainPage/inputi.png';
import zoom from '../../assets/MobileMainPage/zoom.png';
import { Link } from 'react-router-dom';
import '../secondpage/secondpage.css';
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

function Home() {

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
    <div>
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
      <Link to="/secondpage" className='zoom-container-link'>
        <div className='zoom-container'>
          <img className='zoom-image' src={zoom} alt="Zoom" />
          <center>
            <p className='zoom-text'>Zoom In the map for better experience</p>
          </center>
        </div>
      </Link>
    </div>
  );
}

export default Home;
