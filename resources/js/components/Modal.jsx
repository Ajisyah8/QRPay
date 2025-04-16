import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Modal1 from './assets/modal1.jpg';
import Modal2 from './assets/modal2.jpg';
import Modal3 from './assets/modal3.jpg';

const images = [{ src: Modal1 }, { src: Modal2 }, { src: Modal3 }];

const AdModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="relative mx-4 flex w-full max-w-lg flex-col items-center justify-center"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <motion.img
                            key={images[currentIndex].src}
                            src={images[currentIndex].src}
                            alt={`Iklan ${currentIndex + 1}`}
                            className="h-[50vh] w-full rounded-md object-cover"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        />

                        <div className="absolute top-3 right-3">
                            <button
                                onClick={handleClose}
                                className="text-bold flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-lg text-black shadow-md transition-all duration-200 hover:scale-110 hover:rotate-180 hover:shadow-lg"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 transform space-x-2">
                            {images.map((_, i) => (
                                <div key={i} className={`h-3 w-3 rounded-full ${i === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AdModal;
