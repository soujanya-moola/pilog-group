import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Coswin = () => {
    return (
        <div>

            <div>
                <img className='hero-img' src={require("../Assets/InnovativeProducts/coswin-Banner3.jpg")} alt='hero-bg-1' />
            </div>

            <div className='my-4 pt-4'>
                <Container>
                    <Row>
                        <Col>
                            <div className='mmt-text'>
                                <p>Coswin 8i is a solution for Computer Maintenance Management and Enterprise Asset Management that improves maintenance management as well as optimising equipment performance. This solution will help you reduce your purchasing costs and stock levels; improve your maintenance staff productivity in full compliance with the rules in force.
                                </p>
                                <p>Each client has their own identity, organization, commercial and information systems. That is why our Coswin software range has been conceived to respond to your specific needs. Whatever the size of your organization, whatever your business, we provide a solution adapted to your needs.</p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-4'>
                <Container>
                    <h2>Products</h2>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require('../Assets/InnovativeProducts/Coswin_nomad_en-Inside-Image-nomad.jpg')} />
                                <Card.Body>
                                    <Link to='CoswinNomad'>
                                    <Button variant="primary">Read More</Button>

                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col> 
                        <Card>
                                <Card.Img variant="top" src={require('../Assets/InnovativeProducts/Coswin_open_en-Inside-Image-open.jpg')} />
                                <Card.Body>
                                    <Link to='CoswinOpen'>
                                    <Button variant="primary">Read More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                                <Card.Img variant="top" src={require('../Assets/InnovativeProducts/Coswin8i-Inside-Image-8i.jpg')} />
                                <Card.Body>
                                    <Link to='Coswin8i'>
                                    <Button variant="primary">Read More</Button>

                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                                <Card.Img variant="top" src={require('../Assets/InnovativeProducts/coswin_smart_generation_en-Inside-Image-smart.jpg')} />
                                <Link to='CoswinSmartGeneration'>
                                    <Button variant="primary">Read More</Button>

                                    </Link>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
