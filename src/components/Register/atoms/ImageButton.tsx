import { AnimalServerType } from '../../../types/register.type'

interface ImageButtonProps {
  src: string
  label: string
  animals?: AnimalServerType | undefined
  onClick: React.MouseEventHandler
}

const ImageButton = ({ src, label, animals, onClick }: ImageButtonProps) => {
  const isGender = src.includes('male')

  return (
    <div
      onClick={onClick}
      title={animals || label}
      className="flex h-full w-full cursor-pointer flex-col items-center justify-center"
    >
      <img
        src={src}
        className={`${isGender ? 'h-[88px] w-[88px]' : 'h-[109px] w-[108px]'}`}
        title={animals || label}
        alt={label}
      />
      <p title={animals || label} className="text-black">
        {label}
      </p>
    </div>
  )
}

export default ImageButton
