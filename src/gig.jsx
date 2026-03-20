import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Home, FileText, User, Settings, LogOut, DollarSign, ShieldCheck, TrendingUp, CheckCircle, Clock, XCircle, CloudRain, AlertTriangle, Users, Activity, BarChart3, Phone, Mail, MapPin, ChevronDown, Star } from 'lucide-react';

const GigCrestApp = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedZone, setSelectedZone] = useState('Zone A');
  const [selectedEvent, setSelectedEvent] = useState('rain');
  const [severity, setSeverity] = useState('T2');
  const [activeSection, setActiveSection] = useState('home');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth < 1024;

  // Close sidebar when switching views
  useEffect(() => {
    setSidebarOpen(false);
  }, [currentView]);

  const workerData = {
    totalEarnings: '₹14,230',
    coverageStatus: 'Active',
    totalClaims: 4,
    protectionPercent: 83,
    currentWeather: 'Rain',
    riskLevel: 'Medium',
    activePlan: {
      type: 'Weekly Premium',
      premium: '₹49',
      coverage: '₹5,500',
      validUntil: '31 Dec 2026'
    },
    recentClaims: [
      { id: 'CLM001', event: 'Heavy Rain', amount: '₹1,800', status: 'Approved' },
      { id: 'CLM002', event: 'Heatwave', amount: '₹1,200', status: 'Processing' },
      { id: 'CLM003', event: 'Poor AQI', amount: '₹1,000', status: 'Approved' }
    ],
    incomeProtection: {
      totalLost: '₹4,340',
      recovered: '₹3,506',
      protectionRate: 80.8
    }
  };

  const adminData = {
    totalWorkers: 2700,
    activePolicies: 2100,
    totalClaims: 556,
    totalPayouts: '₹18.2k',
    fraudAlerts: 217,
    liveEvents: [
      { zone: 'Zone A', event: 'Heavy Rain', severity: 'T3', workers: 479 },
      { zone: 'Zone B', event: 'Heatwave', severity: 'T2', workers: 295 },
      { zone: 'Zone C', event: 'Poor AQI', severity: 'T4', workers: 550 }
    ],
    claimsToday: {
      total: 58,
      approved: 18,
      pending: 20,
      rejected: 20
    },
    fraudulentClaims: [
      { id: 'CLM9876', worker: 'Worker #1234', risk: 85, reason: 'GPS Mismatch' },
      { id: 'CLM9877', worker: 'Worker #5678', risk: 72, reason: 'Duplicate Claim' },
      { id: 'CLM9878', worker: 'Worker #9012', risk: 68, reason: 'Abnormal Pattern' }
    ]
  };

  const faqData = [
    {
      question: "What is GigCrest and how does it work?",
      answer: "GigCrest is a weather-based parametric insurance platform designed specifically for gig economy workers. When adverse weather conditions like heavy rain, extreme heat, or poor air quality affect your ability to work, our system automatically detects it and processes your claim within an hour."
    },
    {
      question: "How much does GigCrest coverage cost?",
      answer: "Our plans start at just ₹99 per week, which provides coverage up to ₹50,000. We also offer monthly plans at ₹349 with enhanced coverage up to ₹2,00,000. The premium is automatically deducted from your gig platform earnings."
    },
    {
      question: "How quickly will I receive my payout?",
      answer: "Once an eligible weather event is detected and verified through our automated system, payouts are processed within 1 hour directly to your linked bank account or UPI. No paperwork or manual claims needed!"
    },
    {
      question: "What weather events are covered under GigCrest?",
      answer: "We cover heavy rainfall (above 50mm), extreme heat (above 42°C), poor air quality (AQI above 300), flooding, cyclones, and other severe weather conditions that impact outdoor work. Coverage varies by plan tier."
    },
    {
      question: "Can I use GigCrest if I work for multiple gig platforms?",
      answer: "Absolutely! GigCrest works across all major gig platforms including Swiggy, Zomato, Uber, Ola, Dunzo, and more. One subscription covers your work across all platforms."
    }
  ];

  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Swiggy Delivery Partner",
      rating: 5,
      text: "Last monsoon, I lost almost ₹15,000 due to heavy rains. With GigCrest, I recovered 85% of my lost income automatically. The payout came within 45 minutes!",
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      role: "Blinkit Delivery Partner",
      rating: 5,
      text: "The heatwave in May made it impossible to work during peak hours. GigCrest covered my losses without me having to file any paperwork. Truly automated!",
      avatar: "PS"
    },
    {
      name: "Mohammed Irfan",
      role: "Zomato Delivery Partner",
      rating: 5,
      text: "I was skeptical at first, but when I received ₹1,500 during the Delhi AQI crisis, I became a believer. Every gig worker needs this protection.",
      avatar: "MI"
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (currentView !== 'landing') return;

    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      alert(`Thank you ${contactForm.name}! We've received your message and will get back to you within 24 hours.`);
      setContactForm({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Stat card component
  const StatCard = ({ icon, iconBg, iconColor, label, value, valueColor, border }) => (
    <div style={{
      background: 'white', padding: isMobile ? '18px' : '22px', borderRadius: '15px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)', display: 'flex', gap: '15px', alignItems: 'center',
      border: border || 'none'
    }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {React.createElement(icon, { size: 22, color: iconColor })}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>{label}</div>
        <div style={{ fontSize: isMobile ? '1.3rem' : '1.6rem', fontWeight: 800, color: valueColor || '#1a1a1a' }}>{value}</div>
      </div>
    </div>
  );

  // Worker Dashboard
  if (currentView === 'worker') {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
        {/* Mobile Top Bar */}
        <div style={{
          display: isMobile ? 'flex' : 'none',
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001,
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          padding: '12px 16px', alignItems: 'center', justifyContent: 'space-between',
          boxShadow: '0 2px 15px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontSize: '18px', fontWeight: 700 }}>
            <Shield size={22} />
            <span>GigCrest</span>
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', cursor: 'pointer', padding: '8px', borderRadius: '8px' }}>
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && isMobile && (
          <div onClick={() => setSidebarOpen(false)} style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.6)', zIndex: 998
          }} />
        )}

        {/* Sidebar */}
        <div style={{
          width: isMobile ? '280px' : '260px',
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
          color: 'white',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          height: isMobile ? 'calc(100vh - 56px)' : '100vh',
          top: isMobile ? '56px' : 0,
          left: isMobile ? (sidebarOpen ? 0 : '-280px') : 0,
          zIndex: isMobile ? 999 : 'auto',
          transition: 'left 0.3s ease',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}>
          {/* Desktop Logo */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '22px', fontWeight: 700, marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <Shield size={26} />
              <span>GigCrest</span>
            </div>
          )}

          {/* Navigation */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
            <a style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.1)', color: 'white', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '15px' }}>
              <Home size={18} /> Dashboard
            </a>
            <a style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '15px' }}>
              <FileText size={18} /> My Claims
            </a>
            <a style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '15px' }}>
              <ShieldCheck size={18} /> My Plan
            </a>
            <a style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '15px' }}>
              <User size={18} /> Profile
            </a>
            <a style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '15px' }}>
              <Settings size={18} /> Settings
            </a>
          </nav>

          {/* Spacer */}
          <div style={{ flex: 1, minHeight: '20px' }} />

          {/* Back to Home Button - Always visible */}
          <div style={{
            position: 'sticky',
            bottom: 0,
            background: 'linear-gradient(180deg, transparent 0%, #0f172a 20%)',
            paddingTop: '30px',
            paddingBottom: '10px',
            marginTop: 'auto'
          }}>
            <button onClick={() => { setCurrentView('landing'); setSidebarOpen(false); }} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              padding: '14px 16px', width: '100%',
              background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
              border: 'none', borderRadius: '10px',
              color: 'white', fontWeight: 600, cursor: 'pointer', fontSize: '15px',
              boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)'
            }}>
              <LogOut size={18} /> Back to Home
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          marginLeft: isMobile ? 0 : '260px',
          padding: isMobile ? '70px 15px 30px' : '25px 30px',
          overflowY: 'auto',
          minHeight: '100vh'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
            <h1 style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', color: '#1a1a1a', fontWeight: 700 }}>Worker Dashboard</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {!isMobile && <span style={{ color: '#64748b', fontSize: '14px' }}>Welcome, Rajesh Kumar</span>}
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', fontSize: '14px' }}>RK</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '15px', marginBottom: '25px' }}>
            <StatCard icon={DollarSign} iconBg="#dbeafe" iconColor="#2563eb" label="Total Earnings (Last 15-months)" value={workerData.totalEarnings} />
            <StatCard icon={ShieldCheck} iconBg="#dcfce7" iconColor="#16a34a" label="Coverage Status" value={workerData.coverageStatus} valueColor="#16a34a" />
            <StatCard icon={FileText} iconBg="#fef3c7" iconColor="#ca8a04" label="Total Claims" value={workerData.totalClaims} />
            <StatCard icon={TrendingUp} iconBg="#fce7f3" iconColor="#db2777" label="Protection %" value={`${workerData.protectionPercent}%`} />
          </div>

          {/* Active Plan Card */}
          <div style={{ background: 'white', padding: isMobile ? '20px' : '25px', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '18px', color: '#1a1a1a', fontWeight: 700 }}>🛡️ Active Plan</h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '15px' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>Plan Type</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a1a' }}>{workerData.activePlan.type}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>Premium</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#2563eb' }}>{workerData.activePlan.premium}/week</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>Coverage</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#16a34a' }}>{workerData.activePlan.coverage}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>Valid Until</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a1a' }}>{workerData.activePlan.validUntil}</div>
              </div>
            </div>
          </div>

          {/* Income Protection Tracker */}
          <div style={{ background: 'white', padding: isMobile ? '20px' : '25px', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '18px', color: '#1a1a1a', fontWeight: 700 }}>💰 Income Protection Tracker</h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '15px', marginBottom: '18px' }}>
              <div style={{ textAlign: 'center', padding: '18px', background: '#fef2f2', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '6px' }}>Total Income Lost</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#dc2626' }}>{workerData.incomeProtection.totalLost}</div>
              </div>
              <div style={{ textAlign: 'center', padding: '18px', background: '#f0fdf4', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '6px' }}>Amount Recovered</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#16a34a' }}>{workerData.incomeProtection.recovered}</div>
              </div>
              <div style={{ textAlign: 'center', padding: '18px', background: '#eff6ff', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '6px' }}>Protection Rate</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#2563eb' }}>{workerData.incomeProtection.protectionRate}%</div>
              </div>
            </div>
            <div style={{ height: '10px', background: '#e2e8f0', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${workerData.incomeProtection.protectionRate}%`, background: 'linear-gradient(90deg, #16a34a, #22c55e)', borderRadius: '5px', transition: 'width 1s ease' }}></div>
            </div>
          </div>

          {/* Recent Claims */}
          <div style={{ background: 'white', padding: isMobile ? '20px' : '25px', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '18px', color: '#1a1a1a', fontWeight: 700 }}>📋 Recent Claims</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '400px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Claim ID</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Event</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Amount</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {workerData.recentClaims.map((claim, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '12px', fontWeight: 600, color: '#1a1a1a', fontSize: '0.9rem' }}>{claim.id}</td>
                      <td style={{ padding: '12px', color: '#4a5568', fontSize: '0.9rem' }}>{claim.event}</td>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#16a34a', fontSize: '0.9rem' }}>{claim.amount}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{
                          padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
                          background: claim.status === 'Approved' ? '#dcfce7' : claim.status === 'Processing' ? '#fef3c7' : '#fee2e2',
                          color: claim.status === 'Approved' ? '#16a34a' : claim.status === 'Processing' ? '#ca8a04' : '#dc2626'
                        }}>
                          {claim.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  if (currentView === 'admin') {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
        {/* Mobile Top Bar */}
        <div style={{
          display: isMobile ? 'flex' : 'none',
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001,
          background: 'linear-gradient(135deg, #1b4332 0%, #0f2419 100%)',
          padding: '12px 16px', alignItems: 'center', justifyContent: 'space-between',
          boxShadow: '0 2px 15px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontSize: '18px', fontWeight: 700 }}>
            <Shield size={22} />
            <span>GigCrest Admin</span>
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', cursor: 'pointer', padding: '8px', borderRadius: '8px' }}>
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && isMobile && (
          <div onClick={() => setSidebarOpen(false)} style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.6)', zIndex: 998
          }} />
        )}

        {/* Sidebar */}
        <div style={{
          width: isMobile ? '280px' : '260px',
          background: 'linear-gradient(180deg, #1b4332 0%, #0f2419 100%)',
          color: 'white',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          height: isMobile ? 'calc(100vh - 56px)' : '100vh',
          top: isMobile ? '56px' : 0,
          left: isMobile ? (sidebarOpen ? 0 : '-280px') : 0,
          zIndex: isMobile ? 999 : 'auto',
          transition: 'left 0.3s ease',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}>
          {/* Desktop Logo */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '20px', fontWeight: 700, marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <Shield size={24} />
              <span>GigCrest Admin</span>
            </div>
          )}

          {/* Navigation */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
            <a style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.1)', color: 'white', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '15px' }}>
              <BarChart3 size={18} /> Analytics
            </a>
            <a style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '15px' }}>
              <Activity size={18} /> Live Events
            </a>
            <a style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '15px' }}>
              <AlertTriangle size={18} /> Fraud Detection
            </a>
            <a style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '15px' }}>
              <Users size={18} /> Workers
            </a>
            <a style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '15px' }}>
              <FileText size={18} /> Claims
            </a>
            <a style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', fontSize: '15px' }}>
              <Settings size={18} /> Settings
            </a>
          </nav>

          {/* Spacer */}
          <div style={{ flex: 1, minHeight: '20px' }} />

          {/* Back to Home Button - Always visible */}
          <div style={{
            position: 'sticky',
            bottom: 0,
            background: 'linear-gradient(180deg, transparent 0%, #0f2419 20%)',
            paddingTop: '30px',
            paddingBottom: '10px',
            marginTop: 'auto'
          }}>
            <button onClick={() => { setCurrentView('landing'); setSidebarOpen(false); }} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              padding: '14px 16px', width: '100%',
              background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
              border: 'none', borderRadius: '10px',
              color: 'white', fontWeight: 600, cursor: 'pointer', fontSize: '15px',
              boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)'
            }}>
              <LogOut size={18} /> Back to Home
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          marginLeft: isMobile ? 0 : '260px',
          padding: isMobile ? '70px 15px 30px' : '25px 30px',
          overflowY: 'auto',
          minHeight: '100vh'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
            <h1 style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', color: '#1a1a1a', fontWeight: 700 }}>Admin Dashboard</h1>
            <button onClick={() => alert(`Event Simulation:\nZone: ${selectedZone}\nEvent: ${selectedEvent}\nSeverity: ${severity}\n\nGenerating claims, payouts, and fraud analysis...`)} style={{
              padding: '10px 20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white', border: 'none', borderRadius: '10px', fontWeight: 600, cursor: 'pointer', fontSize: '14px'
            }}>
              🎮 Run Simulation
            </button>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: '15px', marginBottom: '25px' }}>
            <StatCard icon={Users} iconBg="#dbeafe" iconColor="#2563eb" label="Total Workers" value={`${(adminData.totalWorkers / 1000).toFixed(1)}K`} />
            <StatCard icon={ShieldCheck} iconBg="#dcfce7" iconColor="#16a34a" label="Active Policies" value={`${(adminData.activePolicies / 1000).toFixed(1)}K`} />
            <StatCard icon={FileText} iconBg="#fef3c7" iconColor="#ca8a04" label="Total Claims" value={`${(adminData.totalClaims / 1).toFixed(0)}`} />
            <StatCard icon={DollarSign} iconBg="#d1fae5" iconColor="#059669" label="Total Payouts" value={adminData.totalPayouts} />
            <StatCard icon={AlertTriangle} iconBg="#fee2e2" iconColor="#dc2626" label="Fraud Alerts" value={adminData.fraudAlerts} valueColor="#dc2626" border="2px solid #fecaca" />
          </div>

          {/* Event Simulation Panel */}
          <div style={{ background: 'white', padding: isMobile ? '20px' : '25px', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#1a1a1a', fontWeight: 700 }}>🎮 Event Simulation Panel</h3>
            <p style={{ color: '#64748b', marginBottom: '18px', fontSize: '0.9rem' }}>Simulate real-world events to test system response</p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '12px' }}>
              <div>
                <label style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.85rem', marginBottom: '6px', display: 'block' }}>Select Zone</label>
                <select value={selectedZone} onChange={(e) => setSelectedZone(e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem', cursor: 'pointer' }}>
                  <option>Zone A</option>
                  <option>Zone B</option>
                  <option>Zone C</option>
                </select>
              </div>
              <div>
                <label style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.85rem', marginBottom: '6px', display: 'block' }}>Choose Event</label>
                <select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem', cursor: 'pointer' }}>
                  <option value="rain">Heavy Rain</option>
                  <option value="heat">Heatwave</option>
                  <option value="aqi">Poor AQI</option>
                </select>
              </div>
              <div>
                <label style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.85rem', marginBottom: '6px', display: 'block' }}>Set Severity</label>
                <select value={severity} onChange={(e) => setSeverity(e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem', cursor: 'pointer' }}>
                  <option value="T1">T1 - Low</option>
                  <option value="T2">T2 - Medium</option>
                  <option value="T3">T3 - High</option>
                  <option value="T4">T4 - Extreme</option>
                </select>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button onClick={() => alert(`Simulation Running:\nZone: ${selectedZone}\nEvent: ${selectedEvent}\nSeverity: ${severity}\n\nGenerating claims, payouts, and fraud analysis...`)} style={{
                  width: '100%', padding: '10px 20px', background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                  color: 'white', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer'
                }}>
                  🚀 Run
                </button>
              </div>
            </div>
          </div>

          {/* Live Events */}
          <div style={{ background: 'white', padding: isMobile ? '20px' : '25px', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '18px', color: '#1a1a1a', fontWeight: 700 }}>📡 Live Weather Events</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {adminData.liveEvents.map((event, index) => (
                <div key={index} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px',
                  padding: '14px 16px', background: '#f8fafc', borderRadius: '12px',
                  borderLeft: `4px solid ${event.severity === 'T4' ? '#dc2626' : event.severity === 'T3' ? '#f97316' : event.severity === 'T2' ? '#eab308' : '#22c55e'}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CloudRain size={18} color="#64748b" />
                    <div>
                      <div style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.95rem' }}>{event.zone} - {event.event}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{event.workers.toLocaleString()} workers affected</div>
                    </div>
                  </div>
                  <span style={{
                    padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700,
                    background: event.severity === 'T4' ? '#fee2e2' : event.severity === 'T3' ? '#ffedd5' : event.severity === 'T2' ? '#fef9c3' : '#dcfce7',
                    color: event.severity === 'T4' ? '#dc2626' : event.severity === 'T3' ? '#ea580c' : event.severity === 'T2' ? '#ca8a04' : '#16a34a'
                  }}>
                    {event.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Claims Today */}
          <div style={{ background: 'white', padding: isMobile ? '20px' : '25px', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '18px', color: '#1a1a1a', fontWeight: 700 }}>📊 Claims Today</h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '12px' }}>
              <div style={{ textAlign: 'center', padding: '16px', background: '#eff6ff', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>Total</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb' }}>{adminData.claimsToday.total.toLocaleString()}</div>
              </div>
              <div style={{ textAlign: 'center', padding: '16px', background: '#f0fdf4', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>Approved</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#16a34a' }}>{adminData.claimsToday.approved.toLocaleString()}</div>
              </div>
              <div style={{ textAlign: 'center', padding: '16px', background: '#fefce8', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>Pending</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ca8a04' }}>{adminData.claimsToday.pending.toLocaleString()}</div>
              </div>
              <div style={{ textAlign: 'center', padding: '16px', background: '#fef2f2', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>Rejected</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#dc2626' }}>{adminData.claimsToday.rejected.toLocaleString()}</div>
              </div>
            </div>
          </div>

          {/* Fraud Detection */}
          <div style={{ background: 'white', padding: isMobile ? '20px' : '25px', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '18px', color: '#1a1a1a', fontWeight: 700 }}>🚨 Fraud Detection</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '450px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Claim ID</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Worker</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Risk Score</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {adminData.fraudulentClaims.map((claim, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '12px', fontWeight: 600, color: '#dc2626', fontSize: '0.9rem' }}>{claim.id}</td>
                      <td style={{ padding: '12px', color: '#4a5568', fontSize: '0.9rem' }}>{claim.worker}</td>
                      <td style={{ padding: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '50px', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${claim.risk}%`, background: claim.risk >= 80 ? '#dc2626' : claim.risk >= 60 ? '#f97316' : '#eab308', borderRadius: '3px' }}></div>
                          </div>
                          <span style={{ fontWeight: 700, color: claim.risk >= 80 ? '#dc2626' : claim.risk >= 60 ? '#f97316' : '#ca8a04', fontSize: '0.85rem' }}>{claim.risk}%</span>
                        </div>
                      </td>
                      <td style={{ padding: '12px', fontSize: '0.9rem', color: '#4a5568' }}>{claim.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Landing Page
  return (
    <div style={{ background: '#f8faf9', minHeight: '100vh' }}>
      {/* Fixed Navigation Header */}
      <div style={{
        padding: isMobile ? '12px 16px' : '15px 50px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(10px)',
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        boxShadow: '0 2px 20px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => scrollToSection('home')}>
          <div style={{ width: '36px', height: '36px', background: '#2563eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <Shield size={20} />
          </div>
          <div style={{ fontSize: isMobile ? '20px' : '26px', fontWeight: 700, color: '#1a1a1a' }}>GigCrest</div>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && !isTablet && (
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none', border: 'none', fontSize: '15px',
                  fontWeight: activeSection === item.id ? 700 : 500,
                  color: activeSection === item.id ? '#2563eb' : '#64748b',
                  cursor: 'pointer', padding: '8px 0',
                  borderBottom: activeSection === item.id ? '2px solid #2563eb' : '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {!isMobile && (
            <>
              <button onClick={() => setCurrentView('worker')} style={{ padding: '9px 18px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}>Worker</button>
              <button onClick={() => setCurrentView('admin')} style={{ padding: '9px 18px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}>Admin</button>
            </>
          )}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: isMobile || isTablet ? 'flex' : 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '6px', alignItems: 'center', justifyContent: 'center' }}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Slide-in Menu */}
      {isMenuOpen && (
        <>
          <div onClick={() => setIsMenuOpen(false)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', zIndex: 998 }} />
          <div style={{
            position: 'fixed', top: 0, right: 0, width: isMobile ? '100%' : '300px', height: '100vh',
            background: 'white', boxShadow: '-5px 0 30px rgba(0,0,0,0.15)', zIndex: 999,
            padding: '70px 20px 30px', display: 'flex', flexDirection: 'column', gap: '5px',
            overflowY: 'auto'
          }}>
            <button onClick={() => setIsMenuOpen(false)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}>
              <X size={28} />
            </button>

            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: activeSection === item.id ? '#eff6ff' : 'none', border: 'none',
                  fontSize: '16px', fontWeight: 600,
                  color: activeSection === item.id ? '#2563eb' : '#1a1a1a',
                  cursor: 'pointer', padding: '14px 16px', textAlign: 'left', borderRadius: '10px'
                }}
              >
                {item.label}
              </button>
            ))}
            <div style={{ borderTop: '1px solid #e2e8f0', margin: '15px 0' }} />
            <button onClick={() => { setCurrentView('worker'); setIsMenuOpen(false); }} style={{ padding: '14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 600, cursor: 'pointer', fontSize: '15px' }}>Worker Dashboard</button>
            <button onClick={() => { setCurrentView('admin'); setIsMenuOpen(false); }} style={{ padding: '14px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 600, cursor: 'pointer', fontSize: '15px', marginTop: '8px' }}>Admin Dashboard</button>
          </div>
        </>
      )}

      {/* Hero Section */}
      <section id="home" style={{ paddingTop: isMobile ? '80px' : '100px' }}>
        <div style={{
          maxWidth: isMobile ? '95%' : '500px', margin: '20px auto 40px',
          background: 'linear-gradient(180deg, #dce9f5 0%, #ffffff 30%)',
          borderRadius: isMobile ? '30px' : '40px', border: '4px solid #1a5fa8',
          boxShadow: '0 25px 80px rgba(0,0,0,0.2)', overflow: 'hidden', position: 'relative'
        }}>
          <div style={{ padding: isMobile ? '20px 20px 30px' : '20px 30px 40px', display: 'flex', alignItems: 'center', gap: '20px', flexDirection: isMobile ? 'column' : 'row' }}>
            <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
              <h1 style={{ fontSize: isMobile ? '28px' : '38px', fontWeight: 800, lineHeight: 1.2, color: '#1a1a1a', marginBottom: '8px' }}>Smart production for Morden Hustle.</h1>
              <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#4a5568', marginBottom: '20px', fontWeight: 500 }}>Insurance for the gig economy.</p>
            </div>
            {!isMobile && (
              <div style={{ width: '280px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="delivery.png" alt="Delivery" style={{ width: '220px', height: 'auto', filter: 'drop-shadow(0 10px 30px rgba(37, 99, 235, 0.2))' }} />
              </div>
            )}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '20px', padding: isMobile ? '20px' : '25px 30px', margin: isMobile ? '0 20px 25px' : '0 30px 30px',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: isMobile ? '10px' : '20px',
            boxShadow: '0 15px 40px rgba(15, 23, 42, 0.4)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: isMobile ? '22px' : '32px', fontWeight: 800, color: 'white', marginBottom: '5px' }}>3K+</div>
              <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#94a3b8', fontWeight: 500 }}>Workers</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: isMobile ? '22px' : '32px', fontWeight: 800, color: 'white', marginBottom: '5px' }}>₹49/</div>
              <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#94a3b8', fontWeight: 500 }}>Buy Week</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: isMobile ? '22px' : '32px', fontWeight: 800, color: 'white', marginBottom: '5px' }}>&lt;1hr</div>
              <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#94a3b8', fontWeight: 500 }}>Payout</div>
            </div>
          </div>

          <div style={{ padding: isMobile ? '0 20px 30px' : '0 30px 40px' }}>
            <button onClick={() => setCurrentView('worker')} style={{
              width: '100%', padding: isMobile ? '16px' : '20px', background: '#2563eb', color: 'white',
              border: 'none', borderRadius: '50px', fontSize: isMobile ? '16px' : '18px', fontWeight: 700,
              cursor: 'pointer', boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)'
            }}>
              Register Now
            </button>
          </div>

          <div style={{ height: '5px', background: '#1a1a1a', borderRadius: '0 0 36px 36px', width: '40%', margin: '0 auto' }}></div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" style={{ padding: isMobile ? '50px 20px' : '100px 50px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight: 800, color: '#1a1a1a', marginBottom: '20px' }}>About GigCrest</h2>
              <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#64748b', lineHeight: 1.8, marginBottom: '20px' }}>
                GigCrest was born from a simple observation: millions of gig workers in India lose income every day due to weather conditions beyond their control. We're here to change that.
              </p>
              <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#64748b', lineHeight: 1.8, marginBottom: '30px' }}>
                Our mission is to provide affordable, instant, and hassle-free insurance coverage to every gig economy worker in India.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontWeight: 600, fontSize: isMobile ? '14px' : '16px' }}><CheckCircle size={18} /> No Paperwork</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontWeight: 600, fontSize: isMobile ? '14px' : '16px' }}><CheckCircle size={18} /> Instant Claims</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontWeight: 600, fontSize: isMobile ? '14px' : '16px' }}><CheckCircle size={18} /> 24/7 Coverage</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
              {[
                { icon: Users, color: '#2563eb', bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', value: '3K+', label: 'Workers Protected' },
                { icon: DollarSign, color: '#16a34a', bg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)', value: '₹20K+', label: 'Claims Paid' },
                { icon: Clock, color: '#ca8a04', bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', value: '<1hr', label: 'Avg Payout Time' },
                { icon: TrendingUp, color: '#db2777', bg: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)', value: '84%', label: 'Income Protected' }
              ].map((stat, i) => (
                <div key={i} style={{ background: stat.bg, padding: isMobile ? '20px' : '25px', borderRadius: '16px', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  {React.createElement(stat.icon, { size: isMobile ? 32 : 36, color: stat.color, style: { marginBottom: '12px' } })}
                  <div style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 800, color: '#1a1a1a' }}>{stat.value}</div>
                  <div style={{ fontSize: isMobile ? '13px' : '15px', color: '#64748b', fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ padding: isMobile ? '50px 20px' : '100px 50px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
            <h2 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight: 800, color: '#1a1a1a', marginBottom: '15px' }}>What Our Workers Say</h2>
            <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Real stories from gig workers who've experienced the GigCrest difference.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: '25px' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  background: 'white', padding: isMobile ? '25px' : '30px', borderRadius: '18px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'; }}
              >
                <div style={{ display: 'flex', gap: '3px', marginBottom: '18px' }}>
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.7, marginBottom: '22px', fontStyle: 'italic' }}>"{testimonial.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', fontSize: '14px' }}>{testimonial.avatar}</div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>{testimonial.name}</div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ padding: isMobile ? '50px 20px' : '100px 50px', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
            <h2 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight: 800, color: '#1a1a1a', marginBottom: '15px' }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#64748b' }}>Everything you need to know about GigCrest.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqData.map((faq, index) => (
              <div key={index} style={{
                background: '#f8fafc', borderRadius: '14px', overflow: 'hidden',
                border: openFAQ === index ? '2px solid #2563eb' : '2px solid transparent',
                transition: 'all 0.3s ease'
              }}>
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  style={{
                    width: '100%', padding: isMobile ? '18px' : '22px 25px', background: 'none', border: 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'pointer', textAlign: 'left', gap: '12px'
                  }}
                >
                  <span style={{ fontSize: isMobile ? '15px' : '17px', fontWeight: 600, color: '#1a1a1a' }}>{faq.question}</span>
                  <ChevronDown size={22} color="#64748b" style={{ transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease', flexShrink: 0 }} />
                </button>
                <div style={{ maxHeight: openFAQ === index ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                  <p style={{ padding: isMobile ? '0 18px 18px' : '0 25px 22px', fontSize: isMobile ? '14px' : '15px', color: '#64748b', lineHeight: 1.7 }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: isMobile ? '50px 20px' : '100px 50px', background: 'linear-gradient(135deg, #0f4c3a 0%, #1b4332 50%, #0f2419 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '60px', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight: 800, color: 'white', marginBottom: '20px' }}>Get In Touch</h2>
              <p style={{ fontSize: isMobile ? '16px' : '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '35px' }}>Have questions? We're here to help. Reach out to our team and we'll get back to you within 24 hours.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: Phone, label: 'Phone', value: '+91 1800-GIG-HELP' },
                  { icon: Mail, label: 'Email', value: 'support@gigcrest.in' },
                  { icon: MapPin, label: 'Address', value: 'WeWork, Cyber City, Gurugram' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {React.createElement(item.icon, { size: 22, color: '#4ade80' })}
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>{item.label}</div>
                      <div style={{ fontSize: isMobile ? '15px' : '17px', color: 'white', fontWeight: 600 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', padding: isMobile ? '25px' : '35px', borderRadius: '18px', boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a', marginBottom: '25px' }}>Send us a message</h3>
              <form onSubmit={handleContactSubmit}>
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginBottom: '6px' }}>Your Name</label>
                  <input type="text" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} placeholder="Enter your name" style={{ width: '100%', padding: '14px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginBottom: '6px' }}>Email Address</label>
                  <input type="email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} placeholder="Enter your email" style={{ width: '100%', padding: '14px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '22px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginBottom: '6px' }}>Message</label>
                  <textarea value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} placeholder="How can we help you?" rows={4} style={{ width: '100%', padding: '14px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '15px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 25px rgba(22, 163, 74, 0.3)' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f172a', padding: isMobile ? '30px 20px' : '40px 20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
          <div style={{ width: '32px', height: '32px', background: '#2563eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <Shield size={18} />
          </div>
          <div style={{ fontSize: '22px', fontWeight: 700, color: 'white' }}>GigCrest</div>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>© 2025 GigCrest. All rights reserved. | Protecting India's Gig Workers</p>
      </footer>
    </div>
  );
};

export default GigCrestApp;