import { AxiosResponse } from 'axios'

import client from './client'

import { AuthResponse } from '../types/authApi.type'

export const authCode = async (code: string): Promise<AxiosResponse<AuthResponse>> => {
  const response = await client.post('/auth', { code })
  return response
}
