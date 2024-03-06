import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const PiLogAppointsFormerSAPAndOracleExecutive = () => {
    return (
        <div>

            <div>
                <img className='w-100' src={require('../Assets/PublicationImages/NewsDataImages/PiLog-appoints-former-SAP-and-Oracle-executive-Dr-Kevin-Attard.jpg')} alt='partner-01' />
            </div>

            <div style={{ textAlign: 'left' }} className='my-3 py-4 bg-light' >
                <Container>
                    <div>
                        <h3>PiLog appoints former SAP and Oracle executive,<span className='text-primary'>Dr. Kevin Attard</span> as member of its Advisory Board for Middle East & APAC.</h3>
                    </div>
                    <Row className='my-3 py-4'>
                        <Col lg={7}>
                            <div style={{ textAlign: 'left', lineHeight:2.1 }}>
                            <p>Dubai, UAE (December 6, 2023) - PiLog, leading global software solution provider specializing in Master Data Management, Data Quality, Digital Governance and Analytical solutions announced the appointment of Dr. Kevin Attard as Member of their Advisory Board for Middle East & APAC regions effective as of December 4th, 2023. Kevin will act as strategic advisor to the Board with special focus around go-to-market and strategic partnerships.</p>
                            <p>Kevin has a distinguished career spanning over 3 decades where he held global executive leadership positions including roles at SAP and Oracle in North America, Europe, the Middle East, and Africa.</p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div>
                                <img className='w-100' src={require('../Assets/PublicationImages/NewsDataImages/Kevin-Attard-img.webp')} alt='partner-01' />

                            </div>
                        </Col>

                    </Row>
                    <Row className='shadow py-3'>
                        <div style={{ textAlign: 'left', lineHeight:2.1 }}>
                            <p>
                                <b className='text-primary'>“We are delighted to have secured Kevin as part of our Advisory Board as through his broad experience he will help us elevate further our go-to-market model and strategic partnerships,”</b> commented <b className='text-primary'>Dr Imad Syed, CEO, PiLog Middle East & APAC. </b>“At PiLog we strive to offer our customers stellar end-to-end experience through our cutting-edge solutions embedded with qualitative data also in partnership with the likes of SAP”.
                            </p>
                            <p>
                                <b className='text-primary'>“I am honored to form part of PiLog's Advisory Board as I truly admire the culture, the persistent innovation, and the obsession around customer centricity this company stands for.”</b> said Kevin Attard, in his new capacity as advisory member.
                            </p>
                            <p>
                            Kevin holds a Doctorate Degree in Business Administration from UK's Newcastle Business School & France's Grenoble Ecole de Management, and an MBA from Grenoble Ecole de Management, where his research was focused on the innovation of enterprise solutions.
                            </p>
                        </div>
                    </Row>
                    <Row className='my-4 py-3'>
                        <div style={{ textAlign: 'left', lineHeight:2.1 }}>
                            <p>
                            PiLog Group is a global company that specializes in Master Data Quality Solutions. Established in 1996, PiLog offers Master Data Governance suite focusing on services & key functions of data quality within Supply-Chain, Enterprise & Asset Lifecycle management apart from the exclusive technical, industrial, dictionary content compliant with ISO standards. PiLog solutions are catered for multiple master data domains across different industries with specific products & functional modules focusing on Data Harmonization, Normalization, Classification, Quality, Transformation, Migration & Visualization etc. PiLog is a leading provider of Master Data Quality Solutions named by Gartner, InfoTech etc. to name a few.
                            </p>
                            <p>PiLog products include but not limited to  <b className='text-primary'>MDRM, MDOM, iDQM, iMDRM, iSPIR, </b> iTransform & iVisualize powered by Data Science [AI & ML] that is part of iDxP Data Lifecycle Management Suite.</p>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
