"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MinimalSculpture from "./Components/MinimalSculpture";

const navItems = [
  { label: "Prisma Light", href: "#prisma" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Showcase", href: "#showcase" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    title: "Immersive Lighting",
    description:
      "Precision-tuned lighting elevates every product form, revealing sculptural curves with cinematic clarity.",
    accent: "bg-gradient-to-r from-cyan-500/60 via-teal-400/20 to-transparent",
  },
  {
    title: "Minimal Surfaces",
    description:
      "A restrained palette, fluid typography, and generous breathing room combine to keep attention on your craft.",
    accent: "bg-gradient-to-r from-emerald-500/50 via-emerald-400/10 to-transparent",
  },
  {
    title: "Narrative Flow",
    description:
      "Scroll-triggered motion orchestrates an elegant story arc that guides visitors from intrigue to action.",
    accent: "bg-gradient-to-r from-sky-500/60 via-blue-400/20 to-transparent",
  },
];

const showcases = [
  {
    title: "Prisma Arc Studio",
    description: "Spatial storytelling for a boutique lighting atelier exploring diffraction and glow.",
    tone: "teal",
  },
  {
    title: "Lumen Fold",
    description: "A modular device launch page blending product renders with luminous gradients.",
    tone: "amber",
  },
  {
    title: "Aero Prism",
    description: "Interactive catalog for kinetic installations with focus on texture and tactility.",
    tone: "violet",
  },
];

