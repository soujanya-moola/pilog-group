import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const ISManagement = () => {
  return (
    <div>
        <div className='services-ispir'>
                {/* <img className='w-100' src={require('../Assets/Services/banner-large.jpg')} alt='service-da-banner' /> */}
                <div>
                    <h1>iSPIR Management</h1>
                    <p>Information management of replaceable interchangeable and alternatives spaces for effective<br/>
                    MRO inventory management for expansion or capital project</p> </div>
            </div>
            <div>
                <Container>
                    <Row className='services-ispir-content'>
                        <div>
                            <h4>Definition of Enterprise Resource Planning (ERP)</h4>
                            <p>Enterprise resource planning (ERP) software is a system designed to help organizations manage their resources and operations in an efficient manner. It allows businesses to integrate all of their core processes, such as finance, accounting, manufacturing, sales, human resources and more into one unified system. By doing this, it enables businesses to streamline their operations and improve visibility into their organization's performance. ERP software also helps organizations reduce costs by automating tedious manual tasks and eliminating the need for multiple systems. This helps businesses save time and money while increasing efficiency across the organization.</p>

                        </div>
                    </Row>
                    <Row className='services-ispir-content'>
                        <div>
                            <h4>Benefits of ERP</h4>
                            <p>Enterprise resource planning (ERP) is a business management system that helps organizations automate and manage their operations in a centralized manner. ERP solutions are used to improve organizational efficiency, increase customer satisfaction, reduce costs, and streamline processes. ERP systems offer numerous benefits to businesses of all sizes, such as improved visibility into data and operations, better collaboration between departments, better customer service levels, enhanced scalability, increased process efficiency and speed of execution. Additionally, ERP systems can also provide businesses with greater insights into their customers' needs and preferences. This allows them to better tailor their services to meet customer expectations. By utilizing an ERP system businesses can achieve significant cost savings through reduced manual labor costs and streamlined processes.</p>
                        </div>
                    </Row>
                    <Row className='services-ispir-content'>
                        <div>
                            <h4>ERP Challenges</h4>
                            <p>Enterprise Resource Planning (ERP) is a system used by companies to manage their core business processes and activities. It helps them streamline their operations, improve productivity, and increase efficiency. However, there are certain challenges associated with ERP that can make it difficult to get the most out of the system. These challenges include software integration problems, cost constraints, data security risks, lack of flexibility and scalability of the system, and difficulty in customizing it according to company requirements. To overcome these challenges and maximize the benefits of ERP systems, businesses need to ensure that they have adequate resources as well as setting up proper systems for data security. Additionally, they should evaluate different solutions available in the market before investing in one so that they can select a system that best meets their needs.</p>
                        </div>
                    </Row>
                    <Row className='services-ispir-content'>
                        <div>
                            <h4>Types of ERP</h4>
                            <p>Enterprise Resource Planning (ERP) systems can help companies become more efficient and organized by having access to centralized data and leveraging automation. There are various types of ERP systems, each suitable for different businesses depending on their size and industry.</p>
                        </div>
                        <ul className='m-3'>
                        <div>
                           <li> <h5>Cloud-based ERP Solutions</h5></li>
                            <p>For instance, It is ideal for small businesses who need an affordable solution that can scale as they grow.</p>
                        </div>
                        <div>
                            <li><h5>On-Premise ERP System</h5></li>
                            <p>On the other hand, large organizations might opt for an on-premise system that provides a higher level of customization.</p>
                            <p>No matter the type of ERP system chosen, it's important to ensure that it meets all your business needs.</p>
                        </div>
                        </ul>
                       
                    </Row>
                    
                </Container>
            </div>
            <div className='service-ispir-last'>
                <Container>
                    <Row className='service-ispir-last-content'>
                        <Col lg={4}>
                            <div>
                                <ul>
                                    <li>Minimized production downtime</li>
                                    <li>Cost reduction</li>
                                    <li>Established preventive measures</li>
                                    <li>Increased productivity</li>
                                    <li>Reduced impulsive buying</li>
                                    <li>Provides detailed spare part list</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                            <img className='w-100 rounded' src={require('../Assets/Services/ispir-img2.png')} alt='dm-img1'/>

                            </div>
                        </Col>
                        <Col lg={5}>
                            <div>
                                <ul>
                                    <li>Provides sectional drawings for each item with which we can identify the spare perfectly</li>
                                    <li>Reduce or eliminate obsolete parts</li>
                                    <li>Remove or eliminate duplicates</li>
                                    <li>It will ensure proper control of high cost items</li>
                                    <li>It helps in reducing production and standby charges</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
    </div>
  )
}
