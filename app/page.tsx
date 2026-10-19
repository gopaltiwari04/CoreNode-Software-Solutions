"use client";

import React, { useState, useEffect, useRef } from "react";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";

const CORENODE_DEMOS = {
  cafe: "https://cafe-ordering-system-nine.vercel.app/",
  gymos: "https://corenode-gymos.vercel.app/",
  attend: "https://corenode-attend.vercel.app/",
};

// Assembled privately at runtime — never displayed in the UI
const getPrivateRecipient = () => ["tiwarigopal94", "gmail.com"].join("@");

function ScrollReveal({
  children,
  delayClass = "",
}: {
  children: React.ReactNode;
  delayClass?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`cn-reveal ${visible ? "is-visible" : ""} ${delayClass}`}
    >
      {children}
    </div>
  );
}

const PRODUCT_SUITE = [
  {
    id: "cafe-pos",
    tabLabel: "☕ Cafe & QR Ordering",
    badge: "Live Production Demo",
    category: "Food & Beverage SaaS",
    title: "Smart Cafe Website & Table QR Ordering System",
    url: CORENODE_DEMOS.cafe,
    isCustomBuilder: false,
    description:
      "Complete digital presence and floor ordering system for cafes and restaurants. Customers scan a table QR code to browse categories, view photos & prices, place orders in their cart, and track live kitchen status.",
    highlights: [
      "Table-specific QR ordering with interactive customer cart",
      "Live kitchen & staff order dashboard with status tracking",
      "Digital menu management, categories, photos, and pricing",
      "Optional AI Chatbot & UPI payment integration for scaling outlets",
    ],
    ctaText: "Try Cafe Ordering Demo ↗",
  },
  {
    id: "gym-os",
    tabLabel: "🏋️ CoreNode GymOS",
    badge: "Live Production Demo",
    category: "Fitness & Club Management",
    title: "CoreNode GymOS — Complete Gym Management Software",
    url: CORENODE_DEMOS.gymos,
    isCustomBuilder: false,
    description:
      "An all-in-one operating system for modern gyms, fitness studios, and trainers. Manage active memberships, billing renewals, batch schedules, trainer assignments, and member inquiries from one command center.",
    highlights: [
      "Member directory with plan status, expirations & fee tracking",
      "Workout batches, trainer rosters, and attendance logs",
      "Financial overview and automated renewal alerts",
      "Dedicated public landing page integration for new gym inquiries",
    ],
    ctaText: "Try CoreNode GymOS Demo ↗",
  },
  {
    id: "corenode-attend",
    tabLabel: "📋 CoreNode Attend",
    badge: "Live Production Demo",
    category: "Attendance & Workforce OS",
    title: "CoreNode Attend — Smart Attendance & Shift Management",
    url: CORENODE_DEMOS.attend,
    isCustomBuilder: false,
    description:
      "Streamlined digital attendance, shift tracking, and check-in management built for study libraries, educational institutes, offices, and growing teams.",
    highlights: [
      "Real-time daily check-in / check-out attendance logging",
      "Staff, student, or member roster organization",
      "Clean attendance history reports and status summaries",
      "Fast web-based access across mobile phones, tablets, and desktops",
    ],
    ctaText: "Try CoreNode Attend Demo ↗",
  },
  {
    id: "custom-software",
    tabLabel: "⚡ Custom Software / App",
    badge: "Tailored Engineering",
    category: "Custom Web & App Studio",
    title: "Custom Software, Web Portals & Business Applications",
    url: "#contact",
    isCustomBuilder: true,
    description:
      "Have a unique workflow or software idea that doesn't fit an off-the-shelf tool? We design and build custom web applications, internal dashboards, booking systems, and client portals tailored to your exact specifications.",
    highlights: [
      "Custom admin dashboards, analytics, and role-based staff portals",
      "UPI / payment gateway, WhatsApp alerts, and custom API integrations",
      "Inventory, billing, CRM, or appointment booking engines",
      "Modular architecture built for your business from day one",
    ],
    ctaText: "Request Custom Software Quote →",
  },
];

const CUSTOM_APP_MODULES = [
  "📊 Admin & Analytics Dashboard",
  "💳 UPI & Online Payments",
  "🔐 Staff Role & Login Access",
  "💬 Automated WhatsApp Alerts",
  "📱 Mobile-First Customer Portal",
  "🤖 24/7 AI Support Assistant",
  "📦 Inventory / Catalog Manager",
  "📅 Booking & Slot Scheduling",
];

const SAMPLE_MENU_ITEMS = [
  { id: "item-1", name: "☕ Hazelnut Cold Coffee", price: 160, prep: "4 mins" },
  { id: "item-2", name: "🥪 Grilled Paneer Panini", price: 210, prep: "7 mins" },
  { id: "item-3", name: "🍟 Peri-Peri Crispy Fries", price: 130, prep: "5 mins" },
  { id: "item-4", name: "🧋 Classic Belgian Shake", price: 190, prep: "4 mins" },
];

const FAQ_ITEMS = [
  {
    q: "What is included in the ₹99 Landing Page & Customized Business Website offer?",
    a: "You get a professionally designed, mobile-responsive landing page customized to your brand identity, showcasing your services, about section, and direct WhatsApp/call/inquiry buttons so customers can reach you immediately.",
  },
  {
    q: "Do my cafe customers need to download an app to use the QR Ordering System?",
    a: "No app download is required. Customers simply scan the QR code on their table using their phone camera, browse your live digital menu, add items to their cart, and place their order directly in the browser.",
  },
  {
    q: "Can I try the Cafe Ordering, GymOS, and Attend software before inquiring?",
    a: "Yes! Every product card on this website is connected directly to our live production demos. Click any preview window or 'Try Demo' button to test the actual software in a new tab.",
  },
  {
    q: "What if I need a custom software application that is different from the 3 demos?",
    a: "We specialize in custom software development. Use our Custom Software Blueprint selector on this page or select 'Custom Software / Application Development' in the inquiry form to share your requirements.",
  },
];

