import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export const ValuePropositions = () => {
    return (
        <div className='py-2'>
            <div>
                <img className='w-100' src={require('../Assets/ValueProposition/Value_Prosositions_Banner-01.jpg')} />
            </div>
            <div>
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col className='py-2' lg={4} md={6} xs={10}>
                            <Card className='w-100 h-100 shadow bg-white rounded'>
                                <Card.Img variant="top" src={require("../Assets/ValueProposition/Value_Propositions_Images-01.png")} />
                                <Card.Body>
                                    <Card.Title>Extended Supply Chain Optimization</Card.Title>
                                    <Card.Text>
                                    With ~ 70 to 75% average organizational costs associated with materials and services sourcing, procurement and inventory.
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className='py-2' lg={4} md={6} xs={10}>
                            <Card className='w-100 h-100 shadow bg-white rounded' >
                                <Card.Img variant="top" src={require("../Assets/ValueProposition/Value_Propositions_Images-02.png")} />
                                <Card.Body>
                                    <Card.Title>Enduring Asset Lifecycle Management</Card.Title>
                                    <Card.Text>
                                    With most of the organizations looking at IT Asset and Platform, Data Consolidation and Analytics - Robust Digital Roadmap
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className='py-2' lg={4} md={6} xs={10}>
                            <Card className='w-100 shadow bg-white rounded' >
                                <Card.Img variant="top" src={require("../Assets/ValueProposition/Business_Partner_Life_Cycle_Image.png")} />
                                <Card.Body>
                                    <Card.Title>Business Partner Life Cycle Management</Card.Title>
                                    <Card.Text>
                                    With ZERO appetite for asset replacement in aging industries, industry leaders nightmare in enduring performance from old warhorses is pretty evident
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className='py-2' lg={4} md={6} xs={10}>
                            <Card className='w-100 h-100 shadow bg-white rounded' >
                                <Card.Img variant="top" src={require("../Assets/ValueProposition/Value_Propositions_Images-04.png")} />
                                <Card.Body>
                                    <Card.Title>Seamless Data Migration</Card.Title>
                                    <Card.Text>
                                    With most of the organizations looking at IT Asset and Platform, Data Consolidation and Analytics - Robust Digital Roadmap
                                     </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className='py-2' lg={4} md={6} xs={10}>
                            <Card className='w-100 h-100 shadow bg-white rounded' >
                                <Card.Img variant="top" src={require("../Assets/ValueProposition/Value_Propositions_Images-05.png")} />
                                <Card.Body>
                                    <Card.Title>Digital Transformation and Automation</Card.Title>
                                    <Card.Text>
                                    PiLog, as renowned partner of choice has been assisting clients across industry domains in journey to excel in Digital Asset Management.</Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
