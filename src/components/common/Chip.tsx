import { ReactElement } from 'react'

import { IsSelectedType } from '../../types/chip.type'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isSelected?: IsSelectedType
  children: ReactElement
}

const Chip = ({ isSelected = 'notSelected', children, ...props }: Props) => {
  const selectedStyle = {
    selected: 'bg-pink',
    notSelected: 'bg-white border border-lightPink',
  }

  return (
    <div
      className={`w-[52px] h-[52px] rounded-[12px] p-2 flex justify-center items-center ${selectedStyle[isSelected]}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Chip
