// import { useEffect, useRef, useState } from "react";
// import alexImage from "../assets/alex-represnt.png";

// import {
//   ArrowDown,
//   ArrowRight,
//   Code2,
//   Layers3,
//   Sparkles,
//   ArrowUpRight,
//   ChevronLeft,
//   ChevronRight,
//   ExternalLink,
// } from "lucide-react";

// const featuredProjects = [
//   {
//     title: "EduManageERP",
//     category: "School Management System",
//     description:
//       "A comprehensive school management platform for student records, admissions, attendance, examinations, results, and financial management.",
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
//     technologies: ["React", "Django", "PostgreSQL"],
//     liveUrl: "https://example.com/edumanageerp",
//   },
//   {
//     title: "ShopSphere",
//     category: "E-commerce Website",
//     description:
//       "A modern online shopping experience featuring product discovery, product details, shopping cart functionality, and a streamlined checkout design.",
//     image:
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
//     technologies: ["React", "Node.js", "MongoDB"],
//     liveUrl: "https://example.com/shopsphere",
//   },
//   {
//     title: "Haven Estates",
//     category: "Real Estate Website",
//     description:
//       "A property discovery platform featuring property listings, beautiful photography, property details, and an intuitive search experience.",
//     image:
//       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
//     technologies: ["React", "Tailwind CSS", "JavaScript"],
//     liveUrl: "https://example.com/haven-estates",
//   },
//   {
//     title: "Foodie Express",
//     category: "Food Delivery Website",
//     description:
//       "A food ordering experience where customers can explore menus, discover meals, and navigate a simple, convenient ordering interface.",
//     image:
//       "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85",
//     technologies: ["React", "Express", "MongoDB"],
//     liveUrl: "https://example.com/foodie-express",
//   },
//   {
//     title: "FinTrack",
//     category: "Finance Dashboard",
//     description:
//       "A clean financial dashboard concept for tracking expenses, reviewing transactions, monitoring budgets, and understanding spending patterns.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
//     technologies: ["React", "JavaScript", "Chart.js"],
//     liveUrl: "https://example.com/fintrack",
//   },
//   {
//     title: "TravelVista",
//     category: "Travel & Booking Website",
//     description:
//       "A visually engaging travel website concept for exploring destinations, discovering accommodations, and planning memorable trips.",
//     image:
//       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
//     technologies: ["React", "Tailwind CSS", "REST API"],
//     liveUrl: "https://example.com/travelvista",
//   },
// ];

// // Shown automatically if a review image file is missing
// const avatarFallback =
//   "data:image/svg+xml;utf8," +
//   encodeURIComponent(
//     '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><rect width="44" height="44" fill="#94a3b8"/><circle cx="22" cy="17" r="8" fill="#e2e8f0"/><path d="M6 44c0-10 7-16 16-16s16 6 16 16z" fill="#e2e8f0"/></svg>',
//   );

// const technologies = [
//   "React",
//   "JavaScript",
//   "Node.js",
//   "MongoDB",
//   "Python",
//   "Django",
// ];

// const teamMembers = [
//   {
//     name: "Alexander Chukwuka",
//     role: "Founder & Lead Developer",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
//     description:
//       "Leading the vision, architecture, and development of digital solutions that turn ideas into practical products.",
//     skills: ["React", "MERN Stack", "Django"],
//     initials: "AC",
//   },
//   {
//     name: "Creative Team Member",
//     role: "UI/UX Designer",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
//     description:
//       "Focused on creating attractive, intuitive, and accessible interfaces that make technology easier to use.",
//     skills: ["UI Design", "UX Research", "Prototyping"],
//     initials: "CT",
//   },
//   {
//     name: "Technical Team Member",
//     role: "Software Developer",
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
//     description:
//       "Building dependable application features, backend services, and integrations to support business growth.",
//     skills: ["APIs", "Databases", "JavaScript"],
//     initials: "TD",
//   },
// ];

// const services = [
//   {
//     number: "01",
//     icon: "🌐",
//     title: "Web Development",
//     description:
//       "We create modern, responsive, and high-performance websites that communicate your brand and deliver excellent user experiences.",
//     tags: ["React", "JavaScript", "Tailwind CSS"],
//   },
//   {
//     number: "02",
//     icon: "💻",
//     title: "Full-Stack Development",
//     description:
//       "We build complete web applications with interactive frontends, reliable backends, secure APIs, and database integration.",
//     tags: ["MERN Stack", "REST APIs", "Backend"],
//   },
//   {
//     number: "03",
//     icon: "🏫",
//     title: "School Management Systems",
//     description:
//       "We develop digital school solutions for student records, attendance, examinations, results, payments, and school administration.",
//     tags: ["Education", "Automation", "Management"],
//   },
//   {
//     number: "04",
//     icon: "🎨",
//     title: "UI/UX Design",
//     description:
//       "We design attractive, intuitive, and user-friendly interfaces that make digital products easier and more enjoyable to use.",
//     tags: ["User Experience", "Responsive UI", "Prototyping"],
//   },
//   {
//     number: "05",
//     icon: "🗄️",
//     title: "Database & Backend",
//     description:
//       "We create structured databases, dependable server-side systems, and APIs to support secure and efficient applications.",
//     tags: ["Django", "Node.js", "PostgreSQL"],
//   },
//   {
//     number: "06",
//     icon: "⚙️",
//     title: "Custom Software Solutions",
//     description:
//       "We develop tailored software applications that streamline business processes, reduce repetitive work, and solve practical problems.",
//     tags: ["Business Tools", "Automation", "Integration"],
//   },
// ];

// const aboutStats = [
//   { value: 3, label: "Years experience" },
//   { value: featuredProjects.length, label: "Projects completed" },
//   { value: 20, label: "Happy clients" },
// ];

// export default function Home() {
//   // Hooks must live INSIDE the component
//   const [activeReview, setActiveReview] = useState(0);
//   const [reviewsPaused, setReviewsPaused] = useState(false);
//   const aboutRef = useRef(null);
//   const [aboutVisible, setAboutVisible] = useState(false);
//   const [statValues, setStatValues] = useState(aboutStats.map(() => 0));
//   const [projectPage, setProjectPage] = useState(0);
//   const [projectsPaused, setProjectsPaused] = useState(false);

//   const projectsPerPage = 3;

//   const totalProjectPages = Math.ceil(
//     featuredProjects.length / projectsPerPage,
//   );

//   const visibleProjects = featuredProjects.slice(
//     projectPage * projectsPerPage,
//     projectPage * projectsPerPage + projectsPerPage,
//   );

//   // Start About animations when the section scrolls into view
//   useEffect(() => {
//     const node = aboutRef.current;
//     if (!node) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAboutVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 },
//     );

//     observer.observe(node);
//     return () => observer.disconnect();
//   }, []);

//   // Count-up animation for the About stats
//   useEffect(() => {
//     if (!aboutVisible) return;

//     const reduceMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)",
//     ).matches;

//     if (reduceMotion) {
//       setStatValues(aboutStats.map((stat) => stat.value));
//       return;
//     }

//     const duration = 1800;
//     const startTime = performance.now();
//     let frame;

//     const tick = (now) => {
//       const progress = Math.min((now - startTime) / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setStatValues(aboutStats.map((stat) => Math.round(stat.value * eased)));
//       if (progress < 1) frame = requestAnimationFrame(tick);
//     };

//     frame = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(frame);
//   }, [aboutVisible]);

//   const previousReview = () =>
//     setActiveReview(
//       (current) => (current - 1 + reviews.length) % reviews.length,
//     );
//   const nextReview = () =>
//     setActiveReview((current) => (current + 1) % reviews.length);

//   // Auto-rotate reviews (pauses on hover/focus)
//   useEffect(() => {
//     if (reviewsPaused) return;

//     const interval = window.setInterval(() => {
//       setActiveReview((current) => (current + 1) % reviews.length);
//     }, 6000);

//     return () => window.clearInterval(interval);
//   }, [reviewsPaused]);

