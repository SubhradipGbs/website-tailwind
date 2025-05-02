import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Projects from "./pages/Projects/Projects";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import SAP from "./pages/SAP/SAP";
import ITPage from "./pages/IT/ITPage";
import GeoSpatial from "./pages/Geo/GeoSpatial";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sap" element={<SAP />} />
        <Route path="/it" element={<ITPage />} />
        <Route path="/geo" element={<GeoSpatial />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
