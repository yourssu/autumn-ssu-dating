import { useState } from 'react'

import { AxiosError } from 'axios'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'

import { updateProfile } from '../../apis/registerApi'
import { UpdateRequest } from '../../types/register.type'
import TextareaField from '../Register/atoms/TextareaField'
import BoxButton from '../common/BoxButton'
import InputField from '../common/InputField'
import Spacing from '../common/Spacing'

const UpdateProfile = () => {
  const originData: UpdateRequest = {
    nickName: '멍멍이',
    mbti: 'INFP',
    introduce: '잘짖어요............',
    contact: '@fakeid',
  }
  const [formData, setFormData] = useState<UpdateRequest>(originData)

  const hasDifference = !_.isEqual(originData, formData)
  const canUpdate = formData.nickName && formData.introduce && formData.contact && hasDifference

  const navigate = useNavigate()

  function updateFields(fields: Partial<UpdateRequest>) {
    setFormData((prev) => {
      return { ...prev, ...fields }
    })
  }

  async function onSubmit(e: React.MouseEvent) {
    e.preventDefault()
    console.dir(formData)

    // try {
    //   const response = await updateProfile(formData)
    //   전역 ticket 값을 response.ticket 값으로 업데이트
    //   navigate('/user')
    // } catch (error) {
    //   const updateError = error as AxiosError
    //   실패 토스트 노출
    // }
  }

  return (
    <div className="flex h-[calc(100%-44px-34px)] select-none flex-col items-center justify-between overflow-y-scroll scrollbar-hide">
      <div className="grid gap-y-6 text-body2">
        <Spacing direction="vertical" size={24} />
        <div>
          <label className="flex w-full items-center justify-between">
            닉네임
            <span className="text-caption text-gray">
              ( <span className="text-pink">{formData?.nickName?.length}</span> / 9 )
            </span>
          </label>
          <Spacing direction="vertical" size={8} />
          <InputField
            required
            width={342}
            maxLength={9}
            placeholder="ex. 숭실대 뿌슝이"
            value={formData?.nickName}
            onChange={(e) => updateFields({ nickName: (e.target as HTMLInputElement).value })}
          />
        </div>

        <div className="grid">
          <label className="flex w-full items-center justify-between">
            본인 매력 어필
            <span className="text-caption text-gray">
              ( <span className="text-pink">{formData?.introduce?.length}</span> / 100 )
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
    </div>
  )
}

export default UpdateProfile
