import EllipseSeperator from '../../..//assets/ellipseSeperator.svg'
import CopyButton from '../../../assets/copy.svg'
import { ANIMAL_OPTIONS_FEMALE, ANIMAL_OPTIONS_MALE } from '../../../constant'
import useRecoilToast from '../../../hooks/useRecoilToast'
import { userPageToastAtom } from '../../../state/userPageToastAtom'
import { AnimalServerType } from '../../../types/register.type'
import { animalServerToClient } from '../../../utils/animalUtil'
import Spacing from '../../common/Spacing'

// 가짜 데이터
const data = {
  gender: '남자',
  animals: 'DOG' as AnimalServerType,
  nickName: '멍멍이',
  mbti: 'INTP',
  code: 'fakecooode',
}

const Profile = () => {
  const { gender, animals, nickName, mbti, code } = data
  const animalsKor = animalServerToClient(animals)

  const { setRecoilStateToast } = useRecoilToast(userPageToastAtom)

  return (
    <div className="flex flex-col items-center text-pink">
      <img
        className="h-[106px] w-[106px]"
        src={
          gender === 'female'
            ? ANIMAL_OPTIONS_FEMALE.find((val) => val.label === animalsKor)?.src
            : ANIMAL_OPTIONS_MALE.find((val) => val.label === animalsKor)?.src
        }
      />
      <p className="text-button">{nickName}</p>
      <div className="flex text-body2">
        <span>{mbti}</span>
        <Spacing direction="horizontal" size={4} />
        <img
          className="inline"
          src={EllipseSeperator as string}
          alt="공간 분리용 동그라미"
          title="공간 분리용 동그라미"
        />
        <Spacing direction="horizontal" size={4} />
        <span>{animalsKor}</span>
      </div>
      <Spacing direction="vertical" size={8}></Spacing>
      <div className="flex h-12 items-center justify-center rounded-[12px] border border-lightPink bg-white px-4 text-pink">
        <span>추천인 코드: {code}</span>
        <Spacing direction="horizontal" size={8}></Spacing>
        <img
          className="h-[14px] w-[14px] cursor-pointer"
          src={CopyButton as string}
          onClick={() => {
            code && navigator.clipboard.writeText(code)
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
  )
}

export default Profile
