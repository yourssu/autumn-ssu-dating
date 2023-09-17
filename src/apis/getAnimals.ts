import client from './client'

import { GenderType } from '../types/explore.type'
import { AnimalsResponse } from '../types/getAnimals.type'
import { AnimalServerType } from '../types/register.type'

const getAnimals = async (
  gender: GenderType,
  animals: AnimalServerType,
  page: number
): Promise<AnimalsResponse> => {
  const response = await client.get(`/search/${gender}/${animals}`, {
    params: {
      page,
    },
  })
  return response.data
}

export default getAnimals
