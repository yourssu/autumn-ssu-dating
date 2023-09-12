interface ImageButtonProps {
  src: string
  label: string
  onClick: React.MouseEventHandler
}

const ImageButton = ({ src, label, onClick }: ImageButtonProps) => {
  return (
    <div
      onClick={onClick}
      title={label}
      className="flex flex-col justify-center items-center cursor-pointer w-full h-full"
    >
      <img src={src} className="w-[88px] h-[88px]" title={label} />
      <p title={label} className="text-black">
        {label}
      </p>
    </div>
  )
}

export default ImageButton
