import { FormEvent, useState, useEffect } from 'react'

import { AxiosError } from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import AnimalStep from './AnimalStep'
import GenderStep from './GenderStep'
import PersonalInfoStep from './PersonalInfoStep'

import { registerProfile } from '../../apis/registerApi'
import useMultistepForm from '../../hooks/useMultistepForm'
import { ticketListAtom } from '../../state/ticketListAtom'
import { FormData } from '../../types/register.type'
import { RegisterRequest } from '../../types/registerApi.type'
import ToastMessage from '../common/ToastMessage'

const Register = () => {
  const [ticketList, setTicketList] = useRecoilState(ticketListAtom)

  const [formData, setFormData] = useState<FormData>({
    gender: '',
    animals: '',
    nickName: '',
    mbti: '',
    introduce: '',
    contact: '',
  })
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState<string>('')

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

  const navigate = useNavigate()
  const location = useLocation()

  function updateStep(stepIndex: number) {
    const search = new URLSearchParams(location.search)
    search.set('step', stepIndex.toString())
    navigate(`${location.pathname}?${search.toString()}`)
  }

  function updateFields(fields: Partial<FormData>) {
    setFormData((prev) => {
      return { ...prev, ...fields }
    })
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
      setToastMessage('등록 완료! 둘러보기에서 다른 프로필을 구경해보세요 👀')
    } catch (error) {
      const authError = error as AxiosError
      console.log(authError)
      switch (authError.response?.status) {
        case 400:
          setToastMessage('이미 존재하는 닉네임이에요.')
          break

        case 404:
          setToastMessage('존재하지 않는 인증코드에요.')
          break

        default:
          setToastMessage('등록에 실패했습니다.')
          break
      }
    }
    displayToast()
  }

  function displayToast() {
    setShowToast(true)
    const timer = setTimeout(() => {
      setShowToast(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }

  useEffect(() => {
    console.log(formData)
  }, [formData, setFormData])

  useEffect(() => {
    updateStep(0)
  }, [])

  return (
    <div>
      <form onSubmit={onSubmit}>{currentStep}</form>
      {showToast && <ToastMessage>{toastMessage}</ToastMessage>}
    </div>
  )
}

export default Register
