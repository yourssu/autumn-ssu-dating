import { useEffect, useRef, useState } from 'react'

import PopupModal from './atoms/PopupModal'

import { useGetContact } from '../../hooks/useGetContact'
import usePopup from '../../hooks/usePopup'
import useRecoilToast from '../../hooks/useRecoilToast'
import { exploreToastAtom } from '../../state/exploreToastAtom'
import { GenderType } from '../../types/explore.type'
import { animalServerToClient } from '../../utils/animalUtil'
import InformationTypeButton from '../Explore/atoms/InformationTypeButton'
import Spacing from '../common/Spacing'
import ToastMessage from '../common/ToastMessage'

const Contact = () => {
  const { data } = useGetContact()
  const { isPopup, handleClosePopup, handlePopup, handlePopupSelected, currentPopupSelected } =
    usePopup()
  const [contact, setContact] = useState<string>('')
  const handleContact = (contact: string) => {
    setContact(contact)
  }
  const { recoilStateToast, hideRecoilStateToast } = useRecoilToast(exploreToastAtom)
  useEffect(() => {
    hideRecoilStateToast()
  }, [recoilStateToast, hideRecoilStateToast])

  const bgRef = useRef(null)
  return (
    <div className="flex h-[100dvh] w-screen flex-col items-center overflow-hidden">
      <Spacing direction="vertical" size={48} />
      <div className="flex w-screen justify-center">
        <div className="flex w-[342px] flex-wrap justify-start gap-5 self-center">
          {data?.map((item, index) => (
            <InformationTypeButton
              nickname={item.nickName}
              mbti={item.mbti}
              key={index}
              animal={animalServerToClient(item.animals)}
              gender={item.gender.toLowerCase() as GenderType}
              content={item.introduce}
              contact={item.contact}
              weight={item.weight}
              onButtonClick={handlePopupSelected}
              handleContact={handleContact}
            ></InformationTypeButton>
          ))}
        </div>
      </div>
      {isPopup ? (
        <div
          className="absolute top-0 flex h-[100dvh] w-screen flex-col items-center justify-center bg-[rgba(4,9,27,0.50)]"
          ref={bgRef}
          onClick={(e) => handlePopup(bgRef, e)}
        >
          <PopupModal
            nickname={currentPopupSelected.nickname}
            mbti={currentPopupSelected.mbti}
            gender={currentPopupSelected.gender}
            animal={currentPopupSelected.animal}
            content={currentPopupSelected.content}
            isPopup={isPopup}
            contact={contact}
            weight={currentPopupSelected.weight}
            onClickClose={handleClosePopup}
          ></PopupModal>
        </div>
      ) : null}
      {recoilStateToast.isShow && (
        <ToastMessage className="absolute bottom-[22px] flex items-center justify-center self-center">
          {recoilStateToast.toastMessage}
        </ToastMessage>
      )}
    </div>
  )
}

export default Contact
