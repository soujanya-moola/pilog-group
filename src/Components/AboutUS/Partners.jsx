import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Partners = () => {
    return (
        <div>

            <div className='position-relative text-align-center text-light'>
                <img className='w-100' src={require('../Assets/AboutUS/Corporate_Banners.jpg')} alt='Innovative products-mdo-banner' />
                <div className='ppo position-absolute top-50 left-15 transform-translate(-50%, -50%)' style={{ left: 300 }}>
                    <h1>
                        Our Partners
                    </h1>
                </div>
            </div>
            <div className='py-5 my-2'>
                <Container>
                    <Row>
                        <div style={{textAlign:'left'}}>
                            <div className='d-flex text-align-left justify-content-left align-items-center'>
                            <img style={{width:90}} src={require('../Assets/ClientLogos/SAP_Silver_Partner_Logo.png')} alt='partner-01'/>
                               <h3 className='mx-4'>SAP - Silver Partner</h3> 
                            </div>
                            <div className='mt-3'>
                                <p>PiLog is a long standing partner with SAP, having done a large number of projects supporting SAP R/3, ECC, and MDM and now MDG. PiLog is enrolled in the Partner Edge program as a Software Solution Technology Partner (SSTP) and has certification for the integration of PiLog-MDRM with the SAP MM module, which in most projects is the main user of Material and Services Master Data. PiLog is Co-Innovated with SAP, implementing the SAP master data governance application.</p>

                            </div>
                            <div>
                                <Link to='Sap-Silver-Partner'>
                                <Button>
                                    Learn More
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </Row>
                </Container>

            </div>

            <div className='bg-light py-5 my-2'>
                <Container>
                    <Row>
                        <div style={{textAlign:'left'}}>
                            <div className='d-flex text-align-left justify-content-left align-items-center'>
                            <img style={{width:90}} src={require('../Assets/ClientLogos/ORACLE_Partnernetwork_ Logo.png')} alt='partner-01'/>
                               <h3 className='mx-4'>Oracle - Partner Network</h3> 
                            </div>
                            <div className='mt-3'>
                                <p>PiLog has been an Oracle Golden partner since 2010 and has strategically decided to leverage and enhance our relationship with Oracle in order to capitalize on our competitive edge as Subject matter experts in the Master data arena. Oracle is one of the world leaders on integrated data solutions for Customer Party data which is generally being referred to as structured data.</p>
                            </div>
                            <div>
                                <Link to='Oracle-Partner-Network'>
                                <Button>
                                    Learn More
                                </Button>
                                </Link>
                               
                            </div>
                        </div>
                    </Row>
                </Container>

            </div>

            <div className='py-5 my-2'>
                <Container>
                    <Row>
                        <div style={{textAlign:'left'}}>
                            <div className='d-flex text-align-left justify-content-left align-items-center'>
                            <img style={{width:90}} src={require('../Assets/ClientLogos/PARTNERS-LOGOS-03.png')} alt='partner-01'/>
                               <h3 className='mx-4'>Siveco Group- COSWIN</h3> 
                            </div>
                            <div className='mt-3'>
                               <p>From 1993 PiLog has been a partner with Siveco Group, a major international player and the European leader in the CMMS market since 1986. For over 20 years, we have enjoyed a close working relationship to assure client confidence in the supply of complete solutions in Computerised Maintenance Management Systems (CMMS) and Enterprise Asset Management Systems (EAMS).</p>
                            </div>
                            <div>
                                <Link to='Siveco-Group-Coswin'>
                                <Button>
                                    Learn More
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </Row>
                </Container>

            </div>

            <div className='bg-light py-5 my-2'>
                <Container>
                    <Row>
                        <div style={{textAlign:'left'}}>
                            <div className='d-flex text-align-left justify-content-left align-items-center'>
                            <img style={{width:90}} src={require('../Assets/ClientLogos/GulHR_Logo.png')} alt='partner-01'/>
                               <h3 className='mx-4'>Gulf HR software</h3> 
                            </div>
                            <div className='mt-3'>
                                <p>PiLog Saudi International has been a partner of Gulf Solutions since 2010 to specifically be a reseller of the Gulf HR software. Gulf HR was designed in the Middle East and tailored specifically for Gulf conditions and requirements. Underpinning the software is a commitment to client training and support, with customizations and technical backup is readily available.</p>
                                </div>
                            <div>
                                <Link to='gulf-hr'>
                                <Button>
                                    Learn More
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </Row>
                </Container>

            </div>


        </div>
    )
}
