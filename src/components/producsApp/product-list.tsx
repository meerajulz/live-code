import React, { useState } from 'react';
import ProductsItem from './product-data.json';

interface ProductItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<ProductItem[]>(ProductsItem);
  const [title, setTitle] = useState<string>('');
  //Implement a search input that filters products by their titles.
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(title.toLowerCase())
  );

  //   Include a delete button for each product.
  const handleDelete = (id: number) => () => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Add the ability to edit product details directly from the list.
  const handleEdit = (id: number) => () => {};

  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <input
          type="text"
          placeholder="search..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => setTitle('')}>Clear</button>
      </section>
      {/* Design the product list to alternate row colors for better readability, with an additional highlight color for selected products. */}

      <section>
        {filteredProducts.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr
                  key={product.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? 'lightgray' : 'white',
                    color: product.title === 'Product 1' ? 'red' : 'black',
                  }}
                >
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={handleDelete(product.id)}>Delete</button>
                  </td>
                  {/* Add the ability to edit product details directly from the list. */}
                  <td>
                    <button onClick={handleEdit(product.id)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {filteredProducts.length === 0 && <p>No products found</p>}
      </section>
    </div>
  );
};

export default ProductList;
