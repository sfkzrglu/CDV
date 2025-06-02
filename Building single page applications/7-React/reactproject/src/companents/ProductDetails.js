import { Link, useParams } from 'react-router-dom';

export default function ProductDetails({ products }) {
  const params = useParams();
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return null
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <label>Category: </label>
      <div>{product.category}</div>
      <br />
      <label>brand: </label>
      <div>{product.brand}</div>
      <br />
      <label>description: </label>
      <div>{product.description}</div>
      <br />
      <label>price: </label>
      <div>{product.price}</div>
      <br />
      <img src={product.thumbnail} alt=''/>
      <Link to={`/`}>Back to products</Link>
    </div>
  );
}
