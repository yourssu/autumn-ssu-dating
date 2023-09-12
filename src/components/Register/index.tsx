import { FormEvent, useState, useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import AnimalStep from './AnimalStep'
import GenderStep from './GenderStep'
import PersonalInfoStep from './PersonalInfoStep'

import useMultistepForm from '../../hooks/useMultistepForm'
import { FormData } from '../../types/register.type'

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    gender: '',
    animal: '',
    nickname: '',
    mbti: '',
    appeal: '',
    tel: '',
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

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    alert('등록 완료! 둘러보기에서 다른 프로필을 구경해보세요 👀')
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
    </div>
  )
}

export default Register
