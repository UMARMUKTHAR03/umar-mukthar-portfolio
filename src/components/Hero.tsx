import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  FolderGit2, 
  Briefcase, 
  Award, 
  Send
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Projects } from './Projects';

export const Hero: React.FC = () => {
  return (
    <>
      {/* SECTION 01 — HERO (Two-Column Editorial) */}
      <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Introduction & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <p className="eyebrow text-[var(--accent)] font-semibold tracking-wider">
                  AI & MACHINE LEARNING ENGINEER · FULL-STACK DEVELOPER
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]">
                  {PORTFOLIO_DATA.personal.name}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl font-normal">
                {PORTFOLIO_DATA.personal.shortBio}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-page)] rounded font-medium text-xs font-mono uppercase hover:opacity-90 transition-opacity"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

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
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-64 sm:w-72 aspect-[4/5] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-sm">
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

            <a
              href="#work"
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
                <span>Scroll to Work</span>
                <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
              </div>
            </a>

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
                    Background & Credentials
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

      {/* SECTION 04 — EXPLORE PREVIEWS */}
      <section className="py-20 md:py-28 border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
          
          <div className="pb-6 border-b border-[var(--border-subtle)]">
            <p className="eyebrow text-[var(--accent)] mb-1">EXPLORE</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Core Destinations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Destination 1: Selected Work */}
            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FolderGit2 className="w-5 h-5 text-[var(--accent)]" />
                  <span className="text-xs font-mono text-[var(--text-muted)]">7 PROJECTS</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Selected Work</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Real neural sequence modeling, RAG document assistants, explainable AI with Grad-CAM, and full-stack monorepos.
                </p>
                <div className="aspect-video rounded overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-page)]">
                  <img
                    src="/projects/rag-dashboard.png"
                    alt="OmniMind RAG preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--text-primary)] hover:text-[var(--accent)]"
              >
                <span>Browse Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Destination 2: Experience */}
            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Briefcase className="w-5 h-5 text-[var(--accent)]" />
                  <span className="text-xs font-mono text-[var(--text-muted)]">4 INTERNSHIPS</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Professional Work</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Practical engineering internships across AICTE, Cognifyz Technologies, CodersCave, and SkillVertex.
                </p>
                <div className="p-4 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] space-y-2 text-xs font-mono">
                  <div className="text-[var(--accent)] font-semibold">Latest Internship:</div>
                  <div className="text-[var(--text-primary)]">AI-ML Virtual Intern</div>
                  <div className="text-[var(--text-muted)] text-[11px]">AICTE–EduSkills · 2024</div>
                </div>
              </div>
              <Link
                to="/experience"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--text-primary)] hover:text-[var(--accent)]"
              >
                <span>Read Experience Timeline</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Destination 3: Certifications */}
            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Award className="w-5 h-5 text-[var(--accent)]" />
                  <span className="text-xs font-mono text-[var(--text-muted)]">39 CREDENTIALS</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Accreditations</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Deep Learning Specialization, AWS Cloud Solutions Architect, IBM Applied AI, and Cisco Networking Academy.
                </p>
                <div className="p-4 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] space-y-2 text-xs font-mono">
                  <div className="text-[var(--accent)] font-semibold">Verified Evidence:</div>
                  <div className="text-[var(--text-primary)]">Deep Learning & Cloud</div>
                  <div className="text-[var(--text-muted)] text-[11px]">52 Certificate PDFs Cataloged</div>
                </div>
              </div>
              <Link
                to="/certifications"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--text-primary)] hover:text-[var(--accent)]"
              >
                <span>View Full Registry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Embedded Selected Work Section */}
      <Projects />

      {/* SECTION 05 — CLOSING & COLLABORATION */}
      <section className="py-20 md:py-28 border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <p className="eyebrow text-[var(--accent)]">05 / GET IN TOUCH</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Let's Build Intelligent Systems Together.
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl">
                I am actively seeking software engineering and AI/ML opportunities where I can apply rigorous modeling, clean architecture, and modern full-stack workflows.
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-mono font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)]">
              <h3 className="text-xs font-mono uppercase text-[var(--text-muted)]">Verified Channels</h3>
              <div className="space-y-3 text-xs font-mono">
                <a
                  href={PORTFOLIO_DATA.personal.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-colors text-[var(--text-primary)]"
                >
                  <span>Telegram (@Umarom98425)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-colors text-[var(--text-primary)]"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-colors text-[var(--text-primary)]"
                >
                  <span>GitHub (@UMARMUKTHAR03)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};
