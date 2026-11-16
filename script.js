/* ==========================================================================
   6-MONTH RESEARCH & TECHNICAL PROFILE TRANSFORMATION APPLICATION (V3 COMPLETE)
   Complete Application State, Grounded Planning Data & Interactive Controllers
   Includes: Date-Based Daily Reset (#33), "Not Scored" Artifact Rubric (#34/#35),
   Evidence Proof Links (#36), Safe Reset + Undo (#37), JSON Download/Import (#38),
   Date.now() WakeLock Timer (#39), Targeted DOM Updates (#40), Hash Routing,
   Leitner Flashcards, Paid Hours Logger, GitHub API Verifier & .ics Export.
   ========================================================================== */

const PORTAL_DATA = {
  // Section metadata: TL;DR, reading time, and optional Bengali reading aid
  sectionMeta: {
    overview: {
      title: "Overview & Current Profile Audit",
      shortTitle: "Overview",
      readTime: "~2 min read",
      tldr: "Turn your KUET BURP, SERC, and GeoAI experience into 6 flagship reproducible repositories, 24–30 benchmark tasks, and 4–5 Zenodo DOIs between Nov 15, 2026 and May 15, 2027.",
      bnExplain: "মূল লক্ষ্য: আগামী ৬ মাসে আপনার KUET URP, SERC ও GeoAI অভিজ্ঞতাকে ৬টি reproducible GitHub repository, ২৪–৩০টি Inspect AI benchmark task এবং ৪–৫টি Zenodo DOI-তে রূপান্তর করা—যাতে প্রতিটি দক্ষতার পেছনে সরাসরি যাচাইযোগ্য প্রমাণ থাকে।"
    },
    daily: {
      title: "Daily Plan: 90–120 Min Atomic Commit Protocol",
      shortTitle: "Daily Plan",
      readTime: "~1.5 min read",
      tldr: "Execute a 5-stage 115-minute daily focus workflow that resets fresh every calendar day while logging your multi-day completion streak.",
      bnExplain: "দৈনিক পরিকল্পনা: প্রতিদিন ১১৫ মিনিটের ৫-ধাপের (১০+৩৫+৪০+২০+১০ মিনিট) রুটিন অনুসরণ করুন। প্রতিটি নতুন ক্যালেন্ডার দিনে এই চেকলিস্ট স্বয়ংক্রিয়ভাবে নতুন করে শুরু হবে এবং আগের দিনের রেকর্ড সংরক্ষিত থাকবে।"
    },
    weekly: {
      title: "Weekly Plan: 24-Week Schedule (W1–W24)",
      shortTitle: "Weekly Plan",
      readTime: "~3 min read",
      tldr: "Follow a 12-hour weekly cadence (6h Build, 3h Read, 2h Lane, 1h Hygiene); each weekly deliverable becomes VERIFIED only when backed by a public proof link.",
      bnExplain: "সাপ্তাহিক পরিকল্পনা: সপ্তাহে ১২ ঘণ্টার রুটিন (৬ ঘণ্টা Build, ৩ ঘণ্টা Read, ২ ঘণ্টা Lane, ১ ঘণ্টা Hygiene)। কোনো সপ্তাহের কাজ কেবল তখনই VERIFIED হবে যখন আপনি চেকবক্সের পাশাপাশি একটি বৈধ GitHub commit বা DOI প্রুফ লিংক যুক্ত করবেন।"
    },
    monthly: {
      title: "Monthly Plan: Objectives & KPIs (M1–M6)",
      shortTitle: "Monthly Plan",
      readTime: "~2.5 min read",
      tldr: "Swipe across Months 1 to 6 to inspect separated Research Targets, Technical & Docs Targets, and end-of-month verification KPIs.",
      bnExplain: "মাসিক লক্ষ্যমাত্রা: মাস ১ থেকে মাস ৬-এর Research Targets এবং Technical Targets আলাদা ট্যাবে দেখুন এবং মাস শেষে ৪টি করে মূল KPI যাচাই করুন।"
    },
    roadmap: {
      title: "Six-Month Roadmap & 7-Tier Proof Ladder",
      shortTitle: "6-Month Roadmap",
      readTime: "~2 min read",
      tldr: "Prioritize high-verifier artifacts (JOSS paper, Kaggle medals, merged OSS PRs, Zenodo DOIs, green CI repos) while assigning zero weight to online course certificates.",
      bnExplain: "প্রুফ ল্যাডার ও রোডম্যাপ: সাধারণ অনলাইন সার্টিফিকেটের ওজন শূন্য (Weight: 0)। তাই সর্বোচ্চ গুরুত্ব দিন CI-green GitHub কোড, Zenodo DOI, ওপেন-সোর্স PR এবং JOSS পেপারের ওপর।"
    },
    projects: {
      title: "Projects & File Structure Hub",
      shortTitle: "Projects Hub",
      readTime: "~4 min read",
      tldr: "Explore the 6 flagship repositories (P0–P5) and Wave 2/3 extensions across 4 structured tabs: Problem, Plan, Outputs, and interactive collapsible File Trees.",
      bnExplain: "প্রজেক্ট হাব: প্রতিটি প্রজেক্টে ৪টি ট্যাব রয়েছে—Problem, Plan, Outputs এবং Files। এখানে প্রতিটি ফোল্ডার ও ফাইল ক্লিক করে বিস্তারিত কাঠামো ও ভেরিফিকেশন কমান্ড কপি করা যাবে।"
    },
    research: {
      title: "Research Identity & 12-Step Methodology",
      shortTitle: "Research Track",
      readTime: "~3 min read",
      tldr: "Apply the Three-Pass reading timeline, thematic methodology matrices, and 12-step reproducible compendium workflow to eliminate lab supervision risk.",
      bnExplain: "রিসার্চ মেথডোলজি: পেপার পড়ার জন্য Three-Pass প্রোটোকল এবং ১২-ধাপের স্বাধীন গবেষণা পদ্ধতি অনুসরণ করুন, যাতে প্রতিটি ফলাফল গ্রাউন্ড-ট্রুথ ডেটার সাথে যাচাইকৃত থাকে।"
    },
    writing: {
      title: "Technical Writing & Day 1 Specification",
      shortTitle: "Technical Writing",
      readTime: "~3 min read",
      tldr: "Structure all documentation using the Diátaxis 2×2 framework, enforce the 10-Point Artifact Contract, and start immediately with the Day 1 GeoPandas Topology & CRS guide.",
      bnExplain: "টেকনিক্যাল রাইটিং: Diátaxis 2×2 ফ্রেমওয়ার্ক (Tutorial, How-To, Reference, Explanation) এবং ১০-পয়েন্ট চুক্তি অনুসরণ করে প্রথম দিনেই GeoPandas CRS ও Topology গাইডটি সম্পন্ন করুন।"
    },
    prep: {
      title: "Technical Preparation & Oral Drills",
      shortTitle: "Technical Prep",
      readTime: "~3 min read",
      tldr: "Focus on Tier 1–3 skills, run today's automatically selected 7-day practice drill, and rehearse 90-second oral answers with the Leitner flashcard deck.",
      bnExplain: "টেকনিক্যাল প্রস্তুতি: সপ্তাহের বারের সাথে মিলিয়ে আজকের ডকুমেন্টেশন ও কোডিং অনুশীলন করুন এবং ৯০ সেকেন্ডের টাইমারসহ Leitner ফ্ল্যাশকার্ড ডেকে মৌখিক ইন্টারভিউয়ের প্রস্তুতি নিন।"
    },
    career: {
      title: "Career Roles, Platforms & Outreach",
      shortTitle: "Career & Profiles",
      readTime: "~3 min read",
      tldr: "Filter AI Trainer roles by Wave, track setup across 12 platforms, log paid Outlier/Turing hours toward the 80-hour gate, and customize your 160-word PI outreach email.",
      bnExplain: "ক্যারিয়ার ও আউটরিচ: Wave অনুযায়ী AI Trainer রোল ফিল্টার করুন, Outlier/Turing-এর পেইড ঘণ্টা লগ করুন (≥80 ঘণ্টার লক্ষ্যমাত্রা), এবং ল্যাব প্রফেসরদের জন্য ১৬০ শব্দের ইমেইল তৈরি করুন।"
    },
    rubric: {
      title: "Progress Telemetry & 100-Pt Rubric",
      shortTitle: "Progress & QA",
      readTime: "~2 min read",
      tldr: "Score each portfolio artifact independently using minus/plus steppers against the ≥80/100 (or ≥85/100 M6) quality gate, inspect the radar chart, and export/import full JSON backups.",
      bnExplain: "১০০-পয়েন্ট রুব্রিক ও প্রোগ্রেস: প্রতিটি প্রজেক্ট বা আর্টিফ্যাক্ট আলাদাভাবে মূল্যায়ন করুন। মূল্যায়নের আগে স্কোর 'Not Scored' থাকবে এবং মূল্যায়নের পর সবচেয়ে দুর্বল ২টি দিক স্বয়ংক্রিয়ভাবে চিহ্নিত হবে।"
    }
  },

  // Ordered section sequence for Previous / Next navigation
  sectionOrder: [
    "overview",
    "daily",
    "weekly",
    "monthly",
    "roadmap",
    "projects",
    "research",
    "writing",
    "prep",
    "career",
    "rubric"
  ],

  // 4 Audit Cards for Overview (Strength = Green, Gap = Red, Target = Orange)
  auditCards: [
    {
      id: "audit_1",
      dimension: "1. Earth & Environmental Sciences (P2, P3, P4 + O1)",
      strength: "Strong foundation across climate, hydrology, and remote sensing: P2 (CHIRPS vs ERA5 UTC+6 vs BMD rain gauges, 1991–2020), P3 (CAMELS 3-layer HBV rainfall–runoff vs SAC-SMA), and P4 (Sentinel-2 spatial leakage).",
      gap: "Bangladesh streamflow data is not openly published (requiring US CAMELS basins for P3), and ENACTS-BMD gridded rainfall blends station data so it cannot be used as independent ground truth.",
      target: "3 standalone CI-green validation repos (bd-rain-extremes, rainfall-runoff-camels, spatial-leakage-s2) + 9 verisci Earth/Hydrology tasks + O1 Landsat vs MODIS LST.",
      takeaway: "Validate every climate, hydrology, and remote sensing model against independent station gauges, CAMELS streamflow, or disjoint spatial blocks."
    },
    {
      id: "audit_2",
      dimension: "2. Mathematics, Statistics & Optimization (P5, P6, P7)",
      strength: "HSC 544/600 in Physics, Chemistry & Math and top ~3,000 engineering admission rank channeled directly into simulation-validated statistical inference, exact MIP optimization, and numerical methods.",
      gap: "Without a graduate degree in mathematics, AI Trainer (Math & Stats) screening requires executable proof of numerical stability, Monte Carlo error bounds, and exact solver optimality gaps.",
      target: "stat-validation-sims (10,000-rep BCa, Welch, BH FDR, optional stopping), tsp-validated (Pyomo/HiGHS Exact MIP vs TSPLIB optimums), and numerics-validated (7 numerical/physics modules) + 9 verisci tasks.",
      takeaway: "Your core specialization answer for interviews: 'Probability, statistical inference, and numerical methods validated by simulation and exact solvers.'"
    },
    {
      id: "audit_3",
      dimension: "3. Machine Learning Engineering & AI Evaluation (P1, P4, P8, P9)",
      strength: "Hands-on experience across Outlier AI and Turing evaluations combined with P1/P9 (verisci Inspect AI harness), P4 (Sentinel-2 block CV), and P8 (6 ML pitfalls × 20 repeats + PyTorch 10-seed determinism).",
      gap: "Without a Kaggle competition medal, ML Engineering proof is focused specifically on data leakage diagnosis, cross-validation rigor, and reproducibility rather than leaderboard rank.",
      target: "verisci v1.0 (21 dual-pass tasks, 3–4 LLM failure taxonomy, Cohen's kappa, Docker sandbox agent task, Zenodo DOI, Hugging Face Dataset) + ml-pitfalls-lab + L1 Kaggle dataset & notebook.",
      takeaway: "Prove ML engineering rigor by catching pre-split scaling, spatial leakage, PR-AUC traps, and PyTorch seed variance automatically in CI."
    },
    {
      id: "audit_4",
      dimension: "4. Physical, Engineering, Life Sciences & Privacy/Safety (P3, P7, O2–O5)",
      strength: "P7 (Euler vs Verlet energy drift, 1D heat PDE vs Fourier series) and P3 (CAMELS hydrology) provide solid entry proof for Physical and Engineering Sciences.",
      gap: "Honest boundary (v4 Section 6): Proof in astronomy/chemistry/materials, production engineering design, Life Sciences (O3), and Data Privacy (O4, which also has a US-residency requirement on micro1) remains thin at 12 hrs/week.",
      target: "Prioritize Wave 1 (Earth, Math/Stats, ML) + Lanes L1–L3 first; add O1 (LST), O2 (Hydraulics), O5 (JOSS submission of verisci), O3 (Ecology), and O4 (PrivacyEval-mini) when operating at 15 hrs/week.",
      takeaway: "Follow v4's strict priority order: finish P1–P9 + L1–L3 (~194h build budget) before expanding into optional packs O1–O5."
    }
  ],

  // Interactive Glossary Definitions (#Section 2)
  glossary: {
    CRS: {
      term: "CRS (Coordinate Reference System)",
      def: "Defines how 2D/3D coordinates map to the Earth's surface. Geographic CRS (EPSG:4326) uses angular degrees, whereas projected CRS (EPSG:32645 / EPSG:32646 in Bangladesh) uses metric meters for accurate area and distance.",
      usage: "Used in Day 1 Guide, P0 verisci earth_001, and P1 sar-flood-eval."
    },
    IoU: {
      term: "IoU (Intersection over Union / Jaccard Index)",
      def: "Spatial overlap metric defined as TP / (TP + FP + FN). Unlike overall pixel accuracy, IoU penalizes both false alarms and missed flood extents on imbalanced hazard maps.",
      usage: "Primary accuracy metric in P1 Sentinel-1 SAR Flood validation and P2 Spatial Leakage."
    },
    MCLP: {
      term: "MCLP (Maximal Covering Location Problem)",
      def: "Formulated by Church & ReVelle (1974) to select exactly p facility locations that maximize covered population demand within a service walk radius (400m / 800m).",
      usage: "Solved via Exact MIP (Pyomo + HiGHS) vs. Teitz-Bart heuristic in P3 khulna-parks-mclp."
    },
    Diataxis: {
      term: "Diátaxis Documentation Framework",
      def: "Systematic information architecture separating documentation into 4 distinct quadrants: Tutorials (Learning), How-To Guides (Goals), Reference (Information), and Explanations (Understanding).",
      usage: "Governs meheran.dev/docs, Read the Docs (P2), and OpenAPI 3.1 portal (P4)."
    },
    Vale: {
      term: "Vale Prose Linter",
      def: "Command-line syntax-aware prose linter that enforces editorial style guides (such as the Google Developer Documentation Style Guide) automatically in GitHub Actions CI.",
      usage: "Enforces active voice, imperative headings, and zero throat-clearing across all repos."
    },
    JOSS: {
      term: "JOSS (Journal of Open Source Software)",
      def: "Developer-friendly, diamond open-access peer-reviewed journal for research software packages with ≥6 months of public Git history, tests, and clear scholarly Statement of Need.",
      usage: "Target Rank 1 publication gate in Month 6 (W22) for the verisci package."
    },
    ALE: {
      term: "ALE (Accumulated Local Effects)",
      def: "Unbiased feature-effect explanation method that averages local prediction differences across conditional intervals, avoiding the extrapolation bias of PDPs and naive SHAP when spatial features are correlated.",
      usage: "Compared against SHAP in P5 Khulna Urban Heat Island (geoai-uhi-shap)."
    },
    SHAP: {
      term: "SHAP (SHapley Additive exPlanations)",
      def: "Game-theoretic method assigning each feature an importance value for a particular prediction; requires careful handling under spatial multicollinearity (e.g., NDVI vs. NDBI).",
      usage: "Evaluated alongside ALE in P5 Khulna LST driver modeling."
    },
    BCa: {
      term: "BCa (Bias-Corrected and Accelerated Bootstrap)",
      def: "Non-parametric confidence interval method that adjusts for both median bias and skewness (acceleration), achieving substantially more accurate 95% coverage on skewed lognormal data than naive percentile bootstrap.",
      usage: "Validated across 10,000 Monte Carlo repetitions in P3 stat-validation-sims."
    },
    InspectAI: {
      term: "Inspect AI Evaluation Framework",
      def: "Open-source LLM evaluation framework by the UK AI Security Institute supporting reproducible @task pipelines, custom numeric @scorer functions, and isolated Docker sandbox agents.",
      usage: "Core execution engine for P0 verisci (GeoEval-BD)."
    },
    Kappa: {
      term: "Cohen's Kappa (κ) Inter-Rater Reliability",
      def: "Chance-corrected agreement statistic κ = (p_o - p_e) / (1 - p_e) measuring grading consistency between two independent annotators or across a 1-week self re-grade.",
      usage: "Computed across 10 verisci tasks in Month 4 (W16) to prove rubric objectivity."
    }
  },

  // 5-Stage Daily Atomic Commit Protocol (10 + 35 + 40 + 20 + 10 = 115 Mins)
  dailyStages: [
    {
      id: "daily_s1",
      stage: "Stage 1",
      title: "Scope the Daily Objective & Audience Contract",
      minutes: 10,
      deliverable: "1-line Audience & Outcome Contract in task header",
      detail: "Define the exact artifact type (Diataxis quadrant: Tutorial, How-To, Reference, or Explanation; or verisci benchmark task / research section), target reader persona (Python GIS Developer, ML Evaluator, or Urban Climate PI), and single measurable outcome before writing a word."
    },
    {
      id: "daily_s2",
      stage: "Stage 2",
      title: "Retrieve Primary Sources & Verify Local Technical Execution",
      minutes: 35,
      deliverable: "Executed local Python verification + Zotero Crossref DOI log",
      detail: "Consult exclusively primary sources: official library documentation/source code (GeoPandas, Rasterio, Xarray, scikit-learn, PyTorch, OpenAPI 3.2) or peer-reviewed papers indexed in OpenAlex and Semantic Scholar. Run every line of code, spatial query, or statistical test in a local uv/conda virtual environment and log citations in Zotero with permanent Crossref DOIs."
    },
    {
      id: "daily_s3",
      stage: "Stage 3",
      title: "Author Reproducible Pipeline, Verifier Checks or Quarto/Markdown Draft",
      minutes: 40,
      deliverable: "Reference solution + verifier check OR structured .qmd/.md draft",
      detail: "Write modular scripts with fixed random seeds, numeric-tolerance verifiers (np.isclose), and deliberate buggy trap tests. For documentation, use strict hierarchical headings and active second-person imperative voice ('Reproject the layer to EPSG:32646'). For academic synthesis, write objective comparative prose with inline @citation_key references."
    },
    {
      id: "daily_s4",
      stage: "Stage 4",
      title: "Run Automated Linting, Doctests & Anti-Plagiarism Verification",
      minutes: 20,
      deliverable: "Zero Vale errors + 100% pytest/doctest pass",
      detail: "Execute pytest (including --doctest-modules and dual-pass verifier checks) and Vale prose linter configured with the Google Developer Documentation Style Guide. Verify that zero hardcoded local file paths exist, random seeds are pinned, and all academic synthesis is written from scratch without copying source sentence structures."
    },
    {
      id: "daily_s5",
      stage: "Stage 5",
      title: "Atomic Git Commit & Weekly Tracker Update",
      minutes: 10,
      deliverable: "Descriptive Git SHA pushed to github.com/MkMeheran",
      detail: "Commit daily work with a conventional commit message (e.g., 'feat(verisci): add ERA5 UTC-to-BST precipitation aggregation task and verifier' or 'docs(geopandas): add make_valid ring self-intersection how-to') to maintain a steady public commit history for the 6-month JOSS clock."
    }
  ],

  // 7-Day Technical Practice & Documentation Reading Rotation
  sevenDayRotation: [
    {
      day: "Saturday",
      dayIndex: 6,
      focus: "Geospatial Vector/Raster & SQL",
      docs: [
        { name: "GeoPandas User Guide", url: "https://geopandas.org/en/stable/docs/user_guide.html" },
        { name: "Rasterio Docs", url: "https://rasterio.readthedocs.io" },
        { name: "Xarray Tutorial", url: "https://tutorial.xarray.dev/" }
      ],
      whyRead: "Master CRS transformations (EPSG:4326 vs EPSG:32646/32645 along the 90E meridian in Bangladesh), ring self-intersection repair (.make_valid()), raster NoData masking, and memory-safe vector joins.",
      practiceTask: "Inspect function signatures (sjoin, overlay, make_valid, rasterio.mask, xarray.resample) and run edge-case verification scripts on Bangladesh district/union boundaries or Sentinel-1/2 tiles.",
      output: "1 runnable spatial verification script + 1 silent-failure unit test committed to Git."
    },
    {
      day: "Sunday",
      dayIndex: 0,
      focus: "Statistics, Probability & Optimization",
      docs: [
        { name: "Harvard Stat 110", url: "https://stat110.hsites.harvard.edu" },
        { name: "ISL with Python", url: "https://www.statlearning.com" },
        { name: "Pyomo Docs", url: "https://pyomo.readthedocs.io" },
        { name: "OR-Tools Routing", url: "https://developers.google.com/optimization/routing" }
      ],
      whyRead: "Build deep mathematical proof for AI Trainer (Math & Stats) and Research roles by catching invalid statistical assumptions, numerical instability, and heuristic optimality gaps.",
      practiceTask: "Derive closed-form expectations in SymPy, run 10,000-rep vectorized NumPy Monte Carlo simulations (BCa bootstrap, Welch t-test, Benjamini-Hochberg FDR), or solve Exact MIP formulations with HiGHS.",
      output: "1 statistical simulation or MIP solver script + Theoretical vs. Empirical comparison table."
    },
    {
      day: "Monday",
      dayIndex: 1,
      focus: "Machine Learning & Validation Rigor",
      docs: [
        { name: "scikit-learn CV", url: "https://scikit-learn.org/stable/modules/cross_validation.html" },
        { name: "Common Pitfalls", url: "https://scikit-learn.org/stable/common_pitfalls.html" },
        { name: "PyTorch Reproducibility", url: "https://pytorch.org/docs/stable/notes/randomness.html" }
      ],
      whyRead: "Diagnose spatial target leakage, pre-split scaling contamination, imbalanced metric traps (Accuracy vs PR-AUC), and multi-seed deep learning variance.",
      practiceTask: "Run paired 'Leaky vs. Honest' pipelines (Random KFold vs Spatial-Block GroupKFold; deterministic vs non-deterministic PyTorch seeds) and assert zero train/test geometry or index overlap.",
      output: "1 ML validation experiment + pytest disjoint assertion + score-inflation or seed-variance plot."
    },
    {
      day: "Tuesday",
      dayIndex: 2,
      focus: "AI Evaluation, Rubric & Annotation",
      docs: [
        { name: "Inspect AI Docs", url: "https://inspect.aisi.org.uk/" },
        { name: "Inspect Evals", url: "https://inspect.aisi.org.uk/evals/" },
        { name: "Hamel Evals Guide", url: "https://hamel.dev/blog/posts/evals/" },
        { name: "GeoAnalystBench", url: "https://github.com/GeoDS/GeoAnalystBench" }
      ],
      whyRead: "Master unambiguous prompt engineering, automated output-based numeric grading, silent-failure taxonomy classification, and inter-rater reliability (Cohen's kappa).",
      practiceTask: "Author a complete benchmark task folder (prompt.md, license-clean data snapshot, reference solution.py, numeric-tolerance verifier.py, rubric.md, and deliberate buggy trap solution).",
      output: "1 complete verified task added to the verisci (GeoEval-BD) repository passing dual-pass CI."
    },
    {
      day: "Wednesday",
      dayIndex: 3,
      focus: "Paper Dissection & Literature Matrix",
      docs: [
        { name: "OpenAlex Catalog", url: "https://openalex.org/" },
        { name: "Semantic Scholar", url: "https://www.semanticscholar.org/" },
        { name: "The Turing Way", url: "https://book.the-turing-way.org/" },
        { name: "Zotero & ORCID", url: "https://grsgroup.org/researcher-resources" }
      ],
      whyRead: "Replace chronological one-paper-per-paragraph summary dumping with thematic methodology matrices and operationalizable research gap identification.",
      practiceTask: "Apply the Three-Pass Reading Protocol (Pass 1: 10m Triage; Pass 2: 35m Methodological Extraction in Zotero; Pass 3: 60m Equation & Assumption Critique for Bangladesh delta conditions).",
      output: "Structured Zotero methodology critique note + updated references.bib with verified Crossref DOIs."
    },
    {
      day: "Thursday",
      dayIndex: 4,
      focus: "Technical Writing, OpenAPI & Linting",
      docs: [
        { name: "Google Style Guide", url: "https://developers.google.com/style" },
        { name: "Diataxis Framework", url: "https://diataxis.fr/" },
        { name: "Quarto Guide", url: "https://quarto.org/docs/guide/" },
        { name: "OpenAPI 3.2 Spec", url: "https://spec.openapis.org/oas/v3.2.0.html" },
        { name: "Vale Docs", url: "https://docs.vale.sh/" }
      ],
      whyRead: "Transform raw engineering scripts and research protocols into developer-grade documentation that passes automated style and doctest gates.",
      practiceTask: "Draft or refine a Diataxis artifact (Tutorial, How-To Guide, API Reference, or Comparative Explanation) in .qmd/.md and enforce active voice and zero linting errors via Vale.",
      output: "1 publication-ready documentation draft scoring >=80/100 on the 100-point rubric."
    },
    {
      day: "Friday",
      dayIndex: 5,
      focus: "Open-Source PRs, Review & Hygiene",
      docs: [
        { name: "GeoPandas Guide", url: "https://geopandas.org/en/stable/docs.html" },
        { name: "GitHub CITATION.cff", url: "https://docs.github.com/en/repositories/archiving-a-github-repository/referencing-and-citing-content" },
        { name: "JOSS Criteria", url: "https://joss.readthedocs.io/en/latest/review_criteria.html" }
      ],
      whyRead: "Build Tier 3 external validation through upstream maintainer reviews, constructive PR reviews, and clean archival metadata.",
      practiceTask: "Spend 1 hour triaging documentation/test issues in GeoPandas, OSMnx, xarray, PySAL, or Inspect Evals (or reviewing external PRs), and 1 hour updating READMEs, tags, CITATION.cff, and meheran.dev/proof.",
      output: "Weekly tagged commit + green CI check + 1 upstream PR or public technical review + 15-min weekly retrospective."
    }
  ],

  // Complete 24-Week Execution Schedule (Nov 16, 2026 - May 15, 2027)
  weeklySchedule: [
    { id: "w1", week: "W1", month: "M1", startIso: "2026-11-16", endIso: "2026-11-22", dates: "Nov 16 – Nov 22, 2026", focus: "v4 P1 (Harness + PROOF.md, ~12h): Initialize public repo verisci (starts 6-month JOSS clock), MIT/Apache-2.0 LICENSE, CITATION.cff, pyproject.toml, Inspect AI wrapper, Dockerfile, dual-pass pytest CI & 1 complete example task. Open GitHub & Kaggle (L1) profiles; submit Copernicus CDS request for ERA5 (P2).", deliverable: "Public repo verisci tag v0.1 with green dual-pass CI badge, PROOF.md, and active Kaggle/GitHub/ORCID profiles." },
    { id: "w2", week: "W2", month: "M1", startIso: "2026-11-23", endIso: "2026-11-29", dates: "Nov 23 – Nov 29, 2026", focus: "v4 P2 Part 1 (bd-rain-extremes): Download CHIRPS daily (0.05°) & ERA5 hourly precipitation (0.25°, meters); verify BMD 35-station daily rain gauge dataset (or NOAA GHCN-Daily) for 1991–2020; extract grid values at station coordinates.", deliverable: "bd-rain-extremes data ingestion & station extraction module with license documentation in README.md." },
    { id: "w3", week: "W3", month: "M1", startIso: "2026-11-30", endIso: "2026-12-06", dates: "Nov 30 – Dec 6, 2026", focus: "v4 P2 Part 2 (bd-rain-extremes): Convert ERA5 hourly accumulation to daily totals in Bangladesh Standard Time (UTC+6); compute ETCCDI indices (Rx1day, Rx5day, R95p, CDD with wet day >= 1 mm) and unit-test on synthetic series.", deliverable: "Verified ETCCDI index calculation module passing synthetic Rx5day and unit-conversion pytest checks." },
    { id: "w4", week: "W4", month: "M1", startIso: "2026-12-07", endIso: "2026-12-13", dates: "Dec 7 – Dec 13, 2026", focus: "v4 P2 Completion (bd-rain-extremes): Compute seasonal (JJAS monsoon) bias, RMSE, and correlation against BMD rain gauges; generate 6 diagnostic figures and derived station comparison table (for L1 Kaggle).", deliverable: "Complete public P2 repo bd-rain-extremes (6 figures, derived station table, green CI) — pace benchmarked for remaining months." },
    { id: "w5", week: "W5", month: "M2", startIso: "2026-12-14", endIso: "2026-12-20", dates: "Dec 14 – Dec 20, 2026", focus: "v4 P2 Benchmark Tasks (3 tasks into verisci): Author (1) ERA5 hourly-to-daily UTC+6 & unit conversion task, (2) Rx5day calculation task, and (3) CDD cross-year boundary dry-spell edge-case task with dual-pass verifiers.", deliverable: "3 verified P2 Earth tasks merged into verisci passing reference=PASS and buggy_solution=FAIL in CI." },
    { id: "w6", week: "W6", month: "M2", startIso: "2026-12-21", endIso: "2026-12-27", dates: "Dec 21 – Dec 27, 2026", focus: "v4 P3 Part 1 (rainfall-runoff-camels, ~25h): Download CAMELS dataset (DOI: 10.5065/D6MW2F4D, Addor et al. 2017); select 8–10 diverse basins (humid, arid, snow-dominated); implement 3-layer HBV conceptual model from scratch in NumPy.", deliverable: "NumPy 3-layer HBV model (degree-day snow, soil moisture accounting, fast/slow reservoirs, routing) passing water-balance conservation test." },
    { id: "w7", week: "W7", month: "M2", startIso: "2026-12-28", endIso: "2027-01-03", dates: "Dec 28, 2026 – Jan 3, 2027", focus: "v4 P3 Part 2 (rainfall-runoff-camels): Configure warm-up period, calibrate on first ~15 years via SciPy differential_evolution, validate on remaining years; compute NSE, KGE, bias, log-NSE vs mean flow, climatology & SAC-SMA output; plot equifinality envelope.", deliverable: "Complete public P3 repo rainfall-runoff-camels with hydrographs, basin metric table, equifinality plot & synthetic parameter identifiability test." },
    { id: "w8", week: "W8", month: "M2", startIso: "2027-01-04", endIso: "2027-01-10", dates: "Jan 4 – Jan 10, 2027", focus: "v4 L2 (Open Source, ~8h): Submit 2 focused PRs (docs fix, test addition, or reproducible bug fix) to libraries used in P1–P3 (xarray, SciPy, scikit-learn, Pyomo, or rasterio) and begin logging 5 substantive external PR reviews.", deliverable: "2 upstream Open-Source Pull Requests submitted + public review log initialized in PROOF.md." },
    { id: "w9", week: "W9", month: "M3", startIso: "2027-01-11", endIso: "2027-01-17", dates: "Jan 11 – Jan 17, 2027", focus: "v4 P3 Benchmark Tasks (3 tasks into verisci): Author (1) streamflow ft³/s + basin area to mm/day conversion task, (2) NSE vs KGE & baseline interpretation task, and (3) calibration/warm-up/validation split leakage task.", deliverable: "3 verified P3 Hydrology/Engineering tasks merged into verisci (6 project tasks + 1 starter = 7 tasks total)." },
    { id: "w10", week: "W10", month: "M3", startIso: "2027-01-18", endIso: "2027-01-24", dates: "Jan 18 – Jan 24, 2027", focus: "v4 P4 (Spatial leakage study, Sentinel-2, ~21h): Extract Sentinel-2 L2A bands/NDVI/NDWI + Copernicus DEM slope + ESA WorldCover across a ~50×50 km coastal belt AOI; compare Random KFold vs Spatial-Block GroupKFold (0.5, 1, 2, 5 km) across Logistic, RF, XGBoost, LightGBM.", deliverable: "Public P4 repo spatial-leakage-s2 with block-size vs Macro-F1 decay curve, bootstrap CIs, cross-region shift table, 2-page writeup & disjoint geometry pytest." },
    { id: "w11", week: "W11", month: "M3", startIso: "2027-01-25", endIso: "2027-01-31", dates: "Jan 25 – Jan 31, 2027", focus: "v4 P5 Part 1 (stat-validation-sims, ~17h): Implement vectorized 10,000-repetition NumPy simulations with fixed seeds and Monte Carlo error √(p(1-p)/R) for (a) Bootstrap Percentile vs custom BCa coverage (n=10, 30, 100) and (b) Student's vs Welch's t-test Type I error.", deliverable: "Bootstrap BCa vs Percentile and Student vs Welch simulation modules matching theoretical guarantees on normal large-n test cases." },
    { id: "w12", week: "W12", month: "M3", startIso: "2027-02-01", endIso: "2027-02-07", dates: "Feb 1 – Feb 7, 2027", focus: "v4 P5 Part 2 (stat-validation-sims): Implement (c) Bonferroni vs Benjamini-Hochberg FDR under independent/correlated tests and (d) Optional Stopping sequential peeking false-positive inflation; generate 4 diagnostic figures.", deliverable: "Complete public P5 repo stat-validation-sims with 4 figures, README, and deterministic seed assertions." },
    { id: "w13", week: "W13", month: "M4", startIso: "2027-02-08", endIso: "2027-02-14", dates: "Feb 8 – Feb 14, 2027", focus: "v4 P4 & P5 Benchmark Tasks (6 tasks into verisci, 10h/wk M4 pace): Add 3 P4 tasks (spatial vs random CV, geometry overlap, imbalanced metric) and 3 P5 tasks (coverage measurement, Student vs Welch, Bonferroni vs BH).", deliverable: "6 verified P4 & P5 tasks merged into verisci (12 project tasks total)." },
    { id: "w14", week: "W14", month: "M4", startIso: "2027-02-15", endIso: "2027-02-21", dates: "Feb 15 – Feb 21, 2027", focus: "v4 P6 (TSP: heuristic vs exact vs TSPLIB optimum, ~17h): Implement EUC_2D integer rounding reader, custom Nearest Neighbour + 2-opt, OR-Tools Guided Local Search, and Exact MIP (Pyomo + HiGHS with lazy subtour elimination + LP/1-tree lower bound) on eil51, berlin52, st70, eil76, kroA100.", deliverable: "Public P6 repo tsp-validated with method comparison & optimality gap table, Hamiltonian cycle test, and Exact == Known Optimum assertion." },
    { id: "w15", week: "W15", month: "M4", startIso: "2027-02-22", endIso: "2027-02-28", dates: "Feb 22 – Feb 28, 2027", focus: "v4 L1 (Kaggle Dataset + Notebook, ~8h): Verify CHIRPS, ERA5 & BMD data licenses; publish P2's derived station-level extreme rainfall comparison table as a Kaggle Dataset alongside a clean P2 or P3 analytical notebook.", deliverable: "Published Kaggle Dataset + reproducible notebook on Kaggle profile (shared with community for non-novice upvotes)." },
    { id: "w16", week: "W16", month: "M4", startIso: "2027-03-01", endIso: "2027-03-07", dates: "Mar 1 – Mar 7, 2027", focus: "v4 P8 Part 1 (ml-pitfalls-lab, ~8h): Implement 6 'Honest vs Leaky' ML experiments repeated 20× each on license-clean scikit-learn/OpenML datasets (pre-split scaling, target leakage, train/test duplicates, time-series random split, Accuracy vs PR-AUC, test-set tuning).", deliverable: "ml-pitfalls-lab Part 1 complete with 20-repeat score-inflation interval table and disjoint index assertions." },
    { id: "w17", week: "W17", month: "M5", startIso: "2027-03-08", endIso: "2027-03-14", dates: "Mar 8 – Mar 14, 2027", focus: "v4 P6 Benchmark Tasks (3 tasks into verisci): Author (1) TSPLIB EUC_2D integer rounding trap task, (2) subtour detection task, and (3) verifying optimality claims via lower bounds task.", deliverable: "3 verified P6 Optimization tasks merged into verisci (15 project tasks total)." },
    { id: "w18", week: "W18", month: "M5", startIso: "2027-03-15", endIso: "2027-03-21", dates: "Mar 15 – Apr 21, 2027", focus: "v4 P7 Part 1 (numerics-validated, ~21h): Implement (1) root finding (bisection, secant, Newton) convergence order, (2) ODE solvers (Euler, RK4, velocity Verlet) log–log error slopes (1, 4, 2), and (3) harmonic oscillator energy drift (Euler vs Verlet).", deliverable: "numerics-validated root-finding & ODE modules passing ±0.2 convergence order and energy conservation assertions." },
    { id: "w19", week: "W19", month: "M5", startIso: "2027-03-22", endIso: "2027-03-28", dates: "Mar 22 – Mar 28, 2027", focus: "v4 P7 Part 2 (numerics-validated): Implement (4) stiff ODE (explicit vs backward Euler), (5) 1D heat equation explicit finite difference (r <= 1/2) vs Fourier series analytic solution, (6) Hilbert matrix condition number error, and (7) solve_ivp comparison + 3 P7 tasks.", deliverable: "Complete public P7 repo numerics-validated with log–log plots + 3 P7 tasks merged into verisci (18 tasks total)." },
    { id: "w20", week: "W20", month: "M5", startIso: "2027-03-29", endIso: "2027-04-04", dates: "Mar 29 – Apr 4, 2027", focus: "v4 P8 Part 2 (PyTorch 10-Seed Reproducibility, ~6h) & First Application Wave: Train small MLP/CNN across 10 seeds (deterministic=True vs False, learning-rate divergence vs XGBoost baseline); apply to Earth & Math/Stats roles with P1–P7 (~18 tasks) live.", deliverable: "Complete public P8 repo ml-pitfalls-lab with seed-variance plot + Earth & Math/Stats applications submitted." },
    { id: "w21", week: "W21", month: "M6", startIso: "2027-04-05", endIso: "2027-04-11", dates: "Apr 5 – Apr 11, 2027", focus: "v4 P8 Benchmark Tasks (3 tasks into verisci, 10h/wk M6 pace): Author (1) pre-split scaling leakage task, (2) PR-AUC vs Accuracy trap task, and (3) PyTorch seed variance & determinism task; peer-test 3 tasks on a classmate.", deliverable: "All 21 benchmark tasks (7 projects × 3 tasks) complete in verisci and peer-checked for prompt clarity." },
    { id: "w22", week: "W22", month: "M6", startIso: "2027-04-12", endIso: "2027-04-18", dates: "Apr 12 – Apr 18, 2027", focus: "v4 P9 Part 1 (LLM Run, Failure Taxonomy & Cohen's Kappa, ~14h): Run 3–4 LLMs across all 21 tasks via Inspect AI; classify errors into 6-part taxonomy; re-grade after 1 week + peer grade 10 tasks to compute Cohen's kappa; build 1 Docker sandbox agent task.", deliverable: "LLM run logs in results/, 6-category Failure Taxonomy table, Cohen's kappa score, and 1 Inspect Docker agent task." },
    { id: "w23", week: "W23", month: "M6", startIso: "2027-04-19", endIso: "2027-04-25", dates: "Apr 19 – Apr 25, 2027", focus: "v4 P9 Part 2 (v1.0 Release) & L3 (Technical Report, ~8h): Tag verisci v1.0, mint Zenodo DOI, publish Hugging Face Dataset Card, update PROOF.md, and publish 4–6 page human-written Technical Report on EarthArXiv/Zenodo.", deliverable: "verisci v1.0 Zenodo DOI + Hugging Face Dataset Card + 4–6 page Technical Report preprint on EarthArXiv/Zenodo." },
    { id: "w24", week: "W24", month: "M6", startIso: "2027-04-26", endIso: "2027-05-15", dates: "Apr 26 – May 15, 2027", focus: "v4 Final Application Wave & Optional O1–O5 Gate (at 15h/wk): Apply to ML Engineering & remaining roles with PROOF.md link; if 6-month steady history & scope check pass, submit verisci to JOSS (O5) and pursue O1/O2/O3/O4 as needed.", deliverable: "All 8 validation repos + 21-task verisci v1.0 (DOI) + 1 report + 2 OSS PRs + 1 Kaggle dataset live on PROOF.md; applications submitted." }
  ],

  // 6 Monthly Blueprints & Verification Checklists
  monthlyBlueprints: [
    {
      code: "M1",
      month: "Month 1",
      period: "Nov 15 – Dec 15, 2026",
      theme: "v4 P1 (verisci Harness v0.1) & P2 (Bangladesh Rain Extremes: CHIRPS vs ERA5 vs BMD)",
      hoursPerWeek: "12–15 hrs/wk",
      primaryObjective: "Start from zero old projects per v4: launch public repo verisci (P1, ~12h) on Day 1 to start the 6-month JOSS clock, open Kaggle (L1) & GitHub profiles, and build P2 (bd-rain-extremes, ~23h) validating CHIRPS & ERA5 against BMD station rain gauges (1991–2020).",
      researchTargets: "Verify BMD 35-station daily rain gauge dataset (Mendeley Data / NOAA GHCN-Daily) licenses; study ETCCDI extreme indices (Rx1day, Rx5day, R95p, CDD) and why ENACTS-BMD cannot be treated as independent ground truth.",
      technicalTargets: "Configure uv/conda, pytest, Inspect AI wrapper, Dockerfile, GitHub Actions dual-pass CI (reference=PASS, buggy=FAIL), PROOF.md, and Xarray/NetCDF ERA5 hourly UTC-to-BST (UTC+6) accumulation.",
      weeklyDeliverablesSummary: "W1: verisci v0.1 + Kaggle/GitHub setup + CDS request | W2: CHIRPS/ERA5/BMD ingestion | W3: UTC+6 daily totals & ETCCDI indices | W4: Public P2 repo bd-rain-extremes (6 figures + derived table).",
      kpis: [
        { id: "m1_k1", text: "P1: Public repo verisci live with MIT/Apache-2.0 LICENSE, CITATION.cff, PROOF.md, Dockerfile, green pytest CI badge, and tag v0.1." },
        { id: "m1_k2", text: "P2: Public repo bd-rain-extremes validates CHIRPS (0.05°) & ERA5 (0.25°, UTC+6) against BMD rain gauges across 1991–2020 with 6 figures." },
        { id: "m1_k3", text: "P2 Tests: ETCCDI index functions match exact known answers on synthetic time-series (Rx5day, CDD) and pass unit conversion tests." },
        { id: "m1_k4", text: "Kaggle & GitHub profiles active; actual build speed measured on P2 to calibrate remaining months." }
      ]
    },
    {
      code: "M2",
      month: "Month 2",
      period: "Dec 15, 2026 – Jan 15, 2027",
      theme: "v4 P2 Tasks, P3 (CAMELS Rainfall–Runoff HBV Model) & L2 (Open Source PRs)",
      hoursPerWeek: "12–15 hrs/wk",
      primaryObjective: "Convert P2 into 3 benchmark tasks in verisci, build P3 (rainfall-runoff-camels, ~25h) implementing a 3-layer HBV hydrological model from scratch in NumPy validated against CAMELS observed streamflow & SAC-SMA outputs, and submit 2 Open-Source PRs (L2, ~8h).",
      researchTargets: "Study Addor et al. (2017, HESS 21, 5293, DOI: 10.5065/D6MW2F4D) CAMELS dataset across 8–10 humid, arid, and snow-dominated US catchments; analyze equifinality and NSE vs KGE baselines.",
      technicalTargets: "Implement degree-day snow, soil moisture accounting, fast/slow reservoirs & routing in NumPy; calibrate with SciPy differential_evolution (15-yr calibration + warm-up vs validation split); submit 2 PRs to xarray/SciPy/scikit-learn/Pyomo/rasterio.",
      weeklyDeliverablesSummary: "W5: 3 P2 tasks in verisci | W6: 3-layer NumPy HBV model & water balance test | W7: Public P3 repo rainfall-runoff-camels & equifinality plot | W8: L2 (2 OSS PRs submitted + reviews started).",
      kpis: [
        { id: "m2_k1", text: "P2 Tasks: 3 verified climate tasks (ERA5 UTC+6 conversion, Rx5day, CDD boundary edge case) merged into verisci." },
        { id: "m2_k2", text: "P3: Public repo rainfall-runoff-camels live with hydrographs, 8–10 basin NSE/KGE/log-NSE table vs SAC-SMA, and equifinality envelope." },
        { id: "m2_k3", text: "P3 Tests: Passes water-balance conservation assertion and synthetic parameter recovery (identifiability) test." },
        { id: "m2_k4", text: "L2: 2 focused documentation/test/bug-fix Pull Requests submitted to upstream libraries + PR review log active." }
      ]
    },
    {
      code: "M3",
      month: "Month 3",
      period: "Jan 15 – Feb 15, 2027",
      theme: "v4 P3 Tasks, P4 (Sentinel-2 Spatial Leakage) & P5 (Statistical Validation by Simulation)",
      hoursPerWeek: "12–15 hrs/wk",
      primaryObjective: "Add P3's 3 tasks to verisci, complete P4 (spatial-leakage-s2, ~21h) quantifying Random vs Spatial-Block CV score inflation on Sentinel-2, and complete P5 (stat-validation-sims, ~17h) validating 4 statistical methods across 10,000 Monte Carlo repetitions.",
      researchTargets: "Study Roberts et al. (2017, Ecography) on cross-validation for spatially structured data and Morris, White & Crowther (2019, Statistics in Medicine) on simulation studies for statistical methods.",
      technicalTargets: "Master Spatial-Block GroupKFold (0.5, 1, 2, 5 km) with block bootstrap CIs & cross-region shift; implement vectorized NumPy BCa bootstrap, Welch's t-test, Benjamini-Hochberg FDR, and Optional Stopping simulations.",
      weeklyDeliverablesSummary: "W9: 3 P3 tasks in verisci | W10: Public P4 repo spatial-leakage-s2 | W11: P5 Bootstrap BCa & Welch t-test sims | W12: Public P5 repo stat-validation-sims (4 figures).",
      kpis: [
        { id: "m3_k1", text: "P3 Tasks: 3 hydrological tasks (ft³/s to mm/day conversion, NSE vs KGE baseline, calibration split leakage) merged into verisci." },
        { id: "m3_k2", text: "P4: Public repo spatial-leakage-s2 live with block-size decay curve, 2-page writeup, and zero train/test geometry overlap assertion." },
        { id: "m3_k3", text: "P5: Public repo stat-validation-sims live with 4 simulation studies (10,000 reps, fixed seeds, Monte Carlo error √(p(1-p)/R) bounds)." },
        { id: "m3_k4", text: "P5 Tests: Normal large-n empirical coverage and Type I error fall strictly within theoretical Monte Carlo error bounds." }
      ]
    },
    {
      code: "M4",
      month: "Month 4",
      period: "Feb 15 – Mar 15, 2027",
      theme: "v4 P4/P5 Tasks, P6 (TSP Exact vs Heuristic on TSPLIB), L1 (Kaggle) & P8 Start",
      hoursPerWeek: "10–12 hrs/wk (v4 M4 Exam/Application Pace)",
      primaryObjective: "Merge 6 tasks from P4 & P5 into verisci, build P6 (tsp-validated, ~17h) comparing custom heuristics and OR-Tools against Exact MIP (Pyomo + HiGHS lazy subtour elimination) on TSPLIB instances, publish the L1 Kaggle Dataset + Notebook (~8h), and start P8 (ml-pitfalls-lab).",
      researchTargets: "Verify TSPLIB EUC_2D integer rounding conventions and published exact optimums (eil51=426, berlin52=7542, st70=675, eil76=538, kroA100=21282); analyze LP relaxation and 1-tree lower bounds.",
      technicalTargets: "Implement Nearest Neighbour + 2-opt, OR-Tools Guided Local Search, and Pyomo + HiGHS lazy subtour cut generation; run 20× repeated 'Honest vs Leaky' experiments across 6 ML pitfalls.",
      weeklyDeliverablesSummary: "W13: 6 P4/P5 tasks in verisci | W14: Public P6 repo tsp-validated | W15: L1 Kaggle Dataset + Notebook published | W16: P8 Part 1 (6 ML pitfalls × 20 repeats table).",
      kpis: [
        { id: "m4_k1", text: "P4 & P5 Tasks: 6 verified ML/Stats tasks merged into verisci (12 project tasks total)." },
        { id: "m4_k2", text: "P6: Public repo tsp-validated matches exact TSPLIB optimums (eil51=426, berlin52=7542, st70=675) and validates Hamiltonian cycles." },
        { id: "m4_k3", text: "L1: License-verified P2 derived station table published as a Kaggle Dataset alongside a clean P2/P3 analytical notebook." },
        { id: "m4_k4", text: "P8 Part 1: 6 ML pitfalls score-inflation table completed with train/test index disjointness assertions." }
      ]
    },
    {
      code: "M5",
      month: "Month 5",
      period: "Mar 15 – Apr 15, 2027",
      theme: "v4 P6 Tasks, P7 (Numerical Methods & Physics Suite), P8 Completion & Earth/Math Apply",
      hoursPerWeek: "12–15 hrs/wk",
      primaryObjective: "Merge P6's 3 tasks into verisci, build P7 (numerics-validated, ~21h) validating 7 numerical & physics modules against analytical solutions and conservation laws, finish P8 Part 2 (PyTorch 10-seed determinism), and apply to Earth & Math/Stats roles (~18 tasks ready).",
      researchTargets: "Verify theoretical convergence orders (bisection=1, secant≈1.618, Newton=2, Euler=1, Verlet=2, RK4=4), symplectic energy conservation, and explicit 1D heat equation CFL stability (r = αΔt/Δx² <= 1/2).",
      technicalTargets: "Implement root finding, ODE integrators, harmonic oscillator energy drift, stiff backward Euler, 1D heat PDE vs Fourier series, Hilbert matrix conditioning, and 10-seed PyTorch MLP/CNN determinism.",
      weeklyDeliverablesSummary: "W17: 3 P6 tasks in verisci | W18: P7 root finding, ODE slopes & Verlet energy drift | W19: Public P7 repo numerics-validated + 3 P7 tasks | W20: Public P8 repo complete + Apply to Earth & Math/Stats.",
      kpis: [
        { id: "m5_k1", text: "P6 & P7 Tasks: 6 Optimization & Numerical Physics tasks merged into verisci (~18 tasks total)." },
        { id: "m5_k2", text: "P7: Public repo numerics-validated passes ±0.2 convergence order assertions, energy drift checks, and heat equation stability tests." },
        { id: "m5_k3", text: "P8: Public repo ml-pitfalls-lab complete with 10-seed PyTorch deterministic vs non-deterministic variance plot vs XGBoost." },
        { id: "m5_k4", text: "First Application Wave: Submit applications for Earth & Environmental and Math & Statistics roles backed by P1–P7 repos." }
      ]
    },
    {
      code: "M6",
      month: "Month 6",
      period: "Apr 15 – May 15, 2027",
      theme: "v4 P8 Tasks, P9 (LLM Run, Taxonomy, Agent Task & v1.0 DOI), L3 Report & Full Apply",
      hoursPerWeek: "10–12 hrs/wk (or 15 hrs/wk with Optional O1–O5)",
      primaryObjective: "Add P8's 3 tasks to complete all 21 tasks in verisci, execute P9 (~14h: 3–4 LLM run via Inspect AI, 6-part failure taxonomy, Cohen's kappa, 1 Docker sandbox agent task, v1.0 Zenodo DOI & Hugging Face release), publish L3 (4–6 page Technical Report, ~8h), and apply to ML & all remaining roles.",
      researchTargets: "Analyze LLM failure modes across all 21 scientific tasks; compute intra-rater (1-week self re-grade) and inter-rater (10-task peer grade) Cohen's kappa; author 4–6 page Technical Report (L3).",
      technicalTargets: "Run Inspect AI multi-model evaluation & Docker sandbox agent task; mint Zenodo DOI & Hugging Face Dataset Card for verisci v1.0; evaluate JOSS submission gate (O5, >=6 months public history).",
      weeklyDeliverablesSummary: "W21: 3 P8 tasks (21 tasks total) & peer prompt check | W22: 3–4 LLM Inspect run, taxonomy, Cohen's kappa & Docker agent task | W23: verisci v1.0 DOI + L3 Report on EarthArXiv/Zenodo | W24: Full role applications + O5 JOSS gate.",
      kpis: [
        { id: "m6_k1", text: "v4 Final Deliverable Count Met: 8 CI-green validation repos (P1–P8), 21-task verisci v1.0 suite (with Zenodo DOI & HF Dataset), 1 report (L3), 2 OSS PRs (L2), 1 Kaggle dataset (L1)." },
        { id: "m6_k2", text: "P9 Quality Gates: 3 tasks peer-tested for prompt clarity, 10 tasks peer-graded for Cohen's kappa, and 1 Inspect Docker sandbox agent task verified." },
        { id: "m6_k3", text: "L3: 4–6 page human-written Technical Report published on EarthArXiv or Zenodo and linked in PROOF.md." },
        { id: "m6_k4", text: "Applications submitted to ML Engineering and remaining roles using PROOF.md; O5 JOSS submission triggered if 6-month history & scope check pass." }
      ]
    }
  ],

  // 7-Tier Verifiable Proof Ladder (Rank 7 = Weight: 0 in Grey)
  proofLadder: [
    { tier: "Rank 1", weight: "Weight: 100 (Highest)", indent: 0, zeroWeight: false, artifact: "Peer-Reviewed Publication (e.g., JOSS or Journal Co-Authorship)", verifier: "Journal Editors & Peer Reviewers", reality: "JOSS 2026 rules require >=6 months of public repo history, releases, issues/PRs, and ~3+ months of scholarly effort. Starting the public repo in Mid-Nov 2026 unlocks submission in May–June 2027 (acceptance is never guaranteed)." },
    { tier: "Rank 2", weight: "Weight: 90", indent: 1, zeroWeight: false, artifact: "Competition Leaderboard & Medals (Kaggle / DrivenData)", verifier: "Platform Scoring & Peer Votes", reality: "Kaggle Expert requires 2 Bronze (Competitions), 3 Bronze (Datasets), or 5 Bronze (Notebooks, >=5 non-novice upvotes each). Publishing a clean Bangladesh geospatial dataset + notebook is the highest-ROI niche." },
    { tier: "Rank 3", weight: "Weight: 85", indent: 2, zeroWeight: false, artifact: "Merged Pull Requests in Recognized Open-Source Projects", verifier: "Upstream Core Maintainers", reality: "Target 2–3 merged PRs in GeoPandas, OSMnx, xarray, PySAL, or Inspect Evals starting with documentation fixes, runnable numpydoc examples, and reproducible bug tests, plus >=5 public PR reviews." },
    { tier: "Rank 4", weight: "Weight: 80", indent: 3, zeroWeight: false, artifact: "DOI-Archived Public Benchmark, Dataset & Reproducible Package", verifier: "Any Researcher or Engineer", reality: "100% under your control. verisci (GeoEval-BD v1.0) with 24–30 tasks, permanent CERN-backed Zenodo DOI, and Hugging Face Dataset Card." },
    { tier: "Rank 5", weight: "Weight: 75", indent: 4, zeroWeight: false, artifact: "CI-Green Headless Reproducible Repository", verifier: "Anyone Running pytest / Vale", reality: "Mandatory across all 6 flagship projects. Pinned uv.lock/environment.yml, Dockerfile, fixed seeds, dual-pass pytest CI, and green Vale style badge." },
    { tier: "Rank 6", weight: "Weight: 65", indent: 5, zeroWeight: false, artifact: "Self-Published Preprint Report & Diataxis Documentation Portal", verifier: "Hiring Managers & Lab PIs", reality: "Supporting proof on meheran.dev/docs, Read the Docs, and EarthArXiv/Zenodo. Must score >=80–85/100 on the rubric and precede each piece with a 3-line Decision Context block." },
    { tier: "Rank 7", weight: "Weight: 0", indent: 6, zeroWeight: true, artifact: "Online Course Certificates (DataCamp, Coursera, etc.)", verifier: "Zero Technical Weight", reality: "Strictly deprioritized (Weight: 0). Never spend time accumulating new certificates during this 6-month sprint." }
  ],

  // 12-Step Independent Research Workflow (for Interactive Stepper #Research)
  researchSteps12: [
    { step: 1, title: "Problem Identification", detail: "Anchor in concrete Bangladesh urban/environmental hazards (Khulna UHI, Chattogram SAR flood, deltaic rainfall extremes) where public scripts can be executed end-to-end." },
    { step: 2, title: "Honest Novelty Verification", detail: "Frame contribution accurately as rigorous sensitivity benchmarking, leak-free spatial validation, or data-scarce stress testing rather than claiming grand new physics." },
    { step: 3, title: "Multi-Database Literature Mapping", detail: "Query OpenAlex & Semantic Scholar for 25+ core papers using forward and backward citation graphs." },
    { step: 4, title: "Comparative Methodology Matrix", detail: "Build a 15–25 paper synthesis table in Zotero + Better BibTeX (references.bib) comparing Sensor, Scale, Method, Metric, and Unresolved Gap." },
    { step: 5, title: "Falsifiable Hypothesis Formulation", detail: "State explicit null (H0) and alternative (H1) hypotheses with expected effect directions and spatial block scales." },
    { step: 6, title: "Dataset Provenance Audit", detail: "Log exact URLs, acquisition dates, CRS, and licenses (ODbL, CC-BY-4.0) in data/README.md with SHA256 checksums." },
    { step: 7, title: "Automated Data Hygiene", detail: "Script .make_valid() ring repair, UTM projection standardization (EPSG:32645/32646), and NoData masking with pytest assertions." },
    { step: 8, title: "Baseline Implementation", detail: "Build transparent baselines (Logistic Regression, Climatology, Teitz-Bart Heuristic) before introducing complex models." },
    { step: 9, title: "Statistical Validation", detail: "Compute spatial-block bootstrap 95% CIs, threshold sensitivity curves, and residual Moran's I." },
    { step: 10, title: "Interpretable Analysis", detail: "Apply SHAP & Accumulated Local Effects (ALE) or Exact MIP (Pyomo/HiGHS) to explain physical and spatial drivers." },
    { step: 11, title: "Limitations & Threats to Validity", detail: "Document label noise (ESA WorldCover 10m), monsoon cloud bias, and spatial transfer limits candidly." },
    { step: 12, title: "Reproducible Compendium & DOI", detail: "Package data/README.md, src/, manuscript.qmd, uv.lock, and CITATION.cff on OSF & Zenodo with a permanent DOI." }
  ],

  // Weak vs Professional Literature Review Toggleable Dimensions (#Research)
  litReviewContrast: [
    {
      dim: "Paragraph Organization",
      weak: "Chronological or one author per paragraph ('Author A (2023) did X. Author B (2024) did Y.').",
      prof: "Organized by methodological theme, competing hypothesis, or sensor modality (e.g., optical vs. SAR flood delineation)."
    },
    {
      dim: "Citation Density",
      weak: "Single citation repeated per paragraph (@smith2024).",
      prof: "Multi-source comparative synthesis within each paragraph (@smith2024; @rahman2025; @chen2026) via permanent Crossref DOIs."
    },
    {
      dim: "Critical Evaluation",
      weak: "Accepts authors' headline accuracy claims at face value.",
      prof: "Evaluates trade-offs: spatial resolution vs. revisit time, ground-truth scarcity, and random CV spatial overfitting."
    },
    {
      dim: "Tabular Synthesis",
      weak: "None, or a superficial list of paper titles.",
      prof: "Comparative Methodology Matrix comparing Study Area, Sensor/Data, Model, Validation Metric (F1, RMSE, R2, IoU), and Unresolved Gap."
    },
    {
      dim: "Outcome",
      weak: "Vague cliché ('More research is needed.').",
      prof: "Specific, operationalizable Research Gap that directly motivates your falsifiable hypothesis and study design."
    }
  ],

  // 10-Point Artifact Contract Checklist (#Writing)
  contractChecklist10: [
    { id: "con_1", num: 1, title: "Topic & Objective", desc: "State a single measurable reader or engineering outcome in one sentence." },
    { id: "con_2", num: 2, title: "Intended Audience", desc: "Specify target persona and exact software prerequisites (e.g., python >= 3.10, geopandas >= 1.0)." },
    { id: "con_3", num: 3, title: "Research Steps", desc: "Execute local verification script on real or synthetic Bangladesh test data first." },
    { id: "con_4", num: 4, title: "Primary Sources", desc: "Cite exclusively official library docs/source code and OpenAlex/Crossref DOIs." },
    { id: "con_5", num: 5, title: "Expected Structure", desc: "Follow strict Diátaxis quadrant (Tutorial, How-To, Reference, Explanation) or IMRaD hierarchy." },
    { id: "con_6", num: 6, title: "Technical Concepts", desc: "Explain the underlying mathematical, statistical, or spatial CRS invariant clearly." },
    { id: "con_7", num: 7, title: "Writing Task", desc: "Include runnable code blocks, sample outputs, and a diagnostic comparison table." },
    { id: "con_8", num: 8, title: "Verification Rules", desc: "Pass 100% pytest, doctest, and DOI resolution checks with zero hardcoded paths." },
    { id: "con_9", num: 9, title: "Editing Checklist", desc: "Enforce active voice, imperative procedural headings, and zero Vale linter errors." },
    { id: "con_10", num: 10, title: "Final Destination", desc: "Publish to repo docs/, meheran.dev/docs, and mint Zenodo DOI where applicable." }
  ],

  // Day 1 Assignment 10 Separate Accordions (#Writing)
  day1Accordions: [
    { num: 1, title: "1. Topic and Objective", body: "How to Validate Polygon Topologies and Standardize Coordinate Reference Systems for Subnational Boundary Analysis in GeoPandas.\nEnable a reader to ingest a raw administrative boundary file, diagnose and repair invalid geometries, reproject accurately for metric area calculation, and export a clean GeoPackage/GeoJSON." },
    { num: 2, title: "2. Intended Audience", body: "Junior geospatial data analysts and urban planning researchers who know basic Python and pandas but make common projection and topology errors in geopandas." },
    { num: 3, title: "3. Research Requirements", body: "Run a verification script on a real or representative Bangladesh district/union boundary layer (e.g., from HDX COD-AB / geoBoundaries or a synthetic self-intersecting polygon test case) and record exact before-and-after .is_valid counts and area calculations." },
    { num: 4, title: "4. Primary Sources to Consult", body: "- GeoPandas Projections and Coordinate Reference Systems Documentation (https://geopandas.org/en/stable/docs.html)\n- Google Developer Documentation Style Guide: Procedures & Code Samples (https://developers.google.com/style/procedures)\n- Diátaxis How-To Guide Principles (https://diataxis.fr/how-to-guides/)" },
    { num: 5, title: "5. Expected Structure", body: "- Context Header (3 lines: Audience, Problem Solved, Environment/Prerequisites: python >= 3.10, geopandas >= 1.0, shapely >= 2.0).\n- Section 1: Diagnose Invalid Geometries and Missing CRS Metadata (Code + expected diagnostic output).\n- Section 2: Repair Ring Self-Intersections with make_valid() (Explaining briefly why .make_valid() is safer than .buffer(0)).\n- Section 3: Reproject from EPSG:4326 to EPSG:32646 for Metric Area Calculation (Including a warning note on UTM zone boundaries at 90°E in Bangladesh).\n- Section 4: Verify Area Integrity and Export Standardized Boundaries (Assertion check: assert gdf.is_valid.all()).\n- References & Data Provenance (BibTeX-ready citations for GeoPandas and boundary data source)." },
    { num: 6, title: "6. Technical Concepts to Understand", body: "Ellipsoidal vs. planar Cartesian coordinates, OGC Simple Feature validity rules, UTM Zone 45N vs. 46N meridian boundary (90°E), and idempotent data validation assertions." },
    { num: 7, title: "7. Writing Task", body: "Write a 500–750 word Diátaxis How-To Guide in Markdown (.md or .qmd), containing 4 concise, runnable code blocks and 1 diagnostic comparison table (Operation | EPSG:4326 Output | EPSG:32646 Output | Analytical Risk)." },
    { num: 8, title: "8. Verification Requirements", body: "Every code block must run without error, include explicit import statements, and show sample printed output beneath the code." },
    { num: 9, title: "9. Editing Checklist", body: "- Do all procedural headings start with an imperative verb (Diagnose, Repair, Reproject, Verify)?\n- Is there zero throat-clearing in the introduction (do not start with 'In recent years, GIS has become very important...')?\n- Are CRS codes, function names, and filenames wrapped in inline code backticks?" },
    { num: 10, title: "10. Final Publication Destination", body: "Draft in your local repository (docs/guides/geopandas-topology-crs-standardization.md), pass Vale linting + 100-point rubric (>=80/100), and publish to meheran.dev/docs." }
  ],

  // Dedicated Project Catalog (6 Integrated Flagship Projects + Wave 2/3 & Lane Extensions)
  projects: [
    {
      id: "proj_p0",
      code: "v4 P1 · Benchmark Harness (M1, ~12h)",
      title: "P1: verisci — Verifiable Computational Science Benchmark Harness & PROOF.md",
      category: "Core Benchmark Harness",
      months: "Month 1 (Nov 15 – Dec 15, 2026 · ~12 hrs)",
      hours: "12 hrs",
      tracksServed: "All 8 AI Trainer Roles + Technical Writing & Research Proof Hub",
      problem: "Scientific, geospatial, and statistical tasks require a unified, deterministic evaluation harness where every task follows the exact same structure and where public repository history starts in Month 1 to satisfy the 6-month JOSS clock (for O5).",
      novelty: "Creates the public repository verisci with an OSI-approved LICENSE (MIT or Apache-2.0), CITATION.cff, pyproject.toml, Dockerfile, Inspect AI task/scorer wrapper, and a dual-pass pytest CI gate asserting that every task's verifier passes the reference solution (solution.py) and fails a deliberate buggy solution (buggy_solution.py), accompanied by PROOF.md (Claim -> Link -> Verification Command).",
      stack: ["Python >=3.10", "uv / conda", "pytest", "Inspect AI", "Docker", "GitHub Actions", "Vale Linter"],
      datasets: "1 lightweight (<100 KB) license-clean starter snapshot in M1; scales to 21 verified snapshots across P2–P8 by M6.",
      validationTruth: "Dual-Pass Continuous Integration (CI: reference solution = PASS, deliberate buggy trap solution = FAIL).",
      steps: [
        "Step 1: Initialize public repository github.com/MkMeheran/verisci on Day 1 (starts the 6-month JOSS history clock) with MIT/Apache-2.0 LICENSE, README.md, CITATION.cff, and pyproject.toml.",
        "Step 2: Define the standardized 6-file task folder contract: prompt.md, data/, solution.py, verifier.py, rubric.md, and meta.yaml.",
        "Step 3: Implement the Inspect AI wrapper (src/verisci/harness.py), Dockerfile, and GitHub Actions workflow (.github/workflows/ci.yml) running dual-pass pytest.",
        "Step 4: Build 1 small end-to-end example task, verify green CI badge, create PROOF.md, tag release v0.1, and stop without over-engineering the harness."
      ],
      outputs: [
        "1. Public GitHub repository verisci with green pytest CI badge and tag v0.1",
        "2. Standardized Task Folder Template (prompt.md, data/, solution.py, verifier.py, rubric.md, meta.yaml)",
        "3. Inspect AI @task and @scorer wrapper + Dockerfile",
        "4. Dual-Pass CI test suite (tests/test_dual_pass.py)",
        "5. PROOF.md (Centralized Claim -> Link -> Verification Command table)",
        "6. 1 Complete end-to-end verified starter task"
      ],
      takeaway: "Starts the 6-month JOSS clock on Day 1 and provides the shared testing harness for all 21 tasks generated by P2–P8.",
      verifyCmd: "git clone https://github.com/MkMeheran/verisci.git && cd verisci && uv run pytest -v",
      asciiTree: `verisci/
├── .github/workflows/ci.yml        # Dual-pass pytest: reference=PASS, buggy=FAIL
├── src/verisci/
│   ├── __init__.py
│   ├── harness.py                  # Inspect AI @task & @scorer wrapper
│   └── validators.py               # Numeric tolerance (np.isclose) helpers
├── tasks/
│   └── example_001_starter/
│       ├── data/sample.csv
│       ├── prompt.md
│       ├── solution.py             # Reference solution (must PASS verifier)
│       ├── buggy_solution.py       # Deliberate trap (must FAIL verifier)
│       ├── verifier.py
│       ├── rubric.md
│       └── meta.yaml
├── tests/test_dual_pass.py
├── CITATION.cff
├── Dockerfile
├── LICENSE                         # MIT or Apache-2.0
├── PROOF.md                        # Claim -> Link -> Verification Command
├── pyproject.toml
└── README.md`,
      markdownTree: `- \`verisci/\`
  - \`.github/workflows/ci.yml\` — Dual-pass \`pytest\` CI workflow
  - \`src/verisci/harness.py\` — Inspect AI \`@task\` & \`@scorer\` wrapper
  - \`tasks/example_001_starter/\` — \`prompt.md\`, \`data/\`, \`solution.py\`, \`buggy_solution.py\`, \`verifier.py\`, \`rubric.md\`, \`meta.yaml\`
  - \`tests/test_dual_pass.py\` — Asserts reference passes and buggy solution fails
  - \`CITATION.cff\`, \`Dockerfile\`, \`LICENSE\`, \`PROOF.md\`, \`pyproject.toml\`, \`README.md\``
    },
    {
      id: "proj_p1",
      code: "v4 P2 · Earth Climate (M1–M2, ~23h)",
      title: "P2: Bangladesh Extreme Rainfall — CHIRPS vs. ERA5 vs. BMD Rain Gauge Validation (bd-rain-extremes)",
      category: "Geospatial & Earth",
      months: "Months 1 – 2 (~23 hrs, includes 3 verisci tasks)",
      hours: "23 hrs",
      tracksServed: "Earth & Environmental + Research Track + Technical Writing + L1 Kaggle Source",
      problem: "How accurately do CHIRPS (0.05° daily) and ERA5 (0.25° hourly accumulation in meters) capture extreme rainfall indices (Rx1day, Rx5day, R95p, CDD) across Bangladesh (1991–2020) when validated against station rain gauges, and which product performs better by region?",
      novelty: "Validates CHIRPS and ERA5 (converted from meters to mm and shifted from UTC to Bangladesh Standard Time UTC+6) against 35 BMD daily station rain gauges (or NOAA GHCN-Daily), explicitly excluding ENACTS-BMD as independent truth because it blends station gauges, and produces 3 benchmark tasks for verisci.",
      stack: ["Python", "xarray", "NetCDF4", "pandas", "NumPy", "Matplotlib", "pytest", "Quarto"],
      datasets: "CHIRPS daily (UCSB Climate Hazards Center, 0.05°), ERA5 hourly precipitation (Copernicus CDS, 0.25°), and BMD 35-station daily rain gauge dataset (1991–2020, Mendeley Data / NOAA GHCN-Daily).",
      validationTruth: "Independent Station Rain Gauge Observations (BMD / NOAA GHCN-Daily) + Synthetic Time-Series Unit Tests.",
      steps: [
        "Step 1–2: Submit Copernicus CDS ERA5 request in Week 1; verify BMD station dataset license/quality and extract CHIRPS & ERA5 values at station coordinates.",
        "Step 3–4: Convert ERA5 hourly accumulation (meters) to daily totals (mm) respecting Bangladesh Standard Time (UTC+6); compute ETCCDI indices (Rx1day, Rx5day, R95p, CDD with wet day >= 1 mm).",
        "Step 5–6: Calculate JJAS monsoon bias, RMSE, and correlation; map regional product performance across Bangladesh and export the derived station comparison table for L1 Kaggle.",
        "3 Benchmark Tasks: Add to verisci: (1) ERA5 hourly-to-daily UTC+6 & unit conversion, (2) Rx5day calculation, and (3) CDD cross-year boundary dry-spell edge case."
      ],
      outputs: [
        "1. Public validation repository: bd-rain-extremes",
        "2. 6 Diagnostic regional & seasonal comparison figures",
        "3. Derived station-level comparison table (input for L1 Kaggle Dataset)",
        "4. Unit & synthetic time-series pytest suite (known Rx5day & unit conversion)",
        "5. 3 Verified Earth tasks merged into verisci",
        "6. Diátaxis Technical Explainer & Data Provenance README"
      ],
      takeaway: "Proves climate NetCDF/Xarray mastery by catching unit, accumulation, timezone (UTC+6), and point-vs-grid representativeness traps.",
      verifyCmd: "git clone https://github.com/MkMeheran/bd-rain-extremes.git && cd bd-rain-extremes && uv run pytest && uv run python src/evaluate_extremes.py",
      asciiTree: `bd-rain-extremes/
├── .github/workflows/ci.yml
├── data/README.md                  # CHIRPS, ERA5 & BMD license/provenance audit
├── figures/                        # 6 regional bias, RMSE & JJAS correlation plots
├── outputs/
│   └── station_etccdi_comparison.csv
├── src/
│   ├── era5_utc6_daily.py          # Hourly meters (UTC) -> Daily mm (UTC+6)
│   ├── etccdi_indices.py           # Rx1day, Rx5day, R95p, CDD (wet day >= 1mm)
│   └── evaluate_extremes.py        # Station bias, RMSE, correlation by region
├── tests/test_synthetic_etccdi.py
├── pyproject.toml
└── README.md`,
      markdownTree: `- \`bd-rain-extremes/\`
  - \`.github/workflows/ci.yml\` — Automated synthetic index & unit conversion tests
  - \`data/README.md\` — Provenance & license verification for \`CHIRPS\`, \`ERA5\`, and \`BMD\`
  - \`figures/\` — 6 diagnostic figures
  - \`outputs/station_etccdi_comparison.csv\` — Derived table for \`L1\` Kaggle Dataset
  - \`src/era5_utc6_daily.py\`, \`etccdi_indices.py\`, \`evaluate_extremes.py\`
  - \`tests/test_synthetic_etccdi.py\``
    },
    {
      id: "proj_p2",
      code: "v4 P3 · Hydrology & Engineering (M2–M3, ~25h)",
      title: "P3: Conceptual Rainfall–Runoff Model on CAMELS — 3-Layer NumPy HBV vs. SAC-SMA (rainfall-runoff-camels)",
      category: "Geospatial & Earth",
      months: "Months 2 – 3 (~25 hrs, includes 3 verisci tasks)",
      hours: "25 hrs",
      tracksServed: "Earth & Environmental + Physical Sciences + Engineering Sciences + Read the Docs TW",
      problem: "How well does a parsimonious 3-layer conceptual rainfall–runoff model written from scratch in NumPy capture observed daily streamflow across humid, arid, and snow-dominated catchments compared to the established SNOW-17 + SAC-SMA model in CAMELS?",
      novelty: "Implements a 3-layer HBV-style model (degree-day snow, soil moisture accounting, fast & slow reservoirs, channel routing) in pure NumPy calibrated via SciPy differential_evolution across 8–10 diverse CAMELS basins (Addor et al. 2017, HESS 21, 5293; DOI: 10.5065/D6MW2F4D), evaluating NSE, KGE, bias, and log-NSE against mean flow, daily climatology, and SAC-SMA, and plotting the top-N parameter equifinality envelope.",
      stack: ["Python", "NumPy", "SciPy (differential_evolution)", "pandas", "Sphinx / Read the Docs", "numpydoc", "pytest"],
      datasets: "CAMELS US Catchment Attributes and Meteorology for Large-sample Studies (671 catchments, 1980–2014 daily forcing, observed streamflow & published SAC-SMA output; DOI: 10.5065/D6MW2F4D).",
      validationTruth: "Observed Gauge Streamflow + Published CAMELS SAC-SMA Output + Water Balance & Synthetic Parameter Identifiability Tests.",
      steps: [
        "Step 1: Select 8–10 diverse CAMELS basins (humid, arid, snow-dominated) and convert discharge (ft³/s) + basin area into specific runoff (mm/day).",
        "Step 2: Code the 3-layer HBV conceptual model in NumPy; configure a warm-up period, calibrate on the first ~15 years using SciPy differential_evolution, and validate on the remaining years.",
        "Step 3–5: Compute NSE, KGE, bias, and log-NSE against mean flow (NSE=0), daily climatology, and CAMELS SAC-SMA output; plot the equifinality envelope across top N parameter sets.",
        "3 Benchmark Tasks: Add to verisci: (1) discharge + area to mm/day unit conversion, (2) NSE vs KGE & baseline interpretation, and (3) calibration/warm-up/validation temporal split."
      ],
      outputs: [
        "1. Public validation repository: rainfall-runoff-camels",
        "2. Multi-basin hydrographs & Top-N parameter equifinality envelope plots",
        "3. 8–10 Basin comparative metric table (HBV vs Climatology vs SAC-SMA)",
        "4. Water-balance conservation & synthetic parameter identifiability pytest suite",
        "5. 3 Verified Hydrology/Engineering tasks merged into verisci",
        "6. Sphinx + numpydoc API documentation hosted on Read the Docs"
      ],
      takeaway: "Provides high-rigor hydrology and engineering simulation proof validated against observed streamflow and SAC-SMA.",
      verifyCmd: "git clone https://github.com/MkMeheran/rainfall-runoff-camels.git && cd rainfall-runoff-camels && uv run pytest && uv run python src/run_camels_eval.py",
      asciiTree: `rainfall-runoff-camels/
├── .github/workflows/ci.yml
├── docs/                           # Sphinx / Read the Docs numpydoc portal
├── data/camels_sample_8basins/     # Forcing, basin area, observed flow & SAC-SMA
├── outputs/
│   ├── basin_metrics_nse_kge.csv
│   └── hydrographs_equifinality.png
├── src/
│   ├── hbv_numpy.py                # 3-layer snow, soil, fast/slow reservoir & routing
│   ├── calibrate_de.py             # SciPy differential_evolution with warm-up
│   └── metrics_hydro.py            # NSE, KGE, log-NSE, climatology & mm/day conversion
├── tests/
│   ├── test_water_balance.py
│   └── test_identifiability.py
├── .readthedocs.yaml
├── pyproject.toml
└── README.md`,
      markdownTree: `- \`rainfall-runoff-camels/\`
  - \`.github/workflows/ci.yml\` — Runs water-balance, identifiability, and \`doctest\` checks
  - \`docs/\` — Multi-version Read the Docs documentation for the HBV Python package
  - \`data/camels_sample_8basins/\` — 8–10 diverse CAMELS basins (\`DOI: 10.5065/D6MW2F4D\`)
  - \`src/hbv_numpy.py\`, \`calibrate_de.py\`, \`metrics_hydro.py\`
  - \`tests/test_water_balance.py\`, \`test_identifiability.py\``
    },
    {
      id: "proj_p3",
      code: "v4 P4 · Spatial ML & Earth (M3–M4, ~21h)",
      title: "P4: Spatial Leakage Study on Sentinel-2 — Random vs. Spatial-Block Cross-Validation (spatial-leakage-s2)",
      category: "Spatial ML & GeoAI",
      months: "Months 3 – 4 (~21 hrs, includes 3 verisci tasks)",
      hours: "21 hrs",
      tracksServed: "ML Engineering + Earth & Environmental + Research Track",
      problem: "How much does random K-Fold cross-validation artificially inflate accuracy on spatially autocorrelated remote-sensing data, and how does Macro-F1 decay as spatial block size increases from 0.5 km to 5 km?",
      novelty: "Samples stratified points across water, mangrove, cropland, and built-up classes on a ~50×50 km coastal belt AOI using Sentinel-2 L2A bands/indices (NDVI, NDWI), Copernicus DEM slope, and ESA WorldCover (10m, documenting noisy-label limitations), comparing Random KFold vs Spatial-Block GroupKFold (0.5, 1, 2, 5 km) with block bootstrap intervals and cross-region distribution shift across Logistic, RF, XGBoost, and LightGBM.",
      stack: ["scikit-learn", "XGBoost", "LightGBM", "GeoPandas", "Rasterio", "NumPy", "pytest"],
      datasets: "Sentinel-2 L2A (Earth Engine / Planetary Computer), ESA WorldCover 10m, and Copernicus DEM across a ~50×50 km mixed coastal AOI.",
      validationTruth: "Disjoint Spatial Block Split (pytest assertion of zero train/test geometry overlap) + Fixed-Seed Determinism.",
      steps: [
        "Step 1–2: Sample stratified random points by land-cover class; extract Sentinel-2 spectral bands, NDVI, NDWI, and Copernicus DEM slope.",
        "Step 3–5: Train Logistic baseline, RandomForest, XGBoost, and LightGBM under Random KFold vs Spatial-Block GroupKFold (0.5, 1, 2, 5 km); compute Macro-F1 with block bootstrap intervals.",
        "Step 6: Train in one area and test in a spatially separate area to show distribution shift; author a 2-page technical writeup.",
        "3 Benchmark Tasks: Add to verisci: (1) justifying spatial vs random CV, (2) catching train/test geometry overlap, and (3) selecting proper metrics under class imbalance."
      ],
      outputs: [
        "1. Public validation repository: spatial-leakage-s2",
        "2. Block-size (0.5, 1, 2, 5 km) vs Macro-F1 score-gap curve with bootstrap CIs",
        "3. Out-of-region distribution shift evaluation table",
        "4. 2-Page technical writeup (including ESA WorldCover noisy-label analysis)",
        "5. Pytest assertion confirming zero train/test block geometry overlap",
        "6. 3 Verified Spatial ML tasks merged into verisci"
      ],
      takeaway: "Directly satisfies the 'diagnose spatial data leakage and invalid cross-validation' requirement in ML and Earth postings.",
      verifyCmd: "git clone https://github.com/MkMeheran/spatial-leakage-s2.git && cd spatial-leakage-s2 && uv run pytest && uv run python src/run_block_cv.py",
      asciiTree: `spatial-leakage-s2/
├── .github/workflows/ci.yml
├── data/coastal_aoi_sample.parquet
├── outputs/
│   ├── block_size_decay_curve.png
│   └── spatial_leakage_writeup.md  # 2-page report + noisy label limitations
├── src/
│   ├── spatial_blocks.py           # 0.5, 1, 2, 5 km grid blocking & disjoint checks
│   └── run_block_cv.py             # Logistic, RF, XGBoost, LightGBM + block bootstrap
├── tests/test_disjoint_geometries.py
├── pyproject.toml
└── README.md`,
      markdownTree: `- \`spatial-leakage-s2/\`
  - \`.github/workflows/ci.yml\` — Automated geometry disjointness & fixed-seed CI
  - \`outputs/block_size_decay_curve.png\` & 2-page \`spatial_leakage_writeup.md\`
  - \`src/spatial_blocks.py\`, \`run_block_cv.py\`
  - \`tests/test_disjoint_geometries.py\` — Asserts zero overlap between train and test blocks`
    },
    {
      id: "proj_p4",
      code: "v4 P5 · Math & Stats Sims (M3–M4, ~17h)",
      title: "P5: Statistical Method Validation by Simulation — 10,000-Rep Monte Carlo Suite (stat-validation-sims)",
      category: "Math, Stats & Optimization",
      months: "Months 3 – 4 (~17 hrs, includes 3 verisci tasks)",
      hours: "17 hrs",
      tracksServed: "Math & Statistics (Core Specialization) + Research Statistical Rigor",
      problem: "Under what specific sample sizes, skewness, variance inequalities, and sequential peeking regimes do common statistical methods violate their nominal 95% coverage or 5% Type I error guarantees?",
      novelty: "Implements 4 vectorized 10,000-repetition NumPy Monte Carlo simulation studies with explicit Monte Carlo error bounds √(p(1-p)/R) and fixed seeds (following Morris, White & Crowther 2019, Statistics in Medicine), coding BCa bootstrap from scratch and verifying it against scipy.stats.bootstrap.",
      stack: ["Python", "NumPy (vectorized)", "SciPy (stats)", "Matplotlib", "pytest"],
      datasets: "Seeded parametric distributions (normal, lognormal, heavy-tailed t/Pareto, and correlated multivariate normal arrays).",
      validationTruth: "Theoretical Analytical Expectations (95% Coverage, 5% Type I Error within √(p(1-p)/R) on normal large-n cases).",
      steps: [
        "Sim 1: Bootstrap Percentile vs custom BCa interval coverage across n = 10, 30, 100 on normal, lognormal, and heavy-tailed distributions.",
        "Sim 2: Student's vs Welch's t-test Type I error under unequal variances and unequal sample sizes.",
        "Sim 3: Multiple testing — Bonferroni (FWER) vs Benjamini–Hochberg (FDR) under independent and correlated tests.",
        "Sim 4: Optional stopping — false-positive inflation from repeated sequential peeking; package 3 tasks into verisci."
      ],
      outputs: [
        "1. Public validation repository: stat-validation-sims",
        "2. 4 Publication-grade Monte Carlo diagnostic figures with √(p(1-p)/R) error bands",
        "3. Custom BCa bootstrap implementation verified against scipy.stats.bootstrap",
        "4. Pytest suite asserting known-truth normal large-n coverage within MC error",
        "5. 3 Verified Math & Statistics tasks merged into verisci",
        "6. Core interview specialization proof: 'Probability & statistical inference validated by simulation'"
      ],
      takeaway: "Establishes your core Math & Stats specialization ('probability and statistical inference validated by simulation').",
      verifyCmd: "git clone https://github.com/MkMeheran/stat-validation-sims.git && cd stat-validation-sims && uv run pytest && uv run python src/run_all_sims.py",
      asciiTree: `stat-validation-sims/
├── .github/workflows/ci.yml
├── figures/                        # 4 diagnostic coverage & Type I error plots
├── src/
│   ├── bootstrap_bca.py            # Custom BCa vs Percentile (n=10, 30, 100)
│   ├── welch_vs_student.py         # Unequal variance & sample size Type I error
│   ├── bonferroni_vs_bh.py         # Independent & correlated multiple testing
│   └── optional_stopping.py        # Sequential peeking false-positive inflation
├── tests/test_mc_bounds.py         # Asserts normal large-n within sqrt(p(1-p)/R)
├── pyproject.toml
└── README.md`,
      markdownTree: `- \`stat-validation-sims/\`
  - \`.github/workflows/ci.yml\` — Automated Monte Carlo bound & seed determinism CI
  - \`figures/\` — 4 diagnostic simulation figures
  - \`src/bootstrap_bca.py\`, \`welch_vs_student.py\`, \`bonferroni_vs_bh.py\`, \`optional_stopping.py\`
  - \`tests/test_mc_bounds.py\` — Asserts empirical coverage lies within $\sqrt{p(1-p)/R}$`
    },
    {
      id: "proj_p5",
      code: "v4 P6 · Optimization & TSPLIB (M4–M5, ~17h)",
      title: "P6: TSP Heuristic vs. Exact MIP vs. Published Optimum on TSPLIB (tsp-validated)",
      category: "Math, Stats & Optimization",
      months: "Months 4 – 5 (~17 hrs, includes 3 verisci tasks)",
      hours: "17 hrs",
      tracksServed: "Math & Statistics + Operations Research & Optimization",
      problem: "How far do standard Traveling Salesperson Problem (TSP) heuristics deviate from published TSPLIB exact optimums, and can your exact Mixed-Integer Programming solver recover the exact published optimum?",
      novelty: "Implements the strict TSPLIB EUC_2D nearest-integer distance rounding convention, custom Nearest Neighbour (NN) and NN + 2-opt heuristics, Google OR-Tools Guided Local Search, LP relaxation / 1-tree lower bounds, and an Exact MIP solver in Pyomo + HiGHS using degree constraints and iterative lazy subtour elimination across eil51 (426), berlin52 (7542), st70 (675), eil76 (538), and kroA100 (21282).",
      stack: ["Python", "Pyomo", "HiGHS Solver", "Google OR-Tools", "NumPy", "pytest"],
      datasets: "Official TSPLIB benchmark instances: eil51 (opt=426), berlin52 (opt=7542), st70 (opt=675), eil76 (opt=538), and kroA100 (opt=21282).",
      validationTruth: "Published TSPLIB Exact Optimums (426, 7542, 675, 538, 21282) + Hamiltonian Cycle Validity Assertions.",
      steps: [
        "Step 1–2: Build TSPLIB parser enforcing EUC_2D nearest-integer distance rounding; implement Nearest Neighbour and NN + 2-opt from scratch.",
        "Step 3–4: Run OR-Tools Guided Local Search; implement Exact MIP in Pyomo + HiGHS with degree constraints + lazy subtour elimination on eil51, berlin52, and st70 (with time limits on larger instances).",
        "Step 5–6: Compute LP relaxation / 1-tree lower bounds and generate the comparative table (instance, known optimum, tour length per method, gap %, runtime).",
        "3 Benchmark Tasks: Add to verisci: (1) TSPLIB EUC_2D rounding convention, (2) subtour detection, and (3) verifying optimality claims via lower bounds."
      ],
      outputs: [
        "1. Public validation repository: tsp-validated",
        "2. Comparative Optimality Gap % & Runtime Table across 5 TSPLIB instances",
        "3. Lazy Subtour Elimination Exact MIP Solver (Pyomo + HiGHS)",
        "4. Pytest suite asserting Hamiltonian cycle validity and Exact == Known Optimum",
        "5. 3 Verified Optimization tasks merged into verisci"
      ],
      takeaway: "Demonstrates exact mathematical programming (Pyomo + HiGHS lazy cuts) and combinatorial optimization against known TSPLIB truth.",
      verifyCmd: "git clone https://github.com/MkMeheran/tsp-validated.git && cd tsp-validated && uv run pytest && uv run python src/solve_tsplib.py",
      asciiTree: `tsp-validated/
├── .github/workflows/ci.yml
├── data/tsplib/                    # eil51, berlin52, st70, eil76, kroA100
├── outputs/tsplib_gap_table.csv
├── src/
│   ├── tsplib_euc2d.py             # Nearest-integer EUC_2D distance rounding
│   ├── heuristics_2opt.py          # Custom NN + 2-opt & OR-Tools GLS wrapper
│   └── exact_pyomo_highs.py        # Degree constraints + lazy subtour cuts + LB
├── tests/test_tsplib_opt.py        # Valid Hamiltonian cycle & Exact == Optimum
├── pyproject.toml
└── README.md`,
      markdownTree: `- \`tsp-validated/\`
  - \`.github/workflows/ci.yml\` — Runs Hamiltonian cycle & exact optimum verification
  - \`data/tsplib/\` — \`eil51\` (426), \`berlin52\` (7542), \`st70\` (675), \`eil76\` (538), \`kroA100\` (21282)
  - \`src/tsplib_euc2d.py\`, \`heuristics_2opt.py\`, \`exact_pyomo_highs.py\`
  - \`tests/test_tsplib_opt.py\` — Asserts exact tour length matches published optimum`
    },
    {
      id: "proj_p7_num",
      code: "v4 P7 · Numerical & Physics (M5, ~21h)",
      title: "P7: Numerical Methods & Physics Validation Suite (numerics-validated)",
      category: "Math, Stats & Optimization",
      months: "Month 5 (~21 hrs, includes 3 verisci tasks)",
      hours: "21 hrs",
      tracksServed: "Math & Statistics + Physical Sciences",
      problem: "Do custom numerical implementations of root-finding, ODE integrators, harmonic oscillators, stiff equations, 1D heat PDEs, and ill-conditioned linear systems obey theoretical convergence orders and physical conservation laws?",
      novelty: "Implements and validates 7 core numerical/physics modules from scratch against analytical solutions, symplectic energy conservation, CFL stability limits (r = αΔt/Δx² <= 1/2), and scipy.integrate.solve_ivp.",
      stack: ["Python", "NumPy", "SciPy (integrate, linalg)", "Matplotlib", "pytest"],
      datasets: "Analytical benchmark equations, harmonic oscillator phase space, Fourier heat series, and Hilbert matrices.",
      validationTruth: "Theoretical Convergence Orders (±0.2 tolerance on log–log slopes: 1, 4, 2) + Analytical Fourier Series & Energy Conservation.",
      steps: [
        "Modules 1–3: Implement root finding (bisection, secant, Newton) convergence order; ODE solvers (Euler, RK4, velocity Verlet) log–log error slopes (expected 1, 4, 2); and harmonic oscillator energy drift (Euler vs Verlet).",
        "Modules 4–7: Implement stiff ODE (explicit instability vs backward Euler stability); 1D heat equation explicit finite difference (r <= 1/2) vs Fourier series analytic solution; Hilbert matrix condition number error; and solve_ivp comparison.",
        "3 Benchmark Tasks: Add to verisci: (1) convergence order measurement, (2) Euler vs Verlet energy drift, and (3) 1D heat equation stability limit."
      ],
      outputs: [
        "1. Public validation repository: numerics-validated",
        "2. Log–log step-size vs error convergence plots & symplectic energy drift curves",
        "3. 1D Heat PDE vs Analytical Fourier Series stability report",
        "4. Pytest suite asserting empirical orders within ±0.2 of theoretical values",
        "5. 3 Verified Numerical/Physics tasks merged into verisci"
      ],
      takeaway: "Covers both Math & Stats (numerical analysis/conditioning) and Physical Sciences (conservation laws & PDE stability).",
      verifyCmd: "git clone https://github.com/MkMeheran/numerics-validated.git && cd numerics-validated && uv run pytest && uv run python src/run_numerics_suite.py",
      asciiTree: `numerics-validated/
├── .github/workflows/ci.yml
├── figures/                        # Log-log convergence slopes & energy drift plots
├── src/
│   ├── root_finding.py             # Bisection, Secant, Newton convergence order
│   ├── ode_integrators.py          # Euler (1), RK4 (4), Velocity Verlet (2) & stiff
│   ├── heat_1d_fourier.py          # Explicit FD (r <= 0.5) vs Fourier analytic
│   └── hilbert_conditioning.py     # Hilbert matrix condition number error
├── tests/test_orders_energy.py     # Asserts order within +-0.2 & energy conservation
├── pyproject.toml
└── README.md`,
      markdownTree: `- \`numerics-validated/\`
  - \`.github/workflows/ci.yml\` — Automated convergence order and PDE stability CI
  - \`src/root_finding.py\`, \`ode_integrators.py\`, \`heat_1d_fourier.py\`, \`hilbert_conditioning.py\`
  - \`tests/test_orders_energy.py\` — Asserts measured order within $\pm 0.2$ of theoretical order`
    },
    {
      id: "proj_p8_ml",
      code: "v4 P8 · ML Pitfalls & PyTorch (M4–M6, ~20h)",
      title: "P8: ML Pitfalls Lab (6 Traps × 20 Repeats) + PyTorch 10-Seed Reproducibility (ml-pitfalls-lab)",
      category: "Spatial ML & GeoAI",
      months: "Months 4 – 6 (~20 hrs, includes 3 verisci tasks)",
      hours: "20 hrs",
      tracksServed: "ML Engineering + Data Science + AI Evaluation",
      problem: "How much do 6 pervasive ML pipeline bugs inflate validation metrics across repeated trials, and how much variance occurs across 10 random seeds in PyTorch when deterministic flags or learning rates are misconfigured?",
      novelty: "Pairs a 20-repetition 'Honest vs Leaky' experimental lab across 6 classic ML pitfalls on license-clean scikit-learn/OpenML tabular datasets with a 10-seed PyTorch MLP/CNN reproducibility and learning-rate divergence study benchmarked against XGBoost.",
      stack: ["PyTorch", "scikit-learn", "XGBoost", "OpenML", "NumPy", "pytest"],
      datasets: "2–3 public, license-verified tabular datasets from scikit-learn / OpenML.",
      validationTruth: "Train/Test Index Disjointness Assertions + Bitwise Identical Output Under Fixed PyTorch Seeds.",
      steps: [
        "Part 1 (~8h): Run 20 repetitions of 6 'Honest vs Leaky' pairs: (1) scaling/feature selection before split, (2) target leakage, (3) train/test duplicates, (4) random split on time-series, (5) Accuracy vs PR-AUC on imbalanced data, (6) hyperparameter tuning on test set.",
        "Part 2 (~6h): Train a small MLP or CNN across 10 seeds in PyTorch comparing deterministic setting ON vs OFF, learning-rate divergence, and side-by-side comparison with an XGBoost baseline.",
        "3 Benchmark Tasks (~6h): Add to verisci: (1) pre-split scaling leakage, (2) PR-AUC vs Accuracy on imbalanced data, and (3) PyTorch seed variance & determinism."
      ],
      outputs: [
        "1. Public validation repository: ml-pitfalls-lab",
        "2. 6-Pitfall Score Inflation Table with 20-repeat confidence intervals",
        "3. 10-Seed PyTorch Variance & Determinism Plot vs XGBoost baseline",
        "4. Pytest suite asserting zero train/test index overlap and deterministic seed match",
        "5. 3 Verified ML Engineering tasks merged into verisci (completing all 21 tasks)"
      ],
      takeaway: "Gives concrete, experimental proof of catching every major ML validation flaw tested in ML Engineering interviews.",
      verifyCmd: "git clone https://github.com/MkMeheran/ml-pitfalls-lab.git && cd ml-pitfalls-lab && uv run pytest && uv run python src/run_pitfalls.py",
      asciiTree: `ml-pitfalls-lab/
├── .github/workflows/ci.yml
├── outputs/
│   ├── six_pitfalls_20x_table.csv
│   └── pytorch_10seed_variance.png
├── src/
│   ├── six_pitfalls.py             # 6 leaky vs honest pairs × 20 repetitions
│   └── pytorch_determinism.py      # 10-seed MLP/CNN deterministic toggle vs XGBoost
├── tests/test_no_leakage.py        # Disjoint train/test indices & seed determinism
├── pyproject.toml
└── README.md`,
      markdownTree: `- \`ml-pitfalls-lab/\`
  - \`.github/workflows/ci.yml\` — Automated index disjointness & PyTorch seed CI
  - \`outputs/six_pitfalls_20x_table.csv\` & \`pytorch_10seed_variance.png\`
  - \`src/six_pitfalls.py\`, \`pytorch_determinism.py\`
  - \`tests/test_no_leakage.py\``
    },
    {
      id: "proj_tw_mission",
      code: "Mission PDF · Technical Writing & Research Suite",
      title: "Docs-as-Code Portal (meheran.dev/docs), Read the Docs Python Library, OpenAPI 3.1/3.2 Suite & PRISMA Scoping Review",
      category: "API & Docs Engineering",
      months: "M1 – M6 (Integrated across daily 90–120m Atomic Commit Workflow)",
      hours: "Integrated with 3h/wk Reading & Writing Routine",
      tracksServed: "Junior/Software TW + Developer/API Documentation Writer + Documentation Engineer + Scientific TW + Academic RA",
      problem: "Over 80% of 2026 technical writing and computational RA postings reject static blog posts and unverified AI summaries, filtering strictly for Docs-as-Code (Git, Quarto/Sphinx, Vale CI linting), Diátaxis quadrant separation, executable OpenAPI 3.1 schemas, accepted open-source PRs, and Zotero/Crossref DOI-backed literature matrices.",
      novelty: "Implements the complete 29-page Mission PDF architecture alongside your v4 repositories: (1) Quarto/MkDocs central hub at meheran.dev/docs with 3-line Decision Context headers, (2) Multi-version Sphinx + numpydoc Python library documentation on Read the Docs (100% doctest pass), (3) OpenAPI 3.1/3.2 YAML specification + interactive Swagger UI & HTTP 400/401/422/429 error catalog, (4) GeoPandas vs PostGIS vs DuckDB Spatial join benchmark explainer, and (5) 15–25 paper OpenAlex/Zotero Comparative Methodology Matrix + PRISMA Scoping Review on Zenodo/OSF.",
      stack: ["Quarto", "Sphinx / Read the Docs", "numpydoc", "doctest", "OpenAPI 3.1/3.2", "Swagger UI", "Vale (Google Style)", "Zotero + Better BibTeX", "Zenodo / OSF / ORCID"],
      datasets: "Bangladesh administrative boundary topologies (EPSG:4326 vs EPSG:32646/32645 for Day 1 Guide), PostGIS/DuckDB vector join benchmarks, and 25+ Crossref DOI peer-reviewed studies.",
      validationTruth: "Zero Vale Style Errors + 100% pytest --doctest-modules Pass + Zero OpenAPI Schema Errors + >=80/100 (M1–M5) & >=85/100 (M6) Rubric Gate.",
      steps: [
        "M1: Deploy Quarto/MkDocs portal on meheran.dev/docs, configure ORCID + public Zotero BibTeX repo, and publish Day 1 GeoPandas Topology & CRS How-To Guide (.make_valid() vs .buffer(0), UTM 45N/46N) + 5 Diátaxis guides & 4 Three-Pass paper reviews.",
        "M2: Document your reusable Python spatial/climate module with numpydoc docstrings on Read the Docs (100% doctest pass) and publish a 15-paper synthesis matrix + 2,500-word thematic literature review on Zenodo.",
        "M3: Author an executable OpenAPI 3.1/3.2 REST API specification with interactive Swagger UI, authentication/rate-limit guide, and HTTP error catalog; register a formal research protocol on OSF.",
        "M4–M6: Publish 2 Comparative Technical Analyses (GeoPandas vs PostGIS vs DuckDB Spatial; Spatial vs Random CV), Interpretable ML (SHAP/ALE) Model Card, 3,000-word OSF PRISMA Scoping Review, and curate top 10–12 artifacts scoring >=85/100."
      ],
      outputs: [
        "1. Live Docs-as-Code Hub at meheran.dev/docs & Verification Table at meheran.dev/proof",
        "2. Day 1 GeoPandas Topology & CRS How-To Guide + 5 Foundational Diátaxis Guides",
        "3. Hosted Multi-Version Python Package Documentation on Read the Docs (100% doctest)",
        "4. OpenAPI 3.1/3.2 YAML Specification + Interactive Swagger UI & Error Catalog",
        "5. GeoPandas vs. PostGIS vs. DuckDB Spatial Benchmark Explainer & SHAP/ALE Model Card",
        "6. 25-Paper Zotero/Crossref Methodology Matrix & OSF/Zenodo PRISMA Scoping Review"
      ],
      takeaway: "Fulfils 100% of the 29-page Mission PDF requirements for Technical Writing and Academic RA roles while sharing the exact same Git/CI/DOI infrastructure as v4.",
      verifyCmd: "vale docs/ && uv run pytest --doctest-modules && quarto render docs/",
      asciiTree: `meheran-docs-and-research-hub/
├── .github/workflows/docs-ci.yml   # Vale (Google Style) + doctest + OpenAPI schema check
├── .vale.ini                       # Enforces active voice & zero throat-clearing
├── api_reference/
│   └── openapi.yaml                # OpenAPI 3.1/3.2 spec + 400/401/422/429 error catalog
├── docs/
│   ├── tutorials/                  # Diataxis Learning-oriented lessons
│   ├── how-to/
│   │   └── geopandas-crs-topology.qmd # Day 1 Assignment (.make_valid & EPSG:32646)
│   ├── explanations/
│   │   └── spatial-joins-duckdb-postgis.qmd
│   └── research/
│       ├── methodology_matrix_25papers.qmd
│       └── prisma_scoping_review.qmd
├── references.bib                  # Auto-exported from Zotero + Better BibTeX (Crossref DOIs)
├── _quarto.yml
├── .readthedocs.yaml
└── CITATION.cff`,
      markdownTree: `- \`meheran-docs-and-research-hub/\`
  - \`.github/workflows/docs-ci.yml\` — Runs \`Vale\`, \`pytest --doctest-modules\`, and OpenAPI validation
  - \`.vale.ini\` — Google Developer Documentation Style Guide enforcement
  - \`api_reference/openapi.yaml\` — Executable OpenAPI 3.1/3.2 specification + Swagger UI
  - \`docs/how-to/geopandas-crs-topology.qmd\` — Day 1 GeoPandas Topology & CRS How-To Guide
  - \`docs/explanations/spatial-joins-duckdb-postgis.qmd\` — \`GeoPandas\` vs \`PostGIS\` vs \`DuckDB Spatial\`
  - \`docs/research/\` — 25-paper Zotero methodology matrix & OSF/Zenodo PRISMA scoping review
  - \`references.bib\`, \`_quarto.yml\`, \`.readthedocs.yaml\`, \`CITATION.cff\``
    },
    {
      id: "proj_ext",
      code: "v4 Lanes L1–L3 & Optional O1–O5",
      title: "Mandatory Proof Lanes (L1 Kaggle, L2 OSS PRs, L3 Report) & Optional 15h/wk Packs (O1–O5)",
      category: "Wave 2 & 3 Extensions",
      months: "M1 – M6 (24 hrs for L1–L3; Optional 68 hrs for O1–O5 at 15 hrs/wk)",
      hours: "24 hrs Core Lanes (L1–L3) + Optional O1–O5",
      tracksServed: "External Verification (Kaggle, OSS Maintainers, EarthArXiv/Zenodo, JOSS) + Engineering/Life/Privacy",
      problem: "Self-published repositories alone occupy Tier 4–5 of the Proof Ladder; external third-party validation (Kaggle community votes, upstream open-source maintainers, preprint readers, and JOSS peer reviewers) is required to reach Tiers 1–3.",
      novelty: "Separates mandatory, budget-fitted lanes (L1 Kaggle Dataset + Notebook 8h, L2 2 OSS PRs + 5 Reviews 8h, L3 4–6 page Technical Report 8h) from optional 15 hr/wk extensions ordered strictly as O1 (Landsat vs MODIS LST, 20h) -> O2 (Hydraulics 5-task pack, 12h) -> O5 (JOSS submission of verisci, 8h) -> O3 (Ecology 6-task pack, 10h) -> O4 (PrivacyEval-mini 10 scenarios, 18h).",
      stack: ["Kaggle API", "Git / GitHub PRs", "Quarto / LaTeX", "Inspect AI", "JOSS paper.md"],
      datasets: "P2 derived BMD/CHIRPS/ERA5 station table (L1), Landsat 8/9 C2 L2 vs MODIS LST (O1), textbook hydraulic worked examples (O2), analytical ODE ecology models (O3), and 10 synthetic privacy scenarios (O4).",
      validationTruth: "Kaggle System & Upvotes (L1) + Upstream Maintainer Merge (L2) + MODIS LST Product (O1) + Textbook Worked Examples (O2) + Analytic ODEs (O3) + JOSS Editor/Reviewer (O5).",
      steps: [
        "L1 (M1, M4, ~8h): Open Kaggle profile in M1; in M4 publish P2's license-verified station comparison table as a Kaggle Dataset + clean P2/P3 analytical notebook.",
        "L2 (M2, ~8h): Submit 2 small documentation, test, or reproducible bug-fix PRs to xarray, SciPy, scikit-learn, Pyomo, or rasterio + log 5 substantive PR reviews.",
        "L3 (M6, ~8h): Write a 4–6 page human-authored Technical Report summarizing the verifiable benchmark design, 7 validation studies (P2–P8), LLM failure taxonomy, and limitations; publish on EarthArXiv or Zenodo.",
        "O1 & O2 (Optional at 15h/wk): O1 Landsat 8/9 (30m) vs MODIS (1km) LST comparison (~20h); O2 Hydraulics 5-task pack (Manning's normal depth, rational method peak runoff, stormwater pipe sizing, ~12h).",
        "O5, O3 & O4 (Optional at 15h/wk): O5 JOSS submission (~8h, requires >=6 months public history on verisci); O3 Ecology 6-task pack (~10h); O4 PrivacyEval-mini 10 synthetic scenarios (~18h)."
      ],
      outputs: [
        "1. L1: Published Kaggle Dataset + Analytical Notebook",
        "2. L2: 2 Upstream Open-Source PRs + 5 Substantive PR Reviews",
        "3. L3: 4–6 Page Technical Report on EarthArXiv or Zenodo",
        "4. O1 & O2 (Optional): Landsat vs MODIS LST study & 5-task Hydraulics pack",
        "5. O3 & O4 (Optional): 6-task Ecology pack & 10-scenario PrivacyEval-mini",
        "6. O5 (Optional): JOSS software paper submission for verisci"
      ],
      takeaway: "At 12 hrs/wk (~194h build budget), complete P1–P9 + L1–L3; at 15 hrs/wk (~255h capacity), add O1 -> O2 -> O5 -> O3 -> O4.",
      verifyCmd: "uv run pytest && git log --oneline -n 5",
      asciiTree: `v4-lanes-and-optional-packs/
├── l1_kaggle_release/
│   ├── dataset-metadata.json       # P2 station_etccdi_comparison.csv metadata
│   └── bd_rain_extremes_analysis.ipynb
├── l2_oss_contributions/
│   └── PROOF_OSS_LINKS.md          # 2 PR links (xarray/SciPy/sklearn/Pyomo/rasterio) + 5 reviews
├── l3_technical_report/
│   └── verisci_benchmark_report.qmd # 4-6 page human-written report (EarthArXiv/Zenodo)
├── o1_landsat_vs_modis_lst/        # Optional (20h): 30m vs 1km LST bias & RMSE
├── o2_hydraulics_minipack/         # Optional (12h): 5 tasks (Manning, Rational, pipe sizing)
├── o3_ecology_minipack/            # Optional (10h): 6 tasks (Lotka-Volterra, Shannon, Hardy-Weinberg)
├── o4_privacy_eval_mini/           # Optional (18h): 10 synthetic scenarios + human labels
└── o5_joss_submission/             # Optional (8h): paper.md & paper.bib for verisci`,
      markdownTree: `- \`v4-lanes-and-optional-packs/\`
  - \`l1_kaggle_release/\` — \`P2\` derived station dataset & clean notebook (\`~8h\`)
  - \`l2_oss_contributions/\` — 2 upstream PRs + 5 substantive PR reviews (\`~8h\`)
  - \`l3_technical_report/\` — 4–6 page human-written report on EarthArXiv/Zenodo (\`~8h\`)
  - \`o1_landsat_vs_modis_lst/\` — Optional (\`~20h\`): Landsat 8/9 (30m) vs MODIS (1km) LST
  - \`o2_hydraulics_minipack/\` — Optional (\`~12h\`): 5 textbook-validated water resources tasks
  - \`o3_ecology_minipack/\` — Optional (\`~10h\`): 6 analytical ODE & diversity ecology tasks
  - \`o4_privacy_eval_mini/\` — Optional (\`~18h\`): 10 synthetic GDPR/CCPA agent scenarios
  - \`o5_joss_submission/\` — Optional (\`~8h\`): \`paper.md\` for \`verisci\` JOSS submission`
    }
  ],

  // Clean Architecture & Specification Reference for verisci
  verisciStarterFiles: {
    structure: `verisci/ (Flagship Benchmark Repository — Public from Day 1 for 6-Month JOSS Clock)
├── .github/
│   └── workflows/
│       └── ci.yml                  # Automated Dual-Pass pytest (Reference=PASS, Buggy=FAIL) + Vale
├── .vale.ini                       # Enforces Google Developer Documentation Style Guide
├── Dockerfile                      # Hermetic Python + Geospatial container for Inspect AI sandbox
├── CITATION.cff                    # Archival citation metadata synced with Zenodo & ORCID
├── LICENSE                         # MIT or Apache-2.0 License (OSI-approved, required by JOSS)
├── PROOF.md                        # Centralized Claim -> Artifact Link -> Verify Command table
├── pyproject.toml                  # PEP 621 metadata & locked dependencies via uv/conda
├── README.md                       # Problem statement, architecture, badges & reproduction command
├── results/
│   ├── model_runs/                 # Evaluation logs across 3-4 LLMs
│   ├── failure_taxonomy.md         # Categorized errors (CRS, NoData, Leakage, Units, Hallucinated API)
│   └── kappa_reliability.json      # 1-week self re-grade & peer grade Cohen's kappa
├── src/
│   └── verisci/
│       ├── __init__.py
│       └── harness.py              # Inspect AI @task, @scorer & Docker sandbox agent wrapper
├── tasks/
│   ├── earth_pack/                 # 15–20 tasks: CRS, raster/NoData, SAR/optical, ERA5/CHIRPS, MCLP
│   ├── math_stats_pack/            # 8–12 tasks: SymPy closed form, Exact MIP, Monte Carlo coverage
│   └── ml_validation_pack/         # 5–8 tasks: Pre-split scaling, Spatial Block CV, PR-AUC, Seed variance
└── tests/
    └── test_dual_pass.py           # CI gate asserting 100% reference pass & 100% buggy trap fail`,

    pyproject: `Task Folder Specification Contract (Every Task in verisci Must Contain These 6 Components):

1. prompt.md
   - Unambiguous problem statement, input dataset path, required coordinate reference system or mathematical convention, and exact JSON/numeric output schema.
   - Quality Gate: Tested on a KUET peer (across 3 sample tasks); any point where the peer hesitates is rewritten to eliminate ambiguity.

2. data/ (Micro-Snapshot + License)
   - Lightweight (<500 KB) real-world data slice or synthetic test case.
   - Explicit license documented in README (e.g., OpenStreetMap = ODbL with attribution; WorldPop / Copernicus / HDX COD-AB = CC-BY-4.0). Never upload raw multi-gigabyte datasets to Git.

3. solution.py (Reference Ground-Truth Implementation)
   - Clean, headless Python script with pinned random seeds that computes the exact verified ground-truth answer.

4. verifier.py (Deterministic Output & Invariant Grader)
   - Accepts valid alternative implementation paths using numeric tolerance (np.isclose / rtol / atol) while strictly verifying methodological invariants (e.g., target CRS == EPSG:32646, zero train/test geometry overlap).

5. rubric.md (Human & Model-Graded Evaluation Criteria)
   - Itemized point deductions for specific methodological errors; audited after 1 week via self re-grading and peer grading on 10 tasks to compute Cohen's kappa inter-rater reliability.

6. meta.yaml (Structured Task Metadata)
   - Records task_id, domain (earth / math_stats / ml / physical / engineering), difficulty, silent_failure_trap category, and data_license.`,

    harness: `Inspect AI Integration & Agentic Evaluation Specification (https://inspect.aisi.org.uk/):

1. Why Inspect AI Framework:
   - Open-source evaluation framework developed by the UK AI Security Institute & Meridian Labs (MIT License).
   - Provides native support for Task definitions, custom Scorers, multi-model evaluation logs, and Docker-isolated sandbox agent environments.

2. Standard Task Wrapper (geoeval_bd_suite):
   - Dynamically loads all task folders from tasks/, injects prompt.md, and grades model completions via the task's deterministic verifier.py.

3. Agentic Sandbox Task (geoeval_bd_sandbox_agent):
   - Runs inside an isolated Docker container with Python and Bash tools enabled.
   - Evaluates whether an AI agent can autonomously inspect a geospatial raster/vector snapshot, diagnose a CRS or NoData trap, execute a multi-step calculation, and submit the verified numeric output.`,

    exampleTask: `6-Category Silent Failure Taxonomy (Used When Running 3–4 LLMs in Month 4):

1. CRS & Projection Distortion:
   - Computing polygon area (.area) or metric buffers (.buffer()) in angular EPSG:4326 degrees, or ignoring the 90°E meridian boundary between UTM Zone 45N (EPSG:32645) and 46N (EPSG:32646) in Bangladesh.

2. Raster NoData, Alignment & Resampling Errors:
   - Failing to mask sentinel NoData values (e.g., -9999 or 65535) before computing zonal statistics, or applying bilinear interpolation to categorical land-cover rasters (ESA WorldCover).

3. Temporal & Spatial Aggregation Bugs:
   - Aggregating hourly ERA5 UTC precipitation to daily totals without shifting to Bangladesh Standard Time (UTC+6), or averaging gridded NetCDF climate data without cos(latitude) area weighting.

4. Validation & Data Leakage Flaws:
   - Applying Random K-Fold CV to spatially autocorrelated pixels instead of Spatial-Block GroupKFold, or fitting scalers/imputers before train/test splitting.

5. Mathematical & Numerical Instability:
   - Using naive two-pass variance instead of Welford's algorithm, ignoring EUC_2D integer rounding conventions in TSPLIB, or violating CFL stability limits (r > 0.5) in explicit PDE solvers.

6. Hallucinated APIs & Silent Unstated Assumptions:
   - Calling non-existent GeoPandas/Shapely/Pyomo methods or silently dropping invalid geometries with .buffer(0) instead of .make_valid().`,

    ciWorkflow: `Dual-Pass Continuous Integration (CI) & Release Hygiene Protocol:

1. Dual-Pass Pytest Rule (tests/test_dual_pass.py):
   - Pass 1 (Positive Verification): Every task's verifier.py MUST return passed=True when executed on the output of its reference solution.py.
   - Pass 2 (Negative Trap Verification): Every task's verifier.py MUST return passed=False when executed on a deliberate buggy solution that commits the target silent failure (e.g., EPSG:4326 area or random CV split).

2. Automated Prose Linting (.github/workflows/ci.yml):
   - Runs Vale prose linter configured with the Google Developer Documentation Style Guide across README.md, docs/, and task prompts on every push and pull request.

3. 6-Month JOSS Readiness & Release Hygiene:
   - Maintain public commits spread across >=3 days every week from Month 1 (Nov 2026) through Month 6 (May 2027).
   - Tag milestone releases (v0.1 in M1, v0.2 in M2, v1.0 with Zenodo DOI & Hugging Face Dataset in M4, v1.1 & JOSS submission in M6).`
  },

  // 8 AI Trainer Job Postings Matrix (with waveGroup for filtering)
  aiTrainerRoles: [
    {
      id: "role_earth",
      role: "Earth & Environmental ($60–120/hr, Global)",
      rate: "$60–120/hr",
      wave: "Wave 1 (Highest Priority)",
      waveGroup: "WAVE1",
      coreWork: "Author computational earth-science tasks; evaluate model code, geospatial analysis & forecasts; catch CRS, spatial/temporal, uncertainty, and reproducibility flaws.",
      mandatory: "Strong Python; deep expertise in an earth/environmental specialization; hands-on geospatial/remote sensing/statistics; paid AI-training hours (for gated postings).",
      preferred: "Benchmark/rubric creation; peer submission review; xarray, GeoPandas, GDAL, rasterio, NetCDF; validation against ground observations.",
      publicProof: "v4 P2 (bd-rain-extremes: CHIRPS vs ERA5 vs BMD gauges), P3 (rainfall-runoff-camels: 3-layer HBV vs SAC-SMA), P4 (spatial-leakage-s2) + O1 (Landsat vs MODIS LST), 9 Earth tasks in verisci v1.0 (DOI), and L2 OSS PRs."
    },
    {
      id: "role_ml",
      role: "ML Engineering ($60–120/hr)",
      rate: "$60–120/hr",
      wave: "Wave 1",
      waveGroup: "WAVE1",
      coreWork: "Design ML engineering benchmarks; evaluate experiments; diagnose data leakage, invalid cross-validation, unstable training, and non-reproducible pipelines.",
      mandatory: "Strong Python; hands-on PyTorch, scikit-learn, XGBoost, LightGBM; prior AI evaluation/training experience.",
      preferred: "Kaggle Expert/Master; technical preprints; agentic evaluation experience (Inspect AI).",
      publicProof: "spatial-leakage-s2 (Random vs Spatial Block CV curve), ml-pitfalls-lab + PyTorch 10-seed variance study, Hugging Face Dataset, Kaggle submission, and Inspect sandbox agent task."
    },
    {
      id: "role_math",
      role: "Math & Statistics ($60–120/hr)",
      rate: "$60–120/hr",
      wave: "Wave 1 (Strong Aptitude -> Build Proof)",
      waveGroup: "WAVE1",
      coreWork: "Evaluate mathematical proofs, statistical inference, and optimization code; detect numerical instability, p-hacking, and invalid statistical test selection.",
      mandatory: "Strong Python; deep expertise in a mathematics/statistics specialization (Probability & Simulation-Validated Statistical Inference).",
      preferred: "SymPy, Pyomo, OR-Tools, SciPy; simulation & optimization benchmarks.",
      publicProof: "v4 P5 (stat-validation-sims: 10,000-rep BCa bootstrap, Welch t-test, BH FDR, optional stopping), P6 (tsp-validated: Pyomo/HiGHS Exact MIP vs TSPLIB optimums), P7 (numerics-validated), and 9 Math/Stats tasks in verisci v1.0."
    },
    {
      id: "role_phys",
      role: "Physical Sciences ($60–120/hr)",
      rate: "$60–120/hr",
      wave: "Wave 2 (Months 5–6)",
      waveGroup: "WAVE2",
      coreWork: "Evaluate physics/chemistry/materials simulations; verify numerical PDE/ODE solvers against analytic solutions and physical conservation laws.",
      mandatory: "Python; physical science specialization (focused on Environmental Transport, Diffusion & Numerical PDEs).",
      preferred: "SymPy, SciPy, Astropy, Pint; detecting physically impossible results (energy drift, CFL violation).",
      publicProof: "v4 P7 (numerics-validated: Euler vs Velocity Verlet energy drift, 1D heat equation r<=0.5 vs Fourier series, ODE slopes) + P3 (CAMELS hydrology) + 3 Physical tasks in verisci."
    },
    {
      id: "role_eng",
      role: "Engineering Sciences ($60–120/hr)",
      rate: "$60–120/hr",
      wave: "Wave 2 (Months 5–6)",
      waveGroup: "WAVE2",
      coreWork: "Evaluate engineering simulations and design calculations against textbook formulas and solver APIs.",
      mandatory: "Python scripting, CLI solver workflows, civil/water-resources engineering fundamentals.",
      preferred: "Validation against worked engineering examples; explicit assumption documentation.",
      publicProof: "v4 P3 (rainfall-runoff-camels) + Optional O2 Hydraulics Mini-Pack (5 textbook-validated tasks: Manning's normal depth, rational method peak runoff, time of concentration, stormwater pipe sizing)."
    },
    {
      id: "role_life",
      role: "Life Sciences ($60–120/hr)",
      rate: "$60–120/hr",
      wave: "Wave 3 (Optional Mini-Pack)",
      waveGroup: "WAVE3",
      coreWork: "Computational biology & quantitative ecology task creation and model evaluation.",
      mandatory: "Python; quantitative biology/ecology modeling fundamentals.",
      preferred: "ODE population models, biodiversity indices, spatial species-distribution leakage.",
      publicProof: "Ecology Mini-Pack (C1: Logistic vs Lotka-Volterra conserved quantities, Shannon diversity stability, species-distribution spatial leakage)."
    },
    {
      id: "role_priv",
      role: "Data Privacy Specialist ($30–60/hr, 6-wk contract)",
      rate: "$30–60/hr",
      wave: "Wave 3 (US-Residency Caveat)",
      waveGroup: "WAVE3",
      coreWork: "Review privacy risk and disclosure scenarios in AI systems.",
      mandatory: "US-based requirement on micro1 posting + professional privacy familiarity (GDPR/CCPA principles). Note: Location gates cannot be bypassed by code; state true location honestly.",
      preferred: "Data minimization, purpose limitation, consent auditing.",
      publicProof: "PrivacyEval-mini (C2: 10 synthetic user-record disclosure scenarios with human labels and Inspect model-graded rubric)."
    },
    {
      id: "role_safe",
      role: "AI Safety & Evaluation ($30–60/hr, 6-wk contract)",
      rate: "$30–60/hr",
      wave: "Wave 3 (Synergistic with Core)",
      waveGroup: "WAVE3",
      coreWork: "Test AI agents for safety/privacy violations, silent hallucinations, and rubric compliance.",
      mandatory: "Evidence-based response review and LLM evaluation framework fluency.",
      preferred: "Inspect AI agentic sandboxing and Cohen's kappa rubric reliability.",
      publicProof: "verisci LLM Failure Taxonomy + Inspect Docker Sandbox Agent Task + PrivacyEval-mini synthetic suite."
    }
  ],

  // 12-Platform Ecosystem Architecture (with group: CORE, SELECTIVE, SKIP)
  platforms: [
    { id: "plat_1", group: "CORE", name: "Personal Hub (meheran.dev/proof & /docs)", priority: "Core (Day 1)", tier: "Central Canonical Hub", url: "https://meheran.dev/", strategy: "Deploy Quarto or Material for MkDocs via GitHub Pages. /proof hosts the single Claim -> Artifact Link -> Verify Command table; /docs organizes your top 10–12 artifacts into 5 evidence categories with 3-line Decision Context headers.", audience: "All Technical Recruiters, AI Trainer Platforms & Academic PIs" },
    { id: "plat_2", group: "CORE", name: "GitHub (github.com/MkMeheran)", priority: "Core (Day 1)", tier: "Tier 1–3 Backbone", url: "https://github.com/MkMeheran", strategy: "Pin flagship v4 repos (verisci, bd-rain-extremes, rainfall-runoff-camels, spatial-leakage-s2, stat-validation-sims, tsp-validated, numerics-validated, ml-pitfalls-lab). Include MIT/Apache-2.0 LICENSE, uv.lock, Dockerfile, CITATION.cff, and green pytest + Vale CI badges. Commit >=3 days/week to satisfy the 6-month JOSS clock.", audience: "Software/ML Engineers, Open-Source Maintainers & JOSS Editors" },
    { id: "plat_3", group: "CORE", name: "ORCID (orcid.org)", priority: "Core (Week 1)", tier: "Persistent Scholarly PID", url: "https://orcid.org/", strategy: "Link KUET BURP education and SERC research service. Enable automatic synchronization with Zenodo and OSF so every DOI release populates your ORCID record automatically.", audience: "University Professors, Lab Directors & Scholarship Committees" },
    { id: "plat_4", group: "CORE", name: "Zenodo (CERN / OpenAIRE)", priority: "Core (Months 1–6)", tier: "Tier 2 Permanent DOI Archive", url: "https://zenodo.org/records/7716153/files/Open%20Science%20Guide%201.0.pdf?download=1", strategy: "Connect GitHub-Zenodo webhook. Mint permanent versioned and concept DOIs for verisci v1.0, sar-flood-eval, the 2,500-word SAR Literature Review, and the 6–8 page Technical Report.", audience: "Academic PIs & Scientific Technical Writing Hiring Managers" },
    { id: "plat_5", group: "CORE", name: "OSF (Open Science Framework)", priority: "Core (Months 2–5)", tier: "Tier 2 Preregistration & Protocols", url: "https://grsgroup.org/researcher-resources", strategy: "Register timestamped study protocols, data dictionaries, the UAV Multispectral (NDVI) calibration workflow, and the Month 5 GeoAI Research Proposal & Scoping Review.", audience: "Open-Science Labs & Graduate Admissions Reviewers" },
    { id: "plat_6", group: "CORE", name: "Read the Docs", priority: "Core (Month 2)", tier: "Tier 1/3 Developer Docs Standard", url: "https://geopandas.org/en/stable/docs.html", strategy: "Host multi-version Sphinx/MkDocs documentation for your bd-grid-suitability Python package with automated builds on Git push and 100% doctest verification.", audience: "Developer/API Documentation Leads & Python Library Maintainers" },
    { id: "plat_7", group: "CORE", name: "Hugging Face (Datasets & Model Cards)", priority: "Core (Months 4–5)", tier: "Tier 2 AI/ML Community Proof", url: "https://huggingface.co/docs/datasets", strategy: "Publish the verisci (GeoEval-BD v1.0) benchmark suite as a structured Hugging Face Dataset and host the Khulna UHI SHAP/ALE Model Card.", audience: "AI Evaluation Platforms (micro1, Alignerr, Turing) & ML Engineers" },
    { id: "plat_8", group: "SELECTIVE", name: "Kaggle", priority: "Selective (Months 1–5)", tier: "Competition & Dataset Proof", url: "https://www.kaggle.com/progression", strategy: "Publish a license-clean Bangladesh geospatial dataset (e.g., BMD/ERA5/CHIRPS rain extremes or Khulna park grid) + clean analytical notebook, and submit to 1 optimization/tabular competition.", audience: "Data Science & ML Engineering Recruiters" },
    { id: "plat_9", group: "CORE", name: "OpenAlex, Semantic Scholar & Crossref", priority: "Daily Research Tool", tier: "Citation Graph & DOI Verification", url: "https://openalex.org/", strategy: "Use for forward/backward citation mapping and verifying permanent Crossref DOIs in Zotero (references.bib). Never cite unverified URLs or SEO blogs.", audience: "Academic Supervisors Auditing Your Bibliographies" },
    { id: "plat_10", group: "SELECTIVE", name: "Hashnode / Dev.to", priority: "Secondary (Syndication Only)", tier: "Developer Discoverability", url: "https://vale.sh/", strategy: "Cross-post 1–2 selected tutorials per month with a strict <link rel='canonical' href='https://meheran.dev/...'> tag so search authority consolidates on your domain.", audience: "General Developer Community" },
    { id: "plat_11", group: "SELECTIVE", name: "Google Scholar, ResearchGate & EarthArXiv", priority: "Defer Until Month 5", tier: "Preprint & Citation Indexing", url: "https://acurio.ch/en/blog/citing-preprints", strategy: "Activate once your Month 5 benchmark Technical Report (EarthArXiv/Zenodo) or SERC/Precision Agriculture co-authored manuscript is ready. Avoid arXiv unless you have a verified endorser under 2026 rules.", audience: "Academic PIs & Conference Committees" },
    { id: "plat_12", group: "SKIP", name: "Medium, DataCamp, LeetCode, Codewars, DrivenData, Zindi", priority: "Skip / Deprioritize", tier: "High Opportunity Cost", url: "https://www.drivendata.org/", strategy: "Do not spend time accumulating new DataCamp certificates, grinding generic LeetCode puzzles, or posting on paywalled Medium. Channel 100% of coding practice into pytest-verified project repositories.", audience: "None (Time Saved for Core Flagships)" }
  ],

  // 90-Second Oral AI Interview Flashcards
  interviewQuestions: [
    {
      id: "fc_1",
      domain: "Earth & Geospatial",
      question: "1. How do you validate the accuracy of a Sentinel-1 SAR flood map when cloud-free optical ground truth is unavailable during peak monsoon?",
      answer: "First, check for asynchronous international disaster charters such as Copernicus EMS or UNOSAT radar-derived extents. Second, if unavailable, construct a stratified random sample (~200 points across water, cropland, and built-up strata using ESA WorldCover), mask out permanent water using JRC Global Surface Water, and evaluate threshold sensitivity across Fixed dB (-15 to -18 dB) versus automated Otsu thresholding, reporting IoU, Precision, Recall, and explicit sampling bias in the Limitations section."
    },
    {
      id: "fc_2",
      domain: "Earth & Geospatial",
      question: "2. Why does computing polygon area or buffers in EPSG:4326 fail, and how do you handle Bangladesh's specific UTM boundary?",
      answer: "EPSG:4326 (WGS 84) represents coordinates on an angular ellipsoid in decimal degrees, so .area returns meaningless square degrees and distorts metric distances by cosine of latitude. Bangladesh spans 88E to 92.7E, which straddles the 90E meridian separating UTM Zone 45N (EPSG:32645, western districts like Khulna) and UTM Zone 46N (EPSG:32646, eastern districts like Chattogram). For regional metric accuracy, reproject to the appropriate UTM zone or an equal-area projection before computing square kilometers."
    },
    {
      id: "fc_3",
      domain: "Earth & Geospatial",
      question: "3. What are the three most common silent failures in LLM-generated geospatial and climate Python code?",
      answer: "(1) CRS & Unit Distortion: computing area/distance in EPSG:4326 or mixing meters and degrees. (2) Raster NoData & Resampling Contamination: computing zonal statistics or indices without masking sentinel NoData values (e.g., -9999 or 65535) or using bilinear interpolation on categorical land-cover rasters. (3) Temporal/Spatial Aggregation Bugs: aggregating hourly ERA5 UTC precipitation to daily totals without shifting to local time (UTC+6 for Bangladesh) or averaging gridded NetCDF climate variables without cos(latitude) area weighting."
    },
    {
      id: "fc_4",
      domain: "Machine Learning",
      question: "4. Give three concrete examples of data leakage in spatial and tabular ML and how your verifier catches them.",
      answer: "(1) Spatial Autocorrelation Leakage: using Random K-Fold on spatially proximate pixels so neighboring pixels appear in both train and test sets; caught by enforcing Spatial-Block GroupKFold and asserting train_geom.disjoint(test_geom). (2) Pre-Split Preprocessing Leakage: fitting StandardScaler, imputer, or feature selectors on the full dataset before train_test_split; caught by enforcing scikit-learn Pipeline objects. (3) Temporal/Target Leakage: using random splits on time-series or including post-event proxy features."
    },
    {
      id: "fc_5",
      domain: "Machine Learning",
      question: "5. Why is accuracy misleading on imbalanced geospatial hazard datasets, and how do you prove two models differ non-randomly?",
      answer: "When flooded cropland represents only 2–5% of a study area, a trivial majority-class classifier achieves 95–98% accuracy while detecting zero floods. Instead, use Precision-Recall AUC (PR-AUC), IoU (Jaccard Index), and Macro-F1. To prove Model A outperforms Model B beyond random chance, evaluate across multiple random seeds (10 seeds with deterministic flags in PyTorch) and compute paired block-bootstrap 95% confidence intervals."
    },
    {
      id: "fc_6",
      domain: "Math, Stats & Optimization",
      question: "6. How do you validate a heuristic optimization algorithm (like Teitz-Bart in facility location) and a statistical confidence interval estimator?",
      answer: "For optimization, formulate the exact Mixed-Integer Linear Program (MCLP in Pyomo + HiGHS or TSPLIB benchmark instances with lazy subtour elimination) and compute the exact Optimality Gap % = ((Exact - Heuristic) / Exact) * 100 alongside LP relaxation bounds. For statistical estimators (like BCa vs Percentile Bootstrap or Welch's t-test), run 10,000 vectorized Monte Carlo repetitions on known parametric distributions (normal, lognormal, heavy-tailed) and verify whether empirical coverage falls within the Monte Carlo error bound sqrt(p(1-p)/R)."
    }
  ],

  // Evaluatable Artifacts for Artifact-Specific Rubric History (#34 & #35)
  evaluatableArtifacts: [
    { id: "art_day1", name: "P1: verisci Harness v0.1 & PROOF.md (M1)", gate: 80, month: "M1" },
    { id: "art_p0", name: "P2: bd-rain-extremes (CHIRPS vs ERA5 vs BMD, M1–M2)", gate: 85, month: "M1–M2" },
    { id: "art_p1", name: "P3: rainfall-runoff-camels (3-Layer HBV vs SAC-SMA, M2–M3)", gate: 85, month: "M2–M3" },
    { id: "art_p2", name: "P4: spatial-leakage-s2 (Sentinel-2 Block CV, M3–M4)", gate: 85, month: "M3–M4" },
    { id: "art_p3", name: "P5: stat-validation-sims (10,000-Rep Monte Carlo, M3–M4)", gate: 85, month: "M3–M4" },
    { id: "art_p4", name: "P6: tsp-validated (Exact MIP vs Heuristic on TSPLIB, M4–M5)", gate: 85, month: "M4–M5" },
    { id: "art_p5", name: "P7: numerics-validated (7 Numerical & Physics Modules, M5)", gate: 85, month: "M5" },
    { id: "art_l3", name: "P8: ml-pitfalls-lab (6 Pitfalls 20x + PyTorch 10-Seed, M4–M6)", gate: 85, month: "M4–M6" },
    { id: "art_l4", name: "P9 & L3: verisci v1.0 (21 Tasks, DOI) + 4–6p Technical Report (M6)", gate: 85, month: "M6" }
  ],

  // 100-Point Portfolio Quality Rubric Criteria
  rubricCriteria: [
    { id: "rub_1", shortLabel: "Tech Accuracy", name: "1. Technical & Mathematical Accuracy", max: 15, defaultVal: 0, desc: "Every CLI command, CRS projection, equation, and API parameter is computationally exact.", deduction: "Automatic Deduction: Untested code, computing area in EPSG:4326 degrees, or broken syntax.", fixAdvice: "Re-run all scripts in a clean uv virtual environment and assert EPSG:32646/32645 metric projections." },
    { id: "rub_2", shortLabel: "Ground Truth", name: "2. Ground-Truth Validation & Rigor", max: 15, defaultVal: 0, desc: "Benchmarks results against known truth (station observations, Exact MIP, analytic solution, or Spatial Block CV).", deduction: "Automatic Deduction: Reporting a single unvalidated accuracy number or omitting a verifier script.", fixAdvice: "Add a deterministic verifier.py comparing outputs against BMD gauges, Copernicus EMS, or HiGHS Exact MIP." },
    { id: "rub_3", shortLabel: "CI & Repro", name: "3. Reproducibility & CI Hygiene", max: 10, defaultVal: 0, desc: "Pinned dependencies (uv.lock), fixed random seeds, Dockerfile, and green GitHub Actions CI.", deduction: "Automatic Deduction: Hardcoded local paths (C:/Users/...), missing seeds, or GUI-only steps.", fixAdvice: "Pin dependencies in uv.lock, fix random seeds, remove local paths, and verify GitHub Actions CI is green." },
    { id: "rub_4", shortLabel: "Primary Docs", name: "4. Source Credibility (Primary Sources Only)", max: 10, defaultVal: 0, desc: "Cites exclusively official documentation, upstream source code, and OpenAlex/Crossref peer-reviewed DOIs.", deduction: "Automatic Deduction: Citing SEO blogs, unverified Medium posts, or secondary tutorials as primary evidence.", fixAdvice: "Replace secondary blog links with official library documentation or Crossref peer-reviewed DOIs." },
    { id: "rub_5", shortLabel: "Diataxis IA", name: "5. Logical Structure & Diataxis / IMRaD IA", max: 10, defaultVal: 0, desc: "Strict separation of Diataxis quadrants (Tutorial, How-To, Reference, Explanation) or thematic methodology matrix.", deduction: "Automatic Deduction: Mixing beginner setup into advanced explanations or chronological paper summary dumps.", fixAdvice: "Restructure headings to match a single Diátaxis quadrant or a thematic methodology matrix." },
    { id: "rub_6", shortLabel: "Vale & Style", name: "6. Clarity, Readability & Vale Style Compliance", max: 10, defaultVal: 0, desc: "Active voice, second-person imperative for docs, scannable tables, and zero Vale linter errors (Google Style Guide).", deduction: "Automatic Deduction: Throat-clearing introductions ('In recent years...'), passive voice, or dense 10-line paragraphs.", fixAdvice: "Run `vale docs/` with Google Style rules, convert passive sentences to active voice, and shorten paragraphs." },
    { id: "rub_7", shortLabel: "DOI & License", name: "7. Citation & Archival Metadata Quality", max: 10, defaultVal: 0, desc: "Complete BibTeX/Crossref DOI attribution, valid CITATION.cff, and explicit dataset licensing (ODbL, CC-BY-4.0).", deduction: "Automatic Deduction: Uncited empirical claims, broken links, or missing dataset license documentation.", fixAdvice: "Add CITATION.cff, verify all DOIs resolve, and state explicit ODbL / CC-BY-4.0 data licenses in data/README.md." },
    { id: "rub_8", shortLabel: "Context Hdr", name: "8. Audience Calibration & Prerequisites", max: 5, defaultVal: 0, desc: "Explicit 3-line Context Header (Target Audience, Problem Solved, Verification Links) and calibrated terminology.", deduction: "Automatic Deduction: Explaining basic Python loops in an advanced GeoAI guide or omitting setup in a tutorial.", fixAdvice: "Prepend the mandatory 3-line Decision Context header (Audience, Problem Solved, Verification Links)." },
    { id: "rub_9", shortLabel: "Limitations", name: "9. Completeness, Edge Cases & Limitations", max: 5, defaultVal: 0, desc: "Covers inputs, expected outputs, edge-case errors (400/422/NoData), and an honest Limitations section.", deduction: "Automatic Deduction: Omitting sample data links or hiding methodological failure modes.", fixAdvice: "Add an explicit Limitations & Threats to Validity section covering NoData masks, cloud bias, and resolution." },
    { id: "rub_10", shortLabel: "BD Domain", name: "10. Originality & Bangladesh/URP Domain Depth", max: 10, defaultVal: 0, desc: "Original synthesis, custom benchmarks, authentic Khulna/Chattogram/Bangladesh grounding, and critical analysis.", deduction: "Automatic Deduction: Generic AI-sounding boilerplate or derivative paraphrasing of existing tutorials.", fixAdvice: "Ground examples in specific Bangladesh datasets (Khulna wards, Chattogram SAR flood, BMD rain gauges)." }
  ]
};

