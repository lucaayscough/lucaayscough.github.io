import ContentEmbed from "@/components/content_embed"
import Image from "next/image"

export default function Home() {
  return (
    <main className="w-sm">
      <h1>About</h1>

      <ContentEmbed  url="DNTj3ZSZSrE" service="youtube" />
      
      <p>
        I am a composer, sound designer and programmer with experience in the intersection of music, sound, and technology. My portfolio includes compositions for various media forms such as film, TV, video games, and spoken word. I have been privileged to work with clients like BigRock, Cairn Housing Association, and Blackwood Homes and Care. I am also the founder of Chroma Audio, a free and open-source software project, under which I develop audio plug-ins.
      </p>

      <Image
        className="rounded-full"
        src="/images/about/profile.jpg"
        alt="Profile"
        width={400}
        height={1}
      />

    </main> 
  )
}
