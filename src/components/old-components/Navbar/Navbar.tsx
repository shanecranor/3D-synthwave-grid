import "./Navbar.scss";
import Link from "next/link";
const navbarLinks = {
  Home: "https://shane.cranor.org",
  Code: "/code",
  Music: "/music",
  Photos: "https://shane.cranor.org/Photos/index.html",
};
export default function Navbar() {
  return (
    <nav className="navbar-container">
      {Object.entries(navbarLinks).map(([text, url]) => (
        <Link legacyBehavior href={url} key={text}>
          <a className="nav-link">{text}</a>
        </Link>
      ))}
    </nav>
  );
}
