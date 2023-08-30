import ContentEmbed from "@/components/content_embed"
import Image from "next/image"

export default function Home() {
  return (
    <main className="w-sm">
      <h1>About</h1>

      <ContentEmbed  url="DNTj3ZSZSrE" service="youtube" />
      
      <p>
        I am a composer, sound designer and programmer with over a decade of experience in the intersection of music, sound, and technology. My expertise lies in audio production and composition. My portfolio includes composing for various media forms such as film, TV, video games, and spoken word. I have had the privilege to work with clients like BigRock, Cairn Housing Association, and Blackwood Homes and Care, creating bespoke sound solutions tailored to their unique needs.
      </p>
      

      <p>
        I am also the founder of the Chroma Project, a free and open-source software company, under which I develop audio plug-ins. One such project employs a generative adversarial neural network, which outputs audio samples through the exploration of a latent space based on a large dataset of raw audio. I have also built a pitch tracker which based on monophonic audio input, creates a histogram visualisation of the pitch contour and can convert the estimated frequency into MPE midi data.
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
