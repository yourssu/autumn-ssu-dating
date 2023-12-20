import { GenderType, MbtiType } from './explore.type'
import { AnimalServerType } from './register.type'

export interface UserInfoResponse {
  animals: AnimalServerType
  code: string
  codeInputChance: number
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
