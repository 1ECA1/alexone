import { useEffect, useRef, useState } from "react";
import alexImage from "../assets/alex-represnt.png";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Monitor,
  Server,
  Database,
  ShieldCheck,
  LayoutDashboard,
  ShoppingCart,
  CreditCard,
  Rocket,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Images                                                              */
/* Swap these for your own files (put them in src/assets) when ready.  */
/* ------------------------------------------------------------------ */
const heroBackground =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2200&q=80";

const aboutBackground =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */
const heroServices = [
  { icon: Monitor, label: "Responsive front ends" },
  { icon: Server, label: "REST APIs" },
  { icon: Database, label: "Database design" },
  { icon: ShieldCheck, label: "Authentication" },
  { icon: LayoutDashboard, label: "Admin dashboards" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: CreditCard, label: "Payment flows" },
  { icon: Rocket, label: "Deployment" },
];

const heroTech = ["React", "Django", "Node.js", "PostgreSQL", "Tailwind CSS"];

const aboutHighlights = [
  {
    icon: Monitor,
    title: "Front end",
    text: "Responsive React interfaces with light and dark themes, built to be easy to use.",
  },
  {
    icon: Server,
    title: "Back end",
    text: "Django REST Framework and Node APIs with authentication and clean data models.",
  },
  {
    icon: Database,
    title: "Data and deployment",
    text: "PostgreSQL and MongoDB databases, shipped and running live.",
  },
];

