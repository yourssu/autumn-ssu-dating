import { FormEvent, useState, useEffect } from 'react'

import { AxiosError } from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import AnimalStep from './atoms/AnimalStep'
import GenderStep from './atoms/GenderStep'
import PersonalInfoStep from './atoms/PersonalInfoStep'

import { registerProfile } from '../../apis/registerApi'
import useMultistepForm from '../../hooks/useMultistepForm'
import useRecoilToast from '../../hooks/useRecoilToast'
import useToast from '../../hooks/useToast'
import { registerToastAtom } from '../../state/registerToastAtom'
import { signedAtom } from '../../state/signedAtom'
import { ticketAtom } from '../../state/ticketAtom'
import { FormData } from '../../types/register.type'
import { RegisterRequest } from '../../types/registerApi.type'
import Spacing from '../common/Spacing'
import ToastMessage from '../common/ToastMessage'

const Register = () => {
  const setTicketCount = useSetRecoilState(ticketAtom)
  const setSigned = useSetRecoilState(signedAtom)

  const { stateToast, showStateToast } = useToast()
  const { setRecoilStateToast } = useRecoilToast(registerToastAtom)

  const navigate = useNavigate()
  const location = useLocation()

  const [formData, setFormData] = useState<FormData>({
    gender: '',
    animals: 'ALL',
    nickName: '',
    mbti: '',
    introduce: '',
    contact: '',
    oauthName: '',
  })

  const { currentStepIndex, currentStep, next } = useMultistepForm([
    <GenderStep
      key={'성별'}
      {...formData}
      updateFields={updateFields}
      moveNextStep={moveNextStep}
    />,
    <AnimalStep
      key={'동물'}
      {...formData}
      updateFields={updateFields}
      moveNextStep={moveNextStep}
    />,
    <PersonalInfoStep key={'자기소개'} {...formData} updateFields={updateFields} />,
  ])

  function updateFields(fields: Partial<FormData>) {
    setFormData((prev) => {
      return { ...prev, ...fields }
    })
  }

  function updateStep(stepIndex: number) {
    const search = new URLSearchParams(location.search)
    search.set('step', stepIndex.toString())
    navigate(`${location.pathname}?${search.toString()}`)
  }

  function moveNextStep() {
    updateStep(currentStepIndex + 1)
    next()
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const profile: RegisterRequest = { ...formData }
    const gender = formData.gender

    if ('gender' in profile) delete profile.gender

    try {
      const response = await registerProfile({ gender, profile })
      setTicketCount(response.ticket)
      setSigned(true)
      setRecoilStateToast({
        isShow: true,
        toastMessage:
          '등록 완료! 내 이상형 찾기에서\n다른 사람들이 작성한 프로필을 구경해보세요 👀',
      })
      navigate('/')
    } catch (error) {
      const authError = error as AxiosError
      switch (authError.response?.status) {
        case 400:
          showStateToast('이미 존재하는 닉네임이에요.')
          break

        case 404:
          showStateToast('로그인 정보가 올바르지 않습니다. 다시 로그인해 주세요.')
          break

        default:
          showStateToast('등록에 실패했습니다.')
          break
      }
    }
  }

  function handlePopState() {
    const currentURL = window.location.href

    if (currentURL.includes('step=')) {
      navigate('/')
    }
  }

  useEffect(() => {
    updateStep(0)
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    if (location.state === null) {
      navigate('/')
    } else {
      setFormData((prev) => {
        return { ...prev, oauthName: location.state.code }
      })
    }
  }, [])

  return (
    <div className=" flex h-[calc(100%-44px)] w-screen flex-col items-center overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col items-center">
        <form onSubmit={onSubmit}>{currentStep}</form>
        {stateToast && <ToastMessage>{stateToast}</ToastMessage>}
      </div>
      <Spacing direction="vertical" size={88}></Spacing>
    </div>
  )
}

export default Register
