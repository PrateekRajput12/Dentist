import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const clinicInfo = {
        name: 'DentalCare Clinic',
        address: '123 Medical Center Drive, City, State 12345',
        phone: '+1 (555) 123-4567',
        email: 'info@dentalcare.com',
        workingHours: {
            monday: '9:00 AM - 6:00 PM',
            tuesday: '9:00 AM - 6:00 PM',
            wednesday: '9:00 AM - 6:00 PM',
            thursday: '9:00 AM - 6:00 PM',
            friday: '9:00 AM - 6:00 PM',
            saturday: '9:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    };

    const socialLinks = [
        { icon: FaFacebook, href: '#', label: 'Facebook' },
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
        { icon: FaLinkedin, href: '#', label: 'LinkedIn' }
    ];

    return (
        <footer
            style={{
                backgroundColor: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border)',
                padding: '3rem 0 1rem',
                marginTop: '4rem'
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginBottom: '2rem'
                    }}
                >
                    {/* Clinic Info */}
                    <div>
                        <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                            {clinicInfo.name}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            Providing exceptional dental care with a focus on patient comfort and satisfaction.
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                marginTop: '1rem'
                            }}
                        >
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'var(--text-primary)',
                                        textDecoration: 'none',
                                        transition: 'var(--transition)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'var(--accent)';
                                        e.target.style.color = 'white';
                                        e.target.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'var(--bg-primary)';
                                        e.target.style.color = 'var(--text-primary)';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                            Contact Info
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    color: 'var(--text-secondary)'
                                }}
                            >
                                <FaPhone style={{ color: 'var(--accent)' }} />
                                <a
                                    href={`tel:${clinicInfo.phone}`}
                                    style={{
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        transition: 'var(--transition)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = 'var(--text-secondary)';
                                    }}
                                >
                                    {clinicInfo.phone}
                                </a>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    color: 'var(--text-secondary)'
                                }}
                            >
                                <FaEnvelope style={{ color: 'var(--accent)' }} />
                                <a
                                    href={`mailto:${clinicInfo.email}`}
                                    style={{
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        transition: 'var(--transition)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = 'var(--text-secondary)';
                                    }}
                                >
                                    {clinicInfo.email}
                                </a>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.75rem',
                                    color: 'var(--text-secondary)'
                                }}
                            >
                                <FaMapMarkerAlt style={{ color: 'var(--accent)', marginTop: '2px' }} />
                                <span>{clinicInfo.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                            Working Hours
                        </h4>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}
                        >
                            {Object.entries(clinicInfo.workingHours).map(([day, hours]) => (
                                <div
                                    key={day}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '0.25rem 0',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontWeight: day === 'sunday' ? '600' : '400',
                                            textTransform: 'capitalize'
                                        }}
                                    >
                                        {day}
                                    </span>
                                    <span
                                        style={{
                                            color: day === 'sunday' ? 'var(--accent)' : 'inherit',
                                            fontWeight: day === 'sunday' ? '600' : '400'
                                        }}
                                    >
                                        {hours}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                            Quick Links
                        </h4>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}
                        >
                            <a
                                href="/"
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'var(--transition)',
                                    padding: '0.25rem 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--primary)';
                                    e.target.style.paddingLeft = '8px';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-secondary)';
                                    e.target.style.paddingLeft = '0';
                                }}
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'var(--transition)',
                                    padding: '0.25rem 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--primary)';
                                    e.target.style.paddingLeft = '8px';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-secondary)';
                                    e.target.style.paddingLeft = '0';
                                }}
                            >
                                About Us
                            </a>
                            <a
                                href="/services"
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'var(--transition)',
                                    padding: '0.25rem 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--primary)';
                                    e.target.style.paddingLeft = '8px';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-secondary)';
                                    e.target.style.paddingLeft = '0';
                                }}
                            >
                                Services
                            </a>
                            <a
                                href="/contact"
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'var(--transition)',
                                    padding: '0.25rem 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--primary)';
                                    e.target.style.paddingLeft = '8px';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-secondary)';
                                    e.target.style.paddingLeft = '0';
                                }}
                            >
                                Book Appointment
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    style={{
                        borderTop: '1px solid var(--border)',
                        paddingTop: '1.5rem',
                        textAlign: 'center',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem'
                    }}
                >
                    <p>
                        © {new Date().getFullYear()} {clinicInfo.name}. All rights reserved. |
                        Privacy Policy | Terms of Service
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
