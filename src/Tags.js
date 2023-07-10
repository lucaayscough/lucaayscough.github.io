import Switch from "./components/Switch.js"

function Tags({ allTags, selectedTags, setSelectedTags }) {
  return (
    <div className="switches">
      {allTags.map(tag => (
        <Switch
          className="filterSwitch"
          id={tag}
          isToggled={selectedTags.includes(tag)}
          onToggle={() =>
            setSelectedTags(prevTags =>
              prevTags.includes(tag)
                ? prevTags.filter(t => t !== tag)
                : [...prevTags, tag]
              )
          }
        />
      ))}
    </div>
  )
}

export default Tags