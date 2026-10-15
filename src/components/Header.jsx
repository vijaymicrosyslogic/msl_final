import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

// Navigation data for mobile drawer
const mobileNavCategories = [
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

  // Close mobile drawer when route changes
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

  // Touch gesture handling: swipe right-to-left to close mobile drawer
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = touchStartX.current - currentX; // positive when swiping right-to-left
    const deltaY = Math.abs(touchStartY.current - currentY);

    // If pushed left by at least 50px horizontally with predominantly horizontal movement
    if (deltaX > 50 && deltaX > deltaY * 1.2) {
      setIsMobileMenuOpen(false);
      touchStartX.current = null;
      touchStartY.current = null;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartX.current - touchEndX; // positive when swiping right-to-left
    const deltaY = Math.abs(touchStartY.current - touchEndY);

    // If swiped right-to-left by at least 35px
    if (deltaX > 35 && deltaX > deltaY) {
      setIsMobileMenuOpen(false);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Mouse drag handlers for testing in responsive browser mode
  const mouseStartX = useRef(null);
  const mouseStartY = useRef(null);

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      mouseStartX.current = e.clientX;
      mouseStartY.current = e.clientY;
    }
  };

  const handleMouseMove = (e) => {
    if (mouseStartX.current === null || mouseStartY.current === null) return;
    const deltaX = mouseStartX.current - e.clientX;
    const deltaY = Math.abs(mouseStartY.current - e.clientY);
    if (deltaX > 50 && deltaX > deltaY * 1.2) {
      setIsMobileMenuOpen(false);
      mouseStartX.current = null;
      mouseStartY.current = null;
    }
  };

  const handleMouseUp = (e) => {
    if (mouseStartX.current === null || mouseStartY.current === null) return;
    const deltaX = mouseStartX.current - e.clientX;
    const deltaY = Math.abs(mouseStartY.current - e.clientY);
    if (deltaX > 35 && deltaX > deltaY) {
      setIsMobileMenuOpen(false);
    }
    mouseStartX.current = null;
    mouseStartY.current = null;
  };

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

          {/* Logo */}
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

          {/* Desktop Navigation Links (Original layout and dropdowns preserved) */}
          <div className="top-links desktop-only" style={{ alignItems: 'center' }}>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
            <Link to="/about">About us</Link>

            <div className="nav-dropdown">
              <Link to="/products/defense">Defense</Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/defense/t90"><i className="bi bi-broadcast"></i> T90’s V2V RF Comm. & Automation</Link>
                <Link to="/products/defense/g3000"><i className="bi bi-airplane"></i> Flight control Monitor Device</Link>
                <Link to="/products/defense/locker"><i className="bi bi-safe"></i> High safety AI locker</Link>
                <Link to="/products/defense/video"><i className="bi bi-camera-reels"></i> Secure Handheld Communicator</Link>
                <Link to="/products/defense/soc-modernization"><i className="bi bi-cpu"></i> Legacy to Latest SOC Modernization</Link>
                <Link to="/products/defense/ai-security"><i className="bi bi-shield-lock"></i> AI Secured Zones Monitoring System</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/ai">AI</Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/ai/surveillance"><i className="bi bi-camera-video"></i> AI High Security Surveillance</Link>
                <Link to="/products/ai/traffic"><i className="bi bi-stoplights"></i> AI High Traffic Signaling System</Link>
                <Link to="/products/ai/tender"><i className="bi bi-file-earmark-text"></i> AI Tender/Bidding Solution</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/renewable">Renewable Energy</Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/renewable/solar"><i className="bi bi-brightness-high"></i> Smart Solar Energy Systems</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/hospitals">Smart Hospitals</Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/hospitals/automation"><i className="bi bi-hospital"></i> Smart Hospital IOT Automation & Monitoring System</Link>
                <Link to="/products/hospitals/locker"><i className="bi bi-shield-lock"></i> AI Secured Locker Systems for Drugs</Link>
                <Link to="/products/hospitals/nurse-tablet"><i className="bi bi-tablet"></i> Smart AI Locker for Nurse Tablets</Link>
                <Link to="/products/hospitals/impress-stock"><i className="bi bi-inboxes"></i> Impress Stock AI Medicine Access</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/automations">Automations</Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/automations/iot"><i className="bi bi-cpu"></i> Industrial IOT</Link>
                <Link to="/products/automations/mining"><i className="bi bi-shield-fill-exclamation"></i> Safety Mining</Link>
                <Link to="/products/automations/lift"><i className="bi bi-arrow-up-square"></i> Multi Escalators & lift failures Identification</Link>
                <Link to="/products/automations/face"><i className="bi bi-person-bounding-box"></i> Face Analytics on Broadcom Soc Platform</Link>
                <Link to="/products/automations/drone"><i className="bi bi-bullseye"></i> Onboard Vehicle Detection for Drones</Link>
                <Link to="/products/automations/thermal"><i className="bi bi-thermometer-half"></i> Thermal camera distance Detection</Link>
                <Link to="/products/automations/dehaze"><i className="bi bi-cloud-haze"></i> Dehaze / Snow-Fog Removal</Link>
                <Link to="/products/automations/defect"><i className="bi bi-search"></i> Product Defect Detect</Link>
                <Link to="/products/automations/rfid"><i className="bi bi-person-badge"></i> RFID Visitor Tracking Solutions</Link>
              </div>
            </div>

            <Link to="/training-programs">Training Programs</Link>
          </div>

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
                <Link to="#" onClick={(e) => e.preventDefault()}><i className="bi bi-file-earmark-arrow-down"></i> Brochure</Link>
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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-hidden="true"
      />

      {/* Mobile Drawer with Swipe-to-Close Gestures */}
      <aside 
        className={`mobile-menu-drawer ${isMobileMenuOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
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

          {/* Solutions & Products Accordions (Mobile Only) */}
          <div className="drawer-section">
            <div className="drawer-section-header">
              <span className="drawer-section-tag">SOLUTIONS & CAPABILITIES</span>
            </div>

            <div className="drawer-accordion-list">
              {mobileNavCategories.map((cat) => {
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
                        {/* Direct Link to Main Product Category Page for Mobile */}
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
              <a href="mailto:info@microsyslogic.com" className="drawer-contact-link">
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
