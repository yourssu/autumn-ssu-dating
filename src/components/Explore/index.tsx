import { useRef } from 'react'

import AnimalTabBar from './atoms/AnimalTabBar'
import GenderTabBar from './atoms/GenderTabBar'
import InformationTypeButton from './atoms/InformationTypeButton'
import PopupModal from './atoms/PopupModal'

import useExploreFilter from '../../hooks/useExploreFilter'
import usePopup from '../../hooks/usePopup'
import Spacing from '../common/Spacing'

const Explore = () => {
  const { currentExploreFilter, handleGenderTab, handleAnimalTab } = useExploreFilter()
  const { isPopup, handleClosePopup, handlePopup, handlePopupSelected, currentPopupSelected } =
    usePopup()

  const bgRef = useRef<HTMLDivElement>(null)

  return (
    <div className="h-screen w-screen overflow-hidden">
      <GenderTabBar
        currentGenderTab={currentExploreFilter.gender}
        handleGenderTab={handleGenderTab}
      />
      <Spacing direction="vertical" size={48} />
      <div className="h-[calc(100%-44px-48px)] overflow-y-scroll overflow-x-hidden scrollbar-hide">
        {currentExploreFilter.gender === 'female' ? (
          <div className="flex flex-col">
            <AnimalTabBar
              currentAnimalTab={currentExploreFilter.femaleAnimal}
              gender={currentExploreFilter.gender}
              onClickHandler={handleAnimalTab}
            />
            <div className="flex flex-wrap gap-5 justify-start self-center w-[342px]">
              {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item) => (
                <InformationTypeButton
                  nickname="슽엘라"
                  mbti="INFP"
                  key={item}
                  animal="뿌슝이"
                  gender="female"
                  contact="djjd"
                  content="ghsdjkghjksdfjkhsdjkfhsjkdhfjksdhfjksdhfjkhsdjkfhjksdhfjksdhfjkshdfjkhsdjkhfsjkdhfjkhsdjkfhsdjkfhsdjkghfjksdhhgjkh"
                  onButtonClick={handlePopupSelected}
                ></InformationTypeButton>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <AnimalTabBar
              currentAnimalTab={currentExploreFilter.maleAnimal}
              gender={currentExploreFilter.gender}
              onClickHandler={handleAnimalTab}
            />
            <div className="flex flex-wrap gap-5 justify-start self-center w-[342px]">
              {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item) => (
                <InformationTypeButton
                  nickname="슽엘라"
                  mbti="INFP"
                  key={item}
                  animal="뿌슝이"
                  gender="female"
                  contact="djjd"
                  content="ghsdjkghjksdfjkhsdjkfhsjkdhfjksdhfjksdhfjkhsdjkfhjksdhfjksdhfjkshdfjkhsdjkhfsjkdhfjkhsdjkfhsdjkfhsdjkghfjksdhhgjkh"
                  onButtonClick={handlePopupSelected}
                ></InformationTypeButton>
              ))}
            </div>
          </div>
        )}
      </div>
      {isPopup ? (
        <div
          className="bg-[rgba(4,9,27,0.50)] w-screen h-screen absolute top-0 flex justify-center items-center"
          ref={bgRef}
          onClick={(e) => handlePopup(bgRef, e)}
        >
          <PopupModal
            nickname={currentPopupSelected.nickname}
            mbti={currentPopupSelected.mbti}
            gender={currentPopupSelected.gender}
            contact={currentPopupSelected.contact}
            animal={currentPopupSelected.animal}
            content={currentPopupSelected.content}
            isPopup={isPopup}
            onClickClose={handleClosePopup}
          ></PopupModal>
        </div>
      ) : null}
    </div>
  )
}

export default Explore
