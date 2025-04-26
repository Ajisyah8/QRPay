import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const InfiniteScroll = ({
    width = '100%',
    maxHeight = '100%',
    negativeMargin = '-2.5em',
    items = [],
    itemMinHeight = 150,
    isTilted = false,
    tiltDirection = 'left',
    autoplay = false,
    autoplaySpeed = 0.5,
    autoplayDirection = 'down',
    pauseOnHover = false,
}) => {
    const wrapperRef = useRef(null);
    const containerRef = useRef(null);

    const [windowWidth, setWindowWidth] = useState(0);

    // Handle window width on client-side only
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getTiltTransform = () => {
        if (!isTilted) return 'none';
        return tiltDirection === 'left' ? 'rotateX(20deg) rotateZ(-20deg) skewX(20deg)' : 'rotateX(20deg) rotateZ(20deg) skewX(-20deg)';
    };

    useEffect(() => {
        let observer;
        let rafId;

        if (typeof window !== 'undefined') {
            import('gsap/Observer').then((module) => {
                const Observer = module.default;
                gsap.registerPlugin(Observer);

                const container = containerRef.current;
                if (!container || items.length === 0) return;

                const divItems = gsap.utils.toArray(container.children);
                if (!divItems.length) return;

                const firstItem = divItems[0];
                const itemStyle = getComputedStyle(firstItem);
                const itemHeight = firstItem.offsetHeight;
                const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
                const totalItemHeight = itemHeight + itemMarginTop;
                const totalHeight = itemHeight * items.length + itemMarginTop * (items.length - 1);

                const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

                divItems.forEach((child, i) => {
                    const y = i * totalItemHeight;
                    gsap.set(child, { y });
                });

                observer = Observer.create({
                    target: container,
                    type: 'wheel,touch,pointer',
                    preventDefault: true,
                    onPress: ({ target }) => {
                        target.style.cursor = 'grabbing';
                    },
                    onRelease: ({ target }) => {
                        target.style.cursor = 'grab';
                    },
                    onChange: ({ deltaY, isDragging, event }) => {
                        const d = event.type === 'wheel' ? -deltaY : deltaY;
                        const distance = isDragging ? d * 5 : d * 10;
                        divItems.forEach((child) => {
                            gsap.to(child, {
                                duration: 0.5,
                                ease: 'expo.out',
                                y: `+=${distance}`,
                                modifiers: {
                                    y: gsap.utils.unitize(wrapFn),
                                },
                            });
                        });
                    },
                });

                if (autoplay) {
                    const directionFactor = autoplayDirection === 'down' ? 1 : -1;
                    const speedPerFrame = autoplaySpeed * directionFactor;

                    const tick = () => {
                        divItems.forEach((child) => {
                            gsap.set(child, {
                                y: `+=${speedPerFrame}`,
                                modifiers: {
                                    y: gsap.utils.unitize(wrapFn),
                                },
                            });
                        });
                        rafId = requestAnimationFrame(tick);
                    };

                    rafId = requestAnimationFrame(tick);
                }
            });
        }

        return () => {
            if (observer) observer.kill();
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [items, autoplay, autoplaySpeed, autoplayDirection, pauseOnHover, isTilted, tiltDirection, negativeMargin]);

    return (
        <div
            className="relative flex min-h-[400px] w-full flex-row items-center justify-between overflow-hidden overscroll-none px-4 py-6 sm:min-h-[500px] md:min-h-[600px]"
            ref={wrapperRef}
            style={{ maxHeight }}
        >
            <div className="z-10 -mt-15 w-1/2 max-w-[280px] pl-0 text-left sm:mt-0 sm:max-w-[400px] sm:pl-8 md:max-w-[600px] md:pl-12 lg:pl-16">
                <p className="font-['DM_Sans'] text-base leading-tight font-bold sm:text-lg md:text-xl lg:text-2xl">
                    "Dunia terlalu luas untuk diam di satu tempat, dan hidup terlalu singkat untuk menunda perjalanan."
                </p>
            </div>

            <div className="pointer-events-none absolute inset-0 w-full bg-gradient-to-b from-[#CCE0FD] via-[#9EC6FF] to-[#CCE0FD]"></div>

            <div
                className="flex w-[140px] origin-center cursor-grab flex-col overscroll-contain sm:w-[200px] md:w-[280px]"
                ref={containerRef}
                style={{
                    transform: getTiltTransform(),
                }}
            >
                {items.map((item, i) => (
                    <div
                        className="relative box-border flex items-center justify-center overflow-hidden rounded-[15px] select-none"
                        key={i}
                        style={{
                            height: `${itemMinHeight * (windowWidth < 640 ? 0.7 : windowWidth < 768 ? 0.8 : 0.9)}px`,
                            marginTop: negativeMargin,
                        }}
                    >
                        <img src={item.content} alt={`Slide ${i + 1}`} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;
