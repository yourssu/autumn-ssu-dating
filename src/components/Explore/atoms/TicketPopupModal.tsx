import { useState } from 'react'

import RecommendButton from './RecommendButton'

import XButton from '../../../assets/Xbutton.svg'
import ticket from '../../../assets/ticket.svg'
import { RecommendOpenType } from '../../../types/explore.type'
import Spacing from '../../common/Spacing'
import TypeButton from '../../common/TypeButton'

const TicketPopupModal = () => {
  const [recommendInputOpen, setRecommendInputOpen] = useState<RecommendOpenType>('closed')

  return (
    <TypeButton
      className="animate-jump-in animate-duration-[300ms] animate-once animate-ease-in-out"
      mode="white"
      width={266}
      height={302}
    >
      <div className="flex h-full w-full flex-col items-center justify-start">
        <Spacing direction="vertical" size={12} />
        <div className="flex">
          <Spacing direction="horizontal" size={230} />
          <img className="h-[18px] w-[18px]" src={XButton as string} title="X 버튼" alt="X 버튼" />
        </div>
        <Spacing direction="vertical" size={16} />
        <img className="h-[32px] w-[32px]" src={ticket as string} title="티켓" alt="티켓" />
        <Spacing direction="vertical" size={8} />
        <span className="text-button text-pink">이용권이 부족해요</span>
        <Spacing direction="vertical" size={4} />
        <div className="flex flex-col items-center justify-center text-body2 text-gray">
          <span>아래 방법을 통해</span>
          <span>이용권을 충전해보세요!</span>
        </div>
        <Spacing direction="vertical" size={20} />
        <RecommendButton
          recommendOpen={recommendInputOpen}
          onClick={() => {
            setRecommendInputOpen(recommendInputOpen === 'opened' ? 'closed' : 'opened')
          }}
        />
      </div>
    </TypeButton>
  )
}
export default TicketPopupModal
