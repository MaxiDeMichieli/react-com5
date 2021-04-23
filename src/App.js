import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container py-5">
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/products/detail/:id" exact >
            <ProductDetail />
          </Route>
          <Route path="/products" exact >
            <Products />
          </Route>
          <Route path="/*" exact>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
