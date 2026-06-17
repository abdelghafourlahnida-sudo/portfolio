'use client'
import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { familiarTech } from '@/lib/familiarTech'

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: 'easeOut' as const },
  }),
}

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Angular', level: 84 },
      { name: 'Ember.js', level: 78 },
      { name: 'JavaScript', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap', level: 82 },
      { name: 'HTML & CSS', level: 98 },
      
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'PHP', level: 92 },
      { name: 'Laravel', level: 90 },
      { name: 'Node.js', level: 76 },
      { name: 'REST APIs', level: 88 },
      { name: 'C#', level: 58 },
    ],
  },
  {
    label: 'Mobile & CMS',
    skills: [
      { name: 'React Native', level: 74 },
      { name: 'WordPress', level: 90 },
    ],
  },
  {
    label: 'Database & Infrastructure',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'MongoDB', level: 74 },
      { name: 'Docker', level: 80 },
      { name: 'Linux', level: 78 },
    ],
  },
  {
    label: 'Workflow & Collaboration',
    skills: [
      { name: 'Git & Bitbucket', level: 86 },
      { name: 'Scrum / Agile', level: 84 },
      { name: 'Jira', level: 82 },
      { name: 'System Debugging', level: 88 },
    ],
  },
]

const EXPERIENCE = [
  {
    role: 'Full-Stack Developer',
    company: 'Digitalpole - Paris',
    period: 'Jan 2024 — Present',
    desc: [
      'Contributed to production platforms and digital solutions for French clients across multiple industries.',
      'Built and maintained scalable frontend and backend systems with strong focus on performance and maintainability.',
      'Integrated custom features, optimized workflows, and resolved complex technical issues across web platforms.',
      'Worked on modern interfaces, APIs, mobile integrations, and CMS-based solutions.',
    ],
  },

  {
    role: 'Full-Stack Developer',
    company: 'IMAYWEB - Marrakech',
    period: 'Nov 2023 — Dec 2023',
    desc: [
      'Developed modern frontend interfaces and backend functionalities for business platforms.',
      'Integrated databases and improved system architecture for better reliability and scalability.',
      'Worked closely with project requirements and client-oriented customizations.',
    ],
  },

  {
    role: 'Full-Stack Developer',
    company: 'Hello World Digital Agency - Marrakech',
    period: 'Sep 2023 — Nov 2023',
    desc: [
      'Built and maintained web solutions with focus on responsive interfaces and backend logic.',
      'Implemented CMS integrations and server-side functionalities.',
      'Collaborated on real-world agency projects with modern development workflows.',
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-section px-6 bg-surface/40" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={FADE_UP} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="label-chip mb-4 inline-flex"><Cpu size={12} /> Expertise & Experience</span>
          <h2 className="font-heading text-display-sm font-bold mt-3">
            My{' '}
            <span className="bg-gradient-to-r from-mint to-mint-dim bg-clip-text text-transparent">
              technical stack
            </span>
          </h2>
          <p className="text-muted mt-3 max-w-lg">
           A combination of frontend, backend, mobile, and infrastructure technologies used to build scalable and reliable digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div className="space-y-8">
            {SKILL_GROUPS.map((group, gi) => (
              <motion.div
                key={group.label}
                variants={FADE_UP} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={gi}
              >
                <h3 className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
                  {group.label}
                </h3>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-text/90 font-medium">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-mint to-mint-dim"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: gi * 0.1 + 0.3, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience timeline */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-muted mb-6">
              Experience
            </h3>
            <div className="relative space-y-6 pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-mint/50 before:via-mint/20 before:to-transparent">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={FADE_UP} initial="hidden"
                  animate={inView ? 'visible' : 'hidden'} custom={i + SKILL_GROUPS.length}
                  className="relative glass-card p-5"
                >
                  <span className="absolute -left-[25px] top-5 w-3 h-3 rounded-full bg-mint border-2 border-background" />
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-heading font-semibold text-text">{exp.role}</h4>
                    <span className="text-xs text-muted whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-mint text-sm font-medium mb-2">{exp.company}</p>
                  {Array.isArray(exp.desc) ? (
                    <ul className="text-muted text-sm leading-relaxed mt-2 space-y-2 list-disc list-outside ml-5">
                      {exp.desc.map((item, idx) => (
                        <li key={idx} className="pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted text-sm leading-relaxed">{exp.desc}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Tools chips */}
            <motion.div
              variants={FADE_UP} initial="hidden"
              animate={inView ? 'visible' : 'hidden'} custom={SKILL_GROUPS.length + EXPERIENCE.length + 1}
              className="mt-8"
            >
              <h3 className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
                Also Familiar With
              </h3>
              <div className="flex flex-wrap gap-2">
                {familiarTech.map(tech => (
                  <span key={tech.name} className="tech-tag" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <img
                      src={tech.localLogo}
                      alt={tech.name}
                      width={16}
                      height={16}
                      style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.currentTarget.src = tech.localLogo
                      }}
                    />
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
