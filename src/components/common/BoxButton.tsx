import { ReactElement } from 'react'

import { IsDisabledType, IsLineType, SizeType } from '../../types/boxButton.type'

interface BoxButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  isDisabled?: IsDisabledType
  isLine?: IsLineType
  size?: SizeType
  children: ReactElement
}

const BoxButton = ({
  isDisabled = 'abled',
  isLine = 'filled',
  size = 'small',
  children,
  ...props
}: BoxButtonProps) => {
  const defaultStyle = 'px-4 flex rounded-[12px] justify-center items-center'

  const disableStyle = {
    disabled: 'bg-lightPink border-lightPink',
    abled: 'bg-pink border-pink',
  }

  const lineStyle = {
    line: 'border bg-white text-pink',
    filled: 'border-none text-white',
  }

  const sizeStyle = {
    small: 'w-[193px] h-12',
    large: 'w-[342px] h-14',
  }

  return (
    <div
      className={`${defaultStyle} ${disableStyle[isDisabled]} ${lineStyle[isLine]} ${sizeStyle[size]}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default BoxButton
