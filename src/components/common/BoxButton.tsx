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
    extraExtraSmall: 'w-[42px] h-[23px]',
    extraSmall: 'w-[116px] h-12',
    small: 'w-[193px] h-12',
    middle: 'w-[226px] min-h-[43px]',
    large: 'w-[342px] h-14',
  }

  return (
    <div
      {...props}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      className={`${defaultStyle} ${disableStyle[isDisabled]} ${lineStyle[isLine]} ${sizeStyle[size]} ${props.className}`}
    >
      {children}
    </div>
  )
}

export default BoxButton
