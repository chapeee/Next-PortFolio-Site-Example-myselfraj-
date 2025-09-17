import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import CompaniesIhaveWorked from "./Components/CompaniesIhaveWorked";
import HomeLearn from "./Components/HomeLearn";
import HomeWriting from "./Components/HomeWriting";
import Technology from "./Components/Technology";
import heroPortrait from "./assets/rajneesh.png";

const heroStats = [
  { value: "100+", label: "Projects shipped" },
  { value: "40+", label: "Clients partnered" },
  { value: "15+", label: "Technologies worked with" },
];

type HeroHighlight = {
  tag: string;
  quote: string;
  name: string;
  role: string;
  accent: string;
  image: StaticImageData;
};

const heroHighlights: HeroHighlight[] = [
  {
    tag: "Building Grapdevs",
    quote:
      "I engage in the art of creation, a visionary who believes in the power of building visionary products.",
    name: "Rajneesh Raj",
    role: "Founder, Grapdevs",
    accent: "from-accent/30 via-accent/10 to-transparent border-accent/40",
    image: heroPortrait,
  },
  {
    tag: "Projects launched",
    quote:
      "I have worked on over 100 projects, using more than 15 different technologies. These projects have been launched on various platforms, many of which have gained millions of users.",
    name: "Projects & Clients",
    role: "100+ projects • 40+ clients",
    accent: "from-secondary/30 via-secondary/10 to-transparent border-secondary/40",
    image: heroPortrait,
  },
  {
    tag: "Journey since 2014",
    quote:
      "My official coding voyage began in 2014. PHP was the first language I tackled, along with HTML and CSS.",
    name: "Full-stack & Front-end",
    role: "Builder across 15+ technologies",
    accent: "from-tertiary/30 via-tertiary/10 to-transparent border-tertiary/40",
    image: heroPortrait,
  },
];

const storyBullets = [
  "Back in fourth grade, the magic happened—I got my hands on my first computer!",
  "Back in 5th grade, my dad walked in with a command prompt book that ignited my curiosity for the terminal.",
  "Then, in 6th grade, I crafted my very first HTML page with the help of a senior's notes.",
];

type ProjectHighlight = {
  id: string;
  title: string;
  description: string;
  meta: string;
  accent: string;
};

