import axios from 'axios'
import { AxiosResponse } from 'axios'

import { RegisterRequest, RegisterResponse } from '../types/registerApi.type'

export const registerProfile = async ({
  gender,
  profile,
}: {
  gender: string
  profile: RegisterRequest
}): Promise<AxiosResponse<RegisterResponse>> => {
  const response = await axios.post(
    `https://ssudate.xodns.site/register/${gender === '여자' ? 'female' : 'male'}`,
    profile
  )
  return response
}
