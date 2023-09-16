import axios from 'axios'

const client = axios.create({
  baseURL: 'https://ssudate.xodns.site:443',
})

export default client
