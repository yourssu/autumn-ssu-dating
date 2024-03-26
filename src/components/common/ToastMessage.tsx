import { ReactNode } from 'react'

interface ToastMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const ToastMessage = ({ children, ...props }: ToastMessageProps) => {
  return (
    <div
      {...props}
      className={`absolute bottom-[22px] mb-[22px] min-h-[50px] w-[calc(100%-16px)] max-w-[374px] animate-fade-up whitespace-pre-line rounded-[8px] bg-black py-4 text-center text-body2 text-white animate-alternate animate-duration-[1500ms] animate-twice animate-ease-out ${props.className}`}
    >
      {children}
    </div>
  )
}

export default ToastMessage
