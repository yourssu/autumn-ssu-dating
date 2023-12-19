import { FormData } from './register.type'

export interface RegisterRequest extends Omit<FormData, 'gender'> {}

export interface RegisterResponse extends FormData {
  accessToken: string
  refreshToken: string
  ticket: number
  id: number
}