//   // Auto-rotate projects (pauses on hover/focus)
//   useEffect(() => {
//     if (projectsPaused) return;

//     const timer = window.setInterval(() => {
//       setProjectPage((current) => (current + 1) % totalProjectPages);
//     }, 3000);

//     return () => window.clearInterval(timer);
//   }, [projectsPaused, totalProjectPages]);

//   return (
//     <main>
//       {/* HERO SECTION */}
//       <section
//         id="home"
//         className="relative isolate flex min-h-[calc(100vh-84px)] content-between overflow-hidden bg-background"
//       >
//         {/* Background effects */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
//         >
//           <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[120px]" />

//           <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

//           <div
//             className="absolute inset-0 opacity-[0.035]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
//               backgroundSize: "48px 48px",
//             }}
//           />
//         </div>

//         <div className="mx-auto grid w-full max-w-[1600px] items-stretch gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-28">
//           {/* LEFT CONTENT */}
//           <div className="relative z-10">
//             {/* Availability badge */}
//             <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-text/10 bg-card/80 px-4 py-2.5 backdrop-blur-md">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
//               </span>

//               <span className="text-xs font-semibold tracking-wide text-text/80 sm:text-sm">
//                 Welcome to ALEXONE Digital Solutions
//               </span>
//             </div>

//             {/* Main heading */}
//             <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight text-text sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
//               We Build
//               <br />
//               <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-400 bg-clip-text text-transparent">
//                 Digital
//               </span>{" "}
//               Experiences.
//             </h1>

//             {/* Description */}
//             <p className="mt-7 max-w-xl text-base leading-8 text-text/65 sm:text-lg sm:leading-9">
//               Turning bold ideas into powerful digital products. We create
//               modern websites, intelligent web applications, and reliable
//               software solutions that help businesses move forward.
//             </p>

//             {/* Action buttons */}
//             <div className="mt-9 flex flex-col gap-4 sm:flex-row">
//               <a
//                 href="#projects"
//                 className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 font-bold text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
//               >
//                 Explore Our Projects
//                 <ArrowRight
//                   size={19}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </a>

//               <a
//                 href="#contact"
//                 className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-text/15 bg-card/60 px-7 py-4 font-bold text-text transition duration-300 hover:border-primary/60 hover:bg-primary/5"
//               >
//                 Let's Talk
//                 <ArrowRight size={18} />
//               </a>
//             </div>

//             {/* Technology tags */}
//             <div className="mt-12">
//               <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-text/40">
//                 Technologies we work with
//               </p>

//               <div className="flex flex-wrap gap-2.5">
//                 {technologies.map((technology) => (
//                   <span
//                     key={technology}
//                     className="rounded-lg border border-text/10 bg-card/70 px-3.5 py-2 text-sm font-medium text-text/70 transition hover:border-primary/50 hover:text-primary"
//                   >
//                     {technology}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT VISUAL */}
//           <div className="relative mx-auto w-full max-w-[480px] lg:ml-auto">
//             {/* Decorative glow */}
//             <div className="absolute inset-10 rounded-full bg-primary/20 blur-[80px]" />

//             {/* Main visual card */}
//             <div className="relative overflow-hidden rounded-[2rem] border border-text/10 bg-card/80 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-7">
//               {/* Card header */}
//               <div className="flex items-center justify-between border-b border-text/10 pb-5">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
//                     <Code2 size={24} />
//                   </div>

//                   <div>
//                     <p className="font-bold text-text">ALEXONE</p>
//                     <p className="mt-0.5 text-xs text-text/50">
//                       Digital Innovation
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-1.5">
//                   <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
//                 </div>
//               </div>

//               {/* Code-inspired visual */}
//               <div className="my-6 rounded-2xl border border-text/10 bg-background p-5 sm:p-6">
//                 <div className="mb-6 flex items-center justify-between">
//                   <div className="flex items-center gap-2 text-sm text-text/50">
//                     <Layers3 size={16} />
//                     <span>Our approach</span>
//                   </div>

//                   <Sparkles size={18} className="text-primary" />
//                 </div>

//                 <div className="space-y-4 font-mono text-sm sm:text-base">
//                   <p className="text-text/40">
//                     <span className="text-primary">01</span>
//                     <span className="ml-4">Design with purpose.</span>
//                   </p>

//                   <p className="text-text/40">
//                     <span className="text-primary">02</span>
//                     <span className="ml-4">Build with precision.</span>
//                   </p>

//                   <p className="text-text/40">
//                     <span className="text-primary">03</span>
//                     <span className="ml-4">Deliver with impact.</span>
//                   </p>
//                 </div>

//                 <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-text/10">
//                   <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-cyan-400" />
//                 </div>
//               </div>

//               {/* Bottom feature */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="rounded-xl border border-text/10 bg-background/80 p-4">
//                   <p className="text-xs text-text/50">Our focus</p>
//                   <p className="mt-2 font-bold text-text">Smart Solutions</p>
//                 </div>

//                 <div className="rounded-xl border border-text/10 bg-background/80 p-4">
//                   <p className="text-xs text-text/50">Our standard</p>
//                   <p className="mt-2 font-bold text-text">Quality First</p>
//                 </div>
//               </div>
//             </div>

//             {/* Floating label */}
//             <div className="absolute -left-3 top-24 hidden items-center gap-3 rounded-2xl border border-text/10 bg-card p-4 shadow-xl sm:flex lg:-left-8">
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
//                 <Sparkles size={21} />
//               </div>

//               <div>
//                 <p className="text-sm font-bold text-text">Ideas to reality</p>
//                 <p className="mt-1 text-xs text-text/50">Built with purpose</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <a
//           href="#about"
//           aria-label="Scroll to About section"
//           className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium text-text/40 transition hover:text-primary md:flex"
//         >
//           Scroll to explore
//           <ArrowDown size={15} className="animate-bounce" />
//         </a>
//       </section>

//       {/* ABOUT US SECTION */}
//       <section
//         id="about"
//         ref={aboutRef}
//         className="relative isolate overflow-hidden bg-background px-4 pt-24 sm:px-6 lg:px-10 lg:pt-28"
//       >

//         {/* Animations for this section */}
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');

//           @keyframes about-rise {
//             from { opacity: 0; transform: translateY(32px); }
//             to   { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes about-title {
//             from { opacity: 0; transform: translateY(-50px) scaleY(0.92); }
//             to   { opacity: 1; transform: translateY(0) scaleY(1); }
//           }
//           @keyframes about-photo {
//             from { opacity: 0; transform: translateY(60px) scale(0.94); }
//             to   { opacity: 1; transform: translateY(0) scale(1); }
//           }
//           @keyframes about-float {
//             0%, 100% { transform: translateY(0); }
//             50%      { transform: translateY(-10px); }
//           }
//           @keyframes about-line {
//             from { transform: scaleX(0); }
//             to   { transform: scaleX(1); }
//           }
//           .about-rise  { animation: about-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
//           .about-title { animation: about-title 1.3s cubic-bezier(0.22, 1, 0.36, 1) both; }
//           .about-photo { animation: about-photo 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both; }
//           .about-float { animation: about-float 4.5s ease-in-out infinite; }
//           .about-line  { animation: about-line 1s ease-out both; transform-origin: left; }
//           @media (prefers-reduced-motion: reduce) {
//             .about-rise, .about-title, .about-photo, .about-float, .about-line {
//               animation: none !important;
//             }
//           }
//         `}</style>

//         {/* Soft glows */}
//         <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-[110px]" />
//         <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]" />

