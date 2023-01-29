import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api('/burgers')
export const getPizzas = () => api('/pizzas')
export const getDrinks = () => api('/drinks')
export const getIceCreams = () => api('/ice-creams')

export default api
