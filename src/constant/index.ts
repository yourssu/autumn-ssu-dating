import { FormStepOption } from '../types/register.type'

export const LINK_TITLE: { [key: string]: { title: string; backNav?: string } } = {
  '/': { title: '홈' },
  '/explore': { title: '둘러보기', backNav: '/' },
  '/register': { title: '', backNav: '' },
  '/register?step=0': { title: '성별 고르기', backNav: '/' },
  '/register?step=1': { title: '동물 고르기', backNav: '/' },
  '/register?step=2': { title: '본인 소개하기', backNav: '/' },
}

export const ANIMAL_OPTIONS_MALE: FormStepOption[] = [
  { src: '/src/assets/dogIcon.png', label: '강아지' },
  { src: '/src/assets/foxIcon.png', label: '여우' },
  { src: '/src/assets/wolfIcon.png', label: '늑대' },
  { src: '/src/assets/dinoIcon.png', label: '공룡' },
  { src: '/src/assets/bearIcon.png', label: '곰' },
  { src: '/src/assets/ppussungIcon.png', label: '뿌슝이' },
]

export const ANIMAL_OPTIONS_FEMALE: FormStepOption[] = [
  { src: '/src/assets/dogIcon.png', label: '강아지' },
  { src: '/src/assets/catIcon.png', label: '고양이' },
  { src: '/src/assets/foxIcon.png', label: '여우' },
  { src: '/src/assets/rabbitIcon.png', label: '토끼' },
  { src: '/src/assets/hamsterIcon.png', label: '햄스터' },
  { src: '/src/assets/ppussungIcon.png', label: '뿌슝이' },
]
