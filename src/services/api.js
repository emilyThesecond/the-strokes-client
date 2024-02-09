import axios from 'axios'
export const BASE_URL =  'https://the-strokes-server-392276ffd72f.herokuapp.com/'
const Client = axios.create({baseURL: BASE_URL})

export default Client