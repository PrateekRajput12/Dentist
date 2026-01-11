import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            id: 1,
            name: 'Emily Rodriguez',
            age: 32,
            treatment: 'Teeth Whitening',
            rating: 5,
            image: '👩‍💼',
            testimonial: `I had an amazing experience at DentalCare! The teeth whitening treatment exceeded my expectations. 
      The staff was incredibly professional and made me feel comfortable throughout the entire process. 
      My smile has never been brighter, and I've received so many compliments. Highly recommend!`,
            date: '2 weeks ago'
        },
        {
            id: 2,
            name: 'Michael Chen',
            age: 45,
            treatment: 'Dental Implants',
            rating: 5,
            image: '👨‍💼',
            testimonial: `After years of struggling with missing teeth, I finally got dental implants at DentalCare. 
      The transformation has been life-changing. Dr. Johnson and her team are true professionals who explained 
      every step of the process. The results look and feel completely natural. Best investment in my health!`,
            date: '1 month ago'
        },
        {
            id: 3,
            name: 'Sarah Thompson',
            age: 28,
            treatment: 'Invisalign',
            rating: 5,
            image: '👩‍🎓',
            testimonial: `I was always self-conscious about my crooked teeth but didn't want traditional braces. 
      Invisalign at DentalCare was the perfect solution! The treatment was convenient, virtually invisible, 
      and the results are incredible. I'm so much more confident now. Thank you to the amazing team!`,
            date: '3 weeks ago'
        },
        {
            id: 4,
            name: 'Robert Martinez',
            age: 52,
            treatment: 'Root Canal',
            rating: 5,
            image: '👨‍🔧',
            testimonial: `I was terrified of getting a root canal, but the team at DentalCare made it completely painless. 
      They explained everything thoroughly and were so gentle during the procedure. I honestly didn't feel a thing. 
      They saved my tooth and eliminated my pain. Exceptional care from start to finish!`,
            date: '1 week ago'
        },
        {
            id: 5,
            name: 'Jessica Williams',
            age: 35,
            treatment: 'Porcelain Veneers',
            rating: 5,
            image: '👩‍🎨',
            testimonial: `I wanted to improve my smile for my wedding, and the porcelain veneers from DentalCare were perfect. 
      The attention to detail and craftsmanship is outstanding. They listened to exactly what I wanted and delivered 
      beyond my expectations. I felt like a celebrity on my big day!`,
            date: '2 months ago'
        },
        {
            id: 6,
            name: 'David Kim',
            age: 41,
            treatment: 'Wisdom Tooth Extraction',
            rating: 5,
            image: '👨‍⚕️',
            testimonial: `I had to get all four wisdom teeth removed, and I was nervous about the surgery. 
      The team at DentalCare made it so smooth and comfortable. The recovery was much easier than I expected, 
      and they followed up to make sure I was healing well. Professional, caring, and skilled!`,
            date: '3 weeks ago'
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const goToTestimonial = (index) => {
        setCurrentTestimonial(index);
        setIsAutoPlaying(false);
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar
                key={index}
                size={16}
                color={index < rating ? '#FFD700' : '#D3D3D3'}
                style={{ marginRight: '2px' }}
            />
        ));
    };

    return (
        <div className="testimonials">
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
                            Patient <span style={{ color: 'var(--accent)' }}>Testimonials</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                            Hear what our satisfied patients have to say about their experiences at DentalCare
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Testimonial */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="card"
                                style={{
                                    padding: '3rem',
                                    textAlign: 'center',
                                    position: 'relative'
                                }}
                            >
                                <FaQuoteLeft
                                    size={40}
                                    color="var(--accent)"
                                    style={{
                                        position: 'absolute',
                                        top: '20px',
                                        left: '20px',
                                        opacity: 0.2
                                    }}
                                />

                                <div
                                    style={{
                                        fontSize: '4rem',
                                        marginBottom: '1rem',
                                        lineHeight: 1
                                    }}
                                >
                                    {testimonials[currentTestimonial].image}
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    {renderStars(testimonials[currentTestimonial].rating)}
                                </div>

                                <p
                                    style={{
                                        fontSize: '1.1rem',
                                        lineHeight: '1.8',
                                        color: 'var(--text-secondary)',
                                        marginBottom: '2rem',
                                        fontStyle: 'italic'
                                    }}
                                >
                                    "{testimonials[currentTestimonial].testimonial}"
                                </p>

                                <div>
                                    <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                                        {testimonials[currentTestimonial].name}
                                    </h4>
                                    <p style={{ color: 'var(--text-secondary)', margin: '0 0 0.25rem 0' }}>
                                        Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].treatment}
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                                        {testimonials[currentTestimonial].date}
                                    </p>
                                </div>

                                {/* Navigation Controls */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        padding: '0 1rem',
                                        pointerEvents: 'none'
                                    }}
                                >
                                    <button
                                        onClick={prevTestimonial}
                                        style={{
                                            backgroundColor: 'var(--accent)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '40px',
                                            height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            pointerEvents: 'all',
                                            transition: 'var(--transition)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                        aria-label="Previous testimonial"
                                    >
                                        <FaChevronLeft />
                                    </button>

                                    <button
                                        onClick={nextTestimonial}
                                        style={{
                                            backgroundColor: 'var(--accent)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '40px',
                                            height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            pointerEvents: 'all',
                                            transition: 'var(--transition)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                        aria-label="Next testimonial"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Dots Indicator */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                marginTop: '2rem'
                            }}
                        >
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        border: 'none',
                                        backgroundColor: currentTestimonial === index ? 'var(--accent)' : 'var(--border)',
                                        cursor: 'pointer',
                                        transition: 'var(--transition)'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (currentTestimonial !== index) {
                                            e.target.style.backgroundColor = 'var(--primary)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (currentTestimonial !== index) {
                                            e.target.style.backgroundColor = 'var(--border)';
                                        }
                                    }}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Auto-play Control */}
                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <button
                                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                className="btn btn-outline"
                                style={{ fontSize: '0.9rem' }}
                            >
                                {isAutoPlaying ? 'Pause Auto-play' : 'Start Auto-play'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Testimonials Grid */}
            <section style={{ padding: '3rem 0 5rem', backgroundColor: 'var(--bg-primary)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-5"
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            More <span style={{ color: 'var(--accent)' }}>Success Stories</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            Read more experiences from our valued patients
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="card"
                                style={{
                                    padding: '2rem',
                                    position: 'relative'
                                }}
                            >
                                <FaQuoteLeft
                                    size={20}
                                    color="var(--accent)"
                                    style={{
                                        position: 'absolute',
                                        top: '15px',
                                        left: '15px',
                                        opacity: 0.2
                                    }}
                                />

                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                    <div
                                        style={{
                                            fontSize: '2.5rem',
                                            marginRight: '1rem'
                                        }}
                                    >
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.25rem 0' }}>
                                            {testimonial.name}
                                        </h4>
                                        <div>{renderStars(testimonial.rating)}</div>
                                    </div>
                                </div>

                                <p
                                    style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        marginBottom: '1rem'
                                    }}
                                >
                                    "{testimonial.testimonial.substring(0, 150)}..."
                                </p>

                                <div
                                    style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-secondary)',
                                        borderTop: '1px solid var(--border)',
                                        paddingTop: '1rem'
                                    }}
                                >
                                    <div>{testimonial.treatment}</div>
                                    <div>{testimonial.date}</div>
                                </div>
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
                            Join Our Satisfied Patients
                        </h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
                            Experience the exceptional dental care that our patients love and trust
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
                            Book Your Appointment
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
        @media (max-width: 768px) {
          .testimonials section:nth-child(2) .card {
            padding: 2rem 1.5rem;
          }
          
          .testimonials section:nth-child(4) .container > div {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Testimonials;
