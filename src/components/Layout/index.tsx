import { Outlet, useLocation } from 'react-router-dom'

import { LINK_TITLE } from '../../constant'
import Spacing from '../common/Spacing'
import TopBar from '../common/TopBar'

const Layout = () => {
  const { pathname, search } = useLocation()
  const { title, backNav } = search ? LINK_TITLE[pathname + search] : LINK_TITLE[pathname]

  return (
    <div className="bg-[url('/src/assets/bg.png')] w-screen h-screen bg-cover">
      {/* 임시: ticketCount는 임의의 숫자 */}
      <TopBar title={title} backNav={backNav as string} ticketCount={1}></TopBar>
      <Spacing direction="vertical" size={44}></Spacing>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
