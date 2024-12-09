import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortPrice, setSortPrice] = useState('asc');

  //filter data in input
  const [filter, setFilter] = useState<string>('');

  //etract categories
  const [categories, setCategories] = useState<string[]>([]);
  const [selectCategory, setSelectCategory] = useState<string>('all');

  useEffect(() => {
    fetch('https://fakestoreapiserver.reactbd.com/amazonproducts')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
        extractCategories(data);
        //console.log(categories);
      })
      .catch((error) => {
        console.error('Error fetching API', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  //extract the categories from products data
  const extractCategories = (products: Product[]) => {
    const uniqueCategories: Set<string> = new Set(
      products.map((product: Product) => product.category)
    );
    setCategories(['all', ...Array.from(uniqueCategories)]);
  };

  //need filter data base in input
  const filteredProducts = products.filter((product: Product) => {
    return (
      product.title.toLowerCase().includes(filter.toLowerCase()) &&
      (selectCategory === 'all' || product.category === selectCategory)
    );
  });

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  //sort by price ascending and descending
  const handleSort = () => {
    if (sortPrice === 'asc') {
      setSortPrice('desc');
      setProducts([...products].sort((a, b) => b.price - a.price));
    } else {
      setSortPrice('asc');
      setProducts([...products].sort((a, b) => a.price - b.price));
    }
  };
  //clean input
  const handleCleanInput = () => {
    setFilter('');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Filter "
      />
      <button onClick={handleCleanInput}>Clean Search</button>
      <button onClick={handleSort}>
        Sort by price {sortPrice === 'asc' ? 'des' : 'asc'}
      </button>
      <select
        value={selectCategory}
        onChange={(e) => setSelectCategory(e.target.value)}
      >
        {categories.map((category: string) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <ul>
        {filteredProducts.map((products: Product) => (
          <li key={products.id}>
            <h3>{products.title}</h3>
            <p>{products.price}</p>
            <p>
              <b>{products.category}</b>
            </p>
            <p>{products.description}</p>
            <p>{products.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