function LiveWebsiteSnapshot({
  url,
  title,
  height = 340,
  allowDeviceToggle = false,
  onOpenTheater,
}: {
  url: string;
  title: string;
  height?: number;
  allowDeviceToggle?: boolean;
  onOpenTheater?: (url: string, title: string) => void;
}) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="cn-browser-frame">
      <div className="cn-browser-bar">
        <div className="cn-browser-dots">
          <span className="cn-dot cn-dot-red" />
          <span className="cn-dot cn-dot-amber" />
          <span className="cn-dot cn-dot-green" />
        </div>
        <div className="cn-browser-url">{url}</div>

        {allowDeviceToggle && (
          <div className="cn-device-toggle">
            <button
              type="button"
              onClick={() => setDevice("desktop")}
              className={`cn-device-btn ${
                device === "desktop" ? "active" : ""
              }`}
            >
              🖥️ Desktop
            </button>
            <button
              type="button"
              onClick={() => setDevice("mobile")}
              className={`cn-device-btn ${device === "mobile" ? "active" : ""}`}
            >
              📱 Mobile
            </button>
          </div>
        )}

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "11.5px",
            fontWeight: 800,
            color: "#2563eb",
            flexShrink: 0,
          }}
        >
          Open ↗
        </a>
      </div>

      <div className="cn-browser-viewport" style={{ height: `${height}px` }}>
        {device === "desktop" ? (
          <iframe
            src={url}
            title={title}
            className="cn-browser-iframe"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <div className="cn-mobile-bezel">
            <iframe
              src={url}
              title={`${title} Mobile Preview`}
              className="cn-mobile-iframe"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        )}

        <div className="cn-browser-overlay">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: 1, minWidth: "140px" }}
          >
            <div
              style={{
                fontSize: "10.5px",
                fontWeight: 700,
                color: "#93c5fd",
                textTransform: "uppercase",
              }}
            >
              Live Production App
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.25,
              }}
            >
              {title}
            </div>
          </a>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {onOpenTheater && (
              <button
                type="button"
                onClick={() => onOpenTheater(url, title)}
                className="cn-theater-pill"
              >
                ⚡ Interact Here
              </button>
            )}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="cn-launch-pill"
            >
              Try Demo ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const heroIndustries = [
    "Cafes & Restaurants",
    "Gyms & Fitness Clubs",
    "Study Libraries",
    "Growing Local Brands",
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % heroIndustries.length);
    }, 2600);
    return () => clearInterval(timer);
  }, [heroIndustries.length]);

  const [activeProductId, setActiveProductId] = useState(PRODUCT_SUITE[0].id);
  const activeProduct =
    PRODUCT_SUITE.find((p) => p.id === activeProductId) || PRODUCT_SUITE[0];

  const [simCart, setSimCart] = useState<
    { name: string; price: number; qty: number }[]
  >([
    { name: "☕ Hazelnut Cold Coffee", price: 160, qty: 2 },
    { name: "🥪 Grilled Paneer Panini", price: 210, qty: 1 },
  ]);
  const [kotStatus, setKotStatus] = useState<
    "New Table Order" | "Kitchen Preparing" | "Ready to Serve"
  >("New Table Order");

  const addToSimCart = (item: { name: string; price: number }) => {
    setSimCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { name: item.name, price: item.price, qty: 1 }];
    });
    setKotStatus("New Table Order");
  };

  const cycleKotStatus = () => {
    if (kotStatus === "New Table Order") setKotStatus("Kitchen Preparing");
    else if (kotStatus === "Kitchen Preparing") setKotStatus("Ready to Serve");
    else setKotStatus("New Table Order");
  };

  const simTotal = simCart.reduce((acc, i) => acc + i.price * i.qty, 0);

  const [selectedModules, setSelectedModules] = useState<string[]>([
    "📊 Admin & Analytics Dashboard",
    "💳 UPI & Online Payments",
    "📱 Mobile-First Customer Portal",
  ]);

  const toggleModule = (mod: string) => {
    setSelectedModules((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  };

  const [theaterApp, setTheaterApp] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(
    "₹99 Landing Page & Customized Business Website Offer"
  );
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSelectPlanAndScroll = (planName: string, prefillMsg?: string) => {
    setSelectedPlan(planName);
    if (prefillMsg) {
      setMessage(prefillMsg);
    }
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleCustomBlueprintSubmit = () => {
    const modsText =
      selectedModules.length > 0
        ? `Requested Custom Modules: ${selectedModules.join(", ")}. `
        : "";
    handleSelectPlanAndScroll(
      "Custom Software / Application Development",
      `${modsText}We are looking to build a custom software application for our business.`
    );
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    const recipient = getPrivateRecipient();
    const subject = `New CoreNode Inquiry: ${selectedPlan} - ${
      business || name
    }`;
    const formattedBody = `Name: ${name}\nBusiness Name: ${
      business || "N/A"
    }\nPhone / Email: ${contactInfo}\nSelected Plan / Product: ${selectedPlan}\n\nProject Details:\n${
      message || "Interested in getting started."
    }`;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          business: business || "N/A",
          contact: contactInfo,
          service_or_plan: selectedPlan,
          message: message || "Interested in getting started.",
          _subject: subject,
        }),
      });

      if (response.ok) {
        setSubmitStatus(
          "Thank you! Your project inquiry has been dispatched to our engineering team."
        );
        setName("");
        setBusiness("");
        setContactInfo("");
        setMessage("");
      } else {
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(formattedBody)}`;
      }
    } catch {
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(formattedBody)}`;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <SiteNav />

      <main>
        {/* ================================================================
            SECTION B: HERO SECTION
            ================================================================ */}
        <section className="cn-hero">
          <div className="cn-container">
            <div className="cn-hero-grid">
              <ScrollReveal>
                <div className="cn-eyebrow">
                  <span>●</span> SaaS Products, QR Ordering & Custom Software
                </div>
                <h1 className="cn-h1">
                  Smart Software & Websites Built for{" "}
                  <span className="cn-gradient-word">
                    {heroIndustries[wordIndex]}
                  </span>
                </h1>
                <p className="cn-lead" style={{ marginBottom: "24px" }}>
                  From our <strong>₹99 Customized Business Website</strong> launch offer to live production SaaS platforms—<strong>Cafe QR Ordering</strong>, <strong>CoreNode GymOS</strong>, <strong>CoreNode Attend</strong>, and <strong>Tailored Custom Applications</strong>—we build technology that runs your floor.
                </p>

                <div className="cn-btn-row">
                  <a href="#pricing" className="cn-btn-primary">
                    View ₹99 Offer & Pricing Plans →
                  </a>
                  <a href="#interactive-simulator" className="cn-btn-secondary">
                    Try Interactive Workflow Simulator
                  </a>
                </div>

                <div className="cn-quick-pills">
                  <span
                    style={{
                      fontSize: "11.5px",
                      fontWeight: 800,
                      color: "#64748b",
                      textTransform: "uppercase",
                      width: "100%",
                      marginBottom: "2px",
                    }}
                  >
                    Instant Live Demos:
                  </span>
                  <a
                    href={CORENODE_DEMOS.cafe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cn-badge-blue"
                  >
                    ☕ Cafe QR Ordering ↗
                  </a>
                  <a
                    href={CORENODE_DEMOS.gymos}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cn-badge-blue"
                  >
                    🏋️ CoreNode GymOS ↗
                  </a>
                  <a
                    href={CORENODE_DEMOS.attend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cn-badge-blue"
                  >
                    📋 CoreNode Attend ↗
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      handleSelectPlanAndScroll(
                        "Custom Software / Application Development"
                      )
                    }
                    className="cn-badge-purple"
                    style={{ border: "none", cursor: "pointer" }}
                  >
                    ⚡ Request Custom App →
                  </button>
                </div>
              </ScrollReveal>

              <ScrollReveal delayClass="cn-delay-1">
                <div className="cn-float">
                  <LiveWebsiteSnapshot
                    url={CORENODE_DEMOS.cafe}
                    title="Cafe & QR Ordering System"
                    height={350}
                    allowDeviceToggle={true}
                    onOpenTheater={(url, title) => setTheaterApp({ url, title })}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ================================================================
            INTERACTIVE QR -> KITCHEN SIMULATOR
            ================================================================ */}
        <section id="interactive-simulator" className="cn-section-white">
          <div className="cn-container">
            <ScrollReveal>
              <div className="cn-section-header">
                <div className="cn-eyebrow">Experience the Workflow</div>
                <h2 className="cn-h2">
                  See How CoreNode Connects Customers to Your Staff in Real Time
                </h2>
                <p className="cn-lead">
                  Tap any item on the simulated <strong>Customer Table Phone</strong> and watch the <strong>Live Kitchen Order Ticket (KOT)</strong> update instantly.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="cn-delay-1">
              <div className="cn-sim-grid">
                {/* Left: Customer QR Menu Tap Simulator */}
                <div className="cn-sim-phone">
                  <div className="cn-sim-header">
                    <div>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 800,
                          color: "#2563eb",
                          textTransform: "uppercase",
                        }}
                      >
                        📱 Table #04 • QR Scan View
                      </span>
                      <h3 style={{ fontSize: "16px", fontWeight: 800 }}>
                        Tap an Item to Add to Order
                      </h3>
                    </div>
                    <span className="cn-badge-green">Interactive</span>
                  </div>

                  {SAMPLE_MENU_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => addToSimCart(item)}
                      className="cn-sim-item-btn"
                    >
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: "13.5px",
                            fontWeight: 700,
                            color: "#0f172a",
                          }}
                        >
                          {item.name}
                        </div>
                        <div style={{ fontSize: "11.5px", color: "#64748b" }}>
                          Avg prep: {item.prep}
                        </div>
                      </div>
                      <span
                        style={{
                          backgroundColor: "#2563eb",
                          color: "#ffffff",
                          fontSize: "12px",
                          fontWeight: 800,
                          padding: "6px 10px",
                          borderRadius: "8px",
                          flexShrink: 0,
                        }}
                      >
                        + ₹{item.price}
                      </span>
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => setSimCart([])}
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#64748b",
                      cursor: "pointer",
                      marginTop: "4px",
                    }}
                  >
                    ↺ Reset Sample Order
                  </button>
                </div>

                {/* Right: Live Staff / Kitchen Dashboard Ticket */}
                <div className="cn-sim-kot">
                  <div>
                    <div className="cn-sim-kot-header">
                      <div>
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 800,
                            color: "#38bdf8",
                            textTransform: "uppercase",
                          }}
                        >
                          🖥️ Live Staff / Kitchen Dashboard
                        </span>
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: 800,
                            color: "#ffffff",
                          }}
                        >
                          Active Ticket • Table #04
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={cycleKotStatus}
                        style={{
                          backgroundColor:
                            kotStatus === "Ready to Serve"
                              ? "#10b981"
                              : kotStatus === "Kitchen Preparing"
                              ? "#f59e0b"
                              : "#2563eb",
                          color: "#ffffff",
                          border: "none",
                          padding: "7px 12px",
                          borderRadius: "999px",
                          fontSize: "11.5px",
                          fontWeight: 800,
                          cursor: "pointer",
                        }}
                      >
                        {kotStatus} ↻
                      </button>
                    </div>

                    {simCart.length === 0 ? (
                      <p
                        style={{
                          color: "#94a3b8",
                          fontSize: "14px",
                          padding: "20px 0",
                        }}
                      >
                        No items in ticket yet. Tap any menu item above!
                      </p>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        {simCart.map((c) => (
                          <div
                            key={c.name}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: "8px",
                              backgroundColor: "rgba(255,255,255,0.05)",
                              padding: "10px 12px",
                              borderRadius: "10px",
                              fontSize: "13.5px",
                            }}
                          >
                            <span>
                              <strong>{c.qty}x</strong> {c.name}
                            </span>
                            <span
                              style={{
                                fontWeight: 700,
                                color: "#93c5fd",
                                flexShrink: 0,
                              }}
                            >
                              ₹{c.price * c.qty}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      marginTop: "20px",
                      paddingTop: "16px",
                      borderTop: "1px solid #334155",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                        Live Bill Total
                      </div>
                      <div
                        style={{
                          fontSize: "24px",
                          fontWeight: 900,
                          color: "#fde047",
                        }}
                      >
                        ₹{simTotal}
                      </div>
                    </div>

                    <a
                      href={CORENODE_DEMOS.cafe}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cn-btn-primary"
                    >
                      Launch Full Cafe Demo ↗
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ================================================================
            INTERACTIVE PRODUCT SUITE (3 LIVE DEMOS + 4TH CUSTOM APP BUILDER)
            ================================================================ */}
        <section id="live-products" className="cn-section-soft">
          <div className="cn-container">
            <ScrollReveal>
              <div className="cn-section-header">
                <div className="cn-eyebrow">
                  Live SaaS Suite & Custom Engineering
                </div>
                <h2 className="cn-h2">
                  Test-Drive Our 3 Live Products or Configure a Custom Application
                </h2>
                <p className="cn-lead">
                  Swipe or click the tabs below to switch between our live production SaaS demos or select{" "}
                  <strong>Custom Software / App</strong> to build a tailored tool for your workflow.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="cn-delay-1">
              <div className="cn-tools-tabs" role="tablist">
                {PRODUCT_SUITE.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    role="tab"
                    aria-selected={activeProductId === prod.id}
                    className={`cn-tool-tab ${
                      activeProductId === prod.id ? "active" : ""
                    }`}
                    onClick={() => setActiveProductId(prod.id)}
                  >
                    {prod.tabLabel}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="cn-delay-2">
              <div className="cn-tool-stage">
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "14px",
                    }}
                  >
                    <span
                      className={
                        activeProduct.isCustomBuilder
                          ? "cn-badge-purple"
                          : "cn-badge-green"
                      }
                    >
                      {activeProduct.badge}
                    </span>
                    <span className="cn-badge-blue">
                      {activeProduct.category}
                    </span>
                  </div>

                  <h3 className="cn-h2">{activeProduct.title}</h3>
                  <p className="cn-lead" style={{ marginTop: "10px" }}>
                    {activeProduct.description}
                  </p>

                  <ul className="cn-benefit-list">
                    {activeProduct.highlights.map((item) => (
                      <li key={item} className="cn-benefit-item">
                        <span className="cn-benefit-icon">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="cn-btn-row">
                    {activeProduct.isCustomBuilder ? (
                      <button
                        type="button"
                        onClick={handleCustomBlueprintSubmit}
                        className="cn-btn-primary"
                      >
                        {activeProduct.ctaText}
                      </button>
                    ) : (
                      <>
                        <a
                          href={activeProduct.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cn-btn-primary"
                        >
                          {activeProduct.ctaText}
                        </a>
                        <button
                          type="button"
                          onClick={() =>
                            handleSelectPlanAndScroll(
                              `${activeProduct.title} Setup Inquiry`
                            )
                          }
                          className="cn-btn-secondary"
                        >
                          Get This for Your Business
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  {!activeProduct.isCustomBuilder ? (
                    <LiveWebsiteSnapshot
                      url={activeProduct.url}
                      title={activeProduct.title}
                      height={340}
                      allowDeviceToggle={true}
                      onOpenTheater={(url, title) =>
                        setTheaterApp({ url, title })
                      }
                    />
                  ) : (
                    <div className="cn-blueprint-card">
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "8px",
                          borderBottom: "1px solid #334155",
                          paddingBottom: "14px",
                        }}
                      >
                        <div>
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: 800,
                              color: "#38bdf8",
                              textTransform: "uppercase",
                            }}
                          >
                            Interactive Architecture Builder
                          </span>
                          <h4
                            style={{
                              fontSize: "17px",
                              fontWeight: 800,
                              color: "#ffffff",
                              marginTop: "2px",
                            }}
                          >
                            Select Modules for Your Custom App
                          </h4>
                        </div>
                        <span className="cn-badge-purple">
                          {selectedModules.length} Selected
                        </span>
                      </div>

                      <p
                        style={{
                          fontSize: "13px",
                          color: "#94a3b8",
                          marginTop: "12px",
                        }}
                      >
                        Tap the features you need below, then click the button to pre-fill your custom software inquiry:
                      </p>

                      <div className="cn-module-grid">
                        {CUSTOM_APP_MODULES.map((mod) => {
                          const isSelected = selectedModules.includes(mod);
                          return (
                            <button
                              key={mod}
                              type="button"
                              onClick={() => toggleModule(mod)}
                              className={`cn-module-chip ${
                                isSelected ? "selected" : ""
                              }`}
                            >
                              <span>{mod}</span>
                              <span
                                style={{
                                  fontWeight: 900,
                                  color: isSelected ? "#60a5fa" : "#64748b",
                                }}
                              >
                                {isSelected ? "✓" : "+"}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <button
                        type="button"
                        onClick={handleCustomBlueprintSubmit}
                        className="cn-btn-primary"
                        style={{ width: "100%", marginTop: "8px" }}
                      >
                        Request Custom App ({selectedModules.length} Modules) →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ================================================================
            SECTION E: 4-CARD SHOWCASE (3 LIVE DEMOS + 1 CUSTOM SOFTWARE CARD)
            ================================================================ */}
        <section id="portfolio" className="cn-section-white">
          <div className="cn-container">
            <ScrollReveal>
              <div className="cn-section-header">
                <div className="cn-eyebrow">Live Demos & Custom Engineering</div>
                <h2 className="cn-h2">
                  Click Any Live Product Below or Request a Custom Application
                </h2>
                <p className="cn-lead">
                  Every preview window below renders our live deployed software. Tap any card to launch the working demo.
                </p>
              </div>
            </ScrollReveal>

            <div className="cn-grid-2">
              {PRODUCT_SUITE.map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  delayClass={index % 2 === 1 ? "cn-delay-1" : ""}
                >
                  <div className="cn-card" style={{ height: "100%" }}>
                    <div>
                      {!product.isCustomBuilder ? (
                        <LiveWebsiteSnapshot
                          url={product.url}
                          title={product.tabLabel}
                          height={220}
                          onOpenTheater={(url, title) =>
                            setTheaterApp({ url, title })
                          }
                        />
                      ) : (
                        <div
                          className="cn-blueprint-card"
                          style={{
                            minHeight: "260px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <span className="cn-badge-purple">
                              Custom Software Studio
                            </span>
                            <h4
                              style={{
                                fontSize: "19px",
                                fontWeight: 800,
                                color: "#ffffff",
                                marginTop: "12px",
                              }}
                            >
                              Need a Custom Web App, CRM, Portal, or SaaS Product?
                            </h4>
                            <p
                              style={{
                                fontSize: "13.5px",
                                color: "#cbd5e1",
                                marginTop: "8px",
                                lineHeight: 1.6,
                              }}
                            >
                              We design and engineer custom software around your business workflow—complete with admin panels, databases, payment gateways, and mobile-ready interfaces.
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "8px",
                              marginTop: "16px",
                            }}
                          >
                            <span className="cn-badge-blue">Admin Portals</span>
                            <span className="cn-badge-blue">Booking Engines</span>
                            <span className="cn-badge-blue">Custom Workflows</span>
                            <span className="cn-badge-blue">AI Automation</span>
                          </div>
                        </div>
                      )}

                      <div style={{ padding: "18px 2px 12px 2px" }}>
                        <span
                          className={
                            product.isCustomBuilder
                              ? "cn-badge-purple"
                              : "cn-badge-green"
                          }
                        >
                          {product.category}
                        </span>
                        <h3 className="cn-h3" style={{ marginTop: "10px" }}>
                          {product.title}
                        </h3>
                        <p
                          className="cn-lead"
                          style={{ fontSize: "14px", marginBottom: "18px" }}
                        >
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div>
                      {!product.isCustomBuilder ? (
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cn-btn-primary"
                          style={{ width: "100%" }}
                        >
                          Try Live Demo ↗
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            handleSelectPlanAndScroll(
                              "Custom Software / Application Development"
                            )
                          }
                          className="cn-btn-primary"
                          style={{
                            width: "100%",
                            backgroundColor: "#0f172a",
                            borderColor: "#0f172a",
                          }}
                        >
                          Request Custom Software / App →
                        </button>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION F: UPGRADED ₹99 POSTER + 3 TRANSPARENT PRICING PLANS
            ================================================================ */}
        <section id="pricing" className="cn-section-dark">
          <div className="cn-container">
            {/* 1. HIGH-IMPACT ₹99 INTRODUCTORY LAUNCH POSTER */}
            <ScrollReveal>
              <div id="offer-99" className="cn-poster-99">
                <div>
                  <div className="cn-poster-badge">
                    <span>⚡ LIMITED-TIME LAUNCH SPECIAL</span>
                  </div>
                  <h2
                    className="cn-h2"
                    style={{
                      color: "#ffffff",
                      marginBottom: "14px",
                    }}
                  >
                    Get Your Custom Landing Page & Business Website for Just ₹99
                  </h2>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#dbeafe",
                      lineHeight: 1.65,
                      marginBottom: "22px",
                    }}
                  >
                    Want to get your business online right away? Launch a clean, mobile-responsive landing page and customized business website tailored to your brand identity for a one-time introductory offer of <strong>₹99</strong>.
                  </p>

                  <div className="cn-poster-perks">
                    {[
                      "Custom Brand & Service Showcase",
                      "Mobile & Desktop Responsive UI",
                      "Direct WhatsApp & Call Lead Buttons",
                      "Fast Cloud Hosting Setup",
                    ].map((perk) => (
                      <div
                        key={perk}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          fontSize: "13.5px",
                          fontWeight: 600,
                          color: "#ffffff",
                        }}
                      >
                        <span
                          style={{
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(250, 204, 21, 0.2)",
                            color: "#fde047",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 900,
                            fontSize: "12px",
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cn-poster-price-card">
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#fde047",
                    }}
                  >
                    Starter Web Offer
                  </div>
                  <div className="cn-poster-price-big">₹99</div>
                  <div
                    style={{
                      fontSize: "13.5px",
                      color: "#e2e8f0",
                      marginBottom: "20px",
                    }}
                  >
                    Landing Page & Customized Business Website
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleSelectPlanAndScroll(
                        "₹99 Landing Page & Customized Business Website Offer"
                      )
                    }
                    className="cn-btn-orange"
                    style={{
                      backgroundColor: "#eab308",
                      color: "#0f172a !important",
                      fontWeight: 900,
                    }}
                  >
                    Claim ₹99 Website Offer ↗
                  </button>
                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "#cbd5e1",
                      marginTop: "12px",
                    }}
                  >
                    Direct consultation • Clear scope before launch
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. FULL SAAS PRICING PLANS */}
            <ScrollReveal>
              <div
                className="cn-section-header"
                style={{ marginBottom: "48px" }}
              >
                <div className="cn-eyebrow-dark">05 / PRICING</div>
                <h2 className="cn-h2" style={{ color: "#ffffff" }}>
                  Simple, transparent pricing.
                </h2>
                <p className="cn-lead-dark">
                  A one-time setup, then a low monthly fee. No lock-in, no hidden costs.
                </p>
              </div>
            </ScrollReveal>

            <div className="cn-pricing-grid">
              {/* PLAN 1: DIGITAL PRESENCE */}
              <ScrollReveal>
                <div
                  className="cn-pricing-card-light"
                  style={{ height: "100%" }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: "#10b981",
                      }}
                    >
                      Digital Presence
                    </h3>
                    <div className="cn-plan-setup-label">ONE-TIME SETUP</div>
                    <div className="cn-plan-price" style={{ color: "#0f172a" }}>
                      ₹999
                    </div>
                    <div className="cn-plan-monthly">then ₹499 / month</div>
                    <p className="cn-plan-tagline">
                      Get your café online for ₹499/month.
                    </p>

                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#475569",
                      }}
                    >
                      Everything you need to get online:
                    </div>

                    <ul className="cn-plan-features">
                      {[
                        "Professional café website",
                        "Digital menu & categories",
                        "Photos & prices",
                        "About section & location",
                        "Contact / WhatsApp button",
                        "Mobile responsive & SSL",
                      ].map((feat) => (
                        <li key={feat} className="cn-plan-feature-item">
                          <span style={{ color: "#10b981", fontWeight: 900 }}>
                            ✓
                          </span>
                          <span style={{ color: "#334155" }}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleSelectPlanAndScroll(
                        "Digital Presence Plan (₹999 setup + ₹499/mo)"
                      )
                    }
                    className="cn-btn-emerald"
                  >
                    Get started ↗
                  </button>
                </div>
              </ScrollReveal>

              {/* PLAN 2: SMART ORDERING (MOST POPULAR) */}
              <ScrollReveal delayClass="cn-delay-1">
                <div
                  className="cn-pricing-card-popular"
                  style={{ height: "100%" }}
                >
                  <div className="cn-popular-pill">★ MOST POPULAR</div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: "#2563eb",
                      }}
                    >
                      Smart Ordering
                    </h3>
                    <div className="cn-plan-setup-label">ONE-TIME SETUP</div>
                    <div className="cn-plan-price" style={{ color: "#0f172a" }}>
                      ₹7,499
                    </div>
                    <div className="cn-plan-monthly">then ₹999 / month</div>
                    <p className="cn-plan-tagline">
                      QR ordering that runs your whole floor.
                    </p>

                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#0f172a",
                      }}
                    >
                      Everything in Digital Presence, plus:
                    </div>

                    <ul className="cn-plan-features">
                      {[
                        "Table-specific QR ordering",
                        "Customer cart & placement",
                        "Live kitchen / staff dashboard",
                        "Order status tracking",
                        "Table & menu management",
                        "Basic sales dashboard",
                      ].map((feat) => (
                        <li key={feat} className="cn-plan-feature-item">
                          <span style={{ color: "#2563eb", fontWeight: 900 }}>
                            ✓
                          </span>
                          <span style={{ color: "#334155" }}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="cn-free-website-box">
                      🎁 Free website — normally ₹499/mo, included.
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        handleSelectPlanAndScroll(
                          "Smart Ordering Plan (₹7,499 setup + ₹999/mo)"
                        )
                      }
                      className="cn-btn-primary"
                      style={{ width: "100%", padding: "15px 22px" }}
                    >
                      Choose Smart Ordering ↗
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              {/* PLAN 3: BUSINESS PRO */}
              <ScrollReveal delayClass="cn-delay-2">
                <div
                  className="cn-pricing-card-dark"
                  style={{ height: "100%" }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: "#f97316",
                      }}
                    >
                      Business Pro
                    </h3>
                    <div className="cn-plan-setup-label">ONE-TIME SETUP</div>
                    <div className="cn-plan-price" style={{ color: "#ffffff" }}>
                      ₹12,999
                    </div>
                    <div
                      className="cn-plan-monthly"
                      style={{ color: "#94a3b8" }}
                    >
                      then ₹1,499 / month
                    </div>
                    <p className="cn-plan-tagline-dark">
                      Everything to scale — now with AI built in.
                    </p>

                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#ffffff",
                      }}
                    >
                      Everything in Smart Ordering, plus:
                    </div>

                    <ul className="cn-plan-features">
                      <li className="cn-plan-feature-item">
                        <span style={{ color: "#f97316", fontWeight: 900 }}>
                          ✓
                        </span>
                        <span style={{ color: "#cbd5e1" }}>
                          <strong style={{ color: "#ffffff" }}>Payments:</strong>{" "}
                          UPI / online integration, receipts
                        </span>
                      </li>
                      <li className="cn-plan-feature-item">
                        <span style={{ color: "#f97316", fontWeight: 900 }}>
                          ✓
                        </span>
                        <span style={{ color: "#cbd5e1" }}>
                          <strong style={{ color: "#ffffff" }}>Customer:</strong>{" "}
                          Loyalty system, coupons, database
                        </span>
                      </li>
                      <li className="cn-plan-feature-item">
                        <span style={{ color: "#f97316", fontWeight: 900 }}>
                          ✓
                        </span>
                        <span style={{ color: "#cbd5e1" }}>
                          <strong style={{ color: "#ffffff" }}>
                            Analytics:
                          </strong>{" "}
                          Advanced sales, daily reports
                        </span>
                      </li>
                      <li className="cn-plan-feature-item">
                        <span style={{ color: "#f97316", fontWeight: 900 }}>
                          ✓
                        </span>
                        <span style={{ color: "#cbd5e1" }}>
                          <strong style={{ color: "#ffffff" }}>Staff:</strong>{" "}
                          Permissions, item availability
                        </span>
                      </li>
                      <li className="cn-plan-feature-item">
                        <span style={{ color: "#f97316", fontWeight: 900 }}>
                          ✓
                        </span>
                        <span style={{ color: "#cbd5e1" }}>
                          <strong style={{ color: "#ffffff" }}>
                            AI Chatbot:
                          </strong>{" "}
                          24/7 ordering & support assistant
                          <span className="cn-new-badge">NEW</span>
                        </span>
                      </li>
                      <li className="cn-plan-feature-item">
                        <span style={{ color: "#f97316", fontWeight: 900 }}>
                          ✓
                        </span>
                        <span style={{ color: "#cbd5e1" }}>
                          <strong style={{ color: "#ffffff" }}>Support:</strong>{" "}
                          Priority support routing
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleSelectPlanAndScroll(
                        "Business Pro Plan (₹12,999 setup + ₹1,499/mo)"
                      )
                    }
                    className="cn-btn-orange"
                  >
                    Go Business Pro ↗
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ================================================================
            FAQ SECTION
            ================================================================ */}
        <section id="why-corenode" className="cn-section-white">
          <div className="cn-container">
            <ScrollReveal>
              <div className="cn-section-header">
                <div className="cn-eyebrow">Common Questions</div>
                <h2 className="cn-h2">Frequently Asked Questions</h2>
                <p className="cn-lead">
                  Everything you need to know about our live software products, the ₹99 website offer, and custom development.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="cn-delay-1">
              <div className="cn-faq-list">
                {FAQ_ITEMS.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={faq.q} className="cn-faq-item">
                      <button
                        type="button"
                        className="cn-faq-question"
                        onClick={() =>
                          setOpenFaqIndex(isOpen ? null : index)
                        }
                      >
                        <span>{faq.q}</span>
                        <span
                          style={{
                            fontSize: "18px",
                            fontWeight: 900,
                            color: "#2563eb",
                            flexShrink: 0,
                          }}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && <div className="cn-faq-answer">{faq.a}</div>}
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ================================================================
            SECTION J: PROJECT INQUIRY FORM
            ================================================================ */}
        <section id="contact" className="cn-section-dark">
          <div className="cn-container">
            <div className="cn-contact-grid">
              <ScrollReveal>
                <div>
                  <div className="cn-eyebrow-dark">Direct Consultation</div>
                  <h2 className="cn-h2" style={{ color: "#ffffff" }}>
                    Ready to Launch Your Website or Custom Software?
                  </h2>
                  <p className="cn-lead-dark" style={{ marginBottom: "24px" }}>
                    Submit your project details using the form and our engineering team will review your requirements and reach out to you directly.
                  </p>

                  <div
                    style={{
                      backgroundColor: "#0b1324",
                      border: "1px solid #1e293b",
                      borderRadius: "18px",
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        color: "#38bdf8",
                        marginBottom: "10px",
                      }}
                    >
                      Quick Links to Our Solutions
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        fontSize: "14px",
                      }}
                    >
                      <a
                        href={CORENODE_DEMOS.cafe}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#60a5fa", fontWeight: 600 }}
                      >
                        ☕ Launch Cafe & QR Ordering Live Demo ↗
                      </a>
                      <a
                        href={CORENODE_DEMOS.gymos}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#60a5fa", fontWeight: 600 }}
                      >
                        🏋️ Launch CoreNode GymOS Live Demo ↗
                      </a>
                      <a
                        href={CORENODE_DEMOS.attend}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#60a5fa", fontWeight: 600 }}
                      >
                        📋 Launch CoreNode Attend Live Demo ↗
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedPlan(
                            "Custom Software / Application Development"
                          )
                        }
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                          textAlign: "left",
                          color: "#c084fc",
                          fontWeight: 700,
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        ⚡ Select Custom Software / Application Request →
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delayClass="cn-delay-1">
                <div className="cn-form-card">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "8px",
                      borderBottom: "1px solid #e2e8f0",
                      paddingBottom: "14px",
                      marginBottom: "20px",
                    }}
                  >
                    <div>
                      <h3 className="cn-h3" style={{ marginBottom: "2px" }}>
                        Send Project Inquiry
                      </h3>
                      <p style={{ fontSize: "12.5px", color: "#64748b" }}>
                        Routes directly to the CoreNode project team.
                      </p>
                    </div>
                    <span className="cn-badge-green">Direct Dispatch</span>
                  </div>

                  <form onSubmit={handleInquirySubmit}>
                    <div className="cn-form-row">
                      <div className="cn-field" style={{ marginBottom: 0 }}>
                        <label htmlFor="inq-name" className="cn-label">
                          Your Name *
                        </label>
                        <input
                          id="inq-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          className="cn-input"
                        />
                      </div>

                      <div className="cn-field" style={{ marginBottom: 0 }}>
                        <label htmlFor="inq-business" className="cn-label">
                          Business Name
                        </label>
                        <input
                          id="inq-business"
                          type="text"
                          value={business}
                          onChange={(e) => setBusiness(e.target.value)}
                          placeholder="e.g., Aroma Cafe / Iron Gym"
                          className="cn-input"
                        />
                      </div>
                    </div>

                    <div className="cn-form-row">
                      <div className="cn-field" style={{ marginBottom: 0 }}>
                        <label htmlFor="inq-contact" className="cn-label">
                          Phone Number or Email *
                        </label>
                        <input
                          id="inq-contact"
                          type="text"
                          required
                          value={contactInfo}
                          onChange={(e) => setContactInfo(e.target.value)}
                          placeholder="Your WhatsApp number or email"
                          className="cn-input"
                        />
                      </div>

                      <div className="cn-field" style={{ marginBottom: 0 }}>
                        <label htmlFor="inq-plan" className="cn-label">
                          Selected Plan or Product
                        </label>
                        <select
                          id="inq-plan"
                          value={selectedPlan}
                          onChange={(e) => setSelectedPlan(e.target.value)}
                          className="cn-select"
                        >
                          <option value="₹99 Landing Page & Customized Business Website Offer">
                            ₹99 Landing Page & Customized Business Website Offer
                          </option>
                          <option value="Digital Presence Plan (₹999 setup + ₹499/mo)">
                            Digital Presence Plan (₹999 setup + ₹499/mo)
                          </option>
                          <option value="Smart Ordering Plan (₹7,499 setup + ₹999/mo)">
                            Smart Ordering Plan (₹7,499 setup + ₹999/mo)
                          </option>
                          <option value="Business Pro Plan (₹12,999 setup + ₹1,499/mo)">
                            Business Pro Plan (₹12,999 setup + ₹1,499/mo)
                          </option>
                          <option value="CoreNode GymOS — Gym Management Software">
                            CoreNode GymOS — Gym Management Software
                          </option>
                          <option value="CoreNode Attend — Attendance System">
                            CoreNode Attend — Attendance System
                          </option>
                          <option value="Custom Software / Application Development">
                            Custom Software / Application Development
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="cn-field">
                      <label htmlFor="inq-message" className="cn-label">
                        Brief Project Description
                      </label>
                      <textarea
                        id="inq-message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your business or the custom software features you need..."
                        className="cn-textarea"
                      />
                    </div>

                    {submitStatus && (
                      <div
                        style={{
                          backgroundColor: "#d1fae5",
                          color: "#065f46",
                          padding: "12px",
                          borderRadius: "10px",
                          fontSize: "13px",
                          fontWeight: 600,
                          marginBottom: "14px",
                        }}
                      >
                        {submitStatus}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="cn-btn-primary"
                      style={{ width: "100%", padding: "15px 22px" }}
                    >
                      {submitting
                        ? "Sending Project Inquiry..."
                        : "Send Project Inquiry →"}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING QUICK-LAUNCH DOCK */}
      <div className="cn-floating-dock">
        <a
          href="#offer-99"
          style={{
            backgroundColor: "#eab308",
            color: "#0f172a",
            fontSize: "12px",
            fontWeight: 800,
            padding: "7px 12px",
            borderRadius: "999px",
            whiteSpace: "nowrap",
          }}
        >
          ⚡ ₹99 Website
        </a>
        <a
          href="#live-products"
          style={{
            color: "#ffffff",
            fontSize: "12px",
            fontWeight: 700,
            padding: "6px 8px",
            whiteSpace: "nowrap",
          }}
        >
          Live Demos
        </a>
        <a
          href="#contact"
          style={{
            backgroundColor: "#2563eb",
            color: "#ffffff",
            fontSize: "12px",
            fontWeight: 700,
            padding: "7px 12px",
            borderRadius: "999px",
            whiteSpace: "nowrap",
          }}
        >
          Inquire →
        </a>
      </div>

      {/* FULLSCREEN INTERACTIVE THEATER MODAL */}
      {theaterApp && (
        <div
          className="cn-modal-backdrop"
          onClick={() => setTheaterApp(null)}
        >
          <div
            className="cn-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cn-modal-header">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="cn-badge-green">Live Mode</span>
                <strong style={{ fontSize: "13.5px" }}>{theaterApp.title}</strong>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <a
                  href={theaterApp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cn-launch-pill"
                >
                  Full Tab ↗
                </a>
                <button
                  type="button"
                  onClick={() => setTheaterApp(null)}
                  style={{
                    backgroundColor: "#334155",
                    color: "#ffffff",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe
              src={theaterApp.url}
              title={theaterApp.title}
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}