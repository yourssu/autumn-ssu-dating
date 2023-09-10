import { ReactElement } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'white' | 'pink'
  width?: number
  height?: number
  children: ReactElement
}

const TypeButton = ({ mode = 'white', width = 161, height = 161, children, ...props }: Props) => {
  const defaultStyle = 'shadow-typeBtn rounded-[20px] flex justify-center items-center font-body2'
  const modeStyle = {
    pink: 'bg-pink text-white',
    white: 'bg-white text-pink',
  }

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`${defaultStyle} ${modeStyle[mode]}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default TypeButton
