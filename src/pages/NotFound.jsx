import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="not-found">
            <section
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)`,
                    padding: '2rem'
                }}
            >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                        style={{ maxWidth: '600px', margin: '0 auto' }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{
                                width: '120px',
                                height: '120px',
                                backgroundColor: 'var(--accent)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 2rem',
                                fontSize: '3rem'
                            }}
                        >
                            <FaExclamationTriangle size={60} color="white" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{
                                fontSize: '4rem',
                                fontWeight: 'bold',
                                color: 'var(--text-primary)',
                                marginBottom: '1rem',
                                lineHeight: 1
                            }}
                        >
                            404
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            style={{
                                fontSize: '2rem',
                                color: 'var(--text-primary)',
                                marginBottom: '1rem'
                            }}
                        >
                            Page Not Found
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            style={{
                                fontSize: '1.2rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '3rem',
                                lineHeight: 1.6
                            }}
                        >
                            Oops! The page you're looking for seems to have gone on a dental vacation.
                            Don't worry, our best pages are right here!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.history.back()}
                                className="btn btn-outline"
                                style={{
                                    fontSize: '1.1rem',
                                    padding: '14px 28px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <FaArrowLeft />
                                Go Back
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.location.href = '/'}
                                className="btn btn-primary"
                                style={{
                                    fontSize: '1.1rem',
                                    padding: '14px 28px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <FaHome />
                                Home Page
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            style={{
                                marginTop: '3rem',
                                padding: '2rem',
                                backgroundColor: 'var(--bg-secondary)',
                                borderRadius: '12px',
                                border: '1px solid var(--border)'
                            }}
                        >
                            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                                Looking for something specific?
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                Here are some of our most popular pages:
                            </p>

                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '1rem',
                                    justifyContent: 'center'
                                }}
                            >
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'About Us', path: '/about' },
                                    { name: 'Services', path: '/services' },
                                    { name: 'Treatments', path: '/treatments' },
                                    { name: 'Testimonials', path: '/testimonials' },
                                    { name: 'Gallery', path: '/gallery' },
                                    { name: 'Contact', path: '/contact' }
                                ].map((page) => (
                                    <motion.a
                                        key={page.path}
                                        href={page.path}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            backgroundColor: 'var(--bg-primary)',
                                            color: 'var(--primary)',
                                            textDecoration: 'none',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            transition: 'var(--transition)',
                                            border: '1px solid var(--border)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = 'var(--accent)';
                                            e.target.style.color = 'white';
                                            e.target.style.borderColor = 'var(--accent)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = 'var(--bg-primary)';
                                            e.target.style.color = 'var(--primary)';
                                            e.target.style.borderColor = 'var(--border)';
                                        }}
                                    >
                                        {page.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
