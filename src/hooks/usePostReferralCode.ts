import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'

import useRecoilToast from './useRecoilToast'

import { postReferralCode } from '../apis/postReferralCode'
import { queryClient } from '../main'
import { exploreToastAtom } from '../state/exploreToastAtom'
import { ticketAtom } from '../state/ticketAtom'
import { ServerError } from '../types/error.type'

export const usePostReferralCode = () => {
  const { setRecoilStateToast } = useRecoilToast(exploreToastAtom)
  const setTicketCount = useSetRecoilState(ticketAtom)

  return useMutation(postReferralCode, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['getMyInfo'])
      setTicketCount(data.data.ticket)
      setRecoilStateToast({
        isShow: true,
        toastMessage: '추천인 코드 인증 완료! 이용권 한 장이 충전됐어요.',
      })
    },
    onError: (error) => {
      const authError = error as AxiosError<ServerError>

      switch (authError.response?.status) {
        case 400:
          setRecoilStateToast({
            isShow: true,
            toastMessage: authError.response.data.message,
          })
          break

        case 404:
          setRecoilStateToast({
            isShow: true,
            toastMessage: '존재하지 않는 추천인 코드예요.',
          })
          break

        default:
          setRecoilStateToast({
            isShow: true,
            toastMessage: '추천인 코드를 다시 한번 확인해주세요.',
          })
          break
      }
    },
  })
}
