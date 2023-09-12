export const LINK_TITLE: { [key: string]: { title: string; backNav?: string } } = {
  '/': { title: '홈' },
  '/explore': { title: '둘러보기', backNav: '/' },
  '/register': { title: '', backNav: '' },
  '/register?step=0': { title: '성별 고르기', backNav: '/' },
  '/register?step=1': { title: '동물 고르기', backNav: '/' },
  '/register?step=2': { title: '본인 소개하기', backNav: '/' },
}
