import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
export default function ImagingTaggingInventoryOptimization() {
    return (
        <div>
            <div className='services-pmdaa'>
                {/* <img className='w-100' src={require('../Assets/Services/banner-large.jpg')} alt='service-da-banner' /> */}
                <div>
                    <h1>Imaging, Tagging Inventory Optimization</h1>
                    <p>Digital Image Management, Bar Code / RFID Tagging and WH Automation and Inventory Optimization SOP's</p> </div>
            </div>
            <br />
            {/* {/ End-Div-1 /} */}

            <div>
                <Container>
                    <Row className='my-4 d-flex text-align-left align-items-center justify-content-center'>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/imaging_Tagging_inventory_Side_Image-01.jpg')} alt='service-pmd-img-1' />
                        </Col>
                        <Col lg={8} className='daa-desc'>
                            <p>
                                Imaging and Tagging are designed to simplify inventory management. From boosting inventory count accuracy to identifying inventory
                                assets, tracking inventory, and more, inventory Imaging and Tagging provide the foundation for greater efficiency and streamlined
                                processes.
                            </p>
                            <p>
                                PiLog will help you custom design the right Image for your various stocks. Easily monitor inventory, keep stock levels optimized, and
                                avoid lost inventory with Imaging and Tagging from PiLog.
                            </p>
                            <p>
                                PiLog also offers comprehensive, on-site inventory management services from an experienced, industry-leading team. If you need to improve
                                your inventory control processes, conduct a physical count for year-end inventory or budget reporting, or implementing an inventory management
                                system.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* {/ End-Div-2 /} */}
            
        </div>
    )
}