import axios from 'axios'

const baseURL = 'https://shopping-cart-back.herokuapp.com'
// const baseURL = 'http://localhost:5000'

export const getAllProducts = async () => {
    const response = await axios.get(baseURL+'/api/products')
    const data = response.data
    return data
}

export const postProduct = async (prodToAdd) => {
    const response = await axios.post(baseURL+'/api/products', prodToAdd)
    console.log(response);
}

export const getUser = async (id) => {
    const response = await axios.get(baseURL+`/api/users/${id}`)
    const data = response.data
    return data
}

export const sendProductToCart = async (data) => {
    const response = await axios.post(baseURL+`/api/users/add`, data)
    console.log(response);
    return response
}

export const removeProductFromCart = async (data) => {
    const response = await axios.post(baseURL+`/api/users/remove`, data)
    console.log(response);
    return response
}

export const checkout = async (data) => {
    const response = await axios.post(baseURL+'/api/users/checkout', data)
    console.log(response);
    return response
}

export const getAllTransactions = async () => {
    const response = await axios.get(baseURL+'/api/users/transactions')
    const data = response.data
    return data
}