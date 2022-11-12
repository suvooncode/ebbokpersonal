import React from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"; 
import './App.css';
import Homepage from "./component/Homepage"
import Showpdf from './component/Showpdf';
import LoginpageC from './component/Loginpage';
import Bookpages from './component/Bookpage';


function App() {
  return (
    <Router>
    <div className="App">
   
      <Routes>
        <Route exact path="" element={<Homepage/>}  />
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/Login" element={<LoginpageC/>} />
        <Route exact path="/Books" element={<Bookpages/>} />
        <Route exact path="/Showbook"  element={<Showpdf/>} />
        <Route exact path="/Showbook/"  element={<Showpdf/>} />
        <Route  path="/Showbook/:year/:month/:bookname"  element={<Showpdf/>} />
        <Route  path="Showbook/:year/:month/:bookname"  element={<Showpdf/>} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
