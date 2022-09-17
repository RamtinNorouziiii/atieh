import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./App.scss";
import { Components } from "./components";
import { AboutUs } from "./components/aboutus";
import AliasPage from "./components/alias";
import { ContactUs } from "./components/cotactUs";
import FooterComp from "./components/footer";
import JobOfferComp from "./components/joboffer";
import WithSubnavigation from "./components/navbar";
import { DataReqAction } from "./redux/actions/data";
function App() {
  const dispatch = useDispatch();
  //@ts-ignore
  const data:any = useSelector((state) => state);
  const fetchData = () => {
    dispatch(DataReqAction());
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
    
     <BrowserRouter>
     <WithSubnavigation data={data.alias} />
     <Routes>
      <Route path="/" element={<Components data={data} />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/joboffers" element={<JobOfferComp />} />
      <Route path="/alias/:id" element={<AliasPage data={data.alias}  />} />

     </Routes>
     <FooterComp data={data.alias} />
     </BrowserRouter>
     
    </div>
  );
}

export default App;
