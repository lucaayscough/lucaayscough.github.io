import { useState } from 'react'

const Switch = ({ id, isToggled, onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />

      <span className="tag">
        <div className="tagNameContainer">
          <div className="tagName">
            {id.replace("_", " ").toUpperCase()}
          </div>
        </div>
      </span>
    </label>
  )
}

export default Switch