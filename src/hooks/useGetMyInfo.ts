import { useQuery } from '@tanstack/react-query'

import { getMyInfo } from '../apis/getMyInfo'
import { UserInfoResponse } from '../types/user.type'

export const useGetMyInfo = () => {
  return useQuery<UserInfoResponse>([getMyInfo], () => getMyInfo(), {
    staleTime: 0,
  })
}
