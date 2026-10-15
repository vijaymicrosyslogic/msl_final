import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TRAINING_PROGRAMS, TRAINING_DIFFERENTIATORS, TRAINER_CONTACT } from '../data/trainingData';
import './TrainingPrograms.css';

const TrainingPrograms = () => {
  const navigate = useNavigate();

  const benefitsTables = [
    {
      id: 'students',
      tag: 'CAREER & SKILLS',
      title: 'Benefits to Students / Engineers',
      icon: 'bi-person-workspace',
      themeClass: 'tp-benefit--students',
      summary: 'Master real embedded hardware, build working prototypes, and gain placement-ready confidence.',
      rows: [
        {
          area: 'Senior Mentorship',
          detail: 'Learn directly from senior industry experts with 28+ years of tier-1 corporate experience.'
        },
        {
          area: 'Hands-on Exposure',
          detail: 'Hands-on exposure to physical hardware boards, tools, firmware development, and debugging.'
        },
        {
          area: 'Prototype Independence',
          detail: 'Build confidence to independently develop Embedded / IoT / Wireless product prototypes.'
        },
        {
          area: 'Campus & Off-Campus Jobs',
          detail: 'Prepare students to crack top technical interviews both in-campus and off-campus.'
        },
        {
          area: 'Interview Guidance',
          detail: 'Interview-oriented guidance with practical concepts, tips, and common industry technical questions.'
        },
        {
          area: 'Industry Tech Stack',
          detail: 'Develop industry-relevant skills across ARM Cortex, STM32, Embedded C, RTOS, Linux, Zigbee & FPGA.'
        },
        {
          area: 'Career Readiness',
          detail: 'Strengthen fundamentals and problem-solving skills for career readiness beyond graduation.'
        }
      ]
    },
    {
      id: 'colleges',
      tag: 'ACADEMIC EXCELLENCE',
      title: 'Benefits to Engineering Colleges / Universities',
      icon: 'bi-buildings',
      themeClass: 'tp-benefit--colleges',
      summary: 'Bridge academic theory with industry practice and elevate institution placement statistics.',
      rows: [
        {
          area: 'Academic-Industry Bridge',
          detail: 'Bridges the gap between academic theory and real-world commercial industry requirements.'
        },
        {
          area: 'Practical Hardware Lab',
          detail: 'Practical hardware exposure and hands-on lab experiments beyond conventional classroom theory.'
        },
        {
          area: 'Multi-Branch Customization',
          detail: 'Programs customized for ECE, EEE, CSE, IoT, Mechatronics, and Mechanical Automation students.'
        },
        {
          area: 'Employability & Projects',
          detail: 'Strengthens capstone project development, technical interview prep, and placement readiness.'
        },
        {
          area: 'Industry Tools & Methods',
          detail: 'Introduces students to industry IDEs, hardware debugging, and product engineering approaches.'
        },
        {
          area: 'Industry-Ready Graduates',
          detail: 'Supports colleges in building high-employability, industry-ready engineering graduates.'
        },
        {
          area: 'Curriculum Advisory',
          detail: 'Advises faculty and boards of studies to update curriculum in alignment with market needs.'
        }
      ]
    },
    {
      id: 'corporates',
      tag: 'ENTERPRISE VELOCITY',
      title: 'Benefits to Corporates & R&D Teams',
      icon: 'bi-briefcase-fill',
      themeClass: 'tp-benefit--corporates',
      summary: 'Accelerate hardware bring-up, minimize project blockers, and upskill engineering teams.',
      rows: [
        {
          area: 'Close Skill Gaps',
          detail: 'Close gaps between current engineer skills and cutting-edge technologies needed for active projects.'
        },
        {
          area: 'Customized to Platforms',
          detail: 'Customize syllabus specifically to your company hardware platforms, chipsets, and project stacks.'
        },
        {
          area: 'Core Embedded & RTOS Skills',
          detail: 'Build hands-on proficiency in STM32, FreeRTOS, Zigbee wireless, and AMD Xilinx Zynq FPGA.'
        },
        {
          area: 'Bring-up & System Debugging',
          detail: 'Strengthen hardware bring-up, register debugging, bus protocols, and system integration.'
        },
        {
          area: 'Prototype to Testing',
          detail: 'Apply learning directly to active project milestones from early prototyping through production.'
        },
        {
          area: 'Reduce Rework & Blockers',
          detail: 'Help cross-functional teams reduce design rework and quickly overcome technical bottlenecks.'
        },
        {
          area: 'Continuous Advisory',
          detail: 'Provide ongoing technical mentorship and expert consulting as engineers roll out new products.'
        }
      ]
    }
  ];

  return (
    <div className="tp-main-page">
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="tp-hero">
        <div className="tp-hero__bg">
          <img src="/assets/img/training/hero_bg.jpg" alt="MicroSysLogic Training Facility" />
          <div className="tp-hero__overlay" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="tp-hero__grid">
            {/* Left — Content */}
            <div className="tp-hero__content">
              <div className="tp-hero__badge">
                <i className="bi bi-mortarboard-fill" />
                <span>SKILL DEVELOPMENT & INDUSTRIAL TRAINING</span>
              </div>
              <h1 className="tp-hero__title">
                Industrial Embedded &<br />
                <span>Advanced Tech</span> Training
              </h1>
              <p className="tp-hero__subtitle">
                6 specialized, hands-on training programs spanning <strong>Advanced Embedded IoT, Cloud IoT, Wireless RF, FreeRTOS, Raspberry Pi SoC & AMD Xilinx Zynq FPGA</strong> — designed and taught by industry architects with <strong>28+ years</strong> of product development experience.
              </p>
              
              <div className="tp-hero__stats">
                <div className="tp-hero__stat">
                  <div className="tp-hero__stat-number">28+</div>
                  <div className="tp-hero__stat-label">Years Expert<br />Training</div>
                </div>
                <div className="tp-hero__stat-divider" />
                <div className="tp-hero__stat">
                  <div className="tp-hero__stat-number">6</div>
                  <div className="tp-hero__stat-label">Specialized<br />Programs</div>
                </div>
                <div className="tp-hero__stat-divider" />
                <div className="tp-hero__stat">
                  <div className="tp-hero__stat-number">100%</div>
                  <div className="tp-hero__stat-label">Hands-on<br />Hardware</div>
                </div>
                <div className="tp-hero__stat-divider" />
                <div className="tp-hero__stat">
                  <div className="tp-hero__stat-number">
                    <i className="bi bi-patch-check-fill" style={{ fontSize: '28px' }} />
                  </div>
                  <div className="tp-hero__stat-label">Industry<br />Certified</div>
                </div>
              </div>

              <div className="tp-hero__actions">
                <a href="#programs-grid" className="tp-btn tp-btn--primary tp-btn--lg">
                  <i className="bi bi-grid-3x3-gap-fill" /> Explore 6 Programs
                </a>
                <Link to="/contact" className="tp-btn tp-btn--outline tp-btn--lg">
                  <i className="bi bi-envelope" /> Enquire for Next Batch
                </Link>
                <a href={`tel:${TRAINER_CONTACT.phoneRaw}`} className="tp-btn tp-btn--glass tp-btn--lg">
                  <i className="bi bi-telephone-fill" /> {TRAINER_CONTACT.phone}
                </a>
              </div>
            </div>

            {/* Right — Hero Image */}
            <div className="tp-hero__image-wrapper">
              <img 
                src="/assets/img/training/career_growth.jpg" 
                alt="Career Growth through MicroSysLogic Industrial Training" 
                className="tp-hero__image" 
              />
              <div className="tp-hero__image-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRAINING PATH INFOGRAPHIC ═══════════════════ */}
      <section className="tp-image-infographic" id="path">
        <div className="container">
          <div className="infographic-layout">
            <div className="infographic-text">
              <span className="infographic-tag">
                <span className="infographic-tag__line" />
                LEARNING PATHWAY
              </span>
              <h2 className="infographic-heading">
                From <span>Learner</span> to<br />
                <span>Industry Ready</span><br />
                Engineer
              </h2>
              <p className="infographic-subtext">
                A structured, step-by-step evolution — transforming theoretical foundation into hands-on board bring-up, real-time multitasking, and production-grade product development.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a href="#programs-grid" className="tp-btn tp-btn--primary">
                  View Programs Below <i className="bi bi-arrow-down" />
                </a>
              </div>
            </div>
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

      {/* ═══════════════════ PROGRAM BENEFITS (3 TABLES) ═══════════════════ */}
      <section className="tp-benefits-section" id="benefits">
        <div className="container">
          <div className="tp-benefits-header text-center">
            <span className="tp-section-tag" style={{ background: 'rgba(226, 49, 63, 0.08)', color: '#c0001a' }}>
              <i className="bi bi-stars" style={{ marginRight: '6px' }} /> KEY ADVANTAGES
            </span>
            <h2 className="tp-benefits-main-title">
              How Our Training Programs <span>Benefit You</span>
            </h2>
            <p className="tp-benefits-main-desc">
              Tailored outcomes, practical hardware exposure, and proven career-defining skills delivered across students, institutions, and enterprises.
            </p>
          </div>

          <div className="tp-benefits-grid">
            {benefitsTables.map((table) => (
              <div className={`tp-benefit-card ${table.themeClass}`} key={table.id}>
                <div className="tp-benefit-card__header">
                  <div className="tp-benefit-card__badge-row">
                    <span className="tp-benefit-card__tag">{table.tag}</span>
                  </div>
                  <div className="tp-benefit-card__title-row">
                    <div className="tp-benefit-card__icon-box">
                      <i className={`bi ${table.icon}`} />
                    </div>
                    <h4 className="tp-benefit-card__title">{table.title}</h4>
                  </div>
                  <p className="tp-benefit-card__summary">{table.summary}</p>
                </div>
                
                <div className="tp-benefit-card__table-wrapper">
                  <table className="tp-benefit-table">
                    <thead>
                      <tr>
                        <th>Focus Area</th>
                        <th>Key Advantage & Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, idx) => (
                        <tr key={idx}>
                          <td className="tp-benefit-table__focus">
                            <span className="tp-focus-pill">
                              <i className="bi bi-check2-circle" />
                              <strong>{row.area}</strong>
                            </span>
                          </td>
                          <td className="tp-benefit-table__detail">
                            {row.detail}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ 6 TRAINING PROGRAMS GRID ═══════════════════ */}
      <section className="tp-programs-section" id="programs-grid">
        <div className="container">
          <div className="tp-section-header">
            <span className="tp-section-tag">
              <i className="bi bi-cpu-fill" style={{ marginRight: '6px' }} /> 6 SPECIALIZED PROGRAMS
            </span>
            <h2 className="tp-section-title">
              Our 6 Industry <span>Training Programs</span>
            </h2>
            <p className="tp-section-desc">
              Carefully engineered modules for colleges, universities, and corporate R&D teams.
              <br />
              <strong>Click on any card below</strong> to view complete syllabus hours, practical sessions, and learning outcomes.
            </p>
          </div>

          {/* DYNAMIC RESPONSIVE GRID: 3x2 Desktop, 2x3 Tablet, 1x6 Mobile */}
          <div className="tp-programs-grid">
            {TRAINING_PROGRAMS.map((program) => (
              <div 
                className="tp-program-card" 
                key={program.id}
                onClick={() => navigate(`/training-programs/${program.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/training-programs/${program.slug}`); }}
              >
                {/* Card Media Header */}
                <div className="tp-program-card__media">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="tp-program-card__img"
                    loading="lazy"
                  />
                  <div className="tp-program-card__badges">
                    <span className="tp-program-card__number-badge">
                      PROGRAM {program.number}
                    </span>
                    <span className="tp-program-card__duration-badge">
                      <i className="bi bi-clock-fill" /> {program.duration}
                    </span>
                  </div>
                  <div className="tp-program-card__media-overlay">
                    <span className="tp-program-card__hardware-chip">
                      <i className="bi bi-motherboard" /> {program.hardware}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="tp-program-card__body">
                  <div className="tp-program-card__sub-badge">
                    {program.badge}
                  </div>

                  <h3 className="tp-program-card__title">
                    {program.title}
                  </h3>

                  <div className="tp-program-card__hours-tag">
                    <span className="tp-hours-pill">
                      <i className="bi bi-journal-text" /> Theory: {program.theoryHours}
                    </span>
                    <span className="tp-hours-pill tp-hours-pill--lab">
                      <i className="bi bi-tools" /> Lab: {program.practicalHours}
                    </span>
                  </div>

                  <p className="tp-program-card__desc">
                    {program.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="tp-program-card__highlights">
                    {program.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx}>
                        <i className={`bi ${item.icon}`} />
                        <span><strong>{item.title}:</strong> {item.desc.slice(0, 75)}...</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Action Link */}
                  <div className="tp-program-card__footer">
                    <span className="tp-program-card__link">
                      <span>Explore Full Syllabus & Outcomes</span>
                      <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW OUR TRAINING DIFFERS (SLIDE 8) ═══════════════════ */}
      <section className="tp-differs-section" id="differentiation">
        <div className="container">
          <div className="tp-section-header">
            <span className="tp-section-tag">
              <i className="bi bi-award-fill" style={{ marginRight: '6px' }} /> VALUE PROPOSITION
            </span>
            <h2 className="tp-section-title">
              How Our Training <span>Differs</span>
            </h2>
            <p className="tp-section-desc">
              MicroSysLogic develops mission-critical products for Defense and industrial sectors. We bring genuine product engineering methodologies into every training session.
            </p>
          </div>

          <div className="tp-differs-grid">
            {TRAINING_DIFFERENTIATORS.map((diff, idx) => (
              <div className="tp-differs-card" key={idx}>
                <div className="tp-differs-card__icon">
                  <i className={`bi ${diff.icon}`} />
                </div>
                <div className="tp-differs-card__content">
                  <h4>{diff.title}</h4>
                  <p>{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRAINER SPOTLIGHT SECTION ═══════════════════ */}
      <section className="tp-trainer-section">
        <div className="container">
          <div className="tp-trainer-card">
            <div className="tp-trainer-card__grid">
              <div className="tp-trainer-card__left">
                <span className="tp-section-tag" style={{ background: 'rgba(226,49,63,0.1)', color: '#E2313F' }}>
                  LEAD INSTRUCTOR & ARCHITECT
                </span>
                <h3 className="tp-trainer-card__title">Vijay Veera</h3>
                <div className="tp-trainer-card__exp">
                  28+ Years of Tier-1 Industrial Engineering Experience
                </div>
                <p className="tp-trainer-card__desc">
                  With over 28 years designing high-reliability hardware and embedded software architectures for global semiconductor leaders and defense organizations, Vijay brings unprecedented practical depth to every program.
                </p>
                <div className="tp-trainer-card__companies">
                  <div className="tp-comp-pill"><i className="bi bi-check2" /> Qualcomm</div>
                  <div className="tp-comp-pill"><i className="bi bi-check2" /> Xilinx</div>
                  <div className="tp-comp-pill"><i className="bi bi-check2" /> Broadcom</div>
                  <div className="tp-comp-pill"><i className="bi bi-check2" /> Texas Instruments</div>
                </div>
              </div>

              <div className="tp-trainer-card__right">
                <div className="tp-trainer-contact-box">
                  <h4>Get in Touch Directly</h4>
                  <p>Have questions about batch schedules, institutional MoUs, or corporate customization?</p>
                  
                  <div className="tp-contact-list">
                    <a href={`tel:${TRAINER_CONTACT.phoneRaw}`} className="tp-contact-row">
                      <div className="tp-contact-icon"><i className="bi bi-telephone-fill" /></div>
                      <div>
                        <small>Direct Phone</small>
                        <strong>{TRAINER_CONTACT.phone}</strong>
                      </div>
                    </a>
                    <a href={`mailto:${TRAINER_CONTACT.email}`} className="tp-contact-row">
                      <div className="tp-contact-icon"><i className="bi bi-envelope-fill" /></div>
                      <div>
                        <small>Direct Email</small>
                        <strong>{TRAINER_CONTACT.email}</strong>
                      </div>
                    </a>
                  </div>

                  <Link to="/contact" className="tp-btn tp-btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
                    <i className="bi bi-envelope" /> Submit Inquiry Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BOTTOM CTA SECTION ═══════════════════ */}
      <section className="tp-cta">
        <div className="container">
          <div className="tp-cta__inner">
            <div className="tp-cta__content">
              <h2>Ready to Transform Your<br /><span>Engineering Skills?</span></h2>
              <p>
                Join our next batch of 6 specialized programs with hands-on lab boards, real register-level coding, and direct mentorship from industry veterans. Limited seats per batch for personalized attention.
              </p>
              <div className="tp-cta__buttons">
                <Link to="/contact" className="tp-btn tp-btn--primary tp-btn--lg">
                  <i className="bi bi-envelope-fill" /> Contact Us for Enrollment
                </Link>
                <a href={`tel:${TRAINER_CONTACT.phoneRaw}`} className="tp-btn tp-btn--glass tp-btn--lg">
                  <i className="bi bi-telephone-fill" /> Call: {TRAINER_CONTACT.phone}
                </a>
              </div>
            </div>
            <div className="tp-cta__graphic">
              <div className="tp-cta__circle">
                <div className="tp-cta__circle-inner">
                  <i className="bi bi-mortarboard-fill" />
                  <span>Enroll<br />Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPrograms;
