import axios from 'axios'

const client = axios.create({
  baseURL: 'http://ssudate-server.yourssu.com/',
})

export default client
