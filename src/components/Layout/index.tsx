import { Outlet, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { LINK_TITLE } from '../../constant'
import { signedAtom } from '../../state/signedAtom'
import Spacing from '../common/Spacing'
import TopBar from '../common/TopBar'

const Layout = () => {
  const { pathname, search } = useLocation()
  const { title, backNav } = LINK_TITLE[pathname + search]

  const isHome = pathname === '/'
  const signed = useRecoilValue(signedAtom)

  const bgUrl = isHome
    ? !signed
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
