// components/content_embed.tsx

export default function ContentEmbed({ url }: { url: string }) {
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