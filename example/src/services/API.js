import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const API ={
    getAllProducts(){
        return axios.get(`${BASE_URL}/products`, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    
    getProductById(id){
        return axios.get(`${BASE_URL}/products/${id}`, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => response.data)
        .catch(error => console.log(error))
    },

    updateProduct(id, productData) {
        return axios.put(`${BASE_URL}/products/${id}`, productData, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
          .then(response => response.data)
          .catch(error => console.log(error));
    },

    deleteProduct(id){
        return axios.delete(`${BASE_URL}/products/${id}`, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => response.data)
        .catch(error => console.log(error))
    },

    createProduct(productData){
        const token = localStorage.getItem('token')

        // if(!token){
        //    throw new Error('No authentication token found!');
        // }

        return axios.post(`${BASE_URL}/products/create`, productData, {
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `${token}`
            }
        })
        .then(response => response.data)
        .catch(error => console.log(error))
    },

    login(username, password){
        return axios.get(`${BASE_URL}/login`, {
            // headers: {
            //     'Content-Type' : 'application/json'
            // },
            auth: {
                username: username, 
                password: password
            }
        })
        .then(response => response.data)
        .catch(error => console.log(error))
    }
      
    
}

export default API;
