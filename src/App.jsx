import React, { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, ExternalLink, Github, Mail, MapPin, Menu, X } from 'lucide-react';
import portrait from './assets/portrait.jpg';
import homegrowns from './assets/homegrowns.png';

const email = 'selwynjosh.dumangon-22@cpu.edu.ph';
const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
const skills = [
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'React', category: 'Learning / frontend' },
  { name: 'Supabase', category: 'Backend / database' },
  { name: 'SQL', category: 'Database' },
  { name: 'Git & GitHub', category: 'Tools' },
  { name: 'Figma', category: 'Design' },
];

function SectionLabel({ number, children }) {
  return <span className="section-label"><span>{number}</span> / {children}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#home" aria-label="Selwyn, return to top">selwyn<span>.</span></a>
        <nav className="nav-desktop" aria-label="Main navigation">
          {navigation.map(item => <a href={item.href} key={item.name}>{item.name}</a>)}
        </nav>
        <a className="nav-contact" href={`mailto:${email}`}>Let's talk <ArrowUpRight size={16} /></a>
        <button className="mobile-menu-button" onClick={() => setOpen(value => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && <nav id="mobile-nav" className="nav-mobile" aria-label="Mobile navigation">
        {navigation.map(item => <a href={item.href} key={item.name} onClick={() => setOpen(false)}>{item.name}<ArrowUpRight size={17} /></a>)}
      </nav>}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="availability"><span className="availability-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
        <p className="hero-kicker">Hello there, I'm</p>
        <h1>Selwyn Josh<br /><span>Dumangon.</span></h1>
        <p className="hero-role">Aspiring Web Developer <span className="role-divider">/</span> BSIT Student</p>
        <p className="hero-description">I enjoy building thoughtful digital experiences — combining clean design with code to solve real-world problems.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
          <a className="button button-light" href="#contact">Get in touch <ArrowRight size={18} /></a>
        </div>
        <div className="hero-location"><MapPin size={16} /> Based in Iloilo, Philippines</div>
      </div>
      <div className="hero-visual">
        <div className="photo-backdrop" />
        <img src={portrait} alt="Professional portrait of Selwyn Josh Dumangon" className="profile-photo" />
        <div className="photo-note"><span className="note-mark">✳</span><span>Curious mind.<br />Creative builder.</span></div>
        <div className="image-corner">PORTFOLIO / 2026</div>
      </div>
      <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <ArrowDownRight size={18} /></a>
    </section>
  );
}

function About() {
  return (
    <section className="section section-bordered" id="about">
      <div className="container about-grid">
        <div><h2>Passionate about<br /><em>what's possible.</em></h2></div>
        <div className="about-description">
          <p>I'm a Bachelor of Science in Information Technology student with a growing passion for web development and interface design.</p>
          <p>I love the process of turning an idea into something people can actually use — from planning a user-friendly layout to building the functionality behind it.</p>
          <div className="about-facts"><div><span>FIELD</span><strong>Information Technology</strong></div><div><span>INTERESTS</span><strong>Web Development & UI Design</strong></div><div><span>LOCATION</span><strong>Iloilo, Philippines</strong></div></div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading"><div><h2>Skills & <em>technologies.</em></h2></div><p>Tools I use and continue to learn as I develop my craft.</p></div>
        <div className="skills-grid">{skills.map((skill, index) => <div className="skill-card" key={skill.name}><span className="skill-index">{String(index + 1).padStart(2, '0')}</span><Code2 size={23} strokeWidth={1.6} aria-hidden="true" /><strong>{skill.name}</strong><span className="skill-type">{skill.category}</span></div>)}</div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section project-section" id="projects">
      <div className="container">
        <div className="section-heading"><div><h2>Featured <em>project.</em></h2></div><p>One of the projects I've helped bring from concept to implementation.</p></div>
        <article className="project-card">
          <div className="project-image-wrap"><img src={homegrowns} alt="Screenshot of The Homegrowns Café website, with its home page and navigation" className="project-image" /><span className="image-chip">WEB APPLICATION</span></div>
          <div className="project-content"><h3>The Homegrowns<br />Café</h3><p>A website designed to help a local café manage event booking inquiries, merchandise reservations, and community updates — with a dedicated admin dashboard.</p><div className="project-highlights"><div><Check size={16} /> Event booking inquiries</div><div><Check size={16} /> Merchandise reservations</div><div><Check size={16} /> Newsfeed and admin management</div></div><div className="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Supabase</span></div><a
  href="https://testinghomegrowns-b70g1wkj7-steven-seagalls-projects.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-footer"
  aria-label="View The Homegrowns Café live website"
>
  <span>VIEW LIVE WEBSITE</span>
  <ExternalLink size={19} aria-hidden="true" />
</a></div>
        </article>
        <p className="project-note">More projects will be added as I continue building and learning.</p>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopied(true); window.setTimeout(() => setCopied(false), 2000); }
    catch { window.location.href = `mailto:${email}`; }
  }
  return (
    <section className="contact-section" id="contact"><div className="container contact-wrap"><div><h2>Let's make<br /><em>something great.</em></h2><p>Have an opportunity, a question, or simply want to connect? My inbox is open.</p><div className="contact-buttons"><a className="button button-white" href={`mailto:${email}`}>Send me an email <ArrowUpRight size={19} /></a><button className="button button-outline" onClick={copyEmail}>{copied ? <><Check size={17} /> Copied!</> : <><Mail size={17} /> Copy email</>}</button></div></div><div className="contact-side"><div className="contact-orbit"><span>LET'S CONNECT</span><ArrowUpRight size={48} strokeWidth={1} /></div><a href={`mailto:${email}`} className="contact-email">{email}</a><p>Iloilo City, Philippines</p></div></div></section>
  );
}

function Footer() { return <footer className="footer"><div className="container footer-content"><a href="#home" className="brand footer-logo">selwyn<span>.</span></a><p>Designed & developed with intention.</p><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} Selwyn Josh Dumangon</span></div></footer>; }

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
