import { useEffect, useRef } from 'react'

import AnimalTabBar from './atoms/AnimalTabBar'
import FloatingButton from './atoms/FloatingButton'
import GenderTabBar from './atoms/GenderTabBar'
import InformationTypeButton from './atoms/InformationTypeButton'
import { ExploreLoading } from './atoms/Loading'
import PopupModal from './atoms/PopupModal'
import TicketPopupModal from './atoms/TicketPopupModal'

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

  const {
    isPopup: isTicketPopup,
    handleOpenPopup: handleOpenTicketPopup,
    handlePopup: handleTicketPopup,
    handleClosePopup: handleCloseTicketPopup,
  } = usePopup()

  const bgRef = useRef<HTMLDivElement>(null)
  const bgTicketRef = useRef<HTMLDivElement>(null)

  const { recoilStateToast, hideRecoilStateToast } = useRecoilToast(exploreToastAtom)

  const { data, refetch, isLoading, isFetching } = useGetAnimals(
    currentExploreFilter.gender,
    currentExploreFilter.gender === 'female'
      ? currentExploreFilter.femaleAnimal
      : currentExploreFilter.maleAnimal
  )

  useEffect(() => {
    hideRecoilStateToast()
  }, [recoilStateToast, hideRecoilStateToast])

  return (
    <div className="flex h-[100dvh] w-screen flex-col items-center overflow-hidden">
      <FloatingButton
        onClick={() => {
          refetch()
        }}
      />
      <GenderTabBar
        currentGenderTab={currentExploreFilter.gender}
        handleGenderTab={handleGenderTab}
      />
      <Spacing direction="vertical" size={48} />
      <div className="h-[calc(100%-44px-48px-32px)] overflow-x-hidden overflow-y-scroll scrollbar-hide">
        <AnimalTabBar
          currentAnimalTab={
            currentExploreFilter.gender === 'female'
              ? currentExploreFilter.femaleAnimal
              : currentExploreFilter.maleAnimal
          }
          gender={currentExploreFilter.gender}
          onClickHandler={handleAnimalTab}
        />

        {isLoading || isFetching ? (
          <div className="w-scren flex h-[calc(100%-180px)] items-center justify-center">
            <ExploreLoading />
          </div>
        ) : (
          <>
            {currentExploreFilter.gender === 'female' ? (
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
                      weight={item.weight}
                      onButtonClick={handlePopupSelected}
                    ></InformationTypeButton>
                  ))}
                </div>
              </div>
            ) : (
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
                      onButtonClick={handlePopupSelected}
                      weight={item.weight}
                    ></InformationTypeButton>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <Spacing direction="vertical" size={32} />
      </div>
      {isTicketPopup ? (
        <div
          className="absolute top-0 flex h-[100dvh] w-screen flex-col items-center justify-center bg-[rgba(4,9,27,0.50)]"
          ref={bgTicketRef}
          onClick={(e) => handleTicketPopup(bgTicketRef, e)}
        >
          <TicketPopupModal onClickClose={handleCloseTicketPopup}></TicketPopupModal>
        </div>
      ) : null}
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
            onClickClose={handleClosePopup}
            weight={currentPopupSelected.weight}
            onClickTicketOpen={handleOpenTicketPopup}
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

export default Explore