//         {/* Giant background word: fills 70% of the section height on desktop */}
//         <div
//           aria-hidden="true"
//           className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32%] select-none sm:h-[45%] lg:h-[70%] ${
//             aboutVisible ? "about-title" : "opacity-0"
//           }`}
//         >
//           <svg
//             viewBox="0 0 1000 300"
//             preserveAspectRatio="none"
//             className="h-full w-full"
//           >
//             <defs>
//               <linearGradient id="aboutWordFill" x1="0" y1="0" x2="0" y2="1">
//                 <stop
//                   offset="0%"
//                   className="text-primary"
//                   style={{ stopColor: "currentColor", stopOpacity: 1 }}
//                 />
//                 <stop
//                   offset="55%"
//                   className="text-primary"
//                   style={{ stopColor: "currentColor", stopOpacity: 0.75 }}
//                 />
//                 <stop
//                   offset="100%"
//                   className="text-primary"
//                   style={{ stopColor: "currentColor", stopOpacity: 0.08 }}
//                 />
//               </linearGradient>
//             </defs>

//             <text
//               x="500"
//               y="268"
//               textAnchor="middle"
//               textLength="990"
//               lengthAdjust="spacingAndGlyphs"
//               fontSize="330"
//               fontWeight="900"
//               fill="url(#aboutWordFill)"
//             >
//               ALEXANDER
//             </text>
//           </svg>
//         </div>

//         <div className="relative mx-auto grid w-full max-w-[1600px] items-end gap-10 lg:grid-cols-[1fr_minmax(320px,500px)_1fr] lg:gap-6">
//           {/* LEFT: introduction */}
//           <div className="relative z-20 order-2 pb-4 lg:order-none lg:pb-12">
//             <p
//               className={`font-['Mrs_Saint_Delafield',cursive] text-5xl leading-none text-primary sm:text-6xl ${
//                 aboutVisible ? "about-rise" : "opacity-0"
//               }`}
//               style={{ animationDelay: "0.3s" }}
//             >
//               Hello, I'm
//             </p>

//             <h2
//               className={`mt-3 text-5xl font-black uppercase leading-[0.95] tracking-tight text-text sm:text-6xl xl:text-7xl ${
//                 aboutVisible ? "about-rise" : "opacity-0"
//               }`}
//               style={{ animationDelay: "0.45s" }}
//             >
//               Alexander
//               <br />
//               Chukwuka
//             </h2>

//             <p
//               className={`mt-6 text-sm font-extrabold uppercase leading-6 tracking-wide text-primary sm:text-base ${
//                 aboutVisible ? "about-rise" : "opacity-0"
//               }`}
//               style={{ animationDelay: "0.6s" }}
//             >
//               Web Developer &amp;
//               <br />
//               Digital Solutions Creator
//             </p>

//             <p
//               className={`mt-5 max-w-sm text-sm leading-7 text-text/65 ${
//                 aboutVisible ? "about-rise" : "opacity-0"
//               }`}
//               style={{ animationDelay: "0.75s" }}
//             >
//               At ALEXONE Digital Solutions, I design and build modern websites,
//               intelligent web applications, and reliable software that combine
//               creativity with strategy. Passionate about clean design, smooth
//               interactions, and details that make a difference.
//             </p>

//             <div
//               className={`mt-7 flex flex-wrap items-center gap-5 ${
//                 aboutVisible ? "about-rise" : "opacity-0"
//               }`}
//               style={{ animationDelay: "0.9s" }}
//             >
//               <a
//                 href="#contact"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:bg-primary/90"
//               >
//                 Let's Work Together
//                 <span aria-hidden="true">↗</span>
//               </a>

//               <span className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-text/55">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
//                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
//                 </span>
//                 Available worldwide
//               </span>
//             </div>
//           </div>

//           {/* CENTER: portrait */}
//           <div className="relative order-1 mx-auto flex h-[420px] w-full max-w-[500px] items-end justify-center sm:h-[540px] lg:order-none lg:h-[740px]">
//             <div className="absolute bottom-10 left-1/2 h-3/4 w-3/4 -translate-x-1/2 rounded-full bg-primary/25 blur-[90px]" />

//             <img
//               src={alexImage}
//               alt="Alexander Chukwuka, founder of ALEXONE Digital Solutions"
//               loading="lazy"
//               className={`relative z-10 h-full w-full object-cover object-top ${
//                 aboutVisible ? "about-photo" : "opacity-0"
//               }`}
//               style={{
//                 WebkitMaskImage:
//                   "linear-gradient(to bottom, black 65%, transparent 100%)",
//                 maskImage:
//                   "linear-gradient(to bottom, black 65%, transparent 100%)",
//               }}
//             />
//           </div>

//           {/* RIGHT: tagline and stats */}
//           <div className="relative z-20 order-3 flex flex-col gap-10 pb-12 lg:order-none lg:h-[740px] lg:items-end lg:justify-between lg:pb-12 lg:pt-28 xl:translate-x-10 2xl:translate-x-24">
//             {/* Floating tagline */}
//             <div
//               className={`about-float flex items-center gap-3 lg:self-end ${
//                 aboutVisible ? "" : "opacity-0"
//               }`}
//             >
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-card text-primary shadow-lg shadow-primary/10">
//                 <Sparkles size={18} />
//               </span>

//               <p className="max-w-[170px] text-xs leading-5 text-text/70">
//                 Turning ideas into powerful digital experiences.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="w-full max-w-[260px]">
//               {aboutStats.map((stat, index) => (
//                 <div
//                   key={stat.label}
//                   className={`relative flex items-center gap-4 py-5 ${
//                     aboutVisible ? "about-rise" : "opacity-0"
//                   }`}
//                   style={{ animationDelay: `${0.7 + index * 0.15}s` }}
//                 >
//                   <span className="min-w-[4.5rem] text-4xl font-black tabular-nums text-primary sm:text-5xl">
//                     {statValues[index]}+
//                   </span>

//                   <span className="text-xs font-semibold uppercase leading-4 tracking-widest text-text/55">
//                     {stat.label}
//                   </span>

//                   {index < aboutStats.length - 1 && (
//                     <span
//                       aria-hidden="true"
//                       className={`absolute bottom-0 left-0 h-px w-full bg-text/15 ${
//                         aboutVisible ? "about-line" : "scale-x-0"
//                       }`}
//                       style={{ animationDelay: `${0.9 + index * 0.15}s` }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* OUR TEAM SECTION */}
//       <section
//         id="team"
//         className="relative overflow-hidden bg-background px-3 py-20 sm:px-5 sm:py-24 lg:px-8 lg:py-28"
//       >
//         {/* Background effects */}
//         <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
//         <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

//         <div className="relative mx-auto w-full max-w-[1600px]">
//           {/* Section heading */}
//           <div className="mx-auto mb-14 max-w-3xl text-center">
//             <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
//               The People Behind Our Work
//             </span>

//             <h2 className="mt-5 text-4xl font-black tracking-tight text-text sm:text-5xl lg:text-6xl">
//               Meet Our{" "}
//               <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
//                 Team.
//               </span>
//             </h2>

//             <p className="mt-5 text-base leading-8 text-text/60 sm:text-lg">
//               We bring creativity, technical expertise, and a passion for
//               innovation together to build digital experiences that matter.
//             </p>
//           </div>

