import Tab from './Tab'

import { GenderType } from '../../../types/explore.type'

interface TabBarProps {
  currentGenderTab: GenderType
  handleGenderTab: (gender: GenderType) => void
}

const TabBar = ({ currentGenderTab, handleGenderTab }: TabBarProps) => {
  return (
    <div className="w-screen flex h-[48px] fixed top-[44px]">
      <Tab
        gender="female"
        isSelected={currentGenderTab === 'female' ? 'selected' : 'notSelected'}
        onClickHandler={handleGenderTab}
      ></Tab>
      <Tab
        gender="male"
        isSelected={currentGenderTab === 'male' ? 'selected' : 'notSelected'}
        onClickHandler={handleGenderTab}
      ></Tab>
    </div>
  )
}

export default TabBar
