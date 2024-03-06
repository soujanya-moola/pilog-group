import React from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
import StarHalfIcon from '@mui/icons-material/StarHalf';

export const MasterDataRecordManager = () => {
    return (
        <div>
            <div>
                <img className='w-75' src={require('../Assets/InnovativeProducts/iMDRM/mdrm-10.4.1-popup-banner.jpg')} alt='mdrm-first-img' />
            </div>

            <div className='my-5 bg-light py-4'>
                <div>
                    <h5 className='mdrm-version'>MDRM Version 10.4.1</h5>
                    <h1 className='mdrm-heading'>PiLog's Master Data Record Manager (MDRM)</h1>
                    <h4 className='py-4'>Master Data Governance Solution for (Material, Service, Vendor,<br />
                        Customer, Assets, Employee, Business Partner, etc.)<br />
                        with embedded Data Quality Management</h4>
                </div>
            </div>
            <div className='my-5'>
                <Container >
                    <Row>
                        <Col lg={5}>
                            <div >
                                <img className='w-100 rounded' src={require('../Assets/InnovativeProducts/iMDRM/capabilities-pilog.jpg')} alt='mdrm-first-img' />
                            </div>
                        </Col>
                        <Col lg={7} >
                            <div className='mdrm-capabilities'>
                                <h1 className='mdrm-heading'>PiLog MDRM Capabilities</h1>
                                <h6 className='py-3'>PiLog MDRM is a diversified data management system that provides users liberty from complex operations and optimizes their time management.This software automates all processes conclusively without any miscalculation.</h6>
                                <Button>Read More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='my-5 bg-light py-3'>
                <Container>
                    <div className='mdrm-sol'>
                        <h1 className='mdrm-heading'>
                            Data and Analytics Governance Trends
                        </h1>
                        <h6>"By 2024, <span>30%</span> of organizations will invest in <span>data and analytics governance </span> platforms, thus increasing the business impact of trusted insights and new efficiencies"</h6>
                        <h6>"Through 2025, <span>80%</span> of organizations seeking to <span>scale digital business will fail </span> because they do not take a modern approach to data and analytics governance"</h6>
                    </div>
                    <div className='my-4'>
                        <img className='w-50 rounded' src={require('../Assets/InnovativeProducts/iMDRM/Reasons for Failure_MDRM_Page_Image-10.png')} alt='mdrm-first-img' />

                    </div>
                </Container>
            </div>
            {/* Oracle Intigration */}
            <div className='my-4'>
                <Container>
                    <Row>
                        <Col>
                            <div className='mdrm-oracle'>
                                <h1 className='mdrm-heading'>
                                    Oracle Integration
                                </h1>
                                <h6>PiLog MDRM has integration with Oracle EBS Applications for Item, Service, Supplier, Customer & EAM masters. We are re-building the integrations with Oracle Fusion Applications on cloud using Oracle Integration Cloud [with EBS Adapters]</h6>
                                <Button>Click Here</Button>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img className='w-100 rounded' src={require('../Assets/InnovativeProducts/iMDRM/Oracle_Clouds_Image.png')} alt='mdrm-first-img' />

                            </div>
                        </Col>
                    </Row>



                </Container>
            </div>
            {/* Oracle Intigration end */}
            {/* MDRM Integration with Multiple ERPs start */}
            <div className='my-5 bg-light py-3'>
                <Container>
                    <div className='mdrm-sol'>
                        <h1 className='mdrm-heading'>
                            MDRM Integration with Multiple ERPs
                        </h1>
                        <h6>MDRM is integrated with multiple ERPs like IBM Maximo, Big Data Hadoop, on-cloud, C4C, Salesforce, Microsoft Dynamics Oracle EBS, SAP hybris, SAP ERP, SAP Ariba, SAP S/4 Hana.</h6>
                    </div>
                    <div className='my-4 py-4'>
                        <img className='w-100 rounded' src={require('../Assets/InnovativeProducts/iMDRM/Integration into iMDRM.png')} alt='mdrm-first-img' />

                    </div>
                </Container>
            </div>
            {/* MDRM Integration with Multiple ERPs end */}
            {/* Vision 10 Architecture */}
            <div className='bg-light py-4'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div  className='bg-white rounded-4 p-2'>
                            <div className='mdrm-sol'>
                                <h1 className='mdrm-heading'>
                                    Vision 10 Architecture
                                </h1>
                                <h6>Architecture for Vision 10 representing Client, Server and RDBMS layers</h6>
                            </div>
                            <div className='my-4 py-4'>
                                <img className='w-100 rounded' src={require('../Assets/InnovativeProducts/iMDRM/iMDRM_architecture-10.png')} alt='mdrm-first-img' />

                            </div>
                            </div>
                        </Col>
                        <Col lg={4} >
                            <div className='bg-white rounded-4'>
                            <div className='p-3' >
                                <h3>Customer Testimonials</h3>
                                <p>We offer Digital Transformation and Master Data Management solutions. We combine our industry knowledge and technology to create solutions that help our customers, and we think customer satisfaction is our no.1 priority.</p>
                                <div>
                                    <StarHalfIcon fontSize='large' /><StarHalfIcon fontSize='large' /><StarHalfIcon fontSize='large' /><StarHalfIcon fontSize='large' /><StarHalfIcon fontSize='large' />
                                </div>
                            </div>
                            <Carousel className='mdrm-data-slide'>
                                <Carousel.Item >

                                    <Row>
                                        <Col>
                                            <p>“ It is very useful for Master Data analytics, well interfaced with SAP for creation, extension, change, deletion, and undeletion of materials. Useful to find all duplicates across all business units ”</p>
                                            <h6>- DGM in the Manufacturing Industry</h6>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col>
                                            <p>“PiLog has a broad view on business needs related to data management. They are able to support us from advise till implementation. Through their decisiveness, knowledge and capacity they are able to convert large work packages in accordance with the customer's needs."</p>
                                            <h6>- Director in the Manufacturing Industry</h6>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <Row>
                                        <Col>
                                            <p>“ MDRM tool is providing a very comfortable platform to manage our Master Data (Materials and services). User friendly, cost effective and international standard. It well integrated with our ERP system. Currently with MDRM V10, we are enjoying speedy application that will be available on mobile phones ”</p>
                                            <h6>- Functional Analyst in the Manufacturing Industry</h6>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col>
                                            <p>“ PiLog has a team of professional and well supported people and we are satisfied with its service. Application is developed in user friendly manner and its dictionary provides full knowledge of Material master ”</p>
                                            <h6>- Manager - SAP & IT in the Manufacturing Industry</h6>

                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <Row>
                                        <Col>
                                            <p>“ The PiLog MDRM system provides a multi-domain solution that helps to create and maintain the master data records of an enterprise in a single piece of software. ”</p>
                                            <h6>- Customer Service Executive in the Services Industry</h6>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-5 bg-light py-3'>
                <Container>
                    <div className='mdrm-sol'>
                        <h1 className='mdrm-heading'>
                        Business Value Propositions of MDRM
                        </h1>
                        <h6>Enterprise Data Strategy, Asset Lifecycle Management, Data Governance and Analytics, Data Quality Management, Supply Chain Management, Business Partner Lifecycle Management</h6>
                    </div>
                    <div className='my-4 py-4'>
                        <img className='w-100 rounded' src={require('../Assets/InnovativeProducts/iMDRM/Benefits_Of_iMDRM_New.png')} alt='mdrm-first-img' />

                    </div>
                </Container>
            </div>

            <div className='py-4'>
                <Container>
                    <div>
                        <h4>PiLog System Landscapes</h4>
                        <h6>PiLog MDRM system allows for multi-domain and multi-lingual solutions to create and manage master data records in one software program.</h6>
                    </div>
                    <Carousel className='mca-analisys '>
                        <Carousel.Item className='py-2'>

                            <Row className='my-4'>
                                <Col>
                                    <img className='w-75' src={require('../Assets/InnovativeProducts/iMDRM/PiLog integrates with SAP using SAP web services_iMDRM-Image-01.png')} alt='mca-carosal-img' />
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item className='py-2'>
                            <Row className='my-4'>
                                <Col>
                                    <img className='w-75' src={require('../Assets/InnovativeProducts/iMDRM/PiLog integrates with SAP using SAP web services_iMDRM-Image-03.png')} alt='mca-carosal-img' />
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>

            <div>

                <Marquee scrollamount="2" >
                    <img className='client-logo' src={require("../Assets/ClientLogos/ABU_Dhabi_Airports.png")} alt='hero-client-1' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/Aditya_MP_Birla Group.jpg")} alt='hero-client-2' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/Al_Maktoum_Airports.png")} alt='hero-client-3' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/Birla_Cement.jpg")} alt='hero-client-4' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/Birla_White_Cement.jpg")} alt='hero-client-5' />
                    {/* <img className='client-logo' src={require("../Assets/ClientLogos/Client-Logos-09.jpg")} alt='hero-client-6' /> */}
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-03.png")} alt='hero-client-7' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-06.png")} alt='hero-client-8' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-02.png")} alt='hero-client-9' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-09.png")} alt='hero-client-10' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-12.png")} alt='hero-client-11' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-14.png")} alt='hero-client-12' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-17.png")} alt='hero-client-13' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-24.png")} alt='hero-client-14' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-32.png")} alt='hero-client-15' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-40.png")} alt='hero-client-16' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-49.png")} alt='hero-client-17' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-53.png")} alt='hero-client-18' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-56.png")} alt='hero-client-19' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-65.png")} alt='hero-client-20' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/Natref.png")} alt='hero-client-21' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/Nuvoco.jpg")} alt='hero-client-22' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/Piramal.jpg")} alt='hero-client-23' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/Sastech.jpg")} alt='hero-client-24' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/Sipchem.jpg")} alt='hero-client-25' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/Vale_avatar.jpg")} alt='hero-client-26' />
                    <img className='client-logo' src={require("../Assets/ClientLogos/adani.png")} alt='hero-client-27' />

                </Marquee>

            </div>

            <div className='bg-light my-4 py-4'>
                <Container>
                    <div className='mdrm-sol'>
                        <h1 className='mdrm-heading'>
                            Integration With PiLog Preferred Add-Ons
                        </h1>
                        <h6>MDRM is integrated with PiLog Preferred Add-Ons like PPO, PPR and PPH.</h6>

                    </div>
                    <Row className='py-4'>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='text-primary'>PiLog Preferred Ontology (PPO)</Card.Title>
                                    <Card.Img className='w-75' src={require('../Assets/InnovativeProducts/iMDRM/PPO.png')} />

                                    <Card.Text>
                                        Over 6000+ Unique templates for Material, Equipment and Service Master Records....
                                    </Card.Text>
                                    <Button variant="primary">Click Here</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='text-primary'>PiLog Preferred Records (PPR)</Card.Title>
                                    <Card.Img className='w-75' src={require('../Assets/InnovativeProducts/iMDRM/PPR.png')} />


                                    <Card.Text>
                                        Over 10 million Unique, Verified with Confidence level, Pre-Catalogued ....
                                    </Card.Text>
                                    <Button variant="primary">Click Here</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='text-primary'>PiLog Preferred Heirarchy (PPH)</Card.Title>
                                    <Card.Img className='w-75' src={require('../Assets/InnovativeProducts/iMDRM/PPH2.png')} />


                                    <Card.Text>
                                        Mapped with Taxonomies to determine Business and Economic activities
                                    </Card.Text>
                                    <Button variant="primary">Click Here</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4'>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img className='w-100' src={require('../Assets/InnovativeProducts/iMDRM/Add-Ons-image.jpg')} />
                                <Card.Body>
                                    <Card.Title><h4 className='py-2'>Add-Ons</h4></Card.Title>
                                    <Card.Text>
                                        <h6>
                                            The following are the new Add-ons available on PiLog MDRM, which allow you to enhance various functionalities.
                                        </h6>
                                    </Card.Text>
                                    <Button variant="primary">Click Here</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img className='w-100' src={require('../Assets/InnovativeProducts/iMDRM/maxresdefault.jpg')} />
                                <Card.Body>
                                    <Card.Title><h4 className='py-3'>Webinars</h4></Card.Title>
                                    <Card.Text>
                                        <h6>
                                            PiLog Value Engineering Webinar Series
                                        </h6>
                                    </Card.Text>
                                    <Button variant="primary">Click Here</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
