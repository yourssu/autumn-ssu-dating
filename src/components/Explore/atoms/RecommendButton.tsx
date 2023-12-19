import { RecommendOpenType } from '../../../types/explore.type'
import BoxButton from '../../common/BoxButton'
import Spacing from '../../common/Spacing'

interface RecommendButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  recommendOpen: RecommendOpenType
}

const RecommendButton = ({ recommendOpen, ...props }: RecommendButtonProps) => {
  return (
    <span {...props}>
      <BoxButton isLine={recommendOpen === 'opened' ? 'line' : 'filled'} size="middle">
        {recommendOpen === 'opened' ? (
          <div className="animate-fade self-start animate-normal animate-duration-300 animate-once animate-ease-linear">
            <Spacing direction="vertical" size={12} />
            <span className="text-caption text-pink">추천인코드 입력(1회 한정)</span>
            <Spacing direction="vertical" size={8} />
            <div className="flex w-full items-end">
              <input
                className="h-[27px] w-[152px] border-b-[1px] py-[4px] text-body2 text-pink focus:outline-none"
                onClick={(e) => {
                  e.stopPropagation()
                }}
              ></input>
              <Spacing direction="horizontal" size={8} />
              <div
                className="flex h-[23px] w-[42px] items-center justify-center rounded bg-pink"
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <span className="text-caption text-white">확인</span>
              </div>
            </div>

            <Spacing direction="vertical" size={12} />
          </div>
        ) : (
          <span className="self-start text-body2">추천인코드 입력하기(1회 한정)</span>
        )}
      </BoxButton>
    </span>
  )
}
export default RecommendButton
