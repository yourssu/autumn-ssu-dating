import { useState, useEffect } from 'react'

import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'

import AnimalSlide from './atoms/AnimalSlide'
import Policy from './atoms/Policy'

import { postReferralCode } from '../../apis/postReferralCode'
import ticket from '../../assets/ticket.svg'
import { LOGIN_LINK } from '../../constant'
import useRecoilToast from '../../hooks/useRecoilToast'
import useToast from '../../hooks/useToast'
import { registerToastAtom } from '../../state/registerToastAtom'
import { signedAtom } from '../../state/signedAtom'
import { ticketAtom } from '../../state/ticketAtom'
import BoxButton from '../common/BoxButton'
import InputField from '../common/InputField'
import Spacing from '../common/Spacing'
import ToastMessage from '../common/ToastMessage'

const Home = () => {
  const signed = useRecoilValue(signedAtom)
  return (
    <div className="flex h-full select-none flex-col items-center justify-center">
      {signed ? <AfterLogin /> : <BeforeLogin />}
    </div>
  )
}

const AfterLogin = () => {
  const [ticketCount, setTicketCount] = useRecoilState(ticketAtom)

  const { stateToast, showStateToast } = useToast()
  const { recoilStateToast, hideRecoilStateToast } = useRecoilToast(registerToastAtom)

  const [code, setCode] = useState<string>('')

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
          showStateToast('자기 자신의 코드는 등록할 수 없습니다.')
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

  return (
    <>
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
      <AnimalSlide />
      <Spacing direction="vertical" size={48} />
      <BoxButton size="large">
        <button
          className="h-full w-full rounded-[12px]"
          onClick={() => {
            navigate('/user')
          }}
        >
          내 프로필 보기
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
  return (
    <>
      <p className="whitespace-pre-line text-center text-titleBold text-pink">
        {'돌아온 뿌슝이의\n동물 SSU개팅'}
      </p>
      <Spacing direction="vertical" size={437} />
      <div className="flex w-screen max-w-[350px] flex-col items-center px-4">
        <a href="/explore" className="underline underline-offset-2">
          그냥 둘러볼래요
        </a>
        <Spacing direction="vertical" size={12} />
        <button
          className="h-[56px] w-full rounded-[8px] bg-[#ffe812] text-body1"
          onClick={() => {
            window.location.assign(LOGIN_LINK)
          }}
        >
          카카오톡으로 로그인
        </button>
        <Spacing direction="vertical" size={16} />
        <Policy />
      </div>
    </>
  )
}

export default Home
