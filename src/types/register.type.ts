export interface FormData {
  gender: string
  animals: string
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
  engLabel: string
}
