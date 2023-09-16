import axios from 'axios'
import { AxiosResponse } from 'axios'

import { AuthResponse } from '../types/authApi.type'

export const authCode = async (code: string): Promise<AxiosResponse<AuthResponse>> => {
  const response = await axios.post('https://ssudate.xodns.site:443/auth', { code })
  return response
}
