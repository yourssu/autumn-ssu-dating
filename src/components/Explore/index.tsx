import Tab from './atoms/Tab'
import TabBar from './atoms/TabBar'

import TypeButton from '../common/TypeButton'

const Explore = () => {
  return (
    <div className="h-[calc(100%-44px)] overflow-y-scroll">
      <TabBar selected="female" />
      <div>
        <TypeButton>
          <div>🤔</div>
        </TypeButton>
        <TypeButton>
          <div>🤔</div>
        </TypeButton>
        <TypeButton>
          <div>🤔</div>
        </TypeButton>
        <TypeButton>
          <div>🤔</div>
        </TypeButton>
        <TypeButton>
          <div>🤔</div>
        </TypeButton>
        <TypeButton>
          <div>🤔</div>
        </TypeButton>
        <TypeButton>
          <div>🤔</div>
        </TypeButton>
      </div>
    </div>
  )
}

export default Explore
