import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./App.scss";
import { Components } from "./components";
import { AboutUs } from "./components/aboutus";
import { ContactUs } from "./components/cotactUs";
import FooterComp from "./components/footer";
import JobOfferComp from "./components/joboffer";
import WithSubnavigation from "./components/navbar";
function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <WithSubnavigation />
     <Routes>
      <Route path="/" element={<Components />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/joboffers" element={<JobOfferComp />} />

     </Routes>
     <FooterComp />
     </BrowserRouter>
     
    </div>
  );
}

export default App;
