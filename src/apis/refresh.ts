import client from './client'

interface RefreshResponse {
  accessToken: string
  refreshToken: string
}

export const refresh = async (refreshToken: string): Promise<RefreshResponse> => {
  const response = await client.post('/refresh', { refreshToken })
  return response.data
}
