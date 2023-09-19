import { useEffect, useRef } from 'react'

import AnimalTabBar from './atoms/AnimalTabBar'
import FloatingButton from './atoms/FloatingButton'
import GenderTabBar from './atoms/GenderTabBar'
import InformationTypeButton from './atoms/InformationTypeButton'
import PopupModal from './atoms/PopupModal'

import useExploreFilter from '../../hooks/useExploreFilter'
import { useGetAnimals } from '../../hooks/useGetAnimals'
import usePopup from '../../hooks/usePopup'
import useRecoilToast from '../../hooks/useRecoilToast'
import { exploreToastAtom } from '../../state/exploreToastAtom'
import { GenderType } from '../../types/explore.type'
import { animalServerToClient } from '../../utils/animalUtil'
import Spacing from '../common/Spacing'
import ToastMessage from '../common/ToastMessage'

const Explore = () => {
  const { currentExploreFilter, handleGenderTab, handleAnimalTab } = useExploreFilter()
  const { isPopup, handleClosePopup, handlePopup, handlePopupSelected, currentPopupSelected } =
    usePopup()

  const bgRef = useRef<HTMLDivElement>(null)

  const { recoilStateToast, hideRecoilStateToast } = useRecoilToast(exploreToastAtom)

  const { data } = useGetAnimals(
    currentExploreFilter.gender,
    currentExploreFilter.gender === 'female'
      ? currentExploreFilter.femaleAnimal
      : currentExploreFilter.maleAnimal
  )

  useEffect(() => {
    hideRecoilStateToast()
  }, [recoilStateToast, hideRecoilStateToast])

  return (
    <div className="h-screen w-screen overflow-hidden">
      <FloatingButton />
      <GenderTabBar
        currentGenderTab={currentExploreFilter.gender}
        handleGenderTab={handleGenderTab}
      />
      <Spacing direction="vertical" size={48} />
      <div className="h-[calc(100%-44px-48px)] overflow-y-scroll overflow-x-hidden scrollbar-hide">
        <AnimalTabBar
          currentAnimalTab={
            currentExploreFilter.gender === 'female'
              ? currentExploreFilter.femaleAnimal
              : currentExploreFilter.maleAnimal
          }
          gender={currentExploreFilter.gender}
          onClickHandler={handleAnimalTab}
        />
        {currentExploreFilter.gender === 'female' ? (
          <div className="flex w-screen justify-center">
            <div className="flex flex-wrap gap-5 justify-start self-center w-[342px]">
              {data?.map((item, index) => (
                <InformationTypeButton
                  nickname={item.nickName}
                  mbti={item.mbti}
                  key={index}
                  animal={animalServerToClient(item.animals)}
                  gender={item.gender.toLowerCase() as GenderType}
                  content={item.introduce}
                  onButtonClick={handlePopupSelected}
                ></InformationTypeButton>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex w-screen justify-center">
            <div className="flex flex-wrap gap-5 justify-start self-center w-[342px]">
              {data?.map((item, index) => (
                <InformationTypeButton
                  nickname={item.nickName}
                  mbti={item.mbti}
                  key={index}
                  animal={animalServerToClient(item.animals)}
                  gender={item.gender.toLowerCase() as GenderType}
                  content={item.introduce}
                  onButtonClick={handlePopupSelected}
                ></InformationTypeButton>
              ))}
            </div>
          </div>
        )}
      </div>
      {isPopup ? (
        <div
          className="bg-[rgba(4,9,27,0.50)] flex flex-col w-screen h-screen absolute top-0 justify-center items-center"
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
            onClickClose={handleClosePopup}
          ></PopupModal>
          {recoilStateToast.isShow && (
            <ToastMessage className="absolute bottom-[22px]">
              {recoilStateToast.toastMessage}
            </ToastMessage>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Explore
