import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
// import MembershipDashboard from './components/MembershipDashboard';
import MembershipTiers from './components/MembershipTiers/MembershipTiers';
import logo from './logo.svg';
import './App.css';
import MembershipDashboard from './components/MembershipDashboard/MembershipDashboard';

// function App() {
//   return (
//     <BrowserRouter basename="/GGNPC-Membership">
//       <div className="min-h-screen bg-white">
//         <nav className="bg-green-800 text-white p-4">
//           <h1 className="text-2xl font-bold">GGNPC Membership Analysis</h1>
//           <div className="mt-4">
//             <Link to="/dashboard" className="mr-4 hover:text-gray-300">Dashboard</Link>
//             <Link to="/tiers" className="hover:text-gray-300">Membership Tiers</Link>
//           </div>
//         </nav>
        
//         <main className="container mx-auto">
//           <Routes>
//             <Route path="/dashboard" element={<MembershipDashboard />} />
//             <Route path="/tiers" element={<MembershipTiers />} />
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;




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
            {/* Redirect root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<MembershipDashboard />} />
            <Route path="/tiers" element={<MembershipTiers />} />
            {/* Catch all route for 404 */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;