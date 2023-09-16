import { useState } from 'react'

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  width?: number
  height?: number
}

const InputField = ({ width = 193, height = 48, ...props }: InputFieldProps) => {
  // 임의 -> 추후에 수정될 수도 있음
  const [inputValue, setInputValue] = useState('')

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value)
      }}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`px-4 bg-white rounded-xl flex justify-start items-center focus:outline-none text-pink placeholder-gray text-body2 focus:shadow-inputField`}
      {...props}
    ></input>
  )
}

export default InputField
