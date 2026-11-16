import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// `included: false` renders the feature struck-through
const PLANS = [
  {
    name: 'Starter',
    price: '14.50',
    featured: false,
    features: [
      { label: '60 GB space', included: true },
      { label: '600 GB transfer', included: true },
      { label: 'Pro Design Panel', included: true },
      { label: '15-minute support', included: false },
      { label: 'Unlimited Emails', included: false },
      { label: '24/7 Security', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '21.50',
    featured: true,
    features: [
      { label: '120 GB space', included: true },
      { label: '1200 GB transfer', included: true },
      { label: 'Pro Design Panel', included: true },
      { label: '15-minute support', included: true },
      { label: 'Unlimited Emails', included: false },
      { label: '24/7 Security', included: false },
    ],
  },
  {
    name: 'Advanced',
    price: '42.00',
    featured: false,
    features: [
      { label: '250 GB space', included: true },
      { label: '5000 GB transfer', included: true },
      { label: 'Pro Design Panel', included: true },
      { label: '15-minute support', included: true },
      { label: 'Unlimited Emails', included: true },
      { label: '24/7 Security', included: true },
    ],
  },
];

const Price = () => {
  return (
    <section className='price mt-5' id='price'>
      <Container>
        <Row>
          <Col className='title' data-aos="fade-up">
            <h3>Pricing Plans</h3>
            <p className='mt-4'>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
          </Col>
        </Row>
        <Row className='mt-5 g-4'>
          {PLANS.map(({ name, price, featured, features }, i) => (
            <Col key={name} xs={12} md={4} data-aos="fade-up" data-aos-delay={i * 120}>
              <article className={`list${featured ? ' list--featured' : ''}`}>
                <p className="name">{name}</p>

                {/* 1. Plan description */}
                <div className="details">
                  {features.map(({ label, included }) => (
                    <p key={label}>{included ? label : <del>{label}</del>}</p>
                  ))}
                </div>

                {/* 2. Price */}
                <div className="num">
                  <p className="num__value"><span>$</span> {price}</p>
                  <p><small>monthly</small></p>
                </div>

                {/* 3. Purchase button */}
                <Button>PURCHASE NOW</Button>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Price
