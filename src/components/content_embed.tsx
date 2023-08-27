// components/content_embed.tsx

export default function ContentEmbed({ url, service }: { url: string, service: string }) {
  const youtube: string = "youtube"

  if (service === "youtube") {
    return (
      <div className="w-full mb-12 overflow-hidden">
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/` + url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    )
  }

  else if (service === "vimeo") {
    return (
      <div className="w-full mb-12 overflow-hidden">
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://player.vimeo.com/video/` + url}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    )
  }

  else if (service === "soundcloud") {
    return (
      <div className="w-full mb-12 overflow-hidden">
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/` + url + `&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}>
          </iframe>
  
        </div>
      </div>
    )
  }

  else {
    return null
  }
}