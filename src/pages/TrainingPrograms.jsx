import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TrainingPrograms.css';

const TrainingPrograms = () => {
  const [activeTab, setActiveTab] = useState('embedded');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const programs = {
    embedded: {
      title: 'Industrial Embedded Software Training Program',
      subtitle: 'Master Embedded Systems from Silicon to Software',
      duration: '12 Weeks',
      mode: 'Hybrid (Online + Lab)',
      level: 'Beginner to Advanced',
      certification: 'MicroSysLogic Certified',
      image: '/assets/img/training/embedded_training.jpg',
      description: 'A comprehensive industrial training program covering the complete embedded software lifecycle — from chip architecture to RTOS programming, Automotive protocols, and hands-on hardware projects. Taught by engineers with 25+ years of industrial experience.',
      highlights: [
        { icon: 'bi-cpu', text: 'Hands-on with STM32, ARM Cortex & Industrial SoCs' },
        { icon: 'bi-car-front', text: 'Automotive-focused: CAN Bus, SoC (SystemOnChip) & Wireless Comm.' },
        { icon: 'bi-terminal', text: 'Embedded C, RTOS concepts & Cross-Compiler workflows' },
        { icon: 'bi-motherboard', text: 'Hardware Interfaces: UART, I2C, CAN & IoT to Cloud' },
      ],
      coreBasics: [
        'Various market segments and end use cases',
        'Life Cycle of Chip design and SW bring-up',
      ],
      specialization: [
        'Basics of Microprocessor',
        'Micro Controller Architecture',
        'Basics of ARM Cortex',
        'Hardware Familiarization and interfaces',
        'Basics of Low Speed devices (UART/I2C) and High Speed devices (CAN)',
        'Embedded RTOS concepts and programming',
        'Special attention on SoC (SystemOnChip) for Automotive',
        'IoT Communication from Hardware to Cloud',
        'Different types of Wireless comm. (Zigbee & WiFi) used in Automotive',
        'Cross Compilers and various stages from Programming to Execution on Hardware',
      ],
      handsOn: [
        'Embedded Boards with IDE',
        'Embedded C based Programming',
        'Develop IoT based project with Operating System on Hardware (ESP32/WiFi/ZigBee)',
        'STM32 Boards',
        'Get Good Understanding of Peripherals Communication',
        'IoT with Cloud data',
      ],
      processors: ['TI', 'Broadcom', 'Renesas', 'Qualcomm', 'ST', 'ARM', 'Intel'],
      domains: ['Mobile SW', 'Pre/Post Silicon Validation', 'FPGA', 'Automotive', 'IoT'],
    },
    iot: {
      title: 'IoT Training Program',
      subtitle: 'Build Connected Systems from Edge to Cloud',
      duration: '8 Weeks',
      mode: 'Hybrid (Online + Lab)',
      level: 'Beginner to Intermediate',
      certification: 'MicroSysLogic Certified',
      image: '/assets/img/training/iot_training.jpg',
      description: 'A focused training program on Internet of Things product design — from embedded microcontrollers and communication protocols to cloud development, data dashboards, and wireless communication. Build real IoT projects with industry-grade hardware.',
      highlights: [
        { icon: 'bi-lightbulb', text: 'Product Design for IoT Solutions' },
        { icon: 'bi-cloud-arrow-up', text: 'Cloud Development: PostgreSQL & Data Maintenance' },
        { icon: 'bi-wifi', text: 'Multiple Wireless Communication Protocols' },
        { icon: 'bi-bar-chart-line', text: 'Dashboard to Visualize Real-time Data' },
      ],
      coreBasics: [
        'Product Design for IoT Solutions',
      ],
      specialization: [
        'Basics of Microprocessor',
        'Micro Controller Architecture',
        'Communication Protocols',
        'Cloud Development: PostgreSQL and Data Maintenance',
        'IoT Communication from Hardware to Cloud',
        'Different types of Wireless communication',
        'Dashboard to visualize Data',
      ],
      handsOn: [
        'Embedded Boards with IDE',
        'Develop IoT based project with Operating System on Hardware (ESP32/WiFi/ZigBee)',
        'STM32 Boards',
      ],
      processors: ['ESP32', 'STM32'],
      domains: ['IoT', 'Smart Office', 'Industrial IoT', 'Connected Devices'],
    }
  };

  const activeProgram = programs[activeTab];

  return (
    <>
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="tp-hero">
        <div className="tp-hero__bg">
          <img src="/assets/img/training/hero_bg.jpg" alt="" />
          <div className="tp-hero__overlay" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="tp-hero__grid">
            {/* Left — Text Content */}
            <div className="tp-hero__content">
              <div className="tp-hero__badge">
                <i className="bi bi-mortarboard-fill" />
                <span>SKILL DEVELOPMENT PROGRAMS</span>
              </div>
              <h1 className="tp-hero__title">
                Industrial Embedded<br />
                <span>Skill Development</span> Training
              </h1>
              <p className="tp-hero__subtitle">
                Specialized advance training programs in Embedded Systems with integrated AI,
                Automotive, Chip Validation & Mobile — taught by engineers with <strong>25+ years</strong> of
                industrial expertise.
              </p>
              <div className="tp-hero__stats">
                <div className="tp-hero__stat">
                  <div className="tp-hero__stat-number">25+</div>
                  <div className="tp-hero__stat-label">Years Expert<br/>Training</div>
                </div>
                <div className="tp-hero__stat-divider" />
                <div className="tp-hero__stat">
                  <div className="tp-hero__stat-number">100%</div>
                  <div className="tp-hero__stat-label">Hands-on<br/>Hardware</div>
                </div>
                <div className="tp-hero__stat-divider" />
                <div className="tp-hero__stat">
                  <div className="tp-hero__stat-number">2</div>
                  <div className="tp-hero__stat-label">Specialized<br/>Programs</div>
                </div>
                <div className="tp-hero__stat-divider" />
                <div className="tp-hero__stat">
                  <div className="tp-hero__stat-number">
                    <i className="bi bi-patch-check-fill" style={{ fontSize: '28px' }} />
                  </div>
                  <div className="tp-hero__stat-label">Industry<br/>Certified</div>
                </div>
              </div>
              <div className="tp-hero__actions">
                <a href="#programs" className="tp-btn tp-btn--primary">
                  <i className="bi bi-arrow-down-circle" /> Explore Programs
                </a>
                <Link to="/contact" className="tp-btn tp-btn--outline">
                  <i className="bi bi-envelope" /> Enquire Now
                </Link>
              </div>
            </div>

            {/* Right — Hero Image */}
            <div className="tp-hero__image-wrapper">
              <img src="/assets/img/training/career_growth.jpg" alt="Career Growth" className="tp-hero__image" />
              <div className="tp-hero__image-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRAINING PATH - IMAGE INFOGRAPHIC ═══════════════════ */}
      <section className="tp-image-infographic" id="path" data-animate>
        <div className="container">
          <div className="infographic-layout">
            {/* Left — Text */}
            <div className="infographic-text">
              <span className="infographic-tag">
                <span className="infographic-tag__line" />
                TRAINING PROGRAM
              </span>
              <h2 className="infographic-heading">
                From <span>Learner</span> to<br />
                <span>Industry Ready</span><br />
                Engineer
              </h2>
              <p className="infographic-subtext">
                A structured, step-by-step journey — from foundational embedded concepts to real industry-grade hardware projects.
              </p>
            </div>
            {/* Right — Image */}
            <div className="infographic-img-wrap">
              <img
                src="/assets/img/training/infographic_staircase_new.jpg"
                alt="Training Journey — From Basic Embedded Skills to Industry Ready Engineer"
                className="infographic-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROGRAMS SECTION ═══════════════════ */}
      <section className="tp-programs" id="programs" data-animate>
        <div className="container">
          <div className="tp-section-header">
            <span className="tp-section-tag">OUR PROGRAMS</span>
            <h2 className="tp-section-title">Choose Your <span>Training Track</span></h2>
            <p className="tp-section-desc">Two specialized programs designed to make you industry-ready with hands-on experience on real hardware platforms.</p>
          </div>

          {/* Tab Switcher */}
          <div className="tp-tab-switcher">
            <button
              className={`tp-tab-btn ${activeTab === 'embedded' ? 'active' : ''}`}
              onClick={() => setActiveTab('embedded')}
            >
              <i className="bi bi-cpu-fill" />
              <span>Embedded Software Training</span>
            </button>
            <button
              className={`tp-tab-btn ${activeTab === 'iot' ? 'active' : ''}`}
              onClick={() => setActiveTab('iot')}
            >
              <i className="bi bi-cloud-arrow-up-fill" />
              <span>IoT Training Program</span>
            </button>
          </div>

          {/* Program Detail Card */}
          <div className="tp-program-detail" key={activeTab}>
            {/* Top Overview */}
            <div className="tp-program-overview">
              <div className="tp-program-overview__img">
                <img src={activeProgram.image} alt={activeProgram.title} />
                <div className="tp-program-overview__img-overlay">
                  <span className="tp-program-overview__badge-tag">
                    <i className="bi bi-mortarboard-fill" /> {activeProgram.certification}
                  </span>
                </div>
              </div>
              <div className="tp-program-overview__info">
                <h3 className="tp-program-overview__title">{activeProgram.title}</h3>
                <p className="tp-program-overview__desc">{activeProgram.description}</p>
                <div className="tp-program-overview__meta">
                  <div className="tp-meta-item">
                    <i className="bi bi-calendar3" />
                    <div><small>Duration</small><strong>{activeProgram.duration}</strong></div>
                  </div>
                  <div className="tp-meta-item">
                    <i className="bi bi-laptop" />
                    <div><small>Mode</small><strong>{activeProgram.mode}</strong></div>
                  </div>
                  <div className="tp-meta-item">
                    <i className="bi bi-bar-chart-steps" />
                    <div><small>Level</small><strong>{activeProgram.level}</strong></div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="tp-program-highlights">
                  {activeProgram.highlights.map((h, i) => (
                    <div className="tp-highlight-item" key={i}>
                      <div className="tp-highlight-icon"><i className={`bi ${h.icon}`} /></div>
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Curriculum Grid — 2-col: left stacks Core Basics + Practical, right has full Specialization */}
            <div className="tp-curriculum-grid">

              {/* Left column: Core Basics stacked on top of Practical */}
              <div className="tp-curriculum-col">
                <div className="tp-curriculum-card">
                  <div className="tp-curriculum-card__header">
                    <i className="bi bi-journal-bookmark-fill" />
                    <h4>Core Basics</h4>
                  </div>
                  <ul>
                    {activeProgram.coreBasics.map((item, i) => (
                      <li key={i}><i className="bi bi-check-circle-fill" />{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="tp-curriculum-card">
                  <div className="tp-curriculum-card__header">
                    <i className="bi bi-tools" />
                    <h4>Practical / Hands-on Exposure</h4>
                  </div>
                  <ul>
                    {activeProgram.handsOn.map((item, i) => (
                      <li key={i}><i className="bi bi-check-circle-fill" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right column: Full Embedded Specialization */}
              <div className="tp-curriculum-card">
                <div className="tp-curriculum-card__header">
                  <i className="bi bi-cpu-fill" />
                  <h4>Embedded Specialization</h4>
                </div>
                <ul>
                  {activeProgram.specialization.map((item, i) => (
                    <li key={i}><i className="bi bi-check-circle-fill" />{item}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Platforms & Domains */}
            <div className="tp-tags-row">
              <div className="tp-tags-group">
                <h5><i className="bi bi-motherboard" /> Processors / Platforms</h5>
                <div className="tp-tags">
                  {activeProgram.processors.map((p, i) => (
                    <span className="tp-tag" key={i}>{p}</span>
                  ))}
                </div>
              </div>
              <div className="tp-tags-group">
                <h5><i className="bi bi-grid-3x3-gap" /> Industry Domains</h5>
                <div className="tp-tags">
                  {activeProgram.domains.map((d, i) => (
                    <span className="tp-tag tp-tag--domain" key={i}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════ WHY CHOOSE US ═══════════════════ */}
      <section className="tp-why" data-animate>
        <div className="container">
          <div className="tp-section-header">
            <span className="tp-section-tag">WHY MICROSYSLOGIC</span>
            <h2 className="tp-section-title">Why Train With <span>Industry Experts</span></h2>
          </div>
          <div className="tp-why__grid">
            {[
              { icon: 'bi-award-fill', title: '25+ Years Expertise', desc: 'Learn from engineers who have built real products deployed across defense, automotive, and industrial sectors worldwide.' },
              { icon: 'bi-motherboard', title: 'Real Hardware Labs', desc: 'Train on actual STM32, ESP32, and industrial SoC boards — not simulators. Every session includes hands-on hardware work.' },
              { icon: 'bi-building', title: 'Industry Partnerships', desc: 'Direct placement pipelines with companies seeking skilled embedded engineers. We train for specific customer requirements.' },
              { icon: 'bi-shield-check', title: 'Certified Program', desc: 'Receive MicroSysLogic certification recognized by embedded product companies for direct engineer placements.' },
              { icon: 'bi-diagram-3-fill', title: 'End-to-End Coverage', desc: 'From bare-metal C to RTOS, from hardware interfaces to cloud IoT — covering the entire embedded product lifecycle.' },
              { icon: 'bi-people-fill', title: 'Small Batch Sizes', desc: 'Focused learning with limited batch sizes ensuring personal attention and thorough understanding of every concept.' },
            ].map((item, i) => (
              <div className="tp-why__card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="tp-why__card-icon"><i className={`bi ${item.icon}`} /></div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section className="tp-cta">
        <div className="container">
          <div className="tp-cta__inner">
            <div className="tp-cta__content">
              <h2>Ready to Launch Your<br /><span>Embedded Career?</span></h2>
              <p>Join our next batch and gain industry-ready skills with hands-on hardware experience. Limited seats available per batch.</p>
              <div className="tp-cta__buttons">
                <Link to="/contact" className="tp-btn tp-btn--primary tp-btn--lg">
                  <i className="bi bi-envelope-fill" /> Contact Us for Enrollment
                </Link>
                <a href="tel:+919876543210" className="tp-btn tp-btn--glass tp-btn--lg">
                  <i className="bi bi-telephone-fill" /> Call for Details
                </a>
              </div>
            </div>
            <div className="tp-cta__graphic">
              <div className="tp-cta__circle">
                <div className="tp-cta__circle-inner">
                  <i className="bi bi-mortarboard-fill" />
                  <span>Enroll<br/>Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingPrograms;
