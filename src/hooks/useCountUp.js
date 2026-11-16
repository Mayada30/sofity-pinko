import { useEffect, useState } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Animates an integer from 0 to `target` once `start` is true.
 * The last frame always sets the value to exactly `target`.
 */
const useCountUp = (target, start, duration = 2200) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return undefined;

        const reduceMotion =
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion) {
            setValue(target);
            return undefined;
        }

        let frame;
        let startTime = null;

        const tick = (now) => {
            if (startTime === null) startTime = now;
            const progress = Math.min((now - startTime) / duration, 1);
            setValue(progress < 1 ? Math.round(easeOutCubic(progress) * target) : target);
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [target, start, duration]);

    return value;
};

export default useCountUp;
