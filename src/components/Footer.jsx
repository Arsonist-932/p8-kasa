import { Link } from "react-router-dom";
import LogoF from "../assets/images/logo_footer.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <Link to="/">
          <img src={LogoF} className="App-Logo" alt="logo" />
        </Link>
        <p>© {currentYear} Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
