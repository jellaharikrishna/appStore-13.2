import './index.css'

const TabItem = props => {
  const {tabDetails, onToggleTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabBtn = () => {
    onToggleTab(tabId)
  }
  const activeTabResult = isActive ? 'onclick-tab-btn' : 'tab-btn'

  return (
    <li>
      <button type="button" className={activeTabResult} onClick={onClickTabBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
