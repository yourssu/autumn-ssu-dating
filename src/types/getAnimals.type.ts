import { MbtiType } from './explore.type'
import { AnimalServerType } from './register.type'

export type GenderType = 'FEMALE' | 'MALE'

export interface UsersResponse {
  animals: AnimalServerType
  gender: GenderType
  introduce: string
  mbti: MbtiType
  nickName: string
}

export type AnimalsResponse = UsersResponse[]
