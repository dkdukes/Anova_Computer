import React from 'react'
import { useProducts } from '@/context/ProductsContext';
import StarRating from '@/components/StarRating';
import { useNavigate } from 'react-router-dom';

function Products() {
  const { products } = useProducts();
  const navigate = useNavigate();
  console.log(products);
  return (
    <div>
        <h1 className='text-center mb-4 font-bold text-3xl '>Products</h1>
        <p className='text-center text-gray-500'>This is the products page. You can view all products here.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
          {products?.map(product => (
            <div key={product.id} className='border p-4 rounded-lg shadow-md'>
              <img src={product.imageUrl} alt={product.title} className='w-full h-48 object-cover mb-4 rounded' />
              <h2 className='text-xl font-semibold mb-2'>{product.title}</h2>
              <StarRating rating={product.rating} />
              <p className='text-lg font-bold text-blue-600'>${product.price}</p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => navigate(`/products/${product.id}`)}
                >
                Learn More
              </button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Products

// import React from 'react'
// import { useState, useEffect } from 'react'
// import { db } from '@/firebase';
// import { collection, getDocs } from "firebase/firestore";
// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, "products");
//     </div>
//   )
// }

// export default Products


// import React from 'react'
// import { useState, useEffect } from 'react'
// import { db } from '@/firebase';
// import { collection, getDocs } from "firebase/firestore";
// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, "products");
//       const productsSnapshot = await getDocs(productsCollection);
//       const productsList = productsSnapshot.docs.map(doc => doc.data());
//       setProducts(productsList);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//         <h1 className='text-center mb-4 font-bold text-3xl '>Products</h1>
//         <p className='text-center text-gray-500'>This is the products page. You can view all products here.</p>
//         <div>
//           {products.map(product => (
//             <div key={product.id}>
//               <img src={product.image} alt={product.name} />
//               <h2>{product.name}</h2>
//               <p>{product.description}</p>
//               <p>${product.price}</p>
//             </div>
//           ))}
//         </div>
//     </div>
//   )
// }

// export default Products