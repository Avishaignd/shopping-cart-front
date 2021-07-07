import axios from 'axios'

const baseURL = 'https://fakestoreapi.com'

export const getAllProducts = async () => {
    const response = await axios.get(baseURL+'/products')
    const data = response.data
    // console.log(data);
    return data
}