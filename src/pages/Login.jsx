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
          navigate("/checkout"); // Redirect to dashboard after successful login
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