//           {/* Team cards */}
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {teamMembers.map((member, index) => (
//               <article
//                 key={member.name}
//                 className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-text/10 bg-card transition-all duration-300 active:scale-[0.99] active:border-primary/50 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
//               >
//                 {/* Profile image */}
//                 <div className="relative h-72 overflow-hidden bg-background sm:h-80">
//                   <img
//                     src={member.image}
//                     alt={`${member.name} profile`}
//                     loading="lazy"
//                     className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

//                   {/* Member number */}
//                   <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
//                     TEAM MEMBER {String(index + 1).padStart(2, "0")}
//                   </span>

//                   {/* Name on image */}
//                   <div className="absolute bottom-5 left-5 right-5">
//                     <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
//                       {member.name}
//                     </h3>

//                     <p className="mt-2 text-sm font-semibold text-cyan-300">
//                       {member.role}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Member details */}
//                 <div className="flex flex-1 flex-col p-6 sm:p-7">
//                   <p className="flex-1 text-sm leading-7 text-text/60 sm:text-base">
//                     {member.description}
//                   </p>

//                   {/* Skills */}
//                   <div className="mt-6">
//                     <h4 className="text-xs font-bold uppercase tracking-widest text-text/40">
//                       Expertise
//                     </h4>

//                     <div className="mt-3 flex flex-wrap gap-2">
//                       {member.skills.map((skill) => (
//                         <span
//                           key={skill}
//                           className="rounded-lg border border-text/10 bg-background px-3 py-2 text-xs font-medium text-text/70"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Bottom accent */}
//                   <div className="mt-6 flex items-center justify-between border-t border-text/10 pt-5">
//                     <span className="text-sm font-bold text-text transition group-hover:text-primary">
//                       {index === 0
//                         ? "Leadership & Development"
//                         : "Our Expertise"}
//                     </span>

//                     <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-lg text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-active:bg-primary group-active:text-white">
//                       ↗
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Team message */}
//           <div className="mt-12 rounded-3xl border border-text/10 bg-card p-7 text-center sm:p-10">
//             <h3 className="text-2xl font-extrabold text-text sm:text-3xl">
//               Great Solutions Start with Great Ideas.
//             </h3>

//             <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text/60 sm:text-base">
//               We believe in collaboration, continuous learning, and building
//               technology that creates real value. Together, we turn challenges
//               into opportunities.
//             </p>

//             <a
//               href="#contact"
//               className="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 active:scale-95 hover:-translate-y-1 hover:bg-primary/90"
//             >
//               Work With Our Team
//               <span aria-hidden="true">↗</span>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ================= FEATURED PROJECTS ================= */}
//       <section
//         id="projects"
//         className="relative overflow-hidden bg-background px-4 py-24 sm:px-2 lg:px-10 lg:py-32"
//       >
//         <div className="mx-auto w-full max-w-[1600px]">
//           {/* Section heading */}
//           <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
//             <div className="max-w-2xl">
//               <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
//                 Our Portfolio
//               </span>

//               <h2 className="mt-5 text-4xl font-black tracking-tight text-text sm:text-5xl lg:text-6xl">
//                 Featured{" "}
//                 <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
//                   Projects.
//                 </span>
//               </h2>

//               <p className="mt-5 max-w-xl text-base leading-8 text-text/60 sm:text-lg">
//                 A selection of digital experiences, creative ideas, and software
//                 solutions built with technology and purpose.
//               </p>
//             </div>

//             {/* Carousel controls */}
//             <div className="flex items-center gap-3">
//               <span className="mr-2 text-sm font-medium text-text/50">
//                 Explore our work
//               </span>

//               <button
//                 type="button"
//                 onClick={() =>
//                   setProjectPage(
//                     (current) =>
//                       (current - 1 + totalProjectPages) % totalProjectPages,
//                   )
//                 }
//                 aria-label="Previous projects"
//                 className="flex h-12 w-12 items-center justify-center rounded-full border border-text/10 bg-card text-text transition hover:border-primary hover:bg-primary hover:text-white"
//               >
//                 <ChevronLeft size={21} />
//               </button>

//               <button
//                 type="button"
//                 onClick={() =>
//                   setProjectPage((current) => (current + 1) % totalProjectPages)
//                 }
//                 aria-label="Next projects"
//                 className="flex h-12 w-12 items-center justify-center rounded-full border border-text/10 bg-card text-text transition hover:border-primary hover:bg-primary hover:text-white"
//               >
//                 <ChevronRight size={21} />
//               </button>
//             </div>
//           </div>

//           {/* Project cards */}
//           <div
//             onMouseEnter={() => setProjectsPaused(true)}
//             onMouseLeave={() => setProjectsPaused(false)}
//             onFocusCapture={() => setProjectsPaused(true)}
//             onBlurCapture={(event) => {
//               if (!event.currentTarget.contains(event.relatedTarget)) {
//                 setProjectsPaused(false);
//               }
//             }}
//             className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3"
//           >
//             {visibleProjects.map((project, index) => (
//               <a
//                 key={project.title}
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={`View live ${project.title} website`}
//                 className="group flex h-full flex-col overflow-hidden rounded-3xl border border-text/10 bg-card transition duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
//               >
//                 {/* Project image */}
//                 <div className="relative h-56 overflow-hidden bg-slate-900 sm:h-64">
//                   <img
//                     src={project.image}
//                     alt={`${project.title} project preview`}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

//                   <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
//                     {project.category}
//                   </span>

//                   <span className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-primary text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//                     <ExternalLink size={19} />
//                   </span>
//                 </div>

//                 {/* Project details */}
//                 <div className="flex flex-1 flex-col p-6 sm:p-7">
//                   <div className="flex items-start justify-between gap-3">
//                     <h3 className="text-2xl font-bold text-text transition group-hover:text-primary">
//                       {project.title}
//                     </h3>

//                     <span className="text-sm font-bold text-primary">
//                       {String(
//                         projectPage * projectsPerPage + index + 1,
//                       ).padStart(2, "0")}
//                     </span>
//                   </div>

//                   <p className="mt-4 flex-1 text-sm leading-7 text-text/60 sm:text-base">
//                     {project.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="mt-6 flex flex-wrap gap-2">
//                     {project.technologies.map((technology) => (
//                       <span
//                         key={technology}
//                         className="rounded-lg border border-text/10 bg-background px-3 py-2 text-xs font-medium text-text/70"
//                       >
//                         {technology}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Live website link */}
//                   <div className="mt-7 flex items-center justify-between border-t border-text/10 pt-5">
//                     <span className="text-sm font-bold text-text transition group-hover:text-primary">
//                       View Live Website
//                     </span>

//                     <ArrowUpRight
//                       size={20}
//                       className="text-primary transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                     />
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>

//           {/* Carousel indicators */}
//           <div className="mt-10 flex items-center justify-center gap-3">
//             {Array.from({ length: totalProjectPages }).map((_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => setProjectPage(index)}
//                 aria-label={`Show project group ${index + 1}`}
//                 aria-current={projectPage === index ? "true" : undefined}
//                 className={`h-2.5 rounded-full transition-all duration-300 ${
//                   projectPage === index
//                     ? "w-9 bg-primary"
//                     : "w-2.5 bg-text/20 hover:bg-primary/50"
//                 }`}
//               />
//             ))}
//           </div>

//           <p className="mt-4 text-center text-sm text-text/40">
//             Showing {projectPage * projectsPerPage + 1}–
//             {Math.min(
//               projectPage * projectsPerPage + projectsPerPage,
//               featuredProjects.length,
//             )}{" "}
//             of {featuredProjects.length} projects
//           </p>
//         </div>
//       </section>
//       {/* ================= END FEATURED PROJECTS ================= */}

//       {/* OUR SERVICES SECTION */}
//       <section
//         id="services"
//         className="relative overflow-hidden bg-background px-3 py-20 sm:px-5 sm:py-24 lg:px-8 lg:py-28"
//       >
//         {/* Background glow */}
//         <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
//         <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

//         <div className="relative mx-auto w-full max-w-[1600px]">
//           {/* Section heading */}
//           <div className="mx-auto mb-14 max-w-3xl text-center">
//             <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
//               What We Do
//             </span>

//             <h2 className="mt-5 text-4xl font-black tracking-tight text-text sm:text-5xl lg:text-6xl">
//               Our{" "}
//               <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
//                 Services.
//               </span>
//             </h2>

//             <p className="mt-5 text-base leading-8 text-text/60 sm:text-lg">
//               We deliver creative, reliable, and innovative digital solutions
//               that help businesses grow and turn ambitious ideas into reality.
//             </p>
//           </div>

//           {/* Services grid */}
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
//             {services.map((service) => (
//               <article
//                 key={service.number}
//                 className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-text/10 bg-card p-6 transition-all duration-300 active:scale-[0.98] active:border-primary/50 active:shadow-lg hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 sm:rounded-3xl sm:p-7 lg:p-8"
//               >
//                 {/* Hover accent */}
//                 <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-500 group-hover:w-full" />

//                 {/* Card header */}
//                 <div className="flex items-start justify-between">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/10 bg-primary/10 text-3xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-active:scale-110 group-active:bg-primary/20">
//                     {service.icon}
//                   </div>

//                   <span className="text-sm font-bold tracking-widest text-text/25 transition group-hover:text-primary">
//                     {service.number}
//                   </span>
//                 </div>

//                 {/* Card content */}
//                 <h3 className="mt-7 text-xl font-bold text-text transition group-hover:text-primary sm:text-2xl">
//                   {service.title}
//                 </h3>

//                 <p className="mt-4 flex-1 text-sm leading-7 text-text/60 sm:text-base">
//                   {service.description}
//                 </p>

//                 {/* Technology tags */}
//                 <div className="mt-6 flex flex-wrap gap-2">
//                   {service.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-lg border border-text/10 bg-background px-3 py-2 text-xs font-medium text-text/60"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Contact link */}
//                 <a
//                   href="#contact"
//                   aria-label={`Discuss our ${service.title} service`}
//                   className="mt-7 flex items-center justify-between border-t border-text/10 pt-5 text-sm font-bold text-text transition hover:text-primary"
//                 >
//                   <span>Discuss This Service</span>

//                   <span className="text-xl text-primary transition duration-300 group-hover:translate-x-1">
//                     ↗
//                   </span>
//                 </a>
//               </article>
//             ))}
//           </div>

//           {/* Bottom call to action */}
//           <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-text/10 bg-card p-6 sm:rounded-3xl sm:p-8 md:flex-row lg:p-10">
//             <div>
//               <h3 className="text-2xl font-extrabold text-text sm:text-3xl">
//                 Have a project in mind?
//               </h3>

//               <p className="mt-3 max-w-2xl text-sm leading-7 text-text/60 sm:text-base">
//                 Let's discuss your ideas and explore how we can turn them into a
//                 practical digital solution.
//               </p>
//             </div>

//             <a
//               href="#contact"
//               className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 font-bold text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:bg-primary/90"
//             >
//               Start a Project
//               <span aria-hidden="true">↗</span>
//             </a>
//           </div>
//         </div>
//       </section>

//         {/* CLIENT REVIEWS SECTION */}
//       {/* CLIENT REVIEWS SECTION */}
//       <section
//         id="reviews"
//         aria-label="Client testimonials"
//         className="relative overflow-hidden mx-auto w-full max-w-[1600px] bg-background px-4 py-20 sm:py-24 lg:py-28"
//         onMouseEnter={() => setReviewsPaused(true)}
//         onMouseLeave={() => setReviewsPaused(false)}
//         onFocusCapture={() => setReviewsPaused(true)}
//         onBlurCapture={() => setReviewsPaused(false)}
//       >
//         <div className="relative mx-auto max-w-7xl">
//           {/* Previous arrow */}
//           <button
//             type="button"
//             onClick={previousReview}
//             aria-label="Previous review"
//             className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-text/5 text-text transition hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-12 sm:w-12"
//           >
//             <ChevronLeft size={22} />
//           </button>

//           {/* Next arrow */}
//           <button
//             type="button"
//             onClick={nextReview}
//             aria-label="Next review"
//             className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-text/5 text-text transition hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-12 sm:w-12"
//           >
//             <ChevronRight size={22} />
//           </button>

//           {/* Slides: stacked in one grid cell so height fits the tallest review */}
//           <div className="mx-auto grid max-w-5xl px-14 sm:px-16">
//             {reviews.map((review, index) => {
//               const isActive = index === activeReview;

//               return (
//                 <figure
//                   key={review.id}
//                   aria-hidden={!isActive}
//                   className={`col-start-1 row-start-1 flex flex-col items-center text-center transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
//                     isActive ? "opacity-100" : "pointer-events-none opacity-0"
//                   }`}
//                 >
//                   <img
//                     src={review.image}
//                     alt={review.name}
//                     onError={(event) => {
//                       event.currentTarget.onerror = null;
//                       event.currentTarget.src = avatarFallback;
//                     }}
//                     className="h-24 w-24 rounded-full object-cover ring-2 ring-primary/20"
//                   />

//                   <blockquote className="mt-8 font-serif text-xl leading-9 text-text sm:text-2xl sm:leading-10">
//                     “{review.message}”
//                   </blockquote>

//                   <figcaption className="mt-8">
//                     <p className="text-base font-semibold text-text">
//                       {review.name}
//                     </p>
//                     <p className="mt-1 text-sm text-text/60">{review.role}</p>
//                   </figcaption>
//                 </figure>
//               );
//             })}
//           </div>

//           {/* More reviews button */}
//           <div className="mt-14 flex justify-center">
//             <a
//               href="#contact"
//               className="rounded-lg border border-text/10 bg-card px-7 py-3.5 text-sm font-semibold text-text transition duration-300 hover:border-primary hover:bg-primary hover:text-white"
//             >
//               More reviews
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* LET'S TALK SECTION */}
//       <section
//         id="contact"
//         className="relative overflow-hidden border-t border-white/10 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
//       >
//         <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
//           {/* COLUMN 1: LET'S TALK */}
//           <div className="flex flex-col items-start">
//             <div className="mb-5 flex items-center gap-2">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
//               </span>

//               <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
//                 Available for opportunities
//               </span>
//             </div>

//             <h2 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
//               Let's
//               <br />
//               <span className="text-primary">Collaborate.</span>
//             </h2>

//             <p className="mb-7 max-w-md text-base leading-7 text-text/65 sm:text-base">
//               Have a project in mind? We're open to new projects,
//               collaborations, and opportunities to build something meaningful
//               with technology.
//             </p>

//             <a
//               href="mailto:chukwukaezenweani2@gmail.com?subject=Let's%20Work%20Together"
//               className="group inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-semibold text-text transition-colors duration-300 hover:text-primary"
//             >
//               Start a Conversation
//               <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//                 ↗
//               </span>
//             </a>
//           </div>

//           {/* COLUMN 2: CONTACT DETAILS */}
//           <div className="flex flex-col items-start md:pl-4 lg:pl-0">
//             <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-text/45">
//               Contact Information
//             </h3>

//             <div className="mb-7">
//               <p className="mb-2 text-xs text-text/45">Email</p>

//               <a
//                 href="mailto:chukwukaezenweani2@gmail.com"
//                 className="break-all text-sm text-text transition-colors duration-300 hover:text-primary sm:text-base"
//               >
//                 chukwukaezenweani2@gmail.com
//               </a>
//             </div>

//             <div className="mb-7">
//               <p className="mb-2 text-xs text-text/45">Location</p>

//               <p className="text-sm text-text sm:text-base">Abuja, Nigeria</p>
//             </div>

//             <div>
//               <p className="mb-4 text-xs text-text/45">Connect with us</p>

//               <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
//                 <a
//                   href="https://github.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-text/75 transition-colors duration-300 hover:text-primary"
//                 >
//                   GitHub ↗
//                 </a>

//                 <a
//                   href="https://www.linkedin.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-text/75 transition-colors duration-300 hover:text-primary"
//                 >
//                   LinkedIn ↗
//                 </a>

//                 <a
//                   href="https://www.instagram.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-text/75 transition-colors duration-300 hover:text-primary"
//                 >
//                   Instagram ↗
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* COLUMN 3: LAPTOP IMAGE */}
//           <div className="relative flex min-h-[230px] items-center justify-center md:col-span-2 lg:col-span-1 lg:min-h-[320px]">
//             {/* Soft background glow */}
//             <div className="absolute h-48 w-48 rounded-full bg-primary/15 blur-[80px] sm:h-64 sm:w-64"></div>

//             <img
//               src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85"
//               alt="Laptop representing web development and digital solutions"
//               loading="lazy"
//               className="relative z-10 w-full max-w-md object-contain transition-transform duration-700 ease-out hover:-translate-y-2 lg:max-w-full"
//             />
//           </div>
//         </div>

//         {/* BOTTOM FOOTER LINE */}
//         <div className="mx-auto mt-14 flex w-full max-w-[1600px] flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-text/45 sm:flex-row sm:items-center">
//           <p>© {new Date().getFullYear()} ALEXONE Digital Solutions.</p>

//           <p>Designed & developed with purpose.</p>
//         </div>
//       </section>
//     </main>
//   );
// }
import { HeroSection, AboutSection } from "../components/HeroAbout";
import alexImage from "../assets/alex-represnt.png";
import { useEffect, useRef, useState } from "react";

import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Pencil,
  Plane,
  TrendingUp,
  Briefcase,
  ShoppingCart,
  Landmark,
  CreditCard,
  Clock,
  Search,
  Network,
  ListChecks,
  GitBranch,
  FlaskConical,
  Rocket,
} from "lucide-react";

