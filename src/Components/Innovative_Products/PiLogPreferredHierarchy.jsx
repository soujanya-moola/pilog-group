import React from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'

import pphpart1img from '../Assets/InnovativeProducts/pph/pph-img1.png'
import pphfeature1img from '../Assets/InnovativeProducts/pph/features1.png'
import pphfeature2img from '../Assets/InnovativeProducts/pph/features2.png'
import pphHierarchyimg from '../Assets/InnovativeProducts/pph/hierarchy.png'
import pphExecutionimg from '../Assets/InnovativeProducts/pph/execution.png'
import pphDHSimg from '../Assets/InnovativeProducts/pph/dhs-service.png'

import pphbenifitsimg from '../Assets/InnovativeProducts/pph/benefits.png'
import pphClassificationimg from '../Assets/InnovativeProducts/pph/pph-img2.png'
import { Link } from 'react-router-dom'

export const PiLogPreferredHierarchy = () => {
    return (
        <div>
            <div className='innovate-pph'>
                <div>
                    <h1>PiLog Preferred Hierarchy</h1>

                    <h6>Mapped with Taxonomies to determine Business and Economic activities</h6>

                    <div className='mt-4' >
                        <Button className='btn-ppr mx-2' >
                            <Link to='#' className='ppr-btn-link'><b>Download Brochure</b> </Link></Button>
                        <Button className='btn-ppr mx-2' >
                            <Link to='#' className='ppr-btn-link'><b>Read More</b> </Link></Button>
                    </div>

                </div>
            </div>

            <div className='my-4 py-4'>
                <Container>
                    <h1>Introduction</h1>
                    <Row>
                        <Col lg={7}>
                            <div className='ppr-list'>
                                <p>PPH is the combination of business activities which are the categories and the universal or the standards that are classified by the standard bodies, so it is the combination of both.</p>
                                <p>This is used to determine the business activities, economic activities, and any of the spend categories, spend analysis, sourcing of the information as well as classifying the information for local bodies as well as global bodies or standard bodies.</p>
                                <p>n this case, PPH is the combination of categories, sub-categories which are the business activities that any organization performs be it for products or services aligned or mapped with the classifications such as UNSPSC and ISIC. It is also mapped with taxonomy for describing those activities.</p>

                            </div>
                        </Col>
                        <Col lg={5}>
                            <div>
                                <img className='w-100' src={pphpart1img} alt='ppr-part2' />

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4 feature-part'>
                <Container>
                    <h1>Classification</h1>
                    <Row className='mt-4 pt-2'>
                        <Col lg={5}>
                            <div className='mt-5 pt-4'>
                                <img className='w-100' src={pphClassificationimg} alt='ppr-part2' />

                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className='ppr-list'>
                                <h5>PiLog Preferred Hierarchy is classified into 2 types:</h5>
                                <ul>
                                    <li>SPH - Standard Product Hierarchy</li>
                                    <li>SSH - Standard Service Hierarchy</li>
                                </ul>
                                <div>
                                    <h6>SPH - Standard Product Hierarchy:</h6>
                                    <p>SPH is the classification of a product into its essential components. The hierarchy of the products stretches from basic fundamental needs to specific items that satiate the particular needs. </p>
                                    <p>It comprises of Categories, Sub-Categories, Commodities and each commodity is grouped with product classes. It also comprises of the classifications such as UNSPSC and ISIC. The product classes are linked with characteristics, values, and UoMs.</p>
                                </div>
                                <div>
                                    <h6>SSH - Standard Service Hierarchy:</h6>
                                    <p>The Service hierarchical classification is based on a tree structure where each set of its detailed categories comprises of sub-categories, and each sub-category is linked to the service classes. </p>
                                    <p>All the service classes are assigned with a low level of UNSPSC codes and ISIC Classification. Service classes are linked with characteristics, values, and UoMs.</p>
                                </div>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>



            <div className='my-4 py-4'>
                <Container>
                    <h2>Features</h2>
                    <Row className='py-4 mt-2'>

                        <Carousel className='mca-analisys '>
                            <Carousel.Item className='py-2'>

                                <Row className='my-4'>
                                    <Col lg={5}>
                                        <div className='mt-3 '>
                                            <img className='w-100' src={pphfeature1img} alt='ppr-part2' />

                                        </div>
                                    </Col>
                                    <Col lg={7}>
                                        <div className='ppr-list'>
                                            <ul>
                                                <li>Categories being the broadest classification group and it is at a higher level</li>
                                                <li>Categorization helps unite similar kind of products or services together</li>
                                                <li>It helps the customer to compare the products or services</li>
                                                <li>They are exhaustive and mutually exclusive, i.e., each lower-level entity can only be allocated to one higher-level entity without duplication or omission.</li>
                                                <li>The structure is comparable to other related (national or international) standard classifications.</li>
                                                <li>They are stable i.e., they are not changed too frequently, or without proper review, justification, and documentation.</li>
                                                <li>They are well balanced within the limits set by the principles for the classification i.e., not too many or too few categories. This is usually established by applying significance criteria.</li>
                                                <li>It reflects realities of the field to which they relate</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item className='py-2'>

                                <Row className='my-4'>
                                    <Col lg={5}>
                                        <div className='mt-3 '>
                                            <img className='w-100' src={pphfeature2img} alt='ppr-part2' />

                                        </div>
                                    </Col>
                                    <Col lg={7}>
                                        <div className='ppr-list'>
                                            <ul>
                                                <li>It has become an accepted way of subdividing the overall economy into useful coherent industries that are widely recognized and used in economic analysis, and as such, they have become accepted groupings for data used as indicators of economic activity.</li>
                                                <li>Hierarchical relationships are the primary feature of taxonomies and classifications</li>
                                                <li>It actually has a central role in almost all domain ontologies</li>
                                                <li>Every term in taxonomy has to have a hierarchical relationship to at least one other term within the taxonomy</li>
                                                <li>Provide a vocabulary that can be used for indexing and retrieval</li>
                                                <li>Promote uniformity in term format and in the assignment of terms</li>
                                                <li>Indicate semantic relationships among terms</li>
                                                <li>Provide consistent hierarchies for navigation to help users locate desired content objects</li>
                                                <li>Serve as a search aid in locating content objects</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    

                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4  feature-part'>
                <Container>
                    <h2>Benefits</h2>
                    <Row className='py-4 mt-2'>
                    <Col lg={5}>
                            <div>
                                <img className='w-100' src={pphbenifitsimg} alt='ppr-part2' />

                            </div>
                        </Col>

                        <Col lg={7}>
                            <div className='ppr-list'>
                                <ul> <li>Categorization helps unite similar kind of products or services together</li>
                                        <li>They are stable i.e., they are not changed too frequently, or without proper review, justification, and documentation.</li>
                                        <li>It reflects realities of the field to which they relate</li>
                                        <li>It has become an accepted way of subdividing the overall economy into useful coherent industries that are widely recognized and used in economic analysis, and as such, they have become accepted groupings for data used as indicators of economic activity</li>
                                        <li>It provides a vocabulary that can be used for indexing and retrieval</li>
                                        <li>It promotes uniformity in term format and in the assignment of terms</li>
                                        <li>It provides consistent hierarchies for navigation to help users locate desired content objects</li>
                                    </ul>
                            </div>
                        </Col>
                      

                    </Row>
                </Container>
            </div>

         
            <div className='my-4 py-4'>
                <Container>
                   
                    <Row className='py-4 mt-2'>

                        <Carousel className='mca-analisys '>
                            <Carousel.Item className='py-2'>
                            <h2>Hierarchy Tree Structure</h2>
                                <Row className='my-4'>
                                    <Col>
                                        <div className='mt-3 '>
                                            <img className='w-75' src={pphHierarchyimg} alt='pph-hierarchy' />

                                        </div>
                                    </Col>
                                    
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item className='py-2'>
<h2>Execution Methodology and Work flow for Service Hierarchy</h2>
                                <Row className='my-4'>
                                    <Col>
                                        <div className='mt-3 '>
                                            <img className='w-75' src={pphExecutionimg} alt='pph-execution' />

                                        </div>
                                    </Col>
                                    
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item className='py-2'>
<h2>DHS - Service Master Data Model</h2>
                                <Row className='my-4'>
                                    <Col>
                                        <div className='mt-3 '>
                                            <img className='w-75' src={pphDHSimg} alt='pph-dhs' />

                                        </div>
                                    </Col>
                                    
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    

                    </Row>
                </Container>
            </div>
        </div>
    )
}
