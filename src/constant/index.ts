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
  { src: '/src/assets/dogIcon.png', label: '강아지', engLabel: 'DOG' },
  { src: '/src/assets/foxIcon.png', label: '여우', engLabel: 'FOX' },
  { src: '/src/assets/wolfIcon.png', label: '늑대', engLabel: 'WOLF' },
  { src: '/src/assets/dinoIcon.png', label: '공룡', engLabel: 'DINO' },
  { src: '/src/assets/bearIcon.png', label: '곰', engLabel: 'BEAR' },
  { src: '/src/assets/ppussungIcon.png', label: '뿌슝이', engLabel: 'PUSSUNG' },
]

export const ANIMAL_OPTIONS_FEMALE: FormStepOption[] = [
  { src: '/src/assets/dogIcon.png', label: '강아지', engLabel: 'DOG' },
  { src: '/src/assets/catIcon.png', label: '고양이', engLabel: 'CAT' },
  { src: '/src/assets/foxIcon.png', label: '여우', engLabel: 'FOX' },
  { src: '/src/assets/rabbitIcon.png', label: '토끼', engLabel: 'RABBIT' },
  { src: '/src/assets/hamsterIcon.png', label: '햄스터', engLabel: 'HAMSTER' },
  { src: '/src/assets/ppussungIcon.png', label: '뿌슝이', engLabel: 'PUSSUNG' },
]
