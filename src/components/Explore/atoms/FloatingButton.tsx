import Reload from '../../../assets/reload.svg'

interface FloatingButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const FloatingButton = ({ ...props }: FloatingButtonProps) => {
  return (
    <button
      {...props}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      className="absolute bottom-[16px] right-[16px] h-16 w-16 rounded-[999px] border border-lightPink bg-white p-[18px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)]"
    >
      <img
        src={Reload as string}
        alt="리로드"
        title="리로드"
        className="h-[23.917px] w-[21px]"
      ></img>
    </button>
  )
}

export default FloatingButton
