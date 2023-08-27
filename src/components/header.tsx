import Link from "next/link"
import "./header.css"

function Header() {
  return (
    <header className="flex flex-col items-center justify-center p-12 gap-8">
      <div className="nameHeader">LUCA AYSCOUGH</div>

      <div className="redBar"></div>
      
      <nav className="navBar">
        <Link className="headerLink" href="/">ABOUT</Link>
        <Link className="headerLink" href="/media">MEDIA</Link>
        <Link className="headerLink" href="/music">MUSIC</Link>
        <Link className="headerLink" href="/software">SOFTWARE</Link>
        <Link className="headerLink" href="mailto:lucaayscough@gmail.com">CONTACT</Link>
      </nav>
    </header>
  )
}

export default Header