const whatsappNumber = "2348122314775";
const whatsappDisplay = "+234 812 231 4775";
const xProfileUrl = "https://x.com/your_username";

const buildProcess = [
  {
    icon: Search,
    title: "Understand the problem",
    text: 'Write down who it\'s for, what it must do, and what "done" looks like before touching code.',
  },
  {
    icon: Network,
    title: "Design before you build",
    text: "Sketch the screens, the database tables, and the API endpoints. Fixing a diagram is faster than fixing code.",
  },
  {
    icon: ListChecks,
    title: "Break it into small tasks",
    text: "Split the work into tasks of a few hours each and list the must-haves first, so a working version comes early.",
  },
  {
    icon: GitBranch,
    title: "Build one feature at a time",
    text: "Finish each feature end to end (UI, API, database) on its own Git branch before starting the next.",
  },
  {
    icon: FlaskConical,
    title: "Test as you go",
    text: "Check each feature when it's built, with API tests and a quick manual run, so bugs never pile up.",
  },
  {
    icon: Rocket,
    title: "Ship, then improve",
    text: "Deploy early, collect feedback, and fix or refine in short cycles instead of one big release.",
  },
];

const featuredProjects = [
  {
    title: "EduManageERP",
    category: "School Management System",
    description:
      "A comprehensive school management platform for student records, admissions, attendance, examinations, results, and financial management.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    technologies: ["React", "Django", "PostgreSQL"],
    liveUrl: "https://example.com/edumanageerp",
  },
  {
    title: "ShopSphere",
    category: "E-commerce Website",
    description:
      "A modern online shopping experience featuring product discovery, product details, shopping cart functionality, and a streamlined checkout design.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com/shopsphere",
  },
  {
    title: "Haven Estates",
    category: "Real Estate Website",
    description:
      "A property discovery platform featuring property listings, beautiful photography, property details, and an intuitive search experience.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://example.com/haven-estates",
  },
  {
    title: "Foodie Express",
    category: "Food Delivery Website",
    description:
      "A food ordering experience where customers can explore menus, discover meals, and navigate a simple, convenient ordering interface.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85",
    technologies: ["React", "Express", "MongoDB"],
    liveUrl: "https://example.com/foodie-express",
  },
  {
    title: "FinTrack",
    category: "Finance Dashboard",
    description:
      "A clean financial dashboard concept for tracking expenses, reviewing transactions, monitoring budgets, and understanding spending patterns.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    technologies: ["React", "JavaScript", "Chart.js"],
    liveUrl: "https://example.com/fintrack",
  },
  {
    title: "TravelVista",
    category: "Travel & Booking Website",
    description:
      "A visually engaging travel website concept for exploring destinations, discovering accommodations, and planning memorable trips.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    technologies: ["React", "Tailwind CSS", "REST API"],
    liveUrl: "https://example.com/travelvista",
  },
];

