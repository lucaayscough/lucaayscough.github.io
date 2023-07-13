const Switch = ({ id, isToggled, onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />

      <span className="tag">
        {id.replace("_", " ").toUpperCase()}
      </span>
    </label>
  )
}

export default Switch