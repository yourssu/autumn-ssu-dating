import {
  AnimalTabMode,
  AnimalType,
  FemaleAnimalType,
  GenderType,
  MaleAnimalType,
} from '../../../types/explore.type'
import Chip from '../../common/Chip'

interface AnimalTabProps {
  src?: string
  label: string
  mode: AnimalTabMode
  gender: GenderType
  currentAnimalTab: AnimalType
  onClickAnimalHandler: ({
    femaleAnimal,
    maleAnimal,
  }: {
    femaleAnimal?: FemaleAnimalType | undefined
    maleAnimal?: MaleAnimalType | undefined
  }) => void
}

const AnimalTab = ({
  src,
  label,
  mode,
  gender,
  currentAnimalTab,
  onClickAnimalHandler,
}: AnimalTabProps) => {
  return (
    <>
      <Chip
        isSelected={currentAnimalTab === label ? 'selected' : 'notSelected'}
        onClick={() =>
          gender === 'female'
            ? onClickAnimalHandler({ femaleAnimal: label as FemaleAnimalType })
            : onClickAnimalHandler({ maleAnimal: label as MaleAnimalType })
        }
      >
        {mode === 'text' ? (
          <p>{label}</p>
        ) : (
          <img className="w-[44px] h-[44px]" src={src} title={label} alt={label} />
        )}
      </Chip>
    </>
  )
}

export default AnimalTab
