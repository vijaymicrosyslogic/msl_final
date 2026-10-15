import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TRAINING_PROGRAMS, TRAINER_CONTACT } from '../data/trainingData';
import './TrainingPrograms.css';

const TrainingProgramDetail = () => {
  const { programId } = useParams();
  const navigate = useNavigate();

  // Find program by slug or id
  const program = TRAINING_PROGRAMS.find(
    (p) => p.slug === programId || p.id === programId
  ) || TRAINING_PROGRAMS[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [programId]);

  // Other programs for bottom exploration
  const otherPrograms = TRAINING_PROGRAMS.filter((p) => p.id !== program.id);

  return (
    <div className="tp-detail-page">
      {/* ═══════════════════ BREADCRUMB ═══════════════════ */}
      <nav className="tp-detail-breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <div className="tp-breadcrumb-inner">
            <Link to="/" className="tp-breadcrumb-link">
              <i className="bi bi-house-door-fill" /> Home
            </Link>
            <span className="tp-breadcrumb-sep"><i className="bi bi-chevron-right" /></span>
            <Link to="/training-programs" className="tp-breadcrumb-link">
              Training Programs
            </Link>
            <span className="tp-breadcrumb-sep"><i className="bi bi-chevron-right" /></span>
            <span className="tp-breadcrumb-current">{program.title}</span>
          </div>
        </div>
      </nav>

      {/* ═══════════════════ PROGRAM HERO ═══════════════════ */}
      <header className="tp-detail-hero">
        <div className="container">
          <div className="tp-detail-hero__grid">
            {/* Left: Content */}
            <div className="tp-detail-hero__content">
              <div className="tp-detail-hero__badge-row">
                <span className="tp-detail-hero__prog-badge">
                  PROGRAM {program.number}
                </span>
                <span className="tp-detail-hero__category-badge">
                  {program.badge}
                </span>
                <span className="tp-detail-hero__cert-badge">
                  <i className="bi bi-patch-check-fill" /> Industry Aligned Program
                </span>
              </div>

              <h1 className="tp-detail-hero__title">{program.title}</h1>
              <p className="tp-detail-hero__subtitle">{program.subtitle}</p>

              {/* Quick Meta Pills */}
              <div className="tp-detail-meta-grid">
                <div className="tp-detail-meta-item">
                  <div className="tp-detail-meta-icon"><i className="bi bi-clock-history" /></div>
                  <div>
                    <span className="tp-detail-meta-label">Total Duration</span>
                    <strong className="tp-detail-meta-val">{program.duration}</strong>
                  </div>
                </div>
                <div className="tp-detail-meta-item">
                  <div className="tp-detail-meta-icon"><i className="bi bi-laptop" /></div>
                  <div>
                    <span className="tp-detail-meta-label">Delivery Mode</span>
                    <strong className="tp-detail-meta-val">{program.mode}</strong>
                  </div>
                </div>
                <div className="tp-detail-meta-item">
                  <div className="tp-detail-meta-icon"><i className="bi bi-motherboard" /></div>
                  <div>
                    <span className="tp-detail-meta-label">Hardware Used</span>
                    <strong className="tp-detail-meta-val">{program.hardware}</strong>
                  </div>
                </div>
                <div className="tp-detail-meta-item">
                  <div className="tp-detail-meta-icon"><i className="bi bi-person-badge" /></div>
                  <div>
                    <span className="tp-detail-meta-label">Lead Trainer</span>
                    <strong className="tp-detail-meta-val">Vijay Veera (28+ Yrs Exp)</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="tp-detail-hero__actions">
                <Link to="/contact" className="tp-btn tp-btn--primary tp-btn--lg">
                  <i className="bi bi-envelope-fill" /> Enroll / Enquire for Next Batch
                </Link>
                <a href={`tel:${TRAINER_CONTACT.phoneRaw}`} className="tp-btn tp-btn--outline tp-btn--lg">
                  <i className="bi bi-telephone-fill" /> Call: {TRAINER_CONTACT.phone}
                </a>
                <Link to="/training-programs" className="tp-btn tp-btn--glass tp-btn--lg">
                  <i className="bi bi-arrow-left" /> All Programs
                </Link>
              </div>
            </div>

            {/* Right: Featured Lab Image */}
            <div className="tp-detail-hero__visual">
              <div className="tp-detail-hero__img-frame">
                <img src={program.image} alt={program.title} className="tp-detail-hero__img" />
                <div className="tp-detail-hero__img-overlay">
                  <div className="tp-detail-hero__img-chip">
                    <i className="bi bi-cpu-fill" />
                    <span>Real Hardware Lab: {program.hardware}</span>
                  </div>
                </div>
              </div>
              
              {/* Theory vs Practical Breakdown Bar */}
              <div className="tp-detail-hours-card">
                <div className="tp-detail-hours-split">
                  <div className="tp-detail-hours-part">
                    <span className="tp-detail-hours-label">Theory & Architecture</span>
                    <span className="tp-detail-hours-num">{program.theoryHours}</span>
                  </div>
                  <div className="tp-detail-hours-divider" />
                  <div className="tp-detail-hours-part">
                    <span className="tp-detail-hours-label">Practical & Hands-on</span>
                    <span className="tp-detail-hours-num">{program.practicalHours}</span>
                  </div>
                </div>
                <div className="tp-detail-hours-progress">
                  <div 
                    className="tp-detail-hours-bar tp-detail-hours-bar--theory" 
                    style={{ width: `${(parseInt(program.theoryHours) / program.durationHours) * 100}%` }}
                    title={`Theory: ${program.theoryHours}`}
                  />
                  <div 
                    className="tp-detail-hours-bar tp-detail-hours-bar--practical" 
                    style={{ width: `${(parseInt(program.practicalHours) / program.durationHours) * 100}%` }}
                    title={`Practical: ${program.practicalHours}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════ HIGHLIGHTS & OUTCOMES ROW ═══════════════════ */}
      <section className="tp-detail-section tp-detail-section--light">
        <div className="container">
          {/* Summary Box */}
          <div className="tp-detail-summary-card">
            <div className="tp-detail-summary-icon">
              <i className="bi bi-info-circle-fill" />
            </div>
            <div className="tp-detail-summary-text">
              <h3>Program Overview</h3>
              <p>{program.summary}</p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="tp-detail-pillars-grid">
            {program.highlights.map((h, i) => (
              <div className="tp-detail-pillar-card" key={i}>
                <div className="tp-detail-pillar-header">
                  <div className="tp-detail-pillar-icon">
                    <i className={`bi ${h.icon}`} />
                  </div>
                  <h4>{h.title}</h4>
                </div>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CURRICULUM SYLLABUS SECTION ═══════════════════ */}
      <section className="tp-detail-section" id="curriculum">
        <div className="container">
          <div className="tp-section-header">
            <span className="tp-section-tag">COMPREHENSIVE SYLLABUS</span>
            <h2 className="tp-section-title">
              Detailed Curriculum & <span>Module Breakdown</span>
            </h2>
            <p className="tp-section-desc">
              Every topic is engineered around hands-on industry practices, register-level understanding, and deployment readiness.
            </p>
          </div>

          <div className="tp-curriculum-dual-layout">
            {/* Theory & Foundation Modules */}
            <div className="tp-curriculum-block">
              <div className="tp-curriculum-block__head tp-curriculum-block__head--theory">
                <div className="tp-curriculum-block__icon">
                  <i className="bi bi-book-half" />
                </div>
                <div>
                  <span className="tp-curriculum-block__tag">MODULE SECTION 1</span>
                  <h3>Foundation & Architecture</h3>
                </div>
                <div className="tp-curriculum-block__hours-pill">
                  {program.theoryHours}
                </div>
              </div>

              <div className="tp-curriculum-modules-list">
                {program.theoryModules.map((mod, idx) => (
                  <div className="tp-curriculum-module-item" key={idx}>
                    <div className="tp-curriculum-module-left">
                      <span className="tp-curriculum-module-idx">{(idx + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <div className="tp-curriculum-module-body">
                      <div className="tp-curriculum-module-header">
                        <h4>{mod.title}</h4>
                        <span className="tp-curriculum-mod-hrs">
                          <i className="bi bi-clock" /> {mod.hours}
                        </span>
                      </div>
                      <p>{mod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical & Hands-on Sessions */}
            <div className="tp-curriculum-block">
              <div className="tp-curriculum-block__head tp-curriculum-block__head--practical">
                <div className="tp-curriculum-block__icon">
                  <i className="bi bi-tools" />
                </div>
                <div>
                  <span className="tp-curriculum-block__tag">MODULE SECTION 2</span>
                  <h3>Practical & Lab Sessions</h3>
                </div>
                <div className="tp-curriculum-block__hours-pill">
                  {program.practicalHours}
                </div>
              </div>

              <div className="tp-curriculum-practical-content">
                {program.practicalSessions.map((group, gIdx) => (
                  <div className="tp-practical-group" key={gIdx}>
                    <div className="tp-practical-group__title">
                      <i className="bi bi-motherboard-fill" />
                      <span>{group.platform}</span>
                    </div>

                    <div className="tp-practical-items-list">
                      {group.items.map((item, iIdx) => (
                        <div className="tp-practical-item" key={iIdx}>
                          <div className="tp-practical-item__header">
                            <h5>
                              <i className="bi bi-check2-circle" /> {item.title}
                            </h5>
                            <span className="tp-practical-hrs">
                              <i className="bi bi-stopwatch" /> {item.hours}
                            </span>
                          </div>
                          <p>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Hardware Chips Box */}
                <div className="tp-detail-hw-box">
                  <h5><i className="bi bi-cpu" /> Hardware & Development Boards In Lab</h5>
                  <div className="tp-detail-hw-tags">
                    {program.hardwareList.map((hw, hIdx) => (
                      <span className="tp-detail-hw-tag" key={hIdx}>
                        <i className="bi bi-check2" /> {hw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ OUTCOMES, AUDIENCE & PREREQUISITES ═══════════════════ */}
      <section className="tp-detail-section tp-detail-section--light">
        <div className="container">
          <div className="tp-detail-info-grid">
            {/* 1. Learning Outcomes */}
            <div className="tp-detail-info-card tp-detail-info-card--outcome">
              <div className="tp-detail-info-card__header">
                <div className="tp-detail-info-card__icon">
                  <i className="bi bi-trophy-fill" />
                </div>
                <div className="tp-detail-info-card__header-text">
                  <span className="tp-detail-info-card__tag">KEY TAKEAWAY</span>
                  <h3>Expected Learning Outcome</h3>
                </div>
              </div>
              <p className="tp-detail-info-card__desc">
                {program.outcome}
              </p>
              <ul className="tp-detail-card-checklist">
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>Hardware Bring-up:</strong> Peripheral register configuration and board initialization.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>Bench Instruments:</strong> Oscilloscope, logic analyzer, and JTAG protocol tracing.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>Production Flow:</strong> Industry design methodologies, error-handling & firmware architecture.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>Interview Readiness:</strong> Core technical competency for Embedded, IoT & Defense roles.</span>
                </li>
              </ul>
              <div className="tp-detail-card-footer-box tp-detail-card-footer-box--outcome">
                <i className="bi bi-patch-check-fill" />
                <div>
                  <strong>Hands-on Verification</strong>
                  <span>100% practical lab bring-up on real silicon, schematics & registers.</span>
                </div>
              </div>
            </div>

            {/* 2. Target Participants */}
            <div className="tp-detail-info-card tp-detail-info-card--audience">
              <div className="tp-detail-info-card__header">
                <div className="tp-detail-info-card__icon">
                  <i className="bi bi-people-fill" />
                </div>
                <div className="tp-detail-info-card__header-text">
                  <span className="tp-detail-info-card__tag">ELIGIBILITY</span>
                  <h3>Target Participants</h3>
                </div>
              </div>
              <p className="tp-detail-info-card__desc">
                {program.participants}
              </p>
              <ul className="tp-detail-card-checklist">
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>B.Tech / M.Tech Students:</strong> ECE, EEE, CSE, IoT, Mechatronics & Automation.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>Firmware & Software Devs:</strong> Engineers shifting to bare-metal & embedded OS.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>Academic Faculty & Researchers:</strong> Enhancing practical departmental lab curricula.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>Corporate R&D Teams:</strong> Accelerating prototyping and production hardware cycles.</span>
                </li>
              </ul>
              <div className="tp-detail-card-footer-box tp-detail-card-footer-box--prereq">
                <i className="bi bi-mortarboard-fill" />
                <div>
                  <strong>Prerequisites / Assumptions</strong>
                  <span>{program.prerequisites}</span>
                </div>
              </div>
            </div>

            {/* 3. Trainer Profile */}
            <div className="tp-detail-info-card tp-detail-info-card--trainer">
              <div className="tp-detail-info-card__header">
                <div className="tp-detail-info-card__icon">
                  <i className="bi bi-award-fill" />
                </div>
                <div className="tp-detail-info-card__header-text">
                  <span className="tp-detail-info-card__tag">INSTRUCTOR</span>
                  <h3>Taught by Industry Veteran</h3>
                </div>
              </div>
              <div className="tp-trainer-name">Vijay Veera</div>
              <div className="tp-trainer-subtitle">28+ Years of Tier-1 Industry Experience</div>
              <div className="tp-trainer-companies">
                <span>Qualcomm</span>
                <span>Xilinx</span>
                <span>Broadcom</span>
                <span>Texas Instruments</span>
              </div>
              <ul className="tp-detail-card-checklist">
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>Silicon-to-System Mentorship:</strong> 28+ years building mission-critical defense hardware.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>Hands-on Bench Guidance:</strong> Direct schematic walkthroughs & live register debugging.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>Tier-1 Design Methodologies:</strong> Production error-handling, EMI/EMC & reliability practices.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" />
                  <span><strong>Career & Placement Ready:</strong> Direct technical coaching for top semiconductor & embedded firms.</span>
                </li>
              </ul>
              <div className="tp-detail-card-footer-box tp-detail-card-footer-box--trainer">
                <i className="bi bi-person-check-fill" />
                <div>
                  <strong>Direct 1-on-1 Mentorship</strong>
                  <span>Interactive lab guidance & hardware desk support in every session.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ENROLLMENT & CONTACT BANNER ═══════════════════ */}
      <section className="tp-detail-cta-section">
        <div className="container">
          <div className="tp-detail-cta-card">
            <div className="tp-detail-cta-card__content">
              <span className="tp-section-tag" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}>
                ENROLLMENT & INSTITUTIONAL BOOKINGS
              </span>
              <h2>Ready to Enroll in <span>{program.title}</span>?</h2>
              <p>
                Whether you are an individual engineer looking to accelerate your career, an academic institution planning student skill development, or a corporate team requiring specialized hardware training, we are ready to assist you.
              </p>
              
              <div className="tp-detail-cta-contacts">
                <a href={`tel:${TRAINER_CONTACT.phoneRaw}`} className="tp-contact-chip">
                  <i className="bi bi-telephone-fill" />
                  <div>
                    <small>Direct Phone</small>
                    <strong>{TRAINER_CONTACT.phone}</strong>
                  </div>
                </a>
                <a href={`mailto:${TRAINER_CONTACT.email}`} className="tp-contact-chip">
                  <i className="bi bi-envelope-fill" />
                  <div>
                    <small>Email</small>
                    <strong>{TRAINER_CONTACT.email}</strong>
                  </div>
                </a>
              </div>

              <div className="tp-detail-cta-buttons">
                <Link to="/contact" className="tp-btn tp-btn--primary tp-btn--lg">
                  <i className="bi bi-send-fill" /> Request Syllabus / Custom Batch
                </Link>
                <Link to="/training-programs" className="tp-btn tp-btn--outline tp-btn--lg">
                  <i className="bi bi-grid-fill" /> Browse All 6 Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ EXPLORE OTHER 5 PROGRAMS ═══════════════════ */}
      <section className="tp-detail-others-section">
        <div className="container">
          <div className="tp-section-header">
            <span className="tp-section-tag">EXPLORE MORE SPECIALIZATIONS</span>
            <h2 className="tp-section-title">Other Training <span>Programs</span></h2>
            <p className="tp-section-desc">
              Discover our other 5 industry-grade courses to expand your skill set across embedded, wireless, RTOS, and FPGA systems.
            </p>
          </div>

          <div className="tp-others-grid">
            {otherPrograms.map((op) => (
              <div 
                key={op.id} 
                className="tp-other-mini-card"
                onClick={() => navigate(`/training-programs/${op.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/training-programs/${op.slug}`); }}
              >
                <div className="tp-other-mini-img">
                  <img src={op.image} alt={op.title} />
                  <span className="tp-other-mini-badge">Program {op.number}</span>
                </div>
                <div className="tp-other-mini-body">
                  <span className="tp-other-mini-duration"><i className="bi bi-clock" /> {op.duration}</span>
                  <h4>{op.title}</h4>
                  <p>{op.summary.slice(0, 95)}...</p>
                  <span className="tp-other-mini-link">
                    View Details <i className="bi bi-arrow-right" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingProgramDetail;
