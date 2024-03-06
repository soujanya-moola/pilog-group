import React from 'react'
import './InnovativeProducts.css'

import { Button, Col, Container, Row } from 'react-bootstrap'

export const InnovativeProducts = () => {
    

    return (
        <div>
            <div className='innovate-product-hero'>
                <img className='w-100' src={require('../Assets/InnovativeProducts/Innovative_Products_Banner.jpg')} />
                <div className='innovate-product-hero-title' >
                    <h1>Innovative Products</h1>
                </div>
            </div>
            <div>
                <Container>
                    <Row  className='innov-products'>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/MDRM_Side_Image.jpg')} />

                        </Col>
                        <Col lg={5} xs={12}>
                        <h4 className='mdrm-text'>Master Data Record Manager (MDRM)</h4>
                        <p>Master Data Governance Solution for (Material, Service, Vendor, Customer, Assets etc.)</p>
                        <Button>Read More</Button>
                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products '>
                       
                        <Col lg={5} xs={12}>
                        <h4 className='mdrm-text'>Data Quality HUB (DQH)</h4>
                        <p>Seamless Master Data extraction from various digital sources. Cleansing, standardization, classification and enrichment.</p>
                        <Button>Read More</Button>
                        </Col>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/DQH_Side_Image.jpg')} />

                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/DHS_Side_Image.jpg')} />

                        </Col>
                        <Col>
                        <h4 className='mdrm-text'>Data Harmonization Solution (DHS)</h4>
                        <p>ISO 8000 compliant data models and structures. Data Cleansing, Harmonization, Validation & Enrichment</p>
                        <Button>Read More</Button>
                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                       
                        <Col>
                        <h4 className='mdrm-text'>Master Data Ontology Manager</h4>
                        <p>ISO 8000 compliant data models and structures. Data Cleansing, Harmonization, Validation & Enrichment.</p>
                        <Button>Read More</Button>
                        </Col>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/MDOM_Side_Image.jpg')} />

                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/PPR_Side_Image.jpg')} />

                        </Col>
                        <Col>
                        <h4 className='mdrm-text'>PiLog Preferred Records (PPR)</h4>
                        <p>Over 10 million Unique, Verified with Confidence level, Pre-Catalogued, Standardized Material, Equipment & Service Master Records.</p>
                        <Button>Read More</Button>
                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                       
                        <Col>
                        <h4 className='mdrm-text'>PiLog Preferred Ontology (PPO)</h4>
                        <p>Over 6000+ Unique templates for Material, Equipment & Service Master Records. ISO 8000 compliant data models and structures.</p>
                        <Button>Read More</Button>
                        </Col>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/PPO_Side_Image.jpg')} />

                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/PiLog Preferred Hierarchy_side_Banner.jpg')} />

                        </Col>
                        <Col>
                        <h4 className='mdrm-text'>PiLog Preferred Hierarchy (PPH)</h4>
                        <p>Over 10 million Unique, Verified with Confidence level, Pre-Catalogued, Standardized Material, Equipment & Service Master Records.</p>
                        <Button>Read More</Button>
                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                       
                        <Col>
                        <h4 className='mdrm-text'>Spare Parts Interchangeability Record</h4>
                        <p>Optimized Spares Parts Management covering Capital / Lifetime, Operational items. Inventory & Asset Optimization.</p>
                        <Button>Read More</Button>
                        </Col>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/iSPIR_Side_Image.jpg')} />

                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/Service_Master_Configurator_Side_Image.jpg')} />

                        </Col>
                        <Col>
                        <h4 className='mdrm-text'>Service Master Configurator</h4>
                        <p>ISO 8000 compliant data models and structures, Preconfigured templates.</p>
                        <Button>Read More</Button>
                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                       
                        <Col>
                        <h4 className='mdrm-text'>Micro-services (APIs) for Cleansing, Harmonization, Validation & Enrichment</h4>
                        <Button>Read More</Button>
                        </Col>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/Micro_services_(APIs)_for_Cleansing_Harmonization_Validation_Enrichment_side_banner.jpg')} />

                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/iTransform_ETL_Side_Banner.jpg')} />

                        </Col>
                        <Col>
                        <h4 className='mdrm-text'>iTransform - ETL</h4>
                         <Button>Read More</Button>
                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                       
                        <Col>
                        <h4 className='mdrm-text'>iVisualize - Digital Analytics</h4>
                        <Button>Read More</Button>
                        </Col>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/iVisualize-Digital-Analytics_Side_Banner.jpg')} />

                        </Col>
                    </Row>
                    <hr/>
                    <Row  className='innov-products'>
                        <Col lg={6} xs={12}>
                <img className='mdrm-img' src={require('../Assets/InnovativeProducts/iCustomer_Insighs_CRM_Side_Banner.jpg')} />

                        </Col>
                        <Col>
                        <h4 className='mdrm-text'>iCustomer Insights - CRM</h4>
                         <Button>Read More</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