// ==========================================================================
// APPLICATION STATE & SAFE LOCALSTORAGE PERSISTENCE (V3 INTEGRITY)
// ==========================================================================
const STORAGE_KEY = "verisci_blueprint_portal_state_v3";

function getLocalDateKey(d = new Date()) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const appState = {
  activeSection: "overview",
  activeTimeTab: "daily",
  activeStarterTab: "structure",
  activeMonthCode: "M1",
  activeMonthTargetTab: "research", // "research" | "technical"
  activePrepTierTab: "tier1",       // "tier1" | "tier2" | "tier3"
  activePrepDayIndex: new Date().getDay(), // Auto-selected current weekday (#22)
  activeResearchStep: 0,            // 0..11 for 12-step stepper
  showAllResearchSteps: false,
  activeLitReviewDim: 0,            // 0..4 for Weak vs Prof cards
  activeRoleWaveFilter: "ALL",      // "ALL" | "WAVE1" | "WAVE2" | "WAVE3"
  activePlatformFilter: "ALL",      // "ALL" | "CORE" | "SELECTIVE" | "SKIP"
  weekMonthFilter: "ALL",
  weekStatusFilter: "ALL",
  weekSearchQuery: "",
  projectCategoryFilter: "ALL",
  projectActiveTabs: {},            // { [projId]: "problem"|"plan"|"outputs"|"files" }

  // Reading Preferences (#Section 2)
  readingScale: 1,
  showBanglaAid: false,
  hapticsEnabled: true,

  // Section Scroll Position Memory (#Section 3)
  sectionScrollMap: {},

  // #33 Date-Based Daily Checklist: { "YYYY-MM-DD": { daily_s1: true, ... } }
  todayDateKey: getLocalDateKey(),
  dailyByDate: {},

  // Permanent 6-Month Checkboxes (Weekly w1..w24, Monthly KPIs m1_k1..m6_k4, Contract con_1..con_10, Platforms plat_1..plat_12)
  checkedItems: {},

  // #36 Evidence-Based Verification Links for Weekly Deliverables: { w1: "https://github.com/..." }
  weeklyProofLinks: {},

  // #34 & #35 Artifact-Specific Rubric Evaluations: { [artifactId]: { scored: bool, scores: {}, total: num, evaluatedAt: str, history: [] } }
  selectedRubricArtifact: "art_day1",
  artifactEvaluations: {},

  // Leitner Flashcard Deck State (#30)
  flashcardDeck: {
    currentIndex: 0,
    revealed: false,
    boxes: {}, // { fc_1: 1 | 2 | 3 }
    countdownSeconds: 90,
    countdownRunning: false,
    countdownIntervalId: null
  },

  // Paid Hours Logger for Outlier / Turing (#Section 9)
  paidHoursLogs: [],

  // GitHub API Commit Activity Cache (#Section 9)
  githubCache: null,

  // #39 Reliable Date.now()-Based Timer State
  timer: {
    stageIndex: 0,
    remainingSeconds: 10 * 60,
    running: false,
    targetEndTimeMs: null,
    intervalId: null,
    wakeLockSentinel: null
  }
};

