import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleryImages = [
        {
            id: 1,
            category: 'Clinic',
            title: 'Modern Reception Area',
            description: 'Our welcoming and comfortable reception area designed for patient comfort',
            thumbnail: '🏥',
            fullImage: '🏥'
        },
        {
            id: 2,
            category: 'Clinic',
            title: 'Advanced Treatment Room',
            description: 'State-of-the-art dental equipment for precise and comfortable treatments',
            thumbnail: '🦷',
            fullImage: '🦷'
        },
        {
            id: 3,
            category: 'Clinic',
            title: 'Sterilization Center',
            description: 'Advanced sterilization facilities ensuring highest safety standards',
            thumbnail: '🔬',
            fullImage: '🔬'
        },
        {
            id: 4,
            category: 'Treatment',
            title: 'Teeth Whitening Process',
            description: 'Professional teeth whitening treatment in progress',
            thumbnail: '✨',
            fullImage: '✨'
        },
        {
            id: 5,
            category: 'Treatment',
            title: 'Dental Implant Surgery',
            description: 'Precise dental implant placement procedure',
            thumbnail: '🔧',
            fullImage: '🔧'
        },
        {
            id: 6,
            category: 'Treatment',
            title: 'Orthodontic Treatment',
            description: 'Invisalign clear aligners fitting session',
            thumbnail: '📏',
            fullImage: '📏'
        },
        {
            id: 7,
            category: 'Results',
            title: 'Smile Transformation',
            description: 'Before and after porcelain veneers treatment',
            thumbnail: '😊',
            fullImage: '😊'
        },
        {
            id: 8,
            category: 'Results',
            title: 'Complete Smile Makeover',
            description: 'Amazing results from comprehensive cosmetic dentistry',
            thumbnail: '🌟',
            fullImage: '🌟'
        },
        {
            id: 9,
            category: 'Results',
            title: 'Teeth Straightening Results',
            description: 'Beautiful results after Invisalign treatment',
            thumbnail: '🎯',
            fullImage: '🎯'
        },
        {
            id: 10,
            category: 'Team',
            title: 'Our Dental Team',
            description: 'Experienced dental professionals dedicated to your care',
            thumbnail: '👥',
            fullImage: '👥'
        },
        {
            id: 11,
            category: 'Team',
            title: 'Consultation Room',
            description: 'Personalized treatment planning with our specialists',
            thumbnail: '💬',
            fullImage: '💬'
        },
        {
            id: 12,
            category: 'Technology',
            title: '3D Digital Imaging',
            description: 'Advanced 3D scanning technology for precise diagnostics',
            thumbnail: '📷',
            fullImage: '📷'
        }
    ];

    const categories = ['All', 'Clinic', 'Treatment', 'Results', 'Team', 'Technology'];
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(image => image.category === selectedCategory);

    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        const newIndex = direction === 'next'
            ? (currentImageIndex + 1) % filteredImages.length
            : (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;

        setCurrentImageIndex(newIndex);
        setSelectedImage(filteredImages[newIndex]);
    };

    const handleKeyDown = (e) => {
        if (!selectedImage) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateImage('prev');
        if (e.key === 'ArrowRight') navigateImage('next');
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, currentImageIndex, filteredImages]);

    return (
        <div className="gallery">
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
                            Dental <span style={{ color: 'var(--accent)' }}>Gallery</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                            Explore our clinic facilities, advanced treatments, and amazing smile transformations
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

            {/* Gallery Grid */}
            <section style={{ padding: '3rem 0 5rem' }}>
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="card"
                                style={{
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    padding: 0
                                }}
                                onClick={() => openLightbox(image, index)}
                            >
                                <div
                                    style={{
                                        height: '250px',
                                        backgroundColor: 'var(--bg-primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '4rem',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {image.thumbnail}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            padding: '1rem'
                                        }}
                                        className="overlay"
                                    >
                                        <div style={{ color: 'white' }}>
                                            <h4 style={{ margin: '0 0 0.25rem 0' }}>{image.title}</h4>
                                            <p style={{ margin: 0, fontSize: '0.9rem' }}>Click to view</p>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: '1.5rem' }}>
                                    <span
                                        style={{
                                            backgroundColor: 'var(--accent)',
                                            color: 'white',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '15px',
                                            fontSize: '0.85rem',
                                            fontWeight: '500',
                                            marginBottom: '0.75rem',
                                            display: 'inline-block'
                                        }}
                                    >
                                        {image.category}
                                    </span>

                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                                        {image.title}
                                    </h3>

                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                                        {image.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                        onClick={closeLightbox}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={closeLightbox}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'white',
                                fontSize: '1.5rem',
                                transition: 'var(--transition)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                e.target.style.transform = 'rotate(90deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                e.target.style.transform = 'rotate(0deg)';
                            }}
                            aria-label="Close lightbox"
                        >
                            <FaTimes />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('prev');
                            }}
                            style={{
                                position: 'absolute',
                                left: '2rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'white',
                                fontSize: '1.2rem',
                                transition: 'var(--transition)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                e.target.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                e.target.style.transform = 'scale(1)';
                            }}
                            aria-label="Previous image"
                        >
                            <FaChevronLeft />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('next');
                            }}
                            style={{
                                position: 'absolute',
                                right: '2rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'white',
                                fontSize: '1.2rem',
                                transition: 'var(--transition)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                e.target.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                e.target.style.transform = 'scale(1)';
                            }}
                            aria-label="Next image"
                        >
                            <FaChevronRight />
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                borderRadius: '12px',
                                padding: '2rem',
                                maxWidth: '600px',
                                width: '100%',
                                maxHeight: '80vh',
                                overflow: 'auto'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div
                                style={{
                                    height: '300px',
                                    backgroundColor: 'var(--bg-primary)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '6rem',
                                    marginBottom: '1.5rem'
                                }}
                            >
                                {selectedImage.fullImage}
                            </div>

                            <div>
                                <span
                                    style={{
                                        backgroundColor: 'var(--accent)',
                                        color: 'white',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '15px',
                                        fontSize: '0.85rem',
                                        fontWeight: '500',
                                        marginBottom: '1rem',
                                        display: 'inline-block'
                                    }}
                                >
                                    {selectedImage.category}
                                </span>

                                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                                    {selectedImage.title}
                                </h2>

                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    {selectedImage.description}
                                </p>

                                <div
                                    style={{
                                        marginTop: '1.5rem',
                                        paddingTop: '1.5rem',
                                        borderTop: '1px solid var(--border)',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)'
                                    }}
                                >
                                    Image {currentImageIndex + 1} of {filteredImages.length}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            Ready for Your Smile Transformation?
                        </h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
                            See these results for yourself by scheduling a consultation with our expert team
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
                            Schedule Consultation
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
        .card:hover .overlay {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .gallery section:nth-child(3) .container > div {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Gallery;
