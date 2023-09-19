import Reload from '../../../assets/reload.svg'

interface FloatingButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const FloatingButton = ({ ...props }: FloatingButtonProps) => {
  return (
    <button
      {...props}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      className="w-16 h-16 p-[18px] bg-white rounded-[999px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] border border-lightPink absolute bottom-[16px] right-[16px]"
    >
      <img
        src={Reload as string}
        alt="리로드"
        title="리로드"
        className="w-[21px] h-[23.917px]"
      ></img>
    </button>
  )
}

export default FloatingButton
