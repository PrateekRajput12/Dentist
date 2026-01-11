import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaTooth, FaHeartbeat, FaUserMd, FaSmile, FaShieldAlt, FaClock } from 'react-icons/fa';

const Treatments = () => {
    const [expandedTreatment, setExpandedTreatment] = useState(null);

    const treatments = [
        {
            id: 1,
            icon: FaTooth,
            title: 'Teeth Whitening',
            category: 'Cosmetic',
            description: 'Professional teeth whitening treatments to brighten your smile by several shades.',
            details: {
                overview: 'Our professional teeth whitening service uses advanced bleaching agents to remove stains and discoloration from your teeth, providing a brighter, more confident smile.',
                procedure: [
                    'Initial consultation and oral examination',
                    'Professional cleaning to remove plaque and tartar',
                    'Application of protective barrier for gums',
                    'Application of whitening gel',
                    'Activation with special light (if needed)',
                    'Multiple applications for optimal results',
                    'Post-treatment care instructions'
                ],
                benefits: [
                    'Immediate visible results',
                    'Safe and painless procedure',
                    'Long-lasting brightness',
                    'Boosts confidence and appearance',
                    'Performed by dental professionals'
                ],
                recovery: 'Minimal recovery time. Some patients may experience temporary sensitivity for 24-48 hours.',
                duration: '60-90 minutes per session',
                cost: 'Starting from $299'
            }
        },
        {
            id: 2,
            icon: FaHeartbeat,
            title: 'Root Canal Therapy',
            category: 'Restorative',
            description: 'Save your natural tooth with advanced root canal treatment that eliminates infection and pain.',
            details: {
                overview: 'Root canal therapy removes infected pulp from inside your tooth, cleans the area, and seals it to prevent further infection, allowing you to keep your natural tooth.',
                procedure: [
                    'Digital X-ray examination',
                    'Local anesthesia for comfort',
                    'Access opening in the tooth',
                    'Removal of infected pulp tissue',
                    'Thorough cleaning and disinfection',
                    'Filling with biocompatible material',
                    'Temporary crown placement',
                    'Final crown restoration'
                ],
                benefits: [
                    'Saves natural tooth from extraction',
                    'Eliminates pain and infection',
                    'Restores normal chewing function',
                    'Prevents spread of infection',
                    'Long-term solution with proper care'
                ],
                recovery: 'Mild discomfort for 2-3 days, managed with over-the-counter pain medication.',
                duration: '1-2 hours per visit',
                cost: 'Starting from $599'
            }
        },
        {
            id: 3,
            icon: FaUserMd,
            title: 'Dental Implants',
            category: 'Restorative',
            description: 'Permanent tooth replacement solution that looks, feels, and functions like natural teeth.',
            details: {
                overview: 'Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots, providing a foundation for replacement teeth.',
                procedure: [
                    'Comprehensive oral examination',
                    '3D imaging and treatment planning',
                    'Surgical placement of implant post',
                    'Healing period (3-6 months)',
                    'Abutment placement',
                    'Custom crown fabrication',
                    'Final crown placement and adjustment'
                ],
                benefits: [
                    'Permanent tooth replacement',
                    'Natural look and feel',
                    'Preserves jawbone structure',
                    'No impact on adjacent teeth',
                    'High success rate (95%+)'
                ],
                recovery: 'Surgical recovery: 1-2 weeks. Full integration: 3-6 months.',
                duration: 'Multiple visits over 3-6 months',
                cost: 'Starting from $1,999'
            }
        },
        {
            id: 4,
            icon: FaSmile,
            title: 'Porcelain Veneers',
            category: 'Cosmetic',
            description: 'Thin porcelain shells bonded to teeth to create a perfect, symmetrical smile.',
            details: {
                overview: 'Porcelain veneers are custom-made thin shells designed to cover the front surface of teeth, improving their appearance in color, shape, size, or length.',
                procedure: [
                    'Smile analysis and planning',
                    'Minimal tooth preparation',
                    'Digital impressions or molds',
                    'Temporary veneers placement',
                    'Custom veneer fabrication',
                    'Bonding of permanent veneers',
                    'Final adjustments and polishing'
                ],
                benefits: [
                    'Natural tooth appearance',
                    'Stain-resistant material',
                    'Minimal tooth alteration',
                    'Instant smile transformation',
                    'Durable and long-lasting'
                ],
                recovery: 'Minimal. Some sensitivity for a few days.',
                duration: '2-3 visits over 2-3 weeks',
                cost: 'Starting from $899 per tooth'
            }
        },
        {
            id: 5,
            icon: FaShieldAlt,
            title: 'Invisalign Treatment',
            category: 'Orthodontic',
            description: 'Clear aligners that straighten teeth without the appearance of traditional braces.',
            details: {
                overview: 'Invisalign uses a series of custom-made, clear aligners to gradually move your teeth into the desired position without metal brackets or wires.',
                procedure: [
                    'Comprehensive orthodontic evaluation',
                    '3D digital scanning',
                    'Custom treatment plan',
                    'Fabrication of aligner series',
                    'Regular aligner changes (every 1-2 weeks)',
                    'Periodic progress check-ups',
                    'Retainer fitting after treatment'
                ],
                benefits: [
                    'Virtually invisible appearance',
                    'Removable for eating and cleaning',
                    'Comfortable smooth plastic',
                    'No dietary restrictions',
                    'Predictable treatment results'
                ],
                recovery: 'No recovery time. Mild discomfort when changing to new aligners.',
                duration: '6-24 months depending on case',
                cost: 'Starting from $3,999'
            }
        },
        {
            id: 6,
            icon: FaClock,
            title: 'Wisdom Tooth Extraction',
            category: 'Surgical',
            description: 'Safe and comfortable removal of problematic wisdom teeth to prevent future complications.',
            details: {
                overview: 'Wisdom tooth extraction is a common surgical procedure to remove third molars that may be causing pain, infection, or potential future problems.',
                procedure: [
                    'Pre-operative assessment and X-rays',
                    'Local or general anesthesia',
                    'Tooth exposure and sectioning (if needed)',
                    'Careful tooth removal',
                    'Socket cleaning and irrigation',
                    'Stitch placement (if required)',
                    'Post-operative instructions'
                ],
                benefits: [
                    'Prevents future dental problems',
                    'Relieves pain and discomfort',
                    'Protects adjacent teeth',
                    'Reduces risk of infection',
                    'Improves oral health'
                ],
                recovery: '3-7 days for initial healing, complete healing in 1-2 weeks.',
                duration: '30-90 minutes per extraction',
                cost: 'Starting from $249 per tooth'
            }
        }
    ];

    const toggleTreatment = (id) => {
        setExpandedTreatment(expandedTreatment === id ? null : id);
    };

    const categories = ['All', 'Cosmetic', 'Restorative', 'Orthodontic', 'Surgical'];
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredTreatments = selectedCategory === 'All'
        ? treatments
        : treatments.filter(treatment => treatment.category === selectedCategory);

    return (
        <div className="treatments">
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
                            Dental <span style={{ color: 'var(--accent)' }}>Treatments</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                            Explore our comprehensive range of dental treatments designed to restore, enhance, and maintain your oral health
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section style={{ padding: '2rem 0' }}>
                <div className="container">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap'
                        }}
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category)}
                                className="btn"
                                style={{
                                    backgroundColor: selectedCategory === category ? 'var(--accent)' : 'var(--bg-secondary)',
                                    color: selectedCategory === category ? 'white' : 'var(--text-primary)',
                                    border: selectedCategory === category ? 'none' : '2px solid var(--border)',
                                    fontSize: '1rem'
                                }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Treatments List */}
            <section style={{ padding: '3rem 0 5rem' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {filteredTreatments.map((treatment, index) => (
                            <motion.div
                                key={treatment.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card"
                                style={{
                                    marginBottom: '1.5rem',
                                    cursor: 'pointer',
                                    transition: 'var(--transition)'
                                }}
                                onClick={() => toggleTreatment(treatment.id)}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '1.5rem'
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: 'var(--accent)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '1.5rem',
                                            flexShrink: 0
                                        }}
                                    >
                                        <treatment.icon size={30} color="white" />
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                marginBottom: '0.5rem'
                                            }}
                                        >
                                            <div>
                                                <h3 style={{ fontSize: '1.5rem', margin: 0, marginBottom: '0.25rem' }}>
                                                    {treatment.title}
                                                </h3>
                                                <span
                                                    style={{
                                                        backgroundColor: 'var(--bg-primary)',
                                                        color: 'var(--primary)',
                                                        padding: '0.25rem 0.75rem',
                                                        borderRadius: '15px',
                                                        fontSize: '0.85rem',
                                                        fontWeight: '500'
                                                    }}
                                                >
                                                    {treatment.category}
                                                </span>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    color: 'var(--accent)',
                                                    fontSize: '1.2rem'
                                                }}
                                            >
                                                {expandedTreatment === treatment.id ? <FaChevronUp /> : <FaChevronDown />}
                                            </div>
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
                                            {treatment.description}
                                        </p>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedTreatment === treatment.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                borderTop: '1px solid var(--border)',
                                                padding: '2rem',
                                                backgroundColor: 'var(--bg-primary)'
                                            }}
                                        >
                                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                                <div>
                                                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                                        Overview
                                                    </h4>
                                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                                        {treatment.details.overview}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                                        Procedure Steps
                                                    </h4>
                                                    <ol style={{
                                                        color: 'var(--text-secondary)',
                                                        lineHeight: '1.6',
                                                        paddingLeft: '1.5rem',
                                                        margin: 0
                                                    }}>
                                                        {treatment.details.procedure.map((step, stepIndex) => (
                                                            <li key={stepIndex} style={{ marginBottom: '0.25rem' }}>
                                                                {step}
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>

                                                <div>
                                                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                                        Benefits
                                                    </h4>
                                                    <ul style={{
                                                        listStyle: 'none',
                                                        padding: 0,
                                                        margin: 0,
                                                        color: 'var(--text-secondary)',
                                                        lineHeight: '1.6'
                                                    }}>
                                                        {treatment.details.benefits.map((benefit, benefitIndex) => (
                                                            <li key={benefitIndex} style={{ marginBottom: '0.25rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✓</span>
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div
                                                    style={{
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                                        gap: '1rem',
                                                        padding: '1rem',
                                                        backgroundColor: 'var(--bg-secondary)',
                                                        borderRadius: '8px'
                                                    }}
                                                >
                                                    <div>
                                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Duration:</span>
                                                        <p style={{ color: 'var(--text-primary)', fontWeight: '500', margin: '0.25rem 0 0 0' }}>
                                                            {treatment.details.duration}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Recovery:</span>
                                                        <p style={{ color: 'var(--text-primary)', fontWeight: '500', margin: '0.25rem 0 0 0' }}>
                                                            {treatment.details.recovery}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Cost:</span>
                                                        <p style={{ color: 'var(--accent)', fontWeight: 'bold', margin: '0.25rem 0 0 0' }}>
                                                            {treatment.details.cost}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
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
                            Ready to Transform Your Smile?
                        </h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
                            Schedule a consultation to discuss your treatment options and create your personalized dental plan
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
    @media (max-width: 768px) {
      .treatments section:nth-child(3) .container > div {
        max-width: 100%;
      }
      
      .treatments section:nth-child(3) .card > div {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }
      
      .treatments section:nth-child(3) .card > div > div:first-child {
        margin-right: 0;
      }
    }
  `}</style>
        </div>
    );
};

export default Treatments;
