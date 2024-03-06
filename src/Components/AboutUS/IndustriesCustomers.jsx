import React from 'react'
// import './About.css'
import { Col, Container, Row } from 'react-bootstrap'


export const IndustriesCustomers = () => {
    return (
        <div>
            <div className='position-relative text-align-center text-light'>
                <img className='w-100' src={require('../Assets/AboutUS/Corporate_Banners.jpg')} alt='Innovative products-mdo-banner' />
                <div className='ppo position-absolute top-50 left-15 transform-translate(-50%, -50%)' style={{ left: 300 }}>
                    <h1>
                        Industries and Customers
                    </h1>
                </div>
            </div>

            <div className='my-5'>
                <Container>
                    <div className='services'>
                        <p>Airport and Aviation</p>
                        <span>|</span>
                        <p>Cement</p>
                        <span>|</span>
                        <p>Chemicals and Refineries</p>
                        <span>|</span>
                        <p>Defence</p>
                        <span>|</span>
                        <p>Education</p>
                        <span>|</span>
                        <p>Energy and Utilities</p>
                        <span>|</span>
                        <p>Food and Beverages</p>
                        <span>|</span>
                        <p>Iron and Steel</p>
                        <span>|</span>
                        <p>Manufacturing</p>
                        <span>|</span>
                        <p>Mining</p>
                        <span>|</span>
                        <p>Oil and Gas</p>
                        <span>|</span>
                        <p>Telecommunications</p>
                        <span>|</span>
                        <p>Textile</p>
                        <span>|</span>
                        <p>Transport</p>

                    </div>
                </Container>
            </div>

            <div className='bg-light my-4 py-5'>
                <Container>
                    <div>
                        <h2>Airport and Aviation</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col lg={3} className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/ABU_Dhabi_Airports.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col lg={3} className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Al_Maktoum_Airports.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col lg={3} className='mt-3'>
                        <div>
                            <img className='w-75' src={require('../Assets/ClientLogos/Client-Logos-09.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4'>
                <Container>
                    <div>
                        <h2>Cement</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/Birla_Cement.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Birla_White_Cement.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Aditya_MP_Birla Group.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/Nuvoco.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/utcl.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/PPC_Cement.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/logos-106.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/logos-110.png')} alt='airpot-industry-1'/>
                        </div>
                       
                        </Col>
                        <Col className='mt-3'>
                       
                        <div>
                            <img src={require('../Assets/ClientLogos/dalmia_logo.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className='bg-light my-4 py-4'>
                <Container>
                    <div>
                        <h2>Chemicals and Refineries</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/Aramco.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Arya.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/HZL.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/IBN_Rushd.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/IBN_Zdhr.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Kemya.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Natref.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Petrokemya.jpg')} alt='airpot-industry-1'/>
                        </div>
                       
                        </Col>
                        <Col className='mt-3'>
                       
                        <div>
                            <img src={require('../Assets/ClientLogos/Piramal.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Polifin.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Sabic.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Sable.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Sabtank.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Sadara.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Sahara.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/SAS.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Sasol.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Sastech.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Saudi-Kayan.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/SCI.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Sharq.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Sipchem.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Technip.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Yansab.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/orpic.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/logos-109.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>



                    </Row>
                </Container>
            </div>

            <div className=' my-4 py-4'>
                <Container>
                    <div>
                        <h2>Defence</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col>
                        <div>
                            <img className='w-50' src={require('../Assets/ClientLogos/Client-Logos-10.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <img className='w-50' src={require('../Assets/ClientLogos/Client-Logos-12.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <img className='w-50' src={require('../Assets/ClientLogos/royal_commision_logo.jpg')} alt='airpot-industry-1'/>
                        </div> 
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='bg-light my-4 py-4'>
                <Container>
                    <div>
                        <h2>Education</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col>
                        <div>
                            <img src={require('../Assets/ClientLogos/GEMS_Schools.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4'>
                <Container>
                    <div>
                        <h2>Energy, Utilities and Nuclear</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/adani.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Cairn.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Eskom.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/Marafiq.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Nomac.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/SAMSUNG_ICAD_WTP.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/logos-115.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/logo_d40ddd8d-bc6a-4289-ae4d-6e29aaf65c6b_CLP.jpg')} alt='airpot-industry-1'/>
                        </div>
                       
                        </Col>
                        <Col className='mt-3'>
                       
                        <div>
                            <img src={require('../Assets/ClientLogos/shyam_logo.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/nwc_logo.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/rawec_logo.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/taqa_logo.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className='bg-light my-4 py-4'>
                <Container>
                    <div>
                        <h2>Food and Beverages</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/ABI.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/adani.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Coca_Cola.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Kgalagadi.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Swaziland.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Tanzania.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/ZB.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>

                       
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4'>
                <Container>
                    <div>
                        <h2>Iron and Steel</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/ArcelorMittal.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Bahrain_Steel.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Columbus_Stainless.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/Emirates_Steel.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Foulath.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/LOGO-22.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Severstal.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/SULB.png')} alt='airpot-industry-1'/>
                        </div>                       
                        </Col>
                        <Col className='mt-3'>                       
                        <div>
                            <img src={require('../Assets/ClientLogos/jsw_logo.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/vedanta_logo.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/qafac_logo.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/sar_logo.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className='bg-light my-4 py-4'>
                <Container>
                    <div>
                        <h2>Manufacture</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/LOGO-42.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/npcc.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/jg_logo.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/sankyu_logo.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/olayan_logo.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/tech_logo.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                      

                       
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4'>
                <Container>
                    <div>
                        <h2>Mining</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/Angla_American.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Anglo_Gold_Ashanti.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Balco.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/Bhpdilliton.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Cola_India.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/ERG.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Harmony.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Harmony-Gold.png')} alt='airpot-industry-1'/>
                        </div>       
                        </Col>
                        <Col className='mt-3'>                       
                        <div>
                            <img src={require('../Assets/ClientLogos/Impala.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/JSL.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Lonmin.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/MAADEN.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Nordgold.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/PMC.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Richards.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img className='w-100' src={require('../Assets/ClientLogos/Client-Logos-14.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Sasol.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Severstal.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Vale.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Vedanta.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Xstrata.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='bg-light my-4 py-4'>
                <Container>
                    <div>
                        <h2>Oil and Gas</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col className='mt-3'>
                        <div className='client-logos'>
                            <img src={require('../Assets/ClientLogos/ADNOC.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div className='client-logos'>
                            <img src={require('../Assets/ClientLogos/BP.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div className='client-logos'>
                            <img src={require('../Assets/ClientLogos/Cairn.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div className='client-logos'>
                            <img src={require('../Assets/ClientLogos/CCED.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div className='client-logos'>
                            <img src={require('../Assets/ClientLogos/Chevron.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div className='client-logos'>
                            <img src={require('../Assets/ClientLogos/KJO.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div className='client-logos'>
                            <img src={require('../Assets/ClientLogos/Noble-Energy.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div className='client-logos'>
                            <img className='w-100' src={require('../Assets/ClientLogos/Client-Logos-13.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div className='client-logos'>
                            <img src={require('../Assets/ClientLogos/Client_Logos_02-08.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div className='client-logos'>
                            <img src={require('../Assets/ClientLogos/neom_logo.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col className='mt-3'>
                        <div className='client-logos'>
                            <img src={require('../Assets/ClientLogos/advanced_logo.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-5'>
                <Container>
                    <div>
                        <h2>Telecommunications</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col lg={3} className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/LOGO-41.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col lg={3}  className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/samsung_logo.jpg')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

            <div className='bg-light my-4 py-5'>
                <Container>
                    <div>
                        <h2>Textile</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col lg={3} className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/AYM_SYNTEX.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col lg={3}  className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/Invista.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        <Col lg={3}  className='mt-3'>
                        <div>
                            <img src={require('../Assets/ClientLogos/LOGO-61.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-5'>
                <Container>
                    <div>
                        <h2>Transport</h2>
                    </div>
                    <Row style={{justifyContent:'center', alignItems:'center', textAlign:'center'}} className='mt-5'>
                        <Col lg={3} className='mt-3'>
                        <div>
                            <img  src={require('../Assets/ClientLogos/sar_logo.png')} alt='airpot-industry-1'/>
                        </div>
                        </Col>
                       
                        
                    </Row>
                </Container>
            </div>
        </div>
    )
}
