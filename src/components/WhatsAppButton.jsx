import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = '+1234567890'; // Replace with actual clinic WhatsApp number
    const message = encodeURIComponent('Hello, I want to book an appointment at your clinic.');

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="whatsapp-float"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '60px',
                height: '60px',
                backgroundColor: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-lg)',
                transition: 'var(--transition)',
                zIndex: 1000,
                fontSize: '1.5rem'
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 15px 30px rgba(37, 211, 102, 0.4)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'var(--shadow-lg)';
            }}
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp />
        </button>
    );
};

export default WhatsAppButton;
