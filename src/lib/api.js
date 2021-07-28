import axios from 'axios'

const baseURL = 'http://localhost:5000'

export const getAllProducts = async () => {
    const response = await axios.get(baseURL+'/api/products')
    const data = response.data
    return data
}

export const postProduct = async (prodToAdd) => {
    const response = await axios.post('http://localhost:5000/api/products', prodToAdd)
    console.log(response);
}

export const getUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/users/${id}`)
    console.log(response);
    const data = response.data
    console.log(data)
    return data
}

export const sendProductToCart = async (data) => {
    const response = await axios.post(`http://localhost:5000/api/users/add`, data)
    console.log(response);
}