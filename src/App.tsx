import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import MembershipDashboard from './components/MembershipDashboard';
import MembershipTiers from './components/MembershipTiers/MembershipTiers';
import logo from './logo.svg';
import './App.css';
import MembershipDashboard from './components/MembershipDashboard/MembershipDashboard';

function App() {
  return (
    <BrowserRouter basename="/GGNPC-Membership">
      <div className="min-h-screen bg-white">
        <nav className="bg-green-800 text-white p-4">
          <h1 className="text-2xl font-bold">GGNPC Membership Analysis</h1>
          <div className="mt-4">
            <Link to="/dashboard" className="mr-4 hover:text-gray-300">Dashboard</Link>
            <Link to="/tiers" className="hover:text-gray-300">Membership Tiers</Link>
          </div>
        </nav>
        
        <main className="container mx-auto">
          <Routes>
            <Route path="/dasbhboard" element={<MembershipDashboard />} />
            <Route path="/tiers" element={<MembershipTiers />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;