import { useNavigate } from 'react-router-dom'

import Spacing from './Spacing'

import leftIcon from '../../assets/leftIcon.svg'
import ticket from '../../assets/ticket.svg'

interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {
  backNav: string
  title: string
  ticketCount: number
}

const TopBar = ({ backNav, title, ticketCount, ...props }: TopBarProps) => {
  const navigate = useNavigate()
  return (
    <div className="w-screen h-[44px] flex flex-row items-center justify-between" {...props}>
      <div className="w-[50px] h-[50px] flex justify-center items-center">
        <img
          src={leftIcon as string}
          className="w-[24px] h-[24px] cursor-pointer"
          alt="뒤로가기"
          onClick={() => navigate(backNav)}
        ></img>
      </div>
      <span className="text-black font-body1">{title}</span>
      <div className="flex flex-row items-center">
        <img
          src={ticket as string}
          className="h-[22px]"
          alt="티켓 아이콘"
          onClick={() => navigate(backNav)}
        ></img>
        <Spacing direction="horizontal" size={4} />
        <span className="text-black font-body2">x </span>
        <span className="text-pink font-body2">{ticketCount}</span>
        <Spacing direction="horizontal" size={12.87} />
      </div>
    </div>
  )
}

export default TopBar