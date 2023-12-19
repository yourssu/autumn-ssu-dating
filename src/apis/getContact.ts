import client from './client'

import { ContactsResponse } from '../types/getContact.type'

export const getContact = async (): Promise<ContactsResponse> => {
  const response = await client.get(`/search/contact`)
  return response.data
}
