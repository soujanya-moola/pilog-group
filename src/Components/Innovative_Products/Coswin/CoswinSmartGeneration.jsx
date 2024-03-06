import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const CoswinSmartGeneration = () => {
    return (
        <div>
            <div>
                <img className='w-100' src={require('./coswin_smart_generation_en-Banner-smart.jpg')} alt='partner-01' />
            </div>

            <div className='bg-primary py-2 text-light'>
                <h3>Switch to CMMS 4.0!</h3>
            </div>
            <div className='bg-light py-3'>
                <Container>
                    <Row>
                        <div style={{ textAlign: 'center' }}>
                            <p>
                                Our Coswin 8i CMMS/EAM software enriched with 4 new modules - Coswin IoT, Coswin BIM,<br />
                                Coswin GIS & Coswin BI - to help companies meet the challenges of Industry 4.0 and Smart Building.
                            </p>
                        </div>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <div>
                        <img className='w-75' src={require('./Our coswin 8i-Image-01.png')} alt='partner-01' />

                    </div>
                </Container>
            </div>
            <div className='my-4 py-4 '>
                <Container>
                    <Row>
                        <Col style={{ backgroundColor: '#a2d764', textAlign: 'left' }} className='m-2 py-2'>
                            <h6>There is not one predictive maintenance solution but many. </h6>
                            <h6>This is why we provide you with a Coswin Smart Generation solution adapted to your context and your organisation.</h6>
                        </Col>
                        <Col style={{ backgroundColor: '#a2d764', textAlign: 'left' }} className='m-2 py-2'>
                            <h6>Coswin Smart Generation helps companies to implement predictive maintenance.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-2' style={{ backgroundColor: '#2a3e4e', textAlign: 'left' }}>
                <Container>
                    <div>
                        <img src={require('./siveco.png')} alt='partner-01' />

                    </div>
                </Container>
            </div>

            <div className='my-3 py-2'>
                <Container>
                    <Row className='my-5 py-2'>
                        <Col lg={6}>
                            <div>
                                <img className='w-75' src={require('./doc_coswin_smart_generation_en-01.png')} alt='partner-01' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div style={{ textAlign: 'left' }}>
                                <div>
                                    <img className='w-50' src={require('./doc_coswin_smart_generation_en-02.png')} alt='partner-01' />
                                </div>
                                <div>
                                    <ul>
                                        <li>Collection, processing and analysis of data from your IoT sensors,</li>
                                        <li>transmission to Coswin 8i via customisable alerts,</li>
                                        <li>triggering of associated maintenance requests.</li>
                                    </ul>
                                </div>
                                <div className='p-1' style={{ backgroundColor: '#2a3e4e', textAlign: 'left', color: 'white' }}>
                                    <h6 className='mt-2'>Combining CMMS and IoT technology</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-5 py-2'>
                       
                        <Col lg={6}>
                            <div style={{ textAlign: 'left' }}>
                                <div>
                                    <img className='w-50' src={require('./doc_coswin_smart_generation_en-03.png')} alt='partner-01' />
                                </div>
                                <div>
                                    <ul>
                                        <li>Import & 3D visualisation of your IFC model in Coswin 8i,</li>
                                        <li>navigation in the model,</li>
                                        <li>association of Coswin 8i functions with the equipment identified in the model (Job Request, Work Order...).</li>
                                    </ul>
                                </div>
                                <div className='p-1' style={{ backgroundColor: '#2a3e4e', textAlign: 'left', color: 'white' }}>
                                    <h6 className='mt-2'>Using your BIM model in CMMS</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <img className='w-75' src={require('./doc_coswin_smart_generation_en-06.png')} alt='partner-01' />
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-5 py-2'>
                    <Col lg={6}>
                           <div>
                               <img className='w-75' src={require('./doc_coswin_smart_generation_en-07.png')} alt='partner-01' />
                           </div>
                       </Col>
                       <Col lg={6}>
                           <div style={{ textAlign: 'left' }}>
                               <div>
                                   <img className='w-50' src={require('./doc_coswin_smart_generation_en-04.png')} alt='partner-01' />
                               </div>
                               <div>
                                   <ul>
                                       <li>Monitoring the performance of the maintenance activity,</li>
                                       <li>exploitation, analysis and restitution of data in real time,</li>
                                       <li>decision support.</li>
                                   </ul>
                               </div>
                               <div className='p-1' style={{ backgroundColor: '#2a3e4e', textAlign: 'left', color: 'white' }}>
                                   <h6 className='mt-2'>Using your BIM model in CMMS</h6>
                               </div>
                           </div>
                       </Col>

                   </Row>
                   <Row className='my-5 py-2'>
                       
                       <Col lg={6}>
                           <div style={{ textAlign: 'left' }}>
                               <div>
                                   <img className='w-50' src={require('./doc_coswin_smart_generation_en-05.png')} alt='partner-01' />
                               </div>
                               <div>
                                   <ul>
                                       <li>Display of your ArcGIS maps in Coswin 8i,</li>
                                       <li>geolocation of your assets,</li>
                                       <li>triggering of geolocated maintenance interventions. (with notification to Coswin Nom@d users)</li>
                                   </ul>
                               </div>
                               <div className='p-1' style={{ backgroundColor: '#2a3e4e', textAlign: 'left', color: 'white' }}>
                                   <h6 className='mt-2'>Geolocation of your assets and interventions</h6>
                               </div>
                           </div>
                       </Col>
                       <Col lg={6}>
                           <div>
                               <img className='w-75' src={require('./doc_coswin_smart_generation_en-08.png')} alt='partner-01' />
                           </div>
                       </Col>
                   </Row>
                </Container>
            </div>
        </div>
    )
}
