import { Outlet, useLocation } from 'react-router-dom'

import { LINK_TITLE } from '../../constant'
import Spacing from '../common/Spacing'
import TopBar from '../common/TopBar'

const Layout = () => {
  const { pathname, search } = useLocation()

  const isHome = pathname === '/'
  const { title = '', backNav = '' } = LINK_TITLE[pathname + search] || {}

  const bgUrl = isHome
    ? `bg-[url('/src/assets/bg_palePink.webp')]`
    : `bg-[url('/src/assets/bg.webp')]`

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
