"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { assets, toolsData } from "@/assets/assets";

const navItems = [
  { label: "Profil", href: "#profile" },
  { label: "Expérience", href: "#experience" },
  { label: "Parcours", href: "#education" },
  { label: "Activités", href: "#activities" },
  { label: "Projets IA", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const proofPoints = [
  { value: "Stage Alternance 2027", label: "Objectif: Data Scientist & Ingenieur IA" },
  { value: "3 stages", label: "Expérience en Data Scientist & IA Engineering" },
  { value: "Fr C1 - En B2 - Ar C1", label: "Communication professionnelle multilingue" },
];

const alternanceSignals = [
  "À la recherche d'une Alternance - Data Scientist & Ingénieur IA",
  "Cycle d'ingénieur 2023 - 2026 (FST Tanger)",
];

const collaborationPromise = [
  {
    title: "Esprit d'équipe",
    description:
      "Collaboration efficace avec des équipes techniques et produit, communication claire et capacité à transformer les besoins métiers en solutions techniques IA et data.",
  },
  {
    title: "Autonomie & Initiative",
    description:
      "Capacité à prendre en charge un projet de bout en bout : recherche, expérimentation, développement du modèle, intégration via API et amélioration continue.",
  },
  {
    title: "Rigueur Opérationnelle",
    description:
      "Organisation du travail, documentation claire et respect des bonnes pratiques de développement (Git, architecture propre, CI/CD, déploiement d’APIs et modèles IA).",
  },
];

const alternanceInterests = [
  "Machine Learning et Deep Learning",
  "LLMs et agents IA",
  "Integration d'APIs IA et systemes intelligents",
  "Deploiement de modeles via APIs et architectures microservices",
];

const alternanceProjects = [
  "Conception et déploiement de modèles de Machine Learning pour la prédiction et l’analyse de données.",
  "Développement et fine-tuning de LLMs pour des applications NLP.",
  "Intégration de solutions IA dans des applications web via APIs (FastAPI/Flask) et architectures scalables.",
];

const focusAreas = [
  {
    title: "Machine Learning & LLMs",
    description:
      "Fine-tuning, Transformers, PyTorch, PEFT et intégration de modèles IA dans des workflows applicatifs.",
  },
  {
    title: "Data & Cloud Stack",
    description:
      "Pandas, NumPy, PostgreSQL, MySQL, Snowflake, Docker, CI/CD et approche orientée scalabilité.",
  },
  {
    title: "Génie logiciel",
    description:
      "Architecture microservices, conception UML, API REST/GraphQL et bonnes pratiques de qualité logicielle.",
  },
];

const stackNames = [
  "VS Code",
  "Firebase",
  "MongoDB",
  "Figma",
  "Git",
  "MySQL",
  "GitHub",
  "Java",
  "React",
  "Spring Boot",
  "Angular",
  "Oracle",
  "JavaScript",
  "TypeScript",
  "Docker",
  "Scrum",
  "Python",
];

const experienceTimeline = [
  {
    period: "Février 2026 - en cours",
    role: "Stagiaire IA Engineering",
    company: "Zenger News",
    logo: "/zengernews_logo.jpeg",
    points: [
      "Conception de scripts de scraping automatisés pour la collecte de flux d'actualités.",
      "Implémentation d'une recherche sémantique basée sur des embeddings pour dépasser la simple recherche par mots-clés.",
      "Intégration de Large Language Models (LLMs) pour la synthèse d'informations et le traitement du langage naturel.",
    ],
  },
  {
    period: "Juillet 2025 - Septembre 2025",
    role: "Ingénieur IA Stagiaire",
    company: "Dinomite Studios",
    logo: "/Logo_Dinomite_Studios.jpeg",
    points: [
      "Conception de systèmes automatisés pour la génération de questions ouvertes et QCM.",
      "Développement d'agents IA spécialisés en analyse sémantique et correction grammaticale.",
      "Optimisation Transformers : fine-tuning via PyTorch et Hugging Face pour accroître la qualité.",
    ],
  },
  {
    period: "Avril 2023 - Juillet 2023",
    role: "Ingénieur Logiciel (Stage)",
    company: "Smart Automation Technologies",
    logo: "/Logo_Smart_Automation_Technologies.jpeg",
    points: [
      "Modélisation & Conception : Formalisation des besoins et conception via diagrammes UML.",
      "Développement Full-Stack : Conception et réalisation complète d'une plateforme d'appels d'offres.",
    ],
  },
];

const academicTimeline = [
  {
    period: "2023 - 2026",
    degree: "Cycle d’ingénierie :",
    degreeSubtitle: "Logiciels et Systèmes Intelligents",
    degreeSubtitleVariant: "muted",
    degreeSubtitleNoWrap: true,
    school: "Faculté des Sciences et Techniques de Tanger",
    logo: "/logo%20fst.png",
    points: [
      "Comprendre les enjeux des technologies de l’information.",
      "Proposer et construire des solutions informatiques et décisionnelles compétitives et réalistes.",
      "Intervenir sur des problématiques complexes et piloter des projets (conduite du changement).",
    ],
  },
  {
    period: "2022 - 2023",
    degree: "Licence en",
    degreeSubtitle: "Génie Informatique",
    degreeSubtitleVariant: "muted",
    degreeSubtitleNoWrap: true,
    school: "Faculté des Sciences et Techniques de Tanger",
    logo: "/logo%20fst.png",
    points: [
      "Concevoir des applications informatiques répondant aux besoins spécifiques des entreprises et des organisations.",
      "Développer des solutions de qualité, robustes et maintenables (bonnes pratiques de génie logiciel).",
      "Maintenir et faire évoluer des applications en assurant fiabilité, performance et documentation.",
    ],
  },
  {
    period: "2020 - 2022",
    degree: "DEUST",
    degreeSubtitle: "MIPC",
    degreeSubtitleVariant: "muted",
    degreeSubtitleNoWrap: true,
    school: "Faculté des Sciences et Techniques de Tanger",
    logo: "/logo%20fst.png",
    points: [
      "Suivre un tronc commun en mathématiques, informatique, physique et chimie.",
      "Renforcer les fondamentaux en algorithmique, programmation et structures de données.",
      "Développer des bases solides en logique, calculs mathématiques et résolution de problèmes.",
    ],
  },
  {
    period: "2019 - 2020",
    degree: "Baccalauréat",
    degreeSubtitle: "Sciences Mathématiques A (option français)",
    degreeSubtitleVariant: "muted-tight",
    degreeSubtitleNoWrap: true,
    school: "Lycee Abdelkarim Al Khattabi, Nador",
    logo: null,
    points: [
      "Socle solide en mathematiques et raisonnement analytique.",
      "Preparation a des etudes superieures en informatique et ingenierie.",
    ],
  },
];

const extracurricularActivities = [
  {
    category: "Hackathon",
    title: "3eme place - Data2025 Hackathon (Sustainable Mobility)",
    period: "26 - 27 Avril 2025 (CODE212, Tanger)",
    image: "/3rd%20place%20hackatton.png",
    imageAlt: "Data2025 Hackathon - 3eme place (Verdant Vectors)",
    description:
      "3eme place avec l'equipe Verdant Vectors. Notre solution VerdeWay combine recommandations d'itineraires eco-friendly, transport multimodal optimise et points de recompense verts, propulses par un moteur IA d'optimisation d'itineraire.",
    highlight: "Verdant Vectors - VerdeWay",
  },
  {
    category: "Hackathon",
    title: "1er prix - Hackathon #2",
    period: "Date a preciser",
    description:
      "Prototypage rapide d'une application orientee impact, avec implementation technique et pitch final sous contrainte de temps.",
    highlight: "Victoire 2/3",
  },
  {
    category: "Hackathon",
    title: "1er prix - Hackathon #3",
    period: "Date a preciser",
    description:
      "Pilotage de l'execution technique de l'equipe et optimisation de la solution pour repondre aux criteres du challenge.",
    highlight: "Victoire 3/3",
  },
  {
    category: "Leadership",
    title: "President du club IT GEEKS",
    duration: "Septembre 2023 - Juin 2024",
    image: "/Team%20Leader.png",
    imageAlt: "Badr Benabdellah - Team Leader",
    description:
      "Animation du club, organisation d'activites techniques et coordination des membres autour de projets, ateliers et evenements.",
    highlight: "Responsabilite associative",
  },
];

const projectHighlights = [
  {
    title: "Invest Buddy",
    subtitle: "Microservices + ML financier",
    image: "/InvestBuddy.png",
    details:
      "Conception et implementation d'un modele Scikit-learn pour l'evaluation du risque de credit et la prediction de tendances financieres en temps reel.",
    stack: "Spring Boot, Angular, MySQL, Pandas, Numpy, Scikit-learn",
  },
  {
    title: "Recolorisation d'Images",
    subtitle: "Deep Learning - Computer Vision",
    image: "/work-2.png",
    details:
      "Developpement d'un modele CNN Encoder-Decoder (U-Net) pour coloriser automatiquement des images N&B en espace LAB.",
    stack: "Python, TensorFlow, Keras, CNN, U-Net, PSNR/SSIM/MAE",
  },
  {
    title: "Generation intelligente de QCM",
    subtitle: "LLMs appliques a l'education",
    image: "/work-4.png",
    details:
      "Implementation de modeles LLMs (Hugging Face) pour la generation dynamique de questions ouvertes et QCM adaptes au niveau de l'etudiant.",
    stack: "LLMs, Transformers, PyTorch, PEFT, PostgreSQL",
  },
];

const competencyGroups = [
  {
    title: "Langages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "C/C++", "Node.js", ".NET"],
  },
  {
    title: "Frameworks",
    items: ["Angular", "Spring Boot", "JEE", "Spring Cloud", "Spring Security", "Express.js"],
  },
  {
    title: "Bases de donnees",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Oracle", "Redis"],
  },
  {
    title: "Outils & IA",
    items: [
      "Architecture microservices",
      "Git",
      "CI/CD",
      "Docker",
      "Maven",
      "Power BI",
      "Pandas",
      "Numpy",
      "LLMs",
      "Fine-tuning",
      "Transformers",
      "PyTorch",
      "PEFT",
      "Snowflake",
      "Scrum",
      "MLOps",
      "API REST/GraphQL",
      "AWS",
    ],
  },
];

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/badrbenabdellah",
    href: "https://github.com/badrbenabdellah",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/badr-benabdellah",
    href: "https://www.linkedin.com/in/badr-benabdellah/",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/badrben",
    href: "https://leetcode.com/u/badrben/",
  },
  {
    label: "Portfolio",
    value: "badrbenabdellah.netlify.app",
    href: "https://badrbenabdellah.netlify.app/",
  },
];

const sectionTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const getCompanyBadge = (company) =>
  company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const DownloadIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v10" />
    <path d="M7 10l5 5 5-5" />
    <path d="M4 17v3h16v-3" />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 5h5v5" />
    <path d="M10 14L19 5" />
    <path d="M19 14v5h-5" />
    <path d="M5 10v9h9" />
  </svg>
);

const CopyIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 9h10v10H9z" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 7 9-7" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .8 3a2 2 0 01-.5 2.1L9 10a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c1 .4 2 .7 3 .8a2 2 0 011.7 2z" />
  </svg>
);

const PaperPlaneIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4z" />
  </svg>
);

const ArrowUpIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5" />
    <path d="M5 12l7-7 7 7" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm8 0h4.8v2.2h.1c.7-1.3 2.4-2.7 5-2.7C21.4 7.5 24 10.1 24 15.6V24h-5v-7.5c0-1.8-.1-4.2-2.6-4.2-2.6 0-3 2-3 4.1V24H8V8z" />
  </svg>
);

const GitHubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.29 3.44 9.78 8.2 11.36.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58C20.56 22.28 24 17.79 24 12.5 24 5.87 18.63 0.5 12 0.5z" />
  </svg>
);

export default function Home() {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [contactTopic, setContactTopic] = useState("Alternance");
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const currentYear = new Date().getFullYear();
  const contactEmail = "benabdellahbadr3@gmail.com";
  const contactPhone = "0634562555";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setIsEmailCopied(true);
      window.setTimeout(() => setIsEmailCopied(false), 1500);
    } catch (error) {
      console.error(error);
      setIsEmailCopied(false);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Envoi en cours...");

    const formData = new FormData(event.target);
    formData.append("access_key", "86710711-4637-4216-8846-a32c04aa38f6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message envoye. Merci, je reviens vers vous rapidement.");
        event.target.reset();
      } else {
        setResult("Echec de l'envoi. Merci de reessayer dans quelques instants.");
      }
    } catch (error) {
      console.error(error);
      setResult("Erreur reseau. Vous pouvez aussi me contacter par email.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main id="top" className="portfolio-shell creative-shell min-h-screen text-[color:var(--ink)]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-[#ff8e5f]/35 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#11b5ae]/24 blur-3xl" />
        <div className="absolute bottom-12 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ffd87b]/35 blur-3xl" />
      </div>

      <header className="fixed top-4 z-40 w-full">
        <div className="creative-nav mx-auto flex w-[min(1120px,92%)] items-center justify-between rounded-full px-5 py-3 glass-card">
          <a href="#top" className="font-display text-lg font-semibold tracking-wide">
            Badr Benabdellah
          </a>

          <ul className="hidden items-center gap-7 text-sm md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[color:var(--muted)] transition hover:text-[color:var(--ink)]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="rounded-full px-5 py-2 text-sm font-semibold primary-btn">
            Discutons
          </a>
        </div>
      </header>

      <section className="mx-auto grid w-[min(1120px,92%)] gap-14 pb-20 pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:pt-44">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={sectionTransition}>
          <span className="chip inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
            À la recherche d'un Alternance - Data Scientist & ingénieur IA
          </span>

          <h1 className="hero-title mt-6 text-4xl sm:text-5xl lg:text-6xl">
            Ingénieur en <span className="hero-emphasis">IA</span> qui transforme des idées en
            produits concrets.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-[color:var(--muted)] sm:text-lg">
            Ingénieur en Logiciels et Systèmes Intelligents, spécialisé en IA Engineering, je conçois et développe des solutions basées sur le Machine Learning, le Deep Learning et les LLMs. Passionné par la mise en production de modèles et la création de systèmes intelligents à fort impact, je m’investis dans des projets alliant performance, scalabilité et valeur métier.
          </p>

          <motion.ul variants={listVariants} initial="hidden" animate="show" className="mt-6 flex flex-wrap gap-3">
            {alternanceSignals.map((signal) => (
              <motion.li key={signal} variants={itemVariants} className="signal-chip rounded-full px-4 py-2 text-xs font-semibold">
                {signal}
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full px-7 py-3 text-sm font-semibold primary-btn">
              Planifier un échange Alternance
            </a>
            <a
              href="/Badr Benabdellah CV.pdf"
              download
              className="secondary-btn rounded-full px-7 py-3 text-sm font-semibold"
            >
              Recevoir mon CV
            </a>
          </div>

        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...sectionTransition, delay: 0.15 }}
          className="profile-panel glass-card h-fit rounded-[2rem] p-7 lg:self-start"
        >
          <div className="relative mx-auto h-72 w-64 overflow-hidden border border-white/75 [border-radius:42%_58%_52%_48%/48%_44%_56%_52%]">
            <Image src={assets.profile_img} alt="Portrait de Badr Benabdellah" fill priority className="object-cover" />
          </div>

          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-[#d2c8b8] bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">Cible</p>
              <p className="mt-1 text-sm font-semibold">Alternance Data Scientist & Ingénieur IA</p>
            </div>
            <div className="rounded-2xl border border-[#d2c8b8] bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">Contact rapide</p>
              <p className="mt-1 text-sm font-semibold">benabdellahbadr3@gmail.com | 0634562555</p>
            </div>
          </div>

        </motion.aside>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-4 sm:grid-cols-3 lg:col-span-2"
        >
          {proofPoints.map((point) => (
            <motion.article key={point.label} variants={itemVariants} className="proof-card glass-card rounded-2xl p-5">
              <p className="proof-value">{point.value}</p>
              <p className="proof-label mt-2">{point.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>


      <section className="mx-auto w-[min(1120px,92%)] pb-8">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={sectionTransition}
          className="creative-banner rounded-[2rem] p-7 sm:p-9"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                Positionnement CV
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">Profil alternance - IA appliquee & Engineering</h2>
              <p className="mt-3 text-sm text-[color:var(--muted)] sm:text-base [text-wrap:pretty]">
                Ingénieur en Logiciels et Systèmes Intelligents, je recherche une alternance pour l’année&nbsp;universitaire 2026/2027 afin de contribuer à des projets concrets en Intelligence Artificielle, Data et développement de solutions IA déployables.
              </p>
            </div>
            <a href="#contact" className="secondary-btn rounded-full px-6 py-3 text-sm font-semibold">
              Proposer une alternance
            </a>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="glass-card rounded-2xl p-5 sm:p-6">
              <p className="text-sm font-semibold text-[color:var(--muted)] sm:text-base">
                Mes axes de spécialisation prioritaires sont les suivants :
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {alternanceInterests.map((item) => (
                  <span key={item} className="signal-chip inline-flex rounded-full px-3 py-1.5 text-xs font-semibold sm:text-sm">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-[color:var(--muted)] sm:text-base">
                Mon objectif est de concevoir, entraîner et déployer des systèmes IA utiles en production, en combinant modélisation, software engineering et MLOps.
              </p>
            </article>

            <article className="glass-card rounded-2xl p-5 sm:p-6">
              <p className="text-sm font-semibold text-[color:var(--muted)] sm:text-base">
                Parmi mes expériences récentes, j’ai notamment mené des projets couvrant :
              </p>
              <ol className="mt-4 space-y-3">
                {alternanceProjects.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-[#d2c8b8] bg-white/70 p-3 text-sm text-[color:var(--muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ol>
            </article>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {collaborationPromise.map((promise, index) => (
              <article key={promise.title} className="promise-card rounded-2xl p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]"></p>
                <h3 className="mt-2 font-semibold">{promise.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{promise.description}</p>
              </article>
            ))}
          </div>
        </motion.article>
      </section>
      <motion.section
        id="profile"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={sectionTransition}
        className="section-anchor mx-auto w-[min(1120px,92%)] py-14"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="glass-card rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Profil</p>
            <h2 className="mt-3 font-display text-3xl">Profil CV - Ingénieur IA</h2>
            <p className="mt-4 text-[color:var(--muted)]">
              Ingénieur en Logiciels et Systèmes Intelligents, je m’intéresse particulièrement au Machine Learning, au
              Deep Learning et aux LLMs, avec la volonté d’apporter des solutions innovantes et robustes à des produits
              réels.
            </p>
            <div className="mt-5 rounded-2xl border border-[#d2c8b8] bg-white/70 p-4 text-sm text-[color:var(--muted)]">
              Formation : Cycle d’ingénierie (2023-2026), Licence en Génie informatique (2022-2023), DEUST MIPC
              (2020-2022), Baccalauréat Maths A (2019-2020).
            </div>
          </article>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {focusAreas.map((item, index) => (
              <motion.article key={item.title} variants={itemVariants} className="glass-card rounded-3xl p-6">
                <p className="font-display text-xl">{`0${index + 1}`}</p>
                <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={sectionTransition}
        className="section-anchor mx-auto w-[min(1120px,92%)] py-14"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Selection</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Expérience Professionnelle</h2>
          </div>
        </div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="experience-timeline"
        >
          {experienceTimeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.article key={item.role} variants={itemVariants} className="timeline-row">
                {isLeft ? (
                  <>
                    <div className="timeline-card-col">
                      <article className="timeline-card timeline-card-experience rounded-3xl p-6">
                        <h3 className="font-display text-3xl leading-tight text-white">{item.role}</h3>
                        <p className="mt-1 text-base font-semibold text-white/75">{item.company}</p>
                        <p className="timeline-period-inline">{item.period}</p>

                        <ul className="timeline-points mt-5 grid gap-3 text-sm text-white/85">
                          {item.points.map((point) => (
                            <li key={point} className="timeline-point">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>

                    <div className="timeline-center timeline-center-right">
                      <span className="timeline-dot">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={`Logo ${item.company}`}
                            fill
                            sizes="72px"
                            className="timeline-dot-logo"
                          />
                        ) : (
                          <span className="timeline-dot-fallback">{getCompanyBadge(item.company)}</span>
                        )}
                      </span>
                      <p className="timeline-period timeline-period-right">{item.period}</p>
                    </div>

                    <div className="timeline-spacer" />
                  </>
                ) : (
                  <>
                    <div className="timeline-spacer" />

                    <div className="timeline-center timeline-center-left">
                      <span className="timeline-dot">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={`Logo ${item.company}`}
                            fill
                            sizes="72px"
                            className="timeline-dot-logo"
                          />
                        ) : (
                          <span className="timeline-dot-fallback">{getCompanyBadge(item.company)}</span>
                        )}
                      </span>
                      <p className="timeline-period timeline-period-left">{item.period}</p>
                    </div>

                    <div className="timeline-card-col">
                      <article className="timeline-card timeline-card-experience rounded-3xl p-6">
                        <h3 className="font-display text-3xl leading-tight text-white">{item.role}</h3>
                        <p className="mt-1 text-base font-semibold text-white/75">{item.company}</p>
                        <p className="timeline-period-inline">{item.period}</p>

                        <ul className="timeline-points mt-5 grid gap-3 text-sm text-white/85">
                          {item.points.map((point) => (
                            <li key={point} className="timeline-point">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        id="education"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={sectionTransition}
        className="section-anchor mx-auto w-[min(1120px,92%)] py-14"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Formation</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Parcours académique</h2>
          </div>
        </div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="experience-timeline"
        >
          {academicTimeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            const degreeSubtitleVariantClassName =
              item.degreeSubtitleVariant === "muted"
                ? "mt-2 block text-[0.75em] font-semibold leading-[1.15] tracking-tight text-[color:var(--muted)]"
                : item.degreeSubtitleVariant === "muted-tight"
                  ? "mt-2 block text-[0.68em] font-semibold leading-[1.15] tracking-tight text-[color:var(--muted)]"
                  : "block";
            const degreeSubtitleClassName = [degreeSubtitleVariantClassName, item.degreeSubtitleNoWrap ? "whitespace-nowrap" : null]
              .filter(Boolean)
              .join(" ");
            const degreeNode = item.degreeSubtitle ? (
              <>
                <span className="block">{item.degree}</span>
                <span className={degreeSubtitleClassName}>{item.degreeSubtitle}</span>
              </>
            ) : (
              item.degree
            );

            return (
              <motion.article key={item.degree} variants={itemVariants} className="timeline-row">
                {isLeft ? (
                  <>
                    <div className="timeline-card-col">
                      <article className="timeline-card timeline-card-academic rounded-3xl p-6">
                        <h3 className="timeline-degree">{degreeNode}</h3>
                        <p className="timeline-school">{item.school}</p>
                        <p className="timeline-period-inline">{item.period}</p>

                        <ul className="timeline-points timeline-points-academic mt-5 grid gap-3 text-sm text-white/85">
                          {item.points.map((point) => (
                            <li key={point} className="timeline-point">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>

                    <div className="timeline-center timeline-center-right">
                      <span className="timeline-dot timeline-dot-academic">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={`Logo ${item.school}`}
                            fill
                            sizes="72px"
                            className="timeline-dot-logo"
                          />
                        ) : (
                          <span className="timeline-dot-fallback">{getCompanyBadge(item.school)}</span>
                        )}
                      </span>
                      <p className="timeline-period timeline-period-right">{item.period}</p>
                    </div>

                    <div className="timeline-spacer" />
                  </>
                ) : (
                  <>
                    <div className="timeline-spacer" />

                    <div className="timeline-center timeline-center-left">
                      <span className="timeline-dot timeline-dot-academic">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={`Logo ${item.school}`}
                            fill
                            sizes="72px"
                            className="timeline-dot-logo"
                          />
                        ) : (
                          <span className="timeline-dot-fallback">{getCompanyBadge(item.school)}</span>
                        )}
                      </span>
                      <p className="timeline-period timeline-period-left">{item.period}</p>
                    </div>

                    <div className="timeline-card-col">
                      <article className="timeline-card timeline-card-academic rounded-3xl p-6">
                        <h3 className="timeline-degree">{degreeNode}</h3>
                        <p className="timeline-school">{item.school}</p>
                        <p className="timeline-period-inline">{item.period}</p>

                        <ul className="timeline-points timeline-points-academic mt-5 grid gap-3 text-sm text-white/85">
                          {item.points.map((point) => (
                            <li key={point} className="timeline-point">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </motion.section>

      <section id="activities" className="section-anchor mx-auto w-[min(1120px,92%)] py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Engagement</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Activites parascolaires</h2>
          </div>
        </div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {extracurricularActivities.map((activity) => {
            const periodLine = activity.duration ? `Durée : ${activity.duration}` : activity.period;

            return (
              <motion.article key={activity.title} variants={itemVariants} className="glass-card overflow-hidden rounded-3xl">
                {activity.image ? (
                  <a href={activity.image} target="_blank" rel="noreferrer" className="block cursor-zoom-in">
                    <div className="relative h-80 w-full border-b border-[#d2c8b8] bg-white/85 sm:h-[22rem]">
                      <Image
                        src={activity.image}
                        alt={activity.imageAlt || activity.title}
                        fill
                        sizes="(min-width: 768px) 520px, 100vw"
                        quality={95}
                        className="object-contain p-4"
                      />
                    </div>
                  </a>
                ) : null}

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    {activity.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight">{activity.title}</h3>
                  {periodLine ? (
                    <p className="mt-1 text-sm font-semibold text-[color:var(--muted)]">{periodLine}</p>
                  ) : null}
                  <p className="mt-4 text-sm text-[color:var(--muted)]">{activity.description}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                    {activity.highlight}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section id="projects" className="section-anchor mx-auto w-[min(1120px,92%)] py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Portfolio</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Projets cles du CV</h2>
          </div>
          <a
            href="https://github.com/badrbenabdellah"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn rounded-full px-6 py-2 text-sm font-semibold"
          >
            Voir les repos GitHub
          </a>
        </div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projectHighlights.map((project) => (
            <motion.article key={project.title} variants={itemVariants} className="glass-card overflow-hidden rounded-3xl">
              <div className="relative h-56">
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/26 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/75">{project.subtitle}</p>
                  <h3 className="font-display text-2xl text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[color:var(--muted)]">{project.details}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.13em] text-[color:var(--muted)]">
                  {project.stack}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="skills" className="section-anchor mx-auto grid w-[min(1120px,92%)] gap-8 py-14 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={sectionTransition}
          className="glass-card rounded-3xl p-7"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Competences CV</p>
          <h2 className="mt-2 font-display text-3xl">Competences techniques du CV</h2>

          <div className="mt-6 grid gap-4">
            {competencyGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-[#d2c8b8] bg-white/72 p-4">
                <h3 className="font-semibold">{group.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{group.items.join(" - ")}</p>
              </article>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...sectionTransition, delay: 0.1 }}
          className="glass-card rounded-3xl p-7"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Outils</p>
          <h2 className="mt-2 font-display text-3xl">Environnement de travail</h2>

          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {toolsData.map((tool, index) => (
              <li key={stackNames[index] || index} className="chip flex items-center gap-3 rounded-xl p-3">
                <Image src={tool} alt={stackNames[index] || "Outil"} className="h-6 w-6 object-contain" />
                <span className="text-sm font-medium">{stackNames[index] || "Tool"}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-[#d2c8b8] bg-white/72 p-4 text-sm text-[color:var(--muted)]">
            Soft skills: esprit d'equipe, sens de l'analyse, gestion du temps, autonomie, prise d'initiative.
          </div>
        </motion.article>
      </section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={sectionTransition}
        className="section-anchor mx-auto w-[min(1120px,92%)] pb-24 pt-14"
      >
        <div className="contact-surface px-6 py-12 sm:px-10 sm:py-14">
          <div className="relative z-10 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">Contact</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Construisons quelque chose d&apos;<span className="text-gradient">intelligent</span>
            </h2>
            <p className="mt-4 text-sm text-[color:var(--muted)] sm:text-base [text-wrap:pretty]">
              Data Scientist & AI Engineer, je recherche une alternance 2026/2027 et je suis ouvert aux offres d&apos;emploi, missions freelance,
              collaborations et questions autour de l&apos;IA, du ML, des LLMs et des projets data.
            </p>
          </div>

          <div className="relative z-10 mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="contact-card rounded-[2.25rem] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-alt)]">Accès rapide</p>
              <h3 className="mt-2 font-display text-2xl">CV, email & réseaux</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                Pour aller vite : téléchargez mon CV, copiez mon email, ou contactez-moi via LinkedIn/GitHub (alternance, emploi, freelance,
                collaboration).
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/Resume_Badr_Benabdellah.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,153,141,0.35)] bg-[rgba(15,153,141,0.08)] px-5 py-2 text-sm font-semibold transition hover:bg-[rgba(15,153,141,0.12)]"
                >
                  Télécharger CV
                  <DownloadIcon className="h-4 w-4" />
                </a>

                <a
                  href="#top"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(126,134,156,0.32)] bg-white/70 px-5 py-2 text-sm font-semibold text-[color:var(--muted)] transition hover:bg-white"
                >
                  Retour en haut
                  <ArrowUpIcon className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://www.linkedin.com/in/badr-benabdellah/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-tile"
                >
                  <span className="contact-tile-icon">
                    <LinkedInIcon className="h-5 w-5" />
                  </span>
                  <div className="contact-tile-body">
                    <p className="contact-tile-title">LinkedIn</p>
                    <p className="contact-tile-subtitle truncate">linkedin.com/in/badr-benabdellah</p>
                  </div>
                  <ExternalLinkIcon className="contact-tile-action" />
                </a>

                <a
                  href="https://github.com/badrbenabdellah"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-tile"
                >
                  <span className="contact-tile-icon">
                    <GitHubIcon className="h-5 w-5" />
                  </span>
                  <div className="contact-tile-body">
                    <p className="contact-tile-title">GitHub</p>
                    <p className="contact-tile-subtitle truncate">github.com/badrbenabdellah</p>
                  </div>
                  <ExternalLinkIcon className="contact-tile-action" />
                </a>

                <div className="contact-tile">
                  <span className="contact-tile-icon">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div className="contact-tile-body">
                    <p className="contact-tile-title">Email</p>
                    <p className="contact-tile-subtitle truncate">{contactEmail}</p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="contact-copy-btn"
                  >
                    {isEmailCopied ? "Copié" : "Copier"}
                    <CopyIcon className="h-4 w-4" />
                  </button>
                </div>

                <a
                  href={`tel:${contactPhone}`}
                  className="contact-tile"
                >
                  <span className="contact-tile-icon">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div className="contact-tile-body">
                    <p className="contact-tile-title">Téléphone</p>
                    <p className="contact-tile-subtitle truncate">{contactPhone}</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 rounded-3xl border border-[rgba(126,134,156,0.22)] bg-white/65 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">Idéal pour</p>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    Alternance / offre d&apos;emploi Data Scientist ou AI Engineer (2026/2027).
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--accent-alt)]" />
                    Freelance data/IA : pipelines, dashboards, RAG/LLMs et intégration applicative.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    Collaboration technique : stack, architecture, livrables et déploiement (MLOps).
                  </li>
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Data Science", "Machine Learning", "LLMs / RAG", "MLOps"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-[rgba(126,134,156,0.28)] bg-white/70 px-3 py-1.5 text-xs font-semibold text-[color:var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="contact-card rounded-[2.25rem] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-alt)]">Message</p>
              <h3 className="mt-2 font-display text-2xl">Dites-moi ce que vous voulez construire</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                Sélectionnez un sujet (emploi, freelance, alternance, etc.), puis décrivez le contexte. Je reviens vers vous rapidement.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Alternance", "Offre d'emploi", "Freelance", "Collaboration", "Question"].map((topic) => {
                  const isActive = contactTopic === topic;

                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setContactTopic(topic)}
                      className={[
                        "contact-chip rounded-full px-4 py-2 text-xs font-semibold",
                        isActive ? "contact-chip-active" : null,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <input type="hidden" name="topic" value={contactTopic} />

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">Nom</span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Votre nom"
                      className="w-full rounded-2xl border border-[rgba(126,134,156,0.32)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--accent-alt)] focus:ring-2 focus:ring-[rgba(15,153,141,0.18)]"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="vous@email.com"
                      className="w-full rounded-2xl border border-[rgba(126,134,156,0.32)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--accent-alt)] focus:ring-2 focus:ring-[rgba(15,153,141,0.18)]"
                    />
                  </label>
                </div>

                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                    Organisation (optionnel)
                  </span>
                  <input
                    type="text"
                    name="organisation"
                    placeholder="Entreprise / école / équipe"
                    className="w-full rounded-2xl border border-[rgba(126,134,156,0.32)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--accent-alt)] focus:ring-2 focus:ring-[rgba(15,153,141,0.18)]"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">Message</span>
                  <textarea
                    rows="6"
                    name="message"
                    required
                    placeholder="Décrivez votre besoin, le contexte, et ce que vous attendez (objectif, délai, contraintes)..."
                    className="w-full resize-none rounded-2xl border border-[rgba(126,134,156,0.32)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--accent-alt)] focus:ring-2 focus:ring-[rgba(15,153,141,0.18)]"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSending}
                  className="primary-btn inline-flex w-fit items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? "Envoi..." : "Envoyer le message"}
                  <PaperPlaneIcon className="h-4 w-4" />
                </button>

                {result ? <p className="text-sm text-[color:var(--muted)]">{result}</p> : null}
              </form>
            </article>
          </div>
        </div>
      </motion.section>

      <footer className="pb-10 pt-6">
        <div className="mx-auto w-[min(1120px,92%)]">
          <div className="footer-pill flex flex-wrap items-center justify-between gap-5 px-6 py-5 sm:px-7 sm:py-6">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                Badr Benabdellah <span className="ml-2 text-[color:var(--accent-alt)]">Portfolio</span>
              </p>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                Ingénieur IA • Alternance 2026/2027 — ouvert aux opportunités IA / Data / BI.
              </p>
              <p className="mt-2 text-xs text-[color:var(--muted)]">{`(c) ${currentYear} Badr Benabdellah. Tous droits reserves.`}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/Resume_Badr_Benabdellah.pdf"
                download
                className="primary-btn inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold"
              >
                CV
                <DownloadIcon className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/badr-benabdellah/"
                target="_blank"
                rel="noreferrer"
                className="footer-icon grid h-10 w-10 place-items-center rounded-full text-[color:var(--ink)]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/badrbenabdellah"
                target="_blank"
                rel="noreferrer"
                className="footer-icon grid h-10 w-10 place-items-center rounded-full text-[color:var(--ink)]"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="footer-icon grid h-10 w-10 place-items-center rounded-full text-[color:var(--ink)]"
                aria-label="Email"
              >
                <MailIcon className="h-5 w-5" />
              </a>
              <a
                href="#top"
                className="footer-icon grid h-10 w-10 place-items-center rounded-full text-[color:var(--ink)]"
                aria-label="Retour en haut"
              >
                <ArrowUpIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
