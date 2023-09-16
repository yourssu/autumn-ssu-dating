import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const ticketListAtom = atom<string[]>({
  key: 'ticketList',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
