import client from './client'

import { UpdateRequest } from '../types/register.type'
import { RegisterRequest, RegisterResponse, UpdateResponse } from '../types/registerApi.type'

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

export const updateProfile = async (profile: UpdateRequest): Promise<UpdateResponse> => {
  const response = await client.patch('/users/my', profile)
  return response.data
}
