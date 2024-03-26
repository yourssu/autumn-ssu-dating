import { HttpStatusCode } from 'axios'

export interface ServerError {
  time: string
  status: HttpStatusCode
  message: string
  requestURI: string
}
