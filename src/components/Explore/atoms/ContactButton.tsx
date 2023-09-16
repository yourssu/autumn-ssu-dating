import { useEffect } from 'react'

import CopyButton from '../../../assets/copy.svg'
import { ContactOpenType } from '../../../types/explore.type'
import BoxButton from '../../common/BoxButton'
import Spacing from '../../common/Spacing'

interface ContactButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  contactOpen: ContactOpenType
  contact: string
}

const ContactButton = ({ contactOpen, contact, ...props }: ContactButtonProps) => {
  useEffect(() => {
    console.log(contactOpen)
  }, [contactOpen])
  return (
    <span {...props}>
      {contactOpen === 'closed' ? (
        <BoxButton>
          <span>연락처 확인하기</span>
        </BoxButton>
      ) : (
        <BoxButton isLine="line" isDisabled="disabled">
          <>
            <span>{contact}</span>
            <Spacing direction="horizontal" size={8}></Spacing>
            <img
              className="cursor-pointer w-[14px] h-[14px]"
              src={CopyButton}
              onClick={() => {
                navigator.clipboard.writeText(contact)
              }}
              alt="복사하기 버튼"
              title="복사하기 버튼"
            />
          </>
        </BoxButton>
      )}
    </span>
  )
}

export default ContactButton
