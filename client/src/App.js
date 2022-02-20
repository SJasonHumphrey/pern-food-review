import React from 'react';
import Home from './routes/Home';
import Restaurant from './routes/Restaurant';
import UpdatePage from './routes/UpdatePage';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/restaurants/:id/update" element={<UpdatePage/>} />
        <Route exact path="/restaurants/:id" element={<Restaurant/>} />
      </Routes>
    </Router>
  );
}

export default App;
