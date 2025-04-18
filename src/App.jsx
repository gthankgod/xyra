import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz"; 
import Personality from "./components/Personality";
import SubmitForm from "./components/SubmitForm";
import QuizGate from "./components/QuizGate"; // new component
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css'; // Optional weights


const Home = () => (
  <>
    <Hero />
    <Features />
    <CTA />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<QuizGate />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/personality" element={<Personality />} />
        <Route path="/submit-form" element={<SubmitForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
