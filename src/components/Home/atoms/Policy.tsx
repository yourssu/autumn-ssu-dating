const Link = ({ link, children }: { link: string; children: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="text-blue-600 underline underline-offset-2"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

const Policy = () => {
  return (
    <p className="whitespace-pre-line text-center text-caption">
      로그인할 경우 SSU개팅 <Link link="link1">서비스 이용약관</Link>과{'\n'}
      <Link link="link2"> 개인정보 처리방침</Link>에 동의하는 것으로 간주됩니다.
    </p>
  )
}

export default Policy
