export interface FormData {
  gender: string
  animals: AnimalType
  nickName: string
  mbti: string
  introduce: string
  contact: string
}

export interface FormStepProps extends FormData {
  updateFields: (fields: Partial<FormData>) => void
  moveNextStep?: () => void
}

export interface FormStepOption {
  src: string
  label: string
  animals?: AnimalType
}

export type AnimalType =
  | 'ALL'
  | 'CAT'
  | 'DOG'
  | 'FOX'
  | 'HAMSTER'
  | 'PUSSUNG'
  | 'RABBIT'
  | 'BEAR'
  | 'DINO'
  | 'WOLF'
  | ''
