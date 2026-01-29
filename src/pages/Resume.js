import React from 'react';
import '../styles/Resume.css';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faBullseye,
  faPenNib,
  faChartLine,
  faBullhorn,          // <-- use this instead of faMegaphone
  faShieldHalved,
  faGlobe,
  faDownload,
  faCode
} from '@fortawesome/free-solid-svg-icons';


function Resume() {
  // Update this path to match whatever you put in /public/files
  const resumePdfPath = "/files/Zach Berger Resume_2026.pdf";

  const capabilitySections = [
    {
      title: "Social & Content Strategy",
      icon: faBullseye,
      items: [
        "Channel strategy, editorial calendars, content systems",
        "Messaging frameworks, campaign planning, stakeholder alignment",
        "Brand voice development + content QA"
      ],
    },
    {
      title: "Writing, Creative & Production",
      icon: faPenNib,
      items: [
        "Short-form copywriting (social-first), headlines/hooks",
        "Creative direction, briefs, asset feedback loops",
        "Photography + basic photo/video editing workflows"
      ],
    },
    {
      title: "Analytics & Reporting",
      icon: faChartLine,
      items: [
        "Performance reporting + insights (what worked / what to do next)",
        "Basic GA4 literacy + web metrics (traffic, conversions)",
        "Testing mindset + iteration based on results"
      ],
    },
    {
  title: "Community & Rapid Response",
  icon: faBullhorn,
  items: [
    "Community management + moderation",
    "Social listening / issue monitoring",
    "Fast-turn updates during sensitive moments"
  ],
},
    {
      title: "Brand & Risk",
      icon: faShieldHalved,
      items: [
        "Crisis comms support and reputational awareness",
        "Platform hygiene (account access, permissions basics)",
        "Accessibility basics and inclusive language norms"
      ],
    },
    {
      title: "Web / CMS (Supportive Skills)",
      icon: faGlobe,
      items: [
        "Website updates, landing pages, and content structure",
        "Conversion-minded copy + basic on-page SEO",
        "Comfort collaborating with dev/design teams"
      ],
    },
  ];

  const tools = [
    "GA4",
    "Sprout Social",
    "Hootsuite / Later",
    "Adobe Creative Cloud",
    "Social listening tools (e.g., NetBase)",
    "WordPress / CMS",
    "Google Workspace",
    "Meta Business Suite (if applicable)"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="resume-page">
        <header className="resume-header">
          <h1>Resume</h1>
          <p className="resume-subtitle">
            Download the latest PDF and view a quick snapshot of capabilities and tools.
          </p>

          <a
            href={resumePdfPath}
            className="resume-download"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Resume (PDF)</span>
          </a>
        </header>

        <div className="resume-content">
          <section className="resume-section">
            <h2>Capabilities</h2>

            <div className="capabilities-grid">
              {capabilitySections.map((section) => (
                <div className="capability-card" key={section.title}>
                  <div className="capability-title">
                    <FontAwesomeIcon icon={section.icon} />
                    <h3>{section.title}</h3>
                  </div>

                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <aside className="resume-section">
            <h2>Tools</h2>
            <div className="tools-chips">
              {tools.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>

            {/* Optional: keep dev stuff, but don’t lead with it */}
            <details className="tech-details">
              <summary>
                <FontAwesomeIcon icon={faCode} />
                <span>Technical skills (supplemental)</span>
              </summary>

              <div className="tech-body">
                <p>
                  I’m comfortable with modern web fundamentals — enough to ship updates, collaborate with dev teams,
                  and own a small site end-to-end when needed.
                </p>

                <div className="tools-chips tech-chips">
                  {["HTML/CSS", "JavaScript", "React", "Node", "SQL"].map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </details>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
