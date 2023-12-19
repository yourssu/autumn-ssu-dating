import { MbtiType } from './explore.type'
import { GenderType } from './getAnimals.type'
import { AnimalServerType } from './register.type'

export interface MyInfoResponse {
  animals: AnimalServerType
  code: string
  contact: string
  createdAt: string
  gender: GenderType
  id: number
  introduce: string
  mbti: MbtiType
  nickName: string
  ticket: number
  weight: number
}
