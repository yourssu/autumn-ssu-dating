import CopyButton from '../../../assets/copy.svg'
import useRecoilToast from '../../../hooks/useRecoilToast'
import { exploreToastAtom } from '../../../state/exploreToastAtom'
import { OpenType } from '../../../types/explore.type'
import BoxButton from '../../common/BoxButton'
import Spacing from '../../common/Spacing'

interface ContactButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  contactOpen: OpenType
  contact?: string
  isChecked: boolean
}

const ContactButton = ({ contactOpen, contact, isChecked, ...props }: ContactButtonProps) => {
  const { setRecoilStateToast } = useRecoilToast(exploreToastAtom)

  return (
    <span {...props}>
      <BoxButton
        className="flex-row"
        isLine={contactOpen === 'opened' ? 'line' : 'filled'}
        isDisabled={isChecked ? 'abled' : 'disabled'}
      >
        {contactOpen === 'closed' && !contact ? (
          <button>연락처 확인하기</button>
        ) : (
          <>
            <button className="relative flex items-center justify-center"></button>
            <span>{contact}</span>
            <Spacing direction="horizontal" size={8}></Spacing>
            <img
              className="h-[14px] w-[14px] cursor-pointer"
              src={CopyButton as string}
              onClick={() => {
                contact && navigator.clipboard.writeText(contact)
                setRecoilStateToast({
                  isShow: true,
                  toastMessage: '복사 완료!',
                })
              }}
              alt="복사하기 버튼"
              title="복사하기 버튼"
            />
          </>
        )}
      </BoxButton>
    </span>
  )
}

export default ContactButton
