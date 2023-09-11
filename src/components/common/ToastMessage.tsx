import { ReactNode } from 'react'

interface ToastMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const ToastMessage = ({ children, ...props }: ToastMessageProps) => {
  return (
    <div
      className="w-[374px] h-[50px] mb-[22px] px-6 py-4 bg-black text-white rounded-[8px] flex justify-center items-center animate-fade-up"
      {...props}
    >
      {children}
    </div>
  )
}

export default ToastMessage
