import { FormStepProps } from '../../types/register.type'

const PersonalInfoStep = ({ nickname, mbti, appeal, tel, updateFields }: FormStepProps) => {
  return (
    <>
      <p>아래 정보들을 입력해 본인을 소개해보세요!</p>

      <div className="grid grid-cols-1 gap-y-2">
        <label>
          이름 ( <span className="text-pink">{nickname.length}</span> / 10 )
        </label>
        <input
          required
          maxLength={10}
          placeholder="ex. 숭실대 뿌슝이"
          value={nickname}
          onChange={(e) => updateFields({ nickname: e.target.value })}
          className="border"
        />

        <label>MBTI</label>
        {mbti}

        <label>
          본인 매력 어필 ( <span className="text-pink">{appeal.length}</span> / 100 )
        </label>
        <textarea
          required
          maxLength={100}
          value={appeal}
          onChange={(e) => updateFields({ appeal: e.target.value })}
          className="border"
        />

        <label>연락처 (인스타그램 ID / 전화번호)</label>
        <input
          required
          placeholder="ex. @yourssu_official"
          value={tel}
          onChange={(e) => updateFields({ tel: e.target.value })}
          className="border"
        />
      </div>

      <p>등록 시 이용권 한 장이 차감됩니다. (남은 이용권수: n장)</p>
      <button type="submit">등록하기</button>
    </>
  )
}

export default PersonalInfoStep
