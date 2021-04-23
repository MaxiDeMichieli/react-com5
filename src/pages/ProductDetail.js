import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      Product {id}
    </div>
  )
}

export default ProductDetail;
