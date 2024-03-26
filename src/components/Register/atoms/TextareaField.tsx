interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  height?: number
}

const TextareaField = ({ height = 127, ...props }: TextareaFieldProps) => {
  const defaultStyle =
    'p-4 bg-white rounded-xl text-pink placeholder-gray font-body1 resize-none focus:outline-none focus:shadow-inputField'
  const shadowStyle = !props.value && 'shadow-inputField'

  return (
    <textarea
      {...props}
      className={`${defaultStyle} ${shadowStyle}`}
      style={{ height: `${height}px` }}
    />
  )
}

export default TextareaField
