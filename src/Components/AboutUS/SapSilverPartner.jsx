import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const SapSilverPartner = () => {
    return (
        <div>
            <div>
                <img className='w-100' src={require('../Assets/AboutUS/SAP_Partners_Banners_01.jpg')} alt='partner-01' />
            </div>

            <div className='my-5 py-3'>
                <Container>
                    <Row>
                        <div>
                            <p>PiLog is a long standing partner with SAP, having done a large number of projects supporting SAP R/3, ECC, and MDM and now MDG. PiLog is enrolled in the Partner Edge program as a Software Solution Technology Partner (SSTP) and has certification for the integration of PiLog-MDRM with the SAP MM module, which in most projects is the main user of Material and Services Master Data.</p>

                        </div>
                        <div className='d-flex justify-content-center align-items-center  gap-5'>

                            <Link to=''>Find us on SAP Ariba</Link>
                            <Link to=''>Find us on SAP Partner Finder</Link>

                        </div>
                    </Row>
                </Container>
            </div>

            <div className='my-5 py-3'>
                <Container>
                    <Row>
                        <div style={{ textAlign: 'left' }}>
                            <h4 className='text-primary'>PiLog-SAP Relationship</h4>
                            <div className='mt-3'>
                                <ul>
                                    <li>PiLog has been in the master data business for over 2 decades with vast experience across various industries around the globe</li>
                                    <li>PiLog is SAP Partner & VAR under PartnerEdge program as Build - Application Integration & Open Ecosystem respectively</li>
                                    <li>PiLog is engaged with SAP for S/4 Data Cloud under Innovation Program</li>
                                    <li>PiLog's MDG Add-On is the only solution that drives the material master using classification as per ISO standards</li>
                                    <li>PiLog's Add-On Solution extension is Co-Innovated with SAP Labs</li>
                                    <li>PiLog's Master Data Integration Add-On for SAP ERP is certified by SAP Labs</li>
                                    <li>PiLog's MDRM solution is ISO 8000 & ISO 22745 compliant (which is necessary for industry enablement/compliance)</li>
                                    <li>PiLog MDQM V10 has certified integration with S/4 HANA</li>
                                </ul>
                            </div>

                        </div>
                    </Row>
                    <Row className='mt-3'>
                        <Col>
                            <div>
                                <img className='w-50' src={require('../Assets/HomePage/sap-certified.png')} alt='partner-01' />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img className='w-50' src={require('../Assets/HomePage/sap-certified-integration-s4hana.png')} alt='partner-01' />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img className='w-50' src={require('../Assets/HomePage/sap-premium-certified.png')} alt='partner-01' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-5 py-3'>
                <Container>
                    <div style={{ textAlign: 'left' }}>
                        <h4 className='text-primary'>PiLog Add-On Certifications</h4>
                    </div>

                    <div className='my-4 text-primary'>
                        <h5>Master Data Integration:</h5>
                    </div>
                    <Row style={{ justifyContent: 'center' }} className='mt-3'>
                        <Col lg={5} className='border'>
                            <div>
                                <div className='d-flex'><span style={{ fontSize: 28 }}>→</span>
                                    <h6 className='pt-2 mt-1 mx-2'>MDRM V10 & SAP ERP6</h6>
                                </div>
                                <div className='d-flex'><span style={{ fontSize: 28 }}>→</span>
                                    <h6 className='pt-2 mt-1 mx-2'>Certified Domains</h6>
                                </div>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>Material & Service</li>
                                    <li>Vendor & Customer</li>
                                </ul>
                                <div className='d-flex'><span style={{ fontSize: 28 }}>→</span>
                                    <h6 className='pt-2 mt-1 mx-2'>Certified Functions</h6>
                                </div>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>Create, Change, Extend, Delete, Undelete</li>
                                    <li>Block, Unblock</li>
                                    <li>Cockpit Views</li>
                                </ul>

                            </div>
                        </Col>
                        <Col lg={5} className='border'>
                            <div>
                                <div className='d-flex'><span style={{ fontSize: 28 }}>→</span>
                                    <h6 className='pt-2 mt-1 mx-2'>MDRM V10 & SAP S/4 HANA</h6>
                                </div>
                                <div className='d-flex'><span style={{ fontSize: 28 }}>→</span>
                                    <h6 className='pt-2 mt-1 mx-2'>Certified Domains</h6>
                                </div>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>Material & Service</li>
                                    <li>Business Partner</li>
                                </ul>
                                <div className='d-flex'><span style={{ fontSize: 28 }}>→</span>
                                    <h6 className='pt-2 mt-1 mx-2'>Certified Functions</h6>
                                </div>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>Create, Change, Extend, Delete, Undelete</li>
                                    <li>Block, Unblock</li>
                                    <li>Cockpit Views</li>
                                </ul>

                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-3 py-4'>
                        <Col>
                            <div>
                                <img className='w-50' src={require('../Assets/HomePage/sap-certified.png')} alt='partner-01' />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img className='w-50' src={require('../Assets/HomePage/sap-certified-integration-s4hana.png')} alt='partner-01' />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img className='w-50' src={require('../Assets/HomePage/sap-premium-certified.png')} alt='partner-01' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-5 py-3'>
                <Container>
                    <Row>
                        <div style={{ textAlign: 'left' }}>
                            <h4 className='text-primary'>PSAP MDG Co-Innovation Program</h4>

                            <div className='mt-4' style={{ textAlign: 'left' }}><h5>SAP - Master Data Governance for Material:</h5></div>
                            <div className='mt-3'>
                                <div className='d-flex'><span style={{ fontSize: 28 }}>→</span>
                                    <h6 className='pt-2 mt-1 mx-2'>SAP ERP6, EHP8 + SAP MDG80/MDG90</h6>
                                </div>
                                <div className='d-flex'><span style={{ fontSize: 28 }}>→</span>
                                    <h6 className='pt-2 mt-1 mx-2'>SAP S/4 HANA 1709 Versions*</h6>
                                </div>
                                <div className='d-flex'><span style={{ fontSize: 28 }}>→</span>
                                    <h6 className='pt-2 mt-1 mx-2'>Deployment: Co & Hub Model</h6>
                                </div>
                                <div>
                                    <div className='d-flex'><span style={{ fontSize: 28 }}>→</span>
                                        <h6 className='pt-2 mt-1 mx-2'>Add-On Functions</h6>
                                    </div>
                                    <ul>
                                        <li>Taxonomy, Dictionary driven ISO processes</li>
                                        <li>Enterprise Search (Classification, Fuzzy & Free text)</li>
                                        <li>ISO compliant processes, methodology</li>
                                        <li>De-duplication, Description renderer</li>
                                        <li>New Change Requests for material, change, extension, delete & undelete as per Industry best practices</li>
                                        <li>Material Type wise Context Based Adaptations</li>
                                        <li>Auto-mapping of Key fields</li>
                                        <li>Data Quality Rules</li>
                                        <li>Replication to multiple SAP Systems</li>
                                        <li>Content as a service APIs (Micro-services) Industry best practices</li>
                                    </ul>
                                </div>


                            </div>

                        </div>
                    </Row>

                </Container>
            </div>
        </div>
    )
}
