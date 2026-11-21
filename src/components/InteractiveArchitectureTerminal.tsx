"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Play, ShieldCheck, Cpu, Database, ArrowRight, Sparkles } from "lucide-react";

const SIMULATIONS = {
  rag: {
    label: "HR Help Desk (ChromaDB RAG)",
    prompt: "Query: 'What is the carry-forward limit for annual leave?'",
    outOfScopePrompt: "Query: 'Write me a poem about cricket'",
    steps: [
      { node: "PDF Chunker", detail: "11 Corporate HR PDFs → 342 semantic chunks indexed" },
      { node: "ChromaDB Vector Search", detail: "Top-3 cosine similarity match (score: 0.91) in 18ms" },
      { node: "Guardrail Gate", detail: "Policy domain verified · Hallucination filter PASS" },
      { node: "Synthesized Output", detail: "Grounded answer cited from HR_Leave_Policy_v2.pdf" },
    ],
    guardrailSteps: [
      { node: "Intent Classifier", detail: "Detected non-HR domain query ('cricket')" },
      { node: "Guardrail Gate", detail: "BLOCKED · Out-of-scope policy triggered" },
      { node: "Safe Fallback", detail: "'I can only answer questions grounded in internal HR policies.'" },
    ],
  },
  civic: {
    label: "CivicFlow (FastAPI + SQL)",
    prompt: "POST /api/v1/tickets — 120 concurrent citizen reports",
    outOfScopePrompt: "POST /api/v1/tickets — Malformed payload injection",
    steps: [
      { node: "Pydantic Validator", detail: "Schema validated · Coordinates & category normalized" },
      { node: "Async FastAPI Worker", detail: "Non-blocking event loop dispatched 120 tasks" },
      { node: "Task Routing Engine", detail: "Assigned priority SLA & nearest municipal ward queue" },
      { node: "Relational SQL Commit", detail: "ACID transaction committed in 11ms" },
    ],
    guardrailSteps: [
      { node: "Pydantic Validator", detail: "422 Unprocessable Entity · Invalid ward_id rejected" },
      { node: "SQL Protection", detail: "Parameterized query prevented malformed write" },
      { node: "Audit Log", detail: "Clean error JSON returned without service disruption" },
    ],
  },
  finshield: {
    label: "FinShield (Gemini Risk Engine)",
    prompt: "Analyze: 'Urgent KYC update required, click link to verify PAN'",
    outOfScopePrompt: "Analyze: 'Your SIP installment of ₹5,000 succeeded'",
    steps: [
      { node: "String Preprocessor", detail: "Extracted urgency triggers & unverified domain patterns" },
      { node: "Gemini API Reasoning", detail: "Evaluated social-engineering & phishing heuristics" },
      { node: "Deterministic Parser", detail: "Enforced strict JSON schema (no malformed tokens)" },
      { node: "Risk Assessment", detail: "HIGH RISK (96/100) — Credential Phishing Attempt" },
    ],
    guardrailSteps: [
      { node: "String Preprocessor", detail: "Standard transactional confirmation structure detected" },
      { node: "Gemini API Reasoning", detail: "Zero suspicious links or credential requests found" },
      { node: "Risk Assessment", detail: "LOW RISK (4/100) — Legitimate Banking Notification" },
    ],
  },
};

type SimKey = keyof typeof SIMULATIONS;

export default function InteractiveArchitectureTerminal() {
  const [activeKey, setActiveKey] = useState<SimKey>("rag");
  const [mode, setMode] = useState<"normal" | "edge">("normal");
  const [running, setRunning] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number>(4);

  const currentSim = SIMULATIONS[activeKey];
  const stepsToRender = mode === "normal" ? currentSim.steps : currentSim.guardrailSteps;

  const triggerTrace = (newKey?: SimKey, newMode?: "normal" | "edge") => {
    const targetKey = newKey ?? activeKey;
    const targetMode = newMode ?? mode;
    setActiveKey(targetKey);
    setMode(targetMode);
    setRunning(true);
    setVisibleSteps(0);

    const total = targetMode === "normal" ? SIMULATIONS[targetKey].steps.length : SIMULATIONS[targetKey].guardrailSteps.length;

    for (let i = 1; i <= total; i++) {
      setTimeout(() => {
        setVisibleSteps(i);
        if (i === total) setRunning(false);
      }, i * 340);
    }
  };

  return (
    <div className="rounded-2xl border border-sky-500/25 bg-[#04091a]/90 p-5 shadow-[0_0_50px_rgba(37,99,235,0.16)] backdrop-blur-xl sm:p-7">
      {/* Top Window Bar */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-sky-500/15 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-sky-300/80">
            <Terminal className="h-3.5 w-3.5 text-sky-400" />
            shadow@anandshadow.me:~/system-simulator
          </span>
        </div>

        {/* System Switcher Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(SIMULATIONS) as SimKey[]).map((key) => (
            <button
              key={key}
              onClick={() => triggerTrace(key, "normal")}
              className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-all ${
                activeKey === key
                  ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                  : "bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-sky-300"
              }`}
            >
              {SIMULATIONS[key].label.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Prompt Control Bar */}
      <div className="mb-5 flex flex-col justify-between gap-3 rounded-xl border border-sky-400/15 bg-[#07112b] p-3.5 sm:flex-row sm:items-center">
        <div className="font-mono text-xs text-sky-200 sm:text-sm">
          <span className="mr-2 text-sky-400">$</span>
          {mode === "normal" ? currentSim.prompt : currentSim.outOfScopePrompt}
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => triggerTrace(activeKey, "normal")}
            disabled={running}
            className="flex items-center gap-1.5 rounded-lg bg-sky-500/20 px-3 py-1.5 font-mono text-xs font-medium text-sky-300 transition hover:bg-sky-500/30 disabled:opacity-50"
          >
            <Play className="h-3.5 w-3.5" /> Run Normal
          </button>
          <button
            onClick={() => triggerTrace(activeKey, "edge")}
            disabled={running}
            className="flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-950/60 px-3 py-1.5 font-mono text-xs font-medium text-blue-300 transition hover:bg-blue-900/60 disabled:opacity-50"
          >
            <ShieldCheck className="h-3.5 w-3.5" /> Test Edge / Guardrail
          </button>
        </div>
      </div>

      {/* Animated Execution Pipeline */}
      <div className="grid gap-3 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {stepsToRender.slice(0, visibleSteps).map((step, idx) => (
            <motion.div
              key={`${activeKey}-${mode}-${idx}`}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="flex items-start gap-3 rounded-xl border border-sky-400/15 bg-[#081330]/90 p-3.5"
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600/25 font-mono text-xs font-bold text-sky-300 ring-1 ring-sky-400/30">
                0{idx + 1}
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-sky-300">
                  {idx === 0 ? <Cpu className="h-3.5 w-3.5" /> : idx === 1 ? <Database className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
                  {step.node}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}