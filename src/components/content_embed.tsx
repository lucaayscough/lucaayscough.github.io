// components/content_embed.tsx

export default function ContentEmbed({ url }: { url: string }) {
  return (
    <div className="mb-12 rounded-2xl overflow-hidden">
      <div className="relative pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
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