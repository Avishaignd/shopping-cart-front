import axios from 'axios'

const baseURL = 'https://fakestoreapi.com'

export const getAllProducts = async () => {
    const response = await axios.get(baseURL+'/products')
    const data = response.data
    // console.log(data);
    return data
}

export const getP = async () => {
    const response = await axios.get('http://localhost:5000/api/products')
    console.log(response)
}

export const getUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`)
    console.log(response);
}