import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CoswinNomadIcon1 from './New-Webssite-Icons-01.svg'
import CoswinNomadIcon2 from './New-Webssite-Icons-02.svg'
import CoswinNomadIcon3 from './New-Webssite-Icons-03.svg'
import CoswinNomadIcon4 from './New-Webssite-Icons-04.svg'
import CoswinNomadIcon5 from './New-Webssite-Icons-05.svg'
import CoswinNomadIcon6 from './New-Webssite-Icons-06.svg'
import CoswinNomadIcon7 from './New-Webssite-Icons-07.svg'


export const CoswinNomad = () => {
    return (
        <div>
            <div>
                <img className='w-100' src={require('./Coswin_nomad_en-Inside-Image-nomad.jpg')} alt='partner-01' />
            </div>

            <div className='bg-primary py-2 text-light'>
                <h3>Coswin Nomad is a tool for maintenance on the go</h3>
            </div>
            <div className='bg-light py-3'>
                <Container>
                    <Row>
                        <div style={{ textAlign: 'left' }}>
                            <p>
                                Coswin Nom@d offers just the right functional requirements as a complement to the use of your Coswin 8i CMMS. This mobile application has been designed for the users. It is ergonomic and intuitive for a quick handling and a maximum comfort of use. The time savings and the quality of the information are indisputable.
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
                                <img className='w-100' src={require('./mobile (1).jpg')} alt='partner-01' />
                            </div>
                        </Col>
                        <Col>
                            <div className=''>
                                <div className='d-flex justify-content-center align-items-center text-align-left gap-3 my-2'>
                                    <img style={{ width: 50 }} src={CoswinNomadIcon1} alt='partner-01' />
                                    <h6>Job Request</h6>

                                </div>
                                <div className='d-flex justify-content-center align-items-center text-align-left gap-3 my-2'>
                                    <img style={{ width: 50 }} src={CoswinNomadIcon2} alt='partner-01' />
                                    <h6>Job Request</h6>

                                </div>
                                <div className='d-flex justify-content-center align-items-center text-align-left gap-3 my-2'>
                                    <img style={{ width: 50 }} src={CoswinNomadIcon3} alt='partner-01' />
                                    <h6>Inventory management</h6>

                                </div>
                                <div className='d-flex justify-content-center align-items-center text-align-left gap-3 my-2'>
                                    <img style={{ width: 50 }} src={CoswinNomadIcon4} alt='partner-01' />
                                    <h6>Equipment history</h6>

                                </div>
                                <div className='d-flex justify-content-center align-items-center text-align-left gap-3 my-2'>
                                    <img style={{ width: 50 }} src={CoswinNomadIcon5} alt='partner-01' />
                                    <h6>Work Order feedback</h6>

                                </div>
                                <div className='d-flex justify-content-center align-items-center text-align-center gap-3 my-2'>
                                    <img style={{ width: 50 }} src={CoswinNomadIcon6} alt='partner-01' />
                                    <h6>Meter-reading</h6>

                                </div>
                                <div className='d-flex justify-content-center align-items-center text-align-center gap-3 my-2'>
                                    <img style={{ width: 50 }} src={CoswinNomadIcon7} alt='partner-01' />
                                    <h6>Geolocation</h6>

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
                                    <div>
                                        <img style={{ width: 40 }} src={require('./Windows.png')} alt='partner-01' />
                                        <img style={{ width: 40 }} src={require('./android.png')} alt='partner-01' />
                                    </div>
                                    <div className='mx-3'>
                                        <h6>For Windows and Android</h6>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-left align-items-center text-align-center mt-3'>
                                    <div>
                                        <img style={{ width: 30 }} src={require('./google-play-store.png')} alt='partner-01' />
                                        
                                    </div>
                                    <div className='mx-3'>
                                        <h6>Available from your Google play store</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                        <div style={{textAlign:'left'}}>
                            <ul>
                                <li>Customisable screens</li>
                                <li>Can be used with or without network connection</li>
                                <li>Multilingual</li>
                                <li>Multimedia : photos, videos & voice dictation</li>
                                <li>Barcodes and QR codes</li>
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
                            <h6>Coswin Nom@d is a mean to simplify, modernise and make maintenance organisation more efficient. In addition, by allowing to remove paper, Coswin Nom@d is a solution that integrates the process of digital transformation of companies.</h6>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
