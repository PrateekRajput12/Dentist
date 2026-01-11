import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaTooth } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/treatments', label: 'Treatments' },
        { path: '/testimonials', label: 'Testimonials' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/contact', label: 'Contact' }
    ];

    const isActiveLink = (path) => location.pathname === path;

    return (
        <nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: isScrolled ? 'var(--bg-secondary)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
                transition: 'var(--transition)',
                padding: '1rem 0'
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            textDecoration: 'none',
                            color: 'var(--text-primary)',
                            fontSize: '1.5rem',
                            fontWeight: 'bold'
                        }}
                    >
                        <FaTooth style={{ color: 'var(--accent)' }} />
                        <span>DentalCare</span>
                    </Link>

                    <div
                        className="nav-links"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem'
                        }}
                    >
                        <div
                            className="desktop-menu"
                            style={{
                                display: 'flex',
                                gap: '2rem',
                                alignItems: 'center'
                            }}
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    style={{
                                        textDecoration: 'none',
                                        color: isActiveLink(link.path) ? 'var(--accent)' : 'var(--text-primary)',
                                        fontWeight: isActiveLink(link.path) ? '600' : '400',
                                        transition: 'var(--transition)',
                                        position: 'relative'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActiveLink(link.path)) {
                                            e.target.style.color = 'var(--primary)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActiveLink(link.path)) {
                                            e.target.style.color = 'var(--text-primary)';
                                        }
                                    }}
                                >
                                    {link.label}
                                    {isActiveLink(link.path) && (
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: '-5px',
                                                left: 0,
                                                right: 0,
                                                height: '2px',
                                                backgroundColor: 'var(--accent)',
                                                borderRadius: '2px'
                                            }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <ThemeToggle />

                            <button
                                className="mobile-menu-toggle"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1.5rem',
                                    color: 'var(--text-primary)',
                                    display: 'none',
                                    padding: '8px'
                                }}
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: 'var(--bg-secondary)',
                        boxShadow: 'var(--shadow-lg)',
                        borderRadius: '0 0 12px 12px',
                        maxHeight: isMobileMenuOpen ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'var(--transition)',
                        display: 'none'
                    }}
                >
                    <div style={{ padding: '1rem' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    display: 'block',
                                    padding: '1rem',
                                    textDecoration: 'none',
                                    color: isActiveLink(link.path) ? 'var(--accent)' : 'var(--text-primary)',
                                    fontWeight: isActiveLink(link.path) ? '600' : '400',
                                    borderRadius: '8px',
                                    transition: 'var(--transition)',
                                    marginBottom: '0.5rem'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActiveLink(link.path)) {
                                        e.target.style.backgroundColor = 'var(--bg-primary)';
                                        e.target.style.color = 'var(--primary)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActiveLink(link.path)) {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = 'var(--text-primary)';
                                    }
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: block !important;
          }
          
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