const aboutSkills = [
  "React",
  "JavaScript",
  "Django REST Framework",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Python",
];

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-84px)] items-center overflow-hidden bg-slate-950 text-white"
    >
      <style>{`
        @keyframes hx-zoom {
          from { transform: scale(1.04); }
          to   { transform: scale(1.14); }
        }
        @keyframes hx-rise {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hx-panel {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .hx-zoom  { animation: hx-zoom 24s ease-in-out infinite alternate; }
        .hx-rise  { animation: hx-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .hx-panel { animation: hx-panel 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both; }
        @media (prefers-reduced-motion: reduce) {
          .hx-zoom, .hx-rise, .hx-panel { animation: none !important; }
        }
      `}</style>

      {/* Background image */}
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="hx-zoom absolute inset-0 -z-30 h-full w-full object-cover"
      />

      {/* Readability overlays (always dark so white text works in light mode too) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-cyan-400/15 blur-[130px]"
      />

      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-10 lg:py-28">
        {/* LEFT */}
        <div className="relative z-10">
          <div
            className="hx-rise mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm font-medium text-white/85">
              ALEXONE Digital Solutions
            </span>
          </div>

          <h1
            className="hx-rise max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            style={{ animationDelay: "0.25s" }}
          >
            Full-stack web apps,
            <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              built end to end.
            </span>
          </h1>

          <p
            className="hx-rise mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9"
            style={{ animationDelay: "0.4s" }}
          >
            React front ends, Django and Node back ends, and the databases
            behind them, designed to look sharp and built to run reliably.
          </p>

          <div
            className="hx-rise mt-9 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#projects"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 font-bold text-white shadow-lg shadow-primary/30 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              View my projects
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:border-white/60 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contact me
            </a>
          </div>

          <div
            className="hx-rise mt-12"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="mb-4 text-sm font-medium text-white/50">
              Built with
            </p>
            <div className="flex flex-wrap gap-2.5">
              {heroTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/15 bg-white/10 px-3.5 py-2 text-sm font-medium text-white/80 backdrop-blur-md transition hover:border-cyan-300/60 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: glass panel */}
        <div className="hx-panel relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <div className="absolute inset-8 rounded-full bg-primary/30 blur-[90px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-lg font-bold">The full stack, covered</p>
                <p className="mt-1 text-sm text-white/55">
                  From the interface to the database
                </p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/25 text-cyan-300">
                <Sparkles size={22} />
              </span>
            </div>

            <ul className="mt-5 grid grid-cols-2 gap-3">
              {heroServices.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 p-3 transition duration-300 hover:border-cyan-300/50 hover:bg-white/10"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={17} />
                  </span>
                  <span className="text-sm font-semibold leading-tight text-white/90">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium text-white/50 transition hover:text-white md:flex"
      >
        Scroll to explore
        <ArrowDown size={15} className="animate-bounce" />
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ABOUT                                                               */
/* Self-contained: owns its own scroll-reveal and count-up state, so   */
/* you can delete aboutRef / aboutVisible / statValues from Home.      */
/* Only put numbers in `stats` that are true.                          */
/* ------------------------------------------------------------------ */
export function AboutSection({
  stats = [
    { value: 3, label: "Years learning and building" },
    { value: 6, label: "Projects built" },
    { value: 20, label: "Happy clients" },
  ],
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Reveal when scrolled into view
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Count-up for the stats
  useEffect(() => {
    if (!visible) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) {
      setCounts(stats.map((s) => s.value));
      return;
    }

    const duration = 1600;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((s) => Math.round(s.value * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const reveal = visible ? "ax-rise" : "opacity-0";

  return (
    <section
      id="about"
      ref={ref}
      className="relative isolate overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <style>{`
        @keyframes ax-rise {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ax-photo {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ax-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        .ax-rise  { animation: ax-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .ax-photo { animation: ax-photo 1.1s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .ax-float { animation: ax-float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ax-rise, .ax-photo, .ax-float { animation: none !important; }
        }
      `}</style>

      {/* Background image, faded into the page colour so it works in light and dark */}
      <img
        src={aboutBackground}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-[0.12]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background/80 to-background"
      />
      <div className="pointer-events-none absolute -left-32 top-24 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]" />

      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* PORTRAIT */}
        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute inset-6 rounded-[2.5rem] bg-primary/30 blur-[80px]" />

          <div
            className={`relative rounded-[2.25rem] bg-gradient-to-br from-primary via-primary/40 to-cyan-400/60 p-[2px] ${
              visible ? "ax-photo" : "opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-[2.2rem] bg-card">
              <img
                src={alexImage}
                alt="Alexander Chukwuka, web developer"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Floating card: location */}
          <div className="ax-float absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-text/10 bg-card/90 p-4 shadow-xl backdrop-blur-md sm:-left-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <div>
              <p className="text-sm font-bold text-text">Open to projects</p>
              <p className="text-xs text-text/55">Based in Abuja, Nigeria</p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <span
            className={`inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary ${reveal}`}
            style={{ animationDelay: "0.1s" }}
          >
            About me
          </span>

          <h2
            className={`mt-5 max-w-2xl text-4xl font-black leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl ${reveal}`}
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I'm Alexander Chukwuka.
          </h2>

          <p
            className={`mt-3 text-lg font-semibold text-primary sm:text-xl ${reveal}`}
            style={{ animationDelay: "0.3s" }}
          >
            Full-stack web developer and founder of ALEXONE Digital Solutions
          </p>

          <p
            className={`mt-6 max-w-2xl text-base leading-8 text-text/65 sm:text-lg ${reveal}`}
            style={{ animationDelay: "0.4s" }}
          >
            I take web applications from idea to live product. I design the
            interface in React, build the API and database behind it with
            Django or Node.js, and deploy it so it keeps running. I care about
            clean code, clear interfaces, and software people can rely on.
          </p>

          {/* Highlights */}
          <div
            className={`mt-9 grid gap-4 sm:grid-cols-3 ${reveal}`}
            style={{ animationDelay: "0.5s" }}
          >
            {aboutHighlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-text/10 bg-card/80 p-5 backdrop-blur-md transition duration-300 hover:border-primary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-base font-bold text-text">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-text/60">{text}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div
            className={`mt-8 flex flex-wrap gap-2.5 ${reveal}`}
            style={{ animationDelay: "0.6s" }}
          >
            {aboutSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-text/10 bg-background/80 px-3.5 py-2 text-sm font-medium text-text/70"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Stats */}
          <dl
            className={`mt-10 grid grid-cols-3 gap-4 border-t border-text/10 pt-8 ${reveal}`}
            style={{ animationDelay: "0.7s" }}
          >
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <dd className="order-1 text-3xl font-black tabular-nums text-primary sm:text-5xl">
                  {counts[i]}+
                </dd>
                <dt className="mt-1 text-xs font-medium leading-5 text-text/60 sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>

          {/* Actions */}
          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row ${reveal}`}
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-bold text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Work with me
              <ArrowUpRight
                size={19}
                className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-text/15 bg-card/70 px-7 py-4 font-bold text-text transition duration-300 hover:border-primary/60 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
