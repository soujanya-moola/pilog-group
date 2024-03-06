import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export const Corporate = () => {
    return (
        <div>
            <div className='position-relative text-align-center text-light'>
                <img className='w-100' src={require('../Assets/AboutUS/Corporate_Banners.jpg')} alt='Innovative products-mdo-banner' />
                <div className='ppo position-absolute top-50 left-15 transform-translate(-50%, -50%)' style={{ left: 200 }}>
                    <h1>
                        Corporate
                    </h1>
                </div>
            </div>
            <div className='mt-2 py-5 bg-light'>
                <Container>
                    <div>
                        <h3>About PiLog</h3>
                    </div>
                    <Row className='mt-5 pt-3' style={{textAlign:'left'}}>
                        <Col>
                            <p className='d-flex justify-content-center align-items-left text-align-left'>Established in 1996, PiLog Group is a global group of independent companies, specializing in Quality Data and Digital Governance and Analytical solutions supporting multiple data domains in a variety of industries all over the globe. We have many resources operating globally including Africa's, America's, Europe, Middle East, Asia, etc. The PiLog's solutions are state of the art, focused on creating a common business language and managing the rules for the creation of high quality, multilingual terminology using Machine Learning, Artificial Intelligence technologies, and human-augmented algorithms for our customers who are eager to transform their businesses digitally.</p>
                        </Col>
                        <Col>
                            <p>PiLog provides exclusive technical dictionaries, industrial libraries with content repositories that are the culmination of research, development, and execution over the past twenty years embedded into the platform of PiLog Data Quality HUB. All our methodologies, processes, solutions are compliant with international standards for delivering seamless systematic integration of content into various platforms such as SAP, S4 HANA, Oracle ERP Cloud, Maximo, MS Dynamics and more.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='mt-2 py-5'>
                <Container>
                    <div>
                        <h3>Fact Sheet</h3>
                    </div>
                    <Row className='mt-5 pt-3'>
                        <Col lg={3} md={6} className='mt-4'>
                            <Card style={{height:'18rem'}}>
                                <Card.Img variant="top" src={require('../Assets/AboutUS/Fact_Sheet-01.png')}/>
                                <Card.Body>
                                    <Card.Title className='text-primary'>Awards</Card.Title>
                                    <Card.Text>
                                        PiLog Group has been Awarded Best Idea Award from our Global Business customer Vedanta
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className='mt-4'>
                            <Card style={{height:'18rem'}}>
                            <Card.Img variant="top" src={require('../Assets/AboutUS/Fact_Sheet-02.png')}/>

                                <Card.Body>
                                    <Card.Title  className='text-primary'>Partners</Card.Title>
                                    <Card.Text>
                                    PiLog is a long standing partner with SAP, having done a large number of projects
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className='mt-4'>
                            <Card style={{height:'18rem'}}>
                            <Card.Img variant="top" src={require('../Assets/AboutUS/Fact_Sheet-03.png')}/>

                                <Card.Body>
                                    <Card.Title  className='text-primary'>PiLog Preferred Records</Card.Title>
                                    <Card.Text>
                                    PiLog has over 10+ million Material, Equipment and Service Master Records
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className='mt-4'>
                            <Card style={{height:'18rem'}}>
                            <Card.Img variant="top" src={require('../Assets/AboutUS/Fact_Sheet-04.png')}/>

                                <Card.Body>
                                    <Card.Title className='text-primary'>PiLog Preferred Hierarchy</Card.Title>
                                    <Card.Text>
                                    Process of collecting spend data from all purchasing sources and systems to impact spending trends and savings.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className='mt-4'>
                            <Card style={{height:'18rem'}}>
                            <Card.Img variant="top" src={require('../Assets/AboutUS/Fact_Sheet-05.png')}/>

                                <Card.Body>
                                    <Card.Title  className='text-primary'>History</Card.Title>
                                    <Card.Text>
                                    Year by year momentum on Strategical and Tactical innovations entitled us as the Digital Transformation Experts in the market
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className='mt-4'>
                            <Card style={{height:'18rem'}}>
                            <Card.Img variant="top" src={require('../Assets/AboutUS/Fact_Sheet-06.png')}/>

                                <Card.Body>
                                    <Card.Title className='text-primary'>Taxonomy/Dictionary</Card.Title>
                                    <Card.Text>
                                    PiLog's taxonomy is covering all the templates of all major industry sectors
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className='mt-4'>
                            <Card style={{height:'18rem'}}>
                            <Card.Img variant="top" src={require('../Assets/AboutUS/Fact_Sheet-07.png')}/>

                                <Card.Body>
                                    <Card.Title className='text-primary'>Customers</Card.Title>
                                    <Card.Text>
                                    PiLog has customers across the globe from almost every industry sector
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className='mt-4'>
                            <Card style={{height:'18rem'}}>
                            <Card.Img variant="top" src={require('../Assets/AboutUS/Fact_Sheet-08.png')}/>

                                <Card.Body>
                                    <Card.Title className='text-primary'>Add-Ons, Certifications and Cloud Ready</Card.Title>
                                    <Card.Text>
                                    SAP certified integration with SAP ECC and S/4 HANA, Co-Innovation Partner
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>


        </div>
    )
}
