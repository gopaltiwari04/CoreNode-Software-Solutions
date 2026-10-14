"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Interactive Simulator", href: "/#interactive-simulator" },
    { label: "Live Demos & Custom App", href: "/#live-products" },
    { label: "₹99 Offer & Pricing", href: "/#pricing" },
    { label: "Solutions", href: "/services" },
    { label: "FAQ", href: "/#why-corenode" },
  ];

  return (
    <header className="cn-header">
      {/* Live Top Scroll Progress Bar */}
      <div
        className="cn-scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="cn-container cn-nav-bar">
        <Link href="/" className="cn-brand">
          <div className="cn-brand-badge">CN</div>
          <div className="cn-brand-text">
            <span className="cn-brand-title">CoreNode</span>
            <span className="cn-brand-sub">Software Solutions</span>
          </div>
        </Link>

        <nav className="cn-nav-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="cn-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="cn-nav-cta" style={{ display: "flex", gap: "10px" }}>
          <Link
            href="/#offer-99"
            className="cn-btn-secondary"
            style={{ padding: "10px 16px", fontSize: "13.5px" }}
          >
            ⚡ ₹99 Website
          </Link>
          <Link
            href="/#contact"
            className="cn-btn-primary"
            style={{ padding: "10px 18px", fontSize: "13.5px" }}
          >
            Request Project →
          </Link>
        </div>

        <button
          type="button"
          className="cn-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕ Close" : "☰ Menu"}
        </button>
      </div>

      <div className={`cn-mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="cn-mobile-nav-list">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="cn-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="cn-btn-primary"
            style={{ marginTop: "8px", width: "100%" }}
            onClick={() => setMenuOpen(false)}
          >
            Send Project Inquiry
          </Link>
        </div>
      </div>
    </header>
  );
}