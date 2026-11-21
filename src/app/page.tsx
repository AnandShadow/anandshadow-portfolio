"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import {
  Terminal,
  Cpu,
  Database,
  Award,
  Code2,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Command,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Hammer,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import NeuralBackground from "@/components/NeuralBackground";
import SpotlightCard from "@/components/SpotlightCard";
import InteractiveArchitectureTerminal from "@/components/InteractiveArchitectureTerminal";
import CustomCursor from "@/components/CustomCursor";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function PortfolioPage() {
  const [copied, setCopied] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      if (e.key === "Escape") setCmdOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-blueprint-grid relative min-h-screen text-slate-100">
      {/* Custom Interactive Cobalt Reticle Cursor */}
      <CustomCursor />

      {/* Top Electric Blue Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 right-0 left-0 z-50 h-[3px] origin-left bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 shadow-[0_0_12px_#38bdf8]"
      />

      {/* Interactive Mouse-Reactive Neural Canvas */}
      <NeuralBackground />

      {/* Floating Glass Navbar */}
      <header className="sticky top-4 z-40 mx-auto max-w-5xl px-4">
        <nav className="flex items-center justify-between rounded-2xl border border-sky-400/20 bg-[#050b1d]/80 px-5 py-3 shadow-[0_8px_32px_rgba(2,6,23,0.85)] backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-sky-300">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/30 text-sky-300 ring-1 ring-sky-400/40">
              AS
            </span>
            <span>anandshadow.me</span>
          </a>

          <div className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
            <a href="#simulator" className="transition hover:text-sky-400">Live Lab</a>
            <a href="#projects" className="transition hover:text-sky-400">Systems</a>
            <a href="#experience" className="transition hover:text-sky-400">Experience</a>
            <a href="#skills" className="transition hover:text-sky-400">Stack & Certs</a>
          </div>

          <button
            onClick={() => setCmdOpen(true)}
            className="flex items-center gap-2 rounded-xl border border-sky-400/25 bg-blue-950/50 px-3 py-1.5 font-mono text-xs text-sky-300 transition hover:border-sky-400/60 hover:bg-blue-900/50"
          >
            <Command className="h-3.5 w-3.5" />
            <span>Ctrl+K</span>
          </button>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl space-y-24 px-4 pt-16 pb-28 sm:px-6">
        {/* HERO SECTION */}
        <section className="space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-blue-950/60 px-4 py-1.5 font-mono text-xs text-sky-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
            B.Tech IT · IARE Hyderabad (2023–2027) · Open to SWE & AI Internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            <span className="block text-slate-100">{PROFILE.name}</span>
            <span className="mt-2 block bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Architecting AI Backends & High-Concurrency Systems.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Software & AI Systems developer specializing in{" "}
            <span className="font-semibold text-sky-300">FastAPI</span>,{" "}
            <span className="font-semibold text-sky-300">ChromaDB Vector RAG</span>, and{" "}
            <span className="font-semibold text-sky-300">Python / React</span> full-stack applications—focused on low-latency task routing, semantic retrieval, and deterministic LLM guardrails.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,0.55)] transition hover:bg-blue-500"
            >
              <GithubIcon className="h-4 w-4" /> GitHub (@AnandShadow)
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-sky-400/30 bg-[#08122b] px-5 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-400 hover:bg-blue-950/60"
            >
              <LinkedinIcon className="h-4 w-4 text-sky-400" /> LinkedIn
            </a>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-3 font-mono text-xs text-slate-300 transition hover:border-sky-400/50 hover:text-sky-300"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-sky-400" />}
              {copied ? "Copied yanandshadow@gmail.com" : PROFILE.email}
            </button>
          </motion.div>
        </section>

        {/* INTERACTIVE LIVE SYSTEM SIMULATOR */}
        <section id="simulator" className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="flex items-center gap-2 font-mono text-xs tracking-widest text-sky-400 uppercase">
                <Terminal className="h-4 w-4" /> Interactive Architecture Sandbox
              </h2>
              <p className="mt-1 text-2xl font-bold text-white">Test My Backend Pipelines Live</p>
            </div>
          </div>
          <InteractiveArchitectureTerminal />
        </section>

        {/* SELECTED ENGINEERING PROJECTS */}
        <section id="projects" className="space-y-6">
          <div>
            <h2 className="flex items-center gap-2 font-mono text-xs tracking-widest text-sky-400 uppercase">
              <Cpu className="h-4 w-4" /> Featured Systems
            </h2>
            <p className="mt-1 text-2xl font-bold text-white">Production & Active Builds</p>
          </div>

          <div className="grid gap-6">
            {PROFILE.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                <SpotlightCard className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
                        <span className="rounded-full border border-sky-400/30 bg-blue-950/80 px-3 py-0.5 font-mono text-xs text-sky-300">
                          {project.period}
                        </span>
                        {project.status === "building" ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/35 bg-amber-500/10 px-3 py-0.5 font-mono text-xs text-amber-300">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                            Under Building Progress
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs text-emerald-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Live Deployment
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-sky-200/90">{project.tagline}</p>
                    </div>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 font-mono text-xs font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] transition hover:bg-blue-500"
                      >
                        Live App <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 rounded-xl border border-amber-400/25 bg-amber-950/30 px-3.5 py-2 font-mono text-xs text-amber-300/90">
                        <Hammer className="h-3.5 w-3.5" /> Building in Progress
                      </span>
                    )}
                  </div>

                  {/* Visual Architecture Flow Pills */}
                  <div className="mt-5 flex flex-wrap items-center gap-2 rounded-xl border border-sky-500/15 bg-[#040919]/90 p-3">
                    {project.architectureFlow.map((node, i) => (
                      <div key={node} className="flex items-center gap-2">
                        <span className="rounded-md bg-blue-900/40 px-2.5 py-1 font-mono text-xs text-sky-300 ring-1 ring-sky-400/20">
                          {node}
                        </span>
                        {i < project.architectureFlow.length - 1 && (
                          <ArrowRight className="h-3.5 w-3.5 text-blue-500" />
                        )}
                      </div>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {project.highlights.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-sky-400/10 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-slate-900/90 px-2.5 py-1 font-mono text-xs text-slate-300 ring-1 ring-slate-700/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-xs text-sky-400">{project.metrics}</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="grid gap-6 md:grid-cols-2">
          <SpotlightCard className="p-6">
            <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-sky-400 uppercase">
              <Briefcase className="h-4 w-4" /> Internship Experience
            </div>
            {PROFILE.experience.map((exp) => (
              <div key={exp.company} className="mt-4 space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-sm font-medium text-sky-300">{exp.company}</p>
                  <p className="font-mono text-xs text-slate-400">{exp.period}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </SpotlightCard>

          <SpotlightCard className="p-6">
            <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-sky-400 uppercase">
              <GraduationCap className="h-4 w-4" /> Education & DSA Proof
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white">{PROFILE.education.degree}</h3>
                <p className="text-sm text-sky-300">{PROFILE.education.institution}</p>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  {PROFILE.education.period} · GPA: {PROFILE.education.gpa}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                {PROFILE.codingProfiles.map((cp) => (
                  <div
                    key={cp.platform}
                    className="rounded-xl border border-sky-400/20 bg-[#050c20] p-3"
                  >
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-sky-300">
                      <Code2 className="h-3.5 w-3.5" /> {cp.platform}
                    </div>
                    <div className="mt-1 text-sm font-bold text-white">{cp.stat}</div>
                    <div className="mt-0.5 text-[11px] text-slate-400">{cp.focus}</div>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* TECHNICAL SKILLS & CERTIFICATIONS */}
        <section id="skills" className="grid gap-6 md:grid-cols-2">
          <SpotlightCard className="p-6">
            <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-sky-400 uppercase">
              <Database className="h-4 w-4" /> Technical Stack
            </div>
            <div className="mt-5 space-y-4">
              {Object.entries(PROFILE.skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-mono text-xs text-slate-400">{category}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-sky-400/20 bg-blue-950/50 px-3 py-1 font-mono text-xs text-sky-200 transition hover:border-sky-400 hover:bg-blue-900/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6">
            <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-sky-400 uppercase">
              <Award className="h-4 w-4" /> Verified Credentials
            </div>
            <div className="mt-4 space-y-3">
              {PROFILE.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-sky-400/15 bg-[#050c20]/90 px-4 py-3"
                >
                  <div>
                    <div className="text-sm font-semibold text-slate-100">{cert.name}</div>
                    <div className="text-xs text-sky-300/80">{cert.issuer}</div>
                  </div>
                  <span className="shrink-0 rounded-md bg-blue-950 px-2.5 py-1 font-mono text-xs text-sky-300">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </section>
      </main>

      {/* CTRL+K COMMAND PALETTE MODAL */}
      <AnimatePresence>
        {cmdOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCmdOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-sky-400/30 bg-[#060e24] p-5 shadow-2xl"
            >
              <div className="mb-3 flex items-center justify-between border-b border-sky-400/15 pb-3 font-mono text-xs text-sky-300">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" /> Quick Navigation
                </span>
                <span>ESC to close</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                <a
                  href="#simulator"
                  onClick={() => setCmdOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-slate-200 hover:bg-blue-600/30 hover:text-sky-300"
                >
                  → Launch Interactive Architecture Sandbox
                </a>
                <a
                  href="https://fin-shield.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setCmdOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-slate-200 hover:bg-blue-600/30 hover:text-sky-300"
                >
                  → Open Live FinShield App
                </a>
                <a
                  href="#projects"
                  onClick={() => setCmdOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-slate-200 hover:bg-blue-600/30 hover:text-sky-300"
                >
                  → View Systems (FinShield, HR RAG, CivicFlow)
                </a>
                <button
                  onClick={() => {
                    copyEmail();
                    setCmdOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2.5 text-left text-slate-200 hover:bg-blue-600/30 hover:text-sky-300"
                >
                  → Copy Email ({PROFILE.email})
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}