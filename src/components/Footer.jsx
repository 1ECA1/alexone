import { ArrowUpRight, Code2, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "2348122314775";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi ALEXONE, I would like to discuss a project with you."
)}`;

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "My Projects", href: "#projects" },
  { label: "Our Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
];

const services = [
  "Web Development",
  "MERN Stack Applications",
  "UI/UX Design",
  "API Development",
  "Digital Solutions",
];

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l1.8-5.2A9 9 0 1 1 8.5 19.8L3 21Z" />
      <path d="M9 9.5c.5 2 2 3.5 4.5 4.5" />
      <path d="M9 9.5l1.3-1.2 1.4 2-1 1" />
      <path d="M13.5 14l1-1 2 1.4-1.2 1.3" />
    </svg>
  );
}

const socialLinkClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/10 hover:text-primary";

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-6 w-1 rounded-full bg-primary" />
      <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
        {children}
      </h3>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/10 bg-[#101312] text-white"
      style={{ colorScheme: "dark" }}
    >
      <div className="mx-auto w-full px-5 pb-8 pt-16 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="min-w-0">
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
              aria-label="ALEXONE home"
            >
              <img
                src="/alexone-logo.jpg"
                alt="ALEXONE TECH logo"
                className="h-11 w-11 shrink-0 rounded-xl object-contain transition-transform duration-300 group-hover:scale-110"
                width={44}
                height={44}
              />

              <span className="text-2xl font-black tracking-tight text-white">
                ALEX<span className="text-primary">ONE</span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              ALEXONE Digital Solutions — turning ideas into meaningful digital
              experiences through thoughtful design and modern technology.
            </p>

            <a
              href="#projects"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors duration-300 hover:opacity-80"
            >
              Explore my work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <SectionHeading>Quick Links</SectionHeading>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex w-fit items-center gap-2 py-1 text-sm text-white/60 transition-all duration-300 hover:translate-x-1.5 hover:text-primary"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/25 transition-all duration-300 group-hover:h-2 group-hover:w-2 group-hover:bg-primary" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <SectionHeading>What I Do</SectionHeading>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <div className="group flex items-center gap-2 py-1 text-sm text-white/60 transition-all duration-300 hover:translate-x-1.5 hover:text-primary">
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-primary/60 transition-transform duration-300 group-hover:rotate-45 group-hover:text-primary"
                    />
                    <span>{service}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="footer-contact" className="min-w-0">
            <SectionHeading>Let's Connect</SectionHeading>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Have a project, collaboration, or idea in mind? Let's talk about
              bringing it to life.
            </p>

            {/* Let's Talk opens WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
            >
              <WhatsAppIcon size={19} />
              Let's Talk
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* WhatsApp icon only — no visible phone number */}
            {/* <div className="mt-6 flex items-center gap-3">
             
            </div> */}

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">

               <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact me on WhatsApp"
                title="Chat with me on WhatsApp"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10"
              >
                <WhatsAppIcon size={20} />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className={socialLinkClass}
              >
                <Code2 size={19} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className={socialLinkClass}
              >
                <span className="text-sm font-black">in</span>
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email me"
                title="Email"
                className={socialLinkClass}
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 pt-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year}{" "}
            <span className="font-bold text-white">ALEXONE</span>. All rights
            reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-primary"
          >
            Back to top
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}