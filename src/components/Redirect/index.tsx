import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { setToken } from '../../utils/tokenUtils'

const Redirect = () => {
  const code = new URL(document.location.toString()).searchParams.get('oauthName')
  const accessToken = new URL(document.location.toString()).searchParams.get('accessToken')
  const refreshToken = new URL(document.location.toString()).searchParams.get('refreshToken')
  const navigate = useNavigate()

  useEffect(() => {
    if (code) {
      navigate('/register', { state: { code } })
    }
  }, [code])

  useEffect(() => {
    if (accessToken && refreshToken) {
      setToken(accessToken, refreshToken)
      navigate('/')
    }
  }, [accessToken, refreshToken])

  return <></>
}

export default Redirect
