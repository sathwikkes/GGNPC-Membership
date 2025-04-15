import React from 'react';
import { HashRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';
// BrowserRouter, Link,
// import MembershipDashboard from './components/MembershipDashboard';
import MembershipTiers from './components/MembershipTiers/MembershipTiers';
// import logo from './logo.svg';
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
    // <BrowserRouter basename="/GGNPC-Membership">
    <HashRouter>
      <div className="min-h-screen bg-white">
        <nav className="bg-green-800 text-white p-4">
          <h1 className="text-2xl font-bold">GGNPC Membership Analysis</h1>
          {/* <div className="mt-4">
            <Link to="/dashboard" className="mr-4 hover:text-gray-300">Dashboard</Link>
            <Link to="/tiers" className="hover:text-gray-300">Membership Tiers</Link>
          </div> */}
          <div className="mt-4 flex gap-8">
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `px-6 py-2 transition-all duration-200 font-medium border-2 ${
                  isActive 
                    ? 'bg-white text-green-800 border-white rounded-t-lg' 
                    : 'text-white border-transparent hover:border-white/50 rounded-lg'
                }`
              }
            >
              Dashboard
            </NavLink>
            <br></br>
            <NavLink 
              to="/tiers" 
              className={({ isActive }) => 
                `px-6 py-2 transition-all duration-200 font-medium border-2 ${
                  isActive 
                    ? 'bg-white text-green-800 border-white rounded-t-lg' 
                    : 'text-white border-transparent hover:border-white/50 rounded-lg'
                }`
              }
            >
              Membership Tiers
            </NavLink>
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
   {/* </BrowserRouter>  */}
   </HashRouter>

  );
}

export default App;


// function App() {
//   return (
//     <HashRouter>
//       <div className="min-h-screen bg-white">
//         <nav className="bg-green-800 text-white p-4">
//           <h1 className="text-2xl font-bold">GGNPC Membership Analysis</h1>
//           <div className="mt-4 flex gap-4">
//             <NavLink 
//               to="/"
//               className={({ isActive }) => 
//                 `px-6 py-2 transition-all duration-200 font-medium ${
//                   isActive 
//                     ? 'bg-white text-green-800 rounded-lg shadow-md' 
//                     : 'text-white hover:bg-green-700 rounded-lg'
//                 }`
//               }
//             >
//               Dashboard
//             </NavLink>
//             <NavLink 
//               to="/tiers"
//               className={({ isActive }) => 
//                 `px-6 py-2 transition-all duration-200 font-medium ${
//                   isActive 
//                     ? 'bg-white text-green-800 rounded-lg shadow-md' 
//                     : 'text-white hover:bg-green-700 rounded-lg'
//                 }`
//               }
//             >
//               Membership Tiers
//             </NavLink>
//           </div>
//         </nav>
        
//         <main className="container mx-auto p-4">
//           <Routes>
//             <Route path="/" element={<MembershipDashboard />} />
//             <Route path="/tiers" element={<MembershipTiers />} />
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>
//         </main>
//       </div>
//     </HashRouter>
//   );
// }

// export default App;