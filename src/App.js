import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'; // Import your CSS file
import Home from './pages/firstpage/firstpage';
import Secondpage from './pages/secondpage/secondpage';
import Thirdpage from './pages/thirdpage/thirdpage';
import Fourthpage from './pages/fourthpage/fourthpage';
function App(){
  return(
  <BrowserRouter>
  {/* <Navbar/> */}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/secondpage' element={<Secondpage/>}/>
    <Route path='/thirdpage' element={<Thirdpage/>}/>
    <Route path='/secondpage' element={<Secondpage/>}/>
    <Route path='/fourthpage' element={<Fourthpage/>}/>



   

  </Routes>
  {/* <Footer/> */}

  </BrowserRouter>
  )
}


export default App;
