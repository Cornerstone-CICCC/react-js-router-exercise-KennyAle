import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setProduct(null);
    const getProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      console.log(data);
    };
    getProduct();
  }, [id]);
  return (
    <div>
      <h1>Product Detail</h1>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
