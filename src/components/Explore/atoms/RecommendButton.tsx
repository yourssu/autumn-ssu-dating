import { useState } from 'react'

import { useGetMyInfo } from '../../../hooks/useGetMyInfo'
import { usePostReferralCode } from '../../../hooks/usePostReferralCode'
import { OpenType } from '../../../types/explore.type'
import BoxButton from '../../common/BoxButton'
import Spacing from '../../common/Spacing'

interface RecommendButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  recommendOpen: OpenType
}

const RecommendButton = ({ recommendOpen, ...props }: RecommendButtonProps) => {
  const [code, setCode] = useState<string>('')

  const { data: myInfo } = useGetMyInfo()
  const { mutate: postReferralCode } = usePostReferralCode()

  return (
    <span {...props}>
      <BoxButton
        isLine={
          myInfo?.codeInputChance ? (recommendOpen === 'opened' ? 'line' : 'filled') : 'filled'
        }
        isDisabled={myInfo?.codeInputChance ? 'abled' : 'disabled'}
        size="middle"
        className="flex-col"
      >
        {myInfo?.codeInputChance ? (
          <>
            {recommendOpen === 'opened' ? (
              <div className="animate-fade self-start animate-normal animate-duration-300 animate-once animate-ease-linear">
                <Spacing direction="vertical" size={12} />
                <span className="text-caption text-pink">추천인코드 입력(1회 한정)</span>
                <Spacing direction="vertical" size={8} />
                <div className="flex w-full items-end">
                  <input
                    value={code}
                    style={{ WebkitAppearance: 'none', WebkitBorderRadius: 0 }}
                    className="h-[27px] w-[152px] border-b-[1px] py-[4px] text-body1 text-pink focus:outline-none"
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                    onChange={(e) => {
                      setCode(e.target.value)
                    }}
                  ></input>
                  <Spacing direction="horizontal" size={8} />
                  <div
                    className="flex h-[23px] w-[42px] items-center justify-center rounded bg-pink"
                    onClick={(e) => {
                      e.stopPropagation()
                      postReferralCode(code)
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
          </>
        ) : (
          <>
            <span className="self-start text-body2">추천인코드 입력하기(사용 완료)</span>
          </>
        )}
      </BoxButton>
    </span>
  )
}
export default RecommendButton
