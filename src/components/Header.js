import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-3" style={{backgroundColor: '#ccc'}}>
      <Link className="mx-2" to="/">Home</Link>
      <Link className="mx-2" to="/products">Products</Link>
    </header>
  )
}

export default Header;