function ensureTodayDailyState() {
  const currentKey = getLocalDateKey();
  appState.todayDateKey = currentKey;
  if (!appState.dailyByDate || typeof appState.dailyByDate !== "object") {
    appState.dailyByDate = {};
  }
  if (!appState.dailyByDate[currentKey]) {
    appState.dailyByDate[currentKey] = {};
  }
}

function getArtifactEvalRecord(artId) {
  if (!appState.artifactEvaluations[artId]) {
    const defaultScores = {};
    PORTAL_DATA.rubricCriteria.forEach((c) => {
      defaultScores[c.id] = 0;
    });
    appState.artifactEvaluations[artId] = {
      scored: false,
      scores: defaultScores,
      total: 0,
      evaluatedAt: null,
      history: []
    };
  }
  return appState.artifactEvaluations[artId];
}

function loadPersistedState() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    // Safe non-destructive migration from v2 key if v3 key is not yet initialized (#Section 6 Data Safety)
    if (!raw) {
      const legacyV2 = localStorage.getItem("verisci_blueprint_portal_state_v2");
      if (legacyV2) {
        raw = legacyV2;
      }
    }
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        if (parsed.checkedItems && typeof parsed.checkedItems === "object") {
          // Ensure daily_s1..daily_s5 are never stored in permanent checkedItems (#33)
          const cleaned = { ...parsed.checkedItems };
          PORTAL_DATA.dailyStages.forEach((s) => delete cleaned[s.id]);
          appState.checkedItems = cleaned;
        }
        if (parsed.dailyByDate && typeof parsed.dailyByDate === "object") {
          appState.dailyByDate = parsed.dailyByDate;
        }
        if (parsed.weeklyProofLinks && typeof parsed.weeklyProofLinks === "object") {
          appState.weeklyProofLinks = parsed.weeklyProofLinks;
        }
        if (parsed.artifactEvaluations && typeof parsed.artifactEvaluations === "object") {
          appState.artifactEvaluations = parsed.artifactEvaluations;
        }
        if (parsed.selectedRubricArtifact) {
          appState.selectedRubricArtifact = parsed.selectedRubricArtifact;
        }
        if (Array.isArray(parsed.paidHoursLogs)) {
          appState.paidHoursLogs = parsed.paidHoursLogs;
        }
        if (parsed.flashcardBoxes && typeof parsed.flashcardBoxes === "object") {
          appState.flashcardDeck.boxes = parsed.flashcardBoxes;
        }
        if (typeof parsed.readingScale === "number") {
          appState.readingScale = Math.min(1.2, Math.max(0.9, parsed.readingScale));
        }
        if (typeof parsed.showBanglaAid === "boolean") {
          appState.showBanglaAid = parsed.showBanglaAid;
        }
        if (parsed.activeSection && PORTAL_DATA.sectionOrder.includes(parsed.activeSection)) {
          appState.activeSection = parsed.activeSection;
        }
        if (parsed.githubCache) {
          appState.githubCache = parsed.githubCache;
        }
        if (parsed.timer && typeof parsed.timer === "object") {
          const stIdx = Number(parsed.timer.stageIndex) || 0;
          appState.timer.stageIndex = Math.min(4, Math.max(0, stIdx));
          if (parsed.timer.running && parsed.timer.targetEndTimeMs) {
            const diffSecs = Math.max(0, Math.round((parsed.timer.targetEndTimeMs - Date.now()) / 1000));
            appState.timer.remainingSeconds = diffSecs;
            appState.timer.targetEndTimeMs = parsed.timer.targetEndTimeMs;
            appState.timer.running = diffSecs > 0;
          } else if (typeof parsed.timer.remainingSeconds === "number") {
            appState.timer.remainingSeconds = parsed.timer.remainingSeconds;
            appState.timer.running = false;
          }
        }
      }
    }
  } catch (e) {
    // Fallback gracefully in restricted environments
  }
  ensureTodayDailyState();
  PORTAL_DATA.evaluatableArtifacts.forEach((a) => getArtifactEvalRecord(a.id));
  PORTAL_DATA.interviewQuestions.forEach((q) => {
    if (!appState.flashcardDeck.boxes[q.id]) {
      appState.flashcardDeck.boxes[q.id] = 1;
    }
  });
}

