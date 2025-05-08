import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      setProducts(data.products);
      console.log(data.products);
    };
    getProducts();
  }, []);
  return (
    <div>
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <Link to={`/products/${product.id}`}>
              <button>See Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
