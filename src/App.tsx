import "./App.css";
import React from 'react';
import Navigation from "./components/navigation/navigation.component";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./routes/home";
import SweatshirtPage from "./routes/sweatshirt";
import TShirtPage from "./routes/t-shirt";
import ShortsPage from "./routes/shorts";
import SocksPage from "./routes/socks";
import PantsPage from "./routes/pants";
import SneakersPage from "./routes/sneakers";



function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigation/>}/>
        <Route exact index={true} element={<Home/>}/>
        <Route exact path="sweatshirts" element={<SweatshirtPage/>}/>
        <Route exact path="socks" element={<SocksPage/>}/>
        <Route exact path="pants" element={<PantsPage/>}/>
        <Route exact path="t-shirts" element={<TShirtPage/>}/>
        <Route exact path="shorts" element={<ShortsPage/>}/>
        <Route exact path='sneakers' element={<SneakersPage/>}/>
      </Routes>
  </Router>
  )
}

export default App;
