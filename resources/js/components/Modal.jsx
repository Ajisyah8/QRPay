import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
const AdModal = ({ promos }) => {
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
            setCurrentIndex((prev) => (prev + 1) % promos.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isOpen, promos]);

    const handleClose = () => setIsOpen(false);

    if (!promos || promos.length === 0) return null;

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
                        className="relative mx-4 flex w-full max-w-[95%] flex-col items-center justify-center sm:max-w-[85%] md:max-w-[75%] lg:max-w-2xl"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full rounded-lg bg-white p-2">
                            <button
                                onClick={handleClose}
                                className="btn btn-sm btn-circle btn-ghost absolute top-3 right-3 z-50 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-800 text-white transition-colors duration-200 hover:bg-gray-500 sm:top-4 sm:right-4 sm:h-8 sm:w-8 md:h-10 md:w-10"
                                aria-label="Close advertisement"
                            >
                                ✕
                            </button>
                            <button
                                onClick={() => setCurrentIndex((prev) => (prev - 1 + promos.length) % promos.length)}
                                className="absolute top-1/2 left-2 z-50 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-600 sm:left-4"
                            >
                                ←
                            </button>
                            <button
                                onClick={() => setCurrentIndex((prev) => (prev + 1) % promos.length)}
                                className="absolute top-1/2 right-2 z-50 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-600 sm:right-4"
                                aria-label="Berikutnya"
                            >
                                →
                            </button>

                            <motion.img
                                key={promos[currentIndex].id}
                                src={`/storage/${promos[currentIndex].gambar}`}
                                alt={promos[currentIndex].judul}
                                className="h-[30vh] min-h-[150px] w-full rounded-lg object-contain sm:h-[40vh] sm:min-h-[200px] md:h-[50vh] lg:h-[60vh]"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-1 sm:bottom-4 sm:space-x-1.5 md:bottom-6 md:space-x-2">
                            {promos.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 md:h-3 md:w-3 ${
                                        i === currentIndex ? 'bg-[#EF018F]' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AdModal;
