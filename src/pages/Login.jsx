import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/products"); // Redirect to dashboard after successful login
        } catch (error) {
          console.error("Error logging in:", error);
        }
      };

  return (
    <div className='max-w-6xl mx-auto bg-gray-100 px-4 py-2'>
        <div className='max-w-3xl mx-auto bg-white rounded-xl shadow-mg px-4 py-2'>
            <h1 className='text-center mb-4 font-bold text-3xl '>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="email" 
                id="email" 
                placeholder='Enter Email...'
                className='w-full border p-2 rounded-xl mb-4'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='Enter Password...'
                className='w-full border p-2 rounded-xl mb-4'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className='bg-orange-400 w-full px-4 py-2 mb-2'>Login</button>
                <p>Don't have an account? <Link to="/signup" className='text-blue-300 cursor-pointer'>Sign up</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login


// // src/components/Login.js
// import { useState } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// const Login = ({ setUser, setUserRole }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("employee"); // default role
//   const [isNewUser, setIsNewUser] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let userCredential;
//       if (isNewUser) {
//         // Create account
//         userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       } else {
//         // Sign in
//         userCredential = await signInWithEmailAndPassword(auth, email, password);
//       }
//       setUser(userCredential.user);
//       setUserRole(role);
//     } catch (error) {
//       console.error("Error during authentication", error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>{isNewUser ? "Sign Up" : "Login"}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required />
//         </div>
//         <div>
//           <label>Role: </label>
//           <select value={role} onChange={(e) => setRole(e.target.value)}>
//             <option value="employee">Employee</option>
//             <option value="employer">Employer</option>
//           </select>
//         </div>
//         <button type="submit">{isNewUser ? "Sign Up" : "Login"}</button>
//       </form>
//       <div>
//         {isNewUser ? "Already have an account?" : "New user?"}{" "}
//         <button onClick={() => setIsNewUser(!isNewUser)}>
//           {isNewUser ? "Login" : "Sign Up"}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Login;
