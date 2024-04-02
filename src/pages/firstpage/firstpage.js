import '../firstpage/firstpage.css';
import llogo from '../../img/llogo.png';
import vector from '../../img/Vector.png';
import group from '../../img/inputi.png';
import zoom from '../../img/zoom.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <div className='image-container-blur'>
      <div className="image-container">
        <img src={llogo} alt="L Logo" className="left-image" />
        <img src={vector} alt="Vector" className="right-image" />
      </div>
      </div>
      <div className='info-container-blur'>
        <h2 className='explore'>Explore and navigate around the Innovation and Training Park</h2>
        <center>
          <img className='group1' src={group} alt="Group" />
        </center>
      </div>
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
