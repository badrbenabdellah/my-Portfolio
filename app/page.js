"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { assets, toolsData } from "@/assets/assets";

const navItems = [
  { label: "Profil", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Projets IA", href: "#projects" },
  { label: "Competences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const proofPoints = [
  { value: "2023-2026", label: "Cycle ingenieur Logiciels & Systemes Intelligents" },
  { value: "2 stages", label: "Experience professionnelle en software et IA" },
  { value: "FR C1 | EN B2 | AR C1", label: "Communication multilingue" },
];

const focusAreas = [
  {
    title: "AI Engineering",
    description:
      "Fine-tuning, LLMs, Transformers, PyTorch et agents IA pour des cas d'usage operationnels.",
  },
  {
    title: "Data Science",
    description:
      "Conception de modeles ML interpretable et evaluables avec Scikit-learn, Pandas, Numpy et metriques claires.",
  },
  {
    title: "Deployment & Product",
    description:
      "Integration des modeles via API REST/GraphQL, travail agile, architecture microservices et vision produit.",
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
    period: "Juillet 2025 - Septembre 2025",
    role: "Stagiaire IA Engineering",
    company: "Dinomite Studios",
    points: [
      "Implementation de solutions LLM (Hugging Face) pour la generation adaptee de QCM et questions ouvertes.",
      "Conception d'agents IA pour correction grammaticale, orthographique et analyse de coherence semantique.",
      "Travail avec PyTorch, peft, PostgreSQL et workflow agile pour livrer un feedback en temps reel.",
    ],
  },
  {
    period: "Avril 2023 - Juillet 2023",
    role: "Stagiaire Ingenieur Logiciel",
    company: "Smart Automation Technologies",
    points: [
      "Developpement complet d'une application web publique en stack MEAN (MongoDB, Express, Angular, Node.js).",
      "Modelisation UML (cas d'usage, classes, sequences) et structuration d'architecture pour un delivery robuste.",
      "Collaboration en equipe agile avec suivi des besoins et iteration continue.",
    ],
  },
];

const projectHighlights = [
  {
    title: "Invest Buddy",
    subtitle: "Microservices + ML financier",
    image: "/InvestBuddy.png",
    details:
      "Modele Scikit-learn pour l'evaluation du risque de credit et la prediction de tendances financieres, expose via API REST.",
    stack: "Spring Boot, Angular, MySQL, Pandas, Numpy, Scikit-learn",
  },
  {
    title: "Recolorisation d'Images",
    subtitle: "Deep Learning - Computer Vision",
    image: "/work-2.png",
    details:
      "Architecture U-Net encoder-decoder pour colorisation automatique d'images N&B en espace LAB avec skip connections.",
    stack: "Python, TensorFlow, Keras, CNN, U-Net, PSNR/SSIM/MAE",
  },
  {
    title: "AI Assessment Assistant",
    subtitle: "LLMs + Fine-tuning",
    image: "/work-4.png",
    details:
      "Generation dynamique de contenu pedagogique et feedback intelligent en temps reel adapte au niveau de l'etudiant.",
    stack: "Transformers, PyTorch, PEFT, PostgreSQL, Hugging Face",
  },
  {
    title: "Public Service Platform",
    subtitle: "Full Stack Engineering",
    image: "/Fjobs.png",
    details:
      "Application full-stack construite de bout en bout avec modelisation UML, architecture claire et fonctionnalites metier.",
    stack: "MongoDB, Express.js, Angular, Node.js, Agile",
  },
];

const competencyGroups = [
  {
    title: "Langages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "C/C++", "Node.js", ".NET"],
  },
  {
    title: "Frameworks",
    items: ["Spring Boot", "Spring Cloud", "Spring Security", "Angular", "JEE", "Express.js"],
  },
  {
    title: "Data & AI",
    items: ["Scikit-learn", "PyTorch", "Transformers", "Fine-tuning", "Pandas", "Numpy", "MLOps"],
  },
  {
    title: "Databases & Cloud",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Redis", "Snowflake", "AWS"],
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
    <main id="top" className="portfolio-shell min-h-screen text-[color:var(--ink)]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-[#f4c275]/45 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#0f766e]/20 blur-3xl" />
        <div className="absolute bottom-12 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#fef3db]/60 blur-3xl" />
      </div>

      <header className="fixed top-4 z-40 w-full">
        <div className="mx-auto flex w-[min(1120px,92%)] items-center justify-between rounded-full px-5 py-3 glass-card">
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
            Recherche d'alternance - AI Engineer / Data Scientist Junior
          </span>

          <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Etudiant ingenieur en IA
            <br />
            orienté AI Engineering & Data Science
          </h1>

          <p className="mt-6 max-w-2xl text-base text-[color:var(--muted)] sm:text-lg">
            En derniere annee du cycle ingenieur Logiciels et Systemes Intelligents, je recherche une
            alternance pour contribuer sur des produits IA concrets: modeles, data pipelines, APIs et
            industrialisation.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full px-7 py-3 text-sm font-semibold primary-btn">
              Planifier un echange
            </a>
            <a
              href="/Resume_Badr_Benabdellah.pdf"
              download
              className="secondary-btn rounded-full px-7 py-3 text-sm font-semibold"
            >
              CV (version portfolio)
            </a>
          </div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {proofPoints.map((point) => (
              <motion.article key={point.label} variants={itemVariants} className="glass-card rounded-2xl p-4">
                <p className="font-display text-2xl">{point.value}</p>
                <p className="mt-1 text-sm text-[color:var(--muted)]">{point.label}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...sectionTransition, delay: 0.15 }}
          className="glass-card rounded-[2rem] p-7"
        >
          <div className="relative mx-auto h-72 w-64 overflow-hidden border border-white/75 [border-radius:42%_58%_52%_48%/48%_44%_56%_52%]">
            <Image src={assets.profile_img} alt="Portrait de Badr Benabdellah" fill priority className="object-cover" />
          </div>

          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-[#d2c8b8] bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">Cible</p>
              <p className="mt-1 text-sm font-semibold">Alternance AI Engineer / Junior Data Scientist</p>
            </div>
            <div className="rounded-2xl border border-[#d2c8b8] bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">Contact rapide</p>
              <p className="mt-1 text-sm font-semibold">benabdellahbadr3@gmail.com | 0634562555</p>
            </div>
          </div>
        </motion.aside>
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
            <h2 className="mt-3 font-display text-3xl">Profil cible alternance IA</h2>
            <p className="mt-4 text-[color:var(--muted)]">
              Je combine base solide en genie logiciel et specialisation IA/Data pour contribuer sur des
              cas d'usage applicatifs: NLP, Computer Vision, predictive analytics et integration produit.
            </p>
            <div className="mt-5 rounded-2xl border border-[#d2c8b8] bg-white/70 p-4 text-sm text-[color:var(--muted)]">
              Formation: Cycle d'ingenierie Logiciels et Systemes Intelligents (FST Tanger), 2023-2026.
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
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Experience professionnelle</h2>
          </div>
        </div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5"
        >
          {experienceTimeline.map((item) => (
            <motion.article key={item.role} variants={itemVariants} className="glass-card rounded-3xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{item.period}</p>
                  <h3 className="mt-2 font-display text-2xl">{item.role}</h3>
                  <p className="text-sm font-semibold text-[color:var(--muted)]">{item.company}</p>
                </div>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-[color:var(--muted)]">
                {item.points.map((point) => (
                  <li key={point} className="rounded-xl border border-[#d6ccbd] bg-white/65 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <section id="projects" className="section-anchor mx-auto w-[min(1120px,92%)] py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Portfolio</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Projets IA & Data pertinents</h2>
          </div>
          <a
            href="https://github.com/badrbenabdellah"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn rounded-full px-6 py-2 text-sm font-semibold"
          >
            Voir mon GitHub
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
          <h2 className="mt-2 font-display text-3xl">Socle technique IA & Data</h2>

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
            Soft skills: esprit d'equipe, communication claire, gestion du temps, autonomie, curiosite technique.
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
          <h2 className="mt-2 font-display text-3xl">Parlons de votre alternance</h2>
          <p className="mt-4 text-sm text-[color:var(--muted)]">
            Je suis disponible pour un premier echange sur vos besoins, vos enjeux techniques et la
            valeur que je peux apporter rapidement a votre equipe.
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
            Decrivez votre offre d'alternance IA/Data et votre contexte technique.
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
              {isSending ? "Envoi..." : "Envoyer ma candidature alternance"}
            </button>

            {result ? <p className="text-sm text-[color:var(--muted)]">{result}</p> : null}
          </form>
        </article>
      </motion.section>

      <footer className="border-t border-[#cec3b2] py-6">
        <div className="mx-auto flex w-[min(1120px,92%)] flex-wrap items-center justify-between gap-3 text-sm text-[color:var(--muted)]">
          <p>{`© ${currentYear} Badr Benabdellah. Tous droits reserves.`}</p>
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
