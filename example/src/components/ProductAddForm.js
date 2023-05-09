import React, { useState } from 'react'
import API from '../services/API'
import { Link } from 'react-router-dom'

function ProductAddForm() {
    const [productData, setProductData]  = useState({
        nume: "",
        categorie: "",
        pret: "", 
        descriere: "", 
        imagine: ""
    })

    const [successMessage, setSuccessMessage] = useState("")

    const handleChange = (event) => {

        const { name, value } = event.target
        setProductData((prevData) => ({
          ...prevData,
          [name]: value,
        }))

      }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(productData)

        API.createProduct(productData)
        .then(data => console.log(data))
        .catch(error => console.log(error))


        setSuccessMessage("Produsul a fost adaugat cu succes!")
    }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nume" type="text" className="form-label">Nume</label>
      <input type="text" className="form-control" 
      name="nume"
      value={productData.nume} 
      onChange={handleChange}
      placeholder="Nume produs"/>
      <label htmlFor="categorie" type="text" className="form-label">Categorie</label>
      <input type="text" className="form-control"
      name="categorie"
       value={productData.categorie}
       onChange={handleChange}
        placeholder="Categorie"/>
      <label htmlFor="pret" type="text" className="form-label">Pret</label>
      <input type="text" className="form-control" 
      name="pret"
      value={productData.pret}
      onChange={handleChange}
       placeholder="Pret"/>
      <label htmlFor="descriere" type="text" className="form-label">Descriere</label>
      <input type="text" className="form-control"
      name="descriere"
       value={productData.descriere}
      onChange={handleChange}
       placeholder="Descriere"/>
      <label htmlFor="imagine" type="text" className="form-label">Imagine</label>
      <input type="text" className="form-control"
      name="imagine"
       value={productData.imagine}
      onChange={handleChange}
       placeholder="imagine"/>
       <button type="submit" className="btn btn-primary mt-2">
        Adaugă produs
      </button>
      {successMessage ? (
        <div>
            <p className="alert alert-succes" role="alert">{successMessage}</p>
            <Link to={'/products'}>Inapoi la pagina de produse</Link>
        </div>
      )
       : null}
    </form>
  )
}

export default ProductAddForm
