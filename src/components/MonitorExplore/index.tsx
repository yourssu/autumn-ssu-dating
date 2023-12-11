import InformationCard from './atoms/InformationCard'

import heartSpeechBubble from '../../assets/heartSpeechBubble.svg'
import Loading from '../../assets/transperant_loading.gif'
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

  const { data, isLoading, isFetching } = useGetRecentAnimals()

  return (
    <div className="flex h-[100dvh] w-screen flex-col items-center overflow-hidden overflow-y-scroll bg-[url('/src/assets/bg_palePink.png')] bg-cover pt-[50px] scrollbar-hide">
      {isLoading || isFetching ? (
        <div className="flex h-[100dvh] w-[100dvh] items-center justify-center">
          <img src={Loading} className="h-[400px] w-[400px]" alt="loading" title="loading"></img>
        </div>
      ) : (
        <>
          <img src={heartSpeechBubble as string} />
          <p className="text-titleBold text-pink">뿌슝이의 동물 SSU개팅</p>
          <p className="mb-10 text-button text-pink">
            실시간으로 추가되는 프로필들을 확인해보세요.
          </p>
          <div className="grid grid-cols-5 gap-x-10 gap-y-5">
            {data?.map((card) => (
              <InformationCard
                key={card.nickName}
                profile={card}
                animalSrc={animalSrc[card.animals]}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default MonitorExplore
