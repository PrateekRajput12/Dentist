import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaAward, FaGraduationCap, FaHeartbeat, FaTooth } from 'react-icons/fa';

const About = () => {
    const [counters, setCounters] = useState({
        years: 0,
        patients: 0,
        treatments: 0,
        satisfaction: 0
    });

    const targetCounters = {
        years: 15,
        patients: 5000,
        treatments: 10000,
        satisfaction: 98
    };

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = {
            years: targetCounters.years / steps,
            patients: targetCounters.patients / steps,
            treatments: targetCounters.treatments / steps,
            satisfaction: targetCounters.satisfaction / steps
        };

        let currentStep = 0;
        const timer = setInterval(() => {
            if (currentStep < steps) {
                setCounters({
                    years: Math.min(Math.floor(increment.years * currentStep), targetCounters.years),
                    patients: Math.min(Math.floor(increment.patients * currentStep), targetCounters.patients),
                    treatments: Math.min(Math.floor(increment.treatments * currentStep), targetCounters.treatments),
                    satisfaction: Math.min(Math.floor(increment.satisfaction * currentStep), targetCounters.satisfaction)
                });
                currentStep++;
            } else {
                clearInterval(timer);
                setCounters(targetCounters);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, []);

    const dentistInfo = {
        name: 'Dr. Sarah Johnson',
        title: 'Chief Dental Surgeon',
        experience: '15+ Years',
        education: [
            'DDS - Harvard Dental School',
            'MDS - Orthodontics Specialization',
            'Fellowship in Cosmetic Dentistry'
        ],
        specialties: [
            'Cosmetic Dentistry',
            'Orthodontics',
            'Dental Implants',
            'Pediatric Dentistry'
        ],
        about: `Dr. Sarah Johnson is a highly experienced dental surgeon with over 15 years of practice 
    in advanced dental care. She completed her Doctor of Dental Surgery from Harvard Dental School 
    and pursued specialized training in Orthodontics and Cosmetic Dentistry. Dr. Johnson is passionate 
    about creating beautiful, healthy smiles and has successfully treated over 5,000 patients with 
    exceptional results.`
    };

    const clinicValues = [
        {
            icon: FaHeartbeat,
            title: 'Patient-Centered Care',
            description: 'We prioritize your comfort, safety, and satisfaction in every treatment we provide.'
        },
        {
            icon: FaAward,
            title: 'Excellence',
            description: 'Committed to delivering the highest standards of dental care with modern technology.'
        },
        {
            icon: FaGraduationCap,
            title: 'Continuous Learning',
            description: 'Our team stays updated with the latest dental techniques and advancements.'
        },
        {
            icon: FaTooth,
            title: 'Comprehensive Services',
            description: 'From routine check-ups to complex procedures, we cover all your dental needs.'
        }
    ];

    return (
        <div className="about">
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
                            About <span style={{ color: 'var(--accent)' }}>DentalCare</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Your trusted partner in achieving optimal dental health and beautiful smiles
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Dentist Profile Section */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 2fr',
                            gap: '4rem',
                            alignItems: 'center'
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'var(--accent)',
                                    width: '300px',
                                    height: '300px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto',
                                    boxShadow: 'var(--shadow-lg)'
                                }}
                            >
                                <FaUserMd size={150} color="white" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                                Meet {dentistInfo.name}
                            </h2>
                            <p style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: '500', marginBottom: '1rem' }}>
                                {dentistInfo.title}
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
                                {dentistInfo.about}
                            </p>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Education & Qualifications</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {dentistInfo.education.map((edu, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                color: 'var(--text-secondary)',
                                                marginBottom: '0.5rem',
                                                paddingLeft: '1.5rem',
                                                position: 'relative'
                                            }}
                                        >
                                            <span
                                                style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    color: 'var(--accent)'
                                                }}
                                            >
                                                ✓
                                            </span>
                                            {edu}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Specialties</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {dentistInfo.specialties.map((specialty, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                backgroundColor: 'var(--bg-primary)',
                                                color: 'var(--accent)',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '20px',
                                                fontSize: '0.9rem',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Counter Section */}
            <section
                style={{
                    padding: '4rem 0',
                    backgroundColor: 'var(--bg-primary)'
                }}
            >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-5"
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Our <span style={{ color: 'var(--accent)' }}>Achievements</span>
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center"
                        >
                            <div
                                style={{
                                    fontSize: '3rem',
                                    fontWeight: 'bold',
                                    color: 'var(--accent)',
                                    marginBottom: '0.5rem'
                                }}
                            >
                                {counters.years}+
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>Years of Experience</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center"
                        >
                            <div
                                style={{
                                    fontSize: '3rem',
                                    fontWeight: 'bold',
                                    color: 'var(--accent)',
                                    marginBottom: '0.5rem'
                                }}
                            >
                                {counters.patients.toLocaleString()}+
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>Happy Patients</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center"
                        >
                            <div
                                style={{
                                    fontSize: '3rem',
                                    fontWeight: 'bold',
                                    color: 'var(--accent)',
                                    marginBottom: '0.5rem'
                                }}
                            >
                                {counters.treatments.toLocaleString()}+
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>Successful Treatments</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center"
                        >
                            <div
                                style={{
                                    fontSize: '3rem',
                                    fontWeight: 'bold',
                                    color: 'var(--accent)',
                                    marginBottom: '0.5rem'
                                }}
                            >
                                {counters.satisfaction}%
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>Patient Satisfaction</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Clinic Values Section */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-5"
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Our <span style={{ color: 'var(--accent)' }}>Values</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            The principles that guide our practice and patient care
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {clinicValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="card"
                                style={{
                                    textAlign: 'center',
                                    padding: '2.5rem 2rem'
                                }}
                            >
                                <div
                                    style={{
                                        width: '70px',
                                        height: '70px',
                                        backgroundColor: 'var(--accent)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.5rem',
                                        fontSize: '1.5rem'
                                    }}
                                >
                                    <value.icon size={35} color="white" />
                                </div>

                                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
                                    {value.title}
                                </h3>

                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
        @media (max-width: 768px) {
          .about section:nth-child(2) .container > div {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .about section:nth-child(2) .container > div > div:first-child > div {
            width: 200px;
            height: 200px;
          }
          
          .about section:nth-child(2) .container > div > div:first-child svg {
            width: 100px;
            height: 100px;
          }
          
          .about section:nth-child(4) .container > div {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
          }
        }
      `}</style>
        </div>
    );
};

export default About;
