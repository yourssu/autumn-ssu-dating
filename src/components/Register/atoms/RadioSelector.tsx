import { useEffect, useState } from 'react'

import TypeButton from '../../common/TypeButton'

export interface RadioSelectorProps {
  labels: string[]
  updateMbti: (value: string) => void
  defaultLabel?: string
}

const RadioSelector = ({ labels, updateMbti, defaultLabel }: RadioSelectorProps) => {
  const radioName = labels.toString()
  const [isCheckedArray, setIsCheckedArray] = useState<boolean[]>([false, false])

  const handleInputChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value

    updateMbti(value)

    if (value === labels[0]) {
      setIsCheckedArray([true, false])
    } else {
      setIsCheckedArray([false, true])
    }
  }

  useEffect(() => {
    if (defaultLabel === labels[0]) {
      setIsCheckedArray([true, false])
    } else if (defaultLabel === labels[1]) {
      setIsCheckedArray([false, true])
    }
  }, [])

  return (
    <div className="grid grid-cols-1 gap-y-2">
      {labels.map((label, index) => (
        <TypeButton
          key={label}
          width={79.5}
          height={48}
          rounded={12}
          mode={isCheckedArray[index] ? 'pink' : 'white'}
        >
          <>
            <label
              htmlFor={label}
              className="flex h-full w-full cursor-pointer items-center justify-center rounded-[12px]"
            >
              {label}
            </label>
            <input
              type="radio"
              id={label}
              name={radioName}
              value={label}
              onClick={handleInputChange}
              className="hidden"
            />
          </>
        </TypeButton>
      ))}
    </div>
  )
}

export default RadioSelector
