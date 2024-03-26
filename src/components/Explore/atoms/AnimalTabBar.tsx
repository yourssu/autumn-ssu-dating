import AnimalTab from './AnimalTab'

import { ANIMAL_OPTIONS_FEMALE } from '../../../constant'
import { ANIMAL_OPTIONS_MALE } from '../../../constant'
import {
  AnimalType,
  FemaleAnimalType,
  GenderType,
  MaleAnimalType,
} from '../../../types/explore.type'
import Spacing from '../../common/Spacing'

interface AnimalTabProps {
  currentAnimalTab: AnimalType
  gender: GenderType
  onClickHandler: ({
    femaleAnimal,
    maleAnimal,
  }: {
    femaleAnimal?: FemaleAnimalType | undefined
    maleAnimal?: MaleAnimalType | undefined
  }) => void
}

const AnimalTabBar = ({ currentAnimalTab, gender, onClickHandler }: AnimalTabProps) => {
  return (
    <div className="w-screen overflow-x-scroll scrollbar-hide min-[450px]:flex min-[450px]:justify-center min-[450px]:py-4">
      <Spacing direction="vertical" size={16} />
      <div className="flex w-fit">
        <Spacing direction="horizontal" size={24}></Spacing>
        <AnimalTab
          mode="text"
          label="전체"
          gender={gender}
          currentAnimalTab={currentAnimalTab}
          onClickAnimalHandler={() =>
            onClickHandler(
              gender === 'female'
                ? { femaleAnimal: '전체' as FemaleAnimalType }
                : { maleAnimal: '전체' as MaleAnimalType }
            )
          }
        />
        {gender === 'female'
          ? ANIMAL_OPTIONS_FEMALE.map((option) => (
              <div
                key={option.label + 'female'}
                className="flex
              "
              >
                <Spacing direction="horizontal" size={6} />
                <AnimalTab
                  src={option.src}
                  label={option.label}
                  mode="image"
                  gender={gender}
                  currentAnimalTab={currentAnimalTab}
                  onClickAnimalHandler={onClickHandler}
                />
              </div>
            ))
          : ANIMAL_OPTIONS_MALE.map((option) => (
              <div key={option.label + 'male'} className="flex">
                <Spacing direction="horizontal" size={6} />
                <AnimalTab
                  key={option.label + 'male'}
                  src={option.src}
                  label={option.label}
                  mode="image"
                  gender={gender}
                  currentAnimalTab={currentAnimalTab}
                  onClickAnimalHandler={onClickHandler}
                />
              </div>
            ))}
        <Spacing direction="horizontal" size={24}></Spacing>
      </div>
      <Spacing direction="vertical" size={16} />
    </div>
  )
}

export default AnimalTabBar
