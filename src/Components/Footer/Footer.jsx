import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Footer.css'
import { IconButton, Tooltip, tooltipClasses } from '@mui/material'


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { styled } from '@mui/material/styles';

export const Footer = () => {



    return (
        <div>


            <div className='footer-part' >
                <Container>
                    <Row>
                        <Col lg='4'>
                            <div className='footer-main'>
                                <img className='footer-logo' src={require('../Assets/FooterImages/logo-footer.png')} alt='footer-logo' />
                                <h6>E-mail: info@piloggroup.org</h6>
                                <h6>Click here for Global Contacts</h6>
                                <Form className='px-2' inline>
                                    <Row>
                                        <Col xs="auto">
                                            <Form.Control
                                                type="text"
                                                placeholder="Search"
                                                className=" mr-sm-2"
                                            />
                                        </Col>
                                        <Col xs="auto">
                                            <Button className='footer-btn' type="submit">Subscribe</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>

                        </Col>
                        <Col lg='6'>
                            <div className='quick-links'>
                                <h5>QUICK LINKS</h5>

                                <Row>
                                    <Col lg={4} md={6} xs={12}>
                                        <div>
                                            <p>Corporate</p>
                                            <p>Zonal Offices</p>
                                            <p>Industries/Customers</p>
                                            <p>Partners</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={12}>
                                        <div>
                                            <p>Publications</p>
                                            <p>Contact Us</p>
                                            <p>Privacy Policy</p>

                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={12}>
                                        <div>
                                            <p>Value Propositions</p>
                                            <p>Innovative Products</p>
                                            <p>Services</p>

                                        </div>

                                    </Col>


                                </Row>

                            </div>
                        </Col>
                        <Col lg='2' xs='8'>
                            <div className='footer-sub'>
                                <img className='footer-sub-img mt-5 py-4 w-50' src={require('../Assets/FooterImages/customer-first-gartner-blue.png')} />

                            </div>
                        </Col>

                    </Row>
                </Container>

            </div>
            <div className='bg-dark text-white'>
                <Container >
                    <Row>
                        <Col className='mt-4 me-5 pe-5'>
                            <h6>© 2024 PiLog Group. All Rights Reserved</h6>
                        </Col>
                        <Col className='mt-3 '>
                            {/* <Tooltip arrow title="Facebook" size="lg" placement="top" variant="solid"
                                slotProps={{
                                    popper: {
                                        sx: {
                                            [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                                            {
                                                marginTop: '0px',
                                            },
                                            [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                                            {
                                                marginBottom: '0px',
                                            },

                                        },
                                    },
                                }}
                            >
                                <IconButton >
                                    <FacebookIcon className='footer-icons' />
                                </IconButton>
                            </Tooltip> */}
                            <div className="tooltips">
                        <FacebookIcon className='footer-icons' />
                                <div className="tooltiptext">Facebook</div>
                            </div>
                            <div className="tooltips">
                        <TwitterIcon className='footer-icons' />
                                <div className="tooltiptext">Twitter</div>
                            </div>
                            <div className="tooltips">
                        <InstagramIcon className='footer-icons' />
                                <div className="tooltiptext">Instagram</div>
                            </div>
                            <div className="tooltips">
                        <YouTubeIcon className='footer-icons' />
                                <div className="tooltiptext">YouTube</div>
                            </div>
                            <div className="tooltips">
                        <LinkedInIcon className='footer-icons' />
                                <div className="tooltiptext">Linked In</div>
                            </div>
                           
                        </Col>
                       
                    </Row>
                </Container>
            </div>
        </div>
    )
}
