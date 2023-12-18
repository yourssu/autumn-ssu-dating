export const setToken = (accessToken: string, refreshToken: string) => {
  localStorage.clear()
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
}
