import { useState } from 'react'

const useToast = () => {
  const [stateToast, setStateToast] = useState<string>('')

  function showStateToast(toastMessage: string) {
    setStateToast(toastMessage)
    hideStateToast()
  }

  function hideStateToast() {
    const timer = setTimeout(() => {
      setStateToast('')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }

  return {
    stateToast,
    showStateToast,
  }
}

export default useToast
