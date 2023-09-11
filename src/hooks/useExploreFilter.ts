import { useState } from 'react'

import { AnimalType, CurrentExploreFilterType, GenderType } from '../types/explore.type'

const useExploreFilter = () => {
  const [currentExploreFilter, setCurrentExploreFilter] = useState<CurrentExploreFilterType>({
    gender: 'female',
    animal: 'rabbit',
  })

  function handleGenderTab(gender: GenderType) {
    setCurrentExploreFilter({ ...currentExploreFilter, ['gender']: gender })
  }

  function handleAnimalTab(animal: AnimalType) {
    setCurrentExploreFilter({ ...currentExploreFilter, ['animal']: animal })
  }

  return {
    currentExploreFilter,
    setCurrentExploreFilter,
    handleGenderTab,
    handleAnimalTab,
  }
}

export default useExploreFilter
