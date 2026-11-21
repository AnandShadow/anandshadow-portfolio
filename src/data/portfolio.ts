export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  status: "live" | "building";
  tagline: string;
  stack: string[];
  metrics: string;
  highlights: string[];
  architectureFlow: string[];
  liveUrl?: string;
}

export const PROFILE = {
  name: "Yeddu Anand Shadow",
  shortName: "Anand Shadow",
  handle: "AnandShadow",
  domain: "anandshadow.me",
  role: "Backend, AI Systems & Full-Stack Engineer",
  email: "yanandshadow@gmail.com",
  phone: "+91-9392135235",
  location: "Hyderabad, India",
  github: "https://github.com/AnandShadow",
  linkedin: "https://linkedin.com/in/anand-shadow-y-7669262a2",
  education: {
    institution: "Institute of Aeronautical Engineering, Hyderabad",
    degree: "B.Tech in Information Technology",
    period: "Sep 2023 – May 2027",
    gpa: "7.8 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  experience: [
    {
      role: "Software & Data Intern",
      company: "Viswam AI (Swecha Telangana)",
      period: "May 2025 – Jul 2025",
      points: [
        "Engineered data collection and preprocessing pipelines for localized software and analytics initiatives.",
        "Compiled and formatted structured datasets to power backend evaluation workflows and system testing.",
        "Collaborated across a 5-developer engineering team to maintain data ingestion processes for regional prototypes.",
      ],
    },
  ],
  projects: [
    {
      id: "finshield",
      title: "FinShield Financial Analysis Tool",
      period: "Jul 2026",
      status: "live",
      tagline: "Real-time financial text risk analyzer powered by Gemini API and deterministic JSON parsing.",
      stack: ["Python", "Streamlit", "Google Gemini API", "JSON Schema"],
      metrics: "Deployed Live · Structured Risk Scoring",
      highlights: [
        "Built and deployed an interactive web platform analyzing raw text inputs for financial and fraud risk signals.",
        "Integrated Google Gemini API to perform deep string analysis and output structured risk assessments.",
        "Engineered resilient backend response parsers to guarantee schema consistency and eliminate edge-case crashes.",
      ],
      architectureFlow: [
        "Raw Text Input",
        "Prompt Sanitizer",
        "Gemini Reasoning API",
        "Deterministic Parser",
        "Risk Verdict",
      ],
      liveUrl: "https://fin-shield.streamlit.app/",
    },
    {
      id: "hr-helpdesk",
      title: "Internal HR Help Desk RAG Backend",
      period: "Sep 2026 – Present",
      status: "building",
      tagline: "Semantic vector retrieval engine with strict hallucination guardrails over corporate policy docs.",
      stack: ["Python", "ChromaDB", "Vector Embeddings", "REST APIs"],
      metrics: "11 Corporate PDFs Indexed · Active Development",
      highlights: [
        "Developing a document retrieval backend automating internal HR policy inquiries across corporate datasets.",
        "Engineered an automated ingestion pipeline that parses, chunks, and indexes 11 PDF documents into ChromaDB.",
        "Implementing semantic search logic and strict system guardrails to neutralize out-of-scope queries.",
      ],
      architectureFlow: [
        "11 Policy PDFs",
        "Chunking Pipeline",
        "ChromaDB Vector Store",
        "Guardrail Filter",
        "Grounded Response",
      ],
    },
    {
      id: "civicflow",
      title: "CivicFlow Urban Management System",
      period: "Aug 2026 – Present",
      status: "building",
      tagline: "High-concurrency urban service routing engine backed by async FastAPI and relational SQL.",
      stack: ["Python", "FastAPI", "React JS", "SQL"],
      metrics: "Async Concurrency · Custom Task Routing Algorithm",
      highlights: [
        "Engineering a full-stack urban service management platform pairing a React frontend with an async Python backend.",
        "Architecting asynchronous REST APIs in FastAPI and a normalized relational SQL schema for secure persistence.",
        "Designing a custom task routing algorithm and strict data validation layer to optimize concurrent client requests.",
      ],
      architectureFlow: [
        "React Client",
        "FastAPI Async Router",
        "Validation Layer",
        "Task Routing Engine",
        "SQL Database",
      ],
    },
  ] as ProjectItem[],
  skills: {
    Languages: ["Python", "Java", "SQL"],
    "Web & Backend": ["FastAPI", "RESTful APIs", "React JS", "HTML5", "CSS3"],
    "Data & Vector Systems": ["ChromaDB", "Database Design", "Pandas", "NumPy", "JSON"],
    "AI & DevOps Tools": ["LangChain", "Streamlit", "Git", "GitHub", "GitLab", "Postman"],
  },
  certifications: [
    { name: "Model Context Protocol (MCP)", issuer: "Anthropic", year: "2026" },
    { name: "Artificial Intelligence Course", issuer: "Samsung Innovation Campus", year: "Feb 2026" },
    { name: "Generative AI Specialization", issuer: "Coursera & Google", year: "2025" },
    { name: "Large Language Models", issuer: "Google Cloud", year: "2025" },
    { name: "OCI Certified AI Foundations Associate", issuer: "Oracle", year: "2025" },
  ],
  codingProfiles: [
    { platform: "LeetCode", stat: "100+ Problems Solved", focus: "Data Structures & Algorithms" },
    { platform: "HackerRank", stat: "50+ Problems Solved", focus: "Java & Python Problem Solving" },
  ],
};