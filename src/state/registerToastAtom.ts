import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { ToastData } from '../types/toast.type'

const { persistAtom } = recoilPersist()

export const registerToastAtom = atom<ToastData>({
  key: 'registerToast',
  default: {
    isShow: false,
    toastMessage: '',
  },
  effects_UNSTABLE: [persistAtom],
})
