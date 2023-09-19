import client from './client'

import { GenderType } from '../types/explore.type'
import { AnimalsResponse } from '../types/getAnimals.type'
import { AnimalServerType } from '../types/register.type'

const getAnimals = async (
  gender: GenderType,
  animals: AnimalServerType
): Promise<AnimalsResponse> => {
  const response = await client.get(`/search/${gender}/${animals}`)
  return response.data
}

export default getAnimals
