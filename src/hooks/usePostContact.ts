import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRecoilState } from 'recoil'

import useRecoilToast from './useRecoilToast'

import { postContact } from '../apis/postContact'
import { queryClient } from '../main'
import { exploreToastAtom } from '../state/exploreToastAtom'
import { ticketListAtom } from '../state/ticketListAtom'

export const usePostContact = () => {
  const [ticketList, setTicketList] = useRecoilState(ticketListAtom)
  const { setRecoilStateToast } = useRecoilToast(exploreToastAtom)

  return useMutation(postContact, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getAnimals'])
      const currentTicketList = ticketList.slice(1)
      setTicketList(currentTicketList)
    },
    onError: (error) => {
      const authError = error as AxiosError

      switch (authError.response?.status) {
        case 400:
          setRecoilStateToast({
            isShow: true,
            toastMessage: '이용권이 필요한 기능입니다. 이용권 구매 후 사용해주세요!',
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
