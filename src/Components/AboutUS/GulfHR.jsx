import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const GulfHR = () => {
  return (
    <div>
          <div>
                <img className='w-100' src={require('../Assets/AboutUS/GulfHR_Partners_Banners_01.jpg')} alt='partner-01' />
            </div>

            <div className='my-4 py-4'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div style={{ textAlign: 'left' }}>
                                <p>
                                PiLog Saudi International has been a partner of Gulf Solutions since 2010 to specifically be a reseller of the Gulf HR software. Gulf HR was designed in the Middle East and tailored specifically for Gulf conditions and requirements. Underpinning the software is a commitment to client training and support, with customisations and technical backup is readily available. Gulf Solutions offer quality, punctual services using proven methodologies and firmly believe that the proven results of Gulf HR along with their extensive experience in custom development, testing and implementation support, will more than meet the requirements of any organisation.
                                    </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div>
                                <img style={{ width: 200 }} src={require('../Assets/ClientLogos/GulHR_Logo.png')} alt='partner-01' />
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ textAlign: 'left' }} className='mt-4'>
                        <div>
                            <p>The company (Gulf Solutions) has been in existence and conducting business for the past 15 years. From 1999 - Apr 2003 as Solit Middle East, a subsidiary of a South African Group and since May 2003 as Gulf Solutions Group FZ LLC in Dubai, Gulf Solutions Pakistan Limited since 2008 (our regional development office) and Innovative Gulf Solutions in Bahrain since January 2013. The company has completed around 80 Gulf HR implementations and six additional customised system implementations. These implementations have been rolled out in the UAE, Saudi Arabia, Bahrain, Qatar, Oman, Jordan, Egypt, Libya and Algeria and Pakistan. The company has twenty employees developing, supporting and implementing the Gulf HR application.</p>
                            <p>PiLog and Gulf Solutions have offices in both Jubail Industrial city in Saudi Arabia and Manama Bahrain.</p>
                             </div>
                    </Row>
                </Container>
            </div>
    </div>
  )
}
