import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import entry01 from '../assets/images/blog-item-01.png'
import entry02 from '../assets/images/blog-item-02.png'
import entry03 from '../assets/images/blog-item-03.png'

const ENTRIES = [
  {
    img: entry01,
    title: 'Vivamus ac vehicula dui',
    text: 'Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.',
  },
  {
    img: entry02,
    title: 'Phasellus convallis augue',
    text: 'Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.',
  },
  {
    img: entry03,
    title: 'Nam gravida purus non',
    text: 'Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.',
  },
];

const Blog = () => {
  return (
    <section className='blog mt-5 mb-5' id='blog'>
      <Container>
        <Row>
          <Col className='title' data-aos="fade-up">
            <h3>Blog Entries</h3>
            <p className='mt-4'>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
          </Col>
        </Row>
        <Row className='mt-5 g-4'>
          {ENTRIES.map(({ img, title, text }, i) => (
            <Col key={title} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay={i * 150}>
              <article className='entry'>
                <div className="entry__media">
                  <img src={img} alt={title} loading="lazy" />
                </div>

                <div className="txt">
                  <h5><a href="#blog">{title}</a></h5>
                  <p>{text}</p>
                </div>

                <Button>READ MORE</Button>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Blog
