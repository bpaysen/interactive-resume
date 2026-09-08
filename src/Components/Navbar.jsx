import React from "react";

const navigation = [
  { href: "#profile", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#abilities", label: "Abilities" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Resume navigation">
      <a href="#top" className="site-nav__top" aria-label="Back to top">
        <span aria-hidden="true">⌃</span>
      </a>

      <ul className="site-nav__items">
        {navigation.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="site-nav__link">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}