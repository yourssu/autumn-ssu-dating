import client from './client'

export const signOut = async () => {
  await client.post('/logout')
}
