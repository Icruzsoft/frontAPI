import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
//import './App.css'; // Descomenta si necesitas este archivo CSS
import HomePage from './components/HomePage';
import SolutionsPage from './components/SolutionsPage';
import SignUp from './components/SignUp';
import ContributePage from './components/ContributePage'; // Asegúrate de que este componente exista

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SolutionsPage" element={<SolutionsPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ContributePage" element={<ContributePage />} /> {/* Ruta para ContributePage */}
                 </Routes>
      </Router>
    </div>
  );
};

export default App;
