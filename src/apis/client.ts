import axios from 'axios'

const client = axios.create({
  baseURL: 'https://ssudate-server.yourssu.com/',
})

export default client
