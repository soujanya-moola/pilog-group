import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const SivecoGroupCoswin = () => {
    return (
        <div>
            <div>
                <img className='w-100' src={require('../Assets/AboutUS/corporate_eng-Banner.jpg')} alt='partner-01' />
            </div>

            <div className='my-3 py-3'>
                <Container style={{ textAlign: 'left' }}>
                    <h6 style={{ lineHeight: 2 }}>Siveco Group has developed Maintenance Management software since 1986 and is today a key CMMS player in France and throughout the world. Over 30 years, Siveco Group has acquired a solid experience in the management of projects of all sizes. Our Company gives priority to Customer Care and has succeeded in building customers loyalty with both International Major Groups and SMEs.</h6>

                </Container>

            </div>

            <div className='siveo-group'>
                <Container style={{ textAlign: 'left' }}>
                    <Row >
                        <div>
                            <h4 className='text-primary'>
                                CMMS, the indispensable tool to steer your maintenance operations
                            </h4>
                        </div>
                        <div style={{ lineHeight: 2 }}>
                            <p>CMMS has become essential to manage and steer your maintenance department. CMMS software is a valuable tracking, archiving and analysis tool, so a decisional aid. Benefits are numerous : reduction of material costs, increase in the availability and reliability of equipment, improvements in cost control, maintenance planning, actual maintenance time and spare parts management.</p>
                        </div>
                    </Row>
                    <Row className='py-4'>
                        <Col lg={4}>
                            <div>
                                <img className='w-75' src={require('../Assets/AboutUS/A-tailor-made-offering-image.jpg')} alt='partner-01' />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div>
                                <h4 className='text-primary'>
                                    A tailor-made offering
                                </h4>
                            </div>
                            <div style={{ lineHeight: 2 }}>
                                <p>Each client has their own identity, organization, commercial and information systems. That is why our Coswin software range has been conceived to respond to your specific needs.</p>
                                <p>Whatever the size of your organization, whatever your business, we provide a solution adapted to your needs.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='py-4'>
                        <Col lg={4}>
                            <div>
                                <img className='w-75' src={require('../Assets/AboutUS/Our-experts-at-your-disposal-image.jpg')} alt='partner-01' />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div>
                                <h4 className='text-primary'>

                                    Our experts at your disposal
                                </h4>
                            </div>
                            <div style={{ lineHeight: 1.5 }}>
                                <p>The quality of Siveco Group know how rests on the expertise of its teams :</p>
                                <p><b>Research & Development : </b> innovative solutions</p>
                                <p><b>Consulting & Projects :</b>  a personalized support and a complete range of services to implement Coswin simply and efficiently.</p>
                                <p><b>Technical Support : </b> technical assistance assured by functional experts.</p>

                            </div>
                        </Col>
                    </Row>
                    <Row className='py-4'>
                        <Col lg={4}>
                            <div>
                                <img className='w-75' src={require('../Assets/AboutUS/A-tailor-made-offering-image.jpg')} alt='partner-01' />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div>
                                <h4 className='text-primary'>
                                    International presence
                                </h4>
                            </div>
                            <div style={{ lineHeight: 2 }}>
                                <p>Siveco Group has a strong distribution network which represents the Company in over 60 countries around the world, either directly through its subsidiaries, or indirectly through 20 distributors. The coverage and the experience of this distribution network allow Siveco Group to act in foreign markets efficiently and with rapid responsiveness.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

            <div>
                <Container>
                    <Row className='mt-3' style={{textAlign:'left'}}>
                        <div>
                            <h4 className='text-primary'>
                                1700 customer references in all industries
                            </h4>
                        </div>
                        <div style={{ lineHeight: 2 }}>
                            <p>With over 1700 customer references and several tens of thousands of users around the world, Siveco Group guarantees an industry expertise that has been implemented in the largest companies.</p>
                        </div>
                    </Row>
                    <Row className='mt-3'>
                        <Col>
                        <div>
                                <img className='w-75' src={require('../Assets/AboutUS/Industry-image.jpg')} alt='partner-01' />
                                <h6>Industry</h6>
                            </div>
                        </Col>
                        <Col>
                        <div>
                                <img className='w-75' src={require('../Assets/AboutUS/Facility-management-image.jpg')} alt='partner-01' />
                                <h6>Facility management</h6>
                            </div>
                        </Col>
                        <Col>
                        <div>
                                <img className='w-75' src={require('../Assets/AboutUS/Energy-image.jpg')} alt='partner-01' />
                                <h6>Energy</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col>
                        <div>
                                <img className='w-75' src={require('../Assets/AboutUS/Healthcare-image.jpg')} alt='partner-01' />
                                <h6>Healthcare</h6>
                            </div>
                        </Col>
                        <Col>
                        <div>
                                <img className='w-75' src={require('../Assets/AboutUS/Transports-&-logistics-image.jpg')} alt='partner-01' />
                                <h6>Transports & logistics</h6>
                            </div>
                        </Col>
                        <Col>
                        <div>
                                <img className='w-75' src={require('../Assets/AboutUS/Defense-image.jpg')} alt='partner-01' />
                                <h6>Defense

</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

