import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { ToastData } from '../types/toast.type'

const { persistAtom } = recoilPersist()

export const exploreToastAtom = atom<ToastData>({
  key: 'exploreToast',
  default: {
    isShow: false,
    toastMessage: '',
  },
  effects_UNSTABLE: [persistAtom],
})
