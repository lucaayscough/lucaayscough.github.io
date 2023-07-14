import Switch from "./switch.js"
import "./tags.css"

function Tags({ allTags, selectedTags, setSelectedTags }) {
  return (
    <nav className="tags">
      {allTags.map(tag => (
        <Switch
          className="filterSwitch"
          key={tag}
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
    </nav>
  )
}

export default Tags