const projectHighlights: ProjectHighlight[] = [
  {
    id: "01",
    title: "VLE Platform",
    description:
      "I began this Virtual learning environment project as a college assignment during my final semester. Later, when I started freelancing, a client needed a similar solution. I introduced them with my platform, they liked it, and requested some modifications. We ended up making around 45% changes according to their requirements, and eventually, I sold the customized platform to them.",
    meta: "Full Stack Developer • 2020 – 2022",
    accent: "border-accent/50 bg-gradient-to-br from-accent/10 via-slate-900/50 to-transparent",
  },
  {
    id: "02",
    title: "Water harvesting",
    description:
      "Create an Internet of Things (IoT) web application for water harvesting that enables users to track and assess their water savings across various areas such as bathrooms, gardens, and pools. The app also calculates the overall water savings and provides a ranking to determine if the collected water is suitable for reuse for which areas.",
    meta: "Front-end & API Developer • 2021 – 2022",
    accent: "border-secondary/50 bg-gradient-to-br from-secondary/10 via-slate-900/50 to-transparent",
  },
  {
    id: "03",
    title: "TV App",
    description:
      "I made a TV app for a company. I designed it and assisted the developers in getting channels and playing both channels and movies. My main focus was on making sure the player could handle subtitles during video playback, playing video and managing the subscription same as Netflix.com.",
    meta: "UI/UX & Front-end • 2023",
    accent: "border-tertiary/50 bg-gradient-to-br from-tertiary/10 via-slate-900/50 to-transparent",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative isolate overflow-hidden border-b border-slate-800/50">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_rgba(15,23,42,0))]"></div>
        <div className="absolute inset-y-0 right-[-30%] top-[-20%] -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(6,182,212,0.3),_rgba(15,23,42,0))]"></div>
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1.05fr,0.95fr] lg:py-28">
          <div className="space-y-10">
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-slate-700/50 bg-slate-900/60 px-4 py-1">
                Founder @ Grapdevs
              </span>
              <span className="rounded-full border border-slate-700/50 bg-slate-900/60 px-4 py-1">
                Full-stack product builder
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[58px]">
                Hi! I am Rajneesh — your trusted partner for visionary products.
              </h1>
              <p className="text-lg text-slate-300 sm:text-xl">
                I engage in the art of creation, a visionary who believes in the power of building visionary products. See you on Mars 🚀...
              </p>
              <p className="text-lg text-slate-300 sm:text-xl">
                I have worked on over 100 projects, using more than 15 different technologies. These projects have been launched on various platforms, many of which have gained millions of users.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:from-secondary hover:to-tertiary"
              >
                View Projects
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-accent/60 hover:text-white"
              >
                Read my story
                <span aria-hidden>↗</span>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 shadow-lg shadow-black/30"
                >
                  <div className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            {heroHighlights.map((highlight) => (
              <div
                key={highlight.tag}
                className={`relative overflow-hidden rounded-3xl border ${highlight.accent} p-6 shadow-xl shadow-black/30 backdrop-blur-lg`}
              >
                <div className="text-xs uppercase tracking-[0.3em] text-slate-300/80">
                  {highlight.tag}
                </div>
                <p className="mt-4 text-lg text-slate-100 sm:text-xl">
                  “{highlight.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-700/60">
                    <Image
                      src={highlight.image}
                      alt={`${highlight.name} avatar`}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                      priority={false}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{highlight.name}</div>
                    <div className="text-xs text-slate-300">{highlight.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-800/40 bg-slate-900/40">
        <div className="absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.25),_rgba(15,23,42,0))]"></div>
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 lg:grid-cols-[0.65fr,0.35fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
              Journey
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Elevating achievements, embark on a journey.
            </h2>
            <p className="text-lg text-slate-300 sm:text-xl">
              Back in fourth grade, the magic happened—I got my hands on my first computer! The whole neighborhood buzzed with curiosity as the computer engineer was setting up the PC right at my home.
            </p>
            <p className="text-lg text-slate-300 sm:text-xl">
              I studied BCA and MCA in Computer Science and worked as a full-stack and front-end developer. I&apos;ve put my skills to the test on over a hundred projects, juggling both freelancing gigs and company projects.
            </p>
            <ul className="space-y-3 text-base text-slate-300">
              {storyBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-accent"></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-secondary/60 hover:text-white"
              >
                Explore learnings
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-8 shadow-xl shadow-black/30">
              <p className="text-lg text-slate-100">
                “The journey hasn&apos;t been a walk in the park, and even today, it throws new challenges my way. I studied BCA and MCA in Computer Science and worked as a full-stack and front-end developer.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border border-slate-700/60">
                  <Image
                    src={heroPortrait}
                    alt="Rajneesh Raj portrait"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Rajneesh Raj</div>
                  <div className="text-xs text-slate-300">Founder, Grapdevs</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800/60 bg-gradient-to-r from-accent/10 via-slate-900/60 to-secondary/10 p-6 text-sm text-slate-100 shadow-lg shadow-black/30">
              And hey, now I&apos;m steering my own ship at
              <Link
                href="https://grapdevs.com"
                className="ml-2 inline-flex items-center gap-1 text-accent underline-offset-4 hover:text-secondary"
              >
                Grapdevs.com
                <span aria-hidden>↗</span>
              </Link>
              .
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-800/40 bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(circle,_rgba(6,182,212,0.2),_rgba(15,23,42,0))]"></div>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
              Crafted Creations
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
              Crafted Creations: My Unique Project Achievements
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              From virtual learning environments to IoT dashboards and streaming platforms, I partner with founders to craft the products they imagine.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {projectHighlights.map((project) => (
              <div
                key={project.id}
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border ${project.accent} p-8 shadow-xl shadow-black/30 backdrop-blur`}
              >
                <div className="text-sm font-semibold text-slate-300">{project.id}</div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-base text-slate-300">{project.description}</p>
                <div className="mt-6 text-sm font-medium text-slate-200">{project.meta}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-tertiary/60 hover:text-white"
            >
              Browse all projects
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-slate-950">
        <Technology />
      </div>
      <div className="bg-slate-950">
        <HomeWriting />
      </div>
      <div className="bg-slate-950">
        <HomeLearn />
      </div>
      <div className="bg-slate-950 py-20">
        <CompaniesIhaveWorked />
      </div>
    </main>
  );
}

