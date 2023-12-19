import { FormStepOption } from '../types/register.type'

export const LINK_TITLE: { [key: string]: { title: string; backNav?: string } } = {
  '/': { title: '홈' },
  '/explore': { title: '내 이상형 찾기', backNav: '/' },
  '/register': { title: '', backNav: '' },
  '/register?step=0': { title: '성별 고르기', backNav: '/' },
  '/register?step=1': { title: '동물 고르기', backNav: '/' },
  '/register?step=2': { title: '본인 소개하기', backNav: '/' },
  '/user': { title: '마이페이지', backNav: '/' },
  '/user/edit': { title: '내 프로필 수정하기', backNav: '/user' },
  '/user/contact': { title: '내가 가져온 프로필', backNav: '/user' },
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

export const LOGIN_LINK = 'https://ssudate-server.yourssu.com/oauth2/authorization/kakao'
export const POLICY_LINK =
  'https://flying-judge-a15.notion.site/SSU-5e06f7afe192412f9ddcce4cd10b5f1c'
export const PRIVACY_LINK =
  'https://flying-judge-a15.notion.site/SSU-5dca77c6f3f04fecac6df2805d013f11'
