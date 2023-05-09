import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import API from '../services/API';
import ProductUpdateForm from './ProductUpdateForm';

function ProductDetails() {
  const {id} = useParams()
  const [product, setProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState();

  useEffect( () => {
  API.getProductById(id)
  .then( data => setProduct(data.produse))
  .catch(error => console.log(error))
  }, [id] );

  const editProduct = (product) => {
    setEditedProduct(product)
    console.log("butonul a fost apelat")
  }
  
  const deleteProduct = () =>{
    API.deleteProduct(product.id)
    .then(resp => console.log(resp))
  }

  return (
    <>
    {product ? (
        <div>
          <h1>Product Details</h1>
          <p>Name: {product.nume}</p>
          <p>Description: {product.descriere}</p>
          <p>Price: {product.pret}</p>
          <button
          onClick={ () => editProduct(product)}>
            Update</button>
          {editedProduct ? <ProductUpdateForm product = {editedProduct}/> : null}
          <button
          onClick = { () => deleteProduct()}>Delete</button>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </>
  )
}

export default ProductDetails
