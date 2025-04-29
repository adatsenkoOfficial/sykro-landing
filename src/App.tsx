// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Configurator from "./modules/configurator/Configurator";
import Home from "./modules/home/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/configurator" element={<Configurator />} />
      </Routes>
    </Router>
  );
};

export default App;
