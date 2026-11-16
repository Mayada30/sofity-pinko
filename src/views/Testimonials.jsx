import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import testi from '../assets/images/testimonial-icon.png'

const TESTIMONIALS = [
  {
    text: 'Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.',
    name: 'Catherine Soft',
    role: 'Managing Director',
  },
  {
    text: 'Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.',
    name: 'Kelvin Wood',
    role: 'Digital Marketer',
  },
  {
    text: 'Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.',
    name: 'David Martin',
    role: 'Website Manager',
  },
];

const Testimonials = () => {
  return (
    <section className='testi mt-5 mb-5' id='testi'>
      <Container>
        <Row>
          <Col className='title' data-aos="fade-up">
            <h3>What do they say?</h3>
            <p className='mt-4'>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
          </Col>
        </Row>
        <Row className='mt-5 g-4'>
          {TESTIMONIALS.map(({ text, name, role }, i) => (
            <Col key={name} xs={12} md={4} data-aos="fade-up" data-aos-delay={i * 120}>
              <article className='testimonial'>
                <div className='testimonial__icon'>
                  <img src={testi} alt='' />
                </div>
                <p className='testimonial__text'>{text}</p>
                <div className="desc">
                  <h5>{name}</h5>
                  <p>{role}</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
