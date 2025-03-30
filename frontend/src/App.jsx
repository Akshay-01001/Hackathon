import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chart from './components/Chart'
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Layout from './pages/Layout';
// import SkinCancerPrediction from './components/Preview';
import CropRecommendation from './components/Preview';
import Graph from './components/Graph';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/chart' element={<Layout><Chart /></Layout>} />
        <Route path='/graph' element={<Layout><Graph /></Layout>} />
        <Route path='/preview' element={<Layout><CropRecommendation /></Layout>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
