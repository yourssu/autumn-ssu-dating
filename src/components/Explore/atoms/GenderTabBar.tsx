import GenderTab from './GenderTab'

import { GenderType } from '../../../types/explore.type'

interface TabBarProps {
  currentGenderTab: GenderType
  handleGenderTab: (gender: GenderType) => void
}

const TabBar = ({ currentGenderTab, handleGenderTab }: TabBarProps) => {
  return (
    <div className="w-screen flex h-[48px] fixed top-[44px]">
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

export default TabBar
