import InformationCard from './atoms/InformationCard'

import heartSpeechBubble from '../../assets/heartSpeechBubble.svg'
import { useGetRecentAnimals } from '../../hooks/useGetAnimals'
import { AnimalServerType } from '../../types/register.type'

const MonitorExplore = () => {
  const animalSrc: { [key in AnimalServerType]: string } = {
    ALL: '',
    BEAR: '/bearIcon.png',
    CAT: '/catIcon.png',
    DINO: '/dinoIcon.png',
    DOG: '/dogIcon.png',
    FOX: '/foxIcon.png',
    HAMSTER: '/hamsterIcon.png',
    PUSSUNG: '/ppussungIcon.png',
    RABBIT: '/rabbitIcon.png',
    WOLF: '/wolfIcon.png',
  }

  const { data } = useGetRecentAnimals()

  return (
    <div className="bg-[url('/src/assets/bg_palePink.png')] w-screen h-[100dvh] bg-cover overflow-hidden flex flex-col items-center overflow-y-scroll scrollbar-hide pt-[50px]">
      <img src={heartSpeechBubble as string} />
      <p className="text-titleBold text-pink">뿌슝이의 동물 SSU개팅</p>
      <p className="text-button text-pink mb-10">실시간으로 추가되는 프로필들을 확인해보세요.</p>
      <div className="grid grid-cols-5 gap-x-10 gap-y-5">
        {data?.map((card) => (
          <InformationCard key={card.nickName} profile={card} animalSrc={animalSrc[card.animals]} />
        ))}
      </div>
    </div>
  )
}

export default MonitorExplore
