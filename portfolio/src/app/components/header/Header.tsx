import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-container">
        <div className="header-logo">
          <Link href="/">
            LP<span>.</span>
          </Link>
        </div>

        <div className="header-menu">
          <Link href="#inicio">Home</Link>
          <Link href="#sobre">About</Link>
          <Link href="#projetos">Projects</Link>
          <Link href="#contato">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