const reviews = [
  {
    id: 1,
    name: "Client Name",
    role: "Business Owner",
    image: "/images/client-1.jpg",
    message:
      "Yesterday I attended my first event with lace Amis and I absolutely loved it. we had a tea ceremony at the beautiful hotel Palace and all the girls I met were super nice, with similar backgrounds and interesting experiences to share. I already booked more events and became a member. I will definitely recommend it!",
  },
  {
    id: 2,
    name: "Client Name",
    role: "School Administrator",
    image: "/images/client-2.jpg",
    message:
      "Yesterday I attended my first event with lace Amis and I absolutely loved it. we had a tea ceremony at the beautiful hotel Palace and all the girls I met were super nice, with similar backgrounds and interesting experiences to share. I already booked more events and became a member. I will definitely recommend it!",
  },
  {
    id: 3,
    name: "Client Name",
    role: "Entrepreneur",
    image: "/images/client-3.jpg",
    message:
      "Yesterday I attended my first event with lace Amis and I absolutely loved it. we had a tea ceremony at the beautiful hotel Palace and all the girls I met were super nice, with similar backgrounds and interesting experiences to share. I already booked more events and became a member. I will definitely recommend it!",
  },
];

// Shown automatically if a review image file is missing
const avatarFallback =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><rect width="44" height="44" fill="#94a3b8"/><circle cx="22" cy="17" r="8" fill="#e2e8f0"/><path d="M6 44c0-10 7-16 16-16s16 6 16 16z" fill="#e2e8f0"/></svg>',
  );

const technologies = [
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Python",
  "Django",
];

const teamMembers = [
  {
    name: "Alexander Chukwuka",
    role: "Founder & Lead Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    description:
      "Leading the vision, architecture, and development of digital solutions that turn ideas into practical products.",
    skills: ["React", "MERN Stack", "Django"],
    initials: "AC",
  },
  {
    name: "Creative Team Member",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    description:
      "Focused on creating attractive, intuitive, and accessible interfaces that make technology easier to use.",
    skills: ["UI Design", "UX Research", "Prototyping"],
    initials: "CT",
  },
  {
    name: "Technical Team Member",
    role: "Software Developer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
    description:
      "Building dependable application features, backend services, and integrations to support business growth.",
    skills: ["APIs", "Databases", "JavaScript"],
    initials: "TD",
  },
];

const services = [
  {
    number: "01",
    icon: "🌐",
    title: "Web Development",
    description:
      "We create modern, responsive, and high-performance websites that communicate your brand and deliver excellent user experiences.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "02",
    icon: "💻",
    title: "Full-Stack Development",
    description:
      "We build complete web applications with interactive frontends, reliable backends, secure APIs, and database integration.",
    tags: ["MERN Stack", "REST APIs", "Backend"],
  },
  {
    number: "03",
    icon: "🏫",
    title: "School Management Systems",
    description:
      "We develop digital school solutions for student records, attendance, examinations, results, payments, and school administration.",
    tags: ["Education", "Automation", "Management"],
  },
  {
    number: "04",
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "We design attractive, intuitive, and user-friendly interfaces that make digital products easier and more enjoyable to use.",
    tags: ["User Experience", "Responsive UI", "Prototyping"],
  },
  {
    number: "05",
    icon: "🗄️",
    title: "Database & Backend",
    description:
      "We create structured databases, dependable server-side systems, and APIs to support secure and efficient applications.",
    tags: ["Django", "Node.js", "PostgreSQL"],
  },
  {
    number: "06",
    icon: "⚙️",
    title: "Custom Software Solutions",
    description:
      "We develop tailored software applications that streamline business processes, reduce repetitive work, and solve practical problems.",
    tags: ["Business Tools", "Automation", "Integration"],
  },
];

const heroLeftServices = [
  { icon: GraduationCap, line1: "School", line2: "Websites" },
  { icon: Pencil, line1: "Blog", line2: "Website" },
  { icon: Plane, line1: "Travel", line2: "Agency" },
  { icon: TrendingUp, line1: "Investment", line2: "Website" },
];

const heroRightServices = [
  { icon: Briefcase, line1: "Portfolio", line2: "Website" },
  { icon: ShoppingCart, line1: "E-commerce", line2: "Website" },
  { icon: Landmark, line1: "Online", line2: "Banking" },
  { icon: CreditCard, line1: "Payment", line2: "Gateway" },
];

