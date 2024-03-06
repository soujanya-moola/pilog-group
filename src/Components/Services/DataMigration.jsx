import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const DataMigration = () => {
  return (
    <div>
        <div className=' position-relative text-align-center text-light'>
                <img className='w-100' src={require('../Assets/Services/dm-banner-large.jpg')} alt='service-da-banner' />
                <div className=' dh position-absolute top-50 left-50 transform-translate(-50%, -50%)' >
                    <h1>Data Migration Tools</h1>
                    <p>Platform agnostic, standardized and seamless extraction, transformation and loading</p>
                </div>
            </div>
            <div className='my-5'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className='dm-part1-contyent'>
                                <p>Data migration is a tactical process of transferring data from one system to another new and upgraded system. PiLog Data migration service effectively selects, adapts and transforms data from one system storage to another permanently. Inflated demand of enterprises on optimization and technological advancement, employing database migration services to move their on-premises infrastructure to cloud-based storage.</p>
                                <p>Storage and cloud migrations sort of migrations ensure businesses with opportunities to increase their coordination, intensify growth, and discover business advantages. Data migration offers cost-effective transmission of applications to an upgraded and innovative context.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div>
                                <img className='w-100 rounded' src={require('../Assets/Services/dm-img1.jpg')} alt='dm-img1'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='dm-part2'>
            <Container>
                    <Row className='my-5 justify-content-center align-items-center'>
                    <Col lg={4}>
                            <div>
                                <img className='w-100 rounded' src={require('../Assets/Services/dm-img2.jpg')} alt='dm-img1'/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className='dm-part1-contyent'>
                                <p>Evaluating the existing resources, business requirements, data set and data sensitivity of an organization, we specify the appropriate migration technique offering reliability, migration efficiency, and marginal impact on users and business processes. PiLog data migration is a consistent process and assure data integrity, compatibility, reliability and low downtime.</p>
                                </div>
                        </Col>
                        
                    </Row>
                </Container>

            </div>
    </div>
  )
}
