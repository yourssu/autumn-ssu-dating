import { useState, useEffect, useRef } from 'react'

import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import Policy from './atoms/Policy'

import { postReferralCode } from '../../apis/postReferralCode'
import myPageIcon from '../../assets/myPageIcon.svg'
import ticket from '../../assets/ticket.svg'
import useRecoilToast from '../../hooks/useRecoilToast'
import useToast from '../../hooks/useToast'
import { registerToastAtom } from '../../state/registerToastAtom'
import { ticketAtom } from '../../state/ticketAtom'
import { getAnimalOptions } from '../../utils/animalUtil'
import BoxButton from '../common/BoxButton'
import InputField from '../common/InputField'
import Spacing from '../common/Spacing'
import ToastMessage from '../common/ToastMessage'
import TypeButton from '../common/TypeButton'

const Home = () => {
  const isLogged = false // 로그인 기능 추가 후 로그인 여부로 수정 예정
  return (
    <div className="flex h-full select-none flex-col items-center justify-center">
      {isLogged ? <AfterLogin /> : <BeforeLogin />}
    </div>
  )
}

const AfterLogin = () => {
  const [ticketCount, setTicketCount] = useRecoilState(ticketAtom)

  const { stateToast, showStateToast } = useToast()
  const { recoilStateToast, hideRecoilStateToast } = useRecoilToast(registerToastAtom)

  const [code, setCode] = useState<string>('')

  const animalOptions = getAnimalOptions()
  const animalCardRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()

  async function verifyCode() {
    try {
      const response = await postReferralCode(code)
      setTicketCount(response.data.ticket)
      showStateToast('추천인 코드 인증 완료! 이용권 한 장이 충전됐어요.')
      setCode('')
    } catch (error) {
      const authError = error as AxiosError
      switch (authError.response?.status) {
        case 400:
          showStateToast('10자리의 추천인 코드를 입력해주세요.')
          break

        case 404:
          showStateToast('존재하지 않는 추천인 코드예요.')
          break

        default:
          showStateToast('추천인 코드를 다시 한번 확인해주세요.')
          break
      }
    }
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
    <>
      <div className="flex w-screen justify-end px-[23px]">
        <img
          src={myPageIcon as string}
          alt="마이페이지"
          title="마이페이지"
          onClick={() => {
            navigate('/user')
          }}
        />
      </div>
      <Spacing direction="vertical" size={10} />
      <p className="whitespace-pre-line text-center text-titleBold text-pink">
        {'돌아온 뿌슝이의\n동물 SSU개팅'}
      </p>
      <Spacing direction="vertical" size={15} />
      <div className="flex">
        <InputField
          width={218}
          value={code}
          onChange={(e) => {
            setCode((e.target as HTMLInputElement).value)
          }}
          placeholder="추천인 코드를 입력해주세요."
        />
        <Spacing direction="horizontal" size={8} />
        <BoxButton isLine="line" size="extraSmall">
          <button
            className="h-full w-full rounded-2xl text-body2 focus:outline-none"
            onClick={verifyCode}
          >
            이용권 받기
          </button>
        </BoxButton>
      </div>
      <Spacing direction="vertical" size={12} />
      <div className="flex justify-center text-body2">
        <img src={ticket as string} className="h-[22px]" alt="티켓 아이콘" />
        <Spacing direction="horizontal" size={4} />
        <p>
          이용권 x <span className="text-pink">{ticketCount}</span>
        </p>
      </div>
      <Spacing direction="vertical" size={40} />
      <div
        className="grid w-full grid-flow-col gap-x-5 overflow-scroll scrollbar-hide"
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
          className="h-full w-full rounded-[12px]"
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
          className="h-full w-full rounded-[12px]"
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
    </>
  )
}

const BeforeLogin = () => {
  const navigate = useNavigate()

  return (
    <>
      <p className="whitespace-pre-line text-center text-titleBold text-pink">
        {'돌아온 뿌슝이의\n동물 SSU개팅'}
      </p>
      <Spacing direction="vertical" size={437} />
      <BoxButton size="large">
        <button
          className="h-full w-full rounded-[12px]"
          onClick={() => {
            navigate('/login') // 백엔드에서 제공하는 로그인 링크로 수정
          }}
        >
          SSU개팅 진행하기
        </button>
      </BoxButton>
      <Spacing direction="vertical" size={16} />
      <Policy />
    </>
  )
}

export default Home
