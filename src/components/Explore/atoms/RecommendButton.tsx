import { useState } from 'react'

import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'

import { postReferralCode } from '../../../apis/postReferralCode'
import useRecoilToast from '../../../hooks/useRecoilToast'
import { exploreToastAtom } from '../../../state/exploreToastAtom'
import { ticketAtom } from '../../../state/ticketAtom'
import { ServerError } from '../../../types/error.type'
import { OpenType } from '../../../types/explore.type'
import BoxButton from '../../common/BoxButton'
import Spacing from '../../common/Spacing'

interface RecommendButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  recommendOpen: OpenType
}

const RecommendButton = ({ recommendOpen, ...props }: RecommendButtonProps) => {
  const setTicketCount = useSetRecoilState(ticketAtom)
  const { setRecoilStateToast } = useRecoilToast(exploreToastAtom)
  const [code, setCode] = useState<string>('')

  async function verifyCode() {
    try {
      const response = await postReferralCode(code)
      setTicketCount(response.data.ticket)
      setRecoilStateToast({
        isShow: true,
        toastMessage: '추천인 코드 인증 완료! 이용권 한 장이 충전됐어요.',
      })
    } catch (error) {
      const authError = error as AxiosError<ServerError>
      switch (authError.response?.status) {
        case 400:
          setRecoilStateToast({
            isShow: true,
            toastMessage: authError.response.data.message,
          })
          break

        case 404:
          setRecoilStateToast({
            isShow: true,
            toastMessage: '존재하지 않는 추천인 코드예요.',
          })
          break

        default:
          setRecoilStateToast({
            isShow: true,
            toastMessage: '추천인 코드를 다시 한번 확인해주세요.',
          })
          break
      }
    }
  }
  return (
    <span {...props}>
      <BoxButton
        isLine={recommendOpen === 'opened' ? 'line' : 'filled'}
        size="middle"
        className="flex-col"
      >
        {recommendOpen === 'opened' ? (
          <div className="animate-fade self-start animate-normal animate-duration-300 animate-once animate-ease-linear">
            <Spacing direction="vertical" size={12} />
            <span className="text-caption text-pink">추천인코드 입력(1회 한정)</span>
            <Spacing direction="vertical" size={8} />
            <div className="flex w-full items-end">
              <input
                value={code}
                className="h-[27px] w-[152px] border-b-[1px] py-[4px] text-body2 text-pink focus:outline-none"
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
                  verifyCode()
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
