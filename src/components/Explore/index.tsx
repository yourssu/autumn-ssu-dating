import { useState } from 'react'

import BoxButton from '../common/BoxButton'
import Chip from '../common/Chip'
import InputField from '../common/InputField'
import Spacing from '../common/Spacing'
import ToastMessage from '../common/ToastMessage'
import TypeButton from '../common/TypeButton'

const Explore = () => {
  const [test, setTest] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center">
      <Spacing direction="vertical" size={20}></Spacing>
      <div className="w-screen flex flex-row justify-around">
        <TypeButton mode="white">
          <span>EEEE</span>
        </TypeButton>
        <TypeButton mode="pink">
          <span>EEEE</span>
        </TypeButton>
      </div>
      <Spacing direction="vertical" size={20}></Spacing>
      <BoxButton isDisabled="disabled" isLine="filled" size="large">
        <span>EEEE</span>
      </BoxButton>
      <BoxButton isDisabled="abled" isLine="filled" size="large">
        <span>EEEE</span>
      </BoxButton>
      <BoxButton isDisabled="abled" isLine="line" size="large">
        <span>EEEE</span>
      </BoxButton>
      <BoxButton isDisabled="disabled" isLine="filled" size="small">
        <span>EEEE</span>
      </BoxButton>
      <BoxButton isDisabled="abled" isLine="line" size="small">
        <span>EEEE</span>
      </BoxButton>
      <BoxButton isDisabled="disabled" isLine="line" size="small">
        <span>EEEE</span>
      </BoxButton>
      <Spacing direction="vertical" size={20}></Spacing>
      <InputField placeholder="텍스트 입력" />
      <Spacing direction="vertical" size={20}></Spacing>
      {test ? (
        <ToastMessage>여기를 누르지 말라니까요??</ToastMessage>
      ) : (
        <div className="w-[374px] h-[50px] mb-[22px]"></div>
      )}
      <button
        onClick={() => {
          setTest(true)
          const timer = setTimeout(() => {
            setTest(false)
          }, 2000)
          return () => {
            clearTimeout(timer)
          }
        }}
      >
        누르지 마세요
      </button>
      <Spacing direction="vertical" size={20}></Spacing>
      <div className="w-screen flex flex-row justify-around">
        <Chip isSelected="notSelected">
          <div>🤔</div>
        </Chip>
        <Chip isSelected="selected">
          <div>🤔</div>
        </Chip>
      </div>
    </div>
  )
}

export default Explore
