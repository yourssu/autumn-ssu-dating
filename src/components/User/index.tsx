import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'

import { List } from './atoms/List'
import Profile from './atoms/Profile'

import { signOut } from '../../apis/signOut'
import { withdraw } from '../../apis/withdraw'
import { POLICY_LINK, PRIVACY_LINK } from '../../constant'
import useRecoilToast from '../../hooks/useRecoilToast'
import { signedAtom } from '../../state/signedAtom'
import { ticketAtom } from '../../state/ticketAtom'
import { userPageToastAtom } from '../../state/userPageToastAtom'
import { clearToken } from '../../utils/tokenUtils'
import ToastMessage from '../common/ToastMessage'

const UserPage = () => {
  const resetSigned = useResetRecoilState(signedAtom)
  const resetTicketCount = useResetRecoilState(ticketAtom)
  const { recoilStateToast, hideRecoilStateToast } = useRecoilToast(userPageToastAtom)

  const navigate = useNavigate()

  const onClickSignOut = async () => {
    await signOut()
    clearToken()
    resetSigned()
    resetTicketCount()
  }

  const onClickWithdraw = async () => {
    if (
      window.confirm(
        '정말 탈퇴하시겠어요?\n등록한 프로필과 남은 이용권은 삭제되며 복구할 수 없습니다.\n가져가신 연락처는 탈퇴 후 다시 조회할 수 없으니, 별도로 저장해주세요.'
      )
    ) {
      await withdraw()
      clearToken()
      resetSigned()
      resetTicketCount()
    }
  }

  useEffect(() => {
    hideRecoilStateToast()
  }, [recoilStateToast, hideRecoilStateToast])

  return (
    <div className="flex h-[calc(100%-44px)] select-none flex-col items-center overflow-y-scroll scrollbar-hide">
      <Profile />
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
            window.open(POLICY_LINK, '_blank', 'noreferrer')
          }}
        >
          이용약관
        </List.Item>
        <List.Item
          onClick={() => {
            window.open(PRIVACY_LINK, '_blank', 'noreferrer')
          }}
        >
          개인정보 처리방침
        </List.Item>
      </List>

      <List title="계정 관리">
        <List.Item onClick={onClickSignOut} hasButton={false}>
          로그아웃
        </List.Item>
        <List.Item onClick={onClickWithdraw} hasButton={false}>
          <p className="text-caption text-gray">회원탈퇴</p>
        </List.Item>
      </List>
      {recoilStateToast.isShow && <ToastMessage>{recoilStateToast.toastMessage}</ToastMessage>}
    </div>
  )
}

export default UserPage
