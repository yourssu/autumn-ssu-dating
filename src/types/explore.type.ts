export type IsSelectedType = 'selected' | 'notSelected'
export type GenderType = 'male' | 'female'

export type MaleAnimalType = 'fox' | 'cat'
export type FemaleAnimalType = 'rabbit' | 'dog'

export type AnimalType = MaleAnimalType | FemaleAnimalType

export interface CurrentExploreFilterType {
  gender: GenderType
  animal: AnimalType
}
