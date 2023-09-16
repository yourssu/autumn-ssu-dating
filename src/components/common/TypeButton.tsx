import { ReactElement, forwardRef } from 'react'

interface TypeButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'white' | 'pink'
  width?: number
  height?: number
  rounded?: number
  children: ReactElement
}

const TypeButton = forwardRef<HTMLDivElement, TypeButtonProps>(
  (
    {
      mode = 'white',
      width = 161,
      height = 161,
      rounded = 20,
      children,
      ...props
    }: TypeButtonProps,
    ref
  ) => {
    const defaultStyle = 'shadow-typeBtn flex justify-center items-center font-body2 flex-col'
    const modeStyle = {
      pink: 'bg-pink text-white',
      white: 'bg-white text-pink',
    }

    return (
      <div
        {...props}
        style={{ width: `${width}px`, height: `${height}px`, borderRadius: `${rounded}px` }}
        className={`${defaultStyle} ${modeStyle[mode]} ${props.className}`}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

TypeButton.displayName = 'TypeButton'

export default TypeButton
