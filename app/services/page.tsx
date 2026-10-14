import React from "react";
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function ServicesPage() {
  const productsAndServices = [
    {
      badge: "Live Product Demo",
      badgeClass: "cn-badge-green",
      title: "Cafe & QR Ordering System",
      description:
        "Table-specific QR ordering, digital menu categories, customer cart, live kitchen/staff dashboard, and order status tracking.",
      demoUrl: "https://cafe-ordering-system-nine.vercel.app/",
      ctaLabel: "Try Cafe Ordering Demo ↗",
    },
    {
      badge: "Live Product Demo",
      badgeClass: "cn-badge-green",
      title: "CoreNode GymOS — Gym Management Software",
      description:
        "Complete gym management dashboard for tracking members, fee renewals, workout batches, and fitness studio operations.",
      demoUrl: "https://corenode-gymos.vercel.app/",
      ctaLabel: "Try CoreNode GymOS Demo ↗",
    },
    {
      badge: "Live Product Demo",
      badgeClass: "cn-badge-green",
      title: "CoreNode Attend — Attendance & Shift System",
      description:
        "Digital attendance tracking and member/staff check-in management built for libraries, institutes, and growing teams.",
      demoUrl: "https://corenode-attend.vercel.app/",
      ctaLabel: "Try CoreNode Attend Demo ↗",
    },
    {
      badge: "Tailored Engineering",
      badgeClass: "cn-badge-purple",
      title: "Request Custom Software / Application",
      description:
        "Need a bespoke web app, admin portal, booking engine, or business automation system? We engineer custom software around your exact workflow.",
      demoUrl: "/#contact",
      ctaLabel: "Request Custom Software →",
    },
  ];

  return (
    <div>
      <SiteNav />
      <main>
        <section className="cn-section-soft" style={{ padding: "64px 0" }}>
          <div className="cn-container">
            <div className="cn-section-header" style={{ marginBottom: 0 }}>
              <div className="cn-eyebrow">Solutions, Demos & Custom Apps</div>
              <h1 className="cn-h1">
                Our Live Software Products & Custom Development
              </h1>
              <p className="cn-lead">
                Test-drive any of our 3 live SaaS products below, claim our ₹99 starter business website, or request a custom software application.
              </p>
            </div>
          </div>
        </section>

        <section className="cn-section-white">
          <div className="cn-container">
            <div className="cn-grid-2">
              {productsAndServices.map((item) => (
                <div key={item.title} className="cn-card">
                  <div>
                    <span className={item.badgeClass}>{item.badge}</span>
                    <h2
                      className="cn-h3"
                      style={{ marginTop: "12px", fontSize: "1.45rem" }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="cn-lead"
                      style={{ fontSize: "14.5px", marginBottom: "22px" }}
                    >
                      {item.description}
                    </p>
                  </div>
                  {item.demoUrl.startsWith("http") ? (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cn-btn-primary"
                    >
                      {item.ctaLabel}
                    </a>
                  ) : (
                    <Link href={item.demoUrl} className="cn-btn-primary">
                      {item.ctaLabel}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}