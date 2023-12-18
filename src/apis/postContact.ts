import client from './client'

import { ContactResponse } from '../types/postContact.type'

export const postContact = async ({ nickName }: { nickName: string }): Promise<ContactResponse> => {
  const response = await client.post('/contact', {
    nickName,
  })
  return response.data
}
