import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const PVorFDC = () => {
  return (
    <div>
            <div className='services-pvfdc'>
                {/* <img className='w-100' src={require('../Assets/Services/banner-large.jpg')} alt='service-da-banner' /> */}
                <div>
                    <h1>Physical-Verification (or) Field<br/> Data Collection</h1>
                    <p>Digital Image Management, Bar Code / RFID Tagging and WH Automation and Inventory Optimization SOP's</p> </div>
            </div>
            <br />
            {/* {/ End-Div-1 /} */}

            <div>
                <Container>
                    <Row className='my-4 d-flex text-align-left align-items-center justify-content-center'>
                        
                        <Col lg={8} className='daa-desc'>
                            <p>
                            Physical verification is the process that is normally performed by an auditor
                             to confirm the existence of physical assets of Fixed Asset Accounting Records. 
                             Most of assets that auditors verifiy are fixed assets and inventories. 
                             And so it is the process of making valid the information on assets, for
                              example for property, plant and equipment; confirming the existence, location and
                               condition of the asset. Knowing what assets you have, where they are located,
                                when they were purchased, if they are still in use.
                            </p>
                            
                        </Col>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/Physical_Verification_Walk_Down_Side_Image-01.jpg')} alt='service-pmd-img-1' />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* {/ End-Div-2 /} */}
            <div className='bg-light py-3 border-top'>
                <Container>
                    <Row className='my-4 d-flex text-align-left align-items-center justify-content-center'>
                    <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/Physical_Verification_Walk_Down_Side_Image-02.jpg')} alt='service-pmd-img-1' />
                        </Col>
                        <Col lg={8} className='daa-desc'>
                            <p>
                            The physical verification is normally performed at the year ended or at the end of 
                            report date of financial statements. The full count is performed by client's delegate 
                            staffs and observers by auditors. Auditors also need to review the counting procedures 
                            from before count, during count and after count.
                            </p>
                            
                        </Col>
                        
                    </Row>
                </Container>
            </div>
            
        </div>
  )
}
