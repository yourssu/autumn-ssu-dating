import { AxiosResponse } from 'axios'

import client from './client'

import { UpdateRequest } from '../types/register.type'
import { RegisterRequest, RegisterResponse, UpdateResponse } from '../types/registerApi.type'

export const registerProfile = async ({
  gender,
  profile,
}: {
  gender: string
  profile: RegisterRequest
}): Promise<AxiosResponse<RegisterResponse>> => {
  const response = await client.post(`/register/${gender === '여자' ? 'female' : 'male'}`, profile)
  return response
}

export const updateProfile = async (
  profile: UpdateRequest
): Promise<AxiosResponse<UpdateResponse>> => {
  const response = await client.patch('/users/my', profile)
  return response
}
