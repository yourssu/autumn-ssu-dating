import { ReactElement } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'white' | 'pink'
  width?: number
  height?: number
  children: ReactElement
}

const TypeButton = ({ mode = 'white', width = 161, height = 161, children, ...props }: Props) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={
        mode === 'white'
          ? 'bg-white text-pink shadow-typeBtn rounded-[20px] flex justify-center items-center font-body2'
          : 'bg-pink text-white shadow-typeBtn rounded-[20px] flex justify-center items-center font-body2'
      }
      {...props}
    >
      {children}
    </div>
  )
}

export default TypeButton
