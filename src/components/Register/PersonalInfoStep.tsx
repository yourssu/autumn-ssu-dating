import { useState, useEffect } from 'react'

import RadioSelector from './RadioSelector'

import { FormStepProps } from '../../types/register.type'
import BoxButton from '../common/BoxButton'
import InputField from '../common/InputField'

const PersonalInfoStep = ({ nickname, mbti, appeal, tel, updateFields }: FormStepProps) => {
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
              ( <span className="text-pink">{nickname.length}</span> / 10 )
            </span>
          </label>
          <InputField
            required
            width={342}
            maxLength={10}
            placeholder="ex. 숭실대 뿌슝이"
            value={nickname}
            onChange={(e) => updateFields({ nickname: (e.target as HTMLInputElement).value })}
          />
        </div>

        <div>
          <label>
            MBTI <span className="text-caption text-gray">(클릭해서 MBTI를 완성해보세요!)</span>
          </label>
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

        <div className="grid">
          <label className="inline-block w-full flex items-center justify-between">
            본인 매력 어필
            <span className="text-caption text-gray">
              ( <span className="text-pink">{appeal.length}</span> / 100 )
            </span>
          </label>
          <textarea
            required
            maxLength={100}
            placeholder="ex. 취미, 관심사, 키, 나이 등으로 자신을 드러내보세요!"
            value={appeal}
            onChange={(e) => updateFields({ appeal: e.target.value })}
            className="border"
          />
        </div>

        <div>
          <label>연락처 (인스타그램 ID / 전화번호)</label>
          <InputField
            required
            width={342}
            maxLength={10}
            placeholder="ex. @yourssu_official"
            value={tel}
            onChange={(e) => updateFields({ tel: (e.target as HTMLInputElement).value })}
          />
        </div>
      </div>

      <div>
        <p className="text-caption text-pink mb-2">
          등록 시 이용권 한 장이 차감됩니다. (남은 이용권수: n장)
        </p>
        <BoxButton isDisabled="abled" isLine="filled" size="large">
          <button type="submit" className="w-full h-full">
            등록하기
          </button>
        </BoxButton>
      </div>
    </div>
  )
}

export default PersonalInfoStep
