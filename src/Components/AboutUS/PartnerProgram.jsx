import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import coService from '../Assets/AboutUS/co-service-partner.svg'

export const PartnerProgram = () => {
    return (
        <div>
            <div>
                <img className='w-100' src={require('../Assets/AboutUS/Partners_Program_Banners-01.jpg')} alt='partner-01' />

            </div>

            <div className='my-4 py-5 bg-light'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div style={{ textAlign: 'left', lineHeight: 2 }}>
                                <div>
                                    <h4>Sales Representative</h4>
                                </div>
                                <div className='mt-4'>
                                    <p>Sales Representative could be an Individual or a Company/Organization. Anyone interested in the Sales and Marketing of PiLog Products, Services, or Solutions can benefit. As part of this program, the Sales Representative will generate the leads to sell our Solutions. He will be backed up by Pre-sales Team, who will provide technical support and give demos to New Customers when leads are generated.</p>
                                </div>
                                <div className='d-flex'>
                                    <ul>
                                        <li>Assessment & Approval</li>
                                        <li>Formal Agreement</li>
                                        <li>Basic Sales Kit</li>
                                        <li>CRM Access</li>
                                    </ul>
                                    <ul className='mx-5'>
                                        <li>Sales Enablement</li>
                                        <li>Referral incentive</li>
                                        <li>Perks for Excellence</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} >
                            <div>
                                <img className='w-100' src={require('../Assets/AboutUS/Sales_Representative_Image.png')} alt='partner-01' />
                            </div>
                            <div>
                                <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfZQNGatlG4w7PIzYTNetOSsflY_7sQdmP1iuPL8kspXgyF0w/viewform' target='blank'>
                                    <Button>To Become A Partner</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

            <div className='my-4 py-5'>
                <Container>
                    <Row>
                    <Col lg={4} >
                            <div>
                                <img className='w-100' src={require('../Assets/AboutUS/Co-Sell_Partner_Image.png')} alt='partner-01' />
                            </div>
                            <div className='mt-4'>
                                <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfZQNGatlG4w7PIzYTNetOSsflY_7sQdmP1iuPL8kspXgyF0w/viewform' target='blank'>
                                    <Button>To Become A Partner</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div style={{ textAlign: 'left', lineHeight: 2 }}>
                                <div>
                                    <h4>Co-Sell Partner</h4>
                                </div>
                                <div className='mt-4'>
                                    <p>Co-sell partner can be either individual or companies likely to extend their growth in PiLog. Become a co-sell partner of PiLog with a qualified team expertise in networking and market knowledge having viability, values and ethics along with committed tenure and non-competition.</p>
                                </div>
                                <div className='d-flex'>
                                    <ul>
                                        <li>Assessment & Approval</li>
                                        <li>Formal Agreement</li>
                                        <li>Advanced Sales Kit</li>
                                        <li>CRM Access</li>
                                    </ul>
                                    <ul className='mx-5'>
                                        <li>Sales Enablement</li>
                                        <li>Accreditation</li>
                                        <li>Partner Advisor</li>
                                        <li>Revenue Share</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

            <div className='my-4 py-5 bg-light'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div style={{ textAlign: 'left', lineHeight: 2 }}>
                                <div>
                                    <h4>Co-Service Partner</h4>
                                </div>
                                <div className='mt-4'>
                                    <p>In this partnership either the individual or companies can sell our products and also support us in implementation at the customer premises. Be a co-service partner of PiLog with a qualified team expertise in networking and market knowledge having viability, values and ethics along with committed tenure and non-competition.</p>
                                     </div>
                                <div className='d-flex'>
                                    <ul>
                                        <li>Assessment & Approval</li>
                                        <li>Formal Agreement</li>
                                        <li>Advanced Sales Kit</li>
                                        <li>CRM Access</li>
                                    </ul>
                                    <ul className='mx-5'>
                                        <li>Sales Enablement</li>
                                        <li>Accreditation</li>
                                        <li>Partner Advisor</li>
                                        <li>Revenue Share</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} >
                            <div>
                                <img className='w-50' src={coService} alt='partner-01' />
                            </div>
                            <div className='mt-5'>
                                <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfZQNGatlG4w7PIzYTNetOSsflY_7sQdmP1iuPL8kspXgyF0w/viewform' target='blank'>
                                    <Button>To Become A Partner</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

            <div className='my-4 py-5'>
                <Container>
                    <Row>
                    <Col lg={4} >
                            <div>
                                <img className='w-100' src={require('../Assets/AboutUS/Service_Level_Partner_Image.png')} alt='partner-01' />
                            </div>
                            <div className='mt-4'>
                                <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfZQNGatlG4w7PIzYTNetOSsflY_7sQdmP1iuPL8kspXgyF0w/viewform' target='blank'>
                                    <Button>To Become A Partner</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div style={{ textAlign: 'left', lineHeight: 2 }}>
                                <div>
                                    <h4>VAR or Strategic Partner</h4>
                                </div>
                                <div className='mt-4'>
                                    <p>VAR partner program is for companies who can sell our products and also support us in implementation at the customer premises. Be a VAR partner of PiLog with a qualified team expertise in networking and market knowledge having viability, values and ethics along with committed numbers and non-competition.</p>
                                    </div>
                                <div className='d-flex'>
                                    <ul>
                                        <li>Assessment & Approval</li>
                                        <li>Formal Agreement</li>
                                        <li>Basic Sales Kit</li>
                                        <li>CRM Access</li>
                                    </ul>
                                    <ul className='mx-5'>
                                        <li>Sales Enablement Accreditation</li>
                                        <li>Partner Advisor</li>
                                        <li>Joint Marketing + GTM</li>
                                        <li>Scale-up Revenue Share</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}
