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

export type ContactOpenType = 'opened' | 'closed'

export type AnimalTabMode = 'image' | 'text'

export type MbtiType =
  | 'ISTJ'
  | 'ISFJ'
  | 'INFJ'
  | 'INTJ'
  | 'ISTP'
  | 'ISFP'
  | 'INFP'
  | 'INTP'
  | 'ESTP'
  | 'ESFP'
  | 'ENFP'
  | 'ENTP'
  | 'ESTJ'
  | 'ENFJ'
  | 'ENTJ'

export type CurrentPopupSelectedType = {
  nickname: string
  mbti: MbtiType
  gender: GenderType
  animal: AnimalType
  content: string
}
