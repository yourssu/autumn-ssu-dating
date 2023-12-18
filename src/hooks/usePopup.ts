import { MutableRefObject, useState } from 'react'

import { CurrentPopupSelectedType } from '../types/explore.type'

const usePopup = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false)
  const [currentPopupSelected, setCurrentPopupSelected] = useState<CurrentPopupSelectedType>({
    nickname: 'ppussung',
    mbti: 'ISTJ',
    gender: 'female',
    animal: '뿌슝이',
    content: 'ppussung',
    weight: 0,
  })

  const handlePopup = (
    bgRef: MutableRefObject<HTMLDivElement | null>,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (bgRef.current && e) {
      if (bgRef.current == (e.target as Node)) {
        setIsPopup(false)
      }
    }
  }

  const handlePopupSelected = (e: CurrentPopupSelectedType) => {
    setCurrentPopupSelected(e)
    setIsPopup(true)
  }

  const handleClosePopup = () => {
    setIsPopup(false)
  }

  return {
    isPopup,
    setIsPopup,
    handlePopup,
    handleClosePopup,
    handlePopupSelected,
    currentPopupSelected,
    setCurrentPopupSelected,
  }
}

export default usePopup
