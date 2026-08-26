"use client";

import Link from "next/link";
import { useState } from "react";

const links: [string, string][] = [
  ["Solutions", "/#solutions"],
  ["Services", "/services"],
  ["How we work", "/#model"],
  ["Why CoreNode", "/#why"],
  ["Contact", "/#contact"],
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link className="brand" href="/" onClick={close}>
        <span className="brand-mark"><i /><i /><i /></span>
        <span>CoreNode</span>
      </Link>
      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span />
      </button>
      <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={close}>{label}</Link>
        ))}
        <Link className="nav-cta" href="/#quote" onClick={close}>Get a quote <span>↗</span></Link>
      </div>
    </nav>
  );
}
