import React from 'react'
import { Button, Carousel, Col, Container, Row, Table } from 'react-bootstrap'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ForwardIcon from '@mui/icons-material/Forward';
import businessicon1 from '../Assets/ValueProposition/business-partner/Business_Partner_Registration-Icons-01.svg';
import businessicon2 from '../Assets/ValueProposition/business-partner/Business_Partner_Registration-Icons-02.svg';
import businessicon3 from '../Assets/ValueProposition/business-partner/Business_Partner_Registration-Icons-03.svg';
import businessicon4 from '../Assets/ValueProposition/business-partner/Business_Partner_Registration-Icons-04.svg';

import businessicon5 from '../Assets/ValueProposition/business-partner/Business_Partner_Registration-Icons-05.svg';

import businessicon6 from '../Assets/ValueProposition/business-partner/Business_Partner_Registration-Icons-06.svg';
import businessicon7 from '../Assets/ValueProposition/business-partner/Business_Partner_Registration-Icons-07.svg';
import businessicon8 from '../Assets/ValueProposition/business-partner/Business_Partner_Registration-Icons-08.svg';
import businessicon9 from '../Assets/ValueProposition/business-partner/Business_Partner_Registration-Icons-09.svg';
import businessicon10 from '../Assets/ValueProposition/business-partner/Business_Partner_Registration-Icons-10.svg';





import { businesspartnericon } from '../Assets/ValueProposition/Business-Partner-Life-Cycle-Management/Business_Partner_Registration-Icons-01.svg';
import { businescustomericon } from '../Assets/ValueProposition/Business-Partner-Life-Cycle-Management/Business_Partner_Registration-Icons-02.svg';



