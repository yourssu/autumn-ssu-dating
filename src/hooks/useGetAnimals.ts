import { useQuery } from '@tanstack/react-query'

import { getAnimals } from '../apis/getAnimals'
import { AnimalType, GenderType } from '../types/explore.type'
import { AnimalsResponse } from '../types/getAnimals.type'
import { animalClientToServer } from '../utils/animalUtil'

export const useGetAnimals = (gender: GenderType, animals: AnimalType) => {
  return useQuery<AnimalsResponse>(
    ['getAnimals', gender, animals],
    () => getAnimals(gender, animalClientToServer(animals)),
    {
      staleTime: 60000 * 5,
    }
  )
}
