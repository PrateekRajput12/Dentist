import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        error: null
    });

    const [formErrors, setFormErrors] = useState({});

    const services = [
        'Teeth Cleaning',
        'Root Canal Treatment',
        'Dental Implants',
        'Cosmetic Dentistry',
        'Orthodontics & Braces',
        'Emergency Dental Care',
        'General Check-up',
        'Other'
    ];

    const timeSlots = [
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
        '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
        '5:00 PM', '5:30 PM'
    ];

    const clinicInfo = {
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

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
            errors.phone = 'Please enter a valid phone number';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!formData.service) {
            errors.service = 'Please select a service';
        }

        if (!formData.date) {
            errors.date = 'Please select a preferred date';
        }

        if (!formData.time) {
            errors.time = 'Please select a preferred time';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setFormStatus(prev => ({ ...prev, isSubmitting: true, error: null }));

        try {
            // EmailJS configuration - Replace with your actual EmailJS credentials
            const serviceId = 'your_service_id';
            const templateId = 'your_template_id';
            const userId = 'your_user_id';

            // Prepare email template parameters
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                from_phone: formData.phone,
                service: formData.service,
                appointment_date: formData.date,
                appointment_time: formData.time,
                message: formData.message,
                to_email: clinicInfo.email
            };

            // Send email using EmailJS
            await emailjs.send(serviceId, templateId, templateParams, userId);

            // Send WhatsApp message
            const whatsappMessage = encodeURIComponent(
                `New Appointment Request:\n\n` +
                `Name: ${formData.name}\n` +
                `Phone: ${formData.phone}\n` +
                `Email: ${formData.email}\n` +
                `Service: ${formData.service}\n` +
                `Date: ${formData.date}\n` +
                `Time: ${formData.time}\n` +
                `Message: ${formData.message}`
            );

            const whatsappNumber = '+1234567890'; // Replace with actual clinic WhatsApp number
            window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                error: null
            });

            // Reset form
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                date: '',
                time: '',
                message: ''
            });

        } catch (error) {
            console.error('Error sending appointment:', error);
            setFormStatus({
                isSubmitting: false,
                isSubmitted: false,
                error: 'Failed to send appointment request. Please try again or call us directly.'
            });
        }
    };

    const getMinDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    return (
        <div className="contact">
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
                            Book <span style={{ color: 'var(--accent)' }}>Appointment</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                            Schedule your dental appointment with our expert team. We're here to provide you with exceptional care.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact & Appointment Section */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '4rem',
                            alignItems: 'start'
                        }}
                    >
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
                                Get in <span style={{ color: 'var(--accent)' }}>Touch</span>
                            </h2>

                            <div style={{ marginBottom: '2rem' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        marginBottom: '1.5rem'
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            backgroundColor: 'var(--accent)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        <FaPhone size={20} color="white" />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem' }}>Phone</h4>
                                        <a
                                            href={`tel:${clinicInfo.phone}`}
                                            style={{
                                                color: 'var(--primary)',
                                                textDecoration: 'none',
                                                fontSize: '1.1rem',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {clinicInfo.phone}
                                        </a>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        marginBottom: '1.5rem'
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            backgroundColor: 'var(--accent)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        <FaEnvelope size={20} color="white" />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem' }}>Email</h4>
                                        <a
                                            href={`mailto:${clinicInfo.email}`}
                                            style={{
                                                color: 'var(--primary)',
                                                textDecoration: 'none',
                                                fontSize: '1.1rem',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {clinicInfo.email}
                                        </a>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        marginBottom: '1.5rem'
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            backgroundColor: 'var(--accent)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        <FaMapMarkerAlt size={20} color="white" />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem' }}>Address</h4>
                                        <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                                            {clinicInfo.address}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="card" style={{ padding: '1.5rem' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        marginBottom: '1rem'
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: 'var(--accent)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        <FaClock size={18} color="white" />
                                    </div>
                                    <h3 style={{ margin: 0 }}>Working Hours</h3>
                                </div>

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
                                                padding: '0.5rem 0',
                                                borderBottom: '1px solid var(--border)'
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontWeight: day === 'sunday' ? '600' : '400',
                                                    textTransform: 'capitalize',
                                                    color: day === 'sunday' ? 'var(--accent)' : 'var(--text-primary)'
                                                }}
                                            >
                                                {day}
                                            </span>
                                            <span
                                                style={{
                                                    color: day === 'sunday' ? 'var(--accent)' : 'var(--text-secondary)',
                                                    fontWeight: day === 'sunday' ? '600' : '400'
                                                }}
                                            >
                                                {hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Appointment Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="card" style={{ padding: '2rem' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
                                    Book Your <span style={{ color: 'var(--accent)' }}>Appointment</span>
                                </h2>

                                {formStatus.isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center"
                                        style={{
                                            padding: '2rem',
                                            backgroundColor: 'var(--bg-primary)',
                                            borderRadius: '8px',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <FaCheckCircle
                                            size={60}
                                            color="var(--accent)"
                                            style={{ marginBottom: '1rem' }}
                                        />
                                        <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                                            Appointment Request Sent!
                                        </h3>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                            Thank you for booking an appointment with us. We have received your request and will contact you shortly to confirm your appointment.
                                        </p>
                                        <p style={{ color: 'var(--text-secondary)' }}>
                                            You can also reach us directly at {clinicInfo.phone} for immediate assistance.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                style={{
                                                    borderColor: formErrors.name ? 'red' : 'var(--border)'
                                                }}
                                                placeholder="Enter your full name"
                                            />
                                            {formErrors.name && (
                                                <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                                    {formErrors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                style={{
                                                    borderColor: formErrors.phone ? 'red' : 'var(--border)'
                                                }}
                                                placeholder="Enter your phone number"
                                            />
                                            {formErrors.phone && (
                                                <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                                    {formErrors.phone}
                                                </p>
                                            )}
                                        </div>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                style={{
                                                    borderColor: formErrors.email ? 'red' : 'var(--border)'
                                                }}
                                                placeholder="Enter your email address"
                                            />
                                            {formErrors.email && (
                                                <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                                    {formErrors.email}
                                                </p>
                                            )}
                                        </div>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                Select Service *
                                            </label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                style={{
                                                    borderColor: formErrors.service ? 'red' : 'var(--border)'
                                                }}
                                            >
                                                <option value="">Choose a service</option>
                                                {services.map((service) => (
                                                    <option key={service} value={service}>
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                            {formErrors.service && (
                                                <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                                    {formErrors.service}
                                                </p>
                                            )}
                                        </div>

                                        <div
                                            style={{
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                gap: '1rem',
                                                marginBottom: '1.5rem'
                                            }}
                                        >
                                            <div>
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                    Preferred Date *
                                                </label>
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleInputChange}
                                                    min={getMinDate()}
                                                    style={{
                                                        borderColor: formErrors.date ? 'red' : 'var(--border)'
                                                    }}
                                                />
                                                {formErrors.date && (
                                                    <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                                        {formErrors.date}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                    Preferred Time *
                                                </label>
                                                <select
                                                    name="time"
                                                    value={formData.time}
                                                    onChange={handleInputChange}
                                                    style={{
                                                        borderColor: formErrors.time ? 'red' : 'var(--border)'
                                                    }}
                                                >
                                                    <option value="">Select time</option>
                                                    {timeSlots.map((time) => (
                                                        <option key={time} value={time}>
                                                            {time}
                                                        </option>
                                                    ))}
                                                </select>
                                                {formErrors.time && (
                                                    <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                                        {formErrors.time}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                Additional Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={4}
                                                placeholder="Any additional information or special requirements..."
                                            />
                                        </div>

                                        {formStatus.error && (
                                            <div
                                                style={{
                                                    backgroundColor: '#fee',
                                                    color: '#c00',
                                                    padding: '1rem',
                                                    borderRadius: '8px',
                                                    marginBottom: '1rem'
                                                }}
                                            >
                                                {formStatus.error}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={formStatus.isSubmitting}
                                            className="btn btn-primary"
                                            style={{
                                                width: '100%',
                                                fontSize: '1.1rem',
                                                padding: '14px',
                                                opacity: formStatus.isSubmitting ? 0.7 : 1,
                                                cursor: formStatus.isSubmitting ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            {formStatus.isSubmitting ? 'Sending...' : 'Book Appointment'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Google Maps Section */}
            <section style={{ padding: '3rem 0' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-5"
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Find <span style={{ color: 'var(--accent)' }}>Our Clinic</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            Conveniently located in the heart of the city
                        </p>
                    </motion.div>

                    <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059433!3d40.7127837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjYuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="DentalCare Clinic Location"
                        />
                    </div>
                </div>
            </section>

            <style jsx>{`
        @media (max-width: 768px) {
          .contact section:nth-child(2) .container > div {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Contact;
