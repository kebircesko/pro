import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import $ from "jquery";
import MobileMainPage from "./components/MobileMainPage/MobileMainPage";
import RedBuildingFloor0 from "./components/MobileRedBuildingFloor0/RedBuildingFloor0";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MobileMainPage />}></Route>
          <Route
            path="/RedBuildingFloor0"
            element={<RedBuildingFloor0 />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