function savePersistedState() {
  try {
    ensureTodayDailyState();
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        activeSection: appState.activeSection,
        readingScale: appState.readingScale,
        showBanglaAid: appState.showBanglaAid,
        todayDateKey: appState.todayDateKey,
        dailyByDate: appState.dailyByDate,
        checkedItems: appState.checkedItems,
        weeklyProofLinks: appState.weeklyProofLinks,
        selectedRubricArtifact: appState.selectedRubricArtifact,
        artifactEvaluations: appState.artifactEvaluations,
        paidHoursLogs: appState.paidHoursLogs,
        flashcardBoxes: appState.flashcardDeck.boxes,
        githubCache: appState.githubCache,
        timer: {
          stageIndex: appState.timer.stageIndex,
          remainingSeconds: appState.timer.remainingSeconds,
          running: appState.timer.running,
          targetEndTimeMs: appState.timer.targetEndTimeMs
        }
      })
    );
  } catch (e) {
    // Ignore storage quota errors
  }
}

function triggerHaptic(pattern = 35) {
  if (!appState.hapticsEnabled) return;
  try {
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      navigator.vibrate(pattern);
    }
  } catch (e) {
    // Ignore unsupported vibration
  }
}

function showToast(message, undoCallback = null) {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;
  toast.innerHTML = "";
  const span = document.createElement("span");
  span.textContent = message;
  toast.appendChild(span);

  if (typeof undoCallback === "function") {
    const undoBtn = document.createElement("button");
    undoBtn.type = "button";
    undoBtn.className = "icon-btn";
    undoBtn.style.minHeight = "34px";
    undoBtn.style.padding = "2px 10px";
    undoBtn.style.background = "var(--surface-gold)";
    undoBtn.style.color = "#2A1A0E";
    undoBtn.textContent = "Undo";
    undoBtn.addEventListener("click", () => {
      undoCallback();
      toast.classList.remove("show");
    });
    toast.appendChild(undoBtn);
  }

  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, undoCallback ? 8000 : 2800);
}

