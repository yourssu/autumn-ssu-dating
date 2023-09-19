import Spacing from '../common/Spacing'

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <img src="/404ppusung.png" alt="404뿌슝" title="404뿌슝" className="w-[320px]" />
      <div className="text-[15px]">요청하신 페이지를 찾을 수 없어요.</div>
      <div className="text-[15px]">불편을 드려 죄송합니다ㅠ</div>
      <Spacing direction="vertical" size={24} />
      <a href="https://ppussung-dating.soomsil.de/" className="text-black underline text-[11px]">
        메인 페이지로 돌아가기
      </a>
    </div>
  )
}

export default NotFound
