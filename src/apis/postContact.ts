import client from './client'

import { ContactResponse } from '../types/postContact.type'

export const postContact = async ({
  code,
  nickName,
}: {
  code: string
  nickName: string
}): Promise<ContactResponse> => {
  const response = await client.post('/contact', {
    code,
    nickName,
  })
  return response.data
}
