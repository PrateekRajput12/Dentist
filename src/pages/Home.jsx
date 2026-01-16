import React from 'react';
import { motion } from 'framer-motion';
import { FaTooth, FaHeartbeat, FaAward, FaUserMd } from 'react-icons/fa';

const Home = () => {
    const features = [
        {
            icon: FaTooth,
            title: 'Expert Dental Care',
            description: 'Professional dental services with modern equipment and experienced specialists.'
        },
        {
            icon: FaHeartbeat,
            title: 'Patient Comfort',
            description: 'We prioritize your comfort and ensure a pain-free dental experience.'
        },
        {
            icon: FaAward,
            title: 'Quality Assurance',
            description: 'Certified dental care with the highest standards of treatment and safety.'
        },
        {
            icon: FaUserMd,
            title: 'Experienced Team',
            description: 'Our skilled dentists have years of experience in various dental procedures.'
        }
    ];

    const scrollToAppointment = () => {
        const element = document.getElementById('appointment');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openWhatsApp = () => {
        const phoneNumber = '+1234567890'; // Replace with actual clinic WhatsApp number
        const message = encodeURIComponent('Hello, I want to book an appointment at your clinic.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="home">
            {/* Hero Section */}
            {/* <section
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    background: `linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)`,
                    position: 'relative',
                    overflow: 'hidden',
                    paddingTop: '80px'
                }}
            >
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '4rem',
                            alignItems: 'center'
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1
                                style={{
                                    fontSize: '3rem',
                                    fontWeight: 'bold',
                                    color: 'var(--text-primary)',
                                    marginBottom: '1rem',
                                    lineHeight: '1.2'
                                }}
                            >
                                Your Smile is
                                <span style={{ color: 'var(--accent)' }}> Our Priority</span>
                            </h1>

                            <p
                                style={{
                                    fontSize: '1.25rem',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '2rem',
                                    lineHeight: '1.6'
                                }}
                            >
                                Experience exceptional dental care in a comfortable and friendly environment.
                                Our expert team is dedicated to helping you achieve and maintain a healthy,
                                beautiful smile for life.
                            </p>

                            <div
                                style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    flexWrap: 'wrap'
                                }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={scrollToAppointment}
                                    className="btn btn-primary"
                                    style={{
                                        fontSize: '1.1rem',
                                        padding: '14px 28px'
                                    }}
                                >
                                    Book Appointment
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={openWhatsApp}
                                    className="btn btn-secondary"
                                    style={{
                                        fontSize: '1.1rem',
                                        padding: '14px 28px'
                                    }}
                                >
                                    Chat on WhatsApp
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <div
                                style={{
                                    width: '400px',
                                    height: '400px',
                                    backgroundColor: 'var(--accent)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: 'var(--shadow-lg)',
                                    position: 'relative'
                                }}
                            >
                                <FaTooth size={200} color="white" />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: 'reverse'
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: '420px',
                                        height: '420px',
                                        border: '3px solid var(--accent)',
                                        borderRadius: '50%',
                                        opacity: 0.3
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section> */}
            <section className="hero-section">
                <div className="container">
                    <div className="grid">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>
                                Your Smile is <span>Our Priority</span>
                            </h1>
                            <p>
                                Experience exceptional dental care in a comfortable and friendly environment.
                                Our expert team is dedicated to helping you achieve and maintain a healthy,
                                beautiful smile for life.
                            </p>
                            <div className="btn-wrapper">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={scrollToAppointment}
                                    className="btn btn-primary"
                                >
                                    Book Appointment
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={openWhatsApp}
                                    className="btn btn-secondary"
                                >
                                    Chat on WhatsApp
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Right Circle / Tooth */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        >
                            <div className="circle">
                                <FaTooth size="50%" color="white" />
                                <motion.div
                                    className="circle-border"
                                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                style={{
                    padding: '5rem 0',
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
                            Why Choose <span style={{ color: 'var(--accent)' }}>DentalCare</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            We provide comprehensive dental care with a focus on quality and patient satisfaction
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {features.map((feature, index) => (
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
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: 'var(--accent)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.5rem',
                                        fontSize: '2rem'
                                    }}
                                >
                                    <feature.icon size={40} color="white" />
                                </div>

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                                    {feature.title}
                                </h3>

                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                id="appointment"
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
                            Ready for Your Dream Smile?
                        </h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, color: "white" }}>
                            Book your appointment today and take the first step towards better dental health
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
                            Book Now
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
        @media (max-width: 768px) {
          .home section:first-child {
            padding-top: 100px;
          }
          
          .home section:first-child .container > div {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .home section:first-child h1 {
            font-size: 2rem;
          }
          
          .home section:first-child p {
            font-size: 1rem;
          }
          
          .home section:first-child .container > div > div:last-child {
            order: -1;
          }
          
          .home section:first-child .container > div > div:last-child > div {
            width: 250px;
            height: 250px;
          }
          
          .home section:first-child .container > div > div:last-child svg {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
        </div>
    );
};

export default Home;
