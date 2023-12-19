import client from './client'

import { UserInfoResponse } from '../types/user.type'

export const getMyInfo = async (): Promise<UserInfoResponse> => {
  const response = await client.get(`/users/my`)
  return response.data
}