export const BusinessPartnerLifeCycleManagement = () => {
    return (
        <div>
            <div className='bplcm'>
                <h1>Business Partner Life Cycle Management</h1>
                <h6>With ZERO appetite for asset replacement in aging industries, industry leaders nightmare in enduring performance from old warhorses is pretty evident</h6>

            </div>

            <div className='my-4 bg-light py-5'>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center text-align-left'>
                        <Col>
                            <div>
                                <img className='w-100' src={require('../Assets/ValueProposition/Extended Supply Chain Optimization/Organizations-hunger-to-save-money_Inforgraphic-01.png')} alt='esco-part1-img' />
                            </div>

                        </Col>
                        <Col>
                            <div className='esco-part2'>

                                <h6>“Amidst of COVID - 19 pandemic situations, it’s very evident, more and more hands
                                    joining to challenge and defeat unprecedented impacts is vital. Ability to have
                                    sustainable and extended partners though is challenging but not impossible ”</h6>

                                <h5 className='my-3'>“ UNITED WE SUSTAIN, DIVIDED WE PERISH ”</h5>
                                <div>
                                    <h6>Organization Strategic Thinkers always self-reflect opportunities… WHOM and HOW!!!</h6>
                                    <ul>
                                        <li>Partner Performance Visibility…</li>
                                        <li>Mutual value generation information…</li>
                                        <li>Avenues of partnership…</li>
                                        <li>Achieve industry benchmarks - KPI’s and KRA’s</li>
                                        <li>Lower Total Cost of Ownership...</li>

                                    </ul>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>



            <div className='py-4'>
                <Container>
                <h3>Business Partner Risk Management Framework</h3>

                    <Carousel className='mca-analisys '>
                        <Carousel.Item className='py-2'>

                            <Row className='my-4'>
                                <Col>
                                    {/* <img className='w-100' src={businesspartnericon} alt='mca-carosal-img' /> */}
                                    <div>
                                    <img className='' style={{width:50}} src={businessicon1} alt='mca-carosal-img' />

                                    </div>
                                    <h6>Business Partner Self Service</h6>
                                    <div className='forword-Icon'>
                                        <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                    </div>
                                </Col>
                                <Col>
                                <div>
                                <img className='' style={{width:50}} src={businessicon2} alt='mca-carosal-img' />

                                </div>
                                    {/* <img className='w-100' src={businescustomericon} alt='mca-carosal-img' /> */}
                                    <h6>Business Partner Self Service</h6>
                                    <div className='forword-Icon'>
                                        <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4 className='bg-primary text-light m-2 p-2'>PiLog MDRM Platform (Business Partner Master Life Cycle Management)</h4></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                    <img className='w-25' src={businessicon7} alt='mca-carosal-img' />

                                    </div>
                                    <div className='d-flex'>
                                        <h6>Basic Business Partner Information</h6>
                                        <div className='d-flex justify-conent-center align-items-center text-align-center'><ForwardIcon className='icon-rotate' style={{ fontSize: 60 }}/></div>
                                    </div>
                                    <div className='esco-part2'>
                                        <p>Business Partner Data Collection</p>
                                        <ul>
                                            <li>Basic information</li>
                                            <li>Financial Information</li>
                                            <li>Capability Information</li>
                                            <li>Reference and clientele base</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                    <img className='w-25' src={businessicon8} alt='mca-carosal-img' />

                                    </div>
                                    <div className='d-flex'>
                                        <h6>Evaluation of Basic Information</h6>
                                        <div className='d-flex justify-conent-center align-items-center text-align-center'><ForwardIcon className='icon-rotate' style={{ fontSize: 60 }}/></div>
                                    </div>
                                    <div className='esco-part2'>
                                        <p>Business Partner Data Collection</p>
                                        <ul>
                                            <li>Basic information</li>
                                            <li>Financial Information</li>
                                            <li>Capability Information</li>
                                            <li>Reference and clientele base</li>
                                        </ul>
                                        <p>Approval or Rejection</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                    <img className='w-25' src={businessicon9} alt='mca-carosal-img' />

                                    </div>
                                    
                                    <div className='d-flex'>
                                        <h6>Evaluation and Qualification of Category Information</h6>
                                        <div className='d-flex justify-conent-center align-items-center text-align-center'><ForwardIcon className='icon-rotate' style={{ fontSize: 60 }}/></div>
                                    </div>
                                    <div className='esco-part2'>
                                        <p>Survey, Questionnaire, Sampling by category (Product and Service Segments)</p>
                                        <ul>
                                            <li>Category Information</li>
                                            <li>Regulatory and Compliance Information</li>
                                            <li>Partnership Capability</li>
                                            <li>Reference checks</li>
                                        </ul>
                                        <p>Approval or Rejection</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                    <img className='w-25' src={businessicon10} alt='mca-carosal-img' />

                                    </div>
                                    <div>
                                        <h6>On-boarding of Business Partners</h6>
                                        </div>
                                    <div className='esco-part2 mt-4 pt-3'>                                
                                        <ul>
                                            <li>Business Partner creation classification as per requirements</li>
                                            <li>Review of data commercial compliance and validation, financial and capacity assessment, 
                                                and quality qualification measures.</li>
                                            <li>Business Partner replicated to ERP with API’s</li>
                                            
                                        </ul>
                                    </div>
                                </Col>
                                
                               
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item className='py-2'>

                            <Row className='my-4'>
                                <Col>
                                    {/* <img className='w-100' src={businesspartnericon} alt='mca-carosal-img' /> */}
                                    <div>
                                    <img className='' style={{width:50}} src={businessicon1} alt='mca-carosal-img' />

                                    </div>
                                    <h6>Business Partner Self Service</h6>
                                    <div className='forword-Icon'>
                                        <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                    </div>
                                </Col>
                                <Col>
                                <div>
                                <img className='' style={{width:50}} src={businessicon2} alt='mca-carosal-img' />

                                </div>
                                    {/* <img className='w-100' src={businescustomericon} alt='mca-carosal-img' /> */}
                                    <h6>Customer Team</h6>
                                    <div className='forword-Icon'>
                                        <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4 className='bg-primary text-light m-2 p-2'>PiLog MDRM Platform (Business Partner Master Life Cycle Management)</h4></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                    <img className='w-50' src={businessicon3} alt='mca-carosal-img' />

                                    </div>
                                    <div className='d-flex'>
                                        <h6>Business Partner Data Access</h6>
                                        <div className='d-flex justify-conent-center align-items-center text-align-center mx-4'><ForwardIcon className='icon-rotate' style={{ fontSize: 60 }}/></div>
                                    </div>
                                    <div className='esco-part2'>
                                        
                                        <ul>
                                            <li>Financial Stability (E.g., Revenue of more than 10MUSD)</li>
                                            <li>Collaboration (100% Compliance)</li>
                                            <li>Quality Definition per Category</li>
                                            
                                        </ul>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                    <img className='w-25' src={businessicon4} alt='mca-carosal-img' />

                                    </div>
                                    <div className='d-flex'>
                                        <h6>Evaluation Parameters Customer Standards</h6>
                                        <div className='d-flex justify-conent-center align-items-center text-align-center'><ForwardIcon className='icon-rotate' style={{ fontSize: 60 }}/></div>
                                    </div>
                                    <div className='esco-part2'>
                                    <ul>
                                <li>Financial Stability (E.g., Revenue of more than 10MUSD)</li>
                                <li>Collaboration (100% Compliance)
                                    <ul>
                                        <li>Design</li>
                                        <li>Sourcing</li>
                                        <li>Procurement / Order</li>
                                        <li>Delivery / Transportation</li>
                                        <li>Inventory</li>
                                    </ul>
                                </li>
                                <li>Scalability, Flexibility, Adoptability</li>
                                <li>Quality Definition per Category</li>
                            </ul>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='mt-3'>
                                        <p>Identify Vital Suppliers using distinct interaction models</p>
                                    <img className='w-50' src={businessicon5} alt='mca-carosal-img' />

                                    </div>
                                    <div>
                                        <p>Identify Vital Suppliers using distinct interaction models</p>
                                    <img className='w-50' src={businessicon6} alt='mca-carosal-img' />

                                    </div>
                                </Col>
                               
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item className='py-2'>

                            <Row className='my-4'>
                                <Col>
                                    <div>
                                        <div className='sdm-flow rounded pt-2'>
                                            <h6>Planning / Risk Assessment</h6>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>Cost Benifit Analysis</p>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>Business Case for Outsoursing with Risk Assessment</p>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>Regulatory and Process Compliance.</p>
                                        </div>

                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <div className='sdm-flow rounded pt-2'>
                                            <h6>Business Partner Due Deligence</h6>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>Pre - Contract</p>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>3re Party Experiences </p>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>Regulatory and Qualification</p>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>Data Security and Member Confidentiality</p>
                                        </div>

                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>Business Resumption and Contigency Planning.</p>
                                        </div>


                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <div className='sdm-flow rounded pt-2'>
                                            <h6>Risk Management and Control</h6>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>Out Sourcing, Co-Soursing, In-Sourcing - Models</p>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>On time / JIT Delivery</p>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>Design Optimization</p>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>Regulatory and Compliance - Security, Safety, Environment etc.</p>
                                        </div>
                                        <div className='forword-Icon'>
                                            <ForwardIcon className='icon-rotate' style={{ fontSize: 40 }} />
                                        </div>
                                        <div>
                                            <p>Financial and Commercial Stability - Scalability, Adaptability , Acceptability etc.</p>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item className='py-2'>
                            <Row className='my-4'>
                                <Col>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr className='esco-table-1'>
                                                <th className='text-light' >Key Result Area</th>
                                                <th className='text-light'>Key Performance Indicator</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Contract Management</td>
                                                <td>100% Contract Compliance</td>
                                            </tr>
                                            <tr>
                                                <td>JIT / ON Time Delivery</td>
                                                <td>95% On time Delivery
                                                    100% Delivery Quality Compliance</td>
                                            </tr>
                                            <tr>
                                                <td>Order Collaboration</td>
                                                <td><NavigateBeforeIcon />98% Order Confirmation</td>
                                            </tr>
                                            <tr>
                                                <td>Goods and Services Quality</td>
                                                <td><NavigateBeforeIcon />95% Quality meeting PO expectations</td>
                                            </tr>
                                            <tr>
                                                <td>Design Collaboration</td>
                                                <td>100% Compliance to Regulatory, Safety, and Standards</td>
                                            </tr>
                                            <tr>
                                                <td>Sourcing Collaboration</td>
                                                <td>Reduce the pricing YoY by 15% A, B, C (Service Criticality)</td>
                                            </tr>
                                            <tr>
                                                <td>Invoice Management</td>
                                                <td>Reduce invoicing errors to less than 5%</td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </Col>
                                <Col>
                                    <img className='w-100' src={require('../Assets/InnovativeProducts/iMDRM/PiLog integrates with SAP using SAP web services_iMDRM-Image-03.png')} alt='mca-carosal-img' />
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item className='py-2'>

                            <Row className='my-4'>
                                <Col>
                                    <img className='w-100' src={require('../Assets/ValueProposition/Business_Partner_Management_Processes-01.png')} alt='mca-carosal-img' />
                                </Col>
                            </Row>
                        </Carousel.Item>

                    </Carousel>
                </Container>
            </div>


            <div className='my-4 py-5 bg-light' >
                <Container>
                    <div>
                        <h2>Client Value Management and Success Stories</h2>
                        <p className='my-5'><b>A Railway Operations Major in the Middle East</b> has invited PiLog and
                            multiple other consulting leaders to identify the challenges and define problem statements in their
                            Supply Chain – Vendor Life Cycle Management factors as their costs of procurement and sourcing was
                            on increase impacting operating cost performance, quality and ability to take effective decisions
                            on co-source, in-source or outsource requirements pertaining to products and services</p>
                        <Button>Download Success Stories</Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}
