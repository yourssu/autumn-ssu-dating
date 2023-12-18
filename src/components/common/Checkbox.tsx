import { useRecoilValue } from 'recoil'

import Spacing from './Spacing'

import checkedIcon from '../../assets/checkedIcon.svg'
import uncheckedIcon from '../../assets/uncheckedIcon.svg'
import { ticketListAtom } from '../../state/ticketAtom'

interface CheckboxProps {
  checkCase: '등록' | '연락처 확인'
  isChecked: boolean
  onImgClick: React.MouseEventHandler<HTMLImageElement>
  onLabelClick: React.ChangeEventHandler<HTMLInputElement>
}

const Checkbox = ({
  checkCase = '연락처 확인',
  isChecked,
  onImgClick,
  onLabelClick,
}: CheckboxProps) => {
  const ticketList = useRecoilValue(ticketListAtom)

  const checkCaseJustify = {
    '연락처 확인': 'justify-start',
    등록: 'justify-center',
  }

  return (
    <div className={`flex ${checkCaseJustify[checkCase]} h-[32px] justify-start text-center`}>
      <img
        className="h-[16px] w-[16px]"
        src={isChecked ? (checkedIcon as string) : (uncheckedIcon as string)}
        onClick={onImgClick}
      />
      <Spacing direction="horizontal" size={4} />
      <label className="text-caption text-pink" style={{ WebkitTapHighlightColor: 'transparent' }}>
        <input type="checkbox" onChange={onLabelClick} className="hidden" />
        {checkCase} 시 이용권 한 장이 차감됩니다. (남은 이용권수: {ticketList.length}장)
      </label>
    </div>
  )
}

export default Checkbox
