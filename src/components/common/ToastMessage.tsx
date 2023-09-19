import { ReactNode } from 'react'

interface ToastMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const ToastMessage = ({ children, ...props }: ToastMessageProps) => {
  return (
    <div
      {...props}
      className={`w-[calc(100%-16px)] max-w-[374px] h-[50px] mb-[22px] py-4 bg-black text-body2 text-white text-center rounded-[8px] animate-fade-up ${props.className}`}
    >
      {children}
    </div>
  )
}

export default ToastMessage
