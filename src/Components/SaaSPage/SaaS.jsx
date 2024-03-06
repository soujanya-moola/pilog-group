import React, { useEffect, useState } from 'react'
import subscrptionBanner from '../Assets/SaaS/Subscripition_Banner_C.gif'
import cloudeicon from '../Assets/SaaS/cloud_icon.gif'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import './SaaS.css'
import { CallingIcon } from '../SocialIcons/CallIcon';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const SaaS = () => {

  const [featurename, setFeaturename] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://idxp1.pilogcloud.com/iVisionDXP/getLGFeaturesInfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          // Add any necessary body parameters here
          // body: JSON.stringify({ key: value }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        if (responseData) {
          setResult(responseData.result);
          const featureArr = responseData.featureArr;
          if (featureArr && !Object.keys(featureArr).length === 0) {
            setFeaturename(JSON.stringify(featureArr));
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <img className='w-100' src={subscrptionBanner} alt='subscription-banner' />

      </div>

      <div className='my-4'>
        <Container>
          <Row className='shadow-lg p-3 mb-5 bg-body rounded-4  d-flex justify-content-center align-items-center text-align-center'>
            <Col>
              <div className='d-flex justify-content-center align-items-center text-align-center'>
                <img className='' style={{ width: 55 }} src={cloudeicon} alt='subscription-cloud' />

                <h2 className='text-primary mx-4'>Lean Data Governance</h2>
              </div>
            </Col>
            <Col>
              <div className='justify-content-center align-items-center text-align-center'>
                <h6 className='text-danger'>Read, What the Users are saying</h6>
                <div className=''>
                  <img className='mx-3' style={{ width: 70 }} src={require('../Assets/SaaS/gggg.png')} alt='subscription-cloud' />
                  <img className='mx-3' style={{ width: 55 }} src={require('../Assets/SaaS/customer-first-gartner-blue.png')} alt='subscription-cloud' />
                  <img className='mx-3' style={{ width: 55 }} src={require('../Assets/SaaS/software_review.png')} alt='subscription-cloud' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='my-4'>
        <Container>
          <Row className='d-flex justify-content-center align-items-center text-align-center'>
            <Col>
              <div className='shadow-lg bg-body rounded-4'>


                <div className='d-flex py-3 mt-2 saas-card-icons'>
                  <div className='bg-danger  schedule-demo'>
                    <h6 className='d-flex  justify-content-center align-items-center text-align-cente ' ><CalendarMonthSharpIcon />Schedule a Demo</h6>
                  </div>
                  <div className='d-flex saas-card-icons'>
                    <img className='mx-2' style={{ width: 30 }} src={require('../Assets/SaaS/gggg.png')} alt='subscription-cloud' />
                    <img className='mx-2' style={{ width: 25 }} src={require('../Assets/SaaS/customer-first-gartner-blue.png')} alt='subscription-cloud' />
                    <img className='mx-2' style={{ width: 25 }} src={require('../Assets/SaaS/software_review.png')} alt='subscription-cloud' />
                  </div>
                </div>

                <div>
                  <h3 className='subscription-heading'>Basic</h3>
                  <h5 className='text-danger'>Only ONE Domain</h5>
                  <p>5 Users Packages</p>
                  <p>Ideal for Small Businesses</p>

                  <h6>[Annual Subscription - Auto Renews]</h6>
                  <Button className='purchase-btn'><ShoppingCartSharpIcon />Buy Now</Button>

                  <div className='Subscription-list'>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>  ISO Compliant Governance Processes</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>Industry-proven Best Practices</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>Configure to use in <KeyboardArrowLeftSharpIcon />60 mins.</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>IGartner Recognized MDM Solution</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>Export Your Data in</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>Robotic Process Automation & Data Quality Assesment [ AI ]</p>

                  </div>
                  <div className='subscription-icons'>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_ProductMaster_.png')} alt='subscription-cloud' />
                      <p>Product</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_ServiceMaster_.png')} alt='subscription-cloud' />
                      <p>Services</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_PartnerMaster_.png')} alt='subscription-cloud' />
                      <p>Partner</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_Vendor_.png')} alt='subscription-cloud' />
                      <p>Vendor</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_Customer_.png')} alt='subscription-cloud' />
                      <p>Customer</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/assest.png')} alt='subscription-cloud' />
                      <p>Assets</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_Employee_.png')} alt='subscription-cloud' />
                      <p>Employee</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_ProductMaster_.png')} alt='subscription-cloud' />
                      <p>Product</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS//_iSPIR_.png')} alt='subscription-cloud' />
                      <p>iSPIR</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_eBom_.png')} alt='subscription-cloud' />
                      <p>eBom</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_fBom_.png')} alt='subscription-cloud' />
                      <p>fBom</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_mBom_.png')} alt='subscription-cloud' />
                      <p>mBom</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/mint_task_.png')} alt='subscription-cloud' />
                      <p>Mint-Task</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_PM Work_.png')} alt='subscription-cloud' />
                      <p>Work Center</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/measure_.png')} alt='subscription-cloud' />
                      <p>Measure Point</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/task_.png')} alt='subscription-cloud' />
                      <p>Task-List</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/mss.png')} alt='subscription-cloud' />
                      <p>MSS</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/leave_.png')} alt='subscription-cloud' />
                      <p>Leave</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/incident_.png')} alt='subscription-cloud' />
                      <p>Incident</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className='shadow-lg bg-body rounded-4'>


                <div className='d-flex py-3 mt-2 saas-card-icons'>
                  <div className='bg-danger schedule-demo'>
                    <h6 className='d-flex justify-content-center align-items-center text-align-cente ' ><CalendarMonthSharpIcon />Schedule a Demo</h6>
                  </div>
                  <div className='d-flex justify-content-center align-items-center text-align-right'>
                    <img className='mx-2' style={{ width: 30 }} src={require('../Assets/SaaS/gggg.png')} alt='subscription-cloud' />
                    <img className='mx-2' style={{ width: 25 }} src={require('../Assets/SaaS/customer-first-gartner-blue.png')} alt='subscription-cloud' />
                    <img className='mx-2' style={{ width: 25 }} src={require('../Assets/SaaS/software_review.png')} alt='subscription-cloud' />
                  </div>
                </div>

                <div>
                  <h3 className='subscription-heading'>Professional</h3>
                  <h5 className='text-danger'>Upto THREE Domains</h5>
                  <p>20 Users Packages</p>
                  <p>Ideal for Small to Mid Size Enterprises</p>

                  <h6>[Annual Subscription - Auto Renews]</h6>
                  <Button className='purchase-btn'><ShoppingCartSharpIcon />Buy Now</Button>

                  <div className='Subscription-list'>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>  ISO Compliant Governance Processes</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>Industry-proven Best Practices</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>Configure to use in <KeyboardArrowLeftSharpIcon />120 mins.</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>IGartner Recognized MDM Solution</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>Use API/Export the data </p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>Robotic Process Automation & Data Quality Assesment [ AI ]</p>

                  </div>
                  <div className='subscription-icons'>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_ProductMaster_.png')} alt='subscription-cloud' />
                      <p>Product</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_ServiceMaster_.png')} alt='subscription-cloud' />
                      <p>Services</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_PartnerMaster_.png')} alt='subscription-cloud' />
                      <p>Partner</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_Vendor_.png')} alt='subscription-cloud' />
                      <p>Vendor</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_Customer_.png')} alt='subscription-cloud' />
                      <p>Customer</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/assest.png')} alt='subscription-cloud' />
                      <p>Assets</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_Employee_.png')} alt='subscription-cloud' />
                      <p>Employee</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_ProductMaster_.png')} alt='subscription-cloud' />
                      <p>Product</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS//_iSPIR_.png')} alt='subscription-cloud' />
                      <p>iSPIR</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_eBom_.png')} alt='subscription-cloud' />
                      <p>eBom</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_fBom_.png')} alt='subscription-cloud' />
                      <p>fBom</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_mBom_.png')} alt='subscription-cloud' />
                      <p>mBom</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/mint_task_.png')} alt='subscription-cloud' />
                      <p>Mint-Task</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_PM Work_.png')} alt='subscription-cloud' />
                      <p>Work Center</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/measure_.png')} alt='subscription-cloud' />
                      <p>Measure Point</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/task_.png')} alt='subscription-cloud' />
                      <p>Task-List</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/mss.png')} alt='subscription-cloud' />
                      <p>MSS</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/leave_.png')} alt='subscription-cloud' />
                      <p>Leave</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/incident_.png')} alt='subscription-cloud' />
                      <p>Incident</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className='shadow-lg bg-body rounded-4'>


                <div className='d-flex py-3 mt-2 saas-card-icons'>
                  <div className='bg-danger schedule-demo'>
                    <h6 className='d-flex justify-content-center align-items-center text-align-cente ' ><CalendarMonthSharpIcon />Schedule a Demo</h6>
                  </div>
                  <div className='d-flex justify-content-center align-items-center text-align-right'>
                    <img className='mx-2' style={{ width: 30 }} src={require('../Assets/SaaS/gggg.png')} alt='subscription-cloud' />
                    <img className='mx-2' style={{ width: 25 }} src={require('../Assets/SaaS/customer-first-gartner-blue.png')} alt='subscription-cloud' />
                    <img className='mx-2' style={{ width: 25 }} src={require('../Assets/SaaS/software_review.png')} alt='subscription-cloud' />
                  </div>
                </div>

                <div>
                  <h3 className='subscription-heading'>Enterprise</h3>
                  <h5 className='text-danger'>ANY Available Domains</h5>
                  <p>100 Users or More</p>
                  <p>Ideal for Large Enterprise Businesses</p>

                  <h6>[Annual Subscription - Auto Renews]</h6>
                  <Button className='purchase-btn'>Call Request</Button>

                  <div className='Subscription-list'>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>  ISO Compliant Governance Processes</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>Industry-proven Best Practices</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>IGartner Recognized MDM Solution</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>Real Time Integration With ERP</p>
                    <p><span className='text-success fw-bold fs-5'>✔ </span>Robotic Process Automation & Data Quality Assesment [ AI ]</p>

                  </div>
                  <div className='subscription-icons mt-4 pt-3'>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_ProductMaster_.png')} alt='subscription-cloud' />
                      <p>Product</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_ServiceMaster_.png')} alt='subscription-cloud' />
                      <p>Services</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_PartnerMaster_.png')} alt='subscription-cloud' />
                      <p>Partner</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_Vendor_.png')} alt='subscription-cloud' />
                      <p>Vendor</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_Customer_.png')} alt='subscription-cloud' />
                      <p>Customer</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/assest.png')} alt='subscription-cloud' />
                      <p>Assets</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_Employee_.png')} alt='subscription-cloud' />
                      <p>Employee</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_ProductMaster_.png')} alt='subscription-cloud' />
                      <p>Product</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS//_iSPIR_.png')} alt='subscription-cloud' />
                      <p>iSPIR</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_eBom_.png')} alt='subscription-cloud' />
                      <p>eBom</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_fBom_.png')} alt='subscription-cloud' />
                      <p>fBom</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_mBom_.png')} alt='subscription-cloud' />
                      <p>mBom</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/mint_task_.png')} alt='subscription-cloud' />
                      <p>Mint-Task</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/_PM Work_.png')} alt='subscription-cloud' />
                      <p>Work Center</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/measure_.png')} alt='subscription-cloud' />
                      <p>Measure Point</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/task_.png')} alt='subscription-cloud' />
                      <p>Task-List</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/mss.png')} alt='subscription-cloud' />
                      <p>MSS</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/leave_.png')} alt='subscription-cloud' />
                      <p>Leave</p>
                    </div>
                    <div className='s-icon'>
                      <img className='mx-2' style={{ width: 35 }} src={require('../Assets/SaaS/incident_.png')} alt='subscription-cloud' />
                      <p>Incident</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      <div className='my-4 py-4'>
        <Container>
          <div className='my-4'>
            <h2>Frequently Asked Questions</h2>
          </div>
          <Row>
            <Col lg={10}>
              <Accordion>
                <Accordion.Item eventKey="0" className='m-3'>
                  <Accordion.Header><h3 className='faq-headind'> What is Lean Govarnance Data?</h3></Accordion.Header>

                  <Accordion.Body>
                    <div className='d-flex saas-faq-content'>
                      <h5 className='faq-content'>
                        A simplified version of Master Data Management(MDM) with enriched User Experience, hosted on Cloud platform with high availability.

                      </h5>
                      <div >
                        <Link to="https://www.youtube.com/watch?v=zh3iXnS3FBI" target='blank'><Button className='youtube-btn' ><PlayArrowIcon /></Button></Link>

                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='m-3 border'>
                  <Accordion.Header><h3 className='faq-headind'> On-Cloud vs On-Premise - What’s the right plan?</h3></Accordion.Header>

                  <Accordion.Body>
                    <div className='d-flex saas-faq-content'>
                      <h6 className='faq-content'>
                        'Choose the Best Plan' is a way to help/guide what's best for the organization, navigate through the provided guide to seek assistance on selecting the right version/plan.
                      </h6>
                      <div >
                        <Link to="https://www.youtube.com/watch?v=zh3iXnS3FBI" target='blank'><Button className='youtube-btn' ><PlayArrowIcon /></Button></Link>

                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='m-3 border'>
                  <Accordion.Header><h3 className='faq-headind'> Can Lean Data Governance On-Cloud be customized?</h3></Accordion.Header>

                  <Accordion.Body>

                    <div className='d-flex saas-faq-content'>
                      <h6 className='faq-content'>
                        As per general practice Cloud version is non customizable with the exception of the ‘Enterprise' model which can be further personalized.
                      </h6>
                      <div >
                        <Link to="https://www.youtube.com/watch?v=GApiNs7qkno" target='blank'><Button className='youtube-btn' ><PlayArrowIcon /></Button></Link>

                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='m-3 border'>
                  <Accordion.Header><h3 className='faq-headind'>Is data hosted safely within this Cloud platform?</h3></Accordion.Header>

                  <Accordion.Body>
                    <div className='d-flex saas-faq-content'>
                      <h6 className='faq-content'>
                        PiLog follows all the international standards to safeguard data security. Indeed also stated within the subscription terms and conditions.
                      </h6>
                      <div >
                        <Link to="https://www.youtube.com/watch?v=OQX_RDNdV1s" target='blank'><Button className='youtube-btn' ><PlayArrowIcon /></Button></Link>

                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='m-3 border'>
                  <Accordion.Header><h3 className='faq-headind'> Shall new functionality and upgrades be provided within the Cloud version?</h3></Accordion.Header>

                  <Accordion.Body>
                    <div className='d-flex saas-faq-content'>
                      <h6 className='faq-content'>
                        Absolutely, PiLog shall ensure to keep enriching new functionality relevant to each of the offering as part of the subscription service.
                      </h6>
                      <div >
                        <Link to="https://www.youtube.com/watch?v=xU_Hoq5N35I" target='blank'><Button className='youtube-btn' ><PlayArrowIcon /></Button></Link>

                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='m-3 border'>
                  <Accordion.Header><h3 className='faq-headind'>In case customer opts to terminate the service, how is subscription fee impacted?</h3></Accordion.Header>

                  <Accordion.Body>
                    <div className='d-flex saas-faq-content'>
                      <h6 className='faq-content'>
                        In line to the subscription terms and conditions, any fees eligible for refund shall be returned within within 3 working days from cancellation.
                      </h6>
                      <div >
                        <Link to="https://www.youtube.com/watch?v=_MJtKSAja84" target='blank'><Button className='youtube-btn' ><PlayArrowIcon /></Button></Link>

                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className='m-3 border'>
                  <Accordion.Header><h3 className='faq-headind'>What happens with the data residing in the Cloud once subscription expires?</h3></Accordion.Header>

                  <Accordion.Body>
                    <div className='d-flex saas-faq-content'>
                      <h6 className='faq-content'>
                        The entire customer data will be shared in xlsx files and retained only for 30 days post subscription expiry date.
                      </h6>
                      <div >
                        <Link to="https://www.youtube.com/watch?v=_MJtKSAja84" target='blank'><Button className='youtube-btn' ><PlayArrowIcon /></Button></Link>

                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>


              </Accordion>
            </Col>


          </Row>
        </Container>

      </div>
      <div>
        <div>
          {/* Render your components and utilize state variables */}
          <div id="scbscriptionid">{result}</div>
          {/* Add logic to handle rendering based on featurename */}
        </div>
      </div>
    </div>
  )
}
