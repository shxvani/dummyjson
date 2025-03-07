// src/services/api.ts
export async function fetchProducts() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data.products;
}

export async function fetchProductById(id: number) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}

export async function searchProducts(query: string) {
  console.log('Search query:', query); // Log the query before making the fetch call
  const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const data = await response.json();
  console.log('API response:', data);
  return data.products;
}
