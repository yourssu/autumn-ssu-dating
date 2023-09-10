import { FormEvent, useState, useEffect } from 'react'

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
    <div key="gender">
      성별
      <br />
      <input onChange={(e) => updateFields({ gender: e.target.value })} className="border" />
      <button type="button" onClick={moveNextStep}>
        다음 단계로
      </button>
    </div>,
    <div key="animal">
      동물
      <br />
      <input onChange={(e) => updateFields({ animal: e.target.value })} className="border" />
      <button type="button" onClick={moveNextStep}>
        다음 단계로
      </button>
    </div>,
    <div key="introduce">
      자기소개
      <br />
      <button type="submit" onClick={moveNextStep}>
        등록하기
      </button>
    </div>,
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
