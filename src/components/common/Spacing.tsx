import { HTMLAttributes, memo } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction: 'horizontal' | 'vertical'
  size: number
}

const Spacing = memo(function Spacing({ direction = 'vertical', size, ...props }: Props) {
  return (
    <div
      style={direction === 'horizontal' ? { width: `${size}px` } : { height: `${size}px` }}
      className=""
      {...props}
    />
  )
})

export default Spacing
