import client from './client'

import { RegisterRequest, RegisterResponse } from '../types/registerApi.type'

export const registerProfile = async ({
  gender,
  profile,
}: {
  gender: string
  profile: RegisterRequest
}): Promise<RegisterResponse> => {
  const response = await client.post(`/register/${gender === '여자' ? 'female' : 'male'}`, profile)
  return response.data
}
