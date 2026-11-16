import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import left from '../../assets/images/left-image.png'

const LeftAbout = () => {
  return (
    <Container className="about mt-5" id='about'>
        <Row className='d-flex align-items-center left_row'>
            <Col className="info col-12 col-sm-12 col-md-6" data-aos="fade-right">
                <img src={left} alt="Team discussing a project" />
            </Col>

            <Col className="info col-12 col-sm-12 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <h3>Let’s discuss about you project</h3>
                <p className='mt-5'>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur.
                    Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default LeftAbout
