import React, { useState, useEffect } from 'react';
import './SectionNav.css';

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('applicant-information');

  const navItems = [
    { id: 'applicant-information', label: 'Applicant Information' },
    { id: 'loan-details', label: 'Loan Details' },
    { id: 'disbursements-information', label: 'Disbursements Information' },
    { id: 'commission', label: 'Commission' },
    { id: 'broker-information', label: 'Broker Information' },
    { id: 'additional-information', label: 'Additional Information' },
  ];

  useEffect(() => {
    // 1. Find all corresponding target elements on the page
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    // 2. Set up IntersectionObserver to track visible sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Triggers when section enters the upper-middle section of viewport
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="section-nav">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, item.id)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default SectionNav;