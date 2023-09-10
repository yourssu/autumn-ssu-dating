import ImageButton from './ImageButton'

import { FormStepProps } from '../../types/register.type'

const GenderStep = ({ updateFields, moveNextStep }: FormStepProps) => {
  const genderOptions = ['남자', '여자']

  const onClick = (e: React.MouseEvent) => {
    updateFields({
      gender: (e.target as HTMLDivElement | HTMLImageElement | HTMLParagraphElement).title,
    })
    if (moveNextStep) {
      moveNextStep()
    }
  }

  return (
    <>
      <div>당신의 성별은?</div>
      <div>
        {genderOptions.map((option) => (
          <ImageButton key={option} label={option} onClick={onClick} />
        ))}
      </div>
    </>
  )
}

export default GenderStep
