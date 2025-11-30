export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Software', href: '/software' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const heroContent = {
  name: 'William A. Gerlach',
  title: 'Data Scientist · Materials Science Researcher · Software Developer',
  summary:
    'I build computational tools that couple machine learning with materials modeling to accelerate discovery, simulation, and scientific decision making.',
  secondary:
    'Across academia and industry labs I translate messy experimental datasets into reproducible scientific software and validated digital workflows.',
  actions: [
    { label: 'View Research', href: '/research', variant: 'primary' },
    { label: 'Software Projects', href: '/software', variant: 'ghost' },
    { label: 'modopy · coming soon', href: '/software#modopy', variant: 'dashed' },
  ],
};

export const researchThemes = [
  {
    title: 'Materials Modeling',
    description:
      'Atomistic simulations, microstructure evolution, and property prediction pipelines that reveal how chemistry and processing map to performance.',
    tags: ['density functional theory', 'phase-field', 'alloys'],
  },
  {
    title: 'Data-driven Simulation',
    description:
      'Surrogate models, Bayesian calibration, and uncertainty quantification for large simulation campaigns in energy, aerospace, and manufacturing.',
    tags: ['uq', 'bayesian', 'digital twins'],
  },
  {
    title: 'Computational Methods',
    description:
      'Reproducible research tooling that blends Python, Rust, and cloud-native services to capture scientific intent and scale analysis.',
    tags: ['python', 'rust', 'cloud workflows'],
  },
];

export const publications = [
  {
    title: 'Graph neural operators for accelerated phase-field simulations of microstructure evolution',
    authors: 'W. A. Gerlach, S. Patel, J. Hernandez',
    venue: 'npj Computational Materials',
    year: 2023,
    tags: ['materials science', 'graph ml'],
  },
  {
    title: 'Bayesian calibration of diffusion models with sparse in-situ data',
    authors: 'W. A. Gerlach, F. Liu',
    venue: 'Acta Materialia',
    year: 2022,
    tags: ['uq', 'modeling'],
  },
  {
    title: 'Automating scientific software validation with workflow-native metadata',
    authors: 'W. A. Gerlach, R. Myers',
    venue: 'US-RSE Conference',
    year: 2021,
    tags: ['software engineering', 'research tooling'],
  },
];

export const talks = [
  {
    title: 'Data-centric materials modeling for mission-ready alloys',
    event: 'TMS 2024',
    link: '#',
    year: 2024,
  },
  {
    title: 'Pragmatic uncertainty quantification for production simulation teams',
    event: 'SciPy 2023',
    link: '#',
    year: 2023,
  },
  {
    title: 'Making research software reproducible by default',
    event: 'Research Software Engineers Conf.',
    link: '#',
    year: 2022,
  },
];

export const teaching = [
  {
    role: 'Adjunct Instructor',
    org: 'University of Michigan · Applied Data Science',
    summary: 'Designed and taught a project-based course focused on simulation-informed machine learning.',
  },
  {
    role: 'Mentor',
    org: 'NASA Frontier Development Lab',
    summary: 'Guided interdisciplinary cohorts on building trustworthy ML tools for space materials.',
  },
];

export const modopyHighlight = {
  status: 'In development',
  title: 'modopy',
  description:
    'An open-source Python library that treats materials modeling workflows as declarative, versioned objects with built-in provenance tracking.',
  bullets: [
    'Composable simulation + ML pipelines',
    'Deterministic experiment tracking + metadata spec',
    'Targets HPC notebooks and cloud-native runners alike',
  ],
  actions: [
    { label: 'Follow progress', href: '/blog', variant: 'primary' },
    { label: 'GitHub (private beta)', href: '#', variant: 'ghost', disabled: true },
  ],
};

export const projects = [
  {
    title: 'LatticeScope',
    description: 'Interactive toolkit for interrogating multi-scale simulation outputs with streaming lab data.',
    stack: ['TypeScript', 'WebGL', 'Python'],
    badges: ['data visualization', 'simulation'],
    link: 'https://github.com/wagerc97/latticescope',
  },
  {
    title: 'InversionLab',
    description: 'Bayesian inference engine that stitches together generative surrogates with legacy solvers.',
    stack: ['Python', 'JAX', 'FastAPI'],
    badges: ['uq', 'tooling'],
    link: 'https://github.com/wagerc97/inversionlab',
  },
  {
    title: 'Signalsmith',
    description: 'Rust-based signal conditioning microservice deployed across manufacturing lines.',
    stack: ['Rust', 'gRPC', 'PostgreSQL'],
    badges: ['data engineering', 'edge'],
    link: 'https://github.com/wagerc97/signalsmith',
  },
];

export const timeline = [
  {
    label: 'Present',
    title: 'Lead Data Scientist · Applied Materials Lab',
    detail: 'Architecting hybrid physics/ML workflows for aerospace alloys and qualification.',
  },
  {
    label: '2021 — 2023',
    title: 'Research Software Engineer · National Lab',
    detail: 'Delivered reproducible pipelines and stewarded scientific software best practices.',
  },
  {
    label: '2016 — 2021',
    title: 'PhD · Materials Science & Engineering',
    detail: 'Focused on microstructure-sensitive property prediction and open scientific tooling.',
  },
];

export const credentials = [
  { label: 'CV', href: 'https://drive.google.com/your-cv' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=XXXX' },
  { label: 'GitHub', href: 'https://github.com/wagerc97' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/williamgerlach/' },
];

export const blogNotes = [
  {
    title: 'Calibrating diffusion models with sparse thermocouple data',
    date: 'May 12, 2024',
    summary: 'Notes from our latest experiment where we combined Gaussian processes with CALPHAD priors.',
  },
  {
    title: 'modopy sprint 01',
    date: 'Apr 02, 2024',
    summary: 'Sketched the resource graph abstraction and defined the provenance schema for simulations.',
  },
  {
    title: 'Talk accepted: TMS 2024',
    date: 'Mar 17, 2024',
    summary: 'Will share our lessons on data-centric alloys R&D and hybrid modeling workflows.',
  },
];

export const contact = {
  email: 'hello@wagerc97.dev',
  location: 'Chicago · Remote-friendly',
  socials: [
    { label: 'GitHub', href: 'https://github.com/wagerc97' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/williamgerlach/' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=XXXX' },
  ],
};
