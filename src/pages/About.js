import React from 'react';
import '../styles/About.css';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Section({ title, content, image, reverse = false }) {
  const shouldReduceMotion = useReducedMotion();

  const { inView, ref } = useInView({
    threshold: 0.15,
    triggerOnce: true, // animate once instead of every time it scrolls in/out
  });

  const animation = useAnimation();

  // Safe window width (won't crash if this ever renders in a non-browser environment)
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Start animations when section enters viewport
  React.useEffect(() => {
    if (!inView) return;

    animation.start({
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' },
    });
  }, [inView, animation, shouldReduceMotion]);

  // Apply reverse only on desktop-ish widths
  const applyReverse = reverse && windowWidth > 768;

  return (
    <div ref={ref} className={`about-section${applyReverse ? ' reverse' : ''}`}>
      <motion.div
        animate={animation}
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : (applyReverse ? 80 : -80) }}
      >
        <div className="title-background">
          <h2 style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>{title}</h2>
        </div>

        <p>{content}</p>
      </motion.div>

      <motion.img
        src={image}
        alt={title}
        animate={animation}
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : (applyReverse ? -80 : 80) }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.15 }}
      />
    </div>
  );
}

function About() {
  const sections = [
    {
      title: 'What I do',
      content:
        "I’m a senior social media and digital marketing strategist based in New York. I build content systems that grow audiences, protect brands in fast-moving moments, and translate performance into clear business outcomes. I’m currently targeting part-time, remote work (roughly 10–20 hours/week).",
      image: process.env.PUBLIC_URL + '/images/image1.jpg',
    },
    {
      title: 'Experience',
      content:
        "I’ve led social and digital work across agencies and startups, including MikeWorldWide (MWW), HangarFour/DKC, Praytell, and Snickerdoodle Labs. Past clients include DoorDash, Norton 360 for Gamers, NYU Langone Health, and Dr. Seuss Enterprises.",
      image: process.env.PUBLIC_URL + '/images/image2.jpg',
      reverse: true,
    },
    {
      title: 'How I work',
      content:
        'I’m strongest where strategy meets execution: building calendars and templates, writing sharp copy, managing communities, monitoring sentiment, and producing reporting that stakeholders can actually use. I’m also comfortable with rapid-response/corrective comms, account security basics, and accessibility best practices.',
      image: process.env.PUBLIC_URL + '/images/image3.jpg',
    },
    {
      title: 'Recent work',
      content:
        "Most recently, I built the website for Silver Thread Behavioral Health (a therapy practice), including information architecture, conversion-minded copy, basic on-page SEO, accessibility fundamentals, and mobile QA. I also support small businesses with practical content and promotion that drives real-world results.",
      image: process.env.PUBLIC_URL + '/images/image4.jpg',
      reverse: true,
    },
    {
      title: 'What I’m looking for',
      content:
        'A part-time, remote role where I can own social media and digital communications for a single organization—content strategy, publishing operations, community management, and reporting. I’m also open to limited consulting engagements with a similar scope.',
      image: process.env.PUBLIC_URL + '/images/image5.jpg',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-container">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            content={section.content}
            image={section.image}
            // Use explicit reverse when provided; otherwise alternate by index
            reverse={typeof section.reverse === 'boolean' ? section.reverse : index % 2 !== 0}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default About;
