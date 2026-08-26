import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <Link className="brand" href="/">
        <span className="brand-mark"><i /><i /><i /></span>
        <span>CoreNode</span>
      </Link>
      <p>Software. Engineered intelligently.</p>
      <div>
        <Link href="/#solutions">Solutions</Link>
        <Link href="/services">Services</Link>
        <Link href="/#why">About</Link>
        <Link href="/#contact">Contact</Link>
        <a href="tel:+917011775286">+91 70117 75286</a>
        <span>© 2026 CoreNode Software Solutions</span>
      </div>
    </footer>
  );
}
