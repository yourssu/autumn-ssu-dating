import dear from '../../assets/testFile.jpg'

interface ImageButtonProps {
  label: string
  onClick: React.MouseEventHandler
}

const ImageButton = ({ label, onClick }: ImageButtonProps) => {
  return (
    <div onClick={onClick} title={label} className="cursor-pointer border">
      <img src={dear} className="w-[30px] h-[30px]" title={label} />
      <p title={label}>{label}</p>
    </div>
  )
}

export default ImageButton
