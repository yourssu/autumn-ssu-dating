import { FormEvent, useState, useEffect } from 'react'

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

  const { currentStep, next } = useMultistepForm([
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

  function moveNextStep() {
    next()
  }
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    alert('등록 완료! 둘러보기에서 다른 프로필을 구경해보세요 👀')
  }

  useEffect(() => {
    console.log(formData)
  }, [formData, setFormData])

  return (
    <div>
      <form onSubmit={onSubmit}>{currentStep}</form>
    </div>
  )
}

export default Register
