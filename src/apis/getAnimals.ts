import client from './client'

import { GenderType } from '../types/explore.type'
import { AnimalsResponse, UsersResponse } from '../types/getAnimals.type'
import { AnimalServerType } from '../types/register.type'

const getAnimals = async (
  gender: GenderType,
  animals: AnimalServerType,
  page: number
): Promise<UsersResponse | AnimalsResponse> => {
  const response = await client.get(`/search/${gender}`, {
    params: {
      animals,
      page,
    },
  })
  return response.data
}

export default getAnimals
