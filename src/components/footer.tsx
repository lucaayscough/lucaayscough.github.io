import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="flex flex-col pt-20 pb-8 gap-8">
      <div className="flex flex-row gap-4 justify-center">
        <Link href="https://instagram.com/lucaayscough" target="_blank">
          <Image
            priority
            src="/images/socials/instagram.svg"
            height={1}
            width={40}
            alt="Instagram"
          />
        </Link>

        <Link href="https://youtube.com/@lucaayscough" target="_blank">
          <Image
            priority
            src="/images/socials/youtube.svg"
            height={1}
            width={40}
            alt="YouTube"
          />
        </Link>

        <Link href="https://soundcloud.com/lucaayscough" target="_blank">
          <Image
            priority
            src="/images/socials/soundcloud.svg"
            height={1}
            width={40}
            alt="Soundcloud"
          />
        </Link>

        <Link href="https://github.com/lucaayscough" target="_blank">
          <Image
            priority
            src="/images/socials/github.svg"
            height={1}
            width={40}
            alt="GitHub"
          />
        </Link>

        <Link href="https://linkedin.com/in/lucaayscough" target="_blank">
          <Image
            priority
            src="/images/socials/Linkedin.svg"
            height={1}
            width={40}
            alt="Linkedin"
          />
        </Link>
      </div>

      <div className="text-center">
        <div>© Luca Ayscough (2023). All rights reserved.</div>
        <div><Link href="mailto:lucaayscough@gmail.com">lucaayscough@gmail.com</Link></div>
      </div>
    </footer>
  )
}