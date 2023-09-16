import { useState } from 'react'

import {
  CurrentExploreFilterType,
  FemaleAnimalType,
  GenderType,
  MaleAnimalType,
} from '../types/explore.type'

const useExploreFilter = () => {
  const [currentExploreFilter, setCurrentExploreFilter] = useState<CurrentExploreFilterType>({
    gender: 'female',
    femaleAnimal: '전체',
    maleAnimal: '전체',
  })

  function handleGenderTab(gender: GenderType) {
    setCurrentExploreFilter({ ...currentExploreFilter, ['gender']: gender })
  }

  function handleAnimalTab({
    femaleAnimal,
    maleAnimal,
  }: {
    femaleAnimal?: FemaleAnimalType
    maleAnimal?: MaleAnimalType
  }) {
    femaleAnimal &&
      setCurrentExploreFilter({
        ...currentExploreFilter,
        ['femaleAnimal']: femaleAnimal,
      })
    maleAnimal &&
      setCurrentExploreFilter({
        ...currentExploreFilter,
        ['maleAnimal']: maleAnimal,
      })
  }

  return {
    currentExploreFilter,
    setCurrentExploreFilter,
    handleGenderTab,
    handleAnimalTab,
  }
}

export default useExploreFilter
