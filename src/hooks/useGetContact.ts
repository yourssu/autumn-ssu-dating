import { useQuery } from '@tanstack/react-query'

import { getContact } from '../apis/getContact'
import { ContactsResponse } from '../types/getContact.type'

export const useGetContact = () => {
  return useQuery<ContactsResponse>(['getContact'], () => getContact(), {
    staleTime: 60000 * 5,
  })
}
