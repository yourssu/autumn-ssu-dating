import checkedIcon from '../../assets/checkedIcon.svg'
import uncheckedIcon from '../../assets/uncheckedIcon.svg'

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
  return (
    <div className="flex justify-center">
      <img
        src={isChecked ? (checkedIcon as string) : (uncheckedIcon as string)}
        onClick={onImgClick}
      />
      <label className="text-caption text-pink ml-1 my-2">
        <input type="checkbox" onChange={onLabelClick} className="hidden" />
        {checkCase} 시 이용권 한 장이 차감됩니다. (남은 이용권수: n장)
      </label>
    </div>
  )
}

export default Checkbox
