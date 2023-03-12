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
        <Route path="/" element={<Navigation/>}/>
        <Route index={true} element={<Home/>}/>
        <Route path="sweatshirts" element={<SweatshirtPage/>}/>
        <Route path="socks" element={<SocksPage/>}/>
        <Route path="pants" element={<PantsPage/>}/>
        <Route path="t-shirts" element={<TShirtPage/>}/>
        <Route path="shorts" element={<ShortsPage/>}/>
        <Route path='sneakers' element={<SneakersPage/>}/>
      </Routes>
  </Router>
  )
}

export default App;
