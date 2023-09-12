export type IsSelectedType = 'selected' | 'notSelected'
export type GenderType = 'male' | 'female'

export type MaleAnimalType = 'dog' | 'fox' | 'wolf' | 'dragon' | 'bear' | 'ppussung'
export type FemaleAnimalType = 'dog' | 'cat' | 'fox' | 'rabbit' | 'hamster' | 'ppussung'

export type AnimalType = MaleAnimalType | FemaleAnimalType

export interface CurrentExploreFilterType {
  gender: GenderType
  animal: AnimalType
}
