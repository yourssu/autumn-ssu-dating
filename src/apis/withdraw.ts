import client from './client'

export const withdraw = async () => {
  await client.delete('/users')
}
