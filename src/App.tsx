import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Explore from './components/Explore'
import Home from './components/Home'
import Layout from './components/Layout'
import MonitorExplore from './components/MonitorExplore'
import NotFound from './components/NotFound'
import Register from './components/Register'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/monitor" element={<MonitorExplore />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
