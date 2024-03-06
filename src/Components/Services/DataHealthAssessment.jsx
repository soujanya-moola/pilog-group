import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const DataHealthAssessment = () => {
  return (
    <div>
        <div className='services-dha'>
                {/* <img className='w-100' src={require('../Assets/Services/banner-large.jpg')} alt='service-da-banner' /> */}
                <div>
                    <h1>Data Health Assessment</h1>
                    <p>Qualitative data management against standards and provisional reporting</p>
                    </div>
            </div>
            <div>
                <Container>
                    <Row className='service-dha-content'>
                        <Col lg={8}>
                            <div>
                                <p>Our Data Assessment is a services engagement backed by our applications that delivers report findings identifying specific data challenges that may be hindering your operational efficiency and ability to achieve successful business outcomes based on the health of your data.</p>
                                <p>The Data Health Assessment will provide the As-Is existing data quality of the organization along with it’s impact and recommendations.</p>
                                <p>Data Health Assessment covers all the MDM Domains such as Material, Vendor, Service, Asset, Customer Etc..</p>
                                <p>PiLog's Data Health Assessment framework which enables to statistical check the data and its accuracy. For any ERP users, fact-based reports can be built in their respective ERP's Information Steward to allow you to review and address errors and to prepare for a larger data quality initiative.</p>
                            </div>

                        </Col>
                        <Col lg={4}>
                        <div>
                            <img className='w-100 rounded' src={require('../Assets/Services/dha-img1.jpg')} alt='dm-img1'/>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='bg-light py-3'>
                <h4 className='text-primary'>Process features:</h4>
                <Container>
                    <Row className='service-dha-content'>
                        <Col lg={6}>
                        <div>
                            <img className='w-75 rounded' src={require('../Assets/Services/dha-img2.jpg')} alt='dm-img1'/>

                            </div>
                        </Col>
                        <Col lg={6}>
                            <div >
                                <ul>
                                    <li className='py-1'>Analyzing of Data quantity and complexity which will be critical for project scoping</li>
                                    <li className='py-2'>Issues related to Source data which can cause interface load or migration errors such as Duplicates, improper information, missing of UoM, or unusual values.</li>
                                    <li className='py-2'>Best practices with fully enhanced system driven processes to brought-up the exceptional outcome for relevant industries</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='py-4'>
                <h4 className='text-primary'>Beneficial use of the reports:</h4>
                <Container>
                    <Row className='service-dha-content'>
                        
                        <Col lg={6}>
                            <div >
                                <ul>
                                    <li className='py-1'>Able to prepare for a successful data migration post analysis</li>
                                    <li className='py-2'>Detailed Gap Analysis on the existing Data Quality</li>
                                    <li className='py-2'>Recommendations to maximise the quality of overall data</li>
                                    <li className='py-2'>Embrace blueprint to prioritize steps for passive data governance across systems.</li>
                                    <li>Reduce unnecessary infrastructure costs and complexity of your new system for better operational efficiencies</li>
                                    <li>Enablement of smooth and simplified workflow.</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <div>
                            <img className='w-75 rounded' src={require('../Assets/Services/dha-img3.jpg')} alt='dm-img1'/>

                            </div>
                        </Col>
                    </Row>
                    <p>So lets find out what we discover in your data and how we can help you overcome from unstructured data.</p>
                </Container>
            </div>
    </div>
  )
}
