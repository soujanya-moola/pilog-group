import React from 'react'
import { Button, Carousel, Col, Container, Row, Table } from 'react-bootstrap'

export const EquipmentCriticalityAnalysis = () => {
const ecaAnalysis=[
    {
        Tittle:'Sample Outcome on Equipment Criticality Ranking',
        TableTittle:'Criticality Ranking',
        tr1:{
            td1:'Very Very High',
            td2:'5',
            td3:'>2500'
        },
        tr2:{
            td1:'Very High',
            td2:'4',
            td3:'1751-2500'
        },
        tr3:{
            td1:'High',
            td2:'3',
            td3:'1001-1750'
        },
        tr4:{
            td1:'Medium',
            td2:'2',
            td3:'501-1000'
        },
        tr5:{
            td1:'Low',
            td2:'1',
            td3:'<=500< /td>'
        },
        url:require('../Assets/Services/eca/slide-1.png')
    },
    {
        Tittle:'Sample Outcome on Business Score',
        TableTittle:'Business Score',
        tr1:{
            td1:'Very Very High',
            td2:'5',
            td3:'>20'
        },
        tr2:{
            td1:'Very High',
            td2:'4',
            td3:'16-20'
        },
        tr3:{
            td1:'High',
            td2:'3',
            td3:'11-15'
        },
        tr4:{
            td1:'Medium',
            td2:'2',
            td3:'6-10'
        },
        tr5:{
            td1:'Low',
            td2:'1',
            td3:'<=5< /td>'
        },
        url:require('../Assets/Services/eca/slide-2.png')
    },
    {
        Tittle:'Sample Outcome on Maintenance Score',
        TableTittle:'Maintenance Score',
        tr1:{
            td1:'Very Very High',
            td2:'5',
            td3:'>2500'
        },
        tr2:{
            td1:'Very High',
            td2:'4',
            td3:'1751-2500'
        },
        tr3:{
            td1:'High',
            td2:'3',
            td3:'1001-1750'
        },
        tr4:{
            td1:'Medium',
            td2:'2',
            td3:'301-1000'
        },
        tr5:{
            td1:'Low',
            td2:'1',
            td3:'<=300'
        },
        url:require('../Assets/Services/eca/slide-3.png')
    },
    {
        Tittle:'Sample Outcome on Safety Score',
        TableTittle:'Safety Score',
        tr1:{
            td1:'Very Very High',
            td2:'5',
            td3:'>100'
        },
        tr2:{
            td1:'Very High',
            td2:'4',
            td3:'76-100'
        },
        tr3:{
            td1:'High',
            td2:'3',
            td3:'51-75'
        },
        tr4:{
            td1:'Medium',
            td2:'2',
            td3:'26-50'
        },
        tr5:{
            td1:'Low',
            td2:'1',
            td3:'<=25'
        },
        url:require('../Assets/Services/eca/slide-4.png')
    },
    {
        Tittle:'Sample Outcome on Production Impact Score',
        TableTittle:'Business Score',
        tr1:{
            td1:'Very Very High',
            td2:'5',
            td3:'18'
        },
        tr2:{
            td1:'Very High',
            td2:'4',
            td3:'23'
        },
        tr3:{
            td1:'High',
            td2:'3',
            td3:'39'
        },
        tr4:{
            td1:'Medium',
            td2:'2',
            td3:'18'
        },
        tr5:{
            td1:'Low',
            td2:'1',
            td3:'24'
        },
        url:require('../Assets/Services/eca/slide-5.png')
    },
]

    return (
        <div>
            <div className='services-eca'>
                {/* <img className='w-100' src={require('../Assets/Services/banner-large.jpg')} alt='service-da-banner' /> */}
                <div>
                    <h1>Equipment Criticality Analysis</h1>
                    <p>Criticality Ranking for Equipment
                        Enabling better process control</p> </div>
                <div>
                    <Button>Read More</Button>
                </div>
            </div>
            <br />
            {/* {/ End-Div-1 /} */}

            <div className='my-3'>
                <Container>
                    <div className='text-primary'>
                        <h2>Introduction</h2>
                    </div>
                    <Row className='my-4 d-flex text-align-left align-items-center justify-content-center'>

                        <Col lg={8} className='daa-desc'>
                            <p>Equipment criticality analysis is a quantitative analysis of equipment faults,
                                and ranking them in order of serious consequences on safety, environment, production
                                loss and maintenance cost. The key benefit of this analysis is to provide the means to
                                recognize high-criticality vs. low-criticality equipment, reduce the level of uncertainty
                                and focus on high-priority maintenance tasks. The analysis also helps select the best and
                                most economic maintenance strategy,
                                prioritize work orders and decide on insurance and the demand on spare parts
                            </p>

                        </Col>
                        <Col lg={4}>
                            <img className='w-75 rounded-3' src={require('../Assets/Services/eca/img1.png')} alt='service-pmd-img-1' />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* {/ End-Div-2 /} */}

            <div className='my-4 py-4 d-flex text-align-left align-items-center justify-content-center'>
                <Container className='d-flex text-align-left align-items-center justify-content-center'>
                    <div className='d-flex text-align-left align-items-center justify-content-center' >
                        <img className='w-100 rounded-3' src={require('../Assets/Services/eca/img3.png')} alt='service-pmd-img-1' />

                    </div>
                </Container>
            </div>
            {/* {/ End-Div-3 /} */}
            <div className='my-3 bg-dark py-4'>
                <Container>
                    <div className='text-light'>
                        <h2>Purpose of Equipment Criticality Analysis</h2>
                    </div>
                    <Row className='my-4 py-4 d-flex text-align-left align-items-center justify-content-center'>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/eca/PiLog_Equipment_Criticality_Anal.jpg')} alt='service-pmd-img-1' />
                        </Col>
                        <Col lg={8} className='daa-desc'>
                            <div className='text-light'>
                                <h6>The Equipment Criticality Analysis is used to identify:</h6>
                                <div>
                                    <ul>
                                        <li>Which equipment has the most serious potential consequences on business performance, 'if it fails'? The resulting Equipment Criticality Number is used to prioritize resources performing maintenance work</li>
                                        <li>Identify what equipment is most likely to negatively impact business performance because it both matters a lot when it fails and it fails too often. The resulting Relative Risk Number is used to identify candidate assets for reliability improvement</li>
                                    </ul>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
            {/* {/ End-Div-4 /} */}
            <div className='my-4 py-4'>
                <div className='text-primary'> <h2>Equipment Criticality Ranking</h2></div>

                <Container className='d-flex text-align-left align-items-center justify-content-center'>
                    <div className='my-4 d-flex text-align-left align-items-center justify-content-center' >
                        <img className='w-100 rounded-3' src={require('../Assets/Services/eca/img4.png')} alt='service-pmd-img-1' />

                    </div>
                </Container>
            </div>
            {/* {/ End-Div-5 /} */}
            <div>
                <Container>
                   
                    <Carousel className='mca-analisys '>
                        {ecaAnalysis.map((e) =>
                            <Carousel.Item className='py-2'>
                                <div className='text-center'>
                                    <h3>{e.Tittle}</h3></div>
                                    <Row className='my-4'>
                                        <Col>
                                        <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                            
                                            <th colSpan={3}>{e.TableTittle}</th>
                                            
                                        </tr>
                                        <tr>
                                            
                                            <th>Rating</th>
                                            <th>Score</th>
                                            <th>Impact</th>
                                        </tr>
                                    </thead>

                                    <tbody className='text-center'>
                                        <tr>
                                            <td>{e.tr1.td1}</td>
                                            <td>{e.tr1.td2}</td>
                                            <td>{e.tr1.td3}</td>

                                        </tr>
                                        <tr>
                                            <td>{e.tr2.td1}</td>
                                            <td>{e.tr2.td2}</td>
                                            <td>{e.tr2.td3}</td>

                                        </tr>
                                        <tr>
                                            <td>{e.tr3.td1}</td>
                                            <td>{e.tr3.td2}</td>
                                            <td>{e.tr3.td3}</td>
                                        </tr>
                                        <tr>
                                            <td>{e.tr4.td1}</td>
                                            <td>{e.tr4.td2}</td>
                                            <td>{e.tr4.td3}</td>
                                        </tr>
                                        <tr>
                                            <td>{e.tr5.td1}</td>
                                            <td>{e.tr5.td2}</td>
                                            <td>{e.tr5.td3}</td>
                                        </tr>
                                    </tbody>

                                </Table>
                                        </Col>
                                        <Col>
                                        <div>
                                        <img className='w-75' src={e.url} alt='mca-carosal-img' />

                                        </div>
                                        </Col>
                                    </Row>
                                
                                
                            </Carousel.Item>
                        )}


                    </Carousel>
                </Container>
            </div>
        </div>
    )
}
