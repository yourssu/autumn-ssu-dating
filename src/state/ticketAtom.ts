import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const ticketAtom = atom<number>({
  key: 'ticket',
  default: 0,
  effects_UNSTABLE: [persistAtom],
})
