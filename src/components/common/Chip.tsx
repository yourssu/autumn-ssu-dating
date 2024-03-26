import { ReactElement } from 'react'

import { IsSelectedType } from '../../types/chip.type'

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  isSelected?: IsSelectedType
  children: ReactElement
}

const Chip = ({ isSelected = 'notSelected', children, ...props }: ChipProps) => {
  const selectedStyle = {
    selected: 'bg-pink text-white',
    notSelected: 'bg-white border border-lightPink text-pink',
  }

  return (
    <div
      className={`flex h-[52px] w-[52px] items-center justify-center rounded-[12px] text-body2 ${selectedStyle[isSelected]}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Chip
