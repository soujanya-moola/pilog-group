import React from 'react'
import './Publications.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
export const Brochure = () => {
    return (
        <div>

            <div className='publicaton-Brochure'>
                <Container>
                    <h2>Brochure</h2>
                </Container>

            </div>

            <div className='my-4 py-4'>
                <Container>
                    <Row className='brochar-part'>
                        <Col lg={4}>
                            <Card  className='d-flex align-items-center shadow my-4' >
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Master Data Record Manager</Card.Title>
                                    <Card.Text>
                                    Master Data Governance Solution for (Material, Service, Vendor, Customer, Assets etc.), ETL, Data Harmonization and Data Quality
                                    </Card.Text>
                                    <Button variant="primary">Download Brochar</Button>
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card   className='d-flex align-items-center shadow my-4' style={{height:'15rem'}}>
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Data Quality Hub</Card.Title>
                                    <Card.Text>
                                    Seamless Master Data extraction from various digital sources. Cleansing, standardization, classification and enrichment.
                                     </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card  className='d-flex align-items-center shadow my-4' style={{height:'15rem'}} >
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Data Harmonization Solution</Card.Title>
                                    <Card.Text>
                                    Preconfigured templates, data models and structures. ISO 8000 compliant
                                    </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card className='d-flex align-items-center shadow my-4' style={{height:'15rem'}}>
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Master Data Ontology Manager</Card.Title>
                                    <Card.Text>
                                    ISO 8000 compliant data models and structures. Data Cleansing, Harmonization, Validation and Enrichment 
                                    </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card  className='d-flex align-items-center shadow my-4' style={{height:'15rem'}} >
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>PiLog Preferred Records</Card.Title>
                                    <Card.Text>
                                    Over 10 million Unique, Verified with Confidence level, Pre-Catalogued, Standardized Material, Equipment and Service Master Records.
                                    </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card   className='d-flex align-items-center shadow my-4' style={{height:'15rem'}}>
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>PiLog Preferred Ontology</Card.Title>
                                    <Card.Text>
                                    Over 6000+ Unique templates for Material, Equipment and Service Master Records. ISO 8000 compliant data models and structures
                                    </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card className='d-flex align-items-center shadow my-4' style={{height:'15rem'}}>
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>PiLog Preferred Hierarchy</Card.Title>
                                    <Card.Text>
                                    ISO 8000 compliant data models and structures. Data Cleansing, Harmonization, Validation and Enrichment 
                                    </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card className='d-flex align-items-center shadow my-4' style={{height:'15rem'}} >
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Service Master Configurator</Card.Title>
                                    <Card.Text>
                                    Over 6000+ Unique templates for Material, Equipment and Service Master Records. ISO 8000 compliant data models and structures
                                    </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card className='d-flex align-items-center shadow my-4'  style={{height:'15rem'}}>
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>iTransform ETL</Card.Title>
                                    <Card.Text>
                                    Over 10 million Unique, Verified with Confidence level, Pre-Catalogued, Standardized Material, Equipment and Service Master Records.
                                    </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card className='d-flex align-items-center shadow my-4' style={{height:'15rem'}} >
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>iVisualize - Digital Analytics</Card.Title>
                                    <Card.Text>
                                    Over 6000+ Unique templates for Material, Equipment and Service Master Records. ISO 8000 compliant data models and structures
                                    </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card className='d-flex align-items-center shadow my-4' style={{height:'15rem'}}>
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>iCustomer Insights - CRM</Card.Title>
                                    <Card.Text>

                                    Over 10 million Unique, Verified with Confidence level, Pre-Catalogued, Standardized Material, Equipment and Service Master Records.
                                   </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card className='d-flex align-items-center shadow my-4 ' style={{height:'15rem'}}>
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20}} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Spare Parts Interchangeability Record</Card.Title>
                                    <Card.Text>
                                    ISO 8000 compliant data models and structures. Data Cleansing, Harmonization, Validation and Enrichment
                                    </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col lg={4}>
                            <Card className='d-flex align-items-center shadow my-4' style={{height:'15rem'}} >
                                <div className='Brochar-card border  shadow'>
                                    <Card.Img variant="top" className='' style={{ width: 50, marginTop:-20, paddingTop:15 }} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Micro-services (APIs) for Cleansing, Harmonization, Validation and Enrichment</Card.Title>
                                    <Card.Text>
                                    ISO 8000 compliant data models and structures. Data Cleansing, Harmonization, Validation and Enrichment
                                    </Card.Text>
                                    {/* <Button variant="primary">Download Brochar</Button> */}
                                </Card.Body>
                            </Card>
                            
                        </Col>


                    </Row>
                </Container>
            </div>
        </div>
    )
}
