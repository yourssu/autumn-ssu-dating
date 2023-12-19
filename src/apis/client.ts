import axios, { AxiosRequestConfig } from 'axios'
import { jwtDecode } from 'jwt-decode'

import { refresh } from './refresh'

import { clearToken, getRefreshToken, setToken } from '../utils/tokenUtils'

interface AxiosCustomRequestConfig extends AxiosRequestConfig {
  retryCount: number
}

const MAX_RETRY_COUNT = 3
const client = axios.create({
  baseURL: 'https://ssudate-server.yourssu.com/',
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
          clearToken()
          window.location.assign('/')
        }
      } catch {
        clearToken()
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
