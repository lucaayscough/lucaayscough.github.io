import Link from "next/link"
import "./header.css"

function Header() {
  return (
    <header className="flex flex-col items-center justify-center p-12">
      <div className="nameHeader">LUCA AYSCOUGH</div>

      <nav className="flex flex-row">
        <Link className="headerLink" href="/">HOME</Link>
        <Link className="headerLink" href="/portfolio">PORTFOLIO</Link>
        <Link className="headerLink" href="mailto:lucaayscough@gmail.com">CONTACT</Link>
      </nav>

      
    </header>
  )
}

export default Header