import { useEffect, useState } from 'react'

import { AxiosError } from 'axios'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'

import { updateProfile } from '../../apis/registerApi'
import { useGetMyInfo } from '../../hooks/useGetMyInfo'
import useRecoilToast from '../../hooks/useRecoilToast'
import useToast from '../../hooks/useToast'
import { userPageToastAtom } from '../../state/userPageToastAtom'
import { UpdateRequest } from '../../types/register.type'
import RadioSelector from '../Register/atoms/RadioSelector'
import TextareaField from '../Register/atoms/TextareaField'
import BoxButton from '../common/BoxButton'
import InputField from '../common/InputField'
import Spacing from '../common/Spacing'
import ToastMessage from '../common/ToastMessage'

const UpdateProfile = () => {
  const { data: originData, isLoading, isError } = useGetMyInfo()
  const [formData, setFormData] = useState<UpdateRequest>({})

  // const { setRecoilStateToast } = useRecoilToast()
  const navigate = useNavigate()

  const { stateToast, showStateToast } = useToast()
  const { setRecoilStateToast } = useRecoilToast(userPageToastAtom)

  const mbtiOptions = [
    ['E', 'I'],
    ['S', 'N'],
    ['F', 'T'],
    ['P', 'J'],
  ]
  const [mbtiValueObject, setMbtiValueObject] = useState<{ [key: string]: string }>({})

  const hasDifference = !_.isEqual(originData, formData)
  const canUpdate = formData.nickName && formData.introduce && formData.contact && hasDifference

  function updateFields(fields: Partial<UpdateRequest>) {
    setFormData((prev) => {
      return { ...prev, ...fields }
    })
  }

  async function onSubmit(e: React.MouseEvent) {
    e.preventDefault()

    try {
      await updateProfile(formData)
      setRecoilStateToast({
        isShow: true,
        toastMessage: '프로필 수정 완료!',
      })
      navigate('/user')
    } catch (error) {
      const updateError = error as AxiosError
      switch (updateError.response?.status) {
        case 400:
          showStateToast('이미 존재하는 닉네임이에요.')
          break

        default:
          showStateToast('수정에 실패했습니다. 잠시 후 다시 시도해 주세요.')
          break
      }
    }
  }

  useEffect(() => {
    updateFields({ mbti: Object.values(mbtiValueObject).join('') })
  }, [mbtiValueObject])

  useEffect(() => {
    if (originData !== undefined) {
      setFormData(originData)
      setMbtiValueObject(
        originData.mbti.split('').reduce((accumulator, value, index) => {
          accumulator[index.toString()] = value
          return accumulator
        }, {})
      )
    }
  }, [originData])

  if (isLoading || isError) return
  return (
    <>
      {!isLoading && (
        <div className="flex h-[calc(100%-44px-34px)] select-none flex-col items-center justify-between overflow-y-scroll scrollbar-hide">
          <div className="grid gap-y-6 text-body2">
            <Spacing direction="vertical" size={24} />
            <div>
              <label className="flex w-full items-center justify-between">
                닉네임
                <span className="text-caption text-gray">
                  ( <span className="text-pink">{formData.nickName?.length}</span> / 9 )
                </span>
              </label>
              <Spacing direction="vertical" size={8} />
              <InputField
                required
                width={342}
                maxLength={9}
                placeholder="ex. 숭실대 뿌슝이"
                value={formData.nickName}
                onChange={(e) => updateFields({ nickName: (e.target as HTMLInputElement).value })}
              />
            </div>

            <div>
              <label>
                MBTI <span className="text-caption text-gray">(클릭해서 MBTI를 완성해보세요!)</span>
              </label>
              <Spacing direction="vertical" size={8} />
              <div className="flex justify-between">
                {!_.isEmpty(mbtiValueObject) &&
                  mbtiOptions.map((option, index) => (
                    <RadioSelector
                      key={index}
                      labels={option}
                      updateMbti={(value: string) => {
                        setMbtiValueObject((prev) => {
                          return { ...prev, ...{ [index]: value } }
                        })
                      }}
                      defaultLabel={mbtiValueObject[index.toString()]}
                    />
                  ))}
              </div>
            </div>

            <div className="grid">
              <label className="flex w-full items-center justify-between">
                본인 매력 어필
                <span className="text-caption text-gray">
                  ( <span className="text-pink">{formData.introduce?.length}</span> / 100 )
                </span>
              </label>
              <Spacing direction="vertical" size={8} />
              <TextareaField
                required={true}
                maxLength={100}
                placeholder="ex. 프로필을 가져갈 다른 사람들에게 내 매력을 어필해보세요! (모두가 사용하는 커뮤니티인만큼 부적절한 언어 사용은 피해주세요 :D)"
                value={formData.introduce}
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
                value={formData.contact}
                onChange={(e) => updateFields({ contact: (e.target as HTMLInputElement).value })}
              />
            </div>
          </div>

          <BoxButton isDisabled={canUpdate ? 'abled' : 'disabled'} isLine="filled" size="large">
            <button
              type="submit"
              className="h-full w-full disabled:cursor-not-allowed"
              disabled={!canUpdate}
              onClick={onSubmit}
            >
              수정하기
            </button>
          </BoxButton>

          {stateToast && <ToastMessage>{stateToast}</ToastMessage>}
        </div>
      )}
    </>
  )
}

export default UpdateProfile
