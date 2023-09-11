export interface FormData {
  gender: string
  animal: string
  nickname: string
  mbti: string
  appeal: string
  tel: string
}

export interface FormStepProps extends FormData {
  updateFields: (fields: Partial<FormData>) => void
  moveNextStep?: () => void
}