function HeroServiceCard({ item, side, index, linked }) {
  const Icon = item.icon;
  const isLeft = side === "left";
  const globalIndex = isLeft ? index : index + 4;

  return (
    <div
      style={{ "--i": index, "--g": globalIndex }}
      className={`${
        isLeft ? "hero-card-left" : "hero-card-right"
      } group relative flex flex-col items-center justify-center gap-1 rounded-lg border border-primary/50 bg-card/80 p-1.5 text-center text-primary backdrop-blur-md transition-colors duration-300 hover:border-primary hover:bg-primary/10 sm:flex-row sm:justify-start sm:gap-2.5 sm:rounded-xl sm:p-2.5 sm:text-left md:gap-3 md:p-3 lg:gap-2.5 lg:p-2.5 2xl:gap-3 2xl:p-3`}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-text text-background transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10">
        <Icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-4 lg:w-4 2xl:h-5 2xl:w-5" />
      </span>

      <span className="text-[9px] font-semibold leading-[1.15] text-text sm:text-[11px] md:text-sm lg:text-[11px] 2xl:text-sm">
        {item.line1}
        <br />
        {item.line2}
      </span>

      {linked && (
        <span
          aria-hidden="true"
          className={`hero-link ${isLeft ? "hero-link-left" : "hero-link-right"}`}
        />
      )}
    </div>
  );
}

const aboutStats = [
  { value: 3, label: "Years experience" },
  { value: featuredProjects.length, label: "Projects completed" },
  { value: 20, label: "Happy clients" },
];

