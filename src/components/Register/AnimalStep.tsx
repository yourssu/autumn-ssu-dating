import ImageButton from './ImageButton'

import { FormStepProps } from '../../types/register.type'

const AnimalStep = ({ gender, updateFields, moveNextStep }: FormStepProps) => {
  const animalOptions =
    gender === '남자'
      ? ['강아지', '여우', '늑대', '공룡', '곰', '뿌슝이']
      : ['강아지', '고양이', '여우', '토끼', '햄스터', '뿌슝이']

  const onClick = (e: React.MouseEvent) => {
    updateFields({
      animal: (e.target as HTMLDivElement | HTMLImageElement | HTMLParagraphElement).title,
    })
    if (moveNextStep) {
      moveNextStep()
    }
  }

  return (
    <>
      <div>자신을 나타내는 동물을 골라주세요.</div>
      <div>
        {animalOptions.map((option) => (
          <ImageButton key={option} label={option} onClick={onClick} />
        ))}
      </div>
    </>
  )
}

export default AnimalStep
