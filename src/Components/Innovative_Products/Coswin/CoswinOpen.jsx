import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CoswinOpenIcon1 from './Icons-01.svg'
import CoswinOpenIcon2 from './Icons-03.svg'
import CoswinOpenIcon3 from './Icons-04.svg'
import CoswinOpenIcon4 from './Icons-05.svg'

export const CoswinOpen = () => {
  return (
    <div>
    <div>
        <img className='w-100' src={require('./coswin_open_en-Banner-open.jpg')} alt='partner-01' />
    </div>

    <div className='bg-primary py-2 text-light'>
        <h3>The web-app to manage job & service requests available to everyone at any time.</h3>
    </div>
    <div className='bg-light py-3'>
        <Container>
            <Row>
                <div style={{ textAlign: 'left' }}>
                    <p>
                    Coswin Open can be used by everyone, whether they are Coswin 8i users or not. This application allows you to report a problem and directly alert the technical services concerned, so that they can intervene as quickly as possible.
                    </p>
                </div>
            </Row>
        </Container>
    </div>
    <div className='mt-4 py-4'>
        <Container style={{ textAlign: 'left' }}>
            <Row style={{ textAlign: 'left', justifyContent: 'center', alignItems: 'center' }}>
                <Col>
                    <div>
                        <img className='w-75' src={require('./mobile-coswin-open.jpg')} alt='partner-01' />
                    </div>
                </Col>
                <Col>
                    <div className=''>
                        <div className='d-flex justify-content-center align-items-center text-align-left gap-3 my-2'>
                            <img style={{ width: 70 }} src={CoswinOpenIcon1} alt='partner-01' />
                            <h6>Quick and easy creation of job and service requests</h6>

                        </div>
                        <div className='d-flex justify-content-center align-items-center text-align-left gap-3 my-2'>
                            <img style={{ width: 70 }} src={CoswinOpenIcon2} alt='partner-01' />
                            <h6>Multimedia: add photos, videos, voice recordings, etc...</h6>

                        </div>
                        <div className='d-flex justify-content-center align-items-center text-align-left gap-3 my-2'>
                            <img style={{ width: 70 }} src={CoswinOpenIcon3} alt='partner-01' />
                            <h6>Multi OS and multi media web-app (PC, tablets, smartphones)</h6>

                        </div>
                        <div className='d-flex justify-content-center align-items-center text-align-left gap-3 my-2'>
                            <img style={{ width: 70 }} src={CoswinOpenIcon4} alt='partner-01' />
                            <h6>Easy access via QR code - no configuration required*.</h6>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div>
        <Container>
            <Row>
                <Col>
                    <div className='py-4'>
                        <div className='d-flex justify-content-left align-items-center text-align-left'>
                           
                            <div className='mx-3'>
                                <h6>compatible from Coswin 8i9 on</h6>
                            </div>
                        </div>
                        
                    </div>
                </Col>
                <Col>
                <div style={{textAlign:'left', justifyContent:'center', alignItems:'center'}}>
                    <ul>
                        <li>Input guidance for greater simplicity for your users !</li>
                       
                    </ul>
                </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className='bg-primary text-white py-4'>
        <Container>
            <Row>
                <div>
                    <h6>
                        Air conditioning failure in a meeting room? A broken down lift? A blocked parking door? A leak in the sanitary facilities? A problem with the cleanliness and maintenance of green spaces? Report it quickly and easily with Coswin Open !
                    </h6>
                </div>
            </Row>
        </Container>
    </div>
</div>
  )
}
