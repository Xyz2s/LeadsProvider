import { Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Responsive menu toggle
  const handleMenuToggle = () => setMenuOpen((open) => !open);

  // Function to scroll to top when navigating
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      background: scrolled
        ? 'rgba(10, 35, 66, 0.98)'
        : 'rgba(10, 35, 66, 0.45)',
      boxShadow: scrolled ? '0 2px 16px 0 #0a234220' : '0 1px 0 0 #223a5f22',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      transition: 'background 0.3s, box-shadow 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.7rem 4vw',
      minHeight: 60,
    }}>
      <div style={{flex: '1 1 0', display: 'flex', alignItems: 'center'}}>
        <div style={{fontWeight: 900, fontSize: '1.7rem', color: '#fff', letterSpacing: 2, textShadow: '0 2px 16px #0a234299'}}>Leads Provider</div>
      </div>
      {/* Desktop nav */}
      <nav style={{flex: '2 1 0', display: 'flex', gap: '2.2rem', alignItems: 'center', justifyContent: 'center'}} className="navbar-links">
        {['About', 'Services', 'Price', 'Contact'].map((label, idx) => {
          const to =
            label === 'About' ? '/' :
            label === 'Services' ? '/services' :
            label === 'Price' ? '/pricing' :
            '/contact';
          return (
            <NavLink
              key={label}
              to={to}
              end={label === 'About'}
              style={({ isActive }) => ({
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.08rem',
                textDecoration: 'none',
                padding: '0.2rem 0',
                borderBottom: isActive ? '2.5px solid #36a2f5' : '2.5px solid transparent',
                transition: 'border-color 0.2s',
                position: 'relative',
              })}
              onClick={handleNavClick}
              onMouseEnter={e => e.target.style.color = '#36a2f5'}
              onMouseLeave={e => e.target.style.color = '#fff'}
            >
              {label}
            </NavLink>
          );
        })}
      </nav>
      {/* Hamburger for mobile */}
      <button
        onClick={handleMenuToggle}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: 28,
          cursor: 'pointer',
        }}
        className="navbar-hamburger"
        aria-label="Open menu"
      >
        &#9776;
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '70vw',
          maxWidth: 320,
          height: '100vh',
          background: 'rgba(10,35,66,0.98)',
          boxShadow: '-2px 0 16px #0a234244',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '2.5rem 2rem',
        }}>
          <button onClick={handleMenuToggle} style={{background: 'none', border: 'none', color: '#fff', fontSize: 32, alignSelf: 'flex-end', marginBottom: 24, cursor: 'pointer'}} aria-label="Close menu">&times;</button>
          {['About', 'Services', 'Price', 'Contact'].map((label) => {
            const to =
              label === 'About' ? '/' :
              label === 'Services' ? '/services' :
              label === 'Price' ? '/pricing' :
              '/contact';
            return (
              <NavLink
                key={label}
                to={to}
                end={label === 'About'}
                style={({ isActive }) => ({
                  color: isActive ? '#36a2f5' : '#fff',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  textDecoration: 'none',
                  marginBottom: 24,
                  borderBottom: isActive ? '2.5px solid #36a2f5' : '2.5px solid transparent',
                  width: '100%',
                  display: 'block',
                })}
                onClick={handleNavClick}
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      )}
      {/* Responsive CSS (inline for now) */}
      <style>{`
        @media (max-width: 900px) {
          .navbar-links { display: none !important; }
          .navbar-hamburger { display: block !important; }
        }
        @media (min-width: 901px) {
          .navbar-links { display: flex !important; }
          .navbar-hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );
}

function TrustBar() {
  return (
    <section style={{
      position: 'relative',
      background: '#fff',
      padding: '2.5rem 0 2rem 0',
      zIndex: 3,
      boxShadow: '0 2px 12px 0 #0a234208',
    }}>
      {/* SVG wave at the top */}
      <svg style={{position: 'absolute', left: 0, top: '-60px', width: '100%', height: '60px', zIndex: 2, pointerEvents: 'none'}} viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
      </svg>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap'}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Partner" style={{height: 38, opacity: 0.85, maxWidth: 120}} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Meta Partner" style={{height: 38, opacity: 0.85, maxWidth: 120}} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Partner" style={{height: 38, opacity: 0.85, maxWidth: 120}} />
        <img src="data:image/png;base64,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" alt="Nextdoor Partner" style={{height: 38, opacity: 0.85, maxWidth: 120}} />
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #f5f8fd 0%, #eaf1fb 100%)',
      padding: '5rem 0 3rem 0',
      zIndex: 2,
    }}>
      {/* SVG wave at the top */}
      <svg style={{position: 'absolute', left: 0, top: '-60px', width: '100%', height: '60px', zIndex: 2, pointerEvents: 'none'}} viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#f5f8fd" d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
      </svg>
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 2vw'}}>
        <h2 style={{fontSize: '2.2rem', fontWeight: 900, color: '#0a2342', textAlign: 'center', marginBottom: '2.5rem', letterSpacing: 0.5}}>Why Choose Leads Provider?</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem'}}>
          <div style={{flex: '1 1 260px', maxWidth: 340, background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #185adb11', padding: '2rem 1.5rem', textAlign: 'center', minWidth: 260}}>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Team working together in office" style={{height: 80, width: '100%', objectFit: 'cover', borderRadius: 12, marginBottom: 16}} />
            <h3 style={{fontWeight: 700, fontSize: '1.2rem', color: '#185adb', marginBottom: 8}}>Verified, High-Intent Leads</h3>
            <p style={{color: '#223a5f', fontSize: '1rem'}}>All leads are pre-qualified and ready to convert, saving you time and boosting ROI.</p>
          </div>
          <div style={{flex: '1 1 260px', maxWidth: 340, background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #185adb11', padding: '2rem 1.5rem', textAlign: 'center', minWidth: 260}}>
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80" alt="Expert team collaborating" style={{height: 80, width: '100%', objectFit: 'cover', borderRadius: 12, marginBottom: 16}} />
            <h3 style={{fontWeight: 700, fontSize: '1.2rem', color: '#185adb', marginBottom: 8}}>Genuine Leads</h3>
            <p style={{color: '#223a5f', fontSize: '1rem'}}>All leads are genuine and 100% original no fake leads are provided.</p>
          </div>
          <div style={{flex: '1 1 260px', maxWidth: 340, background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #185adb11', padding: '2rem 1.5rem', textAlign: 'center', minWidth: 260}}>
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Business success graph" style={{height: 80, width: '100%', objectFit: 'cover', borderRadius: 12, marginBottom: 16}} />
            <h3 style={{fontWeight: 700, fontSize: '1.2rem', color: '#185adb', marginBottom: 8}}>Your Satisfaction</h3>
            <p style={{color: '#223a5f', fontSize: '1rem'}}>Every lead we offer comes with screenshot if you need an email ID and password also available for verification.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section style={{
      position: 'relative',
      background: '#fff',
      padding: '5rem 0 3rem 0',
      zIndex: 2,
    }}>
      {/* SVG wave at the top */}
      <svg style={{position: 'absolute', left: 0, top: '-60px', width: '100%', height: '60px', zIndex: 2, pointerEvents: 'none'}} viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
      </svg>
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 2vw', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem'}}>
        <div style={{flex: '1 1 540px', minWidth: 320}}>
          <h2 style={{fontSize: '2rem', fontWeight: 900, color: '#0a2342', marginBottom: '1.2rem', letterSpacing: 0.5}}>About Leads Provider</h2>
          <p style={{fontSize: '1.15rem', color: '#223a5f', marginBottom: '1.5rem'}}>Welcome to Leads Provider's Lead Marketplace — your trusted partner for high-quality SEO and development leads. We specialize in providing verified, high-conversion leads that are ready for immediate use. Every lead we offer comes with an email ID and password for verification, ensuring authenticity and helping you make the most of your marketing efforts.</p>
          <p style={{fontSize: '1.15rem', color: '#223a5f', marginBottom: '1.5rem'}}>Whether you're a digital agency, freelancer, or business owner looking to grow your client base, we provide genuine leads tailored to your needs. We believe in transparency, reliability, and results — that's why hundreds of marketers trust us to power their campaigns.</p>
          <ul style={{color: '#185adb', fontWeight: 600, fontSize: '1.05rem', lineHeight: 2, paddingLeft: 20}}>
            <li>10+ Years of Industry Experience</li>
            <li>55+ SEO & Web Experts</li>
            <li>5,000+ Leads Generated</li>
            <li>350+ Clients Served</li>
          </ul>
        </div>
        <div style={{flex: '1 1 420px', minWidth: 260, display: 'flex', justifyContent: 'center'}}>
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Modern office with team working" style={{maxWidth: 420, width: '100%', borderRadius: 18, boxShadow: '0 2px 16px #185adb11'}} />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #eaf1fb 0%, #f5f8fd 100%)',
      padding: '5rem 0 3rem 0',
      zIndex: 2,
    }}>
      {/* SVG wave at the top */}
      <svg style={{position: 'absolute', left: 0, top: '-60px', width: '100%', height: '60px', zIndex: 2, pointerEvents: 'none'}} viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#eaf1fb" d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
      </svg>
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 2vw'}}>
        <h2 style={{fontSize: '2rem', fontWeight: 900, color: '#0a2342', textAlign: 'center', marginBottom: '2.5rem'}}>What Our Clients Say</h2>
        <div style={{display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: 16, WebkitOverflowScrolling: 'touch'}}>
          {[{
            quote: 'Leads Provider helped us double our client base in just 6 months. The quality of leads is unmatched!',
            name: 'Sarah M.',
            company: 'Digital Boost Agency',
            img: 'https://randomuser.me/api/portraits/women/44.jpg',
          }, {
            quote: 'Professional, transparent, and always delivers. Highly recommended for any agency looking to grow.',
            name: 'James L.',
            company: 'Webify Solutions',
            img: 'https://randomuser.me/api/portraits/men/32.jpg',
          }, {
            quote: 'We saw a 40% increase in conversions after switching to Leads Provider. Fantastic results!',
            name: 'Priya S.',
            company: 'SEO Gurus',
            img: 'https://randomuser.me/api/portraits/women/68.jpg',
          }].map((t, i) => (
            <div key={i} style={{
              minWidth: 320,
              maxWidth: 380,
              background: '#fff',
              borderRadius: 18,
              boxShadow: '0 2px 16px #185adb11',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginRight: i !== 2 ? 16 : 0,
            }}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: 18}}>
                <img src={t.img} alt={`Photo of ${t.name}`} style={{width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', marginRight: 14, border: '2px solid #185adb22'}} />
      <div>
                  <div style={{fontWeight: 700, color: '#185adb', fontSize: '1.05rem'}}>{t.name}</div>
                  <div style={{color: '#0a2342', fontSize: '0.98rem', opacity: 0.8}}>{t.company}</div>
                </div>
              </div>
              <div style={{fontSize: '1.1rem', color: '#223a5f', fontStyle: 'italic', lineHeight: 1.6}}>&ldquo;{t.quote}&rdquo;</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #185adb 0%, #0a2342 100%)',
      padding: '4.5rem 0 4rem 0',
      zIndex: 2,
      textAlign: 'center',
    }}>
      {/* SVG wave at the top */}
      <svg style={{position: 'absolute', left: 0, top: '-60px', width: '100%', height: '60px', zIndex: 2, pointerEvents: 'none'}} viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#185adb" d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
      </svg>
      <h2 style={{fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '1.2rem', textShadow: '0 2px 16px #0a234299'}}>Ready to Grow Your Business?</h2>
      <p style={{fontSize: '1.2rem', color: '#dbeafe', marginBottom: '2.2rem', textShadow: '0 1px 8px #0a234288'}}>Get high-quality, pre-qualified SEO and website development leads today. Let’s take your agency to the next level!</p>
      <button style={{
        background: 'linear-gradient(90deg, #36a2f5 0%, #185adb 100%)',
        color: '#fff',
        fontWeight: 700,
        fontSize: '1.15rem',
        padding: '1rem 2.5rem',
        border: 'none',
        borderRadius: 32,
        boxShadow: '0 2px 16px #185adb33',
        cursor: 'pointer',
        transition: 'background 0.2s',
        marginBottom: '3.5rem', // Add extra space below the button
      }}>Get Started</button>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #0a2342 0%, #13294b 100%)',
      color: '#fff',
      padding: '4rem 0 2rem 0',
      zIndex: 2,
      marginTop: '-2px',
      borderTop: '1.5px solid #223a5f',
      boxShadow: '0 -2px 24px #0a234220',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 2vw',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '2.5rem',
      }}>
        {/* Logo & tagline */}
        <div style={{flex: '1 1 260px', minWidth: 220, marginBottom: 24}}>
          <div style={{fontWeight: 900, fontSize: '1.7rem', letterSpacing: 1, marginBottom: 12}}>Leads Provider</div>
          <div style={{color: '#dbeafe', fontSize: '1.05rem', marginBottom: 18}}>Your trusted source for high-quality SEO and website development leads. Grow your agency with confidence.</div>
        </div>
        {/* Quick links */}
        <div style={{flex: '1 1 180px', minWidth: 160, marginBottom: 24}}>
          <div style={{fontWeight: 700, marginBottom: 10, color: '#36a2f5', fontSize: '1.1rem'}}>Quick Links</div>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, color: '#dbeafe', fontSize: '1.05rem', lineHeight: 2}}>
            <li><a href="/" style={{color: '#dbeafe', textDecoration: 'none', transition: 'color 0.2s'}} onMouseOver={e=>e.target.style.color='#36a2f5'} onMouseOut={e=>e.target.style.color='#dbeafe'}>About</a></li>
            <li><a href="/services" style={{color: '#dbeafe', textDecoration: 'none', transition: 'color 0.2s'}} onMouseOver={e=>e.target.style.color='#36a2f5'} onMouseOut={e=>e.target.style.color='#dbeafe'}>Services</a></li>
            <li><a href="/pricing" style={{color: '#dbeafe', textDecoration: 'none', transition: 'color 0.2s'}} onMouseOver={e=>e.target.style.color='#36a2f5'} onMouseOut={e=>e.target.style.color='#dbeafe'}>Price</a></li>
            <li><a href="/contact" style={{color: '#dbeafe', textDecoration: 'none', transition: 'color 0.2s'}} onMouseOver={e=>e.target.style.color='#36a2f5'} onMouseOut={e=>e.target.style.color='#dbeafe'}>Contact</a></li>
          </ul>
        </div>
        {/* Contact info & social */}
        <div style={{flex: '1 1 180px', minWidth: 160, marginBottom: 24}}>
          <div style={{fontWeight: 700, marginBottom: 10, color: '#36a2f5', fontSize: '1.1rem'}}>Contact</div>
          <div style={{color: '#dbeafe', fontSize: '1.05rem', marginBottom: 12}}>info.leadsprovider@gmail.com<br /></div>
          <div style={{color: '#dbeafe', fontSize: '1.05rem', marginBottom: 12}}>9214704237<br /></div>
          <div style={{display: 'flex', gap: 18, marginTop: 8}}>
            {/* Social icons (SVG) */}
            <a href="#" aria-label="LinkedIn" style={{color: '#dbeafe', transition: 'color 0.2s'}} onMouseOver={e=>e.target.style.color='#36a2f5'} onMouseOut={e=>e.target.style.color='#dbeafe'}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div style={{textAlign: 'center', color: '#b6c6e3', fontSize: '0.98rem', marginTop: '2.5rem', letterSpacing: 0.2}}>
        &copy; {new Date().getFullYear()} Leads Provider. All rights reserved.
      </div>
      {/* Responsive CSS for footer columns */}
      <style>{`
        @media (max-width: 900px) {
          footer > div { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  );
}

function Hero() {
  return (
    <section style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #185adb 0%, #0a2342 100%)',
      overflow: 'hidden',
      padding: '7.5rem 2vw 0 2vw',
      textAlign: 'center',
    }}>
      <svg style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none'}} viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#185adb" fillOpacity="0.18" d="M0,320 C360,480 1080,160 1440,320 L1440,0 L0,0 Z" />
        <path fill="#36a2f5" fillOpacity="0.10" d="M0,400 C400,600 1040,200 1440,400 L1440,0 L0,0 Z" />
      </svg>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{fontSize: '2.8rem', fontWeight: 900, color: '#fff', zIndex: 2, marginBottom: '1.2rem', textShadow: '0 2px 16px #0a234299', letterSpacing: 0.5, lineHeight: 1.15}}>
        Trusted SEO & Website Development Leads Provider
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        style={{fontSize: '1.3rem', color: '#dbeafe', zIndex: 2, maxWidth: 700, margin: '0 auto', textShadow: '0 1px 8px #0a234288', lineHeight: 1.5}}>
        10+ Years of Experience | 55+ Experts | 5000+ Leads Generated | 350+ Client Served<br />
        We deliver high-converting, pre-qualified SEO and website development leads to help your business grow. Focused on quality, transparency, and results.
      </motion.p>
      <svg style={{position: 'absolute', left: 0, bottom: 0, width: '100%', height: '120px', zIndex: 2, pointerEvents: 'none'}} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}

function ServicesPage() {
  return (
    <section style={{maxWidth: 1100, margin: '0 auto', padding: '110px 2vw 2rem 2vw'}}>
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '2.5rem', textAlign: 'center', letterSpacing: 0.5, textShadow: '0 2px 16px #0a234299'}}>Our Services</motion.h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center', marginBottom: '2.5rem'}}>
        {/* SEO Error Leads */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{flex: '1 1 300px', minWidth: 260, background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #185adb22', padding: '2rem 1.5rem', textAlign: 'center', color: '#0a2342', border: '1.5px solid #eaf1fb'}}>
          <div style={{fontSize: 40, marginBottom: 12}}>🔍</div>
          <h3 style={{fontWeight: 800, fontSize: '1.25rem', color: '#185adb'}}>SEO Error Leads</h3>
          <div style={{fontWeight: 700, color: '#36a2f5', margin: '0.5rem 0'}}>₹250/lead</div>
          <p style={{color: '#223a5f', fontSize: '1.05rem'}}>Websites or businesses with current SEO issues. Perfect for agencies pitching audits or repairs—easy to convert as the need is clear.</p>
        </motion.div>
        {/* SEO Leads */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{flex: '1 1 300px', minWidth: 260, background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #185adb22', padding: '2rem 1.5rem', textAlign: 'center', color: '#0a2342', border: '1.5px solid #eaf1fb'}}>
          <div style={{fontSize: 40, marginBottom: 12}}>📈</div>
          <h3 style={{fontWeight: 800, fontSize: '1.25rem', color: '#185adb'}}>SEO Leads</h3>
          <div style={{fontWeight: 700, color: '#36a2f5', margin: '0.5rem 0'}}>₹350–₹400/lead</div>
          <p style={{color: '#223a5f', fontSize: '1.05rem'}}>Businesses actively seeking SEO improvement. Ideal for long-term contracts: keyword ranking, content, backlinks, and more.</p>
        </motion.div>
        {/* Development Leads */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{flex: '1 1 300px', minWidth: 260, background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #185adb22', padding: '2rem 1.5rem', textAlign: 'center', color: '#0a2342', border: '1.5px solid #eaf1fb'}}>
          <div style={{fontSize: 40, marginBottom: 12}}>💻</div>
          <h3 style={{fontWeight: 800, fontSize: '1.25rem', color: '#185adb'}}>Development Leads</h3>
          <div style={{fontWeight: 700, color: '#36a2f5', margin: '0.5rem 0'}}>₹550–₹600/lead</div>
          <p style={{color: '#223a5f', fontSize: '1.05rem'}}>Clients looking for website creation, redesign, eCommerce, or custom dev. High-value, verified leads for agencies and freelancers.</p>
        </motion.div>
      </div>
      <motion.ul 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{color: '#dbeafe', fontWeight: 700, fontSize: '1.08rem', lineHeight: 2, maxWidth: 700, margin: '0 auto 2.5rem auto', textAlign: 'center'}}>
        <li>All leads are verified with email ID and password</li>
        <li>Fresh, niche-targeted, and ready to convert</li>
        <li>Key details provided for fast closing</li>
        <li>Volume discounts available for bulk orders</li>
      </motion.ul>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        style={{background: '#eaf1fb', borderRadius: 14, padding: '2rem 1.5rem', maxWidth: 700, margin: '0 auto', boxShadow: '0 2px 12px #185adb11', color: '#0a2342', border: '1.5px solid #dbeafe'}}>
        <h4 style={{color: '#185adb', fontWeight: 800, marginBottom: 10}}>Why Choose Us?</h4>
        <ul style={{color: '#223a5f', fontWeight: 500, fontSize: '1.05rem', lineHeight: 2, margin: 0, paddingLeft: 20, textAlign: 'left'}}>
          <li>With in 24 hours leads will tranfer to your email</li>
          <li>100% genuine, original leads—no fakes</li>
          <li>Fast delivery and dedicated support</li>
          <li>Flexible packages for agencies and freelancers</li>
          <li>Trusted by 350+ clients and agencies</li>
        </ul>
      </motion.div>
    </section>
  );
}

function PricingPage() {
  return (
    <section style={{maxWidth: 900, margin: '0 auto', padding: '110px 2vw 2rem 2vw'}}>
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '2.5rem', textAlign: 'center', letterSpacing: 0.5, textShadow: '0 2px 16px #0a234299'}}>Pricing</motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{overflowX: 'auto', marginBottom: '2.5rem'}}>
        <table style={{width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #185adb22', fontSize: '1.08rem', color: '#0a2342', border: '1.5px solid #eaf1fb'}}>
          <thead>
            <tr style={{background: '#eaf1fb', color: '#185adb', fontWeight: 700}}>
              <th style={{padding: '1rem 1.2rem', textAlign: 'left'}}>Lead Type</th>
              <th style={{padding: '1rem 1.2rem', textAlign: 'left'}}>Price per Lead</th>
              <th style={{padding: '1rem 1.2rem', textAlign: 'left'}}>Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '1rem 1.2rem'}}>SEO Error</td>
              <td style={{padding: '1rem 1.2rem'}}>₹250</td>
              <td style={{padding: '1rem 1.2rem'}}>Verified, easy to convert, audit/repair ready</td>
            </tr>
            <tr style={{background: '#eaf1fb'}}>
              <td style={{padding: '1rem 1.2rem'}}>SEO (Standard)</td>
              <td style={{padding: '1rem 1.2rem'}}>₹350–₹400</td>
              <td style={{padding: '1rem 1.2rem'}}>Actively seeking SEO, long-term value</td>
            </tr>
            <tr>
              <td style={{padding: '1rem 1.2rem'}}>Development</td>
              <td style={{padding: '1rem 1.2rem'}}>₹550–₹600</td>
              <td style={{padding: '1rem 1.2rem'}}>Web, eCommerce, custom dev, high-value</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{color: '#dbeafe', fontWeight: 700, fontSize: '1.08rem', marginBottom: '2rem', textAlign: 'center'}}>
        All leads include email ID and password for easy verification and fast follow-up.<br />Volume-based discounts available for bulk purchases.
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{background: '#eaf1fb', borderRadius: 14, padding: '2rem 1.5rem', maxWidth: 600, margin: '0 auto', boxShadow: '0 2px 12px #185adb11', color: '#0a2342', border: '1.5px solid #dbeafe'}}>
        <h4 style={{color: '#185adb', fontWeight: 800, marginBottom: 10}}>Why Buy From Us?</h4>
        <ul style={{color: '#223a5f', fontWeight: 500, fontSize: '1.05rem', lineHeight: 2, margin: 0, paddingLeft: 20, textAlign: 'left'}}>
          <li>100% verified, fresh, and niche-targeted leads</li>
          <li>Transparent pricing, no hidden fees</li>
          <li>Fast delivery and dedicated support</li>
          <li>Bulk discounts for agencies and resellers</li>
        </ul>
      </motion.div>
    </section>
  );
}

