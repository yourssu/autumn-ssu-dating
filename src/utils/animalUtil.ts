import { ANIMAL_OPTIONS_FEMALE, ANIMAL_OPTIONS_MALE } from '../constant'
import { AnimalType } from '../types/explore.type'
import { AnimalServerType } from '../types/register.type'
import { FormStepOption } from '../types/register.type'

export const getAnimalOptions = (): FormStepOption[] => {
  const animalOptionsArray = [...ANIMAL_OPTIONS_MALE, ...ANIMAL_OPTIONS_FEMALE]
  return [...new Set(animalOptionsArray.map(JSON.stringify))].map(JSON.parse)
}

const animalToServerTransfer = {
  전체: 'ALL',
  곰: 'BEAR',
  고양이: 'CAT',
  공룡: 'DINO',
  강아지: 'DOG',
  여우: 'FOX',
  햄스터: 'HAMSTER',
  뿌슝이: 'PUSSUNG',
  토끼: 'RABBIT',
  늑대: 'WOLF',
}

const animalToClientTransfer = {
  ALL: '전체',
  BEAR: '곰',
  CAT: '고양이',
  DINO: '공룡',
  DOG: '강아지',
  FOX: '여우',
  HAMSTER: '햄스터',
  PUSSUNG: '뿌슝이',
  RABBIT: '토끼',
  WOLF: '늑대',
}

export const animalClientToServer = (animal: AnimalType): AnimalServerType => {
  return animalToServerTransfer[animal] as AnimalServerType
}

export const animalServerToClient = (animal: AnimalServerType): AnimalType => {
  return animalToClientTransfer[animal] as AnimalType
}
