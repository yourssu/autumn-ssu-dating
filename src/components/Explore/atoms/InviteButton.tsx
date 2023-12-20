import CopyButton from '../../../assets/copy.svg'
import { useGetMyInfo } from '../../../hooks/useGetMyInfo'
import useRecoilToast from '../../../hooks/useRecoilToast'
import { exploreToastAtom } from '../../../state/exploreToastAtom'
import { OpenType } from '../../../types/explore.type'
import BoxButton from '../../common/BoxButton'
import Spacing from '../../common/Spacing'

interface InviteButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  inviteOpen: OpenType
}

const InviteButton = ({ inviteOpen, ...props }: InviteButtonProps) => {
  const { data } = useGetMyInfo()
  const { setRecoilStateToast } = useRecoilToast(exploreToastAtom)

  return (
    <span {...props}>
      <BoxButton
        isLine={inviteOpen === 'opened' ? 'line' : 'filled'}
        size="middle"
        className="flex-col"
      >
        {inviteOpen === 'opened' ? (
          <div className="animate-fade self-start animate-normal animate-duration-300 animate-once animate-ease-linear">
            <Spacing direction="vertical" size={12} />
            <span className="text-caption text-pink">
              <div>친구가 로그인할 때 내 추천인 코드를</div>
              <div>입력하면 이용권이 하나 충전됩니다</div>
            </span>
            <Spacing direction="vertical" size={8} />
            <div className="flex w-full items-end">
              <span className="text-caption text-pink">{`내 추천인 코드: ${data?.code}`}</span>
              <Spacing direction="horizontal" size={8} />
              <img
                className="h-[14px] w-[14px] cursor-pointer"
                src={CopyButton as string}
                onClick={(e) => {
                  e.stopPropagation()
                  data?.code && navigator.clipboard.writeText(data?.code)
                  setRecoilStateToast({
                    isShow: true,
                    toastMessage: '복사 완료!',
                  })
                }}
                alt="복사하기 버튼"
                title="복사하기 버튼"
              />
            </div>

            <Spacing direction="vertical" size={12} />
          </div>
        ) : (
          <span className="self-start text-body2">친구 초대하기</span>
        )}
      </BoxButton>
    </span>
  )
}
export default InviteButton
