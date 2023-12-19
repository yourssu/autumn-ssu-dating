import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const signedAtom = atom<boolean>({
  key: 'signed',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
