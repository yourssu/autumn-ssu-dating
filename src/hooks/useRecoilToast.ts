import { RecoilState, useRecoilState } from 'recoil'

import { ToastData } from '../types/toast.type'

const useRecoilToast = (stateName: RecoilState<ToastData>) => {
  const [recoilStateToast, setRecoilStateToast] = useRecoilState(stateName)

  function hideRecoilStateToast() {
    if (recoilStateToast.isShow) {
      const timer = setTimeout(() => {
        setRecoilStateToast({ isShow: false, toastMessage: '' })
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }
  }

  return {
    recoilStateToast,
    setRecoilStateToast,
    hideRecoilStateToast,
  }
}

export default useRecoilToast
