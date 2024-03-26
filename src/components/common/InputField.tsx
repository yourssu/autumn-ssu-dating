interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: number
  height?: number
}

const InputField = ({ width = 193, height = 48, ...props }: InputFieldProps) => {
  const defaultStyle =
    'px-4 bg-white rounded-xl flex justify-start items-center focus:outline-none text-pink placeholder-gray text-body1 focus:shadow-inputField'
  const shadowStyle = !props.value && 'shadow-inputField'

  return (
    <input
      type="text"
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`${defaultStyle} ${shadowStyle}`}
      {...props}
    ></input>
  )
}

export default InputField
