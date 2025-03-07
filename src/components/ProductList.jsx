// import React, { useState, useEffect } from 'react';
// // import Layout from '../layouts/Layout';
// import ProductCard from './ProductCard.astro';
// import SearchBar from './SearchBar.astro';
// import { fetchProducts, searchProducts } from '..//services/api';

// const ProductList = () => {
//   const [query, setQuery] = useState('');
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchInitialProducts = async () => {
//       const initialProducts = await fetchProducts();
//       setProducts(initialProducts);
//     };

//     fetchInitialProducts();
//   }, []);

//   useEffect(() => {
//     const fetchFilteredProducts = async () => {
//       const filteredProducts = query ? await searchProducts(query) : await fetchProducts();
//       setProducts(filteredProducts);
//     };

//     fetchFilteredProducts();
//   }, [query]);

//   return (
//     <Layout>
//       <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
//       <div id="product-list">
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </Layout>
//   );
// };

// export default ProductList;
