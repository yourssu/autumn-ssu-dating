import { useNavigate } from 'react-router-dom'

import { List } from './atoms/List'

const UserPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-[calc(100%-44px)] select-none flex-col items-center overflow-y-scroll scrollbar-hide">
      <div className="mt-6 h-3 w-screen bg-palePink"></div>
      <List title="프로필 관리">
        <List.Item
          onClick={() => {
            navigate('edit')
          }}
        >
          내 프로필 수정하기
        </List.Item>
        <List.Item
          onClick={() => {
            navigate('contact')
          }}
        >
          내가 가져온 프로필 보기
        </List.Item>
      </List>

      <List title="서비스 정보">
        <List.Item
          onClick={() => {
            window.open('link1', '_blank', 'noreferrer')
          }}
        >
          이용약관
        </List.Item>
        <List.Item
          onClick={() => {
            window.open('link2', '_blank', 'noreferrer')
          }}
        >
          개인정보 처리방침
        </List.Item>
      </List>

      <List title="계정 관리">
        <List.Item onClick={() => {}} hasButton={false}>
          로그아웃
        </List.Item>
        <List.Item onClick={() => {}} hasButton={false}>
          <p className="text-caption text-gray">회원탈퇴</p>
        </List.Item>
      </List>
    </div>
  )
}

export default UserPage
