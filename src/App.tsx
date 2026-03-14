import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  FileCode2,
  Palette,
  Code,
  Server,
  Blocks,
  Database,
  Smartphone,
  Github,
  Linkedin,
  Mail,
  Download,
  Send,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Briefcase,
  Users,
  Mic,
  Lightbulb,
  MessageSquare,
  Clock,
  Calendar,
  GraduationCap,
  ChevronDown,
  Instagram,
} from "lucide-react";

// --- DATA ---
const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
// Certificates Data
const CERTIFICATES = [
  {
    title: "Deep Dive into VS Code for Aspiring Developers",
    issuer: "VS Code Bootcamp by Numan",
    year: "2025",
    description:
      "Completed the final challenge of the program and improved my skills in using VS Code for programming.",
    image: "sertif.jpg",
    link: "https://drive.google.com/file/d/1s-GQyh294LDdnTA_hq1MHTvNVmu_jJaI/view?usp=sharing",
  },
  {
    title: "Mini Computer Science Batch #1",
    issuer: "Mini Computer Science Course by Pintar Pilih Kuliah",
    year: "2025",
    description:
      "Completed several projects and quizzes in each session while learning programming fundamentals and basic algorithms.",
    image: "sertifminics.jpg",
    link: "https://drive.google.com/file/d/1E_69vQmwz6My5Ke_1idCxTZxGF_Off4z/view?usp=sharing",
  },
  {
    title: "Web Development Fundamentals (HTML, CSS, JS)",
    issuer: "SkillPedia",
    year: "2025",
    description:
      "Learned the basics of building websites using HTML, CSS, and JavaScript and passed the final exam with an A grade.",
    image: "SkillPedia1.png",
    link: "https://drive.google.com/file/d/1LvOLr_3ucnWQE4CYbesO-SVvZokxvtAZ/view?usp=sharing",
  },
];
// Certificates Section
const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="mb-16 md:flex justify-between items-end">
        <div>
          <h2 className="text-sm font-mono text-emerald-400 tracking-wider uppercase mb-2">
            Achievements
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Certificates & Awards
          </h3>
        </div>

        <a
          href="https://drive.google.com/file/d/1s-GQyh294LDdnTA_hq1MHTvNVmu_jJaI/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          See More <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-white/20 transition-colors"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-bold text-white mb-2">
                {cert.title}
              </h4>
              <div className="text-emerald-400 font-medium mb-1">
                {cert.issuer}
              </div>
              <div className="text-zinc-400 font-mono text-sm mb-3">
                {cert.year}
              </div>
              <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                {cert.description}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/5"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SKILLS = [
  {
    name: "HTML",
    icon: FileCode2,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  { name: "CSS", icon: Palette, color: "text-blue-500", bg: "bg-blue-500/10" },
  {
    name: "JavaScript",
    icon: Code,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    name: "PHP",
    icon: Server,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
  { name: "Laravel", icon: Blocks, color: "text-red-500", bg: "bg-red-500/10" },
  {
    name: "MySQL",
    icon: Database,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    name: "Flutter",
    icon: Smartphone,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
];

const OTHER_SKILLS = [
  {
    name: "Public Speaking",
    icon: Mic,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    name: "Team Leadership",
    icon: Users,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    name: "Project Management",
    icon: Briefcase,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    name: "Problem Solving",
    icon: Lightbulb,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    name: "Communication",
    icon: MessageSquare,
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    name: "Time Management",
    icon: Clock,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
];

const EXPERIENCES = [
  {
    role: "Participant",
    company: "Google Developer Group",
    period: "2024",
    description:
      "Participated in the AI Catalyst event by GDG Bogor. Learned about coding and AI from Google experts and practiced using Google AI Studio. The event gave me new insights into the real world of the IT industry.",
    image: "AIBuld.jpg",
  },
  {
    role: "Programming Course Instructor",
    company: "Vs Code Course",
    period: "2026",
    description:
      "Introduced beginners to programming using VS Code and basic web technologies such as HTML, CSS, and JavaScript. Guided participants in writing simple code and completing a small mini project.",
    image: "courseRisha.jpeg",
  },
];

const EDUCATIONS = [
  {
    degree: "Bachelor of Applied Computer Science (Programming)",
    institution: "IDN Polytechnic",
    period: "2025 - Present",
    description:
      "Focused on practical programming and building real projects. Active in campus organizations, especially in the Technology Innovation division. Interested in participating in IT events and continuously improving my skills through hands-on projects.",
    image: "logoidn.png",
  },
  {
    degree: "High School Diploma (Islamic Studies)",
    institution: "MA As-Syifa Sagalaherang",
    period: "2022 - 2025",
    description:
      "Graduated as the best student in my school. Received the highest score in the boarding school final exam and was often chosen as an exemplary student. Completed several Qur'an memorization certifications and was active in school organizations and committees. During high school, I also started learning basic programming.",
    image: "logoAssyifa.png",
  },
];

const PROJECTS = [
  {
    title: "Prayer Times Website",
    description:
      "A web dashboard that shows real-time clock, daily prayer schedules, countdown to the next prayer time, and countdown to Ramadan.",
    image: "webprayer.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://web-prayer-times.vercel.app/",
  },
  {
    title: "RiChat App with Flutter",
    description:
      "A mobile chat application built with Flutter featuring chat, status, and call screens to simulate a modern messaging interface.",
    image: "2.png",
    tags: ["Flutter", "Dart"],
    link: "https://github.com/rishadzkia/project-mobile-app-simple-chat-risha-250458302062.git",
  },
  {
    title: "Website Mutabaah Tahfidz",
    description:
      "A web-based Mutabaah Tahfidz system developed for internal school use to monitor students' Qur'an memorization progress and help teachers record daily memorization activities.",
    image: "stek.png",
    tags: ["Laravel", "PHP", "MySQL"],
    link: "https://github.com/rishadzkia/project-mutabaah-tahfidz-internal-risha-250458302062.git",
  },
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold font-mono tracking-tighter text-white"
        >
          RAP<span className="text-emerald-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-12 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient-text">
              Risha
            </span>
            <br />
            Adzkia Putri.
          </h1>

          <h2 className="text-xl md:text-2xl text-zinc-400 font-light">
            Programming Student
          </h2>

          <p className="text-zinc-400 max-w-lg leading-relaxed">
            I am a programming student who loves building digital applications.
            I enjoy learning new skills and solving problems with simple and
            useful solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="relative px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-medium transition-colors flex items-center gap-2 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work{" "}
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/30"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 3,
                }}
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center md:justify-end mt-12 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-3xl"></div>
            <img
              src="risha_foto.jpeg"
              alt="Risha Adzkia Putri"
              className="relative z-10 w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />

            {/* Floating badges */}
            <div
              className="absolute top-10 -left-6 z-20 bg-zinc-900/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                <Code size={20} />
              </div>
              <div className="text-xs font-medium">Web Dev</div>
            </div>

            <div
              className="absolute bottom-10 -right-6 z-20 bg-zinc-900/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            >
              <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400">
                <Smartphone size={20} />
              </div>
              <div className="text-xs font-medium">Mobile Dev</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="order-2 md:order-1 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                My journey in programming started when I became curious about
                how websites and applications work. From that moment, I began
                learning step by step and practicing by building small projects.
              </p>
              <p>
                As a programming student, I enjoy creating useful digital
                applications, especially web and mobile projects. Some of my
                projects focus on solving real problems and helping people
                through simple technology.
              </p>
              <p>
                I believe programming is not only about writing code, but also
                about creating solutions. My goal is to keep improving my
                skills, build meaningful projects, and share my knowledge with
                others who want to learn programming.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-sm font-mono text-emerald-400 tracking-wider uppercase mb-2">
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Turning ideas into simple digital solutions.
          </h3>
          <p className="text-zinc-400 text-lg mb-8">
            I am a programming student who enjoys building web and mobile
            applications. I like turning ideas into simple and useful digital
            solutions. Through my projects, I continue learning new technologies
            and improving my skills step by step.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-sm text-zinc-500">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-zinc-500">
                Commitment to Learning
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-emerald-400 tracking-wider uppercase mb-2">
          Academic Journey
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Education Track
        </h3>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {EDUCATIONS.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 text-emerald-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
              <GraduationCap size={20} />
            </div>

            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-3xl bg-zinc-900 border border-white/10 hover:border-white/20 transition-colors flex flex-col gap-4">
              <div className="w-full h-40 rounded-xl overflow-hidden border border-white/10 bg-zinc-800">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <div className="text-zinc-400 font-mono text-sm flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full shrink-0">
                    <Calendar size={14} className="text-emerald-500" />
                    {edu.period}
                  </div>
                </div>
                <div className="text-emerald-400 font-medium mb-3">
                  {edu.institution}
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {edu.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 md:flex justify-between items-end">
        <div>
          <h2 className="text-sm font-mono text-emerald-400 tracking-wider uppercase mb-2">
            My Background
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Experience & Leadership
          </h3>
        </div>

        <a
          href="https://drive.google.com/drive/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          See More <ExternalLink size={16} />
        </a>
      </div>

      <div className="space-y-6">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-zinc-900 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-colors flex flex-col md:flex-row gap-6 md:gap-8 items-start"
          >
            <div className="w-full md:w-48 h-48 shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-zinc-800">
              <img
                src={exp.image}
                alt={exp.role}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex-grow w-full">
              <div className="md:flex justify-between items-start gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h4>
                  <div className="text-emerald-400 font-medium">
                    {exp.company}
                  </div>
                </div>
                <div className="mt-2 md:mt-0 text-zinc-400 font-mono text-sm flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">
                  <Calendar size={14} className="text-emerald-500" />
                  {exp.period}
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-mono text-emerald-400 tracking-wider uppercase mb-2">
          My Toolkit
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Skills & Expertise
        </h3>
      </div>

      <div className="mb-16">
        <h4 className="text-xl font-semibold text-white mb-8 flex items-center gap-3 justify-center md:justify-start">
          <Code className="text-emerald-500" /> Technical Skills
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className={`p-4 rounded-xl ${skill.bg} transition-transform group-hover:scale-110`}
              >
                <skill.icon
                  className={`w-8 h-8 ${skill.color}`}
                  strokeWidth={1.5}
                />
              </motion.div>
              <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-white mb-8 flex items-center gap-3 justify-center md:justify-start">
          <Users className="text-emerald-500" /> Professional & Soft Skills
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {OTHER_SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className={`p-4 rounded-xl ${skill.bg} transition-transform group-hover:scale-110`}
              >
                <skill.icon
                  className={`w-8 h-8 ${skill.color}`}
                  strokeWidth={1.5}
                />
              </motion.div>
              <span className="font-medium text-zinc-300 group-hover:text-white transition-colors text-center text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 md:flex justify-between items-end">
        <div>
          <h2 className="text-sm font-mono text-emerald-400 tracking-wider uppercase mb-2">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h3>
        </div>
        <a
          href="https://github.com/rishadzkia"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          View all on GitHub <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-white/20 transition-colors"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h4>
              <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 text-zinc-300 text-xs rounded-full border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/5"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <a
          href="https://github.com/rishadzkia"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          View all on GitHub <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Construct the mailto link with form data
    const subject = encodeURIComponent(
      `New Message from ${name} via Portfolio`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    // Open the user's default email client
    window.location.href = `mailto:rishaadzkiaputri@gmail.com?subject=${subject}&body=${body}`;

    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12"
      >
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-mono text-emerald-400 tracking-wider uppercase mb-2">
              Get In Touch
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's build something together.
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              I'm currently looking for new opportunities and collaborations.
              Whether you have a question, a project idea, or just want to say
              hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a
                href="https://www.instagram.com/adzkiarisha/"
                className="flex items-center gap-4 text-zinc-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                  <Instagram size={20} />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-1">Instagram</div>
                  <div className="font-medium">@adzkiarisha</div>
                </div>
              </a>

              <a
                href="https://github.com/rishadzkia"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-1">GitHub</div>
                  <div className="font-medium">github.com/rishadzkia</div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-zinc-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-1">LinkedIn</div>
                  <div className="font-medium">linkedin.com/in/rishaadzkia</div>
                </div>
              </a>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                placeholder="Risha Adzkia"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                placeholder="risha@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold transition-colors flex items-center justify-center gap-2 mt-4"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/10 mt-12">
      <p className="text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} Risha Adzkia Putri. All rights
        reserved.
      </p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/5 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/5 blur-[120px]"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Certificates />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
