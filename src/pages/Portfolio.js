import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Project from '../components/Project';
import '../styles/Portfolio.css';
import { motion } from "framer-motion";

function Portfolio() {
  const featured = [
    {
      image: process.env.PUBLIC_URL + "/images/silver_thread.png",
      title: "Silver Thread Behavioral Health",
      description:
        "Built and launched the practice website: information architecture, conversion-oriented copy, basic on-page SEO, accessibility fundamentals, and mobile QA.",
      deployed: "https://silverthreadhealth.com/",
      github: null,
    },
    {
      image: process.env.PUBLIC_URL + "/images/atkins.png",
      title: "Atkins — Audience Growth to 1M Followers",
      description:
        "Surpassed 1M total followers ahead of deadline; built low-budget growth strategy across paid, organic, influencer, and email. Achieved ~$0.35 CPF/page-like on Facebook (40%+ below platform average).",
      deployed: null,
      github: null,
    },
    {
      image: process.env.PUBLIC_URL + "/images/nikon.png",
      title: "Nikon — Influencer Program (Mirrorless Launch)",
      description:
        "Paid influencer program: 228 posts, 5.9M impressions, 565K engagements, 9.5% ER, 5.9M video views. Gifting program: 210 posts, 623K impressions, 55K engagements, 8.8% ER.",
      deployed: null,
      github: null,
    },
    {
      image: process.env.PUBLIC_URL + "/images/hughesnet.png",
      title: "HughesNet — CSR Storytelling + Sentiment Lift",
      description:
        "Amplified STEM-focused CSR partnership content + influencer support; shifted positive/negative sentiment from 34%/66% to 54%/46% over a year.",
      deployed: null,
      github: null,
    },
  ];

  const technicalProjects = [
    {
      image: process.env.PUBLIC_URL + "/images/jamvault.png",
      title: 'JamVault',
      description: 'Social app to store and share concert memories.',
      deployed: 'https://jamvault-3a4f37943c6d.herokuapp.com/',
      github: 'https://github.com/juliaghany/JamVault/'
    },
    {
      image: process.env.PUBLIC_URL + "/images/popcornportal.png",
      title: 'Popcorn Portal',
      description: 'Movie discovery and information app.',
      deployed: 'https://juliaghany.github.io/Popcorn-Portal/',
      github: 'https://github.com/juliaghany/Popcorn-Portal'
    },
    {
      image: process.env.PUBLIC_URL + "/images/alexaskill.png",
      title: 'ESB Color Alexa Skill',
      description: "Alexa skill that reports the Empire State Building's nightly light color.",
      deployed: 'https://www.amazon.com/dp/B0BWFC8SST/',
      github: 'https://github.com/berman619/esbColor'
    },
    {
      image: process.env.PUBLIC_URL + "/images/stellarwatch.png",
      title: 'StellarWatch',
      description: 'Astronomical event tracking app.',
      deployed: 'https://stellarwatchapp.herokuapp.com/login',
      github: 'https://github.com/mark-227-g/stellarwatch'
    },
    {
      image: process.env.PUBLIC_URL + "/images/codingcorner.png",
      title: "Zach's Coding Corner",
      description: 'Blog for coders to publish and comment on posts.',
      deployed: 'https://zachscodingcorner.herokuapp.com/',
      github: 'https://github.com/berman619/techblog'
    },
    {
      image: process.env.PUBLIC_URL + "/images/weatherdash.png",
      title: 'Weather Dashboard',
      description: 'Weather dashboard showing the forecast for any city.',
      deployed: 'https://berman619.github.io/weather-dashboard/',
      github: 'https://github.com/berman619/weather-dashboard'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="introduction">
        <h2>Selected Work</h2>
        <p>
          Social media, digital marketing, and communications work—focused on content systems,
          audience growth, rapid response, and reporting. Technical projects are included below as
          additional work.
        </p>
      </div>

      <div className="featured-grid">
        {featured.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>

      <details className="tech-projects">
        <summary>Technical projects (archived / supplemental)</summary>

        <div className="carousel-container">
          <Carousel
            autoPlay={false}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows
            swipeable
            emulateTouch
            stopOnHover
          >
            {technicalProjects.map((project, index) => (
              <div key={index}>
                <Project project={project} />
              </div>
            ))}
          </Carousel>
        </div>
      </details>
    </motion.div>
  );
}

export default Portfolio;
