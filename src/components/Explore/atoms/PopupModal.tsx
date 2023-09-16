import React, { useEffect, useState } from 'react'

import ContactButton from './ContactButton'

import XButton from '../../../assets/Xbutton.svg'
import EllipseSeperator from '../../../assets/ellipseSeperator.svg'
import { ANIMAL_OPTIONS_FEMALE, ANIMAL_OPTIONS_MALE } from '../../../constant'
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

  useEffect(() => {
    console.log(contactOpen)
  }, [contactOpen])

  return (
    <TypeButton
      className="animate-jump-in animate-once animate-duration-[300ms] animate-ease-in-out"
      mode="white"
      width={266}
      height={460}
    >
      <div className="h-full w-full flex flex-col justify-start items-center">
        <Spacing direction="vertical" size={11} />
        <div className="flex">
          <Spacing direction="horizontal" size={230} />
          <img
            className="w-[18px] h-[18px]"
            src={XButton}
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
          <img src={EllipseSeperator} alt="공간 분리용 동그라미" title="공간 분리용 동그라미" />
          <Spacing direction="horizontal" size={4} />
          <span>{animal}</span>
        </div>
        <Spacing direction="vertical" size={16} />
        <div className="w-[226px] h-[114px] text-gray text-body2 break-words">{content}</div>
        <Spacing direction="vertical" size={29} />
        <div className="w-[226px] flex justify-center">
          {contactOpen === 'closed' ? (
            <Checkbox
              checkCase="연락처 확인"
              isChecked={isChecked}
              onImgClick={() => {
                setIsChecked((prev) => !prev)
              }}
              onLabelClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                setIsChecked(e.target.checked)
              }}
            ></Checkbox>
          ) : (
            <Spacing direction="vertical" size={32} />
          )}
        </div>
        <Spacing direction="vertical" size={4} />
        <ContactButton
          contactOpen={contactOpen}
          contact={'contact'}
          isChecked={isChecked}
          onClick={() => {
            if (isChecked) {
              setContactOpen('opened')
            }
          }}
        />
      </div>
    </TypeButton>
  )
}

// PopupModal.displayName = 'PopupModal'
export default PopupModal
