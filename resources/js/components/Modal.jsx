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
                    onClick={handleClose}
                >
                    <motion.div
                        className="relative mx-4 flex w-full max-w-[90%] flex-col items-center justify-center sm:max-w-[85%] md:max-w-[75%] lg:max-w-2xl"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full">
                            <motion.img
                                key={images[currentIndex].src}
                                src={images[currentIndex].src}
                                alt={`Iklan ${currentIndex + 1}`}
                                className="h-[40vh] min-h-[200px] w-full rounded-lg object-contain sm:h-[45vh] md:h-[50vh] lg:h-[60vh]"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-1.5 sm:bottom-6 sm:space-x-2">
                            {images.map((_, i) => (
                                <div key={i} className={`h-2 w-2 rounded-full sm:h-3 sm:w-3 ${i === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AdModal;
