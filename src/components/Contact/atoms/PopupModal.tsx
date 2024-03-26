import XButton from '../../../assets/Xbutton.svg'
import EllipseSeperator from '../../../assets/ellipseSeperator.svg'
import { ANIMAL_OPTIONS_FEMALE, ANIMAL_OPTIONS_MALE } from '../../../constant'
import { AnimalType, GenderType, MbtiType } from '../../../types/explore.type'
import ContactButton from '../../Explore/atoms/ContactButton'
import Spacing from '../../common/Spacing'
import TypeButton from '../../common/TypeButton'

interface PopupModalProps {
  nickname: string
  mbti: MbtiType
  animal: AnimalType
  content: string
  gender: GenderType
  isPopup: boolean
  contact: string
  weight: number
  onClickClose: () => void
}

const PopupModal = ({
  nickname,
  mbti,
  animal,
  content,
  gender,
  contact,
  weight,
  onClickClose,
}: PopupModalProps) => {
  return (
    <TypeButton
      className="animate-jump-in animate-duration-[300ms] animate-once animate-ease-in-out"
      mode="white"
      width={266}
      height={460}
    >
      <>
        <div className="flex h-full w-full flex-col items-center justify-start">
          <Spacing direction="vertical" size={11} />
          <div className="flex">
            <div className="flex">
              <Spacing direction="horizontal" size={83} />
              <div className="flex w-[100px] flex-col items-center justify-center text-caption text-gray">
                <Spacing direction="vertical" size={8} />
                <div></div>
                <div>
                  <span>지금까지 </span>
                  <span className="text-pink">{`${weight}`}</span>
                  <span>명이</span>
                </div>
                <div>프로필을 확인했어요!</div>
              </div>
              <Spacing direction="horizontal" size={46.27} />

              <img
                className="h-[18px] w-[18px]"
                src={XButton as string}
                title="X 버튼"
                alt="X 버튼"
                onClick={() => onClickClose()}
              />
            </div>

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
            <span>{gender === 'female' ? '여자' : '남자'}</span>
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
          <Spacing direction="vertical" size={51} />
          <ContactButton contactOpen={'opened'} isChecked={true} contact={contact} />
        </div>
      </>
    </TypeButton>
  )
}

export default PopupModal
