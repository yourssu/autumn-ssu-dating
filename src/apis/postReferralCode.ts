import { AxiosResponse } from 'axios'

import client from './client'

import { UserInfoResponse } from '../types/user.type'

export const postReferralCode = async (code: string): Promise<AxiosResponse<UserInfoResponse>> => {
  const response = await client.post('/register/code', { code })
  return response
}
