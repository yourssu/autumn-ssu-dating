import { FormEvent } from 'react'

import useMultistepForm from '../../hooks/useMultistepForm'

const Register = () => {
  const { currentStep, next } = useMultistepForm([
    <div key="gender">
      성별
      <br />
      <button type="button" onClick={moveNextStep}>
        다음 단계로
      </button>
    </div>,
    <div key="animal">
      동물
      <br />
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

  function moveNextStep() {
    next()
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    alert('등록 완료! 둘러보기에서 다른 프로필을 구경해보세요 👀')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>{currentStep}</form>
    </div>
  )
}

export default Register
