import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, inView]. `inView` flips to true once the element enters the
 * viewport and stays true (one-shot), which is what entrance/counter
 * animations need.
 */
const useInView = (threshold = 0.35) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        if (typeof IntersectionObserver === 'undefined') {
            setInView(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
};

export default useInView;
