export interface FormData {
  gender: string
  animals: AnimalServerType
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
  animals?: AnimalServerType
}

export type AnimalServerType =
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

export interface RegisterToastData {
  isShow: boolean
  toastMessage: string
}
