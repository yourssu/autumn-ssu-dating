import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import { getMyInfo } from '../../apis/getMyInfo'
import { signedAtom } from '../../state/signedAtom'
import { ticketAtom } from '../../state/ticketAtom'
import { setToken } from '../../utils/tokenUtils'

const Redirect = () => {
  const code = new URL(document.location.toString()).searchParams.get('oauthName')
  const accessToken = new URL(document.location.toString()).searchParams.get('accessToken')
  const refreshToken = new URL(document.location.toString()).searchParams.get('refreshToken')
  const navigate = useNavigate()
  const setTicketCount = useSetRecoilState(ticketAtom)
  const setSigned = useSetRecoilState(signedAtom)

  useEffect(() => {
    if (code) {
      navigate('/register', { state: { code } })
    }
  }, [code])

  useEffect(() => {
    if (accessToken && refreshToken) {
      setToken(accessToken, refreshToken)
      getMyInfo().then((data) => {
        setTicketCount(data.ticket)
        setSigned(true)
        navigate('/')
      })
    }
  }, [accessToken, navigate, refreshToken, setSigned, setTicketCount])

  return <></>
}

export default Redirect
