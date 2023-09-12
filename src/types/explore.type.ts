export type IsSelectedType = 'selected' | 'notSelected'
export type GenderType = 'male' | 'female'

export type MaleAnimalType = '전체' | '강아지' | '여우' | '늑대' | '공룡' | '곰' | '뿌슝이'
export type FemaleAnimalType = '전체' | '강아지' | '고양이' | '여우' | '토끼' | '햄스터' | '뿌슝이'

export type AnimalType = MaleAnimalType | FemaleAnimalType

export interface CurrentExploreFilterType {
  gender: GenderType
  maleAnimal: MaleAnimalType
  femaleAnimal: FemaleAnimalType
}

export type AnimalTabMode = 'image' | 'text'
