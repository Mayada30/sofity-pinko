import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png'

const LINKS = [
    { id: 'welcome', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work Process' },
    { id: 'testi', label: 'Testimonials' },
    { id: 'price', label: 'Pricing Tables' },
    { id: 'blog', label: 'Blog Entries' },
    { id: 'contact', label: 'Contact Us' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('welcome');
    const [expanded, setExpanded] = useState(false);

    // Compact the bar slightly after the page starts scrolling
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Highlight the link of the section currently in view
    useEffect(() => {
        const sections = LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean);
        if (!sections.length || typeof IntersectionObserver === 'undefined') return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <Navbar
            className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
            expand="lg"
            expanded={expanded}
            onToggle={setExpanded}
        >
            <Container fluid className="navbar__inner">
                <Navbar.Brand href="#welcome">
                    <img src={logo} className="d-inline-block align-top" alt="Softy Pinko" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="links">
                        {LINKS.map(({ id, label }) => (
                            <Nav.Link
                                key={id}
                                href={`#${id}`}
                                className={active === id ? 'active' : ''}
                                onClick={() => setExpanded(false)}
                            >
                                {label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header
