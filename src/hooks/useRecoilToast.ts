import { RecoilState, useRecoilState } from 'recoil'

import { ToastData } from '../types/toast.type'

const useRecoilToast = (stateName: RecoilState<ToastData>) => {
  const [recoilStateToast, setRecoilStateToast] = useRecoilState(stateName)

  function hideRecoilStateToast() {
    if (recoilStateToast.isShow) {
      const timer = setTimeout(() => {
        setRecoilStateToast({ isShow: false, toastMessage: '' })
      }, 2000) // 애니메이션에 걸리는 시간과 동일하게 설정

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