function ContactPage() {
  return (
    <section style={{maxWidth: 900, margin: '0 auto', padding: '110px 2vw 2rem 2vw'}}>
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '2.5rem', textAlign: 'center', letterSpacing: 0.5, textShadow: '0 2px 16px #0a234299'}}>Contact Us</motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center', marginBottom: '2.5rem'}}>
        {/* Contact Info */}
        <div style={{flex: '1 1 400px', minWidth: 320, background: '#13294b', borderRadius: 18, boxShadow: '0 2px 16px #185adb44', padding: '2.5rem 2rem', color: '#fff', border: '1.5px solid #36a2f5', display: 'flex', flexDirection: 'column', gap: 20}}>
          <div style={{fontWeight: 800, fontSize: '1.3rem', color: '#36a2f5', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8}}>
            <svg width="24" height="24" fill="#36a2f5" viewBox="0 0 24 24" style={{marginRight: 8}}><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
            9214704237
          </div>
          <div style={{fontWeight: 800, fontSize: '1.2rem', color: '#36a2f5', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8}}>
            <svg width="24" height="24" fill="#36a2f5" viewBox="0 0 24 24" style={{marginRight: 8}}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l8 6.99 8-6.99V20H4z"/></svg>
            info.leadsprovider@gmail.com
          </div>
          <div style={{fontWeight: 800, fontSize: '1.2rem', color: '#36a2f5', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8}}>
            <svg width="24" height="24" fill="#36a2f5" viewBox="0 0 24 24" style={{marginRight: 8}}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            <a href="https://www.linkedin.com/company/leadsprovider" target="_blank" rel="noopener noreferrer" style={{color: '#36a2f5', textDecoration: 'underline'}}>LinkedIn</a>
          </div>
          {/* <div style={{fontWeight: 800, fontSize: '1.1rem', color: '#36a2f5', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8}}>
            <svg width="24" height="24" fill="#36a2f5" viewBox="0 0 24 24" style={{marginRight: 8}}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            123 Main St, Suite 400, New York, NY 10001
          </div> */}
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{color: '#dbeafe', fontWeight: 700, fontSize: '1.08rem', marginTop: '2.5rem', textAlign: 'center'}}>
        We’re here to help you grow your business. Reach out to us for partnership opportunities, support, or just to say hello!
      </motion.div>
    </section>
  );
}

