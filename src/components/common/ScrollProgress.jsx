import { useEffect, useRef } from 'react';

/**
 * Thin purple/pink gradient bar pinned to the very top of the page.
 * It fills as the visitor scrolls. Updated through a ref + rAF so React
 * does not re-render on every scroll event.
 */
const ScrollProgress = () => {
    const barRef = useRef(null);

    useEffect(() => {
        let frame = null;

        const update = () => {
            frame = null;
            const doc = document.documentElement;
            const max = doc.scrollHeight - doc.clientHeight;
            const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
            if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
        };

        const onScroll = () => {
            if (frame === null) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div className="top-line" aria-hidden="true">
            <span ref={barRef} className="top-line__bar" />
        </div>
    );
};

export default ScrollProgress;
