import rightIcon from '../../../assets/rightIcon.svg'

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  hasButton?: boolean
}
const ListItem = ({ hasButton = true, children, onClick }: ListItemProps) => {
  return (
    <div className="flex h-[48px] cursor-pointer items-center justify-between" onClick={onClick}>
      <li className="text-body2">{children}</li>
      {hasButton && (
        <img src={rightIcon as string} className="h-[20px] w-[20px]" alt={'오른쪽 화살표'} />
      )}
    </div>
  )
}

const ListRoot = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="w-screen px-7 py-4">
      <div className="flex h-[48px] items-center text-body1">{title}</div>
      <ul> {children} </ul>
    </div>
  )
}

export const List = Object.assign(ListRoot, { Item: ListItem })
