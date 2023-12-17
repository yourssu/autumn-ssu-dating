import { Outlet, useLocation } from 'react-router-dom'

import { LINK_TITLE } from '../../constant'
import Spacing from '../common/Spacing'
import TopBar from '../common/TopBar'

const Layout = () => {
  const { pathname, search } = useLocation()
  const { title, backNav } = LINK_TITLE[pathname + search]

  const isHome = pathname === '/'
  const isLogged = false // 로그인 기능 추가 후 로그인 여부로 수정 예정

  const bgUrl = isHome
    ? !isLogged
      ? `bg-[url('/src/assets/bg_login_before.png')]`
      : `bg-[url('/src/assets/bg_login_after.png')]`
    : `bg-[url('/src/assets/bg_other.png')]`

  return (
    <div className={`${bgUrl} h-[100dvh] w-screen overflow-hidden bg-cover`}>
      {!isHome && (
        <>
          <TopBar title={title} backNav={backNav as string}></TopBar>
          <Spacing direction="vertical" size={44}></Spacing>
        </>
      )}
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
