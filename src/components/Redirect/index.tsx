import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

const Redirect = () => {
  const code = new URL(document.location.toString()).searchParams.get('oauthName')
  const navigate = useNavigate()

  useEffect(() => {
    if (code) {
      navigate('/register', { state: { code } })
    }
  }, [code])

  return <></>
}

export default Redirect
