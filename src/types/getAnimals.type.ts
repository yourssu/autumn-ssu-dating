import { MbtiType } from './explore.type'
import { AnimalServerType } from './register.type'

interface PageResponse {
  number: number
  size: number
  totalElements: number
  totalPages: number
}

export type GenderType = 'FEMALE' | 'MALE'

export interface UsersResponse {
  animals: AnimalServerType
  gender: GenderType
  introduce: string
  mbti: MbtiType
  nickName: string
}

export interface AnimalsResponse {
  page: PageResponse
  users: UsersResponse[]
}
