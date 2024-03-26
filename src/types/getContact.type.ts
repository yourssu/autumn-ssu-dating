import { MbtiType } from './explore.type'
import { AnimalServerType } from './register.type'

export type GenderType = 'FEMALE' | 'MALE'

export interface UsersResponse {
  animals: AnimalServerType
  contact: string
  gender: GenderType
  introduce: string
  mbti: MbtiType
  nickName: string
  weight: number
}

export type ContactsResponse = UsersResponse[]
