import '../thirdpage/thirdpage.css';
import llogo from '../../assets/MobileMainPage/llogo.png';
import vector from '../../assets/MobileMainPage/Vector.png';
import group from '../../assets/MobileMainPage/inputi.png';
// import zoom from '../../img/zoom.png';
import arrow from '../../assets/MobileMainPage/arrow.png';
import map3 from '../../assets/MobileMainPage/ITPMap2x_3.png';



function thirdpage() {
  return (
    <div>
      <div className="image-container">
        <img src={llogo} alt="L Logo" className="left-image" />
        <img src={vector} alt="Vector" className="right-image" />
      </div>
        <h2 className='explore'>Explore and navigate around the Innovation and Training Park</h2>
        <center>
          <img className='group1' src={group} alt="Group" />
        </center>
      
        <div className='zoom-container'>
            
          <img className='map2' src={map3} alt="Zoom" />
          
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

export default thirdpage;
