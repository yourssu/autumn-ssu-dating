interface ImageButtonProps {
  src: string
  label: string
  onClick: React.MouseEventHandler
}

const ImageButton = ({ src, label, onClick }: ImageButtonProps) => {
  const isGender = src.includes('male')

  return (
    <div
      onClick={onClick}
      title={label}
      className="flex flex-col justify-center items-center cursor-pointer w-full h-full"
    >
      <img
        src={src}
        className={`${isGender ? 'w-[88px] h-[88px]' : 'w-[108px] h-[109px]'}`}
        title={label}
      />
      <p title={label} className="text-black">
        {label}
      </p>
    </div>
  )
}

export default ImageButton
