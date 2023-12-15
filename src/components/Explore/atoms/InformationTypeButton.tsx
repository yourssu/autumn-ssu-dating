import EllipseSeperator from '../../../assets/ellipseSeperator.svg'
import {
  AnimalType,
  CurrentPopupSelectedType,
  GenderType,
  MbtiType,
} from '../../../types/explore.type'
import Spacing from '../../common/Spacing'
import TypeButton from '../../common/TypeButton'

interface InformationTypeButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  nickname: string
  mbti: MbtiType
  animal: AnimalType
  content: string
  gender: GenderType
  onButtonClick: (e: CurrentPopupSelectedType) => void
}

const InformationTypeButton = ({
  nickname,
  mbti,
  animal,
  content,
  gender,
  onButtonClick,
  ...props
}: InformationTypeButtonProps) => {
  return (
    <TypeButton
      width={161}
      height={140}
      onClick={() =>
        onButtonClick({
          nickname,
          mbti,
          gender,
          animal,
          content,
        })
      }
      {...props}
    >
      <div className="flex h-[104px] w-[129px] flex-col justify-start">
        <span className="text-body1">{nickname}</span>
        <Spacing direction="vertical" size={2} />
        <div className="flex items-center text-caption">
          <span>{mbti}</span>
          <Spacing direction="horizontal" size={4} />
          <img
            className="h-[2px] w-[2px]"
            src={EllipseSeperator as string}
            alt="공간 분리용 동그라미"
            title="공간 분리용 동그라미"
          />
          <Spacing direction="horizontal" size={4} />
          <span>{animal}</span>
        </div>
        <Spacing direction="vertical" size={8} />
        <div className="line-clamp-3 break-words text-body2 text-gray">{content}</div>
      </div>
    </TypeButton>
  )
}

export default InformationTypeButton
