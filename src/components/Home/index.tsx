import { useState, useEffect, useRef } from 'react'

import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { authCode } from '../../apis/authApi'
import ticket from '../../assets/ticket.svg'
import useRecoilToast from '../../hooks/useRecoilToast'
import useToast from '../../hooks/useToast'
import { registerToastAtom } from '../../state/registerToastAtom'
import { ticketListAtom } from '../../state/ticketListAtom'
import { getAnimalOptions } from '../../utils/animalUtil'
import BoxButton from '../common/BoxButton'
import InputField from '../common/InputField'
import Spacing from '../common/Spacing'
import ToastMessage from '../common/ToastMessage'
import TypeButton from '../common/TypeButton'

const Home = () => {
  const [ticketList, setTicketList] = useRecoilState(ticketListAtom)

  const { stateToast, setStateToast, hideStateToast } = useToast()
  const { recoilStateToast, hideRecoilStateToast } = useRecoilToast(registerToastAtom)

  const [code, setCode] = useState<string>('')

  const animalOptions = getAnimalOptions()
  const animalCardRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()

  async function verifyCode() {
    try {
      const response = await authCode(code)
      setTicketList((prevTicketList) => [...prevTicketList, response.data.code])
      setStateToast('인증 완료! 이용권 한 장이 부여됩니다.')
      setCode('')
    } catch (error) {
      const authError = error as AxiosError
      switch (authError.response?.status) {
        case 400:
          setStateToast('10자리의 인증코드를 입력해주세요.')
          break

        case 404:
          setStateToast('존재하지 않는 인증코드예요.')
          break

        default:
          setStateToast('인증코드를 다시 한번 확인해주세요.')
          break
      }
    }
    hideStateToast()
  }

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
      <div className="flex">
        <InputField
          width={218}
          value={code}
          onChange={(e) => {
            setCode((e.target as HTMLInputElement).value)
          }}
          placeholder="인증코드를 입력해주세요."
        />
        <Spacing direction="horizontal" size={8} />
        <BoxButton isLine="line" size="extraSmall">
          <button
            className="w-full h-full rounded-2xl text-body2 focus:outline-none"
            onClick={verifyCode}
          >
            인증하기
          </button>
        </BoxButton>
      </div>
      <Spacing direction="vertical" size={12} />
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
      {stateToast && <ToastMessage>{stateToast}</ToastMessage>}
      {recoilStateToast.isShow && <ToastMessage>{recoilStateToast.toastMessage}</ToastMessage>}
      <Spacing direction="vertical" size={44}></Spacing>
    </div>
  )
}

export default Home
