import { useState } from 'react'

import InviteButton from './InviteButton'
import RecommendButton from './RecommendButton'

import XButton from '../../../assets/Xbutton.svg'
import ticket from '../../../assets/ticket.svg'
import { OpenType } from '../../../types/explore.type'
import Spacing from '../../common/Spacing'
import TypeButton from '../../common/TypeButton'

interface TicketPopupModalProps {
  onClickClose: () => void
}

const TicketPopupModal = ({ onClickClose }: TicketPopupModalProps) => {
  const [recommendButtonOpen, setRecommendButtonOpen] = useState<OpenType>('closed')
  const [inviteButtonOpen, setInviteButtonOpen] = useState<OpenType>('closed')

  return (
    <TypeButton
      className="max-h-[416px] min-h-[302px] w-[266px] animate-jump-in animate-duration-[300ms] animate-once animate-ease-in-out"
      mode="white"
      width={0}
      height={0}
    >
      <div className="flex-grow-1 flex min-h-[302px] w-full flex-1 flex-col items-center justify-start">
        <Spacing direction="vertical" size={12} className="flex-shrink-0" />
        <div className="flex flex-shrink-0">
          <Spacing direction="horizontal" size={230} />
          <img
            className="h-[18px] w-[18px]"
            src={XButton as string}
            title="X 버튼"
            alt="X 버튼"
            onClick={() => onClickClose()}
          />
        </div>
        <Spacing direction="vertical" size={16} className="flex-shrink-0" />
        <img
          className="h-[32px] w-[32px] flex-shrink-0"
          src={ticket as string}
          title="티켓"
          alt="티켓"
        />
        <Spacing direction="vertical" size={8} className="flex-shrink-0" />
        <span className="text-button text-pink">이용권이 부족해요</span>
        <Spacing direction="vertical" size={4} className="flex-shrink-0" />
        <div className="flex flex-shrink-0 flex-col items-center justify-center text-body2 text-gray">
          <span>아래 방법을 통해</span>
          <span>이용권을 충전해보세요!</span>
        </div>
        <Spacing direction="vertical" size={20} className="flex-shrink-0" />
        <InviteButton
          className="flex-shrink-0"
          inviteOpen={inviteButtonOpen}
          onClick={() => {
            setInviteButtonOpen(inviteButtonOpen === 'opened' ? 'closed' : 'opened')
          }}
        />
        <Spacing direction="vertical" size={8} />
        <RecommendButton
          className="flex-shrink-0"
          recommendOpen={recommendButtonOpen}
          onClick={() => {
            setRecommendButtonOpen(recommendButtonOpen === 'opened' ? 'closed' : 'opened')
          }}
        />
        <Spacing direction="vertical" size={28} className="flex-shrink-0" />
      </div>
    </TypeButton>
  )
}
export default TicketPopupModal
