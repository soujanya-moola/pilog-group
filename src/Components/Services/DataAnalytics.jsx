import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Services.css'

export const DataAnalytics = () => {
    return (
        <div>
            <div className=' position-relative text-align-center text-light'>
                <img className='w-100' src={require('../Assets/Services/banner-large.jpg')} alt='service-da-banner' />
                <div className=' dh position-absolute top-50 left-50 transform-translate(-50%, -50%)' >
                    <h1>Data Analytics</h1>
                    <p>Services Using Analytics Software to provide insights into the business<br /> performance with real-time dashboards</p>
                </div>
            </div>
            <br/>
            <div>
                <Container>
                    <Row className='my-4 d-flex text-align-left'>
                        <Col lg={8} className='da-discription'  >
                           
                            <p>The <b>Data Analytics</b> provides insights into the business performance with a real-time dashboard. PiLog data analytics effectively process the raw data and draw out valuable insights from the information. As raw data has significant potential, data analytics helps businesses to optimize their performance and improve their core. Organizations implement analytics to business data to identify, analyze and improve business performance.</p>
                            <p>PiLog team of experts and leading data analysts assist in product development, analyzing customer trends, and improve operational efficiency.</p>
                        </Col>
                        <Col lg={4}>
                        <img className='w-100 rounded' src={require('../Assets/Services/da-img1.jpg')} alt='service-da1' />

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='da-key-offer'>
                <h4>PiLog's key offerings of data analytics services:</h4>
                <Container>

                    <Row className='mt-4'>
                        <Col lg={4}>
                        <img className='w-100 rounded' src={require('../Assets/Services/da-img2.jpg')} alt='service-da2' />

                        </Col>
                        <Col lg={8} className='da-points'>
                            <div className='key-offer'>
                            <ul>
                                <li>Financial services</li>
                                <li>Marketing and sales</li>
                                <li>E-commerce</li>
                                <li>Supply chain inventory</li>
                            </ul>
                            <ul>
                                <li>Asset lifecycle</li>
                                <li>Predictive maintenance</li>
                                <li>OEE (overall equipment effectiveness)</li>
                            </ul>
                            </div>
                            
                        </Col>
                    </Row>
                    <br/>
                    <div>PiLog data analytics unlocks the power to grow your business</div>
                </Container>
            </div>
            <div className='my-4 '>
                <Container>
                    <Row className='mt-2'>
                        <Col lg={8}>
                            <div className='shadow bg-body border rounded p-3 da-data'>
                                <h4>Descriptive Analytics</h4>
                                <p>Descriptive Analytics is a statistical technique used to search and summarise historical data to find patterns or meanings. It is also useful in learning analytics to gain insight into past patterns and performance in online learning environments. It is an important step for conducting statistical analysis. This allows you to draw conclusions about the distribution of your data and helps you identify outliers and types. It also allows you to identify commonalities among variables and prepares you for further statistical analyses.</p>
                            </div>
                        </Col>
                        <Col lg={4}  className='d-flex justify-content-center align-item-center text-align-center'>
                        <img className='w-100 rounded' src={require('../Assets/Services/da-img2.jpg')} alt='service-da2' />

                        </Col>
                    </Row>
                    <Row className='mt-5'>
                    <Col lg={4}  className='mt-4 d-flex justify-content-center align-item-center text-align-center'>
                        <img className='w-100 rounded' src={require('../Assets/Services/prescriptive-analytics-image.jpg')} alt='service-da2' />

                        </Col>
                        <Col lg={8} className='mt-4'>
                            <div className='shadow bg-body border rounded p-3 da-data'>
                                <h4>Prescriptive Analytics</h4>
                                <p>Prescriptive analytics analyzes data to provide instant recommendations about how to optimize business practices for multiple outcomes. Prescriptive analytics, which includes information about possible scenarios, available resources and past performance, then suggests an action or strategy. It can be used to make decisions at any time for the long term.</p>
                            </div>
                        </Col>
                        
                    </Row>
                    <Row className='mt-5 '>
                        <Col lg={8} className='mt-4'>
                            <div className='shadow bg-body border rounded p-3 da-data'>
                                <h4>Predictive Analytics</h4>
                                <p>Predictive analytics refers to data analytics that makes predictions about future outcomes using historical data, analytics techniques like statistical modelling and machine learning. Predictive analytics is a technology that can provide future insights with high precision. Any organisation can use past and present data to predict trends and behaviour in milliseconds, days or years ahead of time with the help of sophisticated predictive analytics models.</p>
                            </div>
                        </Col>
                        <Col lg={4}  className='mt-4 d-flex justify-content-center align-item-center text-align-center'>
                        <img className='w-100 rounded' src={require('../Assets/Services/predictive-analytics-image.jpg')} alt='service-da-pa' />

                        </Col>
                    </Row>
                    <Row className='mt-5'>
                    <Col lg={4}  className='mt-4 d-flex justify-content-center align-item-center text-align-center'>
                        <img className='w-100 rounded' src={require('../Assets/Services/spend-analytics-image.jpg')} alt='service-da-spend' />

                        </Col>
                        <Col lg={8} className='mt-4'>
                            <div className='shadow bg-body border rounded p-3 da-data'>
                                <h4>Spend Analytics</h4>
                                <p>Spend Analytics refers to the process of collecting, cleansing and classifying spending data to reduce procurement cost, improve efficiency, monitor and enforce compliance. It can also use it in other business areas such as inventory management and contract management. Organisations use these terms to manage their suppliers and track procurement performance. The terms are often interchangeable, but the analysis is only one step in the entire analytics process.</p>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
                
            </div>

        </div>
    )
}
