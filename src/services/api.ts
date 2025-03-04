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
  const requestOptions = {
    method: "GET",
    redirect: "follow" as RequestRedirect
  };

  console.log(`Searching for products with query: ${query}`);

  try {
    const url = `https://dummyjson.com/products/search?q=${query}`;
    console.log(`Fetching URL: ${url}`);
    const response = await fetch(url, requestOptions);
    console.log(`Response status: ${response.status}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Search response data:', data);
    return data.products;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
}
