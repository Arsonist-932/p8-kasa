import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <header className="App-Navbar">
      <img src={logo} className="App-Logo" alt="logo" />
      <nav>
        <ul className="App-Navlink">
          {/* ROUTE VERS LA PAGE HOME  */}
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li>Accueil</li>
          </NavLink>
          {/* ROUTE VERS LA PAGE ABOUT  */}
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
