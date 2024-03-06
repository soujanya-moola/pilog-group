import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const ManagementConsulting = () => {
  return (
    <div>
    <div className='service-mc'>
        {/* <img className='w-100' src={require('../Assets/Services/dau-banner-large.jpg')} alt='service-darchving-banner' /> */}
        <div className='' >
            <h1>Management Consulting</h1>
            <p>Process Studies, Best Practices Augmentation, Strategy Management,<br/>Change Management, Value Articulation and Continual Monitoring and Control.
            </p>
        </div>
    </div>
    <br />
    <div>
        <Container>
            <Row className='my-4 d-flex text-align-left'>
                <Col lg={8} className='daa-desc'>
                    <p>Our consulting services are focused to help a broad range of customers from small/medium to large enterprises in addressing their complex problems and make meaningful transformations.</p>
                    <p>With one of our strategic services we leverage <b>industry expertise </b> and <b> technical knowledge </b> to improve <b> business processes </b> as well as financial and operational health of your organisation</p>
                    <p>
                   
                    We enable organizations to not just stay competitive but also become a leader in market through discontinuous inorganic yet sustainable initiatives for growth.</p>
                <p>In basic terms the role of PiLog's consultant is to provide our client with an audit of current procedures, their recommendation for improvement and an action plan for implementation with preferable solutions.</p>
                </Col>
                <Col lg={4}>
                    <img className='w-100 rounded-3' src={require('../Assets/Services/Management_Consulting_Inside_Image-01.jpg')} alt='service-dau1' />
                </Col>
            </Row>
        </Container>
    </div>
    {/* End-Div-1 */}
    <div className='dau-keypoints'>
        <h4>
        How does PiLog management consulting project works?
        </h4>
        <Container>
            <Row className='mt-4 d-flex justify-content-center align-items-center'>
                <Col lg={4}>
                    <img className='w-100 rounded-3' src={require('../Assets/Services/Management_Consulting_Inside_Images-02.jpg')} alt='serive-dau-img-2' />
                </Col>
                <Col lg={8} className='dau-points'>
                    <div className='keypoints'>
                        <ul>
                            <li>Problem definition – What problem are we trying to solve? </li>
                            <li>Approach – How are we going to investigate this problem?</li>
                            <li>Data gathering – Find out everything we can about the issue</li>
                            <li>Data Analysis – What does our data show?</li>
                            <li>Advice – What is the best solution according to our data and expertise?</li>
                            <li>Implementation – Enact positive change based on the recommendations.</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
</div>
  )
}
