import {Preset} from "../../../types/IConfiguratorData";

const presets: Preset[] = [
  {
    name: "AI‑Driven Quality Inspection",
    shortDescription: "Cut defects and scrap by catching issues at the point of production with GPU‑accelerated visual inspection.",
    categories: ["manufacturing", "data-analysis"],
    longDescription: {
      img: "/assets/images/presets/aiq-inspection.webp",
      title: "Zero‑Defect Manufacturing, On Autopilot.",
      description:
        "Deploy AI‑powered vision that inspects every product in real time, flags defects before it leaves the station, and streams analytics back to engineering. Built on NVIDIA Metropolis and Jetson edge AI, the workflow turns days‑long root‑cause hunts into minutes while freeing operators for higher‑value tasks. Start with one line, then scale plant‑wide — no camera or PLC retrofit required."
    }
  },
  // --- Earth‑2 Weather Analytics ---------------------------
  {
    name: "AI Weather & Climate Insights",
    shortDescription:
      "Turn raw climate data into live, map‑based intelligence for faster, better‑informed operational decisions.",
    categories: ["healthcare", "generative-ai"],
    longDescription: {
      img: "/assets/images/presets/earth2-weather-analytics.webp",
      title: "See the Storm Before It Hits Your P&L.",
      description:
        "Built on NVIDIA Earth‑2 digital‑twin tech, this workflow fuses FourCastNet AI with multi‑layer geospatial data to deliver street‑level weather forecasting and climate‑risk analytics. Utilities trim outage times, insurers price risk dynamically, and logistics teams reroute days in advance — all without standing up their own HPC cluster."
    }
  },
// --- Single‑Cell Analysis -------------------------------
  {
    name: "Single‑Cell Insights in Minutes",
    shortDescription:
      "Slash bioinformatics turnaround from days to minutes with GPU‑accelerated single‑cell pipelines.",
    categories: ["customer-experience", "automation"],
    longDescription: {
      img: "/assets/images/presets/single-cell-analysis.webp",
      title: "Millions of Cells. Zero Bottlenecks.",
      description:
        "Leverage RAPIDS‑singlecell to clean, cluster, and visualize up to 11 M cells 900× faster than CPU workflows. Scientists explore richer biology, lab managers process more samples, and R&D leads reach go/no‑go decisions sooner — all on cost‑efficient L40s or H100 GPUs."
    }
  },
// --- Genomics Analysis -----------------------------------
  {
    name: "GPU‑Accelerated Genomics",
    shortDescription:
      "Complete whole‑exome variant analysis in minutes with Parabricks‑powered pipelines.",
    categories: ["data-analysis", "automation"],
    longDescription: {
      img: "/assets/images/presets/genomics-analysis.webp",
      title: "From FASTQ to Findings — Lightning Fast.",
      description:
        "Parabricks fq2bam plus DeepVariant shrinks germline pipeline runtime from hours to minutes on any major cloud GPU. Labs hit tight reporting windows, hospitals get same‑day insights, and researchers unlock larger cohorts without spiraling compute bills."
    }
  },
  // --- Isaac GR00T Synthetic Manipulation -----------------
  {
    name: "Synthetic Manipulation Motion Generation",
    shortDescription:
      "Train robots for new pick‑and‑place or assembly tasks in hours—not months—by generating millions of synthetic motions from just a few human demos.",
    categories: ["manufacturing", "security"],
    longDescription: {
      img: "/assets/images/presets/isaac-gr00t-synthetic-manipulation.webp",
      title: "New Robot Skills, No Data Bottleneck.",
      description:
        "Powered by NVIDIA Isaac GR00T, this workflow spins up vast synthetic datasets that let robots master new manipulation jobs without weeks of line‑side data capture. Manufacturers cut changeover downtime, keep quality steady, and ramp automation even when skilled staff are scarce."
    }
  },

// --- Mega: Multi‑Robot Fleets for Industrial Automation --
  {
    name: "Digital‑Twin Robot Fleet Testing",
    shortDescription:
      "Simulate, orchestrate, and stress‑test hundreds of robots in a photoreal digital twin before they ever touch the factory floor.",
    categories: ["manufacturing", "digital-twins"],
    longDescription: {
      img: "/assets/images/presets/mega-multi-robot-fleets.webp",
      title: "Launch Fleets with Zero Surprises.",
      description:
        "Built on NVIDIA Omniverse, the Mega blueprint lets ops teams rehearse every traffic jam, sensor fault, and order surge in silico. Validate KPIs, fine‑tune task allocation, and ship production‑ready fleets with confidence and lower capex exposure."
    }
  },

// --- LLM Router -----------------------------------------
  {
    name: "Cost‑Smart LLM Routing",
    shortDescription:
      "Send each prompt to the best‑fit language model automatically, cutting GPU spend while keeping response quality high.",
    categories: ["infrastructure-ai", "generative-ai"],
    longDescription: {
      img: "/assets/images/presets/llm-router.webp",
      title: "Right‑Sized Models for Every Question.",
      description:
        "A lightweight classifier (served from Triton) triages queries in milliseconds, sending simple ones to fast, low‑cost models and forwarding complex reasoning to heavyweight LLMs. Result: happier users, predictable bills, and guardrails that scale with your GenAI footprint."
    }
  },
  // --- Evo‑2 Protein Design -----------------------------------
  {
    name: "Generative Genome & Protein Design",
    shortDescription:
      "Design novel DNA and protein sequences in silico, turning months of wet‑lab trial‑and‑error into same‑day digital prototyping.",
    categories: ["data-analysis", "generative-ai"],
    longDescription: {
      img: "/assets/images/presets/evo2-protein-design.webp",
      title: "Write Life’s Code—with a Prompt.",
      description:
        "Evo‑2’s 40‑B‑parameter model, trained on 9 trillion nucleotides, lets biotech teams generate and evaluate full‑length genes or entire genomes in minutes. Explore sequence space, predict structure with ESMFold, and send only the best candidates to the bench—slashing cost and discovery timelines."
    }
  },

// --- Build an Enterprise RAG Pipeline -----------------------
  {
    name: "Enterprise‑Grade RAG Pipeline",
    shortDescription:
      "Plug LLMs into millions of PDFs, tables, and charts to give employees instant, source‑grounded answers—no data silos left behind.",
    categories: ["data-analysis", "manufacturing"],
    longDescription: {
      img: "/assets/images/presets/enterprise-rag-pipeline.webp",
      title: "Ask Once. Get the Right Answer—With Citations.",
      description:
        "This blueprint couples NVIDIA NIM embeddings, rerankers, and OCR to build a scalable retrieval‑augmented generation workflow that ingests multimodal enterprise content. IT ships a secure, on‑prem or cloud solution; business teams cut search time, improve compliance reporting, and deflect L1 support tickets."
    }
  },

// --- Protein Binder Design for Drug Discovery ---------------
  {
    name: "Generative Protein Binder Discovery",
    shortDescription:
      "Generate and rank high‑affinity protein binders digitally, reducing costly wet‑lab rounds in early drug development.",
    categories: ["healthcare", "generative-ai"],
    longDescription: {
      img: "/assets/images/presets/protein-binder-design.webp",
      title: "Find the Perfect Binder—Before You Touch a Pipette.",
      description:
        "The BioNeMo workflow chains AlphaFold2, RFdiffusion, and ProteinMPNN to design binders and predict complex structures in hours, not weeks. Researchers prioritize the most promising therapeutics, free bench space, and move into in‑vitro validation with higher confidence."
    }
  },
  // --- PDF‑to‑Podcast -----------------------------------------
  {
    name: "PDF‑to‑Podcast Converter",
    shortDescription:
      "Turn dense PDFs into bite‑size audio so staff can learn while they commute or work hands‑free.",
    categories: ["infrastructure-ai", "manufacturing"],
    longDescription: {
      img: "/assets/images/presets/pdf-to-podcast.webp",
      title: "From White Paper to Walk‑through.",
      description:
        "This blueprint strings together LLM summarization and high‑fidelity TTS to create on‑brand podcasts from manuals, policies, or research PDFs. HR and L&D teams launch friction‑free learning channels without wrangling GPUs or clo ud accounts."
    }
  },

// --- Traceability for Agentic AI ----------------------------
  {
    name: "Agentic AI Traceability & Monitoring",
    shortDescription:
      "Add end‑to‑end traceability to your GenAI agents and keep cost, quality, and safety under control.",
    categories: ["security", "digital-twins"],
    longDescription: {
      img: "/assets/images/presets/traceability-agentic-ai.webp",
      title: "See Every Token, Fix Every Blind Spot.",
      description:
        "Powered by W&B Weave, the workflow plugs straight into NVIDIA’s customer‑service assistant (or any blueprint) to capture traces, run evals, and surface live dashboards. Product owners ship agents faster while meeting audit and uptime targets."
    }
  },

// --- Voice Agent Framework for Conversational AI ------------
  {
    name: "Enterprise Voice‑AI Agent Framework",
    shortDescription:
      "Deploy real‑time voice agents for support, IVR, or in‑app helpers—latency budget included.",
    categories: ["customer-experience", "automation"],
    longDescription: {
      img: "/assets/images/presets/voice-agent-framework.webp",
      title: "Talk to Your Stack—At 1 Second Round‑Trip.",
      description:
        "Pipecat orchestrates STT, LLM, TTS, guardrails, and RAG hooks so teams roll out voice bots without glue code. Call centers deflect routine calls, apps gain voice UX, and ops keep everything observable and scalable via NIM micro‑services."
    }
  },
  // --- Document Research Assistant for Blog Creation ----------
  {
    name: "AI‑Powered Blog Research & Drafting",
    shortDescription:
      "Fill your content calendar faster by letting agents research, outline, and draft posts while your team focuses on strategy.",
    categories: ["data-analysis", "manufacturing"],
    longDescription: {
      img: "/assets/images/presets/document-research-blog.webp",
      title: "From Topic to Publish‑Ready Draft—Over Lunch.",
      description:
        "This LlamaIndex blueprint pairs multi‑agent RAG with NVIDIA Llama 3.3 70B NIM to scour trusted sources, synthesize insights, and deliver well‑structured blog drafts complete with citations. Content teams cut research time by 90 %, keep SEO on target, and hit ambitious publishing cadences without burning out writers."
    }
  },

// --- Structured Report Generation --------------------------
  {
    name: "Automated Structured Report Builder",
    shortDescription:
      "Generate compliance, market, or board reports on demand—data‑grounded, sectioned, and immediately shareable.",
    categories: ["automation", "infrastructure-ai"],
    longDescription: {
      img: "/assets/images/presets/structured-report-generation.webp",
      title: "Complex Reports—No All‑Nighter Required.",
      description:
        "Built with LangChain LangGraph and NVIDIA NIM micro‑services, the agent plans sections, pulls data, verifies sources, and writes structured narratives in minutes. Enterprises replace error‑prone copy‑paste cycles with auditable, scalable automation that frees analysts for higher‑value work."
    }
  },

// --- Code Documentation for Software Development ------------
  {
    name: "Auto‑Generated Code Documentation",
    shortDescription:
      "Keep docs in lock‑step with code by dispatching AI agents that read, explain, and publish updates for every repo.",
    categories: ["infrastructure-ai", "security"],
    longDescription: {
      img: "/assets/images/presets/code-docs-ai.webp",
      title: "Docs You’ll Actually Trust—Ship After Ship.",
      description:
        "CrewAI agents, powered by Llama 3.3 70B NIM, crawl your GitHub repo, summarize modules, and push clean markdown PRs. Engineering leads cut ramp‑up time for new hires, slash ‘tribal knowledge’ risk, and keep auditors happy—all without manual doc sprints."
    }
  },
  // --- Digital Twin for Interactive Fluid Simulation ----------
  {
    name: "Real‑Time CFD Digital Twin",
    shortDescription:
      "Iterate aerodynamics in seconds, not days, with an AI‑powered virtual wind tunnel that runs right on the design desktop.",
    categories: ["digital-twins", "manufacturing"],
    longDescription: {
      img: "/assets/images/presets/digital-twin-fluid-sim.webp",
      title: "Cut the Tunnel—Keep the Insight.",
      description:
        "Built on NVIDIA Omniverse and PhysicsNeMo, the blueprint trains surrogate CFD models that deliver live airflow visuals as designers tweak geometry. OEMs drop expensive wind‑tunnel bookings, explore more concepts, and release better‑performing products sooner."
    }
  },

// --- Video Search and Summarization Agent -------------------
  {
    name: "Video Insight & Summary Agent",
    shortDescription:
      "Mine hours of footage for answers, highlights, and compliance cues—no manual scrubbing required.",
    categories: ["security", "data-analysis"],
    longDescription: {
      img: "/assets/images/presets/video-search-summarization.webp",
      title: "Every Frame Indexed. Every Question Answered.",
      description:
        "A hybrid‑RAG pipeline decodes streams, captions frames with a VLM, vectors the text, and lets an LLM answer free‑form queries—or auto‑publish summaries and alerts. Media, security, and L&D teams turn video overload into searchable intelligence."
    }
  },

// --- 3D Conditioning for Precise Visual Gen‑AI ---------------
  {
    name: "On‑Brand 3D Asset Re‑Compositor",
    shortDescription:
      "Swap backgrounds, props, and lighting around a hero product in seconds—zero reshoots needed.",
    categories: ["customer-experience", "healthcare"],
    longDescription: {
      img: "/assets/images/presets/3d-conditioning-genai.webp",
      title: "Perfect Shots—Generated, Not Shot.",
      description:
        "Leveraging OpenUSD scenes in Omniverse plus Edify‑3D models, the workflow locks your hero asset while generative AI paints new sets, HDRIs, and colorways. Marketing teams spin up endless product visuals, iterate with stakeholders live, and stay perfectly on brand."
    }
  },
  // --- AI Virtual Assistant for Customer Service --------------
  {
    name: "AI Virtual Assistant for Customer Support",
    shortDescription:
      "Resolve routine questions in seconds and free human agents for the tricky stuff—across chat, voice, or in‑app widgets.",
    categories: ["automation", "customer-experience"],
    longDescription: {
      img: "/assets/images/presets/ai-virtual-assistant-customer-service.webp",
      title: "Your Smartest Rep, Always On.",
      description:
        "Built on NVIDIA Riva STT/TTS, Llama‑3 NIM, and a RAG pipeline, this blueprint spins up voice or chat agents that query enterprise data, hand off edge cases, and log everything in your CRM. Contact‑center leaders cut wait times, trim staffing costs, and boost CSAT without new infrastructure headaches."
    }
  },

// --- Vulnerability Analysis for Container Security ----------
  {
    name: "AI‑Accelerated Container Vulnerability Scanning",
    shortDescription:
      "Find and fix CVEs in minutes inside your CI/CD—before risky images ever reach production.",
    categories: ["security", "digital-twins"],
    longDescription: {
      img: "/assets/images/presets/container-vulnerability-analysis.webp",
      title: "Ship Secure Containers, First Try.",
      description:
        "Powered by NVIDIA Morpheus and Llama‑3 NIM, the agent parses SBOMs, maps CVEs to fixes, and suggests patched base images—slashing triage time from hours to seconds and giving DevSecOps teams real‑time risk dashboards."
    }
  },

// --- Digital Humans for Customer Service --------------------
  {
    name: "Digital Human Front‑Desk Assistant",
    shortDescription:
      "Deploy lifelike 3D avatars that greet, guide, and answer customer questions—without hiring extra staff.",
    categories: ["automation", "customer-experience"],
    longDescription: {
      img: "/assets/images/presets/digital-human-customer-service.webp",
      title: "A Friendly Face for Every Customer.",
      description:
        "Using NVIDIA Audio2Face, Omniverse RTX, and Llama‑3 dialogue NIMs, this blueprint lets retailers and banks roll out photoreal virtual reps that pull answers from RAG, maintain eye contact, and hand off to live agents when needed—elevating service without expanding headcount."
    }
  },

// --- Generative Virtual Screening for Drug Discovery --------
  {
    name: "Generative Virtual Screening Pipeline",
    shortDescription:
      "Screen millions of molecules in silico and surface top hits for lab validation—days faster and at a fraction of the cost.",
    categories: ["automation", "customer-experience"],
    longDescription: {
      img: "/assets/images/presets/generative-virtual-screening.webp",
      title: "Thousands of Molecules. One Afternoon.",
      description:
        "BioNeMo GenMol generates novel ligands, OpenFold2 predicts target structures, and DiffDock scores binding—all orchestrated by NIM micro‑services. Pharma teams narrow vast chemical space to high‑affinity candidates, trimming months off early discovery."
    }
  }
];

export default presets;
