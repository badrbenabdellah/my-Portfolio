"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { assets, toolsData } from "@/assets/assets";

const navItems = [
  { label: "Profil", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Parcours", href: "#education" },
  { label: "Activites", href: "#activities" },
  { label: "Projets IA", href: "#projects" },
  { label: "Competences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const proofPoints = [
  { value: "Stage Alternance 2027", label: "Objectif: Data Scientist & Ingenieur IA" },
  { value: "3 stages", label: "Expérience en Data Scientist & IA Engineering" },
  { value: "Fr C1 - En B2 - Ar C1", label: "Communication professionnelle multilingue" },
];

const alternanceSignals = [
  "À la recherche d'un Alternance - Data Scientist & ingénieur IA",
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
    title: "1er prix - Hackathon #1",
    period: "Date a preciser",
    description:
      "Conception d'une solution innovante en equipe, du cadrage du probleme a la demonstration finale devant le jury.",
    highlight: "Victoire 1/3",
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
    period: "Mandat a preciser",
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

export default function Home() {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);
  const currentYear = new Date().getFullYear();

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
              <p className="mt-1 text-sm font-semibold">Stage PFE Ingenieur IA / Data</p>
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
          {extracurricularActivities.map((activity) => (
            <motion.article key={activity.title} variants={itemVariants} className="glass-card rounded-3xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                {activity.category}
              </p>
              <h3 className="mt-2 font-display text-2xl leading-tight">{activity.title}</h3>
              <p className="mt-1 text-sm font-semibold text-[color:var(--muted)]">{activity.period}</p>
              <p className="mt-4 text-sm text-[color:var(--muted)]">{activity.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                {activity.highlight}
              </p>
            </motion.article>
          ))}
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
        className="section-anchor mx-auto grid w-[min(1120px,92%)] gap-8 pb-20 pt-14 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <article className="glass-card rounded-3xl p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Contact direct</p>
          <h2 className="mt-2 font-display text-3xl">Parlons de votre sujet PFE</h2>
          <p className="mt-4 text-sm text-[color:var(--muted)]">
            Je suis disponible pour un premier echange sur votre sujet de stage PFE, vos enjeux
            techniques et la valeur que je peux apporter a votre equipe.
          </p>

          <div className="mt-6 rounded-2xl border border-[#d2c8b8] bg-white/70 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">Email</p>
            <p className="mt-1 text-base font-semibold">benabdellahbadr3@gmail.com</p>
            <p className="mt-1 text-sm text-[color:var(--muted)]">Tel: 0634562555</p>
          </div>

          <ul className="mt-5 space-y-3">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-[#d2c8b8] bg-white/70 px-4 py-3 transition hover:bg-white"
                >
                  <span className="text-sm font-semibold">{link.label}</span>
                  <span className="text-xs text-[color:var(--muted)]">{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="glass-card rounded-3xl p-7">
          <h3 className="font-display text-3xl">Envoyer un message</h3>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Decrivez votre sujet ou votre offre de stage PFE IA/Data.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Votre nom"
                className="rounded-xl border border-[#c8bdab] bg-white/85 p-3 text-sm outline-none transition focus:border-[#0f766e]"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Votre email"
                className="rounded-xl border border-[#c8bdab] bg-white/85 p-3 text-sm outline-none transition focus:border-[#0f766e]"
              />
            </div>

            <textarea
              rows="6"
              name="message"
              required
              placeholder="Votre message"
              className="w-full rounded-xl border border-[#c8bdab] bg-white/85 p-3 text-sm outline-none transition focus:border-[#0f766e]"
            />

            <button
              type="submit"
              disabled={isSending}
              className="primary-btn rounded-full px-7 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Envoi..." : "Envoyer votre offre de stage PFE"}
            </button>

            {result ? <p className="text-sm text-[color:var(--muted)]">{result}</p> : null}
          </form>
        </article>
      </motion.section>

      <footer className="border-t border-[#cec3b2] py-6">
        <div className="mx-auto flex w-[min(1120px,92%)] flex-wrap items-center justify-between gap-3 text-sm text-[color:var(--muted)]">
          <p>{`(c) ${currentYear} Badr Benabdellah. Tous droits reserves.`}</p>
          <div className="flex gap-4">
            <a href="/Resume_Badr_Benabdellah.pdf" download className="transition hover:text-[color:var(--ink)]">
              CV PDF
            </a>
            <a href="#top" className="transition hover:text-[color:var(--ink)]">
              Retour en haut
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
