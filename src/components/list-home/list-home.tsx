import { useState, useEffect, Key } from 'react';

interface Product {
  images: string[];
  id: number;
  title: string;
  description: string;
  category: string;
}

const ListHome = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const url = 'https://dummyjson.com/products';

  //   fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      //  convert response to json
      const data = await response.json();
      setProducts(data.products);
      setDisplayProducts(data.products);

      //extract categories
      const categories = data.products.map(
        (product: Product) => product.category
      );
      const uniqueCategories: string[] = Array.from(new Set(categories));
      console.log('uniqueCategories:', uniqueCategories);
      setCategory(uniqueCategories);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  //   Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  //FILTER INPUT
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    if (searchValue.trim() === '') {
      setDisplayProducts(products);
    } else {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setDisplayProducts(filteredProducts);
    }
  };

  //handlec select for category
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  // filter by category
  useEffect(() => {
    const filteredProducts = () => {
      const filteredProducts = products.filter(
        (product) =>
          product.category === selectedCategory || selectedCategory === ''
      );
      setDisplayProducts(filteredProducts);
    };

    filteredProducts();
  }, [selectedCategory, products]);

  return (
    <div>
      <h1>Products</h1>
      <section>
        <input type="text" value={search} onChange={handleInput} />
      </section>
      <section>
        <select
          name="category"
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {category.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </section>
      <ul>
        {displayProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {product.images.map((image, index) => (
              <img width="200px" key={index} src={image} alt={product.title} />
            ))}
            <p>{product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListHome;
