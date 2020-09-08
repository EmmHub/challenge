import axios from 'axios'

const ClienteAxios = axios.create({
    baseURL: 'http://localhost:5000/api',
     headers: {
    "Content-type": "application/json"
  }
    
})

export default ClienteAxios

