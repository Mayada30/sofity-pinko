import card from '../../assets/images/featured-item-01.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FEATURES = [
    { title: 'Modern Strategy', text: 'Customize anything in this template to fit your website needs' },
    { title: 'Best Relationship', text: 'Contact us immediately if you have a question in mind' },
    { title: 'Ultimate Marketing', text: 'You just need to tell your friends about our free templates' },
];

const Card = () => (
    <Container className="cards">
        <Row className="g-4 justify-content-center">
            {FEATURES.map(({ title, text }, i) => (
                <Col key={title} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="card h-100">
                        <div className="img">
                            <img src={card} alt="" />
                        </div>
                        <h5>{title}</h5>
                        <p>{text}</p>
                    </div>
                </Col>
            ))}
        </Row>
    </Container>
)

export default Card
