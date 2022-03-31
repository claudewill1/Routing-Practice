import React from 'react';
import {Link, Redirect, BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import Page from './components/Page';
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:word" element={<Page />} />
          <Route path="/:word/:word1" element={<Page />} />
          <Route path="/:word/:word1/:word2" element={<Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
