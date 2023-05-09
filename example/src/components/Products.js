import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import API from '../services/API';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([])
  // const [editedProduct, setEditedProduct] = useState()
  
  useEffect(() => {
    API.getAllProducts().then(data => {
      console.log(data.produse)
      setProducts(data.produse)
    })
  }, []);


  // const editProduct = (product) => {
  //   setEditedProduct(product)
  //   console.log("butonul a fost apelat")
  // }

  // const addProduct = () => {
    
  // }



  return (
    <>
    <div>
      <h1>Product List</h1>
      <button><Link to={`/products/create`}>Add product</Link></button>
      <ul>
        {products.map(product => {
          return(
            <li key = {product.id}>
              <h3><Link to={`/products/${product.id}`}>{product.nume}</Link></h3>
              {/* <button
              onClick={ () => editProduct(product)}>Update</button>
              {editedProduct ? <ProductForm product = {editedProduct}/> : null} */}
            </li>
          )
        })}
      </ul>
    </div>
    </>
  );
}

export default Products;