function copyTextToClipboard(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      () => showToast(`Copied ${label}`),
      () => fallbackCopy(text, label)
    );
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    showToast(`Copied ${label}`);
  } catch (err) {
    showToast("Copy failed - please select text manually");
  }
  document.body.removeChild(ta);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ==========================================================================
// EVIDENCE VALIDATION & PROGRESS TELEMETRY (#33, #36)
// ==========================================================================
function isValidProofLink(val) {
  if (!val || typeof val !== "string") return false;
  const trimmed = val.trim();
  if (trimmed.length < 6) return false;
  return (
    /^https?:\/\/\S+\.\S+/i.test(trimmed) ||
    /^10\.\d{4,9}\/[-._;()/:A-Z0-9]+$/i.test(trimmed) ||
    /^doi:\s*10\.\d{4,9}\//i.test(trimmed) ||
    /^[0-9a-f]{7,40}$/i.test(trimmed)
  );
}

function isWeekFullyVerified(weekId) {
  return Boolean(appState.checkedItems[weekId]) && isValidProofLink(appState.weeklyProofLinks[weekId]);
}

function getPermanentMilestoneStats() {
  // 24 weekly deliverables (require checkbox + proof link) + 24 monthly KPIs = 48 permanent milestones
  // Note: Daily stages are date-scoped and excluded from permanent 6-month milestone distortion (#33)
  let verifiedCount = 0;
  const totalWeeks = PORTAL_DATA.weeklySchedule.length; // 24
  let verifiedWeeks = 0;
  PORTAL_DATA.weeklySchedule.forEach((w) => {
    if (isWeekFullyVerified(w.id)) {
      verifiedCount += 1;
      verifiedWeeks += 1;
    }
  });

  let totalKpis = 0;
  let verifiedKpis = 0;
  PORTAL_DATA.monthlyBlueprints.forEach((m) => {
    m.kpis.forEach((k) => {
      totalKpis += 1;
      if (appState.checkedItems[k.id]) {
        verifiedCount += 1;
        verifiedKpis += 1;
      }
    });
  });

  const totalPermanent = totalWeeks + totalKpis; // 48
  const pct = totalPermanent ? Math.round((verifiedCount / totalPermanent) * 100) : 0;

  ensureTodayDailyState();
  const todayObj = appState.dailyByDate[appState.todayDateKey] || {};
  const todayDone = PORTAL_DATA.dailyStages.filter((s) => Boolean(todayObj[s.id])).length;

  return {
    verifiedCount,
    totalPermanent,
    pct,
    verifiedWeeks,
    totalWeeks,
    verifiedKpis,
    totalKpis,
    todayDone,
    todayTotal: PORTAL_DATA.dailyStages.length
  };
}

function createSvgRing(pct, size = 22, stroke = 2.8) {
  const r = (size - stroke * 2) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(100, Math.max(0, pct)) / 100) * c;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true" style="flex-shrink:0;">
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="currentColor" stroke-opacity="0.2" stroke-width="${stroke}"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--accent-orange)" stroke-width="${stroke}" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}" stroke-linecap="round" transform="rotate(-90 ${size / 2} ${size / 2})"/>
  </svg>`;
}

function updateGlobalProgressUI() {
  const stats = getPermanentMilestoneStats();

  const headerText = document.getElementById("headerProgressText");
  const headerBar = document.getElementById("headerProgressFill");
  const overviewPct = document.getElementById("overviewProgressPct");
  const overviewCount = document.getElementById("overviewProgressCount");
  const overviewFill = document.getElementById("overviewProgressFill");

  if (headerText) headerText.textContent = `${stats.pct}% (${stats.verifiedCount}/${stats.totalPermanent})`;
  if (headerBar) headerBar.style.width = `${stats.pct}%`;
  if (overviewPct) overviewPct.textContent = `${stats.pct}%`;
  if (overviewCount) {
    overviewCount.textContent = `${stats.verifiedCount} of ${stats.totalPermanent} permanent milestones verified · Today: ${stats.todayDone}/5`;
  }
  if (overviewFill) overviewFill.style.width = `${stats.pct}%`;

  // Update progress rings in All Views Drawer
  const ringMap = {
    daily: Math.round((stats.todayDone / stats.todayTotal) * 100),
    weekly: Math.round((stats.verifiedWeeks / stats.totalWeeks) * 100),
    monthly: Math.round((stats.verifiedKpis / stats.totalKpis) * 100),
    writing: Math.round(
      (PORTAL_DATA.contractChecklist10.filter((c) => appState.checkedItems[c.id]).length /
        PORTAL_DATA.contractChecklist10.length) *
        100
    ),
    career: Math.round(
      (PORTAL_DATA.platforms.filter((p) => appState.checkedItems[p.id]).length / PORTAL_DATA.platforms.length) * 100
    )
  };
  Object.keys(ringMap).forEach((secKey) => {
    document.querySelectorAll(`[data-nav-ring="${secKey}"]`).forEach((el) => {
      el.innerHTML = createSvgRing(ringMap[secKey], 20, 2.5);
    });
  });

  renderTodayHomeCard();
}

// ==========================================================================
// HASH-BASED NAVIGATION, SCROLL MEMORY & HEADER INDICATOR (#Section 3)
// ==========================================================================
function switchSection(sectionId, options = { updateHash: true, focusHeading: true }) {
  let resolvedId = sectionId;
  if (sectionId === "time-engine") {
    resolvedId = appState.activeTimeTab || "daily";
  }

  const targetEl = document.getElementById(`sec-${resolvedId}`);
  if (!targetEl) return;

  // Save current scroll position for previous section
  if (appState.activeSection) {
    appState.sectionScrollMap[appState.activeSection] = window.scrollY || 0;
  }

  appState.activeSection = resolvedId;
  if (["daily", "weekly", "monthly", "roadmap"].includes(resolvedId)) {
    appState.activeTimeTab = resolvedId;
  }
  savePersistedState();

  document.querySelectorAll(".view-section").forEach((sec) => {
    sec.classList.toggle("active", sec.id === `sec-${resolvedId}`);
  });

  document.querySelectorAll("[data-nav-target]").forEach((btn) => {
    const btnTarget = btn.getAttribute("data-nav-target");
    btn.classList.toggle("active", btnTarget === resolvedId);
  });

  document.querySelectorAll("[data-time-tab]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-time-tab") === appState.activeTimeTab);
  });

  // Update Top Bar section indicator (#13: Show brand only on Overview, current section name on subviews)
  const siteHeader = document.querySelector(".site-header");
  const topIndicator = document.getElementById("topBarSectionTitle");
  const meta = PORTAL_DATA.sectionMeta[resolvedId];
  if (siteHeader) {
    siteHeader.classList.toggle("in-subview", resolvedId !== "overview");
  }
  if (topIndicator && meta) {
    topIndicator.textContent = meta.shortTitle;
  }

  closeBottomDrawer();

  if (options.updateHash) {
    const targetHash = `#${resolvedId}`;
    if (window.location.hash !== targetHash) {
      try {
        history.pushState({ section: resolvedId }, "", targetHash);
      } catch (e) {
        window.location.hash = targetHash;
      }
    }
  }

  const savedScroll = appState.sectionScrollMap[resolvedId] || 0;
  window.scrollTo({ top: savedScroll, behavior: "instant" in window ? "instant" : "auto" });

  // Accessibility: Move focus to page h1 when changing sections (#45)
  if (options.focusHeading) {
    const h1 = document.getElementById(`heading-${resolvedId}`);
    if (h1) {
      h1.setAttribute("tabindex", "-1");
      h1.focus({ preventScroll: true });
    }
  }
}

function switchTimeTab(tabId) {
  appState.activeTimeTab = tabId;
  switchSection(tabId);
}

