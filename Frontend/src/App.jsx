import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Home from './pages/Home';
import About from './pages/About';
import Mentors from './pages/Mentors';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import MentorDashboard from './pages/dashboard/MentorDashboard';
import MenteeDashboard from './pages/dashboard/MenteeDashboard';
import MentorOnboarding from './pages/onboarding/MentorOnboarding';
import MenteeOnboarding from './pages/onboarding/MenteeOnboarding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/onboarding">
          <Route path="mentor" element={<MentorOnboarding />} />
          <Route path="mentee" element={<MenteeOnboarding />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="mentor" element={<MentorDashboard />} />
          <Route path="mentee" element={<MenteeDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;