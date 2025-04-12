import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(Observer);

export default function InfiniteScroll({
    width = '30rem',
    maxHeight = '100%',
    negativeMargin = '-0.5em',

    items = [],
    itemMinHeight = 150,

    isTilted = false,
    tiltDirection = 'left',
    autoplay = false,
    autoplaySpeed = 0.5,
    autoplayDirection = 'down',
    pauseOnHover = false,
}) {
    const wrapperRef = useRef(null);
    const containerRef = useRef(null);

    const getTiltTransform = () => {
        if (!isTilted) return 'none';
        return tiltDirection === 'left' ? 'rotateX(20deg) rotateZ(-20deg) skewX(20deg)' : 'rotateX(20deg) rotateZ(20deg) skewX(-20deg)';
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        if (items.length === 0) return;

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

        const observer = Observer.create({
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

        let rafId;
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

            return () => {
                observer.kill();
                rafId && cancelAnimationFrame(rafId);
            };
        }

        return () => {
            observer.kill();
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [items, autoplay, autoplaySpeed, autoplayDirection, pauseOnHover, isTilted, tiltDirection, negativeMargin]);

    return (
        <div
            className="relative flex w-full items-center justify-between gap-8 overflow-hidden overscroll-none px-8"
            ref={wrapperRef}
            style={{ maxHeight }}
        >
            <div className="z-10 ml-20 max-w-lg font-['DM_Sans'] text-xl leading-tight font-bold md:text-2xl lg:text-3xl">
                "Dunia terlalu luas untuk diam di satu tempat, dan hidup terlalu singkat untuk menunda perjalanan."
            </div>

            <div className="pointer-events-none absolute inset-0 w-full bg-gradient-to-b from-[#CCE0FD] via-[#9EC6FF] to-[#CCE0FD]"></div>

            <div
                className="flex origin-center cursor-grab flex-col overscroll-contain"
                ref={containerRef}
                style={{
                    width: '400px',
                    transform: getTiltTransform(),
                }}
            >
                {items.map((item, i) => (
                    <div
                        className="relative box-border flex items-center justify-center overflow-hidden rounded-[15px] select-none"
                        key={i}
                        style={{
                            height: `${itemMinHeight * 0.8}px`,
                            marginTop: negativeMargin,
                        }}
                    >
                        <img src={item.content} alt={`Slide ${i + 1}`} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}
