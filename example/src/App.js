import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import Todo from './components/Todo';
import ProductDetails from './components/ProductDetails';
import ProductAddForm from './components/ProductAddForm';
import Login from './components/Login';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Todo/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/products/create" element={<ProductAddForm/>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
  
}
export default App;
