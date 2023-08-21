import "./content_embed.css"

function ContentEmbed({ url }) {
  return (
    <div className="contentEmbed">
      <div className="embedContainer">
        <iframe
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>
    </div>
  )
}

export default ContentEmbed