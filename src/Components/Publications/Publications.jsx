import React from 'react'
import '../Innovative_Products/InnovativeProducts.css'

import { Button, Col, Container, Row } from 'react-bootstrap'

export const Publications = () => {
  return (
    <div>
            <div className='innovate-product-hero'>
                <img className='w-100' src={require('../Assets/PublicationImages/Publications_Banner.jpg')} />
                <div className='innovate-product-hero-title' >
                    <h1>Publications</h1>
                </div>
            </div>
            <div>
                <Container>
                    <Row  className='innov-products'>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/PublicationImages/News and Events_Side_Banner.jpg')} />

                        </Col>
                        <Col lg={5} xs={12}>
                        <h4 className='mdrm-text'>News & Events</h4>
                        <p>The latest news and events from our global activities.</p>
                        <Button>Read More</Button>
                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products '>
                       
                        <Col lg={5} xs={12}>
                        <h4 className='mdrm-text'>Blogs</h4>
                        <p>Discover all the latest about our Products, Solutions & Technologies.</p>
                        <Button>Read More</Button>
                        </Col>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/PublicationImages/Blogs_Side_Banner.jpg')} />

                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/PublicationImages/Brochure_Side_banner.jpg')} />

                        </Col>
                        <Col>
                        <h4 className='mdrm-text'>Brochures</h4>
                        <p>Highly recommended solutions in one go</p>
                        <Button>Read More</Button>
                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                       
                        <Col>
                        <h4 className='mdrm-text'>Videos</h4>
                        {/* <p>ISO 8000 compliant data models and structures. Data Cleansing, Harmonization, Validation & Enrichment.</p> */}
                        <Button>Read More</Button>
                        </Col>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/PublicationImages/Video_Banner.jpg')} />

                        </Col>
                    </Row>
                   
                </Container>
            </div>

        </div>
  )
}