export default function Home() {
  // Hooks must live INSIDE the component
  const [activeReview, setActiveReview] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [statValues, setStatValues] = useState(aboutStats.map(() => 0));
  const [projectPage, setProjectPage] = useState(0);
  const [projectsPaused, setProjectsPaused] = useState(false);

  const projectsPerPage = 3;

  const totalProjectPages = Math.ceil(
    featuredProjects.length / projectsPerPage,
  );

  const visibleProjects = featuredProjects.slice(
    projectPage * projectsPerPage,
    projectPage * projectsPerPage + projectsPerPage,
  );

  // Start About animations when the section scrolls into view
  useEffect(() => {
    const node = aboutRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Count-up animation for the About stats
  useEffect(() => {
    if (!aboutVisible) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setStatValues(aboutStats.map((stat) => stat.value));
      return;
    }

    const duration = 1800;
    const startTime = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setStatValues(aboutStats.map((stat) => Math.round(stat.value * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [aboutVisible]);

  const previousReview = () =>
    setActiveReview(
      (current) => (current - 1 + reviews.length) % reviews.length,
    );
  const nextReview = () =>
    setActiveReview((current) => (current + 1) % reviews.length);

  // Auto-rotate reviews (pauses on hover/focus)
  useEffect(() => {
    if (reviewsPaused) return;

    const interval = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [reviewsPaused]);

  // Auto-rotate projects (pauses on hover/focus)
  useEffect(() => {
    if (projectsPaused) return;

    const timer = window.setInterval(() => {
      setProjectPage((current) => (current + 1) % totalProjectPages);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [projectsPaused, totalProjectPages]);

  return (
    <main>
      {/* HERO SECTION */}
      <HeroSection />
      <AboutSection />

      {/* OUR TEAM SECTION */}
      <section
        id="team"
        className="relative overflow-hidden bg-background px-3 py-20 sm:px-5 sm:py-24 lg:px-8 lg:py-28"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-[1600px]">
          {/* Section heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              The People Behind Our Work
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-text sm:text-5xl lg:text-6xl">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Team.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-text/60 sm:text-lg">
              We bring creativity, technical expertise, and a passion for
              innovation together to build digital experiences that matter.
            </p>
          </div>

          {/* Team cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-text/10 bg-card transition-all duration-300 active:scale-[0.99] active:border-primary/50 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Profile image */}
                <div className="relative h-72 overflow-hidden bg-background sm:h-80">
                  <img
                    src={member.image}
                    alt={`${member.name} profile`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Member number */}
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    TEAM MEMBER {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Name on image */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                      {member.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-cyan-300">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Member details */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="flex-1 text-sm leading-7 text-text/60 sm:text-base">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-text/40">
                      Expertise
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-text/10 bg-background px-3 py-2 text-xs font-medium text-text/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-6 flex items-center justify-between border-t border-text/10 pt-5">
                    <span className="text-sm font-bold text-text transition group-hover:text-primary">
                      {index === 0
                        ? "Leadership & Development"
                        : "Our Expertise"}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-lg text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-active:bg-primary group-active:text-white">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Team message */}
          <div className="mt-12 rounded-3xl border border-text/10 bg-card p-7 text-center sm:p-10">
            <h3 className="text-2xl font-extrabold text-text sm:text-3xl">
              Great Solutions Start with Great Ideas.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text/60 sm:text-base">
              We believe in collaboration, continuous learning, and building
              technology that creates real value. Together, we turn challenges
              into opportunities.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 active:scale-95 hover:-translate-y-1 hover:bg-primary/90"
            >
              Work With Our Team
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section
        id="projects"
        className="relative overflow-hidden bg-background px-4 py-24 sm:px-2 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1600px]">
          {/* Section heading */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Our Portfolio
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-text sm:text-5xl lg:text-6xl">
                Featured{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  Projects.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-text/60 sm:text-lg">
                A selection of digital experiences, creative ideas, and software
                solutions built with technology and purpose.
              </p>
            </div>

            {/* Carousel controls */}
            <div className="flex items-center gap-3">
              <span className="mr-2 text-sm font-medium text-text/50">
                Explore our work
              </span>

              <button
                type="button"
                onClick={() =>
                  setProjectPage(
                    (current) =>
                      (current - 1 + totalProjectPages) % totalProjectPages,
                  )
                }
                aria-label="Previous projects"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-text/10 bg-card text-text transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <ChevronLeft size={21} />
              </button>

              <button
                type="button"
                onClick={() =>
                  setProjectPage((current) => (current + 1) % totalProjectPages)
                }
                aria-label="Next projects"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-text/10 bg-card text-text transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <ChevronRight size={21} />
              </button>
            </div>
          </div>

          {/* Project cards */}
          <div
            onMouseEnter={() => setProjectsPaused(true)}
            onMouseLeave={() => setProjectsPaused(false)}
            onFocusCapture={() => setProjectsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setProjectsPaused(false);
              }
            }}
            className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3"
          >
            {visibleProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live ${project.title} website`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-text/10 bg-card transition duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Project image */}
                <div className="relative h-56 overflow-hidden bg-slate-900 sm:h-64">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {project.category}
                  </span>

                  <span className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-primary text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ExternalLink size={19} />
                  </span>
                </div>

                {/* Project details */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-bold text-text transition group-hover:text-primary">
                      {project.title}
                    </h3>

                    <span className="text-sm font-bold text-primary">
                      {String(
                        projectPage * projectsPerPage + index + 1,
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-7 text-text/60 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-text/10 bg-background px-3 py-2 text-xs font-medium text-text/70"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Live website link */}
                  <div className="mt-7 flex items-center justify-between border-t border-text/10 pt-5">
                    <span className="text-sm font-bold text-text transition group-hover:text-primary">
                      View Live Website
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="text-primary transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {Array.from({ length: totalProjectPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setProjectPage(index)}
                aria-label={`Show project group ${index + 1}`}
                aria-current={projectPage === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  projectPage === index
                    ? "w-9 bg-primary"
                    : "w-2.5 bg-text/20 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <p className="mt-4 text-center text-sm text-text/40">
            Showing {projectPage * projectsPerPage + 1}–
            {Math.min(
              projectPage * projectsPerPage + projectsPerPage,
              featuredProjects.length,
            )}{" "}
            of {featuredProjects.length} projects
          </p>
        </div>
      </section>
      {/* ================= END FEATURED PROJECTS ================= */}

      {/* OUR SERVICES SECTION */}
      <section
        id="services"
        className="relative overflow-hidden bg-background px-3 py-20 sm:px-5 sm:py-24 lg:px-8 lg:py-28"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-[1600px]">
          {/* Section heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              What We Do
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-text sm:text-5xl lg:text-6xl">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Services.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-text/60 sm:text-lg">
              We deliver creative, reliable, and innovative digital solutions
              that help businesses grow and turn ambitious ideas into reality.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-text/10 bg-card p-6 transition-all duration-300 active:scale-[0.98] active:border-primary/50 active:shadow-lg hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 sm:rounded-3xl sm:p-7 lg:p-8"
              >
                {/* Hover accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-500 group-hover:w-full" />

                {/* Card header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/10 bg-primary/10 text-3xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-active:scale-110 group-active:bg-primary/20">
                    {service.icon}
                  </div>

                  <span className="text-sm font-bold tracking-widest text-text/25 transition group-hover:text-primary">
                    {service.number}
                  </span>
                </div>

                {/* Card content */}
                <h3 className="mt-7 text-xl font-bold text-text transition group-hover:text-primary sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-text/60 sm:text-base">
                  {service.description}
                </p>

                {/* Technology tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-text/10 bg-background px-3 py-2 text-xs font-medium text-text/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Contact link */}
                <a
                  href="#contact"
                  aria-label={`Discuss our ${service.title} service`}
                  className="mt-7 flex items-center justify-between border-t border-text/10 pt-5 text-sm font-bold text-text transition hover:text-primary"
                >
                  <span>Discuss This Service</span>

                  <span className="text-xl text-primary transition duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </article>
            ))}
          </div>

          {/* Bottom call to action */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-text/10 bg-card p-6 sm:rounded-3xl sm:p-8 md:flex-row lg:p-10">
            <div>
              <h3 className="text-2xl font-extrabold text-text sm:text-3xl">
                Have a project in mind?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-text/60 sm:text-base">
                Let's discuss your ideas and explore how we can turn them into a
                practical digital solution.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 font-bold text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:bg-primary/90"
            >
              Start a Project
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* CLIENT REVIEWS SECTION */}
      <section
        id="reviews"
        aria-label="Client testimonials"
        className="relative overflow-hidden bg-background px-4 py-20 sm:py-24 lg:py-28"
        onMouseEnter={() => setReviewsPaused(true)}
        onMouseLeave={() => setReviewsPaused(false)}
        onFocusCapture={() => setReviewsPaused(true)}
        onBlurCapture={() => setReviewsPaused(false)}
      >
        <div className="relative mx-auto max-w-7xl">
          {/* Previous arrow */}
          <button
            type="button"
            onClick={previousReview}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-text/5 text-text transition hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-12 sm:w-12"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={nextReview}
            aria-label="Next review"
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-text/5 text-text transition hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-12 sm:w-12"
          >
            <ChevronRight size={22} />
          </button>

          {/* Slides: stacked in one grid cell so height fits the tallest review */}
          <div className="mx-auto max-w-6xl grid max-w-3xl px-14 sm:px-16">
            {reviews.map((review, index) => {
              const isActive = index === activeReview;

              return (
                <figure
                  key={review.id}
                  aria-hidden={!isActive}
                  className={`col-start-1 row-start-1 flex flex-col items-center text-center transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                    isActive ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = avatarFallback;
                    }}
                    className="h-24 w-24 rounded-full object-cover ring-2 ring-primary/20"
                  />

                  <blockquote className="mt-8 font-serif text-xl leading-9 text-text sm:text-2xl sm:leading-10">
                    “{review.message}”
                  </blockquote>

                  <figcaption className="mt-8">
                    <p className="text-base font-semibold text-text">
                      {review.name}
                    </p>
                    <p className="mt-1 text-sm text-text/60">{review.role}</p>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* More reviews button */}
          <div className="mt-14 flex justify-center">
            <a
              href="#contact"
              className="rounded-lg border border-text/10 bg-card px-7 py-3.5 text-sm font-semibold text-text transition duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              More reviews
            </a>
          </div>
        </div>
      </section>

      {/* LET'S TALK SECTION */}

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
      >
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
          {/* COLUMN 1: LET'S TALK */}
          <div className="flex flex-col items-start">
            <div className="mb-5 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                Available for opportunities
              </span>
            </div>

            <h2 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-text transition-colors duration-300 sm:text-5xl lg:text-6xl">
              Let's
              <br />
              <span className="text-primary">Collaborate.</span>
            </h2>

            <p className="mb-7 max-w-md text-base leading-7 text-text/65">
              Have a project in mind? We're open to new projects,
              collaborations, and opportunities to build something meaningful
              with technology.
            </p>

            {/* WhatsApp conversation button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hi Alexander, I'd like to talk about a project.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-semibold text-text transition-all duration-300 hover:gap-4 hover:text-primary"
            >
              Start a Conversation
              <span
                aria-hidden="true"
                className="inline-block text-lg text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          </div>

          {/* COLUMN 2: CONTACT DETAILS */}
          <div className="flex flex-col items-start md:pl-4 lg:pl-0">
            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-text/45">
              Contact Information
            </h3>

            <div className="group mb-7">
              <p className="mb-2 text-xs text-text/45 transition-colors duration-300 group-hover:text-primary">
                Email
              </p>

              <a
                href="mailto:chukwukaezenweani2@gmail.com"
                className="break-all text-sm text-text transition-all duration-300 hover:translate-x-1 hover:text-primary sm:text-base"
              >
                chukwukaezenweani2@gmail.com
              </a>
            </div>

            <div className="group mb-7">
              <p className="mb-2 text-xs text-text/45 transition-colors duration-300 group-hover:text-primary">
                WhatsApp
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hi Alexander, I'd like to talk about a project.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Alexander on WhatsApp"
                className="inline-flex items-center gap-2 text-sm text-text transition-all duration-300 hover:translate-x-1 hover:text-primary sm:text-base"
              >
                {whatsappDisplay}
              </a>
            </div>

            <div className="group mb-7">
              <p className="mb-2 text-xs text-text/45 transition-colors duration-300 group-hover:text-primary">
                Location
              </p>

              <p className="text-sm text-text transition-transform duration-300 group-hover:translate-x-1 sm:text-base">
                Abuja, Nigeria
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs text-text/45">Connect with us</p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                <a
                  href="https://github.com/1ECA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/75 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/75 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/75 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                >
                  Instagram
                </a>

                <a
                  href={xProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/75 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                >
                  X
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/75 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 3: HOW I PLAN A BUILD */}
          <div className="relative md:col-span-2 lg:col-span-1">
            <div className="pointer-events-none absolute -right-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-primary/15 blur-[90px]" />

            <div className="relative rounded-3xl border border-text/10 bg-card/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-7">
              <h3 className="text-xl font-bold text-text sm:text-2xl">
                How I plan a build
              </h3>

              <ol className="relative mt-7 space-y-5">
                {/* Vertical connector line */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-5 left-[19px] top-5 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent"
                />

                {buildProcess.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <li
                      key={step.title}
                      className="group relative flex gap-4 rounded-xl p-2 transition-all duration-300 hover:translate-x-1 hover:bg-primary/5"
                    >
                      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                        <Icon size={18} />
                      </span>

                      <div className="pt-0.5">
                        <h4 className="text-sm font-bold text-text transition-colors duration-300 group-hover:text-primary sm:text-base">
                          <span className="mr-1.5 text-primary">
                            {index + 1}.
                          </span>
                          {step.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-text/60">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER LINE */}
        <div className="mx-auto mt-14 flex w-full max-w-[1600px] flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-text/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ALEXONE Digital Solutions.</p>

          <p className="transition-colors duration-300 hover:text-primary">
            Designed & developed with purpose.
          </p>
        </div>
      </section>

    </main>
  );
}
