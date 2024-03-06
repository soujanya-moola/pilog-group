import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const FixedAssetRegister = () => {
  return (
    <div>
    <div className='service-far'>
        {/* <img className='w-100' src={require('../Assets/Services/dau-banner-large.jpg')} alt='service-darchving-banner' /> */}
        <div className='' >
            <h1>Fixed Asset Register</h1>
            <p>Managing assets data effectively over its life cycle and assess the financial impact
            </p>
        </div>
    </div>
    <br />
    <div>
        <Container>
            <h4>What is Fixed Asset Register?</h4>
            <Row className='my-4 d-flex text-align-left'>
                <Col lg={8} className='daa-desc'>
                    <p>Fixed asset register contains the list of all the fixed assets a business owns.
                        The purpose behind maintaining is to keep track of book value of assets and 
                        depreciation. It can be equally used to maintain identification of each asset 
                        which can serve the purpose at the time of fixed asset verification.
                         You can find the details like its date of purchase, cost, purchase date, salvage value,
                          depreciation rates, its specifications etc.
                       </p>
                       <p>There are many ways to maintain fixed asset register starting from manual paper register to sophisticated software's as a service by which PiLog recommends its strategic service to maintain Fixed Asset Register.</p>
                </Col>
                <Col lg={4}>
                    <img className='w-100 rounded-3' src={require('../Assets/Services/Fixed_asset_Register_Inside_Images-01.jpg')} alt='service-dau1' />
                </Col>
            </Row>
        </Container>
    </div>
    {/* End-Div-1 */}
    <div className='dau-keypoints'>
        <h4>
        Benefits of maintaining PiLog's Fixed Asset Register:
        </h4>
        <Container>
            <Row className='mt-4 d-flex justify-content-center align-items-center'>
                <Col lg={4}>
                    <img className='w-100 rounded-3' src={require('../Assets/Services/Fixed_asset_Register_Inside_Images-02.jpg')} alt='serive-dau-img-2' />
                </Col>
                <Col lg={8} className='dau-points'>
                    <div className='keypoints'>
                        <ul>
                            <li>Comply with statutory requirements.</li>
                            <li>Track and identify the asset.</li>
                            <li>Security of the Asset specifically to prevent theft.</li>
                            <li>Calculate Depreciation annually.</li>
                            <li>Track Gross Book Value and Net Value of Assets.</li>
                            <li>Assists in Conducting Audit of Assets and Asset Verification.</li>
                            <li>Assists in estimating the future capital investment in fixed assets.</li>
                            <li>In certain countries, subsidies are allowed on certain assets. The value of assets is determined from fixed asset registers.</li>
                            <li>Determining business valuations.</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
</div>
  )
}
