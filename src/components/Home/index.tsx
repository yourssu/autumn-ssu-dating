import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import ticket from '../../assets/ticket.svg'
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
  const [registerToast, setRegisterToast] = useRecoilState(registerToastAtom)

  const [code, setCode] = useState<string>('')

  const animalOptions = getAnimalOptions()

  const navigate = useNavigate()

  const verifyCode = () => {
    alert(code)
    setTicketList((prevTicketList) => [...prevTicketList, code])
  }

  useEffect(() => {
    if (registerToast.isShow) {
      const timer = setTimeout(() => {
        setRegisterToast({ isShow: false, toastMessage: '' })
      }, 2000) // 애니메이션에 걸리는 시간과 동일하게 설정

      return () => {
        clearTimeout(timer)
      }
    }
  }, [])

  return (
    <div className="bg-palePink bg-opacity-50">
      <p className="w-[342px] text-center text-pink text-titleBold whitespace-pre-line">
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
      <div className="w-[342px] flex justify-center text-body2">
        <img src={ticket as string} className="h-[22px]" alt="티켓 아이콘" />
        <Spacing direction="horizontal" size={4} />
        <p>
          이용권 x <span className="text-pink">{ticketList.length}</span>
        </p>
      </div>
      <Spacing direction="vertical" size={40} />
      <div className="grid grid-flow-col gap-x-5 overflow-scroll w-[343px] scrollbar-hide">
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
      {registerToast.isShow && <ToastMessage>{registerToast.toastMessage}</ToastMessage>}
    </div>
  )
}

export default Home
