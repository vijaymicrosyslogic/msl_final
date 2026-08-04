import React from 'react';
import { Link } from 'react-router-dom';
import { IconAI, IconEmbedded, IconPCB, IconARM, IconIoT, IconRF, IconCloud, IconVision, IconLinux, IconEdgeAI } from '../components/WwaIcons';

const About = () => {
  return (
    <>


      {/* Main Intro - Modern Redesign */}
      <section className="hero-about-section">
        <div className="container" data-aos="fade-up" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="content">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', padding: '6px 16px', marginBottom: '25px', backdropFilter: 'blur(10px)' }}>
                  <i className="bx bx-buildings" style={{ color: '#E2313F', fontSize: '14px' }}></i>
                  <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px' }}>About MicroSysLogic</span>
                </div>
                <h3 style={{ color: '#ffffff', fontSize: '2.6rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '24px' }}>
                  Engineering Intelligence.<br />
                  <span style={{ color: '#E2313F' }}>Building Tomorrow's</span> Smart Products
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '16px' }}>
                  MicroSysLogic Technologies is an innovation-driven Product Engineering company
                  specializing in <strong style={{ color: '#ffffff' }}>Embedded Electronics, Artificial Intelligence, Industrial IoT, Computer Vision, RF Communication, and Smart Automation.</strong>
                </p>
                <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                  We transform ideas into market-ready products by delivering complete <strong style={{ color: '#ffffff' }}>hardware, firmware, AI software, cloud connectivity, and manufacturing support</strong> under one roof.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="founder-card-2">
                      <div className="founder-card-2__box">
                        <img src="/assets/img/companies/founder_side_full.png" alt="Vijay Veera, Founder and CEO" className="founder-card-2__photo" />
                        <h2 className="founder-card-2__name">Vijay Veera</h2>
                        <p className="founder-card-2__title">FOUNDER &amp; CEO</p>
                        <p className="founder-card-2__stat">
                          <span className="founder-card-2__stat-number">28+</span> years of experience in End-to-End Industrial Product development, specializing in Electronic Hardware Design, PCB design, Embedded systems, IoT and AI-powered technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New 'Who We Are' Section Redesign */}
      <section className="wwa-section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Background Elements from Design */}
        <img src="/assets/img/who_we_are_lines.png" alt="Lines Background" style={{ position: 'absolute', top: '-20px', left: '-20px', width: '25%', maxWidth: '350px', objectFit: 'contain', objectPosition: 'top left', zIndex: 0, opacity: 0.5, pointerEvents: 'none', mixBlendMode: 'multiply' }} />
        <img src="/assets/img/who_we_are_globe.png" alt="Globe Background" style={{ position: 'absolute', top: '-30px', right: '-30px', width: '35%', maxWidth: '450px', objectFit: 'contain', objectPosition: 'top right', zIndex: 0, opacity: 0.5, pointerEvents: 'none', mixBlendMode: 'multiply' }} />

        <div className="container" data-aos="fade-up" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <div className="wwa-header-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>WHO WE ARE</div>
          <h2 className="wwa-main-heading text-center">
            Engineering Innovation.<br />
            <span className="highlight-red">Delivering Intelligent Products.</span>
          </h2>
          <p className="wwa-desc-text text-center">
            MicroSysLogic Technologies is a Product Engineering company with over <strong style={{ color: '#e62b3a' }}>28 years</strong> of experience
            in designing next-generation electronic products. We specialize in Embedded Systems, Artificial
            Intelligence, Industrial IoT, RF Communication, Computer Vision, and Smart Automation,
            delivering complete hardware and software solutions from concept to manufacturing.
          </p>
          <p className="wwa-desc-text text-center">
            Our mission is to build reliable, secure and scalable solutions that accelerate innovation
            and create lasting business value for our customers.
          </p>

          {/* Tech Pill */}
          <div className="tech-pill-container" data-aos="zoom-in" data-aos-delay="100">
            <div className="tech-pill-item">
              <IconAI />
              <span>AI</span>
            </div>
            <div className="tech-pill-item-divider"></div>
            <div className="tech-pill-item">
              <IconEmbedded />
              <span>Embedded</span>
            </div>
            <div className="tech-pill-item-divider"></div>
            <div className="tech-pill-item">
              <IconPCB />
              <span>PCB Design</span>
            </div>
            <div className="tech-pill-item-divider"></div>
            <div className="tech-pill-item">
              <IconARM />
              <span>ARM</span>
            </div>
            <div className="tech-pill-item-divider"></div>
            <div className="tech-pill-item">
              <IconIoT />
              <span>IoT</span>
            </div>
            <div className="tech-pill-item-divider"></div>
            <div className="tech-pill-item">
              <IconRF />
              <span>RF</span>
            </div>
            <div className="tech-pill-item-divider"></div>
            <div className="tech-pill-item">
              <IconCloud />
              <span>Cloud</span>
            </div>
            <div className="tech-pill-item-divider"></div>
            <div className="tech-pill-item">
              <IconVision />
              <span>Vision</span>
            </div>
            <div className="tech-pill-item-divider"></div>
            <div className="tech-pill-item">
              <IconLinux />
              <span>Linux</span>
            </div>
            <div className="tech-pill-item-divider"></div>
            <div className="tech-pill-item">
              <IconEdgeAI />
              <span>Edge AI</span>
            </div>
          </div>

          {/* Four Value Cards */}
          <div className="row" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="wwa-value-card text-center" style={{ padding: '30px 15px' }}>
                <div className="wwa-icon-circle" style={{ border: '2px solid #E2313F' }}><img src="/assets/img/icons/local_police_180dp_E3E3E3_FILL1_wght700_GRAD0_opsz20.svg" alt="Shield" style={{ width: '40px', height: '40px', filter: 'brightness(0) saturate(100%) invert(13%) sepia(30%) saturate(2250%) hue-rotate(204deg) brightness(97%) contrast(92%)' }} /></div>
                <h3 style={{ color: '#1a2744', fontSize: '2rem', fontWeight: '800', marginBottom: '10px' }}>28+</h3>
                <h5 style={{ color: '#E2313F', fontWeight: '700', fontSize: '1.1rem', marginBottom: '15px' }}>Years of Engineering Excellence</h5>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', margin: '0' }}>Deep expertise in embedded electronics and AI-powered product development across multiple industries.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="wwa-value-card text-center" style={{ padding: '30px 15px' }}>
                <div className="wwa-icon-circle" style={{ border: '2px solid #E2313F' }}><img src="/assets/img/icons/rocket_launch_180dp_E3E3E3_FILL1_wght700_GRAD0_opsz48.svg" alt="Rocket" style={{ width: '40px', height: '40px', filter: 'brightness(0) saturate(100%) invert(13%) sepia(30%) saturate(2250%) hue-rotate(204deg) brightness(97%) contrast(92%)' }} /></div>
                <h3 style={{ color: '#1a2744', fontSize: '2rem', fontWeight: '800', marginBottom: '10px' }}>32+</h3>
                <h5 style={{ color: '#E2313F', fontWeight: '700', fontSize: '1.1rem', marginBottom: '15px' }}>Successful Product Deliveries</h5>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', margin: '0' }}>From concept and prototyping to production-ready solutions delivered with quality and on-time.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="wwa-value-card text-center" style={{ padding: '30px 15px' }}>
                <div className="wwa-icon-circle" style={{ border: '2px solid #E2313F' }}><img src="/assets/img/icons/language_180dp_E3E3E3_FILL0_wght700_GRAD200_opsz48.svg" alt="Globe" style={{ width: '40px', height: '40px', filter: 'brightness(0) saturate(100%) invert(13%) sepia(30%) saturate(2250%) hue-rotate(204deg) brightness(97%) contrast(92%)' }} /></div>
                <h3 style={{ color: '#1a2744', fontSize: '2rem', fontWeight: '800', marginBottom: '10px' }}>15+</h3>
                <h5 style={{ color: '#E2313F', fontWeight: '700', fontSize: '1.1rem', marginBottom: '15px' }}>Industry Verticals Served</h5>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', margin: '0' }}>Defence &bull; Healthcare &bull; Industrial Automation &bull; Automotive &bull; Renewable Energy &bull; Semiconductor &bull; More</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="wwa-value-card text-center" style={{ padding: '30px 15px' }}>
                <div className="wwa-icon-circle" style={{ border: '2px solid #E2313F' }}><img src="/assets/img/icons/settings.png" alt="Manufacturing" style={{ width: '40px', height: '40px', filter: 'brightness(0) saturate(100%) invert(13%) sepia(30%) saturate(2250%) hue-rotate(204deg) brightness(97%) contrast(92%)' }} /></div>
                <h3 style={{ color: '#1a2744', fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px' }}>End-to-End</h3>
                <h5 style={{ color: '#E2313F', fontWeight: '700', fontSize: '1.1rem', marginBottom: '15px' }}>Product Engineering</h5>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', margin: '0' }}>Hardware &bull; PCB &bull; Firmware &bull; AI Cloud &bull; Testing &bull; Manufacturing Deployment & Support</p>
              </div>
            </div>
          </div>

          {/* End-to-End Process Flow */}
          <div className="wwa-process-section" data-aos="fade-up" data-aos-delay="300">
            <div className="wwa-process-header" style={{ fontSize: '1.75rem', fontWeight: 'bold', letterSpacing: '2px', color: '#1a2744' }}>OUR END-TO-END PRODUCT ENGINEERING PROCESS</div>
            <div className="wwa-process-container">
              <div className="wwa-process-step">
                <div className="wwa-process-icon" style={{ backgroundColor: '#1A2A4A' }}><img src="/assets/img/icons/idea.png" alt="Idea" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} /></div>
                <h6>Idea</h6>
                <p>Concept & Feasibility</p>
              </div>
              <div className="wwa-process-step">
                <div className="wwa-process-icon" style={{ backgroundColor: '#1A2A4A' }}><img src="/assets/img/icons/hierarchical-structure.png" alt="Architecture" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} /></div>
                <h6>Architecture</h6>
                <p>System Design</p>
              </div>
              <div className="wwa-process-step">
                <div className="wwa-process-icon" style={{ backgroundColor: '#1A2A4A' }}><img src="/assets/img/icons/cpu.png" alt="Hardware Design" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} /></div>
                <h6>Hardware Design</h6>
                <p>Schematic & Layout</p>
              </div>
              <div className="wwa-process-step">
                <div className="wwa-process-icon" style={{ backgroundColor: '#1A2A4A' }}><img src="/assets/img/icons/circuit-board.png" alt="PCB Design" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} /></div>
                <h6>PCB Design</h6>
                <p>High Speed & Precision</p>
              </div>
              <div className="wwa-process-step">
                <div className="wwa-process-icon" style={{ backgroundColor: '#1A2A4A' }}><img src="/assets/img/icons/code.png" alt="Firmware" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} /></div>
                <h6>Firmware</h6>
                <p>Embedded Development</p>
              </div>
              <div className="wwa-process-step">
                <div className="wwa-process-icon" style={{ backgroundColor: '#1A2A4A' }}><img src="/assets/img/icons/brain.png" alt="AI Integration" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} /></div>
                <h6>AI Integration</h6>
                <p>Edge AI & Vision</p>
              </div>
              <div className="wwa-process-step">
                <div className="wwa-process-icon" style={{ backgroundColor: '#1A2A4A' }}><img src="/assets/img/icons/test.png" alt="Testing" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} /></div>
                <h6>Testing</h6>
                <p>Validation & QA</p>
              </div>
              <div className="wwa-process-step">
                <div className="wwa-process-icon" style={{ backgroundColor: '#1A2A4A' }}><img src="/assets/img/icons/robot.png" alt="Manufacturing" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} /></div>
                <h6>Manufacturing</h6>
                <p>Prototype to Production</p>
              </div>
              <div className="wwa-process-step">
                <div className="wwa-process-icon" style={{ backgroundColor: '#1A2A4A' }}><img src="/assets/img/icons/start-up.png" alt="Deployment" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} /></div>
                <h6>Deployment</h6>
                <p>Support & Sustenance</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Capabilities Section - Why MicroSysLogic */}
      <section className="why-msl-section" style={{ background: '#f8f9fc', padding: '40px 0 80px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Background Elements from Design */}
        <img src="/assets/img/why_MSL_lines.png" alt="Lines Background" style={{ position: 'absolute', top: '-20px', left: '-20px', width: '25%', maxWidth: '350px', objectFit: 'contain', objectPosition: 'top left', zIndex: 0, opacity: 0.5, pointerEvents: 'none', mixBlendMode: 'multiply' }} />
        <img src="/assets/img/why_MSL_globe.png" alt="Globe Background" style={{ position: 'absolute', top: '-30px', right: '-30px', width: '35%', maxWidth: '450px', objectFit: 'contain', objectPosition: 'top right', zIndex: 0, opacity: 0.5, pointerEvents: 'none', mixBlendMode: 'multiply' }} />

        <div className="container" data-aos="fade-up" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center mb-5">
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E2313F', borderRadius: '4px', padding: '8px 24px', marginBottom: '25px', background: '#ffffff' }}>
              <span style={{ color: '#E2313F', fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>Why MicroSysLogic</span>
            </div>
            
            <h2 style={{ color: '#1a2744', fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: '800', marginBottom: '15px', letterSpacing: '-0.5px' }}>
              Engineering <span style={{ color: '#E2313F' }}>Innovation.</span> Delivering <span style={{ color: '#E2313F' }}>Impact.</span>
            </h2>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '25px' }}>
              <div style={{ height: '1px', background: '#E2313F', width: '50px' }}></div>
              <h4 style={{ color: '#1a2744', fontSize: '1.2rem', fontWeight: '600', margin: 0 }}>End-to-End Engineering Excellence, Built Around Your Success.</h4>
              <div style={{ height: '1px', background: '#E2313F', width: '50px' }}></div>
            </div>
            
            <p style={{ color: '#4b5563', maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7', fontWeight: '400' }}>
              From idea to long-term support, we take complete ownership of the product engineering lifecycle.<br className="d-none d-md-block" />
              Our multidisciplinary team delivers world-class solutions across technologies, geographies,<br className="d-none d-md-block" />
              and industries — with a relentless focus on quality, innovation, and customer success.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div style={{ padding: '25px 20px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', height: '100%', display: 'flex', gap: '15px', transition: 'transform 0.3s, box-shadow 0.3s' }} className="why-card">
                <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: '#E8EFF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="bx bx-chip" style={{ fontSize: '34px', color: '#1a2744' }}></i>
                </div>
                <div style={{ position: 'relative', paddingLeft: '15px', width: '100%' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, width: '2px', height: '55px', background: '#E2313F' }}></div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#1a2744', margin: 0, lineHeight: '1.3' }}>
                    Embedded Systems & IoT
                  </h4>
                  <div style={{ width: '35px', height: '2px', background: '#E2313F', margin: '10px 0 12px' }}></div>
                  <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>
                    Deep proficiency in SoCs and microcontrollers with RTOS/Linux and IoT connectivity for smart, secure, and reliable embedded solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div style={{ padding: '25px 20px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', height: '100%', display: 'flex', gap: '15px', transition: 'transform 0.3s, box-shadow 0.3s' }} className="why-card">
                <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: '#E8EFF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="bx bx-globe" style={{ fontSize: '34px', color: '#1a2744' }}></i>
                </div>
                <div style={{ position: 'relative', paddingLeft: '15px', width: '100%' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, width: '2px', height: '55px', background: '#E2313F' }}></div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#1a2744', margin: 0, lineHeight: '1.3' }}>
                    Global Solution Delivery
                  </h4>
                  <div style={{ width: '35px', height: '2px', background: '#E2313F', margin: '10px 0 12px' }}></div>
                  <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>
                    Proven track record of building and managing high-performing distributed engineering teams to deliver customer success worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div style={{ padding: '25px 20px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', height: '100%', display: 'flex', gap: '15px', transition: 'transform 0.3s, box-shadow 0.3s' }} className="why-card">
                <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: '#E8EFF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="bx bx-wrench" style={{ fontSize: '34px', color: '#1a2744' }}></i>
                </div>
                <div style={{ position: 'relative', paddingLeft: '15px', width: '100%' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, width: '2px', height: '55px', background: '#E2313F' }}></div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#1a2744', margin: 0, lineHeight: '1.3' }}>
                    Engineering Strength
                  </h4>
                  <div style={{ width: '35px', height: '2px', background: '#E2313F', margin: '10px 0 12px' }}></div>
                  <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>
                    Comprehensive expertise in hardware design, firmware, software, and system integration across the full technology stack.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div style={{ padding: '25px 20px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', height: '100%', display: 'flex', gap: '15px', transition: 'transform 0.3s, box-shadow 0.3s' }} className="why-card">
                <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: '#E8EFF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="bx bx-microchip" style={{ fontSize: '34px', color: '#1a2744' }}></i>
                </div>
                <div style={{ position: 'relative', paddingLeft: '15px', width: '100%' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, width: '2px', height: '55px', background: '#E2313F' }}></div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#1a2744', margin: 0, lineHeight: '1.3' }}>
                    Chipset Ecosystems
                  </h4>
                  <div style={{ width: '35px', height: '2px', background: '#E2313F', margin: '10px 0 12px' }}></div>
                  <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>
                    Hands-on experience across leading chipset ecosystems from Qualcomm, Broadcom, Xilinx, and Texas Instruments.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 (Domain Expertise with Tags) */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div style={{ padding: '25px 20px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s, box-shadow 0.3s' }} className="why-card">
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: '#E8EFF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="bx bx-target-lock" style={{ fontSize: '34px', color: '#1a2744' }}></i>
                  </div>
                  <div style={{ position: 'relative', paddingLeft: '15px', width: '100%' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, width: '2px', height: '55px', background: '#E2313F' }}></div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#1a2744', margin: 0, lineHeight: '1.3' }}>
                      Domain Expertise
                    </h4>
                    <div style={{ width: '35px', height: '2px', background: '#E2313F', margin: '10px 0 10px' }}></div>
                    <p style={{ fontSize: '13px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>
                      Deep domain knowledge across key industries, delivering intelligent and trusted solutions.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 5px', borderRight: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
                    <i className="bx bxs-shield-alt-2" style={{ color: '#E2313F', fontSize: '26px' }}></i>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#1a2744' }}>Defence</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 5px', borderRight: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
                    <i className="bx bxs-sun" style={{ color: '#E2313F', fontSize: '26px' }}></i>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#1a2744' }}>Solar</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 5px', borderBottom: '1px solid #eaeaea' }}>
                    <i className="bx bxs-factory" style={{ color: '#E2313F', fontSize: '26px' }}></i>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#1a2744' }}>Manufacturing</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 5px', borderRight: '1px solid #eaeaea' }}>
                    <i className="bx bxs-camera" style={{ color: '#E2313F', fontSize: '26px' }}></i>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#1a2744' }}>AI Camera</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 5px', borderRight: '1px solid #eaeaea' }}>
                    <i className="bx bxs-car" style={{ color: '#E2313F', fontSize: '26px' }}></i>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#1a2744' }}>Automotive</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 5px' }}>
                    <i className="bx bx-cloud" style={{ color: '#E2313F', fontSize: '26px' }}></i>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#1a2744', whiteSpace: 'nowrap' }}>Industrial IoT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div style={{ padding: '25px 20px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', height: '100%', display: 'flex', gap: '15px', transition: 'transform 0.3s, box-shadow 0.3s' }} className="why-card">
                <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: '#E8EFF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="bx bx-infinite" style={{ fontSize: '34px', color: '#1a2744' }}></i>
                </div>
                <div style={{ position: 'relative', paddingLeft: '15px', width: '100%' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, width: '2px', height: '55px', background: '#E2313F' }}></div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#1a2744', margin: 0, lineHeight: '1.3' }}>
                    End-to-End Dev
                  </h4>
                  <div style={{ width: '35px', height: '2px', background: '#E2313F', margin: '10px 0 12px' }}></div>
                  <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>
                    Complete product lifecycle ownership from concept, design, and development to sustenance, scaling, and long-term support.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Domains Section Redesign */}
      <section style={{ background: '#1a2a4a', padding: '80px 0 40px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Grid Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(226,49,63,0.15) 0%, rgba(26,42,74,0) 70%)', borderRadius: '50%', zIndex: 0 }}></div>

        <div className="container" data-aos="fade-up" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-title text-center mb-5">
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: '800', textTransform: 'none', letterSpacing: '-0.5px' }}>Product Domains</h2>
            <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '15px auto 0', fontSize: '1.05rem', lineHeight: '1.7', fontWeight: '400' }}>
              Engineering solutions across embedded, AI, wireless, and connected systems.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            
            {/* Embedded Software */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div style={{ padding: '30px 25px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', backdropFilter: 'blur(10px)' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(226,49,63,0.3)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(226,49,63,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bx bx-code-alt" style={{ fontSize: '28px', color: '#E2313F' }}></i>
                  </div>
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' }}>Embedded Software</h4>
                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>End-to-end embedded platform development.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#e2e8f0', fontSize: '14px', lineHeight: '1.6' }}>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>OS Porting & BSP</li>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>Device Drivers</li>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>RTOS/Linux Development</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>Software Integration</li>
                </ul>
              </div>
            </div>

            {/* Artificial Intelligence */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div style={{ padding: '30px 25px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', backdropFilter: 'blur(10px)' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(226,49,63,0.3)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(226,49,63,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bx bx-brain" style={{ fontSize: '28px', color: '#E2313F' }}></i>
                  </div>
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' }}>Artificial Intelligence</h4>
                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>Intelligent systems and AI-powered applications.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#e2e8f0', fontSize: '14px', lineHeight: '1.6' }}>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>Machine Learning</li>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>AI Agents</li>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>Generative AI (LLMs)</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>Computer Vision & NLP</li>
                </ul>
              </div>
            </div>

            {/* IOT/Security Solutions */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div style={{ padding: '30px 25px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', backdropFilter: 'blur(10px)' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(226,49,63,0.3)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(226,49,63,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bx bx-shield-quarter" style={{ fontSize: '28px', color: '#E2313F' }}></i>
                  </div>
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' }}>IOT & Security</h4>
                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>Connected and secure intelligent solutions.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#e2e8f0', fontSize: '14px', lineHeight: '1.6' }}>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>AI-Based Security</li>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>LLM Optimization</li>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>Test Automation</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>Connected Systems</li>
                </ul>
              </div>
            </div>

            {/* Wireless Tech. */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div style={{ padding: '30px 25px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', backdropFilter: 'blur(10px)' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(226,49,63,0.3)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(226,49,63,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bx bx-wifi" style={{ fontSize: '28px', color: '#E2313F' }}></i>
                  </div>
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' }}>Wireless Tech</h4>
                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>Advanced wireless communication systems.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#e2e8f0', fontSize: '14px', lineHeight: '1.6' }}>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>Secure Communications</li>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>RFID Integration</li>
                  <li style={{ paddingBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>Bluetooth Enablement</li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}><i className="bx bx-chevron-right" style={{ color: '#E2313F', fontSize: '18px', marginRight: '5px', marginTop: '2px' }}></i>Vehicle Automation</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <br/>
      </section>



      {/* Technology Coverage Section Redesign */}
      <section style={{ background: '#f8f9fc', padding: '60px 0 100px 0' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center mb-4">
            <h2 style={{ color: '#1a2744', fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: '800', letterSpacing: '-0.5px', textTransform: 'none' }}>Technology Stack</h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Tech Pill 1 */}
            <div data-aos="zoom-in" data-aos-delay="100">
              <div className="tech-pill">
                <div className="tech-pill-icon-wrapper">
                  <i className="bx bx-chip tech-pill-icon"></i>
                </div>
                <span className="tech-pill-text">Semiconductors</span>
              </div>
            </div>

            {/* Tech Pill 2 */}
            <div data-aos="zoom-in" data-aos-delay="150">
              <div className="tech-pill">
                <div className="tech-pill-icon-wrapper">
                  <i className="bx bx-brain tech-pill-icon"></i>
                </div>
                <span className="tech-pill-text">Embedded AI</span>
              </div>
            </div>

            {/* Tech Pill 3 */}
            <div data-aos="zoom-in" data-aos-delay="200">
              <div className="tech-pill">
                <div className="tech-pill-icon-wrapper">
                  <i className="bx bx-car tech-pill-icon"></i>
                </div>
                <span className="tech-pill-text">Automotive</span>
              </div>
            </div>

            {/* Tech Pill 4 */}
            <div data-aos="zoom-in" data-aos-delay="250">
              <div className="tech-pill">
                <div className="tech-pill-icon-wrapper">
                  <i className="bx bx-buildings tech-pill-icon"></i>
                </div>
                <span className="tech-pill-text">Industrial IoT</span>
              </div>
            </div>

            {/* Tech Pill 5 */}
            <div data-aos="zoom-in" data-aos-delay="300">
              <div className="tech-pill">
                <div className="tech-pill-icon-wrapper">
                  <i className="bx bx-shield-quarter tech-pill-icon"></i>
                </div>
                <span className="tech-pill-text">AI Security</span>
              </div>
            </div>

            {/* Tech Pill 6 */}
            <div data-aos="zoom-in" data-aos-delay="350">
              <div className="tech-pill">
                <div className="tech-pill-icon-wrapper">
                  <i className="bx bx-microchip tech-pill-icon"></i>
                </div>
                <span className="tech-pill-text">Hardware Design</span>
              </div>
            </div>

            {/* Tech Pill 7 */}
            <div data-aos="zoom-in" data-aos-delay="400">
              <div className="tech-pill">
                <div className="tech-pill-icon-wrapper">
                  <i className="bx bx-code-alt tech-pill-icon"></i>
                </div>
                <span className="tech-pill-text">Software Development</span>
              </div>
            </div>

            {/* Tech Pill 8 */}
            <div data-aos="zoom-in" data-aos-delay="450">
              <div className="tech-pill">
                <div className="tech-pill-icon-wrapper">
                  <i className="bx bxl-tux tech-pill-icon"></i>
                </div>
                <span className="tech-pill-text">RTOS / Linux</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dedicated CTA Section */}
      <section style={{ background: '#f8f9fc', padding: '0 0 100px 0' }}>
        <div className="container" data-aos="fade-up">
          <div style={{ background: '#0f172a', padding: '80px 40px', borderRadius: '24px', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)' }}>
            {/* Subtle background decoration */}
            <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(226,49,63,0.15) 0%, rgba(15,23,42,0) 70%)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(226,49,63,0.15) 0%, rgba(15,23,42,0) 70%)', borderRadius: '50%' }}></div>

            <div className="position-relative">
              <div className="text-center">
                <h3 style={{ color: '#ffffff', fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Ready to Accelerate Your Product Development?</h3>
                <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 40px', fontSize: '18px' }}>
                  Partner with MicroSysLogic to bring cutting-edge Embedded AI and IoT solutions from concept to reality.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/contact" style={{ background: '#E2313F', color: '#ffffff', padding: '14px 32px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 15px rgba(226,49,63,0.3)', transition: 'all 0.3s ease' }}>Schedule Consultation</Link>
                  <Link to="/services" style={{ background: 'transparent', color: '#ffffff', padding: '14px 32px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.2)', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.borderColor = 'rgba(255,255,255,0.4)' }} onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(255,255,255,0.2)' }}>Explore Solutions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default About;

