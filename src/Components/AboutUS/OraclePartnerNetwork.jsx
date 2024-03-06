import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const OraclePartnerNetwork = () => {
    return (
        <div>
            <div>
                <img className='w-100' src={require('../Assets/AboutUS/Oracle_Partners_Banners_01.jpg')} alt='partner-01' />
            </div>

            <div className='my-4 py-4'>
                <Container>
                    <Row >
                        <Col lg={8}>
                            <div style={{ textAlign: 'left' }}>
                                <p>
                                    PiLog has been an Oracle Golden partner since 2010 and have strategically decided to leverage and enhance our relationship with Oracle to capitalize on our competitive edge as Subject Matter Experts in the Master data arena. Oracle is one of the world leaders on integrated data solutions for Customer Party data which is generally being referred to as structured data. PiLog has been involved for many years in supplying integrated data solutions for Product data where we have structured and governed the item and asset master for huge asset driven plants.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div>
                                <img style={{ width: 200 }} src={require('../Assets/ClientLogos/ORACLE_Partnernetwork_ Logo.png')} alt='partner-01' />
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ textAlign: 'left' }} className='mt-4'>
                        <div>
                            <p>Our specialist area is mainly in the Gas and Oil, Petrochemical and Utilities sector. PiLog has been requested on numerous occasions about our scalability and flexibility to unite our Product data content and business logic to the Oracle MDM vertical and we have since created specialist teams to target this objective.</p>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