function ContactPageLayout() {
  return (
    <div style={{position: 'relative', minHeight: '100vh', background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #185adb 0%, #0a2342 100%)'}}>
      {/* Animated SVG background shapes */}
      <svg style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none'}} viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#185adb" fillOpacity="0.10" d="M0,320 C360,480 1080,160 1440,320 L1440,0 L0,0 Z" />
        <path fill="#36a2f5" fillOpacity="0.06" d="M0,400 C400,600 1040,200 1440,400 L1440,0 L0,0 Z" />
      </svg>
      <Navbar />
      <main style={{position: 'relative', zIndex: 2}}>
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}

function ServicesPageLayout() {
  return (
    <div style={{position: 'relative', minHeight: '100vh', background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #185adb 0%, #0a2342 100%)'}}>
      {/* Animated SVG background shapes */}
      <svg style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none'}} viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#185adb" fillOpacity="0.10" d="M0,320 C360,480 1080,160 1440,320 L1440,0 L0,0 Z" />
        <path fill="#36a2f5" fillOpacity="0.06" d="M0,400 C400,600 1040,200 1440,400 L1440,0 L0,0 Z" />
      </svg>
      <Navbar />
      <main style={{position: 'relative', zIndex: 2}}>
        <ServicesPage />
      </main>
      <Footer />
    </div>
  );
}

function PricingPageLayout() {
  return (
    <div style={{position: 'relative', minHeight: '100vh', background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #185adb 0%, #0a2342 100%)'}}>
      {/* Animated SVG background shapes */}
      <svg style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none'}} viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#185adb" fillOpacity="0.10" d="M0,320 C360,480 1080,160 1440,320 L1440,0 L0,0 Z" />
        <path fill="#36a2f5" fillOpacity="0.06" d="M0,400 C400,600 1040,200 1440,400 L1440,0 L0,0 Z" />
      </svg>
      <Navbar />
      <main style={{position: 'relative', zIndex: 2}}>
        <PricingPage />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const location = useLocation();
  return (
    <div style={{background: '#f5f8fd', minHeight: '100vh'}}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <main>
              <Hero />
              <TrustBar />
              <FeaturesSection />
              <AboutSection />
              <TestimonialsSection />
              <CTASection />
              <Footer />
            </main>
          } />
          <Route path="/services" element={<ServicesPageLayout />} />
          <Route path="/pricing" element={<PricingPageLayout />} />
          <Route path="/contact" element={<ContactPageLayout />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
