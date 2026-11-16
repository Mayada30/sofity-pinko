import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
    disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
});

// Layout shifts when images/fonts load, so re-measure trigger positions
window.addEventListener('load', () => AOS.refresh());
