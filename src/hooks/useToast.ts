import { useState } from 'react'

const useToast = () => {
  const [stateToast, setStateToast] = useState<string>('')

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
    setStateToast,
    hideStateToast,
  }
}

export default useToast
