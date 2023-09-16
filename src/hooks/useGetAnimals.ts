import { useInfiniteQuery } from '@tanstack/react-query'

import getAnimals from '../apis/getAnimals'
import { AnimalType, GenderType } from '../types/explore.type'
import { AnimalsResponse } from '../types/getAnimals.type'
import { animalClientToServer } from '../utils/animalUtil'

export const useGetAnimals = (gender: GenderType, animals: AnimalType) => {
  return useInfiniteQuery<AnimalsResponse>({
    queryKey: ['getAnimals', gender, animals],
    queryFn: ({ pageParam = 0 }) => getAnimals(gender, animalClientToServer(animals), pageParam),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.page.number !== allPage[0].page.totalPages
        ? lastPage.page.number + 1
        : undefined
    },
    staleTime: 60000 * 3,
  })
}
