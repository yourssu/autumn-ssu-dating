import { useEffect } from 'react'

import { Outlet, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { signedAtom } from '../../state/signedAtom'

const AuthRoute = () => {
  const signed = useRecoilValue(signedAtom)
  const navigate = useNavigate()

  useEffect(() => {
    if (!signed) navigate('/')
  }, [signed, navigate])

  return <Outlet />
}

export default AuthRoute
