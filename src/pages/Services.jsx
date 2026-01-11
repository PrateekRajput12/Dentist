import React from 'react';
import { motion } from 'framer-motion';
import { FaTooth, FaHeartbeat, FaUserMd, FaSmile, FaShieldAlt, FaClock } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: FaTooth,
            title: 'Teeth Cleaning',
            description: 'Professional dental cleaning to remove plaque, tartar, and stains for optimal oral health.',
            features: [
                'Removes plaque and tartar buildup',
                'Prevents gum disease',
                'Freshens breath',
                'Brightens your smile'
            ],
            duration: '45-60 minutes',
            price: 'Starting from $99'
        },
        {
            icon: FaHeartbeat,
            title: 'Root Canal Treatment',
            description: 'Save your natural tooth with our advanced root canal therapy performed by experienced specialists.',
            features: [
                'Pain-free procedure',
                'Preserves natural tooth',
                'Prevents extraction',
                'Long-lasting results'
            ],
            duration: '1-2 hours',
            price: 'Starting from $599'
        },
        {
            icon: FaUserMd,
            title: 'Dental Implants',
            description: 'Permanent tooth replacement solution that looks, feels, and functions like natural teeth.',
            features: [
                'Permanent solution',
                'Natural appearance',
                'Restores chewing function',
                'Prevents bone loss'
            ],
            duration: 'Multiple visits',
            price: 'Starting from $1,999'
        },
        {
            icon: FaSmile,
            title: 'Cosmetic Dentistry',
            description: 'Transform your smile with our comprehensive cosmetic dental treatments and procedures.',
            features: [
                'Teeth whitening',
                'Veneers and bonding',
                'Smile makeovers',
                'Gum contouring'
            ],
            duration: 'Varies by procedure',
            price: 'Starting from $299'
        },
        {
            icon: FaShieldAlt,
            title: 'Orthodontics & Braces',
            description: 'Straighten your teeth and correct bite issues with modern orthodontic treatments.',
            features: [
                'Traditional braces',
                'Clear aligners',
                'Retainers',
                'Bite correction'
            ],
            duration: '6-24 months',
            price: 'Starting from $2,999'
        },
        {
            icon: FaClock,
            title: 'Emergency Dental Care',
            description: 'Immediate dental care for urgent situations including pain, trauma, and infections.',
            features: [
                'Same-day appointments',
                'Pain relief',
                'Trauma treatment',
                'Infection control'
            ],
            duration: 'As needed',
            price: 'Varies by treatment'
        }
    ];

    return (
        <div className="services">
            {/* Hero Section */}
            <section
                style={{
                    padding: '6rem 0 3rem',
                    background: `linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)`
                }}
            >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                            Our <span style={{ color: 'var(--accent)' }}>Services</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                            Comprehensive dental care services designed to meet all your oral health needs with the latest technology and techniques
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="card"
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Service Icon */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-20px',
                                        right: '-20px',
                                        width: '100px',
                                        height: '100px',
                                        backgroundColor: 'var(--accent)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0.1
                                    }}
                                >
                                    <service.icon size={50} color="white" />
                                </div>

                                <div style={{ flex: 1, padding: '2rem' }}>
                                    {/* Icon and Title */}
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                        <div
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: 'var(--accent)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '1rem',
                                                flexShrink: 0
                                            }}
                                        >
                                            <service.icon size={30} color="white" />
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', margin: 0 }}>
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                            Key Benefits:
                                        </h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                            {service.features.map((feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    style={{
                                                        color: 'var(--text-secondary)',
                                                        marginBottom: '0.25rem',
                                                        paddingLeft: '1.5rem',
                                                        position: 'relative',
                                                        fontSize: '0.9rem'
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            position: 'absolute',
                                                            left: 0,
                                                            color: 'var(--accent)',
                                                            fontWeight: 'bold'
                                                        }}
                                                    >
                                                        ✓
                                                    </span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Duration and Price */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            paddingTop: '1rem',
                                            borderTop: '1px solid var(--border)'
                                        }}
                                    >
                                        <div>
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                Duration:
                                            </span>
                                            <span style={{ color: 'var(--text-primary)', marginLeft: '0.5rem', fontWeight: '500' }}>
                                                {service.duration}
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
                                                {service.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '4px',
                                        background: `linear-gradient(90deg, var(--accent) 0%, var(--primary) 100%)`,
                                        transform: 'translateY(100%)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    className="hover-bar"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                style={{
                    padding: '5rem 0',
                    background: `linear-gradient(135deg, var(--accent) 0%, #16a34a 100%)`,
                    color: 'white',
                    textAlign: 'center'
                }}
            >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Need a Specific Treatment?
                        </h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
                            Contact us for a personalized consultation and treatment plan tailored to your needs
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = '/contact'}
                            className="btn"
                            style={{
                                backgroundColor: 'white',
                                color: 'var(--accent)',
                                fontSize: '1.1rem',
                                padding: '14px 32px',
                                fontWeight: 'bold'
                            }}
                        >
                            Book Consultation
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
        .card:hover .hover-bar {
          transform: translateY(0);
        }
        
        @media (max-width: 768px) {
          .services section:nth-child(2) .container > div {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Services;
