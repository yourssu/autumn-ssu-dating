import ImageButton from './ImageButton'

import { FormStepProps } from '../../types/register.type'
import TypeButton from '../common/TypeButton'

const AnimalStep = ({ gender, updateFields, moveNextStep }: FormStepProps) => {
  const animalOptions =
    gender === '남자'
      ? [
          { src: '/src/assets/dogIcon.png', label: '강아지' },
          { src: '/src/assets/foxIcon.png', label: '여우' },
          { src: '/src/assets/wolfIcon.png', label: '늑대' },
          { src: '/src/assets/dinoIcon.png', label: '공룡' },
          { src: '/src/assets/bearIcon.png', label: '곰' },
          { src: '/src/assets/ppussungIcon.png', label: '뿌슝이' },
        ]
      : [
          { src: '/src/assets/dogIcon.png', label: '강아지' },
          { src: '/src/assets/catIcon.png', label: '고양이' },
          { src: '/src/assets/foxIcon.png', label: '여우' },
          { src: '/src/assets/rabbitIcon.png', label: '토끼' },
          { src: '/src/assets/hamsterIcon.png', label: '햄스터' },
          { src: '/src/assets/ppussungIcon.png', label: '뿌슝이' },
        ]

  const onClick = (e: React.MouseEvent) => {
    updateFields({
      animal: (e.target as HTMLDivElement | HTMLImageElement | HTMLParagraphElement).title,
    })
    if (moveNextStep) {
      moveNextStep()
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-title whitespace-pre-line">{'자신을 나타내는\n동물을 골라주세요.'}</p>
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
