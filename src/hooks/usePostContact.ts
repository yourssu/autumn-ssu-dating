import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRecoilState } from 'recoil'

import useRecoilToast from './useRecoilToast'

import { postContact } from '../apis/postContact'
import { queryClient } from '../main'
import { exploreToastAtom } from '../state/exploreToastAtom'
import { ticketAtom } from '../state/ticketAtom'
import { ServerError } from '../types/error.type'

export const usePostContact = () => {
  const [ticketCount, setTicketCount] = useRecoilState(ticketAtom)
  const { setRecoilStateToast } = useRecoilToast(exploreToastAtom)

  return useMutation(postContact, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getAnimals'])
      queryClient.invalidateQueries(['getContact'])
      const currentTicketCount = ticketCount - 1
      setTicketCount(currentTicketCount)
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
            toastMessage: '엇, 뭔가 잘못 된 것 같아요! 다시 시도해주세요!',
          })
          break

        default:
          setRecoilStateToast({
            isShow: true,
            toastMessage: '엇, 뭔가 잘못 된 것 같아요! 다시 시도해주세요!',
          })
          break
      }
    },
  })
}
