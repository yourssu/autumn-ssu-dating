import ImageButton from './ImageButton'

import { ANIMAL_OPTIONS_MALE, ANIMAL_OPTIONS_FEMALE } from '../../constant'
import { FormStepProps } from '../../types/register.type'
import TypeButton from '../common/TypeButton'

const AnimalStep = ({ gender, updateFields, moveNextStep }: FormStepProps) => {
  const animalOptions = gender === '남자' ? ANIMAL_OPTIONS_MALE : ANIMAL_OPTIONS_FEMALE

  const onClick = (e: React.MouseEvent) => {
    updateFields({
      animal: (e.target as HTMLDivElement | HTMLImageElement | HTMLParagraphElement).title,
    })
    if (moveNextStep) {
      moveNextStep()
    }
  }

  return (
    <div className="grid gap-y-6 w-fit">
      <p className="text-title whitespace-pre-line w-full">
        {'자신을 나타내는\n동물을 골라주세요.'}
      </p>
      <div className="grid grid-cols-2 gap-6">
        {animalOptions.map((option) => (
          <TypeButton key={option.label}>
            <ImageButton src={option.src} label={option.label} onClick={onClick} />
          </TypeButton>
        ))}
      </div>
    </div>
  )
}

export default AnimalStep
