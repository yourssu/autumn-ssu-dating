import { useEffect, useRef } from 'react'

import InfiniteScroll from 'react-infinite-scroller'

import AnimalTabBar from './atoms/AnimalTabBar'
import GenderTabBar from './atoms/GenderTabBar'
import InformationTypeButton from './atoms/InformationTypeButton'
import PopupModal from './atoms/PopupModal'

import useExploreFilter from '../../hooks/useExploreFilter'
import { useGetAnimals } from '../../hooks/useGetAnimals'
import usePopup from '../../hooks/usePopup'
import { GenderType } from '../../types/explore.type'
import { animalServerToClient } from '../../utils/animalUtil'
import Spacing from '../common/Spacing'

const Explore = () => {
  const { currentExploreFilter, handleGenderTab, handleAnimalTab } = useExploreFilter()
  const { isPopup, handleClosePopup, handlePopup, handlePopupSelected, currentPopupSelected } =
    usePopup()

  const bgRef = useRef<HTMLDivElement>(null)

  const { data, fetchNextPage, hasNextPage, isLoading, isError } = useGetAnimals(
    currentExploreFilter.gender,
    currentExploreFilter.gender === 'female'
      ? currentExploreFilter.femaleAnimal
      : currentExploreFilter.maleAnimal
  )

  return (
    <div className="h-screen w-screen overflow-hidden">
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
          <div className="flex flex-col h-full overflow-auto">
            <InfiniteScroll
              pageStart={0}
              loadMore={() => fetchNextPage()}
              hasMore={hasNextPage}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
              useWindow={false}
            >
              <div className="flex w-screen justify-center">
                <div className="flex flex-wrap gap-5 justify-start self-center w-[342px]">
                  {data?.pages.map((page) => {
                    return page.users.map((item, index) => (
                      <InformationTypeButton
                        nickname={item.nickName}
                        mbti={item.mbti}
                        key={index}
                        animal={animalServerToClient(item.animals)}
                        gender={item.gender.toLowerCase() as GenderType}
                        content={item.introduce}
                        onButtonClick={handlePopupSelected}
                      ></InformationTypeButton>
                    ))
                  })}
                </div>
              </div>
            </InfiniteScroll>
          </div>
        ) : (
          <div className="flex flex-col h-full overflow-auto">
            <InfiniteScroll
              pageStart={0}
              loadMore={() => fetchNextPage()}
              hasMore={hasNextPage}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
              useWindow={false}
            >
              <div className="flex w-screen justify-center">
                <div className="flex flex-wrap gap-5 justify-start self-center w-[342px]">
                  {data?.pages.map((page) => {
                    return page.users.map((item, index) => (
                      <InformationTypeButton
                        nickname={item.nickName}
                        mbti={item.mbti}
                        key={index}
                        animal={animalServerToClient(item.animals)}
                        gender={item.gender.toLowerCase() as GenderType}
                        content={item.introduce}
                        onButtonClick={handlePopupSelected}
                      ></InformationTypeButton>
                    ))
                  })}
                </div>
              </div>
            </InfiniteScroll>
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
