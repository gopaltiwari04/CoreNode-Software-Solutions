import React from "react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="cn-footer">
      <div className="cn-container">
        <div className="cn-footer-grid">
          {/* Column 1: Brand */}
          <div>
            <div className="cn-brand" style={{ marginBottom: "14px" }}>
              <div className="cn-brand-badge">CN</div>
              <div className="cn-brand-text">
                <span className="cn-brand-title" style={{ color: "#ffffff" }}>
                  CoreNode
                </span>
                <span className="cn-brand-sub" style={{ color: "#94a3b8" }}>
                  Software Solutions
                </span>
              </div>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#94a3b8",
                lineHeight: 1.6,
                maxWidth: "320px",
                marginBottom: "16px",
              }}
            >
              Building customized business websites, QR ordering systems, GymOS, attendance platforms, and bespoke software applications for growing businesses.
            </p>
            <Link
              href="/#contact"
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#60a5fa",
              }}
            >
              Send Direct Project Inquiry →
            </Link>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <div className="cn-footer-heading">Navigation</div>
            <ul className="cn-footer-list">
              <li>
                <Link href="/" className="cn-footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#live-products" className="cn-footer-link">
                  Interactive Product Suite
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="cn-footer-link">
                  ₹99 Offer & Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/services" className="cn-footer-link">
                  All Solutions
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="cn-footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: 3 Live Demos + 4th Custom Software Option */}
          <div>
            <div className="cn-footer-heading">Products & Custom Dev</div>
            <ul className="cn-footer-list">
              <li>
                <a
                  href="https://cafe-ordering-system-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cn-footer-link"
                >
                  ☕ Cafe & QR Ordering System ↗
                </a>
              </li>
              <li>
                <a
                  href="https://corenode-gymos.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cn-footer-link"
                >
                  🏋️ CoreNode GymOS Software ↗
                </a>
              </li>
              <li>
                <a
                  href="https://corenode-attend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cn-footer-link"
                >
                  📋 CoreNode Attend System ↗
                </a>
              </li>
              <li>
                <Link href="/#contact" className="cn-footer-link">
                  ⚡ Request Custom Software / App →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Pricing Plans Quick Links */}
          <div>
            <div className="cn-footer-heading">Plans & Setup</div>
            <ul className="cn-footer-list">
              <li>
                <Link href="/#offer-99" className="cn-footer-link">
                  Starter Website — ₹99
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="cn-footer-link">
                  Digital Presence — ₹999
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="cn-footer-link">
                  Smart Ordering — ₹7,499
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="cn-footer-link">
                  Business Pro (AI) — ₹12,999
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="cn-footer-bottom">
          <span>
            © {new Date().getFullYear()} CoreNode Software Solutions. All rights reserved.
          </span>
          <span>Custom Software, SaaS & Business Web Solutions</span>
        </div>
      </div>
    </footer>
  );
}