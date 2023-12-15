import ellipse from '../../../assets/ellipseSeperator.svg'
import { UsersResponse } from '../../../types/getAnimals.type'
import { animalServerToClient } from '../../../utils/animalUtil'
import Spacing from '../../common/Spacing'

interface InformationCardProps {
  profile: UsersResponse
  animalSrc: string
}

const InformationCard = ({ profile, animalSrc: src }: InformationCardProps) => {
  const { nickName, mbti, animals, introduce, gender } = profile

  return (
    <div className="flex h-[343px] w-[224px] flex-col items-center rounded-[20px] bg-white text-body2 text-pink shadow-typeBtn">
      <img src={src} className="h-[106px] w-[106px]" />
      <div className="px-5 pb-5 text-center">
        <p className="text-button">{nickName}</p>
        <Spacing direction="vertical" size={4} />
        <div className="flex justify-center">
          {mbti}
          <img src={ellipse as string} className="mx-1" />
          {gender === 'MALE' ? '남자' : '여자'}
          <img src={ellipse as string} className="mx-1" />
          {animalServerToClient(animals)}
        </div>
        <Spacing direction="vertical" size={16} />
        <p className="text-gray">{introduce}</p>
      </div>
    </div>
  )
}

export default InformationCard
