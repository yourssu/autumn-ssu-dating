import { useInfiniteQuery } from '@tanstack/react-query'

import getAnimals from '../apis/getAnimals'
import { AnimalType, GenderType } from '../types/explore.type'
import { AnimalsResponse, UsersResponse } from '../types/getAnimals.type'
import { animalClientToServer } from '../utils/animalUtil'

export const useGetAnimals = (gender: GenderType, animals: AnimalType) => {
  return useInfiniteQuery<AnimalsResponse | UsersResponse>({
    queryKey: ['getAnimals', gender, animals],
    queryFn: ({ pageParam = 0 }) => getAnimals(gender, animalClientToServer(animals), pageParam),
    getNextPageParam: (lastPage, allPage) => {
      const nextPage = (lastPage as AnimalsResponse).page.number + 1
      return (allPage as UsersResponse[]).length !==
        (lastPage as AnimalsResponse).page.totalElements
        ? nextPage
        : undefined
    },
  })
}
