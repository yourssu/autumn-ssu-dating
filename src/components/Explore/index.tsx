import { useEffect } from 'react'

import AnimalTabBar from './atoms/AnimalTabBar'
import GenderTabBar from './atoms/GenderTabBar'
import InformationTypeButton from './atoms/InformationTypeButton'

import useExploreFilter from '../../hooks/useExploreFilter'
import Spacing from '../common/Spacing'

const Explore = () => {
  const { currentExploreFilter, handleGenderTab, handleAnimalTab } = useExploreFilter()

  useEffect(() => {
    console.log(currentExploreFilter)
  }, [currentExploreFilter])

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
                  content="ghsdjkghjksdfjkhsdjkfhsjkdhfjksdhfjksdhfjkhsdjkfhjksdhfjksdhfjkshdfjkhsdjkhfsjkdhfjkhsdjkfhsdjkfhsdjkghfjksdhhgjkh"
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
                  content="ghsdjkghjksdfjkhsdjkfhsjkdhfjksdhfjksdhfjkhsdjkfhjksdhfjksdhfjkshdfjkhsdjkhfsjkdhfjkhsdjkfhsdjkfhsdjkghfjksdhhgjkh"
                ></InformationTypeButton>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Explore
