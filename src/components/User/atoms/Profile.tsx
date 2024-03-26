import EllipseSeperator from '../../..//assets/ellipseSeperator.svg'
import CopyButton from '../../../assets/copy.svg'
import { useGetMyInfo } from '../../../hooks/useGetMyInfo'
import useRecoilToast from '../../../hooks/useRecoilToast'
import { userPageToastAtom } from '../../../state/userPageToastAtom'
import { animalServerToClient, getImageSrc } from '../../../utils/animalUtil'
import Spacing from '../../common/Spacing'

const Profile = () => {
  const { data, isLoading, isSuccess } = useGetMyInfo()

  const { setRecoilStateToast } = useRecoilToast(userPageToastAtom)

  if (isLoading) return
  return (
    <>
      {isSuccess && (
        <div className="flex flex-col items-center text-pink">
          <img className="h-[106px] w-[106px]" src={getImageSrc(data.animals)} alt={data.animals} />
          <p className="text-button">{data.nickName}</p>
          <div className="flex text-body2">
            <span>{data.mbti}</span>
            <Spacing direction="horizontal" size={4} />
            <img
              className="inline"
              src={EllipseSeperator as string}
              alt="공간 분리용 동그라미"
              title="공간 분리용 동그라미"
            />
            <Spacing direction="horizontal" size={4} />
            <span>{animalServerToClient(data.animals)}</span>
          </div>
          <Spacing direction="vertical" size={8}></Spacing>
          <div className="flex h-12 items-center justify-center rounded-[12px] border border-lightPink bg-white px-4 text-pink">
            <span>추천인 코드: {data.code}</span>
            <Spacing direction="horizontal" size={8}></Spacing>
            <img
              className="h-[14px] w-[14px] cursor-pointer"
              src={CopyButton as string}
              onClick={() => {
                data.code && navigator.clipboard.writeText(data?.code)
                setRecoilStateToast({
                  isShow: true,
                  toastMessage: '복사 완료!',
                })
              }}
              alt="복사하기 버튼"
              title="복사하기 버튼"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Profile
