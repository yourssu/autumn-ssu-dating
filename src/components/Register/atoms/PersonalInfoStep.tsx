import { useState, useEffect } from 'react'

import RadioSelector from './RadioSelector'
import TextareaField from './TextareaField'

import { FormStepProps } from '../../../types/register.type'
import BoxButton from '../../common/BoxButton'
import InputField from '../../common/InputField'
import Spacing from '../../common/Spacing'

const PersonalInfoStep = ({ nickName, mbti, introduce, contact, updateFields }: FormStepProps) => {
  const canRegister = nickName && mbti.length === 4 && introduce && contact

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
    <div className="flex w-screen flex-col items-center">
      <Spacing direction="vertical" size={44}></Spacing>
      <div className="grid w-fit gap-y-4">
        <p className="whitespace-pre-line text-title">
          {'아래 정보들을 입력해\n본인을 소개해보세요!'}
        </p>
        <div className="grid gap-y-6 text-body2">
          <div>
            <label className="flex w-full items-center justify-between">
              닉네임
              <span className="text-caption text-gray">
                ( <span className="text-pink">{nickName.length}</span> / 9 )
              </span>
            </label>
            <Spacing direction="vertical" size={8} />
            <InputField
              required
              width={342}
              maxLength={9}
              placeholder="ex. 숭실대 뿌슝이"
              value={nickName}
              onChange={(e) => updateFields({ nickName: (e.target as HTMLInputElement).value })}
            />
          </div>
          <div>
            <label>
              MBTI <span className="text-caption text-gray">(클릭해서 MBTI를 완성해보세요!)</span>
            </label>
            <Spacing direction="vertical" size={8} />
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
            <label className="flex w-full items-center justify-between">
              본인 매력 어필
              <span className="text-caption text-gray">
                ( <span className="text-pink">{introduce.length}</span> / 100 )
              </span>
            </label>
            <Spacing direction="vertical" size={8} />
            <TextareaField
              required={true}
              maxLength={100}
              placeholder="ex. 프로필을 가져갈 다른 사람들에게 내 매력을 어필해보세요! (모두가 사용하는 커뮤니티인만큼 부적절한 언어 사용은 피해주세요 :D)"
              value={introduce}
              onChange={(e) => updateFields({ introduce: e.target.value })}
            />
          </div>
          <div>
            <label>연락처 (인스타그램 / 카카오톡 ID / 전화번호 중 택 1)</label>
            <Spacing direction="vertical" size={8} />
            <InputField
              required
              width={342}
              placeholder="ex. @yourssu_official"
              value={contact}
              onChange={(e) => updateFields({ contact: (e.target as HTMLInputElement).value })}
            />
          </div>
        </div>
        <Spacing direction="vertical" size={8} />
        <BoxButton isDisabled={canRegister ? 'abled' : 'disabled'} isLine="filled" size="large">
          <button
            type="submit"
            className="h-full w-full disabled:cursor-not-allowed"
            disabled={!canRegister}
          >
            등록하기
          </button>
        </BoxButton>
      </div>
      <Spacing direction="vertical" size={44}></Spacing>
    </div>
  )
}

export default PersonalInfoStep
