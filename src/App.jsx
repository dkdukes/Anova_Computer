import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Products from './pages/Products'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/products' element={<Products />}/>
      </Routes>
    </Router>
  )
}

export default App

// // # App.jsx

// import { useState } from "react";
// import Login from "./pages/Login";
// import EmployeeDashboard from "./pages/EmployeeDashboard";
// import EmployerDashboard from "./pages/EmployerDashboard";

// function App() {
//   const [user, setUser] = useState(null);
//   const [userRole, setUserRole] = useState(null);

//   // Simple logout function
//   const logout = () => {
//     setUser(null);
//     setUserRole(null);
//   };

//   if (!user) {
//     return <Login setUser={setUser} setUserRole={setUserRole} />;
//   }

//   return (
//     <div>
//       <header>
//         <button onClick={logout}>Logout</button>
//       </header>
//       {userRole === "employee" && <EmployeeDashboard/>}
//       {userRole === "employer" && <EmployerDashboard />}
//     </div>
//   );
// }
// export default App;
