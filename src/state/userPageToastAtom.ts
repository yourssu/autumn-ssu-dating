import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { ToastData } from '../types/toast.type'

const { persistAtom } = recoilPersist()

export const userPageToastAtom = atom<ToastData>({
  key: 'userPageToast',
  default: {
    isShow: false,
    toastMessage: '',
  },
  effects_UNSTABLE: [persistAtom],
})
