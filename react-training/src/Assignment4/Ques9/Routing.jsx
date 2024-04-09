import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Setting from "./Setting";
import Logout from "./Logout";
import AboutUs from "./AboutUs";
import Charts from "./Charts";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route path="/setting" element={<Setting />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/charts" element={<Charts />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
