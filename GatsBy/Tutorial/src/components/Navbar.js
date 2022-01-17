import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <menu>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </menu>
  )
}

export default Navbar
