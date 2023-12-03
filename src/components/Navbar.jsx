import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <header className="App-Navbar">
      <img src={logo} className="App-Logo" alt="logo" />
      <nav>
        <ul className="App-Navlink">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>

          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
