import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header className="flex flex-col items-center justify-center px-8 pb-12 pt-20 gap-8">
      <div>
        <Image
          priority
          src="/images/header.svg"
          height={1}
          width={440}
          alt="Luca Ayscough"
        />
      </div>

      <div className="w-full h-1 bg-red"></div>
      
      <nav className="flex flex-col md:flex-row text-lg font-light gap-4">
        <Link className="headerLink" href="/">ABOUT</Link>
        <Link className="headerLink" href="/media">MEDIA</Link>
        {/* <Link className="headerLink" href="/music">MUSIC</Link> */}
        <Link className="headerLink" target="_blank" href="https://chromaaudio.gumroad.com">SOFTWARE</Link>
        <Link className="headerLink" href="mailto:lucaayscough@gmail.com">CONTACT</Link>
      </nav>
    </header>
  )
}

export default Header