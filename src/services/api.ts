// src/services/api.ts
export async function fetchProducts(limit: number, skip: number) {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  const data = await response.json();
  return data.products;
}

export async function fetchProductById(id: number) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}

export async function searchProducts(query: string, limit: number, skip: number) {
  console.log('Search query:', query); // Log the query before making the fetch call
  const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`);
  const data = await response.json();
  console.log('API response:', data);
  return data.products;
}
