import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { RegisterToastData } from '../types/register.type'

const { persistAtom } = recoilPersist()

export const registerToastAtom = atom<RegisterToastData>({
  key: 'registerToast',
  default: {
    isShow: false,
    toastMessage: '',
  },
  effects_UNSTABLE: [persistAtom],
})
