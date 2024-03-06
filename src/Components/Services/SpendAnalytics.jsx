import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const SpendAnalytics = () => {
    return (
        <div>
            <div className='services-sa'>
                {/* <img className='w-100' src={require('../Assets/Services/banner-large.jpg')} alt='service-da-banner' /> */}
                <div>
                    <h1>Spend Analytics</h1>
                    <p>Derive best in class and tailor made spend visibility, dashboards and reports</p> </div>
            </div>
            <br />
            {/* {/ End-Div-1 /} */}

            <div>
                <Container>
                    <Row className='my-5 py-3 d-flex text-align-left align-items-center justify-content-center'>
                        <Col lg={8} className='daa-desc'>
                            <p>
                                PiLog Spend Analytics is the process of collecting spend data from
                                all purchasing sources and systems, cleansing the data, categorizing the
                                data and analyzing it for the purpose of understanding spending trends and
                                identifying saving opportunities. The data included in the spend analytics
                                might include purchasing data, payment data, credit card data and P-card spend data.
                                The information is not only
                                useful for sourcing professionals but also for management and budget owners.
                            </p>
                        </Col>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/Spend-Analytices-Inside-Images-01.jpg')} alt='service-pmd-img-1' />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* {/ End-Div-2 /} */}
            <div className='bg-light py-4'>
                <Container>
                    <h4>Benefits of Spend Analytics</h4>
                    <p>Before we get into how to conduct spend analytics, let’s look at some of the benefits of spend analytics and its common use cases.</p>
                    <Row className='my-5 pt-3 d-flex text-align-left align-items-center justify-content-center'>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/Spend_Analytices_Inside_Images-02.jpg')} alt='service-pmd-img-1' />
                        </Col>

                        <Col lg={8} className='spend-analysis'>
                            <h6>Spend Visibility</h6>
                            <p>
                                Whether it is the CFO of the company or whether it is a department budget owner, they are seeking better visibility into the company or their department spend. The goal is, of course, understand how much they are spending but also to understand where they are spending money.
                            </p>

                        </Col>
                    </Row>
                    <p>
                        Spend Analytics done right can help answer common questions asked by senior management.
                    </p>

                    <Row className='my-5 pt-3 d-flex text-align-left align-items-center justify-content-center'>


                        <Col lg={8} className='spend-analysis'>
                            <h6>Savings Opportunity Identification</h6>
                            <p>
                                The next most common use case is identifying opportunities for savings/cost reduction. Procurement professionals are charged with cost reduction and they need data to better understand spend at line item level to come up with savings pipeline. </p>


                        </Col>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/Spend_Analytices_Inside_Images-03.jpg')} alt='service-pmd-img-1' />
                        </Col>
                    </Row>
                    <Row className='my-5 pt-3 d-flex text-align-left align-items-center justify-content-center'>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/Spend_Analytices_Inside_Images-04.jpg')} alt='service-pmd-img-1' />
                        </Col>

                        <Col lg={8} className='spend-analysis'>
                            <h6>Spend Forecasting</h6>
                            <p>
                                Ability to forecast spend is an important benefit of spend analytics. There are multiple teams in the organization who can use the spend data to forecast future spending. </p>

                        </Col>
                    </Row>
                    <p>For example, finance and planning can use the spend data to understand recurring vendor spend along with long-term contracts to forecast next few years expenditure budgets.</p>
                    <Row className='my-5 pt-3 d-flex text-align-left align-items-center justify-content-center'>
                        <Col lg={8} className='spend-analysis'>
                            <h6>Diversity Reporting</h6>
                            <p>Having data at one single place helps to better understand spend with diversity vendors but also help uncover opportunities to engage more with diverse vendors in certain categories.</p>
                            <p>Moreover, this diversity reporting is required by the sales team to respond to RFPs, so having this data handy leads to faster turnaround of RFP responses by your sales teams.</p>
                            </Col>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/Spend_Analytices_Inside_Images-05.jpg')} alt='service-pmd-img-1' />
                        </Col>
                    </Row>
                    <p>The focus of PiLog is on identifying saving opportunities and provide visibility. Hence, PiLog Spend Analytics always becoming a core solution to our stakeholders.</p>
                </Container>
            </div>
        </div>
    )
}
