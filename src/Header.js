import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <header>
      <div className="nameHeader">LUCA AYSCOUGH</div>

      <nav className="headerLinks">
        <Link className="headerLink" to="/">HOME</Link>
        <Link className="headerLink" to="/portfolio">PORTFOLIO</Link>
        <Link className="headerLink" to="mailto:lucaayscough@gmail.com">CONTACT</Link>
      </nav>
    </header>
  )
}

export default Header