import { AnimalServerType } from './register.type'

export interface UserInfoResponse {
  animals: AnimalServerType
  code: string
  contact: string
  createdAt: string
  gender: string
  id: number
  introduce: string
  mbti: string
  nickName: string
  ticket: number
  weight: number
}
