import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  Briefcase, 
  Award, 
  Calendar,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_DATA, type Project, type Experience, type Certification } from '../data/portfolio';
import { GetInTouch } from './GetInTouch';
import { GithubIcon } from './Icons';

/* ---- Curated homepage selections ---- */
const FEATURED_PROJECT_IDS = ['predictive-text-generator', 'bazaarflow-luxe'];
const FEATURED_EXPERIENCE_IDS = ['aicte-eduskills-intern', 'cognifyz-web-intern'];
const FEATURED_CERT_IDS = ['deep-learning-specialization', 'aws-cloud-solutions-architect'];

const featuredProjects: Project[] = PORTFOLIO_DATA.projects.filter(p => FEATURED_PROJECT_IDS.includes(p.id));
const featuredExperiences: Experience[] = PORTFOLIO_DATA.experiences.filter(e => FEATURED_EXPERIENCE_IDS.includes(e.id));
const featuredCerts: Certification[] = PORTFOLIO_DATA.certifications.filter(c => FEATURED_CERT_IDS.includes(c.id));

export const Hero: React.FC = () => {
  return (
    <>
      {/* SECTION 01 — HERO (Two-Column Editorial with Intro Animation) */}
      <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Introduction & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2 hero-reveal hero-reveal-1">
                <p className="eyebrow text-[var(--accent)] font-semibold tracking-wider">
                  AI & MACHINE LEARNING ENGINEER · FULL-STACK DEVELOPER
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]">
                  {PORTFOLIO_DATA.personal.name}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl font-normal hero-reveal hero-reveal-2">
                {PORTFOLIO_DATA.personal.shortBio}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3 hero-reveal hero-reveal-3">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-page)] rounded font-medium text-xs font-mono uppercase hover:opacity-90 transition-opacity"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent)] rounded font-medium text-xs font-mono uppercase transition-colors"
                >
                  <span>About Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] pl-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Real Profile Photograph */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end hero-reveal hero-reveal-4">
              <div className="w-64 sm:w-72 aspect-[4/5] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-sm hero-avatar">
                <img
                  src={PORTFOLIO_DATA.personal.avatarUrl}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-center grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 02 — ANIMATED SKILLS TICKER */}
      <section className="py-6 border-b border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden">
        <div className="ticker-track flex items-center gap-8">
          {[...PORTFOLIO_DATA.skillsTicker, ...PORTFOLIO_DATA.skillsTicker].map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="flex items-center gap-4 shrink-0 text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 03 — NUMBERED INDEX DIRECTORY */}
      <section className="py-20 md:py-28 border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
          
          <div className="flex items-end justify-between pb-6 border-b border-[var(--border-subtle)]">
            <div>
              <p className="eyebrow text-[var(--accent)] mb-1">DIRECTORY</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Portfolio Index
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:block">04 SECTIONS</span>
          </div>

          <div className="divide-y divide-[var(--border-color)] border-y border-[var(--border-color)]">
            
            <Link
              to="/about"
              className="group py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[var(--bg-surface)] px-4 rounded transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-[var(--accent)] font-semibold">01</span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    Introduction / About
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Background, academic milestones, technical stack, and resume.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--text-primary)]">
                <span>View About</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" />
              </div>
            </Link>

            <Link
              to="/work"
              className="group py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[var(--bg-surface)] px-4 rounded transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-[var(--accent)] font-semibold">02</span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    Selected Work
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Production systems, ML pipelines, and full-stack platforms.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--text-primary)]">
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
              </div>
            </Link>

            <Link
              to="/experience"
              className="group py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[var(--bg-surface)] px-4 rounded transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-[var(--accent)] font-semibold">03</span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    Experience
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Virtual internships at AICTE, Cognifyz, CodersCave, and SkillVertex.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--text-primary)]">
                <span>View Experience</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" />
              </div>
            </Link>

            <Link
              to="/certifications"
              className="group py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[var(--bg-surface)] px-4 rounded transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-[var(--accent)] font-semibold">04</span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    Credentials
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Verified registry of 39 professional certifications & courses.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--text-primary)]">
                <span>View Credentials</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" />
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* SECTION 04 — EXPLORE: CURATED PREVIEWS */}
      <section id="explore" className="py-20 md:py-28 border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">

          {/* --- A. Selected Work (2 projects) --- */}
          <div className="space-y-8">
            <div className="flex items-end justify-between pb-4 border-b border-[var(--border-subtle)]">
              <div>
                <p className="eyebrow text-[var(--accent)] mb-1">SELECTED WORK</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Featured Projects
                </h2>
              </div>
              <Link
                to="/work"
                className="text-xs font-mono font-semibold text-[var(--accent)] hover:underline hidden sm:flex items-center gap-1"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden hover:border-[var(--accent)] transition-all duration-300 flex flex-col"
                >
                  {/* Project Image */}
                  {project.image && (
                    <Link to={`/project/${project.id}`} className="block overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        loading="eager"
                      />
                    </Link>
                  )}

                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono text-[var(--accent)] font-semibold uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-[var(--text-primary)] leading-snug">
                        <Link to={`/project/${project.id}`} className="hover:text-[var(--accent)] transition-colors">
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                        {project.description || project.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-secondary)] font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                            aria-label={`Live demo of ${project.title}`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="sm:hidden text-center">
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--accent)] hover:underline"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* --- B. Professional Experience (2 entries) --- */}
          <div className="space-y-8">
            <div className="flex items-end justify-between pb-4 border-b border-[var(--border-subtle)]">
              <div>
                <p className="eyebrow text-[var(--accent)] mb-1">EXPERIENCE</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Professional Work
                </h2>
              </div>
              <Link
                to="/experience"
                className="text-xs font-mono font-semibold text-[var(--accent)] hover:underline hidden sm:flex items-center gap-1"
              >
                <span>View All Experience</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {featuredExperiences.map((exp) => (
                <Link
                  key={exp.id}
                  to={`/experience/${exp.id}`}
                  className="group block p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[var(--accent)]" />
                        <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {exp.company}
                      </p>
                      <p className="text-xs text-[var(--text-muted)] line-clamp-2 max-w-lg">
                        {exp.summary}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)] shrink-0">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="sm:hidden text-center">
              <Link
                to="/experience"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--accent)] hover:underline"
              >
                <span>View All Experience</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* --- C. Certifications (3 entries) --- */}
          <div className="space-y-8">
            <div className="flex items-end justify-between pb-4 border-b border-[var(--border-subtle)]">
              <div>
                <p className="eyebrow text-[var(--accent)] mb-1">CREDENTIALS</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Selected Certifications
                </h2>
              </div>
              <Link
                to="/certifications"
                className="text-xs font-mono font-semibold text-[var(--accent)] hover:underline hidden sm:flex items-center gap-1"
              >
                <span>View All 39 Credentials</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredCerts.map((cert) => (
                <Link
                  key={cert.id}
                  to={`/certification/${cert.id}`}
                  className="group p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-colors flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Award className="w-4 h-4 text-[var(--accent)]" />
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">{cert.issued}</span>
                    </div>
                    <h4 className="text-base font-bold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent)] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)]">{cert.issuer}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-secondary)] font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <div className="sm:hidden text-center">
              <Link
                to="/certifications"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--accent)] hover:underline"
              >
                <span>View All 39 Credentials</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Get In Touch */}
      <GetInTouch />
    </>
  );
};
