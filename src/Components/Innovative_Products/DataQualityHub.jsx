import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './InnovativeProducts.css'

export const DataQualityHub = () => {
    return (
        <div className='dqh-main'>
            <div>
                <div className='innovative-dqh'>
                    {/* <img className='w-100' src={require('../Assets/InnovativeProducts/Data_Quality_Hub_Banner.jpg')} alt='Innovative products-dqh-banner' /> */}
                    <div>
                        <h1>Data Quality Hub
                        </h1>
                        <p className='fs-5'>
                            Data and Analytics Suite
                        </p>
                        <p>
                            Enterprise Data - ETL, Harmonization, Governance,
                        </p>
                        <p>
                            Integration and Analytics with Add-Ons for
                        </p>
                        <p>
                            Industry Standards and Best Practices
                        </p>
                    </div>
                </div>
            </div>
            <br />

            <div>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div>
                                <img className='w-100' src={require('../Assets/InnovativeProducts/dqh/idata-acquisition-icon.png')} alt='Innovative products-dqh-img' />
                            </div>

                            <div className='text-start'>
                                <h4>
                                    iData Acquisition
                                </h4>
                                <ul>
                                    <li>
                                        Pre-built data connectors
                                    </li>
                                    <li>
                                        Real-time data acquisition and Ingestion
                                    </li>
                                    <li>
                                        Data discovery, modeling, mining, profiling, assessment, analysis, and visualization
                                    </li>
                                    <li>
                                        Core ETL features + Data streaming
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div>
                                <img className='w-100' src={require('../Assets/InnovativeProducts/dqh/idata-analytics-icon.png')} alt='Innovative products-dqh-img' />
                            </div>

                            <div className='text-start'>
                                <h4>
                                    iData Analytics
                                </h4>
                                <ul>
                                    <li>
                                        Business performance insights
                                    </li>
                                    <li>
                                        CxO Dashboards (Spend, Performance, ROI, KPIs, SLAs)
                                    </li>
                                    <li>
                                        On-demand real-time Infographics and Cockpit Views
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div>
                                <img className='w-100' src={require('../Assets/InnovativeProducts/dqh/idata-integration-icon.png')} alt='Innovative products-dqh-img' />
                            </div>
                            <div className='text-start'>
                                <h4>
                                    iData Integration
                                </h4>
                                <ul>
                                    <li>
                                        Seamless Data Integration, Synchronization,
                                        Distribution, Syndication,
                                        Orchestration, Micro-Service (APIs)
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <br />

            <div className='bg-light'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={5}>
                            <div>
                                <img className='w-100' src={require('../Assets/InnovativeProducts/dqh/idata-harmonization-icon.png')} alt='Innovative products-dqh-img' />
                            </div>

                            <div className='text-start'>
                                <h4>
                                    iData Harmonization
                                </h4>
                                <ul>
                                    <li>
                                        Data loading and profiling
                                    </li>
                                    <li className='pt-2'>
                                        Data cleansing, standardization, normalization, enrichment, auto-corrections / updates from repositories and libraries, AI + ML
                                    </li>
                                    <li className='pt-2'>
                                        Data transformation and Data quality assessment
                                    </li>
                                    <li className='pt-2'>
                                        Data Quality Establishment & Compliance
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={5}>
                            <div>
                                <img className='w-100' src={require('../Assets/InnovativeProducts/dqh/idata-governance-icon.png')} alt='Innovative products-dqh-img' />
                            </div>


                            <div className='text-start'>
                                <h4>
                                    iData Governance
                                </h4>
                                <ul>
                                    <li>
                                        Batch or record-based data management functions such as Create, Change, Extend, Delete, Undelete, Merge, Split, Match, Validate, Archive, Unarchive, Link, Delink as per the Business Rules of the data objects compliant with Target systems

                                    </li>
                                    <li className='pt-2'>
                                        Data Quality establishment: SLAs, KPIs, InfoGraphics
                                    </li>

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br />

            <div>
                <Row className='justify-content-center'>
                    <div>
                        <h3>
                            Architecture
                        </h3>
                    </div>
                    <Col lg={6}>
                        <div>
                            <img className='w-100' src={require('../Assets/InnovativeProducts/dqh/architecture.png')} alt='Innovative products-dqh-img' />
                        </div>
                    </Col>
                </Row>
            </div>
            <br />

            <div>
                <Container>
                    <Row className='justify-content-center'>
                        <h4>
                            Add-Ons
                        </h4>
                        <Col lg={3}>
                            <div style={{ margin: '10px' }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/zadImKJAco4?enablejsapi=1&amp;origin=https://www.piloggroup.com"
                                    title="UI/UX Themes"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                                <h6>
                                    UI/UX Themes
                                </h6>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div style={{ margin: '10px' }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/yXgbyMQh7yc?enablejsapi=1&amp;origin=https://www.piloggroup.com"
                                    title="Smart Consolidation"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                                <h6>
                                    Smart Consolidation
                                </h6>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div style={{ margin: '10px' }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/rOTKDeb39bA?enablejsapi=1&amp;origin=https://www.piloggroup.com"
                                    title="RPA Robotic Process Automation - BOTs"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                                <h6>
                                    RPA Robotic Process Automation - BOTs
                                </h6>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div style={{ margin: '10px' }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/zTwoMWQ9gKo?enablejsapi=1&amp;origin=https://www.piloggroup.com"
                                    title="Data Profiling and Analysis"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                                <h6>
                                    Data Profiling and Analysis
                                </h6>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div style={{ margin: '10px' }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/bETr41yS3n8?enablejsapi=1&amp;origin=https://www.piloggroup.com"
                                    title="Analytics Spend Cubes"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                                <h6>
                                    Analytics Spend Cubes
                                </h6>
                            </div>
                        </Col>


                        <Col lg={3}>
                            <div style={{ margin: '10px' }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/M3IBdqNp7No?enablejsapi=1&amp;origin=https://www.piloggroup.com"
                                    title=" iTransform ETL"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                                <h6>
                                    iTransform ETL
                                </h6>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div style={{ margin: '10px' }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/rAoX3H4757E?enablejsapi=1&amp;origin=https://www.piloggroup.com"
                                    title="iSPIR"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                                <h6>
                                    iSPIR
                                </h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div >
    )
}
