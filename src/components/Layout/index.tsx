import { Outlet, useLocation } from 'react-router-dom'

import { LINK_TITLE } from '../../constant'
import Spacing from '../common/Spacing'
import TopBar from '../common/TopBar'

const Layout = () => {
  const { pathname, search } = useLocation()
  const { title, backNav } = LINK_TITLE[pathname + search]

  return (
    <div className="bg-[url('/src/assets/bg.png')] w-screen h-screen bg-cover overflow-hidden">
      <TopBar title={title} backNav={backNav as string}></TopBar>
      <Spacing direction="vertical" size={44}></Spacing>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
