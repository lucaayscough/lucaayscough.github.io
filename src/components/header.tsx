import Link from "next/link"
import "./header.css"

function Header() {
  return (
    <header className="flex flex-col items-center justify-center p-12">
      <div className="nameHeader">LUCA AYSCOUGH</div>
      

      <label className="hamburgerMenu">
        <input type="checkbox"></input>
      </label>

      <aside className="navBar">
        <nav>
          <Link className="headerLink" href="/">HOME</Link>
          <Link className="headerLink" href="/portfolio">PORTFOLIO</Link>
          <Link className="headerLink" href="mailto:lucaayscough@gmail.com">CONTACT</Link>
        </nav>
      </aside>
    </header>
  )
}

export default Header