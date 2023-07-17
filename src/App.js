// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Detail from './Detail'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function App() {
  const navigate= useNavigate()
  const [countrydata, setcountrydata] = useState("")
  function abc(data) {
    setcountrydata(data)
    navigate("/detail")
  }
  console.log("function working-->", countrydata)
  return (
    <>

        <Routes>
          <Route path='/' element={<Home clickFunction={abc} />} />
          <Route path='/detail' element={<Detail countrydata={countrydata} />} />
        </Routes>
    </>
  );
}

export default App;
