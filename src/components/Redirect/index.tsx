import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import { useGetMyInfo } from '../../hooks/useGetMyInfo'
import { ticketAtom } from '../../state/ticketAtom'
import { getAccessToken, getRefreshToken, setToken } from '../../utils/tokenUtils'

const Redirect = () => {
  const code = new URL(document.location.toString()).searchParams.get('oauthName')
  const accessToken = new URL(document.location.toString()).searchParams.get('accessToken')
  const refreshToken = new URL(document.location.toString()).searchParams.get('refreshToken')
  const navigate = useNavigate()
  const setTicketCount = useSetRecoilState(ticketAtom)

  useEffect(() => {
    if (code) {
      navigate('/register', { state: { code } })
    }
  }, [code])

  const { data, isSuccess } = useGetMyInfo()

  useEffect(() => {
    if (accessToken && refreshToken) {
      setToken(accessToken, refreshToken)
    }
  }, [accessToken, refreshToken])

  useEffect(() => {
    if (isSuccess && data) {
      setTicketCount(data.ticket)
      navigate('/')
    }
  }, [getAccessToken, getRefreshToken, isSuccess, data])

  return <></>
}

export default Redirect
