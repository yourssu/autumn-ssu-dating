import React, { useEffect, useState } from 'react'

import { useRecoilValue } from 'recoil'

import ContactButton from './ContactButton'

import XButton from '../../../assets/Xbutton.svg'
import EllipseSeperator from '../../../assets/ellipseSeperator.svg'
import { ANIMAL_OPTIONS_FEMALE, ANIMAL_OPTIONS_MALE } from '../../../constant'
import { usePostContact } from '../../../hooks/usePostContact'
import useRecoilToast from '../../../hooks/useRecoilToast'
import { exploreToastAtom } from '../../../state/exploreToastAtom'
import { ticketAtom } from '../../../state/ticketAtom'
import { AnimalType, ContactOpenType, GenderType, MbtiType } from '../../../types/explore.type'
import Checkbox from '../../common/Checkbox'
import Spacing from '../../common/Spacing'
import TypeButton from '../../common/TypeButton'

interface PopupModalProps {
  nickname: string
  mbti: MbtiType
  animal: AnimalType
  content: string
  gender: GenderType
  isPopup: boolean
  onClickClose: () => void
}

const PopupModal = ({ nickname, mbti, animal, content, gender, onClickClose }: PopupModalProps) => {
  const [contactOpen, setContactOpen] = useState<ContactOpenType>('closed')
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [contact, setContact] = useState<string>()
  const ticketCount = useRecoilValue(ticketAtom)
  const { setRecoilStateToast } = useRecoilToast(exploreToastAtom)
  const { mutate: postContact, data, isSuccess } = usePostContact()

  useEffect(() => {
    if (isSuccess) {
      setContact(data.contact)
      setContactOpen('opened')
    }
  }, [isSuccess, data?.contact])

  return (
    <TypeButton
      className="animate-jump-in animate-duration-[300ms] animate-once animate-ease-in-out"
      mode="white"
      width={266}
      height={460}
    >
      <div className="flex h-full w-full flex-col items-center justify-start">
        <Spacing direction="vertical" size={11} />
        <div className="flex">
          <Spacing direction="horizontal" size={230} />
          <img
            className="h-[18px] w-[18px]"
            src={XButton as string}
            title="X 버튼"
            alt="X 버튼"
            onClick={() => onClickClose()}
          />
          <Spacing direction="horizontal" size={12} />
        </div>
        <img
          className="h-[106px] w-[106px]"
          src={
            gender === 'female'
              ? ANIMAL_OPTIONS_FEMALE.find((val) => val.label === animal)?.src
              : ANIMAL_OPTIONS_MALE.find((val) => val.label === animal)?.src
          }
          title={
            gender === 'female'
              ? ANIMAL_OPTIONS_FEMALE.find((val) => val.label === animal)?.label
              : ANIMAL_OPTIONS_MALE.find((val) => val.label === animal)?.label
          }
          alt={
            gender === 'female'
              ? ANIMAL_OPTIONS_FEMALE.find((val) => val.label === animal)?.label
              : ANIMAL_OPTIONS_MALE.find((val) => val.label === animal)?.label
          }
        />
        <span className="text-button">{nickname}</span>
        <Spacing direction="vertical" size={4} />
        <div className="flex text-body2">
          <span>{mbti}</span>
          <Spacing direction="horizontal" size={4} />
          <img
            src={EllipseSeperator as string}
            alt="공간 분리용 동그라미"
            title="공간 분리용 동그라미"
          />
          <Spacing direction="horizontal" size={4} />
          <span>{animal}</span>
        </div>
        <Spacing direction="vertical" size={16} />
        <div className="h-[114px] w-[226px] break-words text-body2 text-gray">{content}</div>
        {contactOpen === 'closed' ? (
          <Spacing direction="vertical" size={29} />
        ) : (
          <Spacing direction="vertical" size={8} />
        )}
        <div className="flex w-[226px] justify-center">
          {contactOpen === 'closed' ? (
            <>
              <Spacing direction="vertical" size={29} />
              <Checkbox
                checkCase="연락처 확인"
                isChecked={isChecked}
                onImgClick={() => {
                  if (ticketCount > 0) {
                    setIsChecked((prev) => !prev)
                  } else {
                    setRecoilStateToast({
                      isShow: true,
                      toastMessage: '이용권이 필요한 기능입니다. 이용권 구매 후 사용해주세요!',
                    })
                  }
                }}
                onLabelClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (ticketCount > 0) {
                    setIsChecked(e.target.checked)
                  } else {
                    setRecoilStateToast({
                      isShow: true,
                      toastMessage: '이용권이 필요한 기능입니다. 이용권 구매 후 사용해주세요!',
                    })
                  }
                }}
              ></Checkbox>
            </>
          ) : (
            <>
              <div className="h-[53px] w-[211px] animate-flip-up bg-[url('/bubble.png')] bg-cover animate-normal animate-duration-[500ms] animate-once animate-ease-linear"></div>
            </>
          )}
        </div>
        <Spacing direction="vertical" size={4} />
        <ContactButton
          contactOpen={contactOpen}
          isChecked={isChecked}
          contact={data?.contact}
          onClick={() => {
            if (!contact) {
              postContact({ nickName: nickname })
            }
          }}
        />
      </div>
    </TypeButton>
  )
}

// PopupModal.displayName = 'PopupModal'
export default PopupModal
