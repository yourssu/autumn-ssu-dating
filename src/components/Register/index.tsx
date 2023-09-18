import { FormEvent, useState, useEffect } from 'react'

import { AxiosError } from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'

import AnimalStep from './AnimalStep'
import GenderStep from './GenderStep'
import PersonalInfoStep from './PersonalInfoStep'

import { registerProfile } from '../../apis/registerApi'
import useMultistepForm from '../../hooks/useMultistepForm'
import useToast from '../../hooks/useToast'
import { registerToastAtom } from '../../state/registerToastAtom'
import { ticketListAtom } from '../../state/ticketListAtom'
import { FormData } from '../../types/register.type'
import { RegisterRequest } from '../../types/registerApi.type'
import Spacing from '../common/Spacing'
import ToastMessage from '../common/ToastMessage'

const Register = () => {
  const [ticketList, setTicketList] = useRecoilState(ticketListAtom)

  const { stateToast, setStateToast, hideStateToast } = useToast()
  const setSuccessToast = useSetRecoilState(registerToastAtom)

  const navigate = useNavigate()
  const location = useLocation()

  const [formData, setFormData] = useState<FormData>({
    gender: '',
    animals: 'ALL',
    nickName: '',
    mbti: '',
    introduce: '',
    contact: '',
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
    const profile: RegisterRequest = { ...formData, code: ticketList[0] }
    const gender = formData.gender

    if ('gender' in profile) delete profile.gender

    try {
      await registerProfile({ gender, profile })
      const currentTicketList = ticketList.slice(1)
      setTicketList(currentTicketList)
      setSuccessToast({
        isShow: true,
        toastMessage: '등록 완료! 둘러보기에서 다른 프로필을 구경해보세요 👀',
      })
      navigate('/')
    } catch (error) {
      const authError = error as AxiosError
      switch (authError.response?.status) {
        case 400:
          setStateToast('이미 존재하는 닉네임이에요.')
          break

        case 404:
          setStateToast('존재하지 않는 인증코드에요.')
          break

        default:
          setStateToast('등록에 실패했습니다.')
          break
      }
      hideStateToast()
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

  return (
    <div className=" w-screen h-[calc(100%-44px)] overflow-y-scroll flex flex-col items-center">
      <div className="flex flex-col items-center">
        <form onSubmit={onSubmit}>{currentStep}</form>
        {stateToast && <ToastMessage className="absolute bottom-[22px]">{stateToast}</ToastMessage>}
      </div>
      <Spacing direction="vertical" size={88}></Spacing>
    </div>
  )
}

export default Register
