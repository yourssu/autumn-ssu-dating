import { useEffect, useRef } from 'react'

import { getAnimalOptions } from '../../../utils/animalUtil'
import TypeButton from '../../common/TypeButton'

const AnimalSlide = () => {
  const animalOptions = getAnimalOptions()
  const animalCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let scrollInterval = 1
    const scrollBox = animalCardRef.current as HTMLDivElement
    const scrollWidth = scrollBox.scrollWidth
    const clientWidth = scrollBox.clientWidth

    const timer = setInterval(() => {
      const scrollLeft = scrollBox.scrollLeft
      animalCardRef.current?.scrollTo(scrollLeft + scrollInterval, 0)

      if (scrollBox.scrollLeft === 0 || scrollBox.scrollLeft + clientWidth == scrollWidth) {
        scrollInterval *= -1
      }
    }, 20)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div
      className="grid w-full grid-flow-col gap-x-5 overflow-scroll scrollbar-hide"
      ref={animalCardRef}
    >
      {animalOptions.map((option, index) => (
        <TypeButton key={index}>
          <img src={option.src} alt={option.label} />
        </TypeButton>
      ))}
    </div>
  )
}

export default AnimalSlide
