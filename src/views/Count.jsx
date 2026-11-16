import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rate from '../assets/images/circle-dec.png'
import useInView from '../hooks/useInView'
import useCountUp from '../hooks/useCountUp'

const STATS = [
  { target: 126, label: 'Projects' },
  { target: 63, label: 'Happy Clients' },
  { target: 126, label: 'Awards Wins' },
  { target: 27, label: 'Countries' },
];

const Counter = ({ target, label, start, showDivider }) => {
  const value = useCountUp(target, start);
  return (
    <>
      <div className="rate_num">
        {/* Screen readers get the final number right away; the animated one is decorative */}
        <p aria-hidden="true">{value}</p>
        <span className="sr-only">{target}</span>
        <span>{label}</span>
      </div>
      {showDivider && (
        <div className="img_rate">
          <img src={rate} alt="" />
        </div>
      )}
    </>
  );
};

const Count = () => {
  const [ref, inView] = useInView(0.4);

  return (
    <section className='count' id='count' ref={ref}>
      <Container>
        <Row className="g-4">
          {STATS.map((stat, i) => (
            <Col key={stat.label} xs={6} md={3} className='rate'>
              <Counter {...stat} start={inView} showDivider={i < STATS.length - 1} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Count
