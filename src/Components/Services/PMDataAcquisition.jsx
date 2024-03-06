import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Services.css'

export const PMDataAcquisition = () => {
    return (
        <div>
             <div className='services-pmdaa'>
                {/* <img className='w-100' src={require('../Assets/Services/banner-large.jpg')} alt='service-da-banner' /> */}
                <div>
                    <h1>PM Data Acquisition</h1>
                    <p>Data capturing, compliance and standards adoption and creation of<br/>
                    Financial and Maintenance application agnostic</p> </div>
            </div>
            <br />
            {/* {/ End-Div-1 /} */}

            <div>
                <Container>
                    <Row className='my-4 d-flex text-align-left align-items-center justify-content-center'>
                        <Col lg={8} className='daa-desc'>
                            <p>
                                Today's plant engineers are sometimes required to develop data acquisition systems that monitor,
                                measure, or maintain processes or tests within their plants. Data acquisition systems provide the
                                necessary information to determine optimized production conditions, preventive/predictive maintenance,
                                and emergency repair or replacement of equipment.
                            </p>
                        </Col>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/PM_Data_Acquisition_Side_Image-01.jpg')} alt='service-pmd-img-1' />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* {/ End-Div-2 /} */}
            <div className='bg-light py-4'>
                <Container>
                    <Row className='my-4 d-flex text-align-left align-items-center justify-content-center'>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/PM_Data_Acquisition_Side_Image-02.jpg')} alt='service-pmd-img-1' />
                        </Col>

                        <Col lg={8} className='daa-desc'>
                            <p>
                                PiLog data acquisition architecture is best suited for the array of measurements required to successfully monitor
                                the health of industrial equipment. Following proper definition of your data acquisition architecture, including
                                acquisition requirements, analysis needs, and presentation considerations.
                            </p>
                            <p>
                                PM Data Acquisition for industry 4.0 is a method of preventing asset failure by analyzing production data to identify
                                patterns and predict issues before they happen.
                            </p>
                            
                        </Col>
                    </Row>
                    <p>
                                To implement a PM Data Acquisition system effectively, manufacturers need to map the parameters of failure for machines
                                and create a blueprint for their connected system – the manufacturing assets and sensors, business systems, communication
                                protocols, gateways, cloud, predictive analytics, and visualization.
                            </p>
                </Container>
            </div>
        </div>
    )
}