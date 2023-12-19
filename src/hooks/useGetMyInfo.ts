import { useQuery } from '@tanstack/react-query'

import { getMyInfo } from '../apis/getMyInfo'
import { MyInfoResponse } from '../types/getMyInfo.type'

export const useGetMyInfo = () => {
  return useQuery<MyInfoResponse>([getMyInfo], () => getMyInfo(), {
    staleTime: 60000 * 5,
  })
}
