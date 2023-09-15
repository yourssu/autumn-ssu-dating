import { useState, useEffect } from 'react'

import RadioSelector from './RadioSelector'
import TextareaField from './TextareaField'

import checkedIcon from '../../assets/checkedIcon.svg'
import uncheckedIcon from '../../assets/uncheckedIcon.svg'
import { FormStepProps } from '../../types/register.type'
import BoxButton from '../common/BoxButton'
import InputField from '../common/InputField'

const PersonalInfoStep = ({ nickName, mbti, introduce, contact, updateFields }: FormStepProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const canRegister = nickName && mbti.length === 4 && introduce && contact && isChecked

  const mbtiOptions = [
    ['E', 'I'],
    ['S', 'N'],
    ['F', 'T'],
    ['P', 'J'],
  ]
  const [mbtiValueArray, setMbtiValueArray] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    updateFields({ mbti: Object.values(mbtiValueArray).join('') })
  }, [mbtiValueArray])

  return (
    <div className="grid gap-y-6 w-fit">
      <p className="text-title whitespace-pre-line">
        {'아래 정보들을 입력해\n본인을 소개해보세요!'}
      </p>

      <div className="grid gap-y-4 text-body2">
        <div>
          <label className="inline-block w-full flex items-center justify-between">
            닉네임
            <span className="text-caption text-gray">
              ( <span className="text-pink">{nickName.length}</span> / 10 )
            </span>
          </label>
          <InputField
            required
            width={342}
            maxLength={10}
            placeholder="ex. 숭실대 뿌슝이"
            value={nickName}
            onChange={(e) => updateFields({ nickName: (e.target as HTMLInputElement).value })}
          />
        </div>

        <div>
          <label>
            MBTI <span className="text-caption text-gray">(클릭해서 MBTI를 완성해보세요!)</span>
          </label>
          <div className="flex justify-between">
            {mbtiOptions.map((option, index) => (
              <RadioSelector
                key={index}
                labels={option}
                updateMbti={(value: string) => {
                  setMbtiValueArray((prev) => {
                    return { ...prev, ...{ [index]: value } }
                  })
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid">
          <label className="inline-block w-full flex items-center justify-between">
            본인 매력 어필
            <span className="text-caption text-gray">
              ( <span className="text-pink">{introduce.length}</span> / 100 )
            </span>
          </label>
          <TextareaField
            required={true}
            maxLength={100}
            placeholder={'ex. 취미, 관심사, 키, 나이 등으로 자신을 드러내보세요!'}
            value={introduce}
            onChange={(e) => updateFields({ introduce: e.target.value })}
          />
        </div>

        <div>
          <label>연락처 (인스타그램 ID / 전화번호)</label>
          <InputField
            required
            width={342}
            maxLength={10}
            placeholder="ex. @yourssu_official"
            value={contact}
            onChange={(e) => updateFields({ contact: (e.target as HTMLInputElement).value })}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <img
            src={isChecked ? (checkedIcon as string) : (uncheckedIcon as string)}
            onClick={() => {
              setIsChecked((prev) => !prev)
            }}
          />
          <label className="text-caption text-pink ml-1 my-2">
            <input
              type="checkbox"
              onChange={(e) => {
                setIsChecked(e.target.checked)
              }}
              className="hidden"
            />
            등록 시 이용권 한 장이 차감됩니다. (남은 이용권수: n장)
          </label>
        </div>

        <BoxButton isDisabled={canRegister ? 'abled' : 'disabled'} isLine="filled" size="large">
          <button
            type="submit"
            className="w-full h-full disabled:cursor-not-allowed"
            disabled={!canRegister}
          >
            등록하기
          </button>
        </BoxButton>
      </div>
    </div>
  )
}

export default PersonalInfoStep
