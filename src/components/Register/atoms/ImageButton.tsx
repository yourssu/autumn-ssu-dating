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
      className="flex flex-col justify-center items-center cursor-pointer w-full h-full"
    >
      <img
        src={src}
        className={`${isGender ? 'w-[88px] h-[88px]' : 'w-[108px] h-[109px]'}`}
        title={animals || label}
      />
      <p title={animals || label} className="text-black">
        {label}
      </p>
    </div>
  )
}

export default ImageButton
