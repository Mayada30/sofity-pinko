import Button from 'react-bootstrap/Button';

const Welcome = () => {
    return(
        <section className="welcome" id="welcome">
            <div className="info">
                <h1 data-aos="fade-down">We provide the best <strong>strategy</strong></h1>
                <h2 data-aos="fade-down" data-aos-delay="120">to grow up your <strong>business</strong></h2>
                <p data-aos="fade-up" data-aos-delay="240">Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo for your company at absolutely free of charge</p>
                <Button href="#about" data-aos="zoom-in" data-aos-delay="360">discover more</Button>
            </div>
        </section>
    )
}

export default Welcome
