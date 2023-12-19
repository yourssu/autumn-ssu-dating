import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import Spacing from './Spacing'

import leftIcon from '../../assets/leftIcon.svg'
import ticket from '../../assets/ticket.svg'
import { signedAtom } from '../../state/signedAtom'
import { ticketAtom } from '../../state/ticketAtom'

interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {
  backNav: string
  title: string
}

const TopBar = ({ backNav, title, ...props }: TopBarProps) => {
  const hasRightIcon = backNav !== '/user' && window.location.pathname !== '/register'

  const navigate = useNavigate()
  return (
    <div
      className="fixed top-0 flex h-[44px] w-screen flex-row items-center justify-between"
      {...props}
    >
      <div className="flex h-[50px] w-[50px] items-center justify-center">
        <img
          src={leftIcon as string}
          className="h-[24px] w-[24px] cursor-pointer"
          alt="뒤로가기"
          onClick={() => navigate(backNav)}
        ></img>
      </div>
      <span className="text-body1 text-black">{title}</span>
      {hasRightIcon ? <RightIcon /> : <div className="w-[60px]"></div>}
    </div>
  )
}

const RightIcon = () => {
  const signed = useRecoilValue(signedAtom)

  return (
    <div className="flex flex-row items-center">
      {signed ? <TicketCount /> : <span className="w-[60px] text-body2 text-pink">로그인</span>}
    </div>
  )
}

const TicketCount = () => {
  const ticketCount = useRecoilValue(ticketAtom)

  return (
    <>
      <img src={ticket as string} className="h-[22px] w-[22px]" alt="티켓 아이콘"></img>
      <Spacing direction="horizontal" size={4} />
      <span className="text-body2 text-black">x</span>
      <Spacing direction="horizontal" size={5} />
      <span className="text-body2 text-pink">{ticketCount}</span>
      <Spacing direction="horizontal" size={12.87} />
    </>
  )
}

export default TopBar
