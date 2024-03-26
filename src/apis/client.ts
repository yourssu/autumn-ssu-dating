import axios, { AxiosRequestConfig } from 'axios'
import { jwtDecode } from 'jwt-decode'

import { refresh } from './refresh'

import { getAccessToken, getRefreshToken, setToken } from '../utils/tokenUtils'

interface AxiosCustomRequestConfig extends AxiosRequestConfig {
  retryCount: number
}

const MAX_RETRY_COUNT = 3
const client = axios.create({
  baseURL: 'https://ssudate-server.yourssu.com/',
})

client.interceptors.request.use((config) => {
  if (config.url === '/refresh') {
    const refreshToken = getRefreshToken()
    config.headers.Authorization = `Bearer ${refreshToken}`
  } else {
    const accessToken = getAccessToken()
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

client.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originRequest = error.config as AxiosCustomRequestConfig
    originRequest.retryCount = originRequest.retryCount ?? 0

    const refreshToken = getRefreshToken()

    if (error.response?.status === 401 && originRequest.url === '/refresh') {
      return Promise.reject(error)
    }

    if (error.response?.status === 401 && originRequest.retryCount < MAX_RETRY_COUNT) {
      try {
        if (verifyRefreshToken(refreshToken)) {
          const response = await refresh(refreshToken!)
          const newAccessToken = response.accessToken
          const newRefreshToken = response.refreshToken

          setToken(newAccessToken, newRefreshToken)
          originRequest.retryCount += 1

          return client(originRequest)
        } else {
          localStorage.clear()
          window.location.assign('/')
        }
      } catch {
        localStorage.clear()
        window.location.assign('/')
      }
    }
    return Promise.reject(error)
  }
)

const verifyRefreshToken = (token: string | null) => {
  if (!token) return false

  const currentTime = new Date().getTime()
  const expireTime = jwtDecode(token).exp

  if (expireTime && expireTime * 1000 < currentTime) return false
  return true
}

export default client
