import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    { id: 1, name: 'mouse' },
    { id: 2, name: 'monitor' },
    { id: 3, name: 'teclado' },
    { id: 4, name: 'mousepad' },
    { id: 5, name: 'auriculares' },
    { id: 6, name: 'hdd' },
    { id: 7, name: 'auriculares' },
    { id: 8, name: 'procesador' },
  ];

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/detail/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