function openBottomDrawer() {
  const drawer = document.getElementById("mobileNavDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  if (drawer) drawer.classList.add("open");
  if (backdrop) backdrop.classList.add("open");
}

function closeBottomDrawer() {
  const drawer = document.getElementById("mobileNavDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  if (drawer) drawer.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
}

// ==========================================================================
// CURRENT ACTIVE WEEK DETECTION BY CALENDAR DATE (#Weekly & #Today)
// ==========================================================================
function getCurrentActiveWeekObj() {
  const todayIso = getLocalDateKey();
  for (const w of PORTAL_DATA.weeklySchedule) {
    if (todayIso >= w.startIso && todayIso <= w.endIso) {
      return w;
    }
  }
  if (todayIso < PORTAL_DATA.weeklySchedule[0].startIso) {
    return PORTAL_DATA.weeklySchedule[0];
  }
  return PORTAL_DATA.weeklySchedule[PORTAL_DATA.weeklySchedule.length - 1];
}

// ==========================================================================
// OVERVIEW: "TODAY" HOME VIEW, 6-STAGE SCROLL-SNAP STEPPER & 4 AUDIT CARDS
// ==========================================================================
function renderTodayHomeCard() {
  const container = document.getElementById("todayCommandContainer");
  if (!container) return;

  ensureTodayDailyState();
  const todayMap = appState.dailyByDate[appState.todayDateKey] || {};
  const activeStage =
    PORTAL_DATA.dailyStages.find((s) => !todayMap[s.id]) ||
    PORTAL_DATA.dailyStages[appState.timer.stageIndex] ||
    PORTAL_DATA.dailyStages[0];
  const doneCount = PORTAL_DATA.dailyStages.filter((s) => Boolean(todayMap[s.id])).length;

  const activeWeek = getCurrentActiveWeekObj();
  const weekVerified = isWeekFullyVerified(activeWeek.id);
  const weekChecked = Boolean(appState.checkedItems[activeWeek.id]);
  const todayRotation =
    PORTAL_DATA.sevenDayRotation.find((d) => d.dayIndex === new Date().getDay()) ||
    PORTAL_DATA.sevenDayRotation[1];

  container.innerHTML = `
    <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid var(--border-subtle);">
      <div style="display:flex; flex-wrap:wrap; align-items:center; gap:8px;">
        <span class="badge badge-orange">TODAY COMMAND VIEW</span>
        <span class="mono-label">${appState.todayDateKey} (${todayRotation.day})</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <span class="badge ${doneCount === 5 ? "badge-pass" : "badge-gold"}">Today's Stages: ${doneCount}/5</span>
        <span class="badge ${weekVerified ? "badge-pass" : weekChecked ? "badge-warn" : "badge-dark"}">${activeWeek.week}: ${weekVerified ? "VERIFIED" : weekChecked ? "NEEDS PROOF LINK" : "IN PROGRESS"}</span>
      </div>
    </div>

    <div class="grid-3">
      <div style="padding:8px 10px; background:var(--bg-secondary); border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
        <div class="mono-label" style="color:var(--accent-orange); font-weight:700; margin-bottom:3px;">1. ACTIVE DAILY STAGE (${activeStage.minutes}m)</div>
        <div style="font-family:var(--font-heading); font-weight:700; font-size:0.98rem; margin-bottom:4px;">${activeStage.stage}: ${activeStage.title}</div>
        <div style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:8px;">Output: ${activeStage.deliverable}</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          <button type="button" class="icon-btn" data-nav-target="daily" style="background:var(--accent-orange); color:#FFF; border-color:var(--accent-orange);">
            Timer (${formatTimerDisplay(appState.timer.remainingSeconds)}) &rarr;
          </button>
          <button type="button" class="icon-btn" data-quick-complete-stage="${activeStage.id}">
            ${todayMap[activeStage.id] ? "Completed ✓" : "Mark Stage Done"}
          </button>
        </div>
      </div>

      <div style="padding:8px 10px; background:var(--bg-secondary); border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
        <div class="mono-label" style="color:var(--accent-orange); font-weight:700; margin-bottom:3px;">2. CURRENT WEEK (${activeWeek.week} · ${activeWeek.dates})</div>
        <div style="font-size:0.88rem; font-weight:600; margin-bottom:6px;">${activeWeek.deliverable}</div>
        <button type="button" class="icon-btn" data-nav-target="weekly">Open ${activeWeek.week} Proof Tracker &rarr;</button>
      </div>

      <div style="padding:8px 10px; background:var(--bg-secondary); border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
        <div class="mono-label" style="color:var(--accent-orange); font-weight:700; margin-bottom:3px;">3. TODAY'S PRACTICE (${todayRotation.day.toUpperCase()})</div>
        <div style="font-family:var(--font-heading); font-weight:700; font-size:0.96rem; margin-bottom:4px;">${todayRotation.focus}</div>
        <div style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:6px;">${todayRotation.output}</div>
        <button type="button" class="icon-btn" data-nav-target="prep">Open ${todayRotation.day} Drill &rarr;</button>
      </div>
    </div>
  `;
}

function renderOverviewAuditCards() {
  const container = document.getElementById("auditCardsContainer");
  if (!container) return;

  container.innerHTML = PORTAL_DATA.auditCards
    .map(
      (c) => `
    <article class="audit-card">
      <h3 style="font-size:1.08rem;">${c.dimension}</h3>
      <div class="audit-block audit-strength">
        <span class="audit-block-label">✓ Verified Strength (Green)</span>
        <div>${c.strength}</div>
      </div>
      <div class="audit-block audit-gap">
        <span class="audit-block-label">✕ Critical Gap &amp; Risk (Red)</span>
        <div>${c.gap}</div>
      </div>
      <div class="audit-block audit-target">
        <span class="audit-block-label">&rarr; May 2027 Verifiable Target (Orange)</span>
        <div>${c.target}</div>
      </div>
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> ${c.takeaway}
      </div>
    </article>`
    )
    .join("");
}

// ==========================================================================
// DAILY PLAN: STICKY TIMER, PROPORTIONAL 115M BAR & COLLAPSIBLE STAGES (#33, #39)
// ==========================================================================
function renderDailyStages() {
  ensureTodayDailyState();
  const container = document.getElementById("dailyStagesContainer");
  if (!container) return;

  const todayObj = appState.dailyByDate[appState.todayDateKey] || {};

  container.innerHTML = PORTAL_DATA.dailyStages
    .map((s, idx) => {
      const checked = Boolean(todayObj[s.id]);
      const isSelectedTimer = appState.timer.stageIndex === idx;
      const isCollapsed = !isSelectedTimer;
      return `
      <div class="daily-stage-card ${isSelectedTimer ? "active-stage" : ""} ${isCollapsed ? "collapsed" : ""}" id="card-${s.id}">
        <div class="daily-stage-header">
          <label class="check-row ${checked ? "completed" : ""}" style="flex:1; border:none; padding:0; min-height:auto;">
            <input type="checkbox" id="${s.id}" ${checked ? "checked" : ""} data-daily-check-id="${s.id}" aria-label="${s.title}">
            <span class="check-text" style="font-family:var(--font-heading); font-weight:700; font-size:1rem;">
              <span class="badge ${isSelectedTimer ? "badge-orange" : checked ? "badge-pass" : "badge-dark"}">${s.stage} · ${s.minutes}m</span>
              ${s.title}
            </span>
          </label>
          <div style="display:flex; align-items:center; gap:6px;">
            <button type="button" class="icon-btn" data-select-timer="${idx}">
              ${isSelectedTimer ? "Active Stage" : `Load ${s.minutes}m`}
            </button>
            <button type="button" class="icon-btn icon-only-btn" data-toggle-daily-stage="${s.id}" aria-expanded="${!isCollapsed}" aria-label="Toggle ${s.stage} details">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
        </div>
        <div class="daily-stage-body">
          <p style="font-size:0.9375rem; color:var(--text-secondary); margin-bottom:8px;">${s.detail}</p>
          <div class="nested-callout mono-label" style="color:var(--accent-orange);">
            <strong>Mandatory Output:</strong> ${s.deliverable}
          </div>
        </div>
      </div>`;
    })
    .join("");

  updateDailyProportionalBar();
  renderDailyHistoryStrip();
}

function updateDailyProportionalBar() {
  ensureTodayDailyState();
  const todayObj = appState.dailyByDate[appState.todayDateKey] || {};
  let completedMinutes = 0;

  PORTAL_DATA.dailyStages.forEach((s, idx) => {
    const segEl = document.getElementById(`prop-seg-${idx}`);
    const fillEl = document.getElementById(`prop-fill-${idx}`);
    const isDone = Boolean(todayObj[s.id]);
    const totalStageSecs = s.minutes * 60;

    if (isDone) {
      completedMinutes += s.minutes;
      if (segEl) segEl.classList.add("done");
      if (fillEl) fillEl.style.width = "100%";
    } else if (appState.timer.stageIndex === idx) {
      if (segEl) segEl.classList.remove("done");
      const elapsedSecs = Math.max(0, totalStageSecs - appState.timer.remainingSeconds);
      const pct = Math.min(100, Math.round((elapsedSecs / totalStageSecs) * 100));
      completedMinutes += Math.round(elapsedSecs / 60);
      if (fillEl) fillEl.style.width = `${pct}%`;
    } else {
      if (segEl) segEl.classList.remove("done");
      if (fillEl) fillEl.style.width = "0%";
    }
  });

  const summaryEl = document.getElementById("dailyMinutesSummary");
  if (summaryEl) {
    summaryEl.textContent = `${completedMinutes} / 115 mins completed today (${appState.todayDateKey})`;
  }
}

function renderDailyHistoryStrip() {
  const histEl = document.getElementById("dailyHistoryStrip");
  if (!histEl) return;
  const keys = Object.keys(appState.dailyByDate || {}).sort().slice(-7);
  histEl.innerHTML = keys
    .map((dateStr) => {
      const rec = appState.dailyByDate[dateStr] || {};
      const cnt = PORTAL_DATA.dailyStages.filter((s) => Boolean(rec[s.id])).length;
      const isToday = dateStr === appState.todayDateKey;
      return `<span class="badge ${cnt === 5 ? "badge-pass" : isToday ? "badge-orange" : "badge-dark"}">
        ${isToday ? "Today" : dateStr.slice(5)}: ${cnt}/5
      </span>`;
    })
    .join("");
}

function toggleDailyStageCheck(stageId) {
  ensureTodayDailyState();
  const todayObj = appState.dailyByDate[appState.todayDateKey];
  todayObj[stageId] = !todayObj[stageId];
  triggerHaptic(30);
  savePersistedState();

  // Targeted DOM update (#40)
  const inputEl = document.getElementById(stageId);
  if (inputEl) {
    inputEl.checked = Boolean(todayObj[stageId]);
    const row = inputEl.closest(".check-row");
    if (row) row.classList.toggle("completed", Boolean(todayObj[stageId]));
  }
  updateDailyProportionalBar();
  renderDailyHistoryStrip();
  updateGlobalProgressUI();
}

// ==========================================================================
// RELIABLE Date.now() FOCUS TIMER & SCREEN WAKE LOCK (#39)
// ==========================================================================
function formatTimerDisplay(totalSecs) {
  const m = Math.floor(totalSecs / 60);
  const s = totalSecs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

async function requestWakeLockSafe() {
  try {
    if ("wakeLock" in navigator && !appState.timer.wakeLockSentinel) {
      appState.timer.wakeLockSentinel = await navigator.wakeLock.request("screen");
    }
  } catch (e) {
    // Wake Lock optional if permission denied or unsupported
  }
}

function releaseWakeLockSafe() {
  try {
    if (appState.timer.wakeLockSentinel) {
      appState.timer.wakeLockSentinel.release();
      appState.timer.wakeLockSentinel = null;
    }
  } catch (e) {
    appState.timer.wakeLockSentinel = null;
  }
}

function announceTimerStatus(msg) {
  const announcer = document.getElementById("timerStatusAnnouncer");
  if (announcer) announcer.textContent = msg;
}

function updateTimerUI() {
  const stage = PORTAL_DATA.dailyStages[appState.timer.stageIndex];
  const displayEl = document.getElementById("timerReadout");
  const stickyReadoutEl = document.getElementById("stickyTimerReadout");
  const labelEl = document.getElementById("timerStageLabel");
  const stickyLabelEl = document.getElementById("stickyTimerStageLabel");
  const startBtn = document.getElementById("timerStartPauseBtn");
  const stickyStartBtn = document.getElementById("stickyTimerStartBtn");

  const formatted = formatTimerDisplay(appState.timer.remainingSeconds);
  if (displayEl) displayEl.textContent = formatted;
  if (stickyReadoutEl) stickyReadoutEl.textContent = formatted;
  if (labelEl && stage) labelEl.textContent = `${stage.stage}: ${stage.title} (${stage.minutes} mins)`;
  if (stickyLabelEl && stage) stickyLabelEl.textContent = `${stage.stage} (${stage.minutes}m): ${stage.title}`;
  if (startBtn) startBtn.textContent = appState.timer.running ? "Pause Timer" : "Start Focus Timer";
  if (stickyStartBtn) stickyStartBtn.textContent = appState.timer.running ? "Pause" : "Start";

  updateDailyProportionalBar();
}

function syncTimerFromClock() {
  if (!appState.timer.running || !appState.timer.targetEndTimeMs) return;
  const remaining = Math.max(0, Math.round((appState.timer.targetEndTimeMs - Date.now()) / 1000));
  appState.timer.remainingSeconds = remaining;
  if (remaining <= 0) {
    completeCurrentTimerStage();
  } else {
    updateTimerUI();
  }
}

function completeCurrentTimerStage() {
  clearInterval(appState.timer.intervalId);
  appState.timer.running = false;
  appState.timer.targetEndTimeMs = null;
  releaseWakeLockSafe();

  ensureTodayDailyState();
  const currentStage = PORTAL_DATA.dailyStages[appState.timer.stageIndex];
  if (currentStage) {
    appState.dailyByDate[appState.todayDateKey][currentStage.id] = true;
  }

  triggerHaptic([80, 40, 80]);
  announceTimerStatus(`${currentStage ? currentStage.stage : "Stage"} timer finished!`);

  // Automatically load next stage (#39)
  if (appState.timer.stageIndex < PORTAL_DATA.dailyStages.length - 1) {
    appState.timer.stageIndex += 1;
    appState.timer.remainingSeconds = PORTAL_DATA.dailyStages[appState.timer.stageIndex].minutes * 60;
    showToast(`${currentStage.stage} complete! Auto-loaded ${PORTAL_DATA.dailyStages[appState.timer.stageIndex].stage}.`);
  } else {
    appState.timer.remainingSeconds = 0;
    showToast("All 5 daily stages completed for today!");
  }

  savePersistedState();
  renderDailyStages();
  updateTimerUI();
  updateGlobalProgressUI();
}

function selectTimerStage(index) {
  clearInterval(appState.timer.intervalId);
  appState.timer.running = false;
  appState.timer.targetEndTimeMs = null;
  releaseWakeLockSafe();
  appState.timer.stageIndex = index;
  appState.timer.remainingSeconds = PORTAL_DATA.dailyStages[index].minutes * 60;
  savePersistedState();
  updateTimerUI();
  renderDailyStages();
}

function toggleTimerStartPause() {
  if (appState.timer.running) {
    syncTimerFromClock();
    clearInterval(appState.timer.intervalId);
    appState.timer.running = false;
    appState.timer.targetEndTimeMs = null;
    releaseWakeLockSafe();
    savePersistedState();
    updateTimerUI();
    announceTimerStatus("Focus timer paused.");
  } else {
    if (appState.timer.remainingSeconds <= 0) {
      appState.timer.remainingSeconds = PORTAL_DATA.dailyStages[appState.timer.stageIndex].minutes * 60;
    }
    appState.timer.running = true;
    appState.timer.targetEndTimeMs = Date.now() + appState.timer.remainingSeconds * 1000;
    requestWakeLockSafe();
    savePersistedState();
    updateTimerUI();
    announceTimerStatus("Focus timer started.");
    clearInterval(appState.timer.intervalId);
    appState.timer.intervalId = setInterval(syncTimerFromClock, 1000);
  }
}

function resetTimer() {
  clearInterval(appState.timer.intervalId);
  appState.timer.running = false;
  appState.timer.targetEndTimeMs = null;
  releaseWakeLockSafe();
  appState.timer.remainingSeconds = PORTAL_DATA.dailyStages[appState.timer.stageIndex].minutes * 60;
  savePersistedState();
  updateTimerUI();
}

// ==========================================================================
// WEEKLY PLAN: M1-M6 CHIPS, CURRENT WEEK HIGHLIGHT & PROOF-LINK VERIFICATION (#36)
// ==========================================================================
function renderWeeklyTable() {
  const tbody = document.getElementById("weeklyScheduleBody");
  const countEl = document.getElementById("weeklyFilterCount");
  if (!tbody) return;

  const activeWeekObj = getCurrentActiveWeekObj();
  const q = appState.weekSearchQuery.trim().toLowerCase();

  const filtered = PORTAL_DATA.weeklySchedule.filter((item) => {
    const matchesMonth = appState.weekMonthFilter === "ALL" || item.month === appState.weekMonthFilter;
    const isVerified = isWeekFullyVerified(item.id);
    const matchesStatus =
      appState.weekStatusFilter === "ALL" ||
      (appState.weekStatusFilter === "DONE" && isVerified) ||
      (appState.weekStatusFilter === "PENDING" && !isVerified);
    const matchesQuery =
      !q ||
      item.week.toLowerCase().includes(q) ||
      item.dates.toLowerCase().includes(q) ||
      item.focus.toLowerCase().includes(q) ||
      item.deliverable.toLowerCase().includes(q);
    return matchesMonth && matchesStatus && matchesQuery;
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} / 24 Weeks`;
  }

  // Sync M1-M6 chip buttons
  document.querySelectorAll("[data-week-month-chip]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-week-month-chip") === appState.weekMonthFilter);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:24px;">No weeks match the current filter criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered
    .map((w) => {
      const checked = Boolean(appState.checkedItems[w.id]);
      const proofLink = appState.weeklyProofLinks[w.id] || "";
      const hasValidProof = isValidProofLink(proofLink);
      const fullyVerified = checked && hasValidProof;
      const isCurrentWeek = activeWeekObj && activeWeekObj.id === w.id;

      let statusBadgeClass = "badge-dark";
      let statusLabel = "PENDING";
      if (fullyVerified) {
        statusBadgeClass = "badge-pass";
        statusLabel = "VERIFIED";
      } else if (checked && !hasValidProof) {
        statusBadgeClass = "badge-warn";
        statusLabel = "UNVERIFIED (ADD PROOF LINK)";
      } else if (isCurrentWeek) {
        statusBadgeClass = "badge-orange";
        statusLabel = "CURRENT WEEK";
      }

      return `
      <tr id="row-${w.id}" class="${fullyVerified ? "completed" : ""} ${isCurrentWeek ? "current-week-highlight" : ""}" style="${isCurrentWeek ? "background:rgba(244,174,82,0.14);" : ""}">
        <td data-label="Week" style="white-space:nowrap;">
          <label class="check-row ${fullyVerified ? "completed" : ""}" style="border:none; padding:2px 0; min-height:auto;">
            <input type="checkbox" id="${w.id}" ${checked ? "checked" : ""} data-check-id="${w.id}" aria-label="Mark ${w.week} task complete">
            <span class="mono-label" style="font-weight:700; font-size:0.95rem;">${w.week}</span>
          </label>
          ${isCurrentWeek ? `<span class="badge badge-orange" style="margin-top:4px;">Active Now</span>` : ""}
        </td>
        <td data-label="Month & Dates" style="white-space:nowrap;">
          <span class="badge badge-dark">${w.month}</span>
          <div class="mono-label" style="color:var(--text-muted); margin-top:3px;">${w.dates}</div>
        </td>
        <td data-label="Core Build & Research Focus">${w.focus}</td>
        <td data-label="Verifiable Deliverable & Evidence Proof">
          <div class="deliverable-highlight-box">
            <strong style="color:var(--text-primary);">${w.deliverable}</strong>
          </div>
          <div class="proof-input-row">
            <input
              type="url"
              class="form-input"
              style="flex:1 1 190px; min-height:38px; padding:4px 8px; font-size:1rem;"
              placeholder="Paste GitHub commit/repo URL or DOI to verify..."
              value="${escapeHtml(proofLink)}"
              data-proof-input="${w.id}"
              aria-label="Evidence proof link for ${w.week}"
            >
            <button type="button" class="icon-btn" style="min-height:38px;" data-save-proof="${w.id}">
              Save Proof
            </button>
          </div>
        </td>
        <td data-label="Verification Status" style="white-space:nowrap;">
          <span class="badge ${statusBadgeClass}" id="status-badge-${w.id}">${statusLabel}</span>
        </td>
      </tr>`;
    })
    .join("");
}

function updateSingleWeekRowUI(weekId) {
  const checked = Boolean(appState.checkedItems[weekId]);
  const proofLink = appState.weeklyProofLinks[weekId] || "";
  const hasValidProof = isValidProofLink(proofLink);
  const fullyVerified = checked && hasValidProof;
  const activeWeekObj = getCurrentActiveWeekObj();
  const isCurrentWeek = activeWeekObj && activeWeekObj.id === weekId;

  const row = document.getElementById(`row-${weekId}`);
  const badge = document.getElementById(`status-badge-${weekId}`);
  if (row) {
    row.classList.toggle("completed", fullyVerified);
  }
  if (badge) {
    if (fullyVerified) {
      badge.className = "badge badge-pass";
      badge.textContent = "VERIFIED";
    } else if (checked && !hasValidProof) {
      badge.className = "badge badge-warn";
      badge.textContent = "UNVERIFIED (ADD PROOF LINK)";
    } else if (isCurrentWeek) {
      badge.className = "badge badge-orange";
      badge.textContent = "CURRENT WEEK";
    } else {
      badge.className = "badge badge-dark";
      badge.textContent = "PENDING";
    }
  }
}

// ==========================================================================
// MONTHLY PLAN: SWIPEABLE SINGLE-MONTH SELECTOR, 2 TABS & SVG PROGRESS RING
// ==========================================================================
function renderMonthlyBlueprints() {
  const container = document.getElementById("monthlyCardsContainer");
  if (!container) return;

  const currentMonthObj =
    PORTAL_DATA.monthlyBlueprints.find((m) => m.code === appState.activeMonthCode) ||
    PORTAL_DATA.monthlyBlueprints[0];

  const mIdx = PORTAL_DATA.monthlyBlueprints.findIndex((m) => m.code === currentMonthObj.code);
  const doneCount = currentMonthObj.kpis.filter((k) => Boolean(appState.checkedItems[k.id])).length;
  const pct = Math.round((doneCount / currentMonthObj.kpis.length) * 100);

  // Month Selector Bar + Swipeable Active Month Card + Hidden KPI IDs for remaining months so all m1_k1..m6_k4 exist in DOM
  const selectorHtml = `
    <div class="jump-chips-bar" role="tablist" aria-label="Select Month M1 to M6">
      ${PORTAL_DATA.monthlyBlueprints
        .map((m) => {
          const mDone = m.kpis.filter((k) => Boolean(appState.checkedItems[k.id])).length;
          const isAct = m.code === currentMonthObj.code;
          return `<button type="button" role="tab" aria-selected="${isAct}" class="jump-chip ${isAct ? "active" : ""}" data-select-month="${m.code}">
            ${m.code}: ${m.month} (${mDone}/4)
          </button>`;
        })
        .join("")}
    </div>
  `;

  const hiddenOtherKpis = PORTAL_DATA.monthlyBlueprints
    .filter((m) => m.code !== currentMonthObj.code)
    .map((m) =>
      m.kpis
        .map(
          (k) =>
            `<input type="checkbox" id="${k.id}" class="sr-only" ${appState.checkedItems[k.id] ? "checked" : ""} data-check-id="${k.id}" aria-label="${k.text}">`
        )
        .join("")
    )
    .join("");

  container.innerHTML = `
    ${selectorHtml}
    ${hiddenOtherKpis}
    <article class="card" id="monthlySwipeCard">
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px; border-bottom:1px solid var(--border-medium); padding-bottom:12px; margin-bottom:12px;">
        <div>
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin-bottom:4px;">
            <span class="badge badge-orange">${currentMonthObj.month} (${currentMonthObj.code})</span>
            <span class="mono-label" style="color:var(--text-muted);">${currentMonthObj.period}</span>
            <span class="badge badge-gold">${currentMonthObj.hoursPerWeek}</span>
          </div>
          <h3 style="font-size:1.22rem;">${currentMonthObj.theme}</h3>
        </div>

        <!-- Inline SVG Monthly Progress Ring (#23) -->
        <div style="display:flex; align-items:center; gap:10px; background:var(--bg-secondary); padding:8px 12px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
          ${createSvgRing(pct, 42, 4)}
          <div>
            <div class="mono-label" style="font-weight:700;">KPIs: ${doneCount}/${currentMonthObj.kpis.length}</div>
            <div class="mono-label" style="color:var(--text-muted);">${pct}% Verified</div>
          </div>
        </div>
      </div>

      <p style="margin-bottom:12px; font-size:0.95rem;"><strong>Primary Objective:</strong> ${currentMonthObj.primaryObjective}</p>

      <!-- 2 Separated Tabs: Research Targets vs Technical & Docs Targets (#Monthly) -->
      <div class="subtab-bar" role="tablist" aria-label="Monthly Target Domains">
        <button type="button" role="tab" aria-selected="${appState.activeMonthTargetTab === "research"}" class="subtab-btn ${appState.activeMonthTargetTab === "research" ? "active" : ""}" data-month-target-tab="research">
          Research Targets
        </button>
        <button type="button" role="tab" aria-selected="${appState.activeMonthTargetTab === "technical"}" class="subtab-btn ${appState.activeMonthTargetTab === "technical" ? "active" : ""}" data-month-target-tab="technical">
          Technical &amp; Docs Targets
        </button>
      </div>

      <div style="padding:12px; background:var(--bg-secondary); border-radius:var(--radius-sm); border:1px solid var(--border-subtle); margin-bottom:12px;">
        ${
          appState.activeMonthTargetTab === "research"
            ? `<h4 style="font-size:0.98rem; color:var(--accent-orange); margin-bottom:4px;">Research &amp; Literature Targets (${currentMonthObj.month})</h4>
               <p style="font-size:0.9375rem;">${currentMonthObj.researchTargets}</p>`
            : `<h4 style="font-size:0.98rem; color:var(--accent-orange); margin-bottom:4px;">Technical, Engineering &amp; Docs Targets (${currentMonthObj.month})</h4>
               <p style="font-size:0.9375rem;">${currentMonthObj.technicalTargets}</p>`
        }
      </div>

      <div class="nested-callout mono-label" style="margin-bottom:14px;">
        <strong>Weekly Cadence:</strong> ${currentMonthObj.weeklyDeliverablesSummary}
      </div>

      <h4 style="font-size:1rem; margin-bottom:6px;">End-of-Month Verification Checklist (${currentMonthObj.code}):</h4>
      <div>
        ${currentMonthObj.kpis
          .map((k) => {
            const checked = Boolean(appState.checkedItems[k.id]);
            return `
            <label class="check-row ${checked ? "completed" : ""}">
              <input type="checkbox" id="${k.id}" ${checked ? "checked" : ""} data-check-id="${k.id}">
              <span class="check-text" style="font-size:0.9375rem;">${k.text}</span>
            </label>`;
          })
          .join("")}
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-top:14px; padding-top:10px; border-top:1px solid var(--border-subtle);">
        <button type="button" class="icon-btn" data-select-month="${PORTAL_DATA.monthlyBlueprints[(mIdx + 5) % 6].code}">
          &larr; Prev Month (${PORTAL_DATA.monthlyBlueprints[(mIdx + 5) % 6].code})
        </button>
        <span class="mono-label" style="color:var(--text-muted);">Swipe or tap M1–M6</span>
        <button type="button" class="icon-btn" data-select-month="${PORTAL_DATA.monthlyBlueprints[(mIdx + 1) % 6].code}">
          Next Month (${PORTAL_DATA.monthlyBlueprints[(mIdx + 1) % 6].code}) &rarr;
        </button>
      </div>
    </article>
  `;
}

// ==========================================================================
// ROADMAP: PROGRESSIVE STAIRCASE PROOF LADDER (RANK 7 GREY WEIGHT: 0)
// ==========================================================================
function renderProofLadder() {
  const staircaseEl = document.getElementById("proofStaircaseContainer");
  const tbody = document.getElementById("proofLadderBody");

  if (staircaseEl) {
    staircaseEl.innerHTML = PORTAL_DATA.proofLadder
      .map(
        (row) => `
      <div class="stair-step ${row.zeroWeight ? "rank-zero-weight" : ""}" style="margin-left:${row.indent * 8}px;">
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px; margin-bottom:4px;">
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:8px;">
            <span class="badge ${row.zeroWeight ? "badge-neutral" : "badge-dark"}">${row.tier}</span>
            <strong style="font-size:0.98rem;">${row.artifact}</strong>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="badge ${row.zeroWeight ? "badge-neutral" : "badge-orange"}">${row.weight}</span>
            <span class="mono-label">Verifier: ${row.verifier}</span>
          </div>
        </div>
        <p style="font-size:0.88rem;">${row.reality}</p>
      </div>`
      )
      .join("");
  }

  if (tbody) {
    tbody.innerHTML = PORTAL_DATA.proofLadder
      .map(
        (row) => `
      <tr class="${row.zeroWeight ? "rank-zero-weight" : ""}">
        <td data-label="Rank"><span class="badge ${row.zeroWeight ? "badge-neutral" : "badge-dark"}">${row.tier} (${row.weight})</span></td>
        <td data-label="Artifact Type"><strong>${row.artifact}</strong></td>
        <td data-label="Verifier" class="mono-label">${row.verifier}</td>
        <td data-label="Execution Rule" style="font-size:0.9rem;">${row.reality}</td>
      </tr>`
      )
      .join("");
  }
}

// ==========================================================================
// PROJECTS HUB: COLLAPSED BY DEFAULT, 4 TABS & INTERACTIVE <DETAILS> FILE TREE
// ==========================================================================
function buildInteractiveFileTreeHtml(markdownTree, projCode) {
  const lines = String(markdownTree).split("\n").filter((l) => l.trim().length > 0);
  const items = lines.map((line) => {
    const indentMatch = line.match(/^(\s*)-\s+`([^`]+)`(?:\s+—\s+(.*))?$/);
    if (indentMatch) {
      return {
        level: Math.floor(indentMatch[1].length / 2),
        name: indentMatch[2],
        comment: indentMatch[3] || "",
        isFolder: indentMatch[2].endsWith("/")
      };
    }
    return {
      level: 0,
      name: line.replace(/^[-\s`]+|[`]+$/g, ""),
      comment: "",
      isFolder: line.includes("/")
    };
  });

  return `
    <div class="interactive-file-tree" aria-label="${escapeHtml(projCode)} Interactive File Tree">
      <div class="mono-label" style="color:var(--text-muted); margin-bottom:8px;">Tap any folder to expand/collapse or inspect file purpose:</div>
      <div style="display:grid; gap:6px;">
        ${items
          .map((item, idx) => {
            const padLeft = item.level * 14;
            if (item.isFolder) {
              return `
              <details class="tree-folder" open style="margin-left:${padLeft}px;">
                <summary>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  <span>${escapeHtml(item.name)}</span>
                  ${item.comment ? `<span class="tree-file-comment">— ${escapeHtml(item.comment)}</span>` : ""}
                </summary>
              </details>`;
            }
            return `
            <div class="tree-file-item" style="margin-left:${padLeft}px;" tabindex="0" data-file-toast="${escapeHtml(item.name)}: ${escapeHtml(item.comment || "Core project module")}">
              <span style="font-weight:600; color:var(--text-primary);">📄 ${escapeHtml(item.name)}</span>
              ${item.comment ? `<span class="tree-file-comment">${escapeHtml(item.comment)}</span>` : `<span class="badge badge-gold">Verified File</span>`}
            </div>`;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderProjectsCatalog() {
  const container = document.getElementById("projectsCatalogContainer");
  const quickNav = document.getElementById("projectQuickJumpBar");
  if (!container) return;

  const filtered = PORTAL_DATA.projects.filter(
    (p) => appState.projectCategoryFilter === "ALL" || p.category === appState.projectCategoryFilter
  );

  if (quickNav) {
    quickNav.innerHTML = filtered
      .map(
        (p) => `
      <button type="button" class="project-pill-btn" data-focus-project="${p.id}">
        ${p.code}
      </button>`
      )
      .join("");
  }

  container.innerHTML = filtered
    .map((p) => {
      const activeTab = appState.projectActiveTabs[p.id] || "problem";
      return `
    <article class="project-card collapsed" id="card-${p.id}">
      <div id="${p.id}" class="project-card-header" data-toggle-project="${p.id}" role="button" tabindex="0" aria-expanded="false" aria-controls="body-${p.id}">
        <div style="flex:1; min-width:220px;">
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin-bottom:4px;">
            <span class="badge badge-orange">${p.code}</span>
            <span class="mono-label" style="color:var(--text-muted);">${p.months} · ${p.hours}</span>
          </div>
          <h3 style="font-size:1.15rem;">${p.title}</h3>
        </div>
        <button type="button" class="icon-btn" data-toggle-project="${p.id}" aria-label="Toggle ${p.title} details">
          <span>Details</span>
          <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
      </div>

      <div class="project-card-body" id="body-${p.id}">
        <div style="margin-bottom:10px; font-size:0.875rem; color:var(--text-secondary);">
          <strong>Tracks Served:</strong> ${p.tracksServed}
        </div>

        <!-- 4 Project Detail Tabs: Problem, Plan, Outputs, Files (#Projects & #27) -->
        <div class="subtab-bar" role="tablist" aria-label="${p.code} Detail Tabs">
          <button type="button" role="tab" aria-selected="${activeTab === "problem"}" class="subtab-btn ${activeTab === "problem" ? "active" : ""}" data-proj-tab="problem" data-proj-id="${p.id}">Problem</button>
          <button type="button" role="tab" aria-selected="${activeTab === "plan"}" class="subtab-btn ${activeTab === "plan" ? "active" : ""}" data-proj-tab="plan" data-proj-id="${p.id}">Plan &amp; Verify</button>
          <button type="button" role="tab" aria-selected="${activeTab === "outputs"}" class="subtab-btn ${activeTab === "outputs" ? "active" : ""}" data-proj-tab="outputs" data-proj-id="${p.id}">Outputs (6)</button>
          <button type="button" role="tab" aria-selected="${activeTab === "files"}" class="subtab-btn ${activeTab === "files" ? "active" : ""}" data-proj-tab="files" data-proj-id="${p.id}">Files</button>
        </div>

        <!-- Tab 1: Problem -->
        <div class="proj-tab-pane" data-pane-proj="${p.id}" data-pane-name="problem" style="display:${activeTab === "problem" ? "block" : "none"};">
          <div class="grid-2" style="margin-bottom:12px;">
            <div class="card-subtle">
              <h4 style="font-size:0.95rem; color:var(--accent-orange); margin-bottom:4px;">Real-World Problem Statement</h4>
              <p style="font-size:0.9375rem;">${p.problem}</p>
            </div>
            <div class="card-subtle">
              <h4 style="font-size:0.95rem; color:var(--accent-orange); margin-bottom:4px;">Methodological Novelty &amp; Differentiation</h4>
              <p style="font-size:0.9375rem;">${p.novelty}</p>
            </div>
          </div>
          <div class="card-subtle">
            <h4 style="font-size:0.95rem; margin-bottom:6px;">Required Stack, Datasets &amp; Licensing</h4>
            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:8px;">
              ${p.stack.map((s) => `<span class="badge badge-gold">${s}</span>`).join("")}
            </div>
            <p style="font-size:0.9rem; color:var(--text-secondary);"><strong>Datasets &amp; Licenses:</strong> ${p.datasets}</p>
          </div>
        </div>

        <!-- Tab 2: Plan & Verification CLI -->
        <div class="proj-tab-pane" data-pane-proj="${p.id}" data-pane-name="plan" style="display:${activeTab === "plan" ? "block" : "none"};">
          <div style="margin-bottom:12px;">
            <h4 style="font-size:0.98rem; margin-bottom:8px;">Implementation Steps &amp; Schedule</h4>
            <ol style="padding-left:18px; font-size:0.9375rem; display:grid; gap:6px;">
              ${p.steps.map((st) => `<li>${st}</li>`).join("")}
            </ol>
          </div>
          <div class="card-subtle">
            <h4 style="font-size:0.95rem; margin-bottom:6px;">Ground-Truth Validation Basis</h4>
            <p style="font-size:0.92rem; margin-bottom:8px;">${p.validationTruth}</p>
            <div class="code-panel" style="margin-top:6px;">
              <div class="code-panel-header">
                <span class="code-filename">Headless Verification CLI Command</span>
                <button type="button" class="icon-btn" style="min-height:36px; background:var(--surface-gold); color:#2A1A0E;" data-copy-text="${escapeHtml(p.verifyCmd)}" data-copy-label="${p.code} verification command">
                  Copy Command
                </button>
              </div>
              <pre class="code-pre">${escapeHtml(p.verifyCmd)}</pre>
            </div>
          </div>
        </div>

        <!-- Tab 3: Outputs -->
        <div class="proj-tab-pane" data-pane-proj="${p.id}" data-pane-name="outputs" style="display:${activeTab === "outputs" ? "block" : "none"};">
          <h4 style="font-size:0.98rem; margin-bottom:8px;">6 Integrated Verifiable Outputs</h4>
          <ul style="list-style:none; display:grid; gap:8px; font-size:0.9375rem;">
            ${p.outputs.map((out) => `<li class="nested-callout">${out}</li>`).join("")}
          </ul>
        </div>

        <!-- Tab 4: Interactive Collapsible File Tree + Copyable Raw Spec (#28) -->
        <div class="proj-tab-pane" data-pane-proj="${p.id}" data-pane-name="files" style="display:${activeTab === "files" ? "block" : "none"};">
          ${buildInteractiveFileTreeHtml(p.markdownTree, p.code)}
          <details class="read-more-block" style="margin-top:10px;">
            <summary>View / Copy Raw ASCII or Markdown Tree</summary>
            <div class="code-panel">
              <div class="code-panel-header">
                <span class="code-filename">File Structure (${p.code})</span>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  <button type="button" class="icon-btn" style="min-height:36px;" data-tree-mode="ascii" data-tree-proj="${p.id}">Plain-Text</button>
                  <button type="button" class="icon-btn" style="min-height:36px;" data-tree-mode="markdown" data-tree-proj="${p.id}">Markdown</button>
                  <button type="button" class="icon-btn" style="min-height:36px; background:var(--surface-gold); color:#2A1A0E;" data-copy-tree="${p.id}">Copy</button>
                </div>
              </div>
              <pre class="code-pre" id="tree-pre-${p.id}" data-current-mode="ascii">${escapeHtml(p.asciiTree)}</pre>
            </div>
          </details>
        </div>

        <div class="key-takeaway">
          <strong>Key Takeaway:</strong> ${p.takeaway}
        </div>
      </div>
    </article>`;
    })
    .join("");
}

function switchVerisciStarterTab(tabKey) {
  appState.activeStarterTab = tabKey;
  document.querySelectorAll("[data-starter-tab]").forEach((btn) => {
    const isAct = btn.getAttribute("data-starter-tab") === tabKey;
    btn.classList.toggle("active", isAct);
    btn.setAttribute("aria-selected", String(isAct));
  });
  const codeEl = document.getElementById("verisciStarterCodePre");
  const titleEl = document.getElementById("verisciStarterFilename");
  const labels = {
    structure: "verisci/ — Complete Repository Directory Architecture",
    pyproject: "Task Folder 6-Component Specification Contract",
    harness: "Inspect AI Evaluation & Docker Sandbox Architecture",
    exampleTask: "6-Category Silent Failure Taxonomy",
    ciWorkflow: "Dual-Pass Continuous Integration & 6-Month JOSS Protocol"
  };
  if (titleEl) titleEl.textContent = labels[tabKey] || "verisci Architecture Specification";
  if (codeEl) codeEl.textContent = PORTAL_DATA.verisciStarterFiles[tabKey] || "";
}

// ==========================================================================
// RESEARCH TRACK: 12-STEP STEPPER & WEAK VS PROFESSIONAL TOGGLEABLE CARDS
// ==========================================================================
function renderResearchInteractiveWidgets() {
  const stepperContainer = document.getElementById("researchStepperContainer");
  if (stepperContainer) {
    const idx = appState.activeResearchStep;
    const item = PORTAL_DATA.researchSteps12[idx] || PORTAL_DATA.researchSteps12[0];
    const pct = Math.round(((idx + 1) / 12) * 100);

    stepperContainer.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px; margin-bottom:8px;">
        <span class="badge badge-orange">Step ${item.step} / 12 (${pct}%)</span>
        <button type="button" class="icon-btn" data-toggle-all-research-steps="true">
          ${appState.showAllResearchSteps ? "Compact Stepper View" : "Show All 12 Steps"}
        </button>
      </div>
      <div class="mini-progress-track" style="height:8px; margin-bottom:12px;">
        <div class="mini-progress-fill" style="width:${pct}%;"></div>
      </div>
      <div class="jump-chips-bar" role="tablist" aria-label="12 Research Steps">
        ${PORTAL_DATA.researchSteps12
          .map(
            (s, i) =>
              `<button type="button" role="tab" aria-selected="${i === idx}" class="jump-chip ${i === idx ? "active" : ""}" style="min-height:38px; padding:4px 10px;" data-research-step="${i}">
                ${s.step}. ${s.title.split(" ")[0]}
              </button>`
          )
          .join("")}
      </div>
      ${
        appState.showAllResearchSteps
          ? `<ol style="padding-left:18px; display:grid; gap:8px; font-size:0.9375rem;">
              ${PORTAL_DATA.researchSteps12.map((s) => `<li><strong>${s.title}:</strong> ${s.detail}</li>`).join("")}
            </ol>`
          : `<div style="padding:14px; background:var(--bg-secondary); border-radius:var(--radius-sm); border-left:4px solid var(--accent-orange);">
              <h3 style="font-size:1.1rem; margin-bottom:6px;">Step ${item.step}: ${item.title}</h3>
              <p style="font-size:0.95rem;">${item.detail}</p>
              <div style="display:flex; justify-content:space-between; gap:8px; margin-top:12px;">
                <button type="button" class="icon-btn" data-research-step="${(idx + 11) % 12}">&larr; Prev Step</button>
                <button type="button" class="icon-btn" data-research-step="${(idx + 1) % 12}">Next Step &rarr;</button>
              </div>
            </div>`
      }
    `;
  }

  const contrastContainer = document.getElementById("litReviewContrastContainer");
  if (contrastContainer) {
    const dIdx = appState.activeLitReviewDim;
    const dItem = PORTAL_DATA.litReviewContrast[dIdx] || PORTAL_DATA.litReviewContrast[0];
    contrastContainer.innerHTML = `
      <div class="jump-chips-bar" role="tablist" aria-label="Literature Review Comparison Dimensions">
        ${PORTAL_DATA.litReviewContrast
          .map(
            (d, i) =>
              `<button type="button" role="tab" aria-selected="${i === dIdx}" class="jump-chip ${i === dIdx ? "active" : ""}" data-lit-dim="${i}">
                ${i + 1}. ${d.dim}
              </button>`
          )
          .join("")}
      </div>
      <div class="grid-2">
        <div class="audit-block audit-gap">
          <span class="audit-block-label">✕ Weak "Paper Summary Dump" (Avoid)</span>
          <div style="font-size:0.9375rem;">${dItem.weak}</div>
        </div>
        <div class="audit-block audit-strength">
          <span class="audit-block-label">✓ Professional Literature Review (Target)</span>
          <div style="font-size:0.9375rem;">${dItem.prof}</div>
        </div>
      </div>
    `;
  }
}

// ==========================================================================
// TECHNICAL WRITING: INTERACTIVE 10-PT CONTRACT & 10 DAY-1 ACCORDIONS (#Writing)
// ==========================================================================
function renderWritingInteractiveWidgets() {
  const contractEl = document.getElementById("contractChecklistContainer");
  if (contractEl) {
    const done = PORTAL_DATA.contractChecklist10.filter((c) => Boolean(appState.checkedItems[c.id])).length;
    const pct = Math.round((done / PORTAL_DATA.contractChecklist10.length) * 100);
    contractEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <span class="badge badge-gold">10-POINT ARTIFACT CONTRACT</span>
        <span class="mono-label" style="font-weight:700; color:var(--accent-orange);">${done} / 10 Checked (${pct}%)</span>
      </div>
      <div class="mini-progress-track" style="height:8px; margin-bottom:10px;">
        <div class="mini-progress-fill" style="width:${pct}%;"></div>
      </div>
      <div>
        ${PORTAL_DATA.contractChecklist10
          .map((c) => {
            const isChecked = Boolean(appState.checkedItems[c.id]);
            return `
            <label class="check-row ${isChecked ? "completed" : ""}" style="padding:6px 0;">
              <input type="checkbox" id="${c.id}" ${isChecked ? "checked" : ""} data-check-id="${c.id}">
              <span class="check-text" style="font-size:0.9rem;">
                <strong>${c.num}. ${c.title}:</strong> ${c.desc}
              </span>
            </label>`;
          })
          .join("")}
      </div>
    `;
  }

  const accEl = document.getElementById("day1AccordionsContainer");
  if (accEl) {
    accEl.innerHTML = PORTAL_DATA.day1Accordions
      .map(
        (item, idx) => `
      <details class="accordion-item" ${idx === 0 ? "open" : ""}>
        <summary class="accordion-summary">
          <span>${item.title}</span>
          <span class="badge badge-dark">Item ${item.num}/10</span>
        </summary>
        <div class="accordion-body">
          <p style="white-space:pre-line; font-size:0.9375rem; margin-bottom:8px;">${escapeHtml(item.body)}</p>
          <button type="button" class="icon-btn" style="min-height:38px;" data-copy-text="${escapeHtml(item.title + "\n" + item.body)}" data-copy-label="${escapeHtml(item.title)}">
            Copy Item ${item.num}
          </button>
        </div>
      </details>`
      )
      .join("");
  }
}

// ==========================================================================
// TECHNICAL PREP: TIER 1-3 TABS, AUTO WEEKDAY SELECTOR & LEITNER FLASHCARDS
// ==========================================================================
function renderSevenDayRotation() {
  const daySelectorEl = document.getElementById("sevenDaySelectorContainer");
  const tbody = document.getElementById("sevenDayRotationBody");
  const todayWeekdayIndex = new Date().getDay();

  if (daySelectorEl) {
    const selectedObj =
      PORTAL_DATA.sevenDayRotation.find((r) => r.dayIndex === appState.activePrepDayIndex) ||
      PORTAL_DATA.sevenDayRotation[0];
    const isToday = selectedObj.dayIndex === todayWeekdayIndex;

    daySelectorEl.innerHTML = `
      <div class="jump-chips-bar" role="tablist" aria-label="Select Practice Weekday">
        ${PORTAL_DATA.sevenDayRotation
          .map((r) => {
            const act = r.dayIndex === appState.activePrepDayIndex;
            const todayMatch = r.dayIndex === todayWeekdayIndex;
            return `<button type="button" role="tab" aria-selected="${act}" class="jump-chip ${act ? "active" : ""}" data-prep-day="${r.dayIndex}">
              ${r.day.slice(0, 3)}${todayMatch ? " (Today)" : ""}
            </button>`;
          })
          .join("")}
      </div>
      <div class="card" style="margin-bottom:14px; border-left:4px solid var(--accent-orange);">
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px; margin-bottom:8px;">
          <div>
            <span class="badge ${isToday ? "badge-orange" : "badge-dark"}">${selectedObj.day}${isToday ? " · TODAY'S SCHEDULED FOCUS" : ""}</span>
            <h3 style="font-size:1.15rem; margin-top:4px;">${selectedObj.focus}</h3>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            ${selectedObj.docs.map((d) => `<a href="${d.url}" target="_blank" rel="noopener noreferrer" class="chip-link">${d.name} ↗</a>`).join("")}
          </div>
        </div>
        <p style="font-size:0.9375rem; color:var(--text-secondary); margin-bottom:8px;"><strong>Why Read:</strong> ${selectedObj.whyRead}</p>
        <p style="font-size:0.9375rem; margin-bottom:8px;"><strong>Practice Task:</strong> ${selectedObj.practiceTask}</p>
        <div class="nested-callout mono-label" style="color:var(--status-pass); font-weight:700;">
          Measurable Daily Deliverable: ${selectedObj.output}
        </div>
      </div>
    `;
  }

  if (tbody) {
    tbody.innerHTML = PORTAL_DATA.sevenDayRotation
      .map(
        (r) => `
      <tr class="${r.dayIndex === todayWeekdayIndex ? "current-week-highlight" : ""}">
        <td data-label="Day & Focus">
          <strong style="font-family:var(--font-heading); font-size:1rem;">${r.day}${r.dayIndex === todayWeekdayIndex ? " (Today)" : ""}</strong><br>
          <span class="badge badge-gold" style="margin-top:4px;">${r.focus}</span>
        </td>
        <td data-label="Official Documentation">
          <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:6px;">
            ${r.docs.map((d) => `<a href="${d.url}" target="_blank" rel="noopener noreferrer" class="chip-link">${d.name} ↗</a>`).join("")}
          </div>
          <div style="font-size:0.875rem; color:var(--text-secondary);">${r.whyRead}</div>
        </td>
        <td data-label="Practice Method" style="font-size:0.9rem;">${r.practiceTask}</td>
        <td data-label="Daily Deliverable"><span class="mono-label" style="color:var(--status-pass); font-weight:600;">${r.output}</span></td>
      </tr>`
      )
      .join("");
  }
}

function renderFlashcardDeck() {
  const container = document.getElementById("interviewFlashcardsContainer");
  if (!container) return;

  const deck = appState.flashcardDeck;
  const cards = PORTAL_DATA.interviewQuestions;
  const currentCard = cards[deck.currentIndex] || cards[0];
  const boxNum = deck.boxes[currentCard.id] || 1;
  const boxLabels = {
    1: "Leitner Box 1 · Review Daily",
    2: "Leitner Box 2 · Every 3 Days",
    3: "Leitner Box 3 · Mastered (Weekly)"
  };

  const b1Count = cards.filter((c) => (deck.boxes[c.id] || 1) === 1).length;
  const b2Count = cards.filter((c) => deck.boxes[c.id] === 2).length;
  const b3Count = cards.filter((c) => deck.boxes[c.id] === 3).length;

  container.innerHTML = `
    <div class="card" style="grid-column: 1 / -1;">
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid var(--border-subtle);">
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:6px;">
          <span class="badge badge-orange">Card ${deck.currentIndex + 1} of ${cards.length}</span>
          <span class="badge badge-gold">${currentCard.domain}</span>
          <span class="badge ${boxNum === 3 ? "badge-pass" : boxNum === 2 ? "badge-warn" : "badge-dark"}">${boxLabels[boxNum]}</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="mono-label">Box 1: ${b1Count} · Box 2: ${b2Count} · Mastered: ${b3Count}</span>
          <button type="button" class="icon-btn" id="fcTimerBtn" data-fc-timer-toggle="true" style="background:var(--surface-dark); color:var(--surface-gold);">
            ⏱ ${deck.countdownSeconds}s ${deck.countdownRunning ? "(Pause)" : "Start 90s"}
          </button>
        </div>
      </div>

      <h3 style="font-size:1.12rem; margin-bottom:12px;">${currentCard.question}</h3>

      <div id="interview-ans-${deck.currentIndex}" style="display:${deck.revealed ? "block" : "none"}; padding:12px; background:var(--status-pass-bg); border-left:4px solid var(--status-pass); border-radius:0 6px 6px 0; font-size:0.95rem; margin-bottom:12px;">
        <strong>Model 90-Second Answer:</strong> ${currentCard.answer}
      </div>

      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          <button type="button" class="btn btn-secondary" data-toggle-interview="${deck.currentIndex}">
            ${deck.revealed ? "Hide Model Answer" : "Reveal Model Answer"}
          </button>
          <button type="button" class="btn btn-primary" style="background:var(--status-pass);" data-fc-grade="knew" data-fc-id="${currentCard.id}">
            ✓ I Knew This (Promote Box)
          </button>
          <button type="button" class="btn btn-secondary" style="border-color:var(--status-fail); color:var(--status-fail);" data-fc-grade="wrong" data-fc-id="${currentCard.id}">
            ✕ I Got It Wrong (Reset to Box 1)
          </button>
        </div>

        <div style="display:flex; gap:6px;">
          <button type="button" class="icon-btn" data-fc-nav="prev">&larr; Prev Card</button>
          <button type="button" class="icon-btn" data-fc-nav="next">Next Card &rarr;</button>
        </div>
      </div>
    </div>
  `;
}

function toggleFlashcardCountdown() {
  const deck = appState.flashcardDeck;
  if (deck.countdownRunning) {
    clearInterval(deck.countdownIntervalId);
    deck.countdownRunning = false;
    renderFlashcardDeck();
  } else {
    if (deck.countdownSeconds <= 0) deck.countdownSeconds = 90;
    deck.countdownRunning = true;
    renderFlashcardDeck();
    clearInterval(deck.countdownIntervalId);
    deck.countdownIntervalId = setInterval(() => {
      if (deck.countdownSeconds > 0) {
        deck.countdownSeconds -= 1;
        const btn = document.getElementById("fcTimerBtn");
        if (btn) btn.textContent = `⏱ ${deck.countdownSeconds}s (Pause)`;
      } else {
        clearInterval(deck.countdownIntervalId);
        deck.countdownRunning = false;
        deck.revealed = true;
        triggerHaptic([70, 40, 70]);
        showToast("90-second oral drill time up! Model answer revealed.");
        renderFlashcardDeck();
      }
    }, 1000);
  }
}

// ==========================================================================
// CAREER, PLATFORMS, PAID HOURS LOGGER & LIVE PI EMAIL BUILDER (#Career)
// ==========================================================================
function renderCareerAndPlatforms() {
  // 1. Filterable AI Trainer Role Cards + Table fallback
  const rolesCardsEl = document.getElementById("aiTrainerRoleCardsContainer");
  const rolesBody = document.getElementById("aiTrainerRolesBody");
  const filteredRoles = PORTAL_DATA.aiTrainerRoles.filter(
    (r) => appState.activeRoleWaveFilter === "ALL" || r.waveGroup === appState.activeRoleWaveFilter
  );

  document.querySelectorAll("[data-role-wave-filter]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-role-wave-filter") === appState.activeRoleWaveFilter);
  });

  if (rolesCardsEl) {
    rolesCardsEl.innerHTML = filteredRoles
      .map(
        (r, idx) => `
      <details class="accordion-item" ${idx < 2 ? "open" : ""}>
        <summary class="accordion-summary">
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:8px;">
            <strong>${r.role}</strong>
            <span class="badge badge-orange">${r.wave}</span>
          </div>
          <span class="badge badge-gold">${r.rate}</span>
        </summary>
        <div class="accordion-body">
          <p style="font-size:0.92rem; margin-bottom:6px;"><strong>Core Responsibility:</strong> ${r.coreWork}</p>
          <p style="font-size:0.9rem; margin-bottom:6px;"><strong>Mandatory Requirements:</strong> ${r.mandatory}</p>
          <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:8px;"><strong>Preferred Differentiators:</strong> ${r.preferred}</p>
          <div class="nested-callout mono-label" style="color:var(--status-pass); font-weight:700;">
            Verifiable Public Proof: ${r.publicProof}
          </div>
        </div>
      </details>`
      )
      .join("");
  }

  if (rolesBody) {
    rolesBody.innerHTML = filteredRoles
      .map(
        (r) => `
      <tr>
        <td data-label="Role & Wave">
          <strong>${r.role}</strong><br>
          <span class="badge badge-orange" style="margin-top:4px;">${r.wave}</span>
        </td>
        <td data-label="Core Responsibility" style="font-size:0.9rem;">${r.coreWork}</td>
        <td data-label="Mandatory Requirements" style="font-size:0.88rem;">${r.mandatory}</td>
        <td data-label="Preferred Differentiators" style="font-size:0.88rem;">${r.preferred}</td>
        <td data-label="Verifiable Public Proof"><span class="mono-label" style="color:var(--status-pass); font-weight:600;">${r.publicProof}</span></td>
      </tr>`
      )
      .join("");
  }

  // 2. Filterable Platform Ecosystem Cards with "Setup Done" Checkbox (#21)
  const platCardsEl = document.getElementById("platformCardsContainer");
  const platBody = document.getElementById("platformsTableBody");
  const filteredPlats = PORTAL_DATA.platforms.filter(
    (p) => appState.activePlatformFilter === "ALL" || p.group === appState.activePlatformFilter
  );

  document.querySelectorAll("[data-platform-filter]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-platform-filter") === appState.activePlatformFilter);
  });

  if (platCardsEl) {
    platCardsEl.innerHTML = filteredPlats
      .map((p) => {
        const isDone = Boolean(appState.checkedItems[p.id]);
        return `
      <div class="card" style="${p.group === "SKIP" ? "opacity:0.82; background:var(--status-neutral-bg);" : ""}">
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:8px;">
          <div>
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" style="font-family:var(--font-heading); font-size:1.04rem; font-weight:700;">${p.name} ↗</a>
            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:4px;">
              <span class="badge ${p.group === "CORE" ? "badge-orange" : p.group === "SKIP" ? "badge-neutral" : "badge-gold"}">${p.priority}</span>
              <span class="badge badge-dark">${p.tier}</span>
            </div>
          </div>
          <label class="check-row ${isDone ? "completed" : ""}" style="border:none; padding:0; min-height:auto;">
            <input type="checkbox" id="${p.id}" ${isDone ? "checked" : ""} data-check-id="${p.id}">
            <span class="check-text mono-label" style="font-weight:700;">Setup Done</span>
          </label>
        </div>
        <p style="font-size:0.9rem; margin-bottom:6px;">${p.strategy}</p>
        <div class="mono-label" style="color:var(--text-muted);">Target Reviewer: ${p.audience}</div>
      </div>`;
      })
      .join("");
  }

  if (platBody) {
    platBody.innerHTML = filteredPlats
      .map(
        (p) => `
      <tr>
        <td data-label="Platform">
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" style="font-weight:700;">${p.name} ↗</a><br>
          <span class="badge badge-gold" style="margin-top:4px;">${p.tier}</span>
        </td>
        <td data-label="Priority"><span class="badge badge-dark">${p.priority}</span></td>
        <td data-label="Contribution Strategy" style="font-size:0.9rem;">${p.strategy}</td>
        <td data-label="Target Reviewer" style="font-size:0.875rem; color:var(--text-secondary);">${p.audience}</td>
      </tr>`
      )
      .join("");
  }

  renderPaidHoursLogger();
}

function renderPaidHoursLogger() {
  const container = document.getElementById("paidHoursLoggerContainer");
  if (!container) return;

  const totalHours = appState.paidHoursLogs.reduce((acc, item) => acc + (Number(item.hours) || 0), 0);
  const pct = Math.min(100, Math.round((totalHours / 80) * 100));
  const gatePassed = totalHours >= 80;

  container.innerHTML = `
    <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px; margin-bottom:8px;">
      <div>
        <span class="badge ${gatePassed ? "badge-pass" : "badge-orange"}">W12 / MONTH 3 GATE TRACKER</span>
        <h3 style="font-size:1.12rem; margin-top:4px;">Paid AI Evaluation Hours (Outlier AI Aether / Turing / Alignerr)</h3>
      </div>
      <div class="display-title" style="font-size:1.8rem; color:var(--accent-orange);">${totalHours.toFixed(1)} / 80 hrs (${pct}%)</div>
    </div>
    <div class="mini-progress-track" style="height:10px; margin-bottom:10px;">
      <div class="mini-progress-fill" style="width:${pct}%; background:${gatePassed ? "var(--status-pass)" : "var(--accent-orange)"};"></div>
    </div>
    <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:10px;">
      ${
        gatePassed
          ? "✓ ≥80-Hour Gate Unlocked: Eligible for gated $60–120/hr domain trainer postings."
          : "W12 / Month 3 Gate Rule: Accumulate ≥80 verified paid hours on Outlier/Turing. If queues stall below 80 hours by Week 12, activate Plan B (lead with verisci v1.0 Zenodo DOI & EarthArXiv preprint for ungated specialist tracks)."
      }
    </p>
    <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
      <select id="paidHoursPlatformInput" class="select-input" aria-label="Select AI Platform">
        <option value="Outlier AI (Aether)">Outlier AI (Aether)</option>
        <option value="Turing (Math/Research)">Turing (Math/Research)</option>
        <option value="Alignerr / Labelbox">Alignerr / Labelbox</option>
        <option value="micro1">micro1</option>
        <option value="DataAnnotation">DataAnnotation</option>
      </select>
      <input type="number" id="paidHoursAmountInput" class="form-input" placeholder="Hours (e.g. 3.5)" min="0.5" max="24" step="0.5" style="width:150px;" aria-label="Paid hours worked">
      <input type="text" id="paidHoursNoteInput" class="form-input" placeholder="Task batch / eval note..." style="flex:1 1 180px;" aria-label="Session note">
      <button type="button" class="btn btn-primary" id="addPaidHoursBtn">Log Paid Hours</button>
    </div>
    ${
      appState.paidHoursLogs.length > 0
        ? `<div style="max-height:150px; overflow-y:auto; border-top:1px solid var(--border-subtle); padding-top:8px; display:grid; gap:4px;">
            ${appState.paidHoursLogs
              .slice()
              .reverse()
              .map(
                (entry, idx) => `
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.84rem; padding:4px 0; border-bottom:1px solid var(--border-subtle);">
                <span><strong>${escapeHtml(entry.platform)}</strong> · ${Number(entry.hours).toFixed(1)}h (${escapeHtml(entry.date)}) — ${escapeHtml(entry.note || "Verified session")}</span>
                <button type="button" class="icon-btn" style="min-height:32px; padding:0 8px;" data-delete-paid-log="${appState.paidHoursLogs.length - 1 - idx}">✕</button>
              </div>`
              )
              .join("")}
          </div>`
        : `<div class="mono-label" style="color:var(--text-muted);">No paid sessions logged yet. Log each completed Outlier/Turing batch above.</div>`
    }
  `;
}

function updateOutreachEmailPreview() {
  const lastNameInput = document.getElementById("piLastNameInput");
  const topicInput = document.getElementById("piPaperTopicInput");
  const methodInput = document.getElementById("piMethodChoiceInput");
  const emailTargetInput = document.getElementById("piEmailAddressInput");
  const preEl = document.getElementById("outreachEmailPre");
  const mailtoBtn = document.getElementById("outreachMailtoLink");

  const lastName = (lastNameInput && lastNameInput.value.trim()) || "[Last Name]";
  const topic = (topicInput && topicInput.value.trim()) || "[Specific Paper Topic, e.g., urban flood susceptibility / spatial machine learning]";
  const method = (methodInput && methodInput.value.trim()) || "[specific methodological choice, e.g., spatial autocorrelation in cross-validation / SAR speckle filtering]";
  const toEmail = (emailTargetInput && emailTargetInput.value.trim()) || "";

  const subject = "Reproducible Spatial CV & SAR Pipeline / Prospective Undergraduate RA (KUET URP)";
  const body = `Dear Prof. ${lastName},

I recently read your group's paper on ${topic}, particularly how you addressed ${method}. I am a second-year Urban and Regional Planning undergraduate at KUET, Bangladesh, currently conducting Sentinel-1 SAR flood and UAV multispectral research at SERC and the Precision Agriculture Lab.

Inspired by your workflow, I built an open-source, reproducible Python replication and benchmark evaluating Spatial-Block Cross-Validation and threshold sensitivity on Bangladesh deltaic datasets. My code, pytest verification suite, and 25-paper methodology matrix are publicly inspectable with permanent DOIs at: https://meheran.dev/proof

If your lab needs assistance cleaning vector/raster pipelines, maintaining BibTeX literature matrices, or documenting Python research tools, I would be honored to contribute. My 1-page CV is attached.

Sincerely,
Md. Mokammel Morshed (Meheran)
ORCID: https://orcid.org/ | GitHub: https://github.com/MkMeheran`;

  if (preEl) {
    preEl.textContent = `Subject: ${subject}\n\n${body}`;
  }
  if (mailtoBtn) {
    mailtoBtn.href = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}

// ==========================================================================
// 100-PT RUBRIC: "NOT SCORED" DEFAULT, STEPPERS, SVG RADAR & WEAKEST 2 (#34, #35)
// ==========================================================================
function buildRubricRadarSvg(scoresObj, isScored) {
  const criteria = PORTAL_DATA.rubricCriteria;
  const n = criteria.length;
  const cx = 140;
  const cy = 130;
  const radius = 86;

  let gridPolygons = "";
  [0.25, 0.5, 0.75, 1].forEach((level) => {
    const pts = criteria
      .map((_, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const x = cx + Math.cos(angle) * radius * level;
        const y = cy + Math.sin(angle) * radius * level;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
    gridPolygons += `<polygon points="${pts}" fill="none" stroke="rgba(254,243,226,0.18)" stroke-width="1"/>`;
  });

  let axesLines = "";
  let labelsSvg = "";
  criteria.forEach((c, i) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const x2 = cx + Math.cos(angle) * radius;
    const y2 = cy + Math.sin(angle) * radius;
    const lx = cx + Math.cos(angle) * (radius + 22);
    const ly = cy + Math.sin(angle) * (radius + 16);
    axesLines += `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(254,243,226,0.18)" stroke-width="1"/>`;
    labelsSvg += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" fill="#E8D5BC" font-family="var(--font-mono)" font-size="9.5" text-anchor="middle" dominant-baseline="middle">C${i + 1}</text>`;
  });

  let dataPoly = "";
  if (isScored) {
    const dataPts = criteria
      .map((c, i) => {
        const val = Number(scoresObj[c.id] || 0);
        const ratio = Math.min(1, Math.max(0, val / c.max));
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const x = cx + Math.cos(angle) * radius * ratio;
        const y = cy + Math.sin(angle) * radius * ratio;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
    dataPoly = `<polygon points="${dataPts}" fill="rgba(244, 174, 82, 0.35)" stroke="#F4AE52" stroke-width="2.2"/>`;
  }

  return `<svg width="280" height="260" viewBox="0 0 280 260" role="img" aria-label="10-Criteria Rubric Radar Visualization" style="max-width:100%; height:auto; display:block; margin:0 auto;">
    ${gridPolygons}
    ${axesLines}
    ${dataPoly}
    ${labelsSvg}
  </svg>`;
}

function renderRubricCalculator() {
  const container = document.getElementById("rubricSlidersContainer");
  const artSelect = document.getElementById("rubricArtifactSelect");
  if (!container) return;

  if (artSelect && artSelect.options.length === 0) {
    artSelect.innerHTML = PORTAL_DATA.evaluatableArtifacts
      .map((a) => `<option value="${a.id}">${a.name} (Gate: >=${a.gate}/100)</option>`)
      .join("");
  }
  if (artSelect) {
    artSelect.value = appState.selectedRubricArtifact;
  }

  const record = getArtifactEvalRecord(appState.selectedRubricArtifact);

  container.innerHTML = PORTAL_DATA.rubricCriteria
    .map((c) => {
      const val = Number(record.scores[c.id] ?? 0);
      return `
      <div class="rubric-row">
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px; margin-bottom:6px;">
          <label for="rub_${c.id.split("_")[1]}" id="${c.id}" style="font-family:var(--font-heading); font-weight:700; font-size:1rem;">
            ${c.name}
          </label>
          <!-- Minus / Plus Integer Stepper Controls (#31) -->
          <div class="stepper-control">
            <button type="button" class="stepper-btn" data-rubric-step="-1" data-rubric-id="${c.id}" data-rubric-max="${c.max}" aria-label="Decrease ${c.name} score">&minus;</button>
            <span class="stepper-val" id="rubric-val-${c.id}">${record.scored ? `${val} / ${c.max}` : `— / ${c.max}`}</span>
            <button type="button" class="stepper-btn" data-rubric-step="1" data-rubric-id="${c.id}" data-rubric-max="${c.max}" aria-label="Increase ${c.name} score">+</button>
          </div>
        </div>
        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:4px;">${c.desc}</p>
        <div class="mono-label" style="color:var(--status-fail);">
          ${c.deduction}
        </div>
      </div>`;
    })
    .join("");

  updateRubricTotalUI();
}

function updateRubricTotalUI() {
  const artMeta =
    PORTAL_DATA.evaluatableArtifacts.find((a) => a.id === appState.selectedRubricArtifact) ||
    PORTAL_DATA.evaluatableArtifacts[0];
  const record = getArtifactEvalRecord(artMeta.id);

  const scoreEl = document.getElementById("rubricTotalScore");
  const bandEl = document.getElementById("rubricDecisionBand");
  const adviceEl = document.getElementById("rubricDecisionAdvice");
  const radarEl = document.getElementById("rubricRadarContainer");
  const weakestEl = document.getElementById("rubricWeakestContainer");
  const historyEl = document.getElementById("rubricHistoryContainer");

  // #34: Initial state MUST be "Not Scored" before explicit evaluation
  if (!record.scored) {
    if (scoreEl) scoreEl.textContent = "Not Scored";
    if (bandEl) {
      bandEl.className = "badge badge-neutral";
      bandEl.textContent = `AWAITING EVALUATION (GATE: ≥${artMeta.gate}/100)`;
    }
    if (adviceEl) {
      adviceEl.textContent = `Select minus/plus stepper scores for "${artMeta.name}" or tap "Load Baseline Draft" to evaluate against its ≥${artMeta.gate}/100 quality gate.`;
    }
    if (radarEl) {
      radarEl.innerHTML = buildRubricRadarSvg(record.scores, false);
    }
    if (weakestEl) {
      weakestEl.innerHTML = `<div class="mono-label" style="color:#E8D5BC;">No evaluation performed yet for this artifact. Adjust steppers to identify the 2 weakest criteria.</div>`;
    }
  } else {
    let total = 0;
    PORTAL_DATA.rubricCriteria.forEach((c) => {
      total += Number(record.scores[c.id] || 0);
    });
    record.total = total;
    const passedGate = total >= artMeta.gate;

    if (scoreEl) scoreEl.textContent = `${total} / 100`;

    let bandText = "";
    let bandClass = "badge-dark";
    let advice = "";

    if (total >= 90) {
      bandText = `90–100: EXCEPTIONAL FLAGSHIP (PASSES ≥${artMeta.gate} GATE)`;
      bandClass = "badge-pass";
      advice = "Feature prominently on meheran.dev homepage, link directly in CV bullet points, and archive with a Zenodo DOI.";
    } else if (passedGate) {
      bandText = `${total}/100: PASSES ≥${artMeta.gate} QUALITY GATE`;
      bandClass = "badge-pass";
      advice = "Meets publication quality gate for meheran.dev/docs and meheran.dev/proof.";
    } else if (total >= 70) {
      bandText = `${total}/100: BELOW ≥${artMeta.gate} GATE — REVISE BEFORE PUBLISHING`;
      bandClass = "badge-warn";
      advice = "Keep off public homepage. Fix the two weakest criteria highlighted below before publishing.";
    } else {
      bandText = `${total}/100: REJECT / INTERNAL DRAFT ONLY (GATE ≥${artMeta.gate})`;
      bandClass = "badge-fail";
      advice = "Do not publish. Re-execute local verification from primary sources and verify all CRS, leakage, and docstring checks.";
    }

    if (bandEl) {
      bandEl.className = `badge ${bandClass}`;
      bandEl.textContent = bandText;
    }
    if (adviceEl) adviceEl.textContent = advice;
    if (radarEl) radarEl.innerHTML = buildRubricRadarSvg(record.scores, true);

    // Automatically identify and recommend improvements for the 2 weakest criteria (#Rubric)
    if (weakestEl) {
      const sortedWeak = PORTAL_DATA.rubricCriteria
        .map((c) => {
          const s = Number(record.scores[c.id] || 0);
          return { ...c, current: s, pct: s / c.max };
        })
        .sort((a, b) => a.pct - b.pct)
        .slice(0, 2);

      weakestEl.innerHTML = `
        <div class="mono-label" style="color:var(--surface-gold); font-weight:700; margin-bottom:6px;">DIAGNOSTIC: 2 WEAKEST CRITERIA &amp; RECOMMENDED FIXES</div>
        ${sortedWeak
          .map(
            (w) => `
          <div style="padding:6px 0; border-bottom:1px solid rgba(254,243,226,0.12); font-size:0.86rem;">
            <strong style="color:#FCA5A5;">${w.name} (${w.current}/${w.max} pts):</strong>
            <span style="color:#E8D5BC;"> ${w.fixAdvice}</span>
          </div>`
          )
          .join("")}
      `;
    }
  }

  // Render Artifact Evaluation History (#35)
  if (historyEl) {
    const evaluatedList = PORTAL_DATA.evaluatableArtifacts.filter(
      (a) => appState.artifactEvaluations[a.id] && appState.artifactEvaluations[a.id].scored
    );
    if (evaluatedList.length === 0) {
      historyEl.innerHTML = `<div class="mono-label" style="color:var(--text-muted);">No artifacts evaluated yet. Evaluate any artifact to record its timestamped quality gate status.</div>`;
    } else {
      historyEl.innerHTML = evaluatedList
        .map((a) => {
          const rec = appState.artifactEvaluations[a.id];
          const pass = rec.total >= a.gate;
          return `
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:6px; padding:6px 0; border-bottom:1px solid var(--border-subtle); font-size:0.88rem;">
            <div>
              <strong>${a.name}</strong>
              <div class="mono-label" style="color:var(--text-muted);">Last Evaluated: ${rec.evaluatedAt || "Today"} · Evaluations: ${(rec.history || []).length}</div>
            </div>
            <span class="badge ${pass ? "badge-pass" : "badge-warn"}">${rec.total}/100 (${pass ? `PASS ≥${a.gate}` : `NEEDS ≥${a.gate}`})</span>
          </div>`;
        })
        .join("");
    }
  }
}

function adjustRubricCriterion(criterionId, maxVal, delta) {
  const artMeta =
    PORTAL_DATA.evaluatableArtifacts.find((a) => a.id === appState.selectedRubricArtifact) ||
    PORTAL_DATA.evaluatableArtifacts[0];
  const record = getArtifactEvalRecord(artMeta.id);

  // If transitioning from Not Scored on first adjustment, initialize sensible baseline or start from current
  if (!record.scored) {
    record.scored = true;
  }
  const cur = Number(record.scores[criterionId] || 0);
  const next = Math.min(maxVal, Math.max(0, cur + delta));
  record.scores[criterionId] = next;
  record.evaluatedAt = new Date().toLocaleString();

  let total = 0;
  PORTAL_DATA.rubricCriteria.forEach((c) => {
    total += Number(record.scores[c.id] || 0);
  });
  record.total = total;

  const badge = document.getElementById(`rubric-val-${criterionId}`);
  if (badge) badge.textContent = `${next} / ${maxVal}`;

  savePersistedState();
  updateRubricTotalUI();
}

function recordArtifactEvaluationSnapshot() {
  const artMeta =
    PORTAL_DATA.evaluatableArtifacts.find((a) => a.id === appState.selectedRubricArtifact) ||
    PORTAL_DATA.evaluatableArtifacts[0];
  const record = getArtifactEvalRecord(artMeta.id);
  if (!record.scored) {
    showToast("Adjust at least one criterion stepper before saving an evaluation snapshot.");
    return;
  }
  const stamp = new Date().toISOString().slice(0, 16).replace("T", " ");
  record.evaluatedAt = stamp;
  record.history = record.history || [];
  record.history.push({
    total: record.total,
    evaluatedAt: stamp,
    passedGate: record.total >= artMeta.gate
  });
  savePersistedState();
  updateRubricTotalUI();
  showToast(`Saved evaluation (${record.total}/100) for ${artMeta.name}`);
}

// ==========================================================================
// GITHUB COMMIT ACTIVITY VERIFIER (#Section 9)
// ==========================================================================
function verifyGitHubCommitActivity(forceRefresh = false) {
  const statusEl = document.getElementById("githubVerifyStatus");
  if (!statusEl) return;

  // Check 30-min cache first
  if (
    !forceRefresh &&
    appState.githubCache &&
    appState.githubCache.fetchedAt &&
    Date.now() - appState.githubCache.fetchedAt < 30 * 60 * 1000
  ) {
    renderGitHubStatusUI(appState.githubCache);
    return;
  }

  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    renderGitHubStatusUI({
      ok: false,
      verified: false,
      reason: "Device is currently offline — live GitHub API verification requires an internet connection. Local planning data remains active."
    });
    return;
  }
  statusEl.innerHTML = `<span class="badge badge-gold">Checking GitHub API (MkMeheran/verisci)...</span>`;

  fetch("https://api.github.com/repos/MkMeheran/verisci/commits?per_page=30")
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
    .catch((err) => ({ __fetchError: err }))
    .then((commits) => {
      if (commits && commits.__fetchError) throw commits.__fetchError;
      if (!Array.isArray(commits)) throw new Error("Invalid response");
      const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      const distinctDays = new Set();
      commits.forEach((c) => {
        const dateStr = c && c.commit && c.commit.author && c.commit.author.date;
        if (dateStr) {
          const ts = new Date(dateStr).getTime();
          if (ts >= sevenDaysAgo) {
            distinctDays.add(dateStr.slice(0, 10));
          }
        }
      });
      const result = {
        ok: true,
        activeDays: distinctDays.size,
        totalRecentCommits: commits.length,
        verified: distinctDays.size >= 3,
        fetchedAt: Date.now()
      };
      appState.githubCache = result;
      savePersistedState();
      renderGitHubStatusUI(result);
    })
    .catch((err) => {
      const fallback = {
        ok: false,
        verified: false,
        reason: err && err.message === "HTTP 404"
          ? "Repository MkMeheran/verisci not yet public or initialized (W2 milestone)."
          : "GitHub API unreachable or rate-limited — activity remains UNVERIFIED.",
        fetchedAt: Date.now()
      };
      renderGitHubStatusUI(fallback);
    });
}

function renderGitHubStatusUI(info) {
  const statusEl = document.getElementById("githubVerifyStatus");
  if (!statusEl) return;
  if (!info.ok) {
    statusEl.innerHTML = `<span class="badge badge-warn">UNVERIFIED</span> <span class="mono-label">${escapeHtml(info.reason)}</span>`;
    return;
  }
  if (info.verified) {
    statusEl.innerHTML = `<span class="badge badge-pass">VERIFIED (${info.activeDays}/7 Active Commit Days)</span> <span class="mono-label">Passes ≥3 days/week JOSS hygiene gate.</span>`;
  } else {
    statusEl.innerHTML = `<span class="badge badge-warn">UNVERIFIED (${info.activeDays}/3 Active Days This Week)</span> <span class="mono-label">Requires ≥3 distinct commit days/week.</span>`;
  }
}

// ==========================================================================
// .ICS 24-WEEK CALENDAR EXPORT (#Section 9)
// ==========================================================================
function exportCalendarIcs() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Meheran KUET URP//6-Month Blueprint v3//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH"
  ];

  PORTAL_DATA.weeklySchedule.forEach((w) => {
    const dtStart = w.startIso.replace(/-/g, "");
    const dtEnd = w.endIso.replace(/-/g, "");
    lines.push(
      "BEGIN:VEVENT",
      `UID:verisci-${w.id}@meheran.dev`,
      `DTSTAMP:20261115T060000Z`,
      `DTSTART;VALUE=DATE:${dtStart}`,
      `DTEND;VALUE=DATE:${dtEnd}`,
      `SUMMARY:${w.week} (${w.month}): ${w.deliverable.slice(0, 65)}`,
      `DESCRIPTION:Focus: ${w.focus.replace(/\n/g, " ")} | Deliverable: ${w.deliverable.replace(/\n/g, " ")}`,
      "BEGIN:VALARM",
      "TRIGGER:-PT9H",
      "ACTION:DISPLAY",
      `DESCRIPTION:${w.week} Milestone Reminder`,
      "END:VALARM",
      "END:VEVENT"
    );
  });

  lines.push("END:VCALENDAR");
  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "meheran-24week-blueprint.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Downloaded 24-Week .ics Calendar File");
}

// ==========================================================================
// COMPLETE JSON EXPORT, IMPORT & SAFE RESET WITH UNDO (#37, #38)
// ==========================================================================
function buildExportPayloadObject() {
  ensureTodayDailyState();
  return {
    schemaVersion: "3.0",
    candidate: "Md. Mokammel Morshed (Meheran)",
    exportedAt: new Date().toISOString(),
    todayDateKey: appState.todayDateKey,
    dailyByDate: appState.dailyByDate,
    checkedItems: appState.checkedItems,
    weeklyProofLinks: appState.weeklyProofLinks,
    selectedRubricArtifact: appState.selectedRubricArtifact,
    artifactEvaluations: appState.artifactEvaluations,
    paidHoursLogs: appState.paidHoursLogs,
    flashcardBoxes: appState.flashcardDeck.boxes
  };
}

function downloadStateJsonFile() {
  const payload = JSON.stringify(buildExportPayloadObject(), null, 2);
  const blob = new Blob([payload], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `meheran-blueprint-backup-${getLocalDateKey()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Downloaded JSON state backup file");
}

let pendingConfirmAction = null;

function openConfirmModal(title, message, onConfirm) {
  const modal = document.getElementById("confirmModal");
  const titleEl = document.getElementById("confirmModalTitle");
  const msgEl = document.getElementById("confirmModalMessage");
  if (!modal) return;
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;
  pendingConfirmAction = onConfirm;
  modal.classList.add("open");
}

function closeConfirmModal() {
  const modal = document.getElementById("confirmModal");
  if (modal) modal.classList.remove("open");
  pendingConfirmAction = null;
}

function handleJsonImportFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const parsed = JSON.parse(String(ev.target.result || ""));
      if (!parsed || typeof parsed !== "object" || (!parsed.checkedItems && !parsed.dailyByDate && !parsed.artifactEvaluations)) {
        showToast("Invalid JSON backup file: Missing blueprint state fields.");
        return;
      }
      openConfirmModal(
        "Import State Backup JSON?",
        `Overwrite current progress with backup exported on ${parsed.exportedAt || "previous session"}?`,
        () => {
          if (parsed.checkedItems && typeof parsed.checkedItems === "object") {
            appState.checkedItems = parsed.checkedItems;
          }
          if (parsed.dailyByDate && typeof parsed.dailyByDate === "object") {
            appState.dailyByDate = parsed.dailyByDate;
          }
          if (parsed.weeklyProofLinks && typeof parsed.weeklyProofLinks === "object") {
            appState.weeklyProofLinks = parsed.weeklyProofLinks;
          }
          if (parsed.artifactEvaluations && typeof parsed.artifactEvaluations === "object") {
            appState.artifactEvaluations = parsed.artifactEvaluations;
          }
          if (Array.isArray(parsed.paidHoursLogs)) {
            appState.paidHoursLogs = parsed.paidHoursLogs;
          }
          if (parsed.flashcardBoxes && typeof parsed.flashcardBoxes === "object") {
            appState.flashcardDeck.boxes = parsed.flashcardBoxes;
          }
          ensureTodayDailyState();
          savePersistedState();
          refreshAllViews();
          showToast("Imported JSON backup state successfully!");
        }
      );
    } catch (err) {
      showToast("Invalid JSON file format — could not parse.");
    }
  };
  reader.readAsText(file);
}

// ==========================================================================
// GLOBAL SEARCH & GLOSSARY BOTTOM SHEET (#Section 2 & #Section 3)
// ==========================================================================
function openGlossaryTerm(termKey) {
  const entry = PORTAL_DATA.glossary[termKey];
  if (!entry) return;
  const modal = document.getElementById("glossaryModal");
  const titleEl = document.getElementById("glossaryModalTitle");
  const defEl = document.getElementById("glossaryModalDef");
  const usageEl = document.getElementById("glossaryModalUsage");
  if (!modal) return;
  if (titleEl) titleEl.textContent = entry.term;
  if (defEl) defEl.textContent = entry.def;
  if (usageEl) usageEl.textContent = entry.usage;
  modal.classList.add("open");
}

function renderGlobalSearchResults(query) {
  const resultsEl = document.getElementById("globalSearchResults");
  if (!resultsEl) return;
  const q = String(query || "").trim().toLowerCase();
  if (!q) {
    resultsEl.innerHTML = `<div class="mono-label" style="color:var(--text-muted); padding:10px 0;">Type to search across 6 Projects, 24 Weekly Plans, and Technical Glossary terms...</div>`;
    return;
  }

  const hits = [];
  PORTAL_DATA.projects.forEach((p) => {
    if (
      p.title.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.problem.toLowerCase().includes(q) ||
      p.stack.join(" ").toLowerCase().includes(q)
    ) {
      hits.push({
        type: "PROJECT",
        title: `${p.code}: ${p.title}`,
        sub: p.months,
        nav: "projects",
        projId: p.id
      });
    }
  });

  PORTAL_DATA.weeklySchedule.forEach((w) => {
    if (
      w.week.toLowerCase().includes(q) ||
      w.focus.toLowerCase().includes(q) ||
      w.deliverable.toLowerCase().includes(q)
    ) {
      hits.push({
        type: "WEEKLY",
        title: `${w.week} (${w.dates})`,
        sub: w.deliverable,
        nav: "weekly"
      });
    }
  });

  Object.keys(PORTAL_DATA.glossary).forEach((k) => {
    const g = PORTAL_DATA.glossary[k];
    if (g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q)) {
      hits.push({
        type: "GLOSSARY",
        title: g.term,
        sub: g.def,
        glossaryKey: k
      });
    }
  });

  if (hits.length === 0) {
    resultsEl.innerHTML = `<div class="mono-label" style="padding:12px 0;">No matches found for "${escapeHtml(query)}".</div>`;
    return;
  }

  resultsEl.innerHTML = hits
    .slice(0, 12)
    .map(
      (h) => `
    <div style="padding:10px; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
      <div>
        <span class="badge badge-gold">${h.type}</span>
        <strong style="display:block; margin-top:3px;">${escapeHtml(h.title)}</strong>
        <div style="font-size:0.84rem; color:var(--text-secondary);">${escapeHtml(h.sub.slice(0, 120))}</div>
      </div>
      ${
        h.glossaryKey
          ? `<button type="button" class="icon-btn" data-open-glossary="${h.glossaryKey}">View</button>`
          : `<button type="button" class="icon-btn" data-search-jump="${h.nav}" ${h.projId ? `data-search-proj="${h.projId}"` : ""}>Open &rarr;</button>`
      }
    </div>`
    )
    .join("");
}

// ==========================================================================
// READING PREFERENCES (A- / A+ & OPTIONAL EN ⇄ বাংলা EXPLANATION TOGGLE)
// ==========================================================================
function applyReadingPreferencesUI() {
  document.documentElement.style.setProperty("--reading-scale", String(appState.readingScale));
  document.body.classList.toggle("show-bn-explain", Boolean(appState.showBanglaAid));

  const scaleReadout = document.getElementById("readingScaleReadout");
  if (scaleReadout) {
    scaleReadout.textContent = `${Math.round(appState.readingScale * 100)}%`;
  }
  const bnBtn = document.getElementById("toggleBanglaAidBtn");
  if (bnBtn) {
    bnBtn.textContent = appState.showBanglaAid ? "EN ⇄ বাংলা: ON" : "EN ⇄ বাংলা: OFF";
    bnBtn.setAttribute("aria-pressed", String(appState.showBanglaAid));
  }
}

// ==========================================================================
// ICON-ONLY THEME SWITCHER & EVENT DELEGATION
// ==========================================================================
const MOON_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
const SUN_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

function updateThemeIconUI() {
  const themeBtn = document.getElementById("themeToggleBtn");
  if (!themeBtn) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  themeBtn.innerHTML = isDark ? SUN_SVG : MOON_SVG;
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";
  themeBtn.setAttribute("aria-label", label);
  themeBtn.setAttribute("title", label);
}

// Targeted Checkbox Toggle (#40: No Full-Page Re-Render on Checkbox Click!)
function toggleCheckItem(itemId) {
  appState.checkedItems[itemId] = !appState.checkedItems[itemId];
  triggerHaptic(30);
  savePersistedState();

  const checked = Boolean(appState.checkedItems[itemId]);
  const inputEl = document.getElementById(itemId);
  if (inputEl) {
    inputEl.checked = checked;
    const row = inputEl.closest(".check-row");
    if (row) {
      row.classList.toggle("completed", itemId.startsWith("w") ? isWeekFullyVerified(itemId) : checked);
    }
  }

  if (itemId.startsWith("w")) {
    updateSingleWeekRowUI(itemId);
    if (checked && !isValidProofLink(appState.weeklyProofLinks[itemId])) {
      showToast("Task checked! Add a GitHub commit or DOI proof link to mark as VERIFIED.");
    }
  } else if (itemId.startsWith("m")) {
    renderMonthlyBlueprints();
  } else if (itemId.startsWith("con_")) {
    renderWritingInteractiveWidgets();
  }

  updateGlobalProgressUI();
}

function refreshAllViews() {
  renderOverviewAuditCards();
  renderDailyStages();
  renderSevenDayRotation();
  updateTimerUI();
  renderWeeklyTable();
  renderMonthlyBlueprints();
  renderProofLadder();
  renderProjectsCatalog();
  switchVerisciStarterTab(appState.activeStarterTab);
  renderResearchInteractiveWidgets();
  renderWritingInteractiveWidgets();
  renderFlashcardDeck();
  renderCareerAndPlatforms();
  updateOutreachEmailPreview();
  renderRubricCalculator();
  updateGlobalProgressUI();
}

function attachEventListeners() {
  document.addEventListener("click", (e) => {
    // Section navigation
    const navBtn = e.target.closest("[data-nav-target]");
    if (navBtn) {
      e.preventDefault();
      switchSection(navBtn.getAttribute("data-nav-target"));
      return;
    }

    const timeTabBtn = e.target.closest("[data-time-tab]");
    if (timeTabBtn) {
      e.preventDefault();
      switchTimeTab(timeTabBtn.getAttribute("data-time-tab"));
      return;
    }

    // Glossary term bottom sheet trigger
    const glossaryBtn = e.target.closest("[data-open-glossary]");
    if (glossaryBtn) {
      openGlossaryTerm(glossaryBtn.getAttribute("data-open-glossary"));
      return;
    }

    // Search result jump
    const searchJumpBtn = e.target.closest("[data-search-jump]");
    if (searchJumpBtn) {
      const targetSec = searchJumpBtn.getAttribute("data-search-jump");
      const projId = searchJumpBtn.getAttribute("data-search-proj");
      const searchModal = document.getElementById("globalSearchModal");
      if (searchModal) searchModal.classList.remove("open");
      switchSection(targetSec);
      if (projId) {
        const card = document.getElementById(`card-${projId}`);
        if (card) {
          card.classList.remove("collapsed");
          card.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      return;
    }

    // Quick stage complete from Today card
    const quickStageBtn = e.target.closest("[data-quick-complete-stage]");
    if (quickStageBtn) {
      toggleDailyStageCheck(quickStageBtn.getAttribute("data-quick-complete-stage"));
      renderDailyStages();
      return;
    }

    // Daily stage expand/collapse
    const toggleDailyBtn = e.target.closest("[data-toggle-daily-stage]");
    if (toggleDailyBtn) {
      const sid = toggleDailyBtn.getAttribute("data-toggle-daily-stage");
      const card = document.getElementById(`card-${sid}`);
      if (card) {
        const nowCollapsed = card.classList.toggle("collapsed");
        toggleDailyBtn.setAttribute("aria-expanded", String(!nowCollapsed));
      }
      return;
    }

    // Select daily timer stage
    const selectTimerBtn = e.target.closest("[data-select-timer]");
    if (selectTimerBtn) {
      selectTimerStage(Number(selectTimerBtn.getAttribute("data-select-timer")));
      return;
    }

    // Weekly M1-M6 horizontal chips
    const weekChip = e.target.closest("[data-week-month-chip]");
    if (weekChip) {
      appState.weekMonthFilter = weekChip.getAttribute("data-week-month-chip");
      const sel = document.getElementById("weekMonthFilter");
      if (sel) sel.value = appState.weekMonthFilter;
      renderWeeklyTable();
      return;
    }

    // Save weekly proof link (#36)
    const saveProofBtn = e.target.closest("[data-save-proof]");
    if (saveProofBtn) {
      const wid = saveProofBtn.getAttribute("data-save-proof");
      const input = document.querySelector(`[data-proof-input="${wid}"]`);
      if (input) {
        const val = input.value.trim();
        appState.weeklyProofLinks[wid] = val;
        if (isValidProofLink(val)) {
          appState.checkedItems[wid] = true;
          const cb = document.getElementById(wid);
          if (cb) cb.checked = true;
          triggerHaptic(40);
          showToast(`${wid.toUpperCase()} verified with evidence link!`);
        } else if (val.length > 0) {
          showToast("Please enter a valid URL (https://...), DOI (10.5281/...), or commit SHA.");
        } else {
          showToast(`Cleared proof link for ${wid.toUpperCase()}.`);
        }
        savePersistedState();
        updateSingleWeekRowUI(wid);
        updateGlobalProgressUI();
      }
      return;
    }

    // Monthly selector & tabs
    const selectMonthBtn = e.target.closest("[data-select-month]");
    if (selectMonthBtn) {
      appState.activeMonthCode = selectMonthBtn.getAttribute("data-select-month");
      renderMonthlyBlueprints();
      return;
    }

    const monthTargetTabBtn = e.target.closest("[data-month-target-tab]");
    if (monthTargetTabBtn) {
      appState.activeMonthTargetTab = monthTargetTabBtn.getAttribute("data-month-target-tab");
      renderMonthlyBlueprints();
      return;
    }

    // Verisci starter subtabs
    const starterTabBtn = e.target.closest("[data-starter-tab]");
    if (starterTabBtn) {
      switchVerisciStarterTab(starterTabBtn.getAttribute("data-starter-tab"));
      return;
    }

    // Project quick jump & collapse toggle
    const focusProjBtn = e.target.closest("[data-focus-project]");
    if (focusProjBtn) {
      const pid = focusProjBtn.getAttribute("data-focus-project");
      const card = document.getElementById(`card-${pid}`);
      if (card) {
        card.classList.remove("collapsed");
        const hdr = document.getElementById(pid);
        if (hdr) hdr.setAttribute("aria-expanded", "true");
        card.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    const toggleProjBtn = e.target.closest("[data-toggle-project]");
    if (toggleProjBtn) {
      const pid = toggleProjBtn.getAttribute("data-toggle-project");
      const card = document.getElementById(`card-${pid}`);
      const hdr = document.getElementById(pid);
      if (card) {
        const isNowCollapsed = card.classList.toggle("collapsed");
        if (hdr) hdr.setAttribute("aria-expanded", String(!isNowCollapsed));
      }
      return;
    }

    // Project 4-tab switching (Problem, Plan, Outputs, Files)
    const projTabBtn = e.target.closest("[data-proj-tab]");
    if (projTabBtn) {
      const pid = projTabBtn.getAttribute("data-proj-id");
      const tabName = projTabBtn.getAttribute("data-proj-tab");
      appState.projectActiveTabs[pid] = tabName;
      document.querySelectorAll(`[data-proj-id="${pid}"]`).forEach((b) => {
        const act = b.getAttribute("data-proj-tab") === tabName;
        b.classList.toggle("active", act);
        b.setAttribute("aria-selected", String(act));
      });
      document.querySelectorAll(`[data-pane-proj="${pid}"]`).forEach((pane) => {
        pane.style.display = pane.getAttribute("data-pane-name") === tabName ? "block" : "none";
      });
      return;
    }

    const fileToastItem = e.target.closest("[data-file-toast]");
    if (fileToastItem) {
      showToast(fileToastItem.getAttribute("data-file-toast"));
      return;
    }

    const treeModeBtn = e.target.closest("[data-tree-mode]");
    if (treeModeBtn) {
      const mode = treeModeBtn.getAttribute("data-tree-mode");
      const pid = treeModeBtn.getAttribute("data-tree-proj");
      const proj = PORTAL_DATA.projects.find((item) => item.id === pid);
      const pre = document.getElementById(`tree-pre-${pid}`);
      if (proj && pre) {
        pre.setAttribute("data-current-mode", mode);
        pre.textContent = mode === "markdown" ? proj.markdownTree : proj.asciiTree;
      }
      return;
    }

    const copyTreeBtn = e.target.closest("[data-copy-tree]");
    if (copyTreeBtn) {
      const pid = copyTreeBtn.getAttribute("data-copy-tree");
      const pre = document.getElementById(`tree-pre-${pid}`);
      if (pre) copyTextToClipboard(pre.textContent, `${pid} file structure`);
      return;
    }

    const copyTextBtn = e.target.closest("[data-copy-text]");
    if (copyTextBtn) {
      copyTextToClipboard(
        copyTextBtn.getAttribute("data-copy-text"),
        copyTextBtn.getAttribute("data-copy-label") || "command"
      );
      return;
    }

    const copyCodeBtn = e.target.closest("[data-copy-target]");
    if (copyCodeBtn) {
      const targetId = copyCodeBtn.getAttribute("data-copy-target");
      const el = document.getElementById(targetId);
      if (el) copyTextToClipboard(el.textContent, copyCodeBtn.getAttribute("data-copy-label") || "specification");
      return;
    }

    // Research 12-step stepper & Literature Review contrast cards
    const resStepBtn = e.target.closest("[data-research-step]");
    if (resStepBtn) {
      appState.activeResearchStep = Number(resStepBtn.getAttribute("data-research-step"));
      renderResearchInteractiveWidgets();
      return;
    }

    const toggleAllResBtn = e.target.closest("[data-toggle-all-research-steps]");
    if (toggleAllResBtn) {
      appState.showAllResearchSteps = !appState.showAllResearchSteps;
      renderResearchInteractiveWidgets();
      return;
    }

    const litDimBtn = e.target.closest("[data-lit-dim]");
    if (litDimBtn) {
      appState.activeLitReviewDim = Number(litDimBtn.getAttribute("data-lit-dim"));
      renderResearchInteractiveWidgets();
      return;
    }

    // Technical Prep Tier 1/2/3 segmented tabs
    const prepTierBtn = e.target.closest("[data-prep-tier-tab]");
    if (prepTierBtn) {
      const tier = prepTierBtn.getAttribute("data-prep-tier-tab");
      appState.activePrepTierTab = tier;
      document.querySelectorAll("[data-prep-tier-tab]").forEach((b) => {
        const act = b.getAttribute("data-prep-tier-tab") === tier;
        b.classList.toggle("active", act);
        b.setAttribute("aria-selected", String(act));
      });
      document.querySelectorAll("[data-prep-tier-pane]").forEach((p) => {
        p.style.display = p.getAttribute("data-prep-tier-pane") === tier ? "block" : "none";
      });
      return;
    }

    // Technical Prep 7-day selector
    const prepDayBtn = e.target.closest("[data-prep-day]");
    if (prepDayBtn) {
      appState.activePrepDayIndex = Number(prepDayBtn.getAttribute("data-prep-day"));
      renderSevenDayRotation();
      return;
    }

    // Flashcard deck controls (#30)
    const toggleIntBtn = e.target.closest("[data-toggle-interview]");
    if (toggleIntBtn) {
      appState.flashcardDeck.revealed = !appState.flashcardDeck.revealed;
      renderFlashcardDeck();
      return;
    }

    const fcTimerToggle = e.target.closest("[data-fc-timer-toggle]");
    if (fcTimerToggle) {
      toggleFlashcardCountdown();
      return;
    }

    const fcGradeBtn = e.target.closest("[data-fc-grade]");
    if (fcGradeBtn) {
      const grade = fcGradeBtn.getAttribute("data-fc-grade");
      const fcId = fcGradeBtn.getAttribute("data-fc-id");
      const curBox = appState.flashcardDeck.boxes[fcId] || 1;
      appState.flashcardDeck.boxes[fcId] = grade === "knew" ? Math.min(3, curBox + 1) : 1;
      clearInterval(appState.flashcardDeck.countdownIntervalId);
      appState.flashcardDeck.countdownRunning = false;
      appState.flashcardDeck.countdownSeconds = 90;
      appState.flashcardDeck.revealed = false;
      appState.flashcardDeck.currentIndex =
        (appState.flashcardDeck.currentIndex + 1) % PORTAL_DATA.interviewQuestions.length;
      triggerHaptic(35);
      savePersistedState();
      renderFlashcardDeck();
      showToast(
        grade === "knew"
          ? `Promoted to Leitner Box ${appState.flashcardDeck.boxes[fcId]}!`
          : "Reset to Leitner Box 1 (Daily Review)"
      );
      return;
    }

    const fcNavBtn = e.target.closest("[data-fc-nav]");
    if (fcNavBtn) {
      const dir = fcNavBtn.getAttribute("data-fc-nav");
      const total = PORTAL_DATA.interviewQuestions.length;
      clearInterval(appState.flashcardDeck.countdownIntervalId);
      appState.flashcardDeck.countdownRunning = false;
      appState.flashcardDeck.countdownSeconds = 90;
      appState.flashcardDeck.revealed = false;
      appState.flashcardDeck.currentIndex =
        dir === "next"
          ? (appState.flashcardDeck.currentIndex + 1) % total
          : (appState.flashcardDeck.currentIndex + total - 1) % total;
      renderFlashcardDeck();
      return;
    }

    // Career wave & platform filters
    const roleWaveBtn = e.target.closest("[data-role-wave-filter]");
    if (roleWaveBtn) {
      appState.activeRoleWaveFilter = roleWaveBtn.getAttribute("data-role-wave-filter");
      renderCareerAndPlatforms();
      return;
    }

    const platFilterBtn = e.target.closest("[data-platform-filter]");
    if (platFilterBtn) {
      appState.activePlatformFilter = platFilterBtn.getAttribute("data-platform-filter");
      renderCareerAndPlatforms();
      return;
    }

    // Delete paid hours log
    const delPaidBtn = e.target.closest("[data-delete-paid-log]");
    if (delPaidBtn) {
      const idx = Number(delPaidBtn.getAttribute("data-delete-paid-log"));
      appState.paidHoursLogs.splice(idx, 1);
      savePersistedState();
      renderPaidHoursLogger();
      return;
    }

    // Rubric minus/plus steppers (#31)
    const rubricStepBtn = e.target.closest("[data-rubric-step]");
    if (rubricStepBtn) {
      const rid = rubricStepBtn.getAttribute("data-rubric-id");
      const rmax = Number(rubricStepBtn.getAttribute("data-rubric-max"));
      const delta = Number(rubricStepBtn.getAttribute("data-rubric-step"));
      adjustRubricCriterion(rid, rmax, delta);
      return;
    }
  });

  // Delegated Checkbox Changes (#33 & #40)
  document.addEventListener("change", (e) => {
    const dailyCheck = e.target.closest("[data-daily-check-id]");
    if (dailyCheck) {
      toggleDailyStageCheck(dailyCheck.getAttribute("data-daily-check-id"));
      return;
    }

    const checkInput = e.target.closest("[data-check-id]");
    if (checkInput) {
      toggleCheckItem(checkInput.getAttribute("data-check-id"));
      return;
    }
  });

  // Live PI Outreach Email Form Inputs
  ["piLastNameInput", "piPaperTopicInput", "piMethodChoiceInput", "piEmailAddressInput"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", updateOutreachEmailPreview);
  });

  // Paid Hours Logger Add Button
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "addPaidHoursBtn") {
      const platEl = document.getElementById("paidHoursPlatformInput");
      const hrsEl = document.getElementById("paidHoursAmountInput");
      const noteEl = document.getElementById("paidHoursNoteInput");
      const hrs = Number(hrsEl && hrsEl.value);
      if (!hrs || hrs <= 0) {
        showToast("Enter valid paid hours (e.g. 2.5) to log.");
        return;
      }
      appState.paidHoursLogs.push({
        platform: (platEl && platEl.value) || "Outlier AI",
        hours: hrs,
        note: (noteEl && noteEl.value.trim()) || "Evaluation batch",
        date: getLocalDateKey()
      });
      savePersistedState();
      renderPaidHoursLogger();
      triggerHaptic(40);
      showToast(`Logged ${hrs}h toward ≥80-hour gate!`);
    }
  });

  // Mobile All Views Drawer
  const mobileToggle = document.getElementById("mobileMenuBtn");
  const bottomMoreBtn = document.getElementById("bottomMoreMenuBtn");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const toggleMobileDrawer = () => {
    const drawer = document.getElementById("mobileNavDrawer");
    if (drawer && drawer.classList.contains("open")) {
      closeBottomDrawer();
    } else {
      openBottomDrawer();
    }
  };
  if (mobileToggle) mobileToggle.addEventListener("click", toggleMobileDrawer);
  if (bottomMoreBtn) bottomMoreBtn.addEventListener("click", toggleMobileDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeBottomDrawer);

  // Reading Preferences Bar Toggle & Controls
  const openReadingBtn = document.getElementById("openReadingMenuBtn");
  if (openReadingBtn) {
    openReadingBtn.addEventListener("click", () => {
      const bar = document.getElementById("readingPrefsBar");
      if (bar) bar.classList.toggle("open");
    });
  }
  const fontDecBtn = document.getElementById("fontDecreaseBtn");
  if (fontDecBtn) {
    fontDecBtn.addEventListener("click", () => {
      appState.readingScale = Math.max(0.9, Number((appState.readingScale - 0.06).toFixed(2)));
      applyReadingPreferencesUI();
      savePersistedState();
    });
  }
  const fontIncBtn = document.getElementById("fontIncreaseBtn");
  if (fontIncBtn) {
    fontIncBtn.addEventListener("click", () => {
      appState.readingScale = Math.min(1.2, Number((appState.readingScale + 0.06).toFixed(2)));
      applyReadingPreferencesUI();
      savePersistedState();
    });
  }
  const toggleBnBtn = document.getElementById("toggleBanglaAidBtn");
  if (toggleBnBtn) {
    toggleBnBtn.addEventListener("click", () => {
      appState.showBanglaAid = !appState.showBanglaAid;
      applyReadingPreferencesUI();
      savePersistedState();
    });
  }

  // Global Search Modal
  const openSearchBtn = document.getElementById("openSearchModalBtn");
  const closeSearchBtn = document.getElementById("closeSearchModalBtn");
  const searchInput = document.getElementById("globalSearchInput");
  if (openSearchBtn) {
    openSearchBtn.addEventListener("click", () => {
      const modal = document.getElementById("globalSearchModal");
      if (modal) {
        modal.classList.add("open");
        renderGlobalSearchResults(searchInput ? searchInput.value : "");
        if (searchInput) searchInput.focus();
      }
    });
  }
  if (closeSearchBtn) {
    closeSearchBtn.addEventListener("click", () => {
      const modal = document.getElementById("globalSearchModal");
      if (modal) modal.classList.remove("open");
    });
  }
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderGlobalSearchResults(e.target.value);
    });
  }

  // Glossary Modal Close
  const closeGlossaryBtn = document.getElementById("closeGlossaryModalBtn");
  if (closeGlossaryBtn) {
    closeGlossaryBtn.addEventListener("click", () => {
      const modal = document.getElementById("glossaryModal");
      if (modal) modal.classList.remove("open");
    });
  }

  // Confirm Modal Actions
  const confirmCancelBtn = document.getElementById("confirmModalCancelBtn");
  const confirmOkBtn = document.getElementById("confirmModalOkBtn");
  if (confirmCancelBtn) confirmCancelBtn.addEventListener("click", closeConfirmModal);
  if (confirmOkBtn) {
    confirmOkBtn.addEventListener("click", () => {
      const fn = pendingConfirmAction;
      closeConfirmModal();
      if (typeof fn === "function") fn();
    });
  }

  // Theme Toggle (Persisted in localStorage)
  const themeToggle = document.getElementById("themeToggleBtn");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const nextTheme = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      try {
        localStorage.setItem("verisci_theme_pref", nextTheme);
      } catch (e) {}
      updateThemeIconUI();
    });
  }

  // Timer Buttons (Main + Sticky Bar)
  const timerStartBtn = document.getElementById("timerStartPauseBtn");
  const stickyStartBtn = document.getElementById("stickyTimerStartBtn");
  const timerResetBtn = document.getElementById("timerResetBtn");
  const stickyResetBtn = document.getElementById("stickyTimerResetBtn");
  if (timerStartBtn) timerStartBtn.addEventListener("click", toggleTimerStartPause);
  if (stickyStartBtn) stickyStartBtn.addEventListener("click", toggleTimerStartPause);
  if (timerResetBtn) timerResetBtn.addEventListener("click", resetTimer);
  if (stickyResetBtn) stickyResetBtn.addEventListener("click", resetTimer);

  // Recalculate timer accurately when browser tab wakes up (#39)
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      ensureTodayDailyState();
      syncTimerFromClock();
    }
  });
  window.addEventListener("focus", () => {
    ensureTodayDailyState();
    syncTimerFromClock();
  });

  // Weekly filters & .ics export & GitHub API verifier
  const weekMonthSelect = document.getElementById("weekMonthFilter");
  if (weekMonthSelect) {
    weekMonthSelect.addEventListener("change", (e) => {
      appState.weekMonthFilter = e.target.value;
      renderWeeklyTable();
    });
  }

  const weekStatusSelect = document.getElementById("weekStatusFilter");
  if (weekStatusSelect) {
    weekStatusSelect.addEventListener("change", (e) => {
      appState.weekStatusFilter = e.target.value;
      renderWeeklyTable();
    });
  }

  const weekSearchInput = document.getElementById("weekSearchInput");
  if (weekSearchInput) {
    weekSearchInput.addEventListener("input", (e) => {
      appState.weekSearchQuery = e.target.value;
      renderWeeklyTable();
    });
  }

  const exportIcsBtn = document.getElementById("exportIcsBtn");
  if (exportIcsBtn) exportIcsBtn.addEventListener("click", exportCalendarIcs);

  const verifyGhBtn = document.getElementById("verifyGithubBtn");
  if (verifyGhBtn) {
    verifyGhBtn.addEventListener("click", () => verifyGitHubCommitActivity(true));
  }

  const projCatSelect = document.getElementById("projectCategorySelect");
  if (projCatSelect) {
    projCatSelect.addEventListener("change", (e) => {
      appState.projectCategoryFilter = e.target.value;
      renderProjectsCatalog();
    });
  }

  // Rubric Artifact Selector, Baseline Loader & Save Snapshot
  const rubricArtSelect = document.getElementById("rubricArtifactSelect");
  if (rubricArtSelect) {
    rubricArtSelect.addEventListener("change", (e) => {
      appState.selectedRubricArtifact = e.target.value;
      savePersistedState();
      renderRubricCalculator();
    });
  }

  const saveRubricEvalBtn = document.getElementById("saveRubricEvalBtn");
  if (saveRubricEvalBtn) {
    saveRubricEvalBtn.addEventListener("click", recordArtifactEvaluationSnapshot);
  }

  const loadBaselineRubricBtn = document.getElementById("loadBaselineRubricBtn");
  if (loadBaselineRubricBtn) {
    loadBaselineRubricBtn.addEventListener("click", () => {
      const rec = getArtifactEvalRecord(appState.selectedRubricArtifact);
      const baseline = {
        rub_1: 14,
        rub_2: 13,
        rub_3: 9,
        rub_4: 9,
        rub_5: 9,
        rub_6: 8,
        rub_7: 9,
        rub_8: 5,
        rub_9: 4,
        rub_10: 9
      };
      rec.scores = { ...baseline };
      rec.scored = true;
      rec.evaluatedAt = new Date().toLocaleString();
      savePersistedState();
      renderRubricCalculator();
      showToast("Loaded sample evaluation scores — adjust steppers as needed.");
    });
  }

  // Export Clipboard, Download JSON, Import JSON & Safe Reset (#37, #38)
  const exportProgressBtn = document.getElementById("exportProgressBtn");
  if (exportProgressBtn) {
    exportProgressBtn.addEventListener("click", () => {
      const payload = JSON.stringify(buildExportPayloadObject(), null, 2);
      copyTextToClipboard(payload, "Progress & Rubric JSON state");
    });
  }

  const downloadJsonBtn = document.getElementById("downloadJsonBtn");
  if (downloadJsonBtn) {
    downloadJsonBtn.addEventListener("click", downloadStateJsonFile);
  }

  const importJsonBtn = document.getElementById("importJsonBtn");
  const importJsonInput = document.getElementById("importJsonInput");
  if (importJsonBtn && importJsonInput) {
    importJsonBtn.addEventListener("click", () => importJsonInput.click());
    importJsonInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) handleJsonImportFile(file);
      e.target.value = "";
    });
  }

  const resetProgressBtn = document.getElementById("resetProgressBtn");
  if (resetProgressBtn) {
    resetProgressBtn.addEventListener("click", () => {
      openConfirmModal(
        "Reset All Progress & Evaluations?",
        "This will clear your daily checklist, weekly proof links, monthly KPIs, and rubric evaluations. You can Undo immediately after.",
        () => {
          const backupSnapshot = JSON.parse(JSON.stringify(buildExportPayloadObject()));
          appState.checkedItems = {};
          appState.weeklyProofLinks = {};
          appState.dailyByDate = { [getLocalDateKey()]: {} };
          appState.artifactEvaluations = {};
          PORTAL_DATA.evaluatableArtifacts.forEach((a) => getArtifactEvalRecord(a.id));
          savePersistedState();
          refreshAllViews();
          showToast("All progress reset.", () => {
            appState.checkedItems = backupSnapshot.checkedItems || {};
            appState.weeklyProofLinks = backupSnapshot.weeklyProofLinks || {};
            appState.dailyByDate = backupSnapshot.dailyByDate || {};
            appState.artifactEvaluations = backupSnapshot.artifactEvaluations || {};
            savePersistedState();
            refreshAllViews();
            showToast("Restored all progress from Undo backup!");
          });
        }
      );
    });
  }

  // Hash-based Back/Forward Browser Navigation (#Section 3)
  window.addEventListener("hashchange", () => {
    const rawHash = (window.location.hash || "").replace(/^#/, "");
    if (rawHash && PORTAL_DATA.sectionOrder.includes(rawHash) && rawHash !== appState.activeSection) {
      switchSection(rawHash, { updateHash: false, focusHeading: true });
    }
  });

  // Back to Top Button Visibility (#17)
  const backTopBtn = document.getElementById("backToTopBtn");
  if (backTopBtn) {
    window.addEventListener(
      "scroll",
      () => {
        backTopBtn.classList.toggle("visible", window.scrollY > 360);
      },
      { passive: true }
    );
    backTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Monthly Card Touch Swipe Gesture
  let touchStartX = 0;
  document.addEventListener(
    "touchstart",
    (e) => {
      if (e.target.closest("#monthlySwipeCard")) {
        touchStartX = e.changedTouches[0].screenX;
      }
    },
    { passive: true }
  );
  document.addEventListener(
    "touchend",
    (e) => {
      if (touchStartX && e.target.closest("#monthlySwipeCard")) {
        const diff = e.changedTouches[0].screenX - touchStartX;
        touchStartX = 0;
        if (Math.abs(diff) > 65) {
          const curIdx = PORTAL_DATA.monthlyBlueprints.findIndex((m) => m.code === appState.activeMonthCode);
          const nextIdx = diff < 0 ? (curIdx + 1) % 6 : (curIdx + 5) % 6;
          appState.activeMonthCode = PORTAL_DATA.monthlyBlueprints[nextIdx].code;
          renderMonthlyBlueprints();
        }
      }
    },
    { passive: true }
  );
}

function initPortal() {
  loadPersistedState();
  applyReadingPreferencesUI();
  updateThemeIconUI();
  refreshAllViews();
  attachEventListeners();

  // Resume timer if it was active before reload (#39)
  if (appState.timer.running && appState.timer.targetEndTimeMs) {
    syncTimerFromClock();
    if (appState.timer.running) {
      appState.timer.intervalId = setInterval(syncTimerFromClock, 1000);
    }
  }

  // Initial Hash Routing (#Section 3)
  const initialHash = (window.location.hash || "").replace(/^#/, "");
  if (initialHash && PORTAL_DATA.sectionOrder.includes(initialHash)) {
    switchSection(initialHash, { updateHash: false, focusHeading: false });
  } else {
    switchSection(appState.activeSection || "overview", { updateHash: false, focusHeading: false });
  }

  // Online / Offline Connectivity Telemetry (#Section 5 Offline Functionality)
  function updateNetworkStatusUI() {
    const badge = document.getElementById("networkStatusBadge");
    if (!badge) return;
    const isOffline = typeof navigator !== "undefined" && navigator.onLine === false;
    badge.style.display = isOffline ? "inline-flex" : "none";
    badge.textContent = isOffline ? "Offline Mode" : "Online";
  }
  window.addEventListener("online", () => {
    updateNetworkStatusUI();
    showToast("Back online — live GitHub verification enabled.");
  });
  window.addEventListener("offline", () => {
    updateNetworkStatusUI();
    showToast("Offline mode active — all local planning data and timers remain available.");
  });
  updateNetworkStatusUI();

  // Android Chrome PWA Installation Flow (beforeinstallprompt & appinstalled) (#Section 4)
  let deferredInstallPrompt = null;
  const installBtn = document.getElementById("pwaInstallBtn");
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (installBtn) installBtn.style.display = "inline-flex";
  });
  if (installBtn) {
    installBtn.addEventListener("click", async () => {
      if (!deferredInstallPrompt) {
        showToast("Use Chrome Menu (⋮) -> Install app or Add to Home screen.");
        return;
      }
      deferredInstallPrompt.prompt();
      try {
        await deferredInstallPrompt.userChoice;
      } catch (err) {}
      deferredInstallPrompt = null;
      installBtn.style.display = "none";
    });
  }
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    if (installBtn) installBtn.style.display = "none";
    showToast("Execution Blueprint installed as an Android app!");
  });

  // Register Service Worker & Handle Non-Destructive Version Updates (#Section 3 & #Section 6)
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    navigator.serviceWorker
      .register("./sw.js", { scope: "./" })
      .then((reg) => {
        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              showToast("New version available — tap Undo/Update to refresh", () => {
                newWorker.postMessage({ type: "SKIP_WAITING" });
              });
            }
          });
        });
      })
      .catch(() => {});

    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPortal);
} else {
  initPortal();
}
