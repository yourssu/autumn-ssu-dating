import ImageButton from './ImageButton'

import { FormStepOption, FormStepProps } from '../../../types/register.type'
import Spacing from '../../common/Spacing'
import TypeButton from '../../common/TypeButton'

const GenderStep = ({ updateFields, moveNextStep }: FormStepProps) => {
  const genderOptions: FormStepOption[] = [
    { src: '/maleIcon.png', label: '남자' },
    { src: '/femaleIcon.png', label: '여자' },
  ]

  const onClick = (e: React.MouseEvent) => {
    updateFields({
      gender: (e.target as HTMLDivElement | HTMLImageElement | HTMLParagraphElement).title,
    })
    if (moveNextStep) {
      moveNextStep()
    }
  }

  return (
    <div className="flex h-[calc(100vh-88px)] w-fit flex-col justify-center">
      <p className="text-center text-title">당신의 성별은?</p>
      <Spacing direction="vertical" size={24} />
      <div className="grid grid-cols-2 gap-x-6">
        {genderOptions.map((option) => (
          <TypeButton key={option.label}>
            <ImageButton src={option.src} label={option.label} onClick={onClick} />
          </TypeButton>
        ))}
      </div>
    </div>
  )
}

export default GenderStep
