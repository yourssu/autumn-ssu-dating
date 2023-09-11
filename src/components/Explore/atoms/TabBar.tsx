import Tab from './Tab'

import { SelectedType } from '../../../types/explore.type'

interface TabBarProps {
  selected: SelectedType
}

const TabBar = ({ selected }: TabBarProps) => {
  return (
    <div className="w-screen flex">
      <Tab gender="female" isSelected={selected === 'female' ? 'selected' : 'notSelected'}></Tab>
      <Tab gender="male" isSelected={selected === 'male' ? 'selected' : 'notSelected'}></Tab>
    </div>
  )
}

export default TabBar
