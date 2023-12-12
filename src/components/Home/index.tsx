import { useEffect, useRef } from 'react'

import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import ticket from '../../assets/ticket.svg'
import useRecoilToast from '../../hooks/useRecoilToast'
import { registerToastAtom } from '../../state/registerToastAtom'
import { ticketListAtom } from '../../state/ticketListAtom'
import { getAnimalOptions } from '../../utils/animalUtil'
import BoxButton from '../common/BoxButton'
import Spacing from '../common/Spacing'
import ToastMessage from '../common/ToastMessage'
import TypeButton from '../common/TypeButton'

const Home = () => {
  const ticketList = useRecoilValue(ticketListAtom)

  const { recoilStateToast, hideRecoilStateToast } = useRecoilToast(registerToastAtom)

  const animalOptions = getAnimalOptions()
  const animalCardRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()

  useEffect(() => {
    hideRecoilStateToast()
  }, [recoilStateToast, hideRecoilStateToast])

  useEffect(() => {
    let scrollInterval = 1
    const scrollBox = animalCardRef.current as HTMLDivElement
    const scrollWidth = scrollBox.scrollWidth
    const clientWidth = scrollBox.clientWidth

    const timer = setInterval(() => {
      const scrollLeft = scrollBox.scrollLeft
      animalCardRef.current?.scrollTo(scrollLeft + scrollInterval, 0)

      if (scrollBox.scrollLeft === 0 || scrollBox.scrollLeft + clientWidth == scrollWidth) {
        scrollInterval *= -1
      }
    }, 20)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p className="text-center text-pink text-titleBold whitespace-pre-line">
        {'뿌슝이의\n동물 SSU개팅'}
      </p>
      <Spacing direction="vertical" size={15} />
      <div className="flex justify-center text-body2">
        <img src={ticket as string} className="h-[22px]" alt="티켓 아이콘" />
        <Spacing direction="horizontal" size={4} />
        <p>
          이용권 x <span className="text-pink">{ticketList.length}</span>
        </p>
      </div>
      <Spacing direction="vertical" size={40} />
      <div
        className="grid grid-flow-col gap-x-5 overflow-scroll w-full scrollbar-hide"
        ref={animalCardRef}
      >
        {animalOptions.map((option, index) => (
          <TypeButton key={index}>
            <img src={option.src} />
          </TypeButton>
        ))}
      </div>
      <Spacing direction="vertical" size={48} />
      <BoxButton size="large">
        <button
          className="w-full h-full rounded-[12px]"
          onClick={() => {
            navigate('/register')
          }}
        >
          프로필 등록하기
        </button>
      </BoxButton>
      <Spacing direction="vertical" size={16} />
      <BoxButton size="large">
        <button
          className="w-full h-full rounded-[12px]"
          onClick={() => {
            navigate('/explore')
          }}
        >
          내 이상형 찾기
        </button>
      </BoxButton>
      {recoilStateToast.isShow && <ToastMessage>{recoilStateToast.toastMessage}</ToastMessage>}
      <Spacing direction="vertical" size={44}></Spacing>
    </div>
  )
}

export default Home
