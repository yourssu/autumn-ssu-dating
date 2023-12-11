import { GenderType, IsSelectedType } from '../../../types/explore.type'

interface GenderTabProps {
  isSelected: IsSelectedType
  gender: GenderType
  onClickHandler: (gender: GenderType) => void
}

const GenderTab = ({ isSelected, gender, onClickHandler }: GenderTabProps) => {
  const selectedTextStyle = {
    selected: 'text-pink',
    notSelected: 'text-gray',
  }

  const selectedBarStyle = {
    selected: 'bg-pink',
    notSelected: 'bg-transparent',
  }

  return (
    <div className="h-[48px] w-1/2" onClick={() => onClickHandler(gender)}>
      <div
        className={`flex h-full items-center justify-center text-body2 ${selectedTextStyle[isSelected]}`}
      >
        {gender === 'female' ? '여자' : '남자'}
      </div>
      <div className={`mt-[-2px] h-0.5 self-stretch ${selectedBarStyle[isSelected]}`} />
    </div>
  )
}

export default GenderTab
