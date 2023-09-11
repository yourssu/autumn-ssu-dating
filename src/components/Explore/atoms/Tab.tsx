import { GenderType, IsSelectedType } from '../../../types/explore.type'

interface TabProps {
  isSelected: IsSelectedType
  gender: GenderType
}

const Tab = ({ isSelected, gender }: TabProps) => {
  const selectedTextStyle = {
    selected: 'text-pink',
    notSelected: 'text-gray',
  }

  const selectedBarStyle = {
    selected: 'bg-pink',
    notSelected: 'bg-transparent',
  }

  return (
    <div className="h-[48px] w-1/2">
      <div
        className={`h-full flex justify-center items-center text-body2 ${selectedTextStyle[isSelected]}`}
      >
        {gender === 'female' ? '여자' : '남자'}
      </div>
      <div className={`self-stretch h-0.5 mt-[-2px] ${selectedBarStyle[isSelected]}`} />
    </div>
  )
}

export default Tab
