import GenderTab from './GenderTab'

import { GenderType } from '../../../types/explore.type'

interface GenderTabBarProps {
  currentGenderTab: GenderType
  handleGenderTab: (gender: GenderType) => void
}

const GenderTabBar = ({ currentGenderTab, handleGenderTab }: GenderTabBarProps) => {
  return (
    <div className="fixed top-[44px] flex h-[48px] w-screen">
      <GenderTab
        gender="female"
        isSelected={currentGenderTab === 'female' ? 'selected' : 'notSelected'}
        onClickHandler={handleGenderTab}
      ></GenderTab>
      <GenderTab
        gender="male"
        isSelected={currentGenderTab === 'male' ? 'selected' : 'notSelected'}
        onClickHandler={handleGenderTab}
      ></GenderTab>
    </div>
  )
}

export default GenderTabBar
