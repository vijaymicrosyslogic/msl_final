import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

// Central navigation data for product domains
const navCategories = [
  {
    id: 'defense',
    title: 'Defense',
    navLabel: 'Defense',
    shortDesc: 'Mission-critical airborne systems & military electronics',
    path: '/products/defense',
    icon: 'bi-shield-check',
    badgeBg: '#fee2e2',
    badgeColor: '#c0001a',
    items: [
      { path: '/products/defense/t90', label: 'T90’s V2V RF Comm. & Automation', icon: 'bi-broadcast' },
      { path: '/products/defense/g3000', label: 'Flight control Monitor Device', icon: 'bi-airplane' },
      { path: '/products/defense/locker', label: 'High safety AI locker', icon: 'bi-safe' },
      { path: '/products/defense/video', label: 'Secure Handheld Communicator', icon: 'bi-camera-reels' },
      { path: '/products/defense/soc-modernization', label: 'Legacy to Latest SOC Modernization', icon: 'bi-cpu' },
      { path: '/products/defense/ai-security', label: 'AI Secured Zones Monitoring System', icon: 'bi-shield-lock' }
    ]
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    navLabel: 'AI',
    shortDesc: 'Vision AI, intelligent signaling & enterprise analytics',
    path: '/products/ai',
    icon: 'bi-cpu',
    badgeBg: '#eff6ff',
    badgeColor: '#2563eb',
    items: [
      { path: '/products/ai/surveillance', label: 'AI High Security Surveillance', icon: 'bi-camera-video' },
      { path: '/products/ai/traffic', label: 'AI High Traffic Signaling System', icon: 'bi-stoplights' },
      { path: '/products/ai/tender', label: 'AI Tender/Bidding Solution', icon: 'bi-file-earmark-text' }
    ]
  },
  {
    id: 'renewable',
    title: 'Renewable Energy',
    navLabel: 'Renewable Energy',
    shortDesc: 'Smart solar energy & IoT green power infrastructure',
    path: '/products/renewable',
    icon: 'bi-brightness-high',
    badgeBg: '#fef3c7',
    badgeColor: '#d97706',
    items: [
      { path: '/products/renewable/solar', label: 'Smart Solar Energy Systems', icon: 'bi-brightness-high' }
    ]
  },
  {
    id: 'hospitals',
    title: 'Smart Hospitals',
    navLabel: 'Smart Hospitals',
    shortDesc: 'Connected healthcare IoT & secure medicine lockers',
    path: '/products/hospitals',
    icon: 'bi-hospital',
    badgeBg: '#ccfbf1',
    badgeColor: '#0d9488',
    items: [
      { path: '/products/hospitals/automation', label: 'Smart Hospital IOT Automation & Monitoring System', icon: 'bi-hospital' },
      { path: '/products/hospitals/locker', label: 'AI Secured Locker Systems for Drugs', icon: 'bi-shield-lock' },
      { path: '/products/hospitals/nurse-tablet', label: 'Smart AI Locker for Nurse Tablets', icon: 'bi-tablet' },
      { path: '/products/hospitals/impress-stock', label: 'Impress Stock AI Medicine Access', icon: 'bi-inboxes' }
    ]
  },
  {
    id: 'automations',
    title: 'Automations',
    navLabel: 'Automations',
    shortDesc: 'Industrial IoT, mining safety & embedded analytics',
    path: '/products/automations',
    icon: 'bi-gear-wide-connected',
    badgeBg: '#f3e8ff',
    badgeColor: '#7c3aed',
    items: [
      { path: '/products/automations/iot', label: 'Industrial IOT', icon: 'bi-cpu' },
      { path: '/products/automations/mining', label: 'Safety Mining', icon: 'bi-shield-fill-exclamation' },
      { path: '/products/automations/lift', label: 'Multi Escalators & lift failures Identification', icon: 'bi-arrow-up-square' },
      { path: '/products/automations/face', label: 'Face Analytics on Broadcom Soc Platform', icon: 'bi-person-bounding-box' },
      { path: '/products/automations/drone', label: 'Onboard Vehicle Detection for Drones', icon: 'bi-bullseye' },
      { path: '/products/automations/thermal', label: 'Thermal camera distance Detection', icon: 'bi-thermometer-half' },
      { path: '/products/automations/dehaze', label: 'Dehaze / Snow-Fog Removal', icon: 'bi-cloud-haze' },
      { path: '/products/automations/defect', label: 'Product Defect Detect', icon: 'bi-search' },
      { path: '/products/automations/rfid', label: 'RFID Visitor Tracking Solutions', icon: 'bi-person-badge' }
    ]
  }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileCat, setOpenMobileCat] = useState(null);
  const location = useLocation();

  // Close mobile drawer when route changes (render-phase state adjustment per React docs)
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsMobileMenuOpen(false);
  }

  // Scroll detection for sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Close mobile drawer if screen is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header className={`new-header-container ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Main Navigation Bar */}
      <div className="header-top">
        <div className="nav-container">
          
          {/* Mobile Menu Toggle Button (Left on Mobile) */}
          <button 
            type="button"
            className="mobile-menu-toggle mobile-only" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>

          {/* Logo (Centered on Mobile, Left-aligned on Desktop) */}
          <Link 
            to="/" 
            className="nav-logo" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/assets/img/companies/logo.webp" alt="MicroSysLogic Logo" />
            <span className="logo-text">MicroSysLogic</span>
          </Link>

          {/* Desktop Navigation Links (Visible on >= 1200px) */}
          <nav className="top-links desktop-only" aria-label="Main Desktop Navigation">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active-link' : ''}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={location.pathname === '/about' ? 'active-link' : ''}
            >
              About us
            </Link>

            {navCategories.map((cat) => (
              <div key={cat.id} className="nav-dropdown">
                <Link 
                  to={cat.path}
                  className={location.pathname.startsWith(cat.path) ? 'active-link' : ''}
                >
                  {cat.navLabel} <i className="bi bi-chevron-down ch-icon"></i>
                </Link>
                <div className="nav-dropdown-menu">
                  {/* Category Overview Link */}
                  <Link to={cat.path} className="dropdown-overview-link">
                    <i className="bi bi-grid-fill"></i>
                    <div className="dropdown-overview-text">
                      <span className="dropdown-overview-title">All {cat.title} Solutions</span>
                      <span className="dropdown-overview-sub">View full capabilities & portfolio</span>
                    </div>
                  </Link>
                  <div className="dropdown-menu-divider"></div>
                  {cat.items.map((item) => (
                    <Link key={item.path} to={item.path}>
                      <i className={`bi ${item.icon}`}></i> {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link 
              to="/training-programs"
              className={location.pathname.startsWith('/training') ? 'active-link' : ''}
            >
              Training Programs
            </Link>
          </nav>

          {/* Actions on the Right */}
          <div className="top-actions">
            {/* Quick Contact Icon on Mobile */}
            <Link 
              to="/contact" 
              className="mobile-contact-btn mobile-only" 
              aria-label="Contact Us"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="bi bi-envelope"></i>
            </Link>

            {/* Desktop Explore Menu */}
            <div className="nav-dropdown desktop-only" style={{ height: 'auto', margin: 0 }}>
              <button className="srch-btn" aria-label="Explore Menu">
                <i className="bi bi-list" aria-hidden="true" style={{ fontSize: '24px' }}></i>
              </button>
              <div className="nav-dropdown-menu" style={{ left: 'auto', right: 0, top: 'calc(100% + 15px)', minWidth: '220px' }}>
                <Link to="/contact"><i className="bi bi-envelope"></i> Contact us</Link>
                <Link to="/contact?inquiry=brochure"><i className="bi bi-file-earmark-arrow-down"></i> Brochure</Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================
          MOBILE MENU SLIDE-OVER DRAWER & BACKDROP (Mobile Only)
      ======================================================== */}
      
      {/* Blurred Backdrop Overlay */}
      <div 
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside 
        className={`mobile-menu-drawer ${isMobileMenuOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <Link 
            to="/" 
            className="drawer-logo" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/assets/img/companies/logo.webp" alt="MicroSysLogic Logo" />
            <div className="drawer-logo-info">
              <span className="drawer-logo-title">MicroSysLogic</span>
              <span className="drawer-logo-badge">Enterprise Tech</span>
            </div>
          </Link>
          <button 
            type="button" 
            className="drawer-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="drawer-body">
          {/* Quick Primary Links */}
          <div className="drawer-section">
            <div className="drawer-quick-nav">
              <Link 
                to="/" 
                className={`drawer-quick-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <i className="bi bi-house-door-fill"></i>
                <span>Home</span>
              </Link>
              <Link 
                to="/about" 
                className={`drawer-quick-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="bi bi-info-circle-fill"></i>
                <span>About us</span>
              </Link>
            </div>
          </div>

          {/* Solutions & Products Accordions */}
          <div className="drawer-section">
            <div className="drawer-section-header">
              <span className="drawer-section-tag">SOLUTIONS & CAPABILITIES</span>
            </div>

            <div className="drawer-accordion-list">
              {navCategories.map((cat) => {
                const isExpanded = openMobileCat === cat.id;
                const isCatActive = location.pathname.startsWith(cat.path);

                return (
                  <div 
                    key={cat.id} 
                    className={`drawer-accordion-card ${isExpanded ? 'open' : ''} ${isCatActive ? 'is-active-cat' : ''}`}
                  >
                    {/* Category Accordion Header */}
                    <button 
                      type="button"
                      className="drawer-accordion-toggle"
                      onClick={() => setOpenMobileCat(isExpanded ? null : cat.id)}
                      aria-expanded={isExpanded}
                    >
                      <div className="accordion-toggle-left">
                        <span className="cat-badge-icon" style={{ background: cat.badgeBg, color: cat.badgeColor }}>
                          <i className={`bi ${cat.icon}`}></i>
                        </span>
                        <div className="cat-titles">
                          <span className="cat-title">{cat.title}</span>
                          <span className="cat-count-badge">{cat.items.length} Solutions</span>
                        </div>
                      </div>
                      <span className={`cat-chevron-icon ${isExpanded ? 'rotated' : ''}`}>
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    </button>

                    {/* Collapsible Panel */}
                    <div className={`drawer-accordion-collapse ${isExpanded ? 'show' : ''}`}>
                      <div className="drawer-accordion-body">
                        {/* THE MISSING MAIN PRODUCT CATEGORY LINK */}
                        <Link 
                          to={cat.path} 
                          className="cat-overview-banner"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="banner-left">
                            <span className="banner-icon">
                              <i className="bi bi-grid-fill"></i>
                            </span>
                            <div className="banner-text">
                              <span className="banner-title">All {cat.title} Solutions</span>
                              <span className="banner-sub">{cat.shortDesc}</span>
                            </div>
                          </div>
                          <i className="bi bi-arrow-right-short banner-arrow"></i>
                        </Link>

                        {/* Individual Product Sub-Links */}
                        <div className="subproducts-container">
                          {cat.items.map((item) => (
                            <Link 
                              key={item.path} 
                              to={item.path} 
                              className={`subproduct-item ${location.pathname === item.path ? 'active-item' : ''}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <i className={`bi ${item.icon}`}></i>
                              <span className="subproduct-name">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Programs Section */}
          <div className="drawer-section">
            <div className="drawer-section-header">
              <span className="drawer-section-tag">PROGRAMS & ACADEMY</span>
            </div>
            <Link 
              to="/training-programs" 
              className={`drawer-program-card ${location.pathname.startsWith('/training') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="program-card-left">
                <span className="program-badge-icon">
                  <i className="bi bi-mortarboard-fill"></i>
                </span>
                <div className="program-card-text">
                  <span className="program-card-title">Training Programs</span>
                  <span className="program-card-sub">VLSI, Embedded Systems & Edge AI</span>
                </div>
              </div>
              <span className="program-pill">Explore</span>
            </Link>
          </div>

          {/* Drawer Actions & Direct Contacts */}
          <div className="drawer-footer-tray">
            <Link 
              to="/contact" 
              className="drawer-btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="bi bi-envelope-fill"></i>
              <span>Contact Us</span>
            </Link>

            <Link 
              to="/contact?inquiry=brochure" 
              className="drawer-btn-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="bi bi-file-earmark-arrow-down"></i>
              <span>Request Brochure</span>
            </Link>

            <div className="drawer-contact-block">
              <div className="drawer-contact-label">Direct Connect</div>
              <a href="tel:+918008166724" className="drawer-contact-row">
                <i className="bi bi-telephone-fill"></i>
                <span>+91 8008166724</span>
              </a>
              <a href="mailto:info@microsyslogic.com" className="drawer-contact-row">
                <i className="bi bi-envelope-at-fill"></i>
                <span>info@microsyslogic.com</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
