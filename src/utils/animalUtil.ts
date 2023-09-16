import { ANIMAL_OPTIONS_FEMALE, ANIMAL_OPTIONS_MALE } from '../constant'
import { FormStepOption } from '../types/register.type'

export const getAnimalOptions = (): FormStepOption[] => {
  const animalOptionsArray = [...ANIMAL_OPTIONS_MALE, ...ANIMAL_OPTIONS_FEMALE]
  return [...new Set(animalOptionsArray.map(JSON.stringify))].map(JSON.parse)
}
