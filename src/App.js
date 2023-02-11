import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import  Watchlist  from './components/Watchlist';
import  Watched  from './components/Watched';
import  Add  from './components/Add';
import { React, useState, useEffect } from 'react';

const App = () => {
 return (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
        </Routes>
    </Router>

 )
};

export default App;
