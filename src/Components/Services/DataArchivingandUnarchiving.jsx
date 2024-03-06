import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const DataArchivingandUnarchiving = () => {
  return (
    <div>
    <div className='service-dau'>
        {/* <img className='w-100' src={require('../Assets/Services/dau-banner-large.jpg')} alt='service-darchving-banner' /> */}
        <div className='' >
            <h1>Data Archiving and Unarchiving</h1>
            <p>Managing the data volumes effectively and efficiently to reduce the data footprint
            </p>
        </div>
    </div>
    <br />
    <div>
        <Container>
            <Row className='my-4 d-flex text-align-left'>
                <Col lg={8} className='daa-desc'>
                    <p>
                        <b>PiLog's MDRM</b> V10 application comes with many features which also includes
                        archiving and unarchiving the Data. You can archive an active Data when you
                        no longer need it. For example, you may want to archive an application at
                        the end of a period of time such as the end of the quarter or end of the year.
                        You can also return an archived application to Active status or you can delete the Data.
                    </p>
                </Col>
                <Col lg={4}>
                    <img className='w-100 rounded-3' src={require('../Assets/Services/dau-img1.jpg')} alt='service-dau1' />
                </Col>
            </Row>
        </Container>
    </div>
    {/* End-Div-1 */}
    <div className='dau-keypoints'>
        <h4>
            PiLog Group can help you avoid common pitfalls by:
        </h4>
        <Container>
            <Row className='mt-4 d-flex justify-content-center align-items-center'>
                <Col lg={4}>
                    <img className='w-100 rounded-3' src={require('../Assets/Services/dau-img2.jpg')} alt='serive-dau-img-2' />
                </Col>
                <Col lg={8} className='dau-points'>
                    <div className='keypoints'>
                        <ul>
                            <li>A user who has the Owner permission on the Data can change its status or delete it.
                            </li>
                            <li>When you archive a Data, all of the application's dimensions and their data chain objects (node types, hierarchy sets, and node sets) are also archived. The default view remains active.
                            </li>
                            <li>When you return an archived Data to Active status, all of the application's dimensions and their data chain objects are restored to the status that they had before the Data was archived.
                            </li>
                            <li>You can make a migration back up before deleting a single Data in case you need to restore it in the future.
                            </li>
                            <li>If an archived dimension displays in the application registration, delete the dimension first and can add/return it to Active status.
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
</div>
  )
}
