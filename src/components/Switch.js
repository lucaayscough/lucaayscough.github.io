import { useState } from 'react'
import "./Switch.css"

const Switch = ({ id, isToggled, onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />

      <span className="tag">
        {id}
        {isToggled}
      </span>
    </label>
  )
}

export default Switch