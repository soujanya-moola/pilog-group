import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const DataConsultingServices = () => {
  return (
    <div>
    <div className='service-dcs'>
        {/* <img className='w-100' src={require('../Assets/Services/dau-banner-large.jpg')} alt='service-darchving-banner' /> */}
        <div className='' >
            <h1>Data Consulting</h1>
            <p>Establish the best practices from industry proven methodologies and<br/>processes for the organization to manage the lifecycle of enterprise data</p>
        </div>
    </div>
    <br />
    <div>
        <Container>
            <h4>Data Consulting Services</h4>
            <Row className='my-4 d-flex text-align-left'>
                <Col lg={8} className='daa-desc'>
                    <p>Data Consulting Services is the practice of managing data as a valuable resource to unlock its potential for an organization. Managing data effectively requires having a data strategy and reliable methods to access, integrate, cleanse, govern, store and prepare data for analytics.</p>
                       <p>Even though Master Data Consulting Services has in recent years become a focus point of the IT industry in large corporate companies, a surprisingly low number of companies actually implement and follow proper Master Data Governance. Different Master Data cleansing projects are often executed and no or little Master Data Consulting Services practices are instituted to keep the data clean.</p>
                    <p>Consulting in Master Data Governance is therefore about the creation of a corporate culture in which the importance and goals of Master Data Governance is well defined and understood, and therefore practiced in a goal orientated manner.</p>
                </Col>
                <Col lg={4}>
                    <img className='w-100 rounded-3' src={require('../Assets/Services/Data_Management_inside_Image.jpg')} alt='service-dau1' />
                </Col>
            </Row>
        </Container>
    </div>
   
</div>
  )
}
