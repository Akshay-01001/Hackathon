import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Layout from "./pages/Layout";
import CropRecommendation from "./components/Preview";

function ProtectedRoute({ children }) {
  const { isSignedIn } = useUser();
  return isSignedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/preview" element={<ProtectedRoute><Layout><CropRecommendation /></Layout></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;