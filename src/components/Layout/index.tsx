import { Outlet, useLocation } from 'react-router-dom'

import { LINK_TITLE } from '../../constant'
import Spacing from '../common/Spacing'
import TopBar from '../common/TopBar'

const Layout = () => {
  const { pathname, search } = useLocation()
  const { title, backNav } = LINK_TITLE[pathname + search]

  const isHome = pathname === '/'
  const bgUrl = isHome
    ? `bg-[url('/src/assets/bg_palePink.png')]`
    : `bg-[url('/src/assets/bg.png')]`

  return (
    <div className={`${bgUrl} w-screen h-screen bg-cover overflow-hidden`}>
      {!isHome && (
        <>
          <TopBar title={title} backNav={backNav as string} ticketCount={1}></TopBar>
          <Spacing direction="vertical" size={44}></Spacing>
        </>
      )}
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
