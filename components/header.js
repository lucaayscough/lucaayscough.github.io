import Link from "next/link"
import "./Header.css"

function Header() {
  return (
    <header>
      <div className="nameHeader">LUCA AYSCOUGH</div>

      <nav className="headerLinks">
        <Link className="headerLink" href="/">HOME</Link>
        <Link className="headerLink" href="/portfolio">PORTFOLIO</Link>
        <Link className="headerLink" href="mailto:lucaayscough@gmail.com">CONTACT</Link>
      </nav>
    </header>
  )
}

export default Header