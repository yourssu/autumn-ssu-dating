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
  { src: '/dogIcon.png', label: '강아지', animals: 'DOG' },
  { src: '/bearIcon.png', label: '곰', animals: 'BEAR' },
  { src: '/foxIcon.png', label: '여우', animals: 'FOX' },
  { src: '/wolfIcon.png', label: '늑대', animals: 'WOLF' },
  { src: '/dinoIcon.png', label: '공룡', animals: 'DINO' },
  { src: '/ppussungIcon.png', label: '뿌슝이', animals: 'PUSSUNG' },
]

export const ANIMAL_OPTIONS_FEMALE: FormStepOption[] = [
  { src: '/dogIcon.png', label: '강아지', animals: 'DOG' },
  { src: '/catIcon.png', label: '고양이', animals: 'CAT' },
  { src: '/rabbitIcon.png', label: '토끼', animals: 'RABBIT' },
  { src: '/foxIcon.png', label: '여우', animals: 'FOX' },
  { src: '/hamsterIcon.png', label: '햄스터', animals: 'HAMSTER' },
  { src: '/ppussungIcon.png', label: '뿌슝이', animals: 'PUSSUNG' },
]
