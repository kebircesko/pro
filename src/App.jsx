import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MobileMainPage from "./components/MobileMainPage/MobileMainPage";
import RedBuildingFloor0 from "./components/MobileRedBuildingFloor0/RedBuildingFloor0";
import CategoriesFilter from "./components/CategoriesFilter/CategoriesFilter";

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
          <Route path="/CategoriesFilter" element={<CategoriesFilter />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
