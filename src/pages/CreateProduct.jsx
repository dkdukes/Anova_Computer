import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { db } from '@/firebase';
import { collection, addDoc } from "firebase/firestore";
const CreateProduct = () => {
        const [name, setName] = useState("");
        const [price, setPrice] = useState("");
        const [description, setDescription] = useState("");
        const [image, setImage] = useState(null);
        const navigate=useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              // Upload image to Firebase Storage and get the URL (not implemented here)
              const imageUrl = "https://via.placeholder.com/150"; // Placeholder image URL
              await addDoc(collection(db, "products"), {
                name,
                price,
                description,
                imageUrl,
              });
              navigate("/products"); // Redirect to products page after successful creation
            } catch (error) {
              console.error("Error creating product:", error);
            }
          };

  return (
    <div>
        <h1 className='text-center mb-4 font-bold text-3xl '>Create Product</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder='Enter Product Title...'
                className='w-full border p-2 rounded-xl mb-4'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
              <input 
                type="number" 
                name="price" 
                id="price" 
                placeholder='Enter Product Price...'
                className='w-full border p-2 rounded-xl mb-4'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <textarea 
                name="description" 
                id="description" 
                placeholder='Enter Product Description...'
                className='w-full border p-2 rounded-xl mb-4'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          
            <input 
                type="file" 
                name="image" 
                id="image" 
                className='w-full border p-2 rounded-xl mb-4'
            />
            <button className='bg-orange-400 w-full px-4 py-2 mb-2'>Create Product</button>
        </form>
    </div>
  )
}

export default CreateProduct