const capsules = [
  {
    heading: "Sculpted for Visionaries",
    body: "We partner with design-forward founders to craft experiences as refined as their products.",
  },
  {
    heading: "Obsessive about Detail",
    body: "Micro-interactions, calibrated type scales, and immersive lighting unify every scroll.",
  },
  {
    heading: "Future-Ready",
    body: "Optimized performance, CMS-ready content, and responsive behavior come standard.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] } as const;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050607] text-slate-100">
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-40 border-b border-white/5 bg-[#050607]/75 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="#hero" className="text-lg font-semibold tracking-[0.6em] text-slate-200">
            RM
          </Link>
          <nav className="hidden gap-8 text-sm text-slate-300 sm:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ color: "#f8fafc" }}
                transition={{ duration: 0.2 }}
                className="uppercase tracking-[0.25em]"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          <Link
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 transition hover:border-cyan-400/60 hover:text-white"
          >
            Start a project
          </Link>
        </div>
      </motion.header>

      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12),transparent_45%)]"
      />

      <motion.section
        id="hero"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={transition}
        className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 md:flex-row md:items-end md:gap-24"
      >
        <div className="flex-1 space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Minimalist Studio</p>
            <motion.h1
              className="text-[clamp(3.5rem,12vw,6rem)] font-semibold leading-[0.9] text-white"
              variants={fadeInUp}
              transition={{ ...transition, delay: 0.15 }}
            >
              Minimalist <br /> Prisma Light
            </motion.h1>
          </div>
          <motion.p
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.3 }}
            className="max-w-xl text-lg text-slate-300"
          >
            A luminous portfolio canvas for modern product designers. Crafted with depth, restraint, and a kinetic rhythm that
            invites discovery.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.45 }}
            className="flex flex-wrap gap-5"
          >
            <Link
              href="#showcase"
              className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 via-emerald-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">View Showcase</span>
              <span className="relative text-xl">→</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200 transition hover:border-amber-400/60 hover:text-white"
            >
              Collaborate
            </Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            {capsules.map((capsule) => (
              <div
                key={capsule.heading}
                className="flex-1 space-y-2 rounded-3xl border border-white/5 bg-white/5 p-5 backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{capsule.heading}</p>
                <p className="text-sm text-slate-200">{capsule.body}</p>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.75 }}
            className="hidden h-1 w-full max-w-md overflow-hidden rounded-full bg-white/5 sm:block"
          >
            <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-400" />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn}
          transition={{ ...transition, delay: 0.45 }}
          className="flex flex-1 items-center justify-center"
        >
          <MinimalSculpture className="w-full" accent="teal" />
        </motion.div>
      </motion.section>

      <motion.section
        id="prisma"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ ...transition, delay: 0.1 }}
        className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 pb-24"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Prisma Light</p>
          <h2 className="text-[clamp(2.5rem,8vw,4.5rem)] font-semibold text-white">
            Illuminate the essence of your product.
          </h2>
          <p className="max-w-3xl text-lg text-slate-300">
            We choreograph gradients, reflections, and depth to mirror the nuance of industrial design. Each scroll reveals a new
            plane of your story, paced with smooth motion that feels inevitable.
          </p>
        </div>
        <div className="grid w-full gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              transition={{ ...transition, delay: 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.06] p-6 backdrop-blur-xl"
            >
              <span className={`absolute inset-x-0 top-0 h-1 ${feature.accent}`} />
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="why"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...transition, delay: 0.2 }}
        className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24"
      >
        <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Why Choose Us</p>
            <h2 className="text-[clamp(2.8rem,8vw,4.8rem)] font-semibold leading-[0.95] text-white">
              Vision-led partnerships for rarefied products.
            </h2>
            <p className="text-lg text-slate-300">
              From product renders to editorial storytelling, we shape cohesive experiences that feel both futuristic and
              intimate. Expect polished interactions, purposeful whitespace, and smooth momentum with every scroll.
            </p>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="rounded-full border border-white/10 px-4 py-2">Framer Motion Micro-interactions</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Component-driven Systems</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Responsive Art Direction</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <MinimalSculpture className="w-full max-w-[440px]" accent="amber" />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="showcase"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ ...transition, delay: 0.15 }}
        className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24"
      >
        <div className="flex flex-col gap-5">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Showcase</p>
          <h2 className="text-[clamp(2.6rem,8vw,4.6rem)] font-semibold text-white">
            Crafted experiences that glow with intention.
          </h2>
          <p className="max-w-3xl text-lg text-slate-300">
            Each concept channels the minimalist aesthetic of our studio—bold type, considered color, and sculptural compositions.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3">
          {showcases.map((showcase) => (
            <motion.article
              key={showcase.title}
              variants={fadeInUp}
              transition={{ ...transition, delay: 0.2 }}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 backdrop-blur-xl"
            >
              <div className="relative flex h-64 items-center justify-center">
                <MinimalSculpture className="h-full w-full" accent={showcase.tone as "teal" | "amber" | "violet"} glow={false} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">{showcase.title}</h3>
                <p className="text-sm text-slate-300">{showcase.description}</p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 transition hover:text-cyan-100"
                >
                  Discuss project
                  <span className="text-lg">↗</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...transition, delay: 0.1 }}
        className="mx-auto w-full max-w-5xl px-6 pb-28"
      >
        <div className="overflow-hidden rounded-[48px] border border-white/5 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent p-12 text-center backdrop-blur-2xl">
          <p className="text-sm uppercase tracking-[0.5em] text-slate-400">Get in touch</p>
          <h2 className="mt-6 text-[clamp(2.8rem,8vw,4.5rem)] font-semibold text-white">Let&rsquo;s shape your next statement piece.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Share your vision, mood boards, and launch goals. We will craft a tailor-made experience, complete with motion
            prototypes and luminous visuals that invite exploration.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-300">
            <span className="rounded-full border border-white/10 px-5 py-3">Brand &amp; Identity</span>
            <span className="rounded-full border border-white/10 px-5 py-3">Interactive Prototypes</span>
            <span className="rounded-full border border-white/10 px-5 py-3">Launch Strategy</span>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              href="mailto:hello@minimalist.studio"
              className="group inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-cyan-400/60"
            >
              <span className="relative">hello@minimalist.studio</span>
              <span className="text-xl">→</span>
            </Link>
            <Link
              href="https://cal.com"
              className="inline-flex items-center gap-4 rounded-full border border-amber-400/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300 transition hover:border-amber-300 hover:text-amber-200"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a call
            </Link>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-white/5 bg-black/40 py-8 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
        © {new Date().getFullYear()} Minimalist Prisma Light Studio. Crafted with motion.
      </footer>
    </main>
  );
}
