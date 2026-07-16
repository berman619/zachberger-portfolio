import React from 'react';
import '../styles/About.css';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Section({ title, content, image, reverse = false }) {
  const shouldReduceMotion = useReducedMotion();

  const { inView, ref } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const animation = useAnimation();

  // Safe window width for browser and non-browser rendering environments
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    if (!inView) return;

    animation.start({
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: 'easeOut',
      },
    });
  }, [inView, animation, shouldReduceMotion]);

  // Reverse alternating sections only on larger screens
  const applyReverse = reverse && windowWidth > 768;

  return (
    <div
      ref={ref}
      className={`about-section${applyReverse ? ' reverse' : ''}`}
    >
      <motion.div
        className="content"
        animate={animation}
        initial={{
          opacity: 0,
          x: shouldReduceMotion ? 0 : applyReverse ? 80 : -80,
        }}
      >
        <div className="title-background">
          <h2
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
            }}
          >
            {title}
          </h2>
        </div>

        <p>{content}</p>
      </motion.div>

      <motion.img
        src={image}
        alt={title}
        animate={animation}
        initial={{
          opacity: 0,
          x: shouldReduceMotion ? 0 : applyReverse ? -80 : 80,
        }}
        transition={{
          delay: shouldReduceMotion ? 0 : 0.15,
        }}
      />
    </div>
  );
}

function About() {
  const sections = [
    {
      title: 'What I do',
      content:
        'I’m a digital communications strategist, writer, and former managing editor based in New York. I help organizations explain complex ideas, respond to fast-moving events, build engaged audiences, and turn attention into action. My work spans social strategy, content development, rapid response, community engagement, analytics, web content, and visual production.',
      image: process.env.PUBLIC_URL + '/images/image1.jpg',
    },
    {
      title: 'Experience',
      content:
        'I have more than 10 years of experience across journalism, agency communications, startups, consulting, and independent media. I’ve led social and digital work at MikeWorldWide, HangarFour/DKC, Praytell, and Snickerdoodle Labs, supporting clients including DoorDash, Norton 360 for Gamers, NYU Langone Health, Indeed, JobsOhio, and Dr. Seuss Enterprises.',
      image: process.env.PUBLIC_URL + '/images/image2.jpg',
      reverse: true,
    },
    {
      title: 'How I work',
      content:
        'I’m strongest where strategy meets execution. I develop messaging and editorial strategy, build sustainable content systems, write platform-native copy, research and fact-check fast-moving stories, manage communities, monitor emerging conversations, and use performance data to improve results. I work especially well with lean organizations that need someone who can set direction and execute the work.',
      image: process.env.PUBLIC_URL + '/images/image3.jpg',
    },
    {
      title: 'Recent work',
      content:
        'Since 2025, I’ve built an independent public-affairs and political media audience from fewer than 1,000 to more than 48,000 followers, generating 80 million organic views and 9.6 million engagements. I also designed and launched the website for Silver Thread Behavioral Health, leading information architecture, copywriting, WordPress development, basic SEO, accessibility, and mobile quality assurance.',
      image: process.env.PUBLIC_URL + '/images/image4.jpg',
      reverse: true,
    },
    {
      title: 'What I’m looking for',
      content:
        'I’m open to part-time, full-time, and select consulting opportunities in digital communications, social media, content strategy, audience development, public affairs, advocacy, and mission-driven work. Remote roles are preferred, though I’m open to New York-based opportunities with the right organization.',
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
            key={section.title}
            title={section.title}
            content={section.content}
            image={section.image}
            reverse={
              typeof section.reverse === 'boolean'
                ? section.reverse
                : index % 2 !== 0
            }
          />
        ))}
      </div>
    </motion.div>
  );
}

export default About;