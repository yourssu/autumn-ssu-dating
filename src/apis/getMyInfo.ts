import client from './client'

import { MyInfoResponse } from '../types/getMyInfo.type'

export const getMyInfo = async (): Promise<MyInfoResponse> => {
  const response = await client.get(`/users/my`)
  return response.data
}
