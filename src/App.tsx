import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Explore from './components/Explore'
import Home from './components/Home'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import Redirect from './components/Redirect'
import Register from './components/Register'
import UpdateProfile from './components/Update'
import UserPage from './components/User'
import AuthRoute from './components/common/AuthRoute'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/register" element={<Register />} />
            <Route element={<AuthRoute />}>
              <Route path="/user" element={<UserPage />} />
              <Route path="/user/edit" element={<UpdateProfile />} />
            </Route>
          </Route>
          <Route path="/kakao-redirect" element={<Redirect